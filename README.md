# Aide Prépa

Site Web de préparation organisé par filière, année et type de ressource. Il propose une navigation claire pour la prépa classique et la prépa intégrée, avec des pages dédiées aux parcours, aux ressources et à la recherche.

## Structure du projet

- `src/index.html` : page d’accueil du site
- `src/filiere.html` : page de choix des filières
- `src/search.html` : moteur de recherche interne
- `src/contact.html` : page d’informations et de contact
- `src/classique/` : parcours BG, MP, PC et PT
- `src/integre/` : cycles CPI1 et CPI2
- `assets/css/style.css` : styles, mise en page et identité visuelle
- `assets/js/main.js` : rendu dynamique des pages, navigation et recherche

## Fonctionnement

Le site repose sur une structure HTML statique et un rendu côté client via JavaScript. Chaque page est générée à partir d’un même modèle, selon le chemin courant, ce qui permet de conserver une arborescence simple tout en offrant une navigation cohérente.

## Fonctionnalités principales

- navigation entre accueil, filières, recherche et contact
- accès aux parcours de prépa classique et intégrée
- organisation par année ou branche
- accès rapide aux cours, TDs et examens
- moteur de recherche par mots-clés
- page d’information avec l’adresse de contact : `aide.prepa@outlook.com`

## Information sur le site

Aide Prépa est une plateforme de révision conçue pour aider les étudiants à mieux organiser leur préparation. Elle propose une structure simple et guidée pour retrouver rapidement les ressources utiles, suivre un parcours de travail clair et progresser de façon plus efficace.

Le site s’adresse principalement aux étudiants en prépa classique et prépa intégrée qui souhaitent centraliser leurs cours, TDs et examens dans un espace unique et facile à parcourir.

## Objectif pédagogique

L’objectif de la plateforme est de proposer un accompagnement structuré pour la préparation. Elle aide à passer d’une logique de dispersion à une logique de progression, en favorisant :

- une lecture claire des parcours disponibles
- un accès rapide aux ressources adaptées à chaque niveau
- une méthode de révision simple, progressive et régulière
- une meilleure organisation du travail entre cours, exercices et examens

## Comment utiliser le site

1. Choisir la filière adaptée à son profil.
2. Ouvrir le parcours ou la branche correspondant à son niveau.
3. Accéder aux ressources de cours, TDs ou examens selon l’objectif du moment.
4. Utiliser la recherche pour retrouver rapidement une page ou une matière précise.

## Méthodes et conseils pédagogiques

Quelques approches simples peuvent améliorer l’efficacité de la préparation et aider à mieux étudier :

- Réviser une notion courte avant de passer à la suivante pour éviter la surcharge mentale.
- Alternancer travail théorique et exercices pour mieux fixer les concepts.
- Faire des fiches de synthèse après chaque séance de révision.
- Revenir régulièrement sur les erreurs commises pour progresser plus rapidement.
- Pratiquer avec des sujets d’examen dans des conditions proches de l’épreuve réelle.
- Gérer son temps en séparant les séances de révision, d’entraînement et de correction.
- Étudier par blocs courts et réguliers plutôt que par sessions trop longues et dispersées.
- Expliquer à voix haute une notion à soi-même ou à quelqu’un d’autre pour vérifier sa compréhension.
- Revoir les points importants chaque semaine pour renforcer la mémorisation à long terme.
- Travailler dans un environnement calme et sans distractions pour mieux concentrer son attention.

Ces méthodes visent à rendre l’apprentissage plus progressif, plus clair et plus durable.

## Parcours disponibles

### Prépa classique

- BG
- MP
- PC
- PT

Chaque parcours est organisé par année, avec un accès direct aux ressources de cours, TDs et examens.

### Prépa intégrée

- CPI1 avec la branche MPI
- CPI2 avec les branches MI et PI

Les branches permettent d’accéder à une organisation plus ciblée selon le profil de l’étudiant.

## Types de contenus

- Cours : fiches, rappels de méthode et notions clés
- TDs : exercices progressifs et applications
- Examens : sujets types, annales et simulations de concours

## Utilisation

Ouvrez simplement le fichier `index.html` dans un navigateur, ou servez le dossier avec un serveur local si vous souhaitez une expérience plus proche d’un site en ligne.

## Roadmap

Les prochaines étapes prévues incluent :

- enrichir progressivement les contenus de chaque parcours
- ajouter plus de fiches de cours et d’exercices corrigés
- développer des pages plus détaillées par matière
- améliorer la recherche et la navigation mobile
- ajouter davantage d’éléments interactifs si nécessaire

## Contribution

Ce projet peut évoluer grâce à des contributions en contenu, en structure ou en amélioration du design. Toute suggestion ou proposition d’ajout est la bienvenue.

## Contact

Pour toute question ou suggestion : `aide.prepa@outlook.com`
