document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const pillsContainer = document.getElementById('pills');
    const countDisplay = document.getElementById('count-display');

    if (typeof allBirds === 'undefined') return;

    const families = [...new Set(allBirds.map(b => b.family))];
    let activeFamily = 'All';
    let activeQuery = '';
    const imgCache = new Map();

    // ── Image queue ──────────────────────────────────
    const queue = [];
    let active = 0;
    const MAX_ACTIVE = 4;
    const BATCH_GAP = 1500;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const t = e.target;
                const s = t.dataset.scientific;
                const img = t.querySelector('.bird-thumb-img');
                if (s && img) enqueue(s, img, t);
                observer.unobserve(t);
            }
        });
    }, { rootMargin: '200px' });

    function enqueue(scientific, imgEl, thumbEl) {
        if (imgCache.has(scientific)) {
            const url = imgCache.get(scientific);
            if (url && imgEl.isConnected) {
                applyImg(imgEl, thumbEl, url);
            } else if (!url && thumbEl.isConnected) {
                fail(thumbEl);
            }
            return;
        }
        queue.push({ scientific, imgEl, thumbEl, retries: 3 });
        thumbEl.classList.add('loading');
        tick();
    }

    function tick() {
        while (queue.length && active < MAX_ACTIVE) {
            const item = queue.shift();
            active++;
            fetchImg(item).finally(() => {
                active--;
                setTimeout(tick, BATCH_GAP);
            });
        }
    }

    async function fetchImg({ scientific, imgEl, thumbEl, retries }) {
        if (imgCache.has(scientific)) {
            const url = imgCache.get(scientific);
            if (url && imgEl.isConnected) applyImg(imgEl, thumbEl, url);
            else if (thumbEl.isConnected) fail(thumbEl);
            return;
        }
        try {
            const res = await fetch(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(scientific)}`
            );
            if (res.status === 429 && retries > 0) {
                const delays = [1000, 3000, 5000];
                await sleep(delays[3 - retries] || 5000);
                queue.push({ scientific, imgEl, thumbEl, retries: retries - 1 });
                return;
            }
            if (!res.ok) throw Error();
            const data = await res.json();
            const url = data.thumbnail ? data.thumbnail.source : null;
            imgCache.set(scientific, url);
            if (url && imgEl.isConnected) applyImg(imgEl, thumbEl, url);
            else if (thumbEl.isConnected) fail(thumbEl);
        } catch {
            if (thumbEl.isConnected) fail(thumbEl);
        }
    }

    function applyImg(imgEl, thumbEl, url) {
        imgEl.onload = () => {
            thumbEl.classList.remove('loading');
            thumbEl.classList.add('loaded');
        };
        imgEl.onerror = () => {
            thumbEl.classList.remove('loading');
            thumbEl.classList.add('failed');
        };
        imgEl.src = url;
    }

    function fail(thumbEl) {
        thumbEl.classList.remove('loading');
        thumbEl.classList.add('failed');
    }

    function sleep(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    // ── Pills ────────────────────────────────────────
    families.forEach(f => {
        const btn = document.createElement('button');
        btn.className = 'pill';
        btn.dataset.family = f;
        btn.textContent = f;
        pillsContainer.appendChild(btn);
    });

    pillsContainer.addEventListener('click', e => {
        const pill = e.target.closest('.pill');
        if (!pill) return;
        pillsContainer.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFamily = pill.dataset.family;
        render();
    });

    // ── Search ───────────────────────────────────────
    searchInput.addEventListener('input', () => {
        activeQuery = searchInput.value.trim().toLowerCase();
        searchClear.classList.toggle('visible', searchInput.value.length > 0);
        render();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        activeQuery = '';
        searchClear.classList.remove('visible');
        render();
        searchInput.focus();
    });

    // ── Filter ───────────────────────────────────────
    function getFiltered() {
        return allBirds.filter(bird => {
            const matchFamily = activeFamily === 'All' || bird.family === activeFamily;
            const matchQuery = !activeQuery
                || bird.english.toLowerCase().includes(activeQuery)
                || bird.scientific.toLowerCase().includes(activeQuery)
                || bird.nepali.toLowerCase().includes(activeQuery)
                || (bird.family || '').toLowerCase().includes(activeQuery);
            return matchFamily && matchQuery;
        });
    }

    // ── Render ───────────────────────────────────────
    function render() {
        const filtered = getFiltered();
        book.innerHTML = '';
        countDisplay.textContent = filtered.length;

        if (filtered.length === 0) {
            book.innerHTML = `
                <div class="empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <p>No birds matched your search.</p>
                </div>`;
            return;
        }

        const grouped = {};
        filtered.forEach(bird => {
            const fam = bird.family || 'Other';
            if (!grouped[fam]) grouped[fam] = [];
            grouped[fam].push(bird);
        });

        const showGroups = !activeQuery && activeFamily === 'All';
        let idx = 1;

        if (showGroups) {
            Object.entries(grouped).forEach(([fam, birds]) => {
                const section = document.createElement('div');
                section.className = 'family-section';
                section.innerHTML = `
                    <div class="family-heading">
                        <h2>${fam}</h2>
                        <span class="family-count">${birds.length}</span>
                    </div>`;
                birds.forEach(bird => {
                    section.appendChild(makeEntry(bird, idx++));
                });
                book.appendChild(section);
            });
        } else {
            filtered.forEach(bird => {
                book.appendChild(makeEntry(bird, idx++));
            });
        }
    }

    // ── Entry builder ────────────────────────────────
    function makeEntry(bird, idx) {
        const entry = document.createElement('div');
        entry.className = 'bird-entry';

        const num = document.createElement('div');
        num.className = 'bird-num';
        num.textContent = idx;

        const thumb = document.createElement('div');
        thumb.className = 'bird-thumb';
        thumb.dataset.scientific = bird.scientific;
        const img = document.createElement('img');
        img.className = 'bird-thumb-img';
        img.alt = bird.english;
        img.loading = 'lazy';
        thumb.appendChild(img);
        observer.observe(thumb);

        const content = document.createElement('div');
        content.className = 'bird-content';
        content.innerHTML = `
                <div class="bird-names">
                    <span class="bird-english">${bird.english}</span>
                    <span class="bird-scientific">${bird.scientific}</span>
                    <span class="bird-nepali">${bird.nepali}</span>
                </div>
                <div class="bird-detail">${bird.details || ''}</div>`;

        entry.appendChild(num);
        entry.appendChild(thumb);
        entry.appendChild(content);

        return entry;
    }

    render();
});
