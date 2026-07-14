document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const searchInput = document.getElementById('searchInput');
    const pillsContainer = document.getElementById('pills');
    const countDisplay = document.getElementById('count-display');

    if (typeof allBirds === 'undefined') return;

    const total = allBirds.length;
    const families = ['All', ...new Set(allBirds.map(b => b.family))];

    let activeFamily = 'All';
    let activeQuery = '';
    const imgCache = new Map();

    // Build family pills
    families.forEach(f => {
        if (f === 'All') return;
        const btn = document.createElement('button');
        btn.className = 'pill';
        btn.dataset.family = f;
        btn.textContent = f;
        pillsContainer.appendChild(btn);
    });

    pillsContainer.addEventListener('click', e => {
        const pill = e.target.closest('.pill');
        if (!pill) return;
        document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFamily = pill.dataset.family;
        render();
    });

    searchInput.addEventListener('input', e => {
        activeQuery = e.target.value.trim().toLowerCase();
        render();
    });

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

    function render() {
        const filtered = getFiltered();
        book.innerHTML = '';
        countDisplay.textContent = filtered.length;

        if (filtered.length === 0) {
            book.innerHTML = `
                <div class="empty">
                    <div class="empty-icon">🔍</div>
                    <p>No birds matched your search.</p>
                </div>`;
            return;
        }

        // Group by family
        const grouped = {};
        filtered.forEach(bird => {
            const fam = bird.family || 'Other';
            if (!grouped[fam]) grouped[fam] = [];
            grouped[fam].push(bird);
        });

        const showGroups = !activeQuery && activeFamily === 'All';
        let globalIdx = 1;

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
                    section.appendChild(makeEntry(bird, globalIdx++));
                });

                book.appendChild(section);
            });
        } else {
            filtered.forEach(bird => {
                book.appendChild(makeEntry(bird, globalIdx++));
            });
        }
    }

    function makeEntry(bird, idx) {
        const entry = document.createElement('div');
        entry.className = 'bird-entry';

        const num = document.createElement('div');
        num.className = 'bird-num';
        num.textContent = idx;

        const thumb = document.createElement('div');
        thumb.className = 'bird-thumb';
        const img = document.createElement('img');
        img.className = 'bird-thumb-img';
        img.alt = bird.english;
        img.loading = 'lazy';
        img.onerror = () => { img.style.display = 'none'; };
        thumb.appendChild(img);

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

        loadBirdImage(bird.scientific, img);
        return entry;
    }

    function loadBirdImage(scientific, imgEl) {
        if (imgCache.has(scientific)) {
            const url = imgCache.get(scientific);
            if (url) imgEl.src = url;
            return;
        }

        imgCache.set(scientific, null);

        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(scientific)}`)
            .then(r => r.ok ? r.json() : Promise.reject())
            .then(data => {
                const url = data.thumbnail ? data.thumbnail.source : null;
                imgCache.set(scientific, url);
                if (url && imgEl.isConnected) imgEl.src = url;
            })
            .catch(() => {});
    }

    render();
});
