# 🍹 GSAP Mojito Landing Page

Une landing page interactive et animée dédiée au cocktail Mojito, construite avec **React**, **Vite**, **GSAP** et **Tailwind CSS**.

## ✨ Caractéristiques

- **Animations fluides** : Utilisation de GSAP pour des animations scrollbar sophistiquées
- **Design responsive** : Compatible avec tous les appareils (mobile, tablette, desktop)
- **Performance optimisée** : Build rapide avec Vite et hot module replacement
- **Styling moderne** : Tailwind CSS pour une stylisation rapide et élégante
- **Sections multiples** : Hero, Cocktails, À Propos, Galerie, Menu et Contact

## 🛠️ Stack Technologique

- **React 19.2** - UI Framework
- **Vite 7.2** - Build tool et dev server
- **GSAP 3.14** - Animations et effects
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Responsive 10** - Responsive design utilities
- **ESLint** - Code linting

## 📦 Installation

```bash
npm install
```

## 🚀 Démarrage

### Mode développement
```bash
npm run dev
```
Ouvre [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Build de production
```bash
npm run build
```

### Aperçu du build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Structure du Projet

```
├── src/
│   ├── components/        # Composants React
│   │   ├── About.jsx
│   │   ├── Art.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx           # Composant principal
│   ├── index.css         # Styles globaux
│   └── main.jsx          # Point d'entrée
├── public/               # Assets statiques
│   ├── fonts/
│   ├── images/
│   └── videos/
├── constants/            # Constantes de l'application
├── index.html
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## 🎯 Pages et Sections

- **Navbar** : Navigation principale
- **Hero** : Section d'introduction avec animation GSAP
- **Cocktails** : Showcase des cocktails Mojito
- **About** : Informations sur le projet
- **Art** : Galerie visuelle
- **Menu** : Menu des cocktails disponibles
- **Contact** : Formulaire de contact

## 📝 Licence

Ce projet est libre d'utilisation.
