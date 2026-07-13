document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('bird-grid');
    const searchInput = document.getElementById('searchInput');
    const totalCountEl = document.getElementById('total-count');
    const heroSeenEl = document.getElementById('hero-seen');
    const searchCount = document.getElementById('search-count');
    const resultsLabel = document.getElementById('results-label');
    const emptyState = document.getElementById('empty-state');
    const filterPillsContainer = document.getElementById('filter-pills');
    const seenFilterBtn = document.getElementById('seen-filter-btn');
    const resetBtn = document.getElementById('reset-btn');
    const dashSeenCount = document.getElementById('seen-count');
    const dashTotal = document.getElementById('dash-total');
    const dashFill = document.getElementById('dash-progress-fill');
    const dashPct = document.getElementById('dash-pct');
    const dashBadges = document.getElementById('dash-badges');
    const dashMessage = document.getElementById('dash-message');
    const toast = document.getElementById('toast');

    if (typeof allBirds === 'undefined') {
        grid.innerHTML = '<p style="color:red;padding:2rem">Error loading bird data.</p>';
        return;
    }

    const STORAGE_KEY = 'cnp_seen_birds';
    const total = allBirds.length;

    // ── Load seen set from localStorage ──────────────────────
    let seenSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));

    // ── State ─────────────────────────────────────────────────
    let activeFamily = 'All';
    let activeQuery = '';
    let showSeenOnly = false;

    // ── Milestones ────────────────────────────────────────────
    const milestones = [
        { count: 10,  label: '🐣 Fledgling',   color: '#a3e635', bgColor: 'rgba(163,230,53,0.15)' },
        { count: 25,  label: '🌿 Spotter',      color: '#4ade80', bgColor: 'rgba(74,222,128,0.15)' },
        { count: 50,  label: '🦜 Observer',     color: '#38bdf8', bgColor: 'rgba(56,189,248,0.15)' },
        { count: 100, label: '🦅 Expert Guide', color: '#f59e0b', bgColor: 'rgba(245,158,11,0.15)' },
        { count: 150, label: '🏆 Master Birder',color: '#e879f9', bgColor: 'rgba(232,121,249,0.15)' },
        { count: total, label: '🌟 Legend',      color: '#facc15', bgColor: 'rgba(250,204,21,0.15)' },
    ];

    // Render milestone badges
    milestones.forEach(m => {
        const badge = document.createElement('div');
        badge.className = 'milestone-badge';
        badge.id = `badge-${m.count}`;
        badge.textContent = m.label;
        badge.style.color = m.color;
        badge.style.borderColor = m.color;
        badge.style.background = m.bgColor;
        dashBadges.appendChild(badge);
    });

    // ── Save & update dashboard ───────────────────────────────
    function saveSeen() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...seenSet]));
    }

    function updateDashboard() {
        const count = seenSet.size;
        dashSeenCount.textContent = count;
        dashTotal.textContent = total;
        heroSeenEl.textContent = count;

        const pct = total > 0 ? Math.round((count / total) * 100) : 0;
        dashFill.style.width = pct + '%';
        dashPct.textContent = pct + '%';

        milestones.forEach(m => {
            const badge = document.getElementById(`badge-${m.count}`);
            if (badge) {
                if (count >= m.count) {
                    badge.classList.add('achieved');
                } else {
                    badge.classList.remove('achieved');
                }
            }
        });

        const messages = [
            { min: 0,   max: 0,     msg: 'Tap any bird to mark it as spotted! 🌿' },
            { min: 1,   max: 9,     msg: 'Great start! Keep exploring the park.' },
            { min: 10,  max: 24,    msg: "You're on your way! Keep your binoculars ready." },
            { min: 25,  max: 49,    msg: 'Impressive list! The jungle has much more to reveal.' },
            { min: 50,  max: 99,    msg: 'Excellent birder! Many guides never reach this far.' },
            { min: 100, max: 149,   msg: '🦅 Expert Guide! The forest secrets are yours.' },
            { min: 150, max: total - 1, msg: '🏆 Master Birder! Almost a living legend.' },
            { min: total, max: Infinity, msg: '🌟 LEGEND! You have seen all recorded species!' },
        ];
        const m = messages.find(m => count >= m.min && count <= m.max);
        if (m) dashMessage.textContent = m.msg;
    }

    // ── Toast helper ──────────────────────────────────────────
    let toastTimer = null;
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
    }

    // ── Animated count-up on load ─────────────────────────────
    let count = 0;
    const step = Math.ceil(total / 60);
    const timer = setInterval(() => {
        count = Math.min(count + step, total);
        totalCountEl.textContent = count;
        if (count >= total) clearInterval(timer);
    }, 20);

    // ── Build family pills ────────────────────────────────────
    const families = ['All', ...new Set(allBirds.map(b => b.family))];
    families.forEach(f => {
        if (f === 'All') return;
        const btn = document.createElement('button');
        btn.className = 'pill';
        btn.dataset.family = f;
        btn.textContent = f;
        filterPillsContainer.appendChild(btn);
    });

    filterPillsContainer.addEventListener('click', e => {
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

    seenFilterBtn.addEventListener('click', () => {
        showSeenOnly = !showSeenOnly;
        seenFilterBtn.classList.toggle('active', showSeenOnly);
        render();
    });

    resetBtn.addEventListener('click', () => {
        if (seenSet.size === 0) return;
        if (!confirm(`Clear all ${seenSet.size} sightings? This cannot be undone.`)) return;
        seenSet.clear();
        saveSeen();
        updateDashboard();
        render();
        showToast('✓ All sightings cleared');
    });

    // ── Filter logic ──────────────────────────────────────────
    function getFiltered() {
        return allBirds.filter(bird => {
            const key = bird.english;
            const matchFamily = activeFamily === 'All' || bird.family === activeFamily;
            const matchQuery = !activeQuery ||
                bird.english.toLowerCase().includes(activeQuery) ||
                bird.scientific.toLowerCase().includes(activeQuery) ||
                bird.nepali.toLowerCase().includes(activeQuery) ||
                (bird.family || '').toLowerCase().includes(activeQuery);
            const matchSeen = !showSeenOnly || seenSet.has(key);
            return matchFamily && matchQuery && matchSeen;
        });
    }

    // ── Render ────────────────────────────────────────────────
    function render() {
        const filtered = getFiltered();
        grid.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
            resultsLabel.textContent = showSeenOnly
                ? 'No sightings yet in this selection'
                : 'No results found';
            searchCount.classList.remove('visible');
            return;
        }

        emptyState.classList.add('hidden');
        resultsLabel.textContent = activeQuery
            ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${searchInput.value}"`
            : activeFamily !== 'All'
                ? `${activeFamily} — ${filtered.length} species`
                : showSeenOnly
                    ? `Seen — ${filtered.length} species`
                    : `All Species — ${filtered.length}`;

        if (activeQuery) {
            searchCount.textContent = filtered.length;
            searchCount.classList.add('visible');
        } else {
            searchCount.classList.remove('visible');
        }

        // Group by family
        const grouped = {};
        filtered.forEach(bird => {
            const fam = bird.family || 'Other';
            if (!grouped[fam]) grouped[fam] = [];
            grouped[fam].push(bird);
        });

        const showGroupHeaders = !activeQuery && activeFamily === 'All';
        let globalIndex = 1;

        Object.entries(grouped).forEach(([family, birds]) => {
            if (showGroupHeaders) {
                const seenInFamily = birds.filter(b => seenSet.has(b.english)).length;
                const header = document.createElement('div');
                header.className = 'section-header';
                header.innerHTML = `
                    <h3>${family}</h3>
                    <div class="section-line"></div>
                    <span class="section-count">${seenInFamily}/${birds.length} seen</span>
                `;
                grid.appendChild(header);
            }

            birds.forEach((bird, localIdx) => {
                const key = bird.english;
                const isSeen = seenSet.has(key);
                const card = document.createElement('div');
                card.className = 'bird-card' + (isSeen ? ' seen' : '');
                const delay = Math.min((showGroupHeaders ? localIdx : globalIndex - 1) * 0.02, 0.8);
                card.style.animationDelay = `${delay}s`;

                card.innerHTML = `
                    <div class="bird-number">${globalIndex}</div>
                    <div class="bird-body">
                        <div class="bird-header">
                            <span class="bird-english">${bird.english}</span>
                            <span class="bird-scientific">${bird.scientific}</span>
                        </div>
                        <div class="bird-details">${bird.details || ''}</div>
                    </div>
                    <div class="bird-right">
                        <span class="bird-nepali">${bird.nepali}</span>
                        <span class="bird-family-tag">${bird.family || ''}</span>
                    </div>
                    <button class="seen-btn ${isSeen ? 'active' : ''}" title="${isSeen ? 'Mark as not seen' : 'Mark as seen'}" data-key="${key}">
                        ${isSeen
                            ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-5-5 1.41-1.41L10 13.67l7.59-7.59L19 7.5l-9 9z"/></svg>`
                            : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>`
                        }
                    </button>
                `;

                // Toggle seen
                const btn = card.querySelector('.seen-btn');
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (seenSet.has(key)) {
                        seenSet.delete(key);
                        card.classList.remove('seen');
                        btn.classList.remove('active');
                        btn.title = 'Mark as seen';
                        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>`;
                        card.querySelector('.bird-english').style.color = '';
                        showToast(`✗ ${bird.english} removed`);
                    } else {
                        seenSet.add(key);
                        card.classList.add('seen');
                        btn.classList.add('active');
                        btn.title = 'Mark as not seen';
                        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-5-5 1.41-1.41L10 13.67l7.59-7.59L19 7.5l-9 9z"/></svg>`;
                        showToast(`✓ ${bird.english} spotted!`);
                    }

                    saveSeen();
                    updateDashboard();

                    // Re-render section headers to update counts
                    if (showGroupHeaders) {
                        render();
                    }
                });

                grid.appendChild(card);
                globalIndex++;
            });
        });
    }

    // ── Init ──────────────────────────────────────────────────
    updateDashboard();
    render();
});
