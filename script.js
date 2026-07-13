document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('bird-list');
    const searchInput = document.getElementById('searchInput');
    const countDisplay = document.getElementById('total-count');

    const renderList = (data) => {
        listContainer.innerHTML = '';
        countDisplay.textContent = data.length;

        if (data.length === 0) {
            listContainer.innerHTML = '<div class="empty-state">No birds matched your search.</div>';
            return;
        }

        data.forEach((bird, index) => {
            const card = document.createElement('div');
            card.className = 'bird-card stagger-anim';
            // Stagger delay based on index (up to a max so it doesn't take forever)
            const delay = Math.min(index * 0.05, 1.5);
            card.style.animationDelay = `${delay}s`;
            
            card.innerHTML = `
                <div class="bird-info">
                    <div class="bird-header">
                        <span class="bird-english">${bird.english}</span>
                        <span class="bird-scientific">${bird.scientific}</span>
                    </div>
                    <div class="bird-details">${bird.details || ''}</div>
                </div>
                <div class="bird-nepali">${bird.nepali}</div>
            `;
            
            listContainer.appendChild(card);
        });
    };

    if (typeof allBirds !== 'undefined') {
        renderList(allBirds);
    } else {
        listContainer.innerHTML = '<div class="empty-state" style="color: #ef4444;">Error loading bird data.</div>';
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (typeof allBirds !== 'undefined') {
            const filteredBirds = allBirds.filter(bird => 
                bird.english.toLowerCase().includes(query) || 
                bird.scientific.toLowerCase().includes(query) || 
                bird.nepali.toLowerCase().includes(query)
            );
            renderList(filteredBirds);
        }
    });
});
