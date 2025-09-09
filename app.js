// Sample campaign data
const campaignsData = [
    {
        id: '910',
        name: 'AlgoLBA_Template2_NI_Recruteurs_10septembre',
        status: 'scheduled',
        scheduledDate: 'Sep 10, 2025 2:30 PM',
        target: 'Recruteurs Tech',
        recipients: 0,
        delivered: 0,
        opens: 0,
        clicks: 0,
        offers: 0,
        companies: 0,
        unsubscribed: 0
    },
    {
        id: '909',
        name: 'AlgoLBA_Template2_NI_Recruteurs_09septembre',
        status: 'completed',
        scheduledDate: 'Sep 9, 2025 10:21 AM',
        target: 'Recruteurs Data',
        recipients: 12057,
        delivered: 12057,
        opens: 223,
        clicks: 11,
        offers: 5,
        companies: 3,
        unsubscribed: 3
    },
    {
        id: '908',
        name: 'AlgoLBA_Template2_NI_Recruteurs_08septembre',
        status: 'running',
        scheduledDate: 'Sep 8, 2025 3:17 PM',
        target: 'Recruteurs IA',
        recipients: 48966,
        delivered: 48966,
        opens: 5106,
        clicks: 192,
        offers: 45,
        companies: 12,
        unsubscribed: 91
    },
    {
        id: '907',
        name: 'Campagne_Rentrée_2025_Tech',
        status: 'completed',
        scheduledDate: 'Sep 5, 2025 9:00 AM',
        target: 'Startups Tech',
        recipients: 35000,
        delivered: 34850,
        opens: 8500,
        clicks: 1200,
        offers: 150,
        companies: 45,
        unsubscribed: 150
    },
    {
        id: '906',
        name: 'Webinar_IA_Recrutement',
        status: 'completed',
        scheduledDate: 'Sep 3, 2025 2:00 PM',
        target: 'RH & Recruteurs',
        recipients: 15000,
        delivered: 14900,
        opens: 4500,
        clicks: 890,
        offers: 78,
        companies: 25,
        unsubscribed: 45
    },
    {
        id: '905',
        name: 'Formation_DataScience_Septembre',
        status: 'running',
        scheduledDate: 'Sep 2, 2025 11:00 AM',
        target: 'Écoles & Universités',
        recipients: 8500,
        delivered: 8450,
        opens: 3200,
        clicks: 450,
        offers: 35,
        companies: 15,
        unsubscribed: 25
    },
    {
        id: '904',
        name: 'Newsletter_Août_2025',
        status: 'completed',
        scheduledDate: 'Aug 30, 2025 10:00 AM',
        target: 'Tous les abonnés',
        recipients: 75000,
        delivered: 74500,
        opens: 18500,
        clicks: 3500,
        offers: 280,
        companies: 89,
        unsubscribed: 215
    },
    {
        id: '903',
        name: 'Promo_Rentrée_PME',
        status: 'completed',
        scheduledDate: 'Aug 28, 2025 3:00 PM',
        target: 'PME & ETI',
        recipients: 22000,
        delivered: 21850,
        opens: 6500,
        clicks: 980,
        offers: 95,
        companies: 32,
        unsubscribed: 68
    },
    {
        id: '902',
        name: 'Séminaire_Innovation_2025',
        status: 'scheduled',
        scheduledDate: 'Sep 15, 2025 9:00 AM',
        target: 'Directeurs Innovation',
        recipients: 0,
        delivered: 0,
        opens: 0,
        clicks: 0,
        offers: 0,
        companies: 0,
        unsubscribed: 0
    },
    {
        id: '901',
        name: 'Hackathon_IA_Septembre',
        status: 'scheduled',
        scheduledDate: 'Sep 20, 2025 2:00 PM',
        target: 'Développeurs & Data Scientists',
        recipients: 0,
        delivered: 0,
        opens: 0,
        clicks: 0,
        offers: 0,
        companies: 0,
        unsubscribed: 0
    }
];

// Function to format numbers with spaces as thousands separator
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Function to calculate percentage
function calculatePercentage(value, total) {
    if (total === 0) return '0%';
    return ((value / total) * 100).toFixed(2) + '%';
}

// Function to get status badge HTML
function getStatusBadge(status) {
    const statusText = {
        'scheduled': 'Programmée',
        'running': 'En cours',
        'completed': 'Terminée'
    };
    
    return `<span class="campaign-status campaign-status--${status}">${statusText[status]}</span>`;
}

// Function to truncate text
function truncateText(text, maxLength = 20) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Function to render campaign row
function renderCampaignRow(campaign) {
    const openRate = campaign.delivered > 0 ? calculatePercentage(campaign.opens, campaign.delivered) : '0%';
    const clickRate = campaign.delivered > 0 ? calculatePercentage(campaign.clicks, campaign.delivered) : '0%';
    const truncatedName = truncateText(campaign.name, 20);
    
    return `
        <tr>
            <td>
                <div class="fr-checkbox-group fr-checkbox-group--sm">
                    <input type="checkbox" id="check-${campaign.id}" name="check-${campaign.id}">
                    <label class="fr-label" for="check-${campaign.id}"></label>
                </div>
            </td>
            <td>
                <a href="#" class="campaign-name" title="${campaign.name}">${truncatedName}</a>
                <span class="campaign-date">${campaign.scheduledDate}</span>
            </td>
            <td>${getStatusBadge(campaign.status)}</td>
            <td>${campaign.target}</td>
            <td>
                <span class="metric-value">${formatNumber(campaign.recipients)}</span>
            </td>
            <td>
                <span class="metric-value">${formatNumber(campaign.delivered)}</span>
                ${campaign.recipients > 0 ? `<span class="metric-percentage">${calculatePercentage(campaign.delivered, campaign.recipients)}</span>` : ''}
            </td>
            <td>
                <span class="metric-value">${formatNumber(campaign.opens)}</span>
                ${campaign.delivered > 0 ? `<span class="metric-percentage">${openRate}</span>` : ''}
            </td>
            <td>
                <span class="metric-value">${formatNumber(campaign.clicks)}</span>
                ${campaign.delivered > 0 ? `<span class="metric-percentage">${clickRate}</span>` : ''}
            </td>
            <td>
                <span class="metric-value">${formatNumber(campaign.offers)}</span>
            </td>
            <td>
                <span class="metric-value">${formatNumber(campaign.companies)}</span>
            </td>
            <td>
                <div class="table-actions">
                    <button class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline fr-btn--icon-left fr-icon-eye-line" title="Voir les détails">
                    </button>
                    <button class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline fr-btn--icon-left fr-icon-edit-line" title="Modifier">
                    </button>
                    <button class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline fr-btn--icon-left fr-icon-delete-line" title="Supprimer">
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Function to render all campaigns
function renderCampaigns(campaigns) {
    const tbody = document.getElementById('campaigns-tbody');
    tbody.innerHTML = campaigns.map(campaign => renderCampaignRow(campaign)).join('');
}

// Function to filter campaigns
function filterCampaigns() {
    const searchTerm = document.getElementById('search-campaigns').value.toLowerCase();
    const statusFilter = document.getElementById('status-filter').value;
    
    let filtered = campaignsData;
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(campaign => 
            campaign.name.toLowerCase().includes(searchTerm) ||
            campaign.target.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by status
    if (statusFilter !== 'all') {
        filtered = filtered.filter(campaign => campaign.status === statusFilter);
    }
    
    renderCampaigns(filtered);
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Render initial campaigns
    renderCampaigns(campaignsData);
    
    // Add event listeners
    document.getElementById('search-campaigns').addEventListener('input', filterCampaigns);
    document.getElementById('status-filter').addEventListener('change', filterCampaigns);
    document.getElementById('date-filter').addEventListener('change', filterCampaigns);
    
    // Select all checkbox
    document.getElementById('select-all').addEventListener('change', function(e) {
        const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked;
        });
    });
    
    // Create campaign button
    document.querySelector('.fr-btn--secondary').addEventListener('click', function() {
        alert('Fonctionnalité "Créer une campagne" à implémenter');
    });
    
    // Import contacts button
    document.querySelectorAll('.fr-btn')[1].addEventListener('click', function() {
        alert('Fonctionnalité "Importer des contacts" à implémenter');
    });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        campaignsData,
        renderCampaigns,
        filterCampaigns
    };
}