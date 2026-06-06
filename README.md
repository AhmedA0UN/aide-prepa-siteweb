# Aide Prépa — Site statique

Ce dépôt contient un site web statique simple pour organiser des ressources pédagogiques : cours, TDs, examens.

Pour lancer localement :

- Ouvrir `index.html` dans un navigateur.
- Ou utiliser une extension/serveur local (par ex. Live Server dans VS Code) :

```bash
# avec Python 3 (serveur simple)
cd "c:\Users\Mega-PC\Documents\vs projets\GIT\aide-prepa-siteweb"
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

Fichiers importants :
- `index.html` — page d'accueil
- `cours.html` — page des cours
- `tds.html` — page des TDs
- `examens.html` — page des examens
- `assets/` — CSS et JS
- `data/` — fichiers JSON pour les ressources
	- `data/filieres.json` — liste des filières

Souhaitez-vous que j'ajoute :
- un système de recherche, ou
- l'intégration d'un CMS léger (Netlify CMS / Forestry), ou
- une version responsive plus complète et modèles de cours/TDs ?
"# aide-prepa-siteweb" 
