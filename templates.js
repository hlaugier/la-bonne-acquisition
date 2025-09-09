// Sample templates data
const templatesData = [
    {
        id: 1,
        name: 'Template Recruteurs Tech',
        category: 'recruitment',
        subject: 'Opportunité passionnante chez {{entreprise}}',
        content: 'Bonjour {{nom}},\n\nNous avons une opportunité exceptionnelle qui pourrait vous intéresser...',
        usageCount: 156,
        lastUsed: '2025-09-08',
        createdAt: '2025-08-15'
    },
    {
        id: 2,
        name: 'Welcome Onboarding',
        category: 'onboarding',
        subject: 'Bienvenue chez {{entreprise}} !',
        content: 'Bonjour {{nom}},\n\nNous sommes ravis de vous accueillir dans notre équipe...',
        usageCount: 89,
        lastUsed: '2025-09-07',
        createdAt: '2025-07-20'
    },
    {
        id: 3,
        name: 'Newsletter Mensuelle',
        category: 'newsletter',
        subject: 'Les actualités du mois - {{mois}} {{année}}',
        content: 'Chers abonnés,\n\nDécouvrez les dernières actualités et opportunités...',
        usageCount: 234,
        lastUsed: '2025-09-01',
        createdAt: '2025-06-10'
    },
    {
        id: 4,
        name: 'Invitation Webinar IA',
        category: 'event',
        subject: 'Invitation exclusive : Webinar sur l\'IA le {{date}}',
        content: 'Bonjour {{nom}},\n\nVous êtes cordialement invité(e) à notre webinar exclusif...',
        usageCount: 45,
        lastUsed: '2025-09-05',
        createdAt: '2025-08-25'
    },
    {
        id: 5,
        name: 'Relance Candidature',
        category: 'recruitment',
        subject: 'Re: Votre candidature chez {{entreprise}}',
        content: 'Bonjour {{nom}},\n\nNous revenons vers vous concernant votre candidature...',
        usageCount: 78,
        lastUsed: '2025-09-06',
        createdAt: '2025-08-01'
    },
    {
        id: 6,
        name: 'Formation Data Science',
        category: 'event',
        subject: 'Formation Data Science - Places limitées',
        content: 'Bonjour {{nom}},\n\nNous organisons une formation exclusive en Data Science...',
        usageCount: 92,
        lastUsed: '2025-09-04',
        createdAt: '2025-07-15'
    }
];

// Function to get category style
function getCategoryClass(category) {
    return `template-card__category template-card__category--${category}`;
}

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Function to render template card
function renderTemplateCard(template) {
    return `
        <div class="template-card" data-id="${template.id}">
            <div class="template-card__header">
                <h3 class="template-card__title">${template.name}</h3>
                <span class="${getCategoryClass(template.category)}">
                    ${getCategoryLabel(template.category)}
                </span>
            </div>
            <p class="template-card__subject">${template.subject}</p>
            <p class="template-card__preview">${template.content}</p>
            <div class="template-card__footer">
                <div class="template-card__stats">
                    <span class="template-card__stat">
                        <span class="fr-icon-send-plane-line fr-icon--sm"></span>
                        ${template.usageCount} utilisations
                    </span>
                    <span class="template-card__stat">
                        <span class="fr-icon-calendar-line fr-icon--sm"></span>
                        ${formatDate(template.lastUsed)}
                    </span>
                </div>
                <div class="template-card__actions">
                    <button class="template-card__action" onclick="editTemplate(${template.id})" title="Modifier">
                        <span class="fr-icon-edit-line fr-icon--sm"></span>
                    </button>
                    <button class="template-card__action" onclick="duplicateTemplate(${template.id})" title="Dupliquer">
                        <span class="fr-icon-file-copy-line fr-icon--sm"></span>
                    </button>
                    <button class="template-card__action" onclick="deleteTemplate(${template.id})" title="Supprimer">
                        <span class="fr-icon-delete-line fr-icon--sm"></span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to get category label
function getCategoryLabel(category) {
    const labels = {
        'recruitment': 'Recrutement',
        'onboarding': 'Onboarding',
        'newsletter': 'Newsletter',
        'event': 'Événement'
    };
    return labels[category] || category;
}

// Function to render all templates
function renderTemplates(templates) {
    const container = document.getElementById('templates-container');
    
    if (templates.length === 0) {
        container.innerHTML = `
            <div class="templates-empty">
                <div class="templates-empty__icon">📧</div>
                <h2 class="templates-empty__title">Aucun template trouvé</h2>
                <p class="templates-empty__text">Créez votre premier template d'email pour commencer</p>
                <button class="fr-btn" onclick="openCreateTemplateModal()">
                    Créer un template
                </button>
            </div>
        `;
    } else {
        container.innerHTML = templates.map(template => renderTemplateCard(template)).join('');
    }
}

// Function to filter templates
function filterTemplates() {
    const searchTerm = document.getElementById('search-templates').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;
    
    let filtered = [...templatesData];
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(template => 
            template.name.toLowerCase().includes(searchTerm) ||
            template.subject.toLowerCase().includes(searchTerm) ||
            template.content.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by category
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(template => template.category === categoryFilter);
    }
    
    // Sort templates
    switch(sortFilter) {
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'usage':
            filtered.sort((a, b) => b.usageCount - a.usageCount);
            break;
        case 'recent':
        default:
            filtered.sort((a, b) => new Date(b.lastUsed) - new Date(a.lastUsed));
            break;
    }
    
    renderTemplates(filtered);
}

// Modal functions
function openCreateTemplateModal() {
    const modal = document.getElementById('template-modal');
    modal.showModal();
    document.getElementById('modal-title').textContent = 'Créer un nouveau template';
    document.getElementById('template-form').reset();
}

function closeTemplateModal() {
    const modal = document.getElementById('template-modal');
    modal.close();
}

function editTemplate(id) {
    const template = templatesData.find(t => t.id === id);
    if (template) {
        const modal = document.getElementById('template-modal');
        modal.showModal();
        document.getElementById('modal-title').textContent = 'Modifier le template';
        document.getElementById('template-name').value = template.name;
        document.getElementById('template-category').value = template.category;
        document.getElementById('template-subject').value = template.subject;
        document.getElementById('template-content').value = template.content;
    }
}

function duplicateTemplate(id) {
    const template = templatesData.find(t => t.id === id);
    if (template) {
        const newTemplate = {
            ...template,
            id: Math.max(...templatesData.map(t => t.id)) + 1,
            name: template.name + ' (copie)',
            usageCount: 0,
            lastUsed: new Date().toISOString().split('T')[0],
            createdAt: new Date().toISOString().split('T')[0]
        };
        templatesData.push(newTemplate);
        filterTemplates();
    }
}

function deleteTemplate(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce template ?')) {
        const index = templatesData.findIndex(t => t.id === id);
        if (index > -1) {
            templatesData.splice(index, 1);
            filterTemplates();
        }
    }
}

// Initialize the templates page
document.addEventListener('DOMContentLoaded', function() {
    // Render initial templates
    renderTemplates(templatesData);
    
    // Add event listeners
    document.getElementById('search-templates')?.addEventListener('input', filterTemplates);
    document.getElementById('category-filter')?.addEventListener('change', filterTemplates);
    document.getElementById('sort-filter')?.addEventListener('change', filterTemplates);
    
    // Form submit handler
    document.getElementById('template-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add logic to save template
        closeTemplateModal();
        filterTemplates();
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.fr-sidemenu__btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        templatesData,
        renderTemplates,
        filterTemplates
    };
}