# La Bonne Acquisition

Plateforme de gestion des campagnes de recrutement avec dashboard et système de templates d'emails.

## 🚀 Fonctionnalités

- **Dashboard des campagnes** : Vue d'ensemble de toutes les campagnes avec métriques détaillées
- **Gestion des templates** : Création, modification et gestion des modèles d'emails
- **Filtrage et recherche** : Outils de recherche et filtres avancés
- **Design System français** : Interface utilisant le Design System de l'État français (DSFR)
- **Responsive** : Compatible mobile et desktop

## 📊 Dashboard

Le dashboard affiche pour chaque campagne :
- Nombre de contacts ciblés
- Nombre d'emails distribués
- Taux d'ouverture et de clics
- Nombre d'offres déposées
- Nombre d'entreprises inscrites
- Statuts : Programmée, En cours, Terminée

## 📧 Templates

Système complet de gestion des templates d'emails :
- Catégories : Recrutement, Onboarding, Newsletter, Événement
- Variables dynamiques : `{{nom}}`, `{{entreprise}}`, etc.
- Aperçu en temps réel
- Statistiques d'utilisation

## 🛠 Technologies

- **Frontend** : HTML5, CSS3 (DSFR), JavaScript (Vanilla)
- **Design** : Design System de l'État français
- **Icons** : Icônes Remix intégrées au DSFR

## 🚀 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/hugolaugier/la-bonne-acquisition.git
cd la-bonne-acquisition
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
python3 -m http.server 8000
# ou
npm run serve
```

4. Ouvrez votre navigateur sur `http://localhost:8000`

## 📁 Structure du projet

```
├── index.html              # Dashboard principal
├── templates.html           # Page de gestion des templates
├── styles.css              # Styles personnalisés
├── templates.css           # Styles spécifiques aux templates
├── app.js                  # JavaScript du dashboard
├── templates.js            # JavaScript des templates
├── package.json            # Dépendances npm
└── node_modules/           # Modules npm (DSFR)
```

## 🎨 Design

L'interface respecte les standards du Design System de l'État français :
- Typographie Marianne
- Couleurs institutionnelles
- Composants accessibles
- Navigation responsive

## 📱 Responsive

L'application est entièrement responsive avec :
- Sidebar collapsible sur mobile
- Tableaux avec scroll horizontal
- Composants adaptatifs
- Navigation tactile optimisée

## 🔧 Développement

Pour contribuer au projet :

1. Forkez le projet
2. Créez une branche feature (`git checkout -b feature/ma-feature`)
3. Committez vos changements (`git commit -m 'Ajout de ma feature'`)
4. Pushez vers la branche (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Contributeurs

- **Hugo Laugier** - Développement initial

## 🆘 Support

Pour toute question ou problème, ouvrez une [issue](https://github.com/hugolaugier/la-bonne-acquisition/issues) sur GitHub.