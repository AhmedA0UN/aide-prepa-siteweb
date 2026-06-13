# Aide Prépa

Site statique de préparation organisé par filière, année et type de ressource.


## Structure

- `src/index.html` : accueil
- `src/filiere.html` : choix du parcours
- `src/search.html` : recherche globale
- `src/classique/` : parcours BG, MP, PC et PT
- `src/integre/` : cycles CPI1 et CPI2
- `assets/css/style.css` : mise en page et identité visuelle
- `assets/js/main.js` : rendu client des pages et recherche

## Fonctionnement

Le site utilise une même base de gabarit pour toutes les pages et génère le contenu côté client selon le chemin courant. Cela permet de conserver l’arborescence existante tout en donnant une expérience de navigation cohérente.
