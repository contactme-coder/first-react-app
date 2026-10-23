# 🍽️ Creative Recipe Builder

Mini-application React 18 qui permet de créer, afficher, modifier, dupliquer et supprimer des recettes de cuisine.

## 🚀 Lancer le projet

```bash
npm install
npm start
```

L'application s'ouvre sur `http://localhost:3000`.

---

## 📸 Aperçus

### Tacos méditerranéens

![Tacos méditerranéens](https://i.ibb.co/0RBc0vX6/02020202.png)

### Smoothie mangue

![Smoothie mangue](https://i.ibb.co/rGK5nVJL/01010101.png)

---

## 🔗 Liens directs

- [Image Tacos](https://i.ibb.co/0RBc0vX6/02020202.png)
- [Image Smoothie](https://i.ibb.co/rGK5nVJL/01010101.png)

---

## ✨ Fonctionnalités

- ✅ Afficher la liste des recettes
- ✅ Créer une recette (nom, catégorie, ingrédients dynamiques, difficulté, description, image)
- ✅ Modifier une recette (formulaire pré-rempli)
- ✅ Dupliquer une recette
- ✅ Supprimer une recette
- ✅ Rechercher par nom
- ✅ Filtrer par catégorie
- ✅ Pagination (4 recettes par page)
- ✅ Ajouter / supprimer des ingrédients dynamiques dans le formulaire

---

## 🧩 Structure du projet

```
src/
├── index.js                 # Point d'entrée React
├── App.jsx                  # Bootstrap (monte MainPage)
├── MainPage.jsx             # Composant principal (Q7)
├── App.css                  # Styles globaux
└── components/
    ├── RecipeItem.jsx       # Q1 - Carte d'une recette
    ├── RecipeList.jsx       # Q2 - Liste des cartes
    ├── RecipeForm.jsx       # Q3 - Formulaire (modale)
    ├── RecipeFilter.jsx     # Q4 - Recherche + catégorie
    ├── Pagination.jsx       # Q5 - Pagination
    └── Aide.jsx             # Q6 - Panneau d'aide
```

---

## 🛠️ Technologies

- **React 18.0.0** — `useState`, props, événements, formulaire contrôlé
- **CSS Grid** — mise en page responsive
- **JavaScript ES6+** — `.map()`, `.filter()`, `.slice()`, spread `...`

---

## 📚 Concepts React utilisés

| Concept | Où |
|---|---|
| `useState` | `MainPage.jsx` (6 states) + `RecipeForm.jsx` (6 states) |
| Props | Passage de données parent → enfants |
| Callbacks | Remontée d'événements enfants → parent |
| Formulaire contrôlé | Chaque input lié à un state |
| Rendu conditionnel | `{formOuvert && <RecipeForm />}`, `{recette.image && <img />}` |
| `preventDefault()` | Soumission du formulaire |
