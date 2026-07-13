document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('bird-grid');
    const searchInput = document.getElementById('searchInput');
    const totalCountEl = document.getElementById('total-count');
    const searchCount = document.getElementById('search-count');
    const resultsLabel = document.getElementById('results-label');
    const emptyState = document.getElementById('empty-state');
    const filterPillsContainer = document.getElementById('filter-pills');

    if (typeof allBirds === 'undefined') {
        grid.innerHTML = '<p style="color:red;padding:2rem">Error loading bird data.</p>';
        return;
    }

    // Animate count up
    let count = 0;
    const target = allBirds.length;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        count = Math.min(count + step, target);
        totalCountEl.textContent = count;
        if (count >= target) clearInterval(timer);
    }, 20);

    // Build unique family list
    const families = ['All', ...new Set(allBirds.map(b => b.family))];
    families.forEach(f => {
        if (f === 'All') return; // already exists
        const btn = document.createElement('button');
        btn.className = 'pill';
        btn.dataset.family = f;
        btn.textContent = f;
        filterPillsContainer.appendChild(btn);
    });

    let activeFamily = 'All';
    let activeQuery = '';

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

    function getFiltered() {
        return allBirds.filter(bird => {
            const matchFamily = activeFamily === 'All' || bird.family === activeFamily;
            const matchQuery = !activeQuery ||
                bird.english.toLowerCase().includes(activeQuery) ||
                bird.scientific.toLowerCase().includes(activeQuery) ||
                bird.nepali.toLowerCase().includes(activeQuery) ||
                (bird.family || '').toLowerCase().includes(activeQuery);
            return matchFamily && matchQuery;
        });
    }

    function render() {
        const filtered = getFiltered();
        grid.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
            resultsLabel.textContent = 'No results';
            searchCount.textContent = '';
            searchCount.classList.remove('visible');
            return;
        }

        emptyState.classList.add('hidden');
        resultsLabel.textContent = activeQuery
            ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${searchInput.value}"`
            : activeFamily !== 'All'
                ? `${activeFamily} — ${filtered.length} species`
                : `All Species — ${filtered.length}`;

        if (activeQuery) {
            searchCount.textContent = filtered.length;
            searchCount.classList.add('visible');
        } else {
            searchCount.classList.remove('visible');
        }

        // Group by family when no search query and showing all
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
                const header = document.createElement('div');
                header.className = 'section-header';
                header.innerHTML = `
                    <h3>${family}</h3>
                    <div class="section-line"></div>
                    <span class="section-count">${birds.length} species</span>
                `;
                grid.appendChild(header);
            }

            birds.forEach((bird, localIdx) => {
                const card = document.createElement('div');
                card.className = 'bird-card';
                const delay = Math.min((showGroupHeaders ? localIdx : globalIndex - 1) * 0.03, 0.8);
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
                `;

                grid.appendChild(card);
                globalIndex++;
            });
        });
    }

    render();
});
