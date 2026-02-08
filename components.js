const PortfolioComponents = {
    renderGallery: (items) => {
        if (!items || items.length === 0) return '<p>No gallery items found.</p>';

        return `
            <div class="gallery-grid">
                ${items.map(item => `
                    <div class="gallery-item">
                        <img src="${item.src}" alt="${item.alt}" loading="lazy">
                        <div class="gallery-caption">${item.caption}</div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderTalks: (items) => {
        if (!items || items.length === 0) return '<p>No talks found.</p>';

        return `
            <div class="talks-container">
                ${items.map(item => `
                    <div class="talk-card">
                        <div class="talk-header">
                            <h3>${item.title}</h3>
                            <span class="talk-date">${item.date}</span>
                        </div>
                        <p class="talk-event"><strong>Event:</strong> ${item.event}</p>
                        <p class="talk-topic"><strong>Topic:</strong> ${item.topic}</p>
                        <a href="${item.link}" class="btn-link" target="_blank">View Slides/Recording</a>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderPodcasts: (items) => {
        if (!items || items.length === 0) return '<p>No podcasts found.</p>';

        return `
            <div class="podcasts-list">
                ${items.map(item => `
                    <div class="podcast-item">
                        <div class="podcast-icon"><i class="fas fa-microphone-alt"></i></div>
                        <div class="podcast-content">
                            <h3>${item.title}</h3>
                            <p class="podcast-host">Hosted by: ${item.host} | ${item.date}</p>
                            <p class="podcast-desc">${item.description}</p>
                            <a href="${item.link}" class="podcast-link" target="_blank">Listen Now</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderResources: (items) => {
        if (!items || items.length === 0) return '<p>No resources found.</p>';

        return `
            <div class="resources-grid">
                ${items.map(item => `
                    <div class="resource-card">
                        <div class="resource-type">${item.type}</div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <a href="${item.link}" class="resource-link" target="_blank">Download / View</a>
                    </div>
                `).join('')}
            </div>
        `;
    }
};
