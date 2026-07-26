(() => {
	const SITE = {
		brand: 'Aide Prépa',
		description: 'Ressources structurées pour la prépa classique et intégrée.',
		sections: {
			classique: [
				{
					code: 'bg',
					title: 'BG',
					label: 'Biologie - Géologie',
					summary: 'Le parcours BG est en cours de construction.',
					accent: 'pill--warm',
					years: ['1ere', '2eme'],
					topics: ['En cours de construction'],
					yearTopics: {
						'1ere': ['En cours de construction'],
						'2eme': ['En cours de construction']
					}
				},
				{
					code: 'mp',
					title: 'MP',
					label: 'Maths - Physique',
					summary: 'cycle préparatoire scientifique en mathématiques - physique.',
					accent: 'pill--accent',
					years: ['1ere', '2eme'],
					topics: ['Analyse', 'Algèbre', 'Physique', 'Chimie générale'],
					yearTopics: {
						'1ere': ['Analyse', 'Algèbre', 'Physique', 'Chimie générale', 'STA', 'Informatique', 'Anglais', 'Français'],
						'2eme': ['Analyse', 'Algèbre', 'Physique', 'Chimie générale', 'STA', 'Informatique', 'Anglais', 'Français']
					}
				},
				{
					code: 'pc',
					title: 'PC',
					label: 'Physique - Chimie',
					summary: 'cycle préparatoire scientifique en physique - chimie.',
					accent: 'pill--warm',
					years: ['1ere', '2eme'],
					topics: ['Analyse', 'Algèbre', 'Physique', 'Chimie inorganique'],
					yearTopics: {
						'1ere': ['Analyse', 'Algèbre', 'Physique', 'Chimie inorganique', 'Chimie organique', 'STA', 'Informatique', 'Anglais', 'Français'],
						'2eme': ['Analyse', 'Algèbre', 'Physique', 'Chimie inorganique', 'Chimie organique', 'STA', 'Informatique', 'Anglais', 'Français']
					}
				},
				{
					code: 'pt',
					title: 'PT',
					label: 'Technologie',
					summary: 'cycle préparatoire scientifique en technologie.',
					accent: 'pill--accent',
					years: ['1ere', '2eme'],
					topics: ['Analyse', 'Algèbre', 'Physique', 'Chimie générale'],
					yearTopics: {
						'1ere': ['Analyse', 'Algèbre', 'Physique', 'Chimie générale', 'STA', 'CFM', 'Informatique', 'Anglais', 'Français'],
						'2eme': ['Analyse', 'Algèbre', 'Physique', 'Chimie générale', 'STA', 'CFM', 'Informatique', 'Anglais', 'Français']
					}
				}
			],
			integre: [
				{
					code: 'cpi1',
					title: 'CPI1',
					label: 'Cycle préparatoire intégré 1',
					summary: 'Une première année de cpi qui propose une formation commune en mathématiques, physique et informatique  - MPI.',
					accent: 'pill--accent',
					branches: [
						{
							code: 'mpi',
							title: 'MPI',
							label: 'Maths - Physique - Informatique',
							summary: 'première année du cycle préparatoire intégré est une tranc commun mathématiques - physique - informatique.',
							topics: ['Analyse', 'Algèbre', 'Optique', 'Mécanique générale', 'Électrostatique', 'Magnétostatique', 'Circuits électriques', 'Électromagnétisme', 'Thermodynamique', 'Physique moderne (quantique)', 'Électronique', 'Systèmes logiques', 'DSA', 'Programmation C']
						}
					]
				},
				{
					code: 'cpi2',
					title: 'CPI2',
					label: 'Cycle préparatoire intégré 2',
					summary: 'Une deuxième année plus spécialisée avec deux branches distinctes : MI et PI. ',
					accent: 'pill--warm',
					branches: [
						{
							code: 'mi',
							title: 'MI',
							label: 'Mathématiques - Informatique (Computer Science)',
							summary: 'Pré-orientation pour le monde de l’ingénierie numérique spécialisée en software.',
							topics: ['Analyse', 'Algèbre', 'Probabilité et statistiques', 'Théorie des graphes', 'Traitement du signal', 'Architectures des ordinateurs', 'Systèmes d’exploitation', 'POO', 'Programmation C++', 'Programmation Python', 'BD', 'Logique formelle', 'Fondement de réseau', 'Théorie des langages et automates', 'Compilation', 'Dev web', 'CSI (COO)', 'Transmission de données', 'Réseaux locaux', 'Matières sociaux-culturelles']
						},
						{
							code: 'pi',
							title: 'PI',
							label: 'Physique - Informatique (Computer Engineering)',
							summary: 'Pré-orientation pour le monde de l’ingénierie numérique spécialisée en hardware.',
							topics: ['Analyse', 'Algèbre', 'Probabilité et statistiques', 'Théorie des graphes', 'Traitement du signal', 'Architectures des ordinateurs', 'Systèmes d’exploitation', 'POO', 'Programmation C++', 'Programmation Python', 'BD', 'Électronique avancée', 'Logique formelle', 'Fondement de réseau', 'Théorie des langages et automates', 'Compilation', 'Dev web', 'Signaux et système', 'Capteurs et instrumentations', 'Physiques d’ondes', 'Transmission de données', 'Réseaux locaux', 'Matières sociaux-culturelles']
						}
					]
				}
			]
		},
		resourceKinds: [
			{
				key: 'cours',
				title: 'Cours',
				label: 'Fondamentaux',
				summary: 'Fiches, rappels de méthode et chapitres structurés.',
				action: 'Réviser les notions clés'
			},
			{
				key: 'tds',
				title: 'TDs',
				label: 'Application',
				summary: 'Exercices progressifs, corrections guidées et automatismes.',
				action: 'S’entraîner sur des séries ciblées'
			},
			{
				key: 'examens',
				title: 'Examens',
				label: 'Performance',
				summary: 'Sujets types, annales, barèmes et stratégies de rédaction.',
				action: 'Simuler un vrai concours'
			}
		]
	};

	const YEAR_LABELS = {
		'1ere': '1ère année',
		'2eme': '2ème année'
	};

	const TOPIC_SOURCE_GROUPS = [
		{
			patterns: [/(analyse|alg[eè]bre|probabilit|statist|graphes?|logique formelle|automates?|math)/i],
			sources: [
				{ label: 'Khan Academy', url: 'https://fr.khanacademy.org/math' },
				{ label: 'Math Is Fun', url: 'https://www.mathsisfun.com/' },
				{ label: 'Wolfram MathWorld', url: 'https://mathworld.wolfram.com/' }
			]
		},
		{
			patterns: [/(physique|m[eé]canique|optique|electrostatique|magn[eé]tostatique|electromagn[eé]tisme|thermodynamique|ondes?|physique moderne|signal)/i],
			sources: [
				{ label: 'Khan Academy', url: 'https://fr.khanacademy.org/science/physics' },
				{ label: 'PhET', url: 'https://phet.colorado.edu/' },
				{ label: 'HyperPhysics', url: 'http://hyperphysics.phy-astr.gsu.edu/' }
			]
		},
		{
			patterns: [/(chimie|organique|inorganique)/i],
			sources: [
				{ label: 'Khan Academy', url: 'https://fr.khanacademy.org/science/chemistry' },
				{ label: 'LibreTexts Chemistry', url: 'https://chem.libretexts.org/' },
				{ label: 'Chemguide', url: 'https://www.chemguide.co.uk/' }
			]
		},
		{
			patterns: [/(informatique|programmation|poo|python|c\+\+|dev web|bd\b|base de donn[eé]es|architecture des ordinateurs|syst[eè]mes? d’exploitation|fondement de r[eé]seau|r[eé]seau|compilation|coo|dsa|logiciel)/i],
			sources: [
				{ label: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
				{ label: 'cppreference', url: 'https://en.cppreference.com/' },
				{ label: 'Python Docs', url: 'https://docs.python.org/3/' }
			]
		},
		{
			patterns: [/(électronique|electronique|circuits?|capteurs?|instrumentations?|syst[eè]mes? logiques|hardware)/i],
			sources: [
				{ label: 'All About Circuits', url: 'https://www.allaboutcircuits.com/' },
				{ label: 'Falstad Circuit', url: 'https://falstad.com/circuit/' },
				{ label: 'Electronics-Tutorials', url: 'https://www.electronics-tutorials.ws/' }
			]
		},
		{
			patterns: [/(anglais|français|langue|social|culture)/i],
			sources: [
				{ label: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish' },
				{ label: 'TV5MONDE', url: 'https://apprendre.tv5monde.com/' },
				{ label: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/' }
			]
		},
		{
			patterns: [/(biologie|géologie|geologie|écologie|anatomie|bg\b)/i],
			sources: [
				{ label: 'Khan Academy Biology', url: 'https://fr.khanacademy.org/science/biology' },
				{ label: 'HHMI BioInteractive', url: 'https://www.biointeractive.org/' },
				{ label: 'OpenStax Biology', url: 'https://openstax.org/details/books/biology-2e' }
			]
		}
	];

	const DEFAULT_TOPIC_SOURCES = [
		{ label: 'Khan Academy', url: 'https://www.khanacademy.org/' },
		{ label: 'OpenStax', url: 'https://openstax.org/' },
		{ label: 'Wikipedia', url: 'https://www.wikipedia.org/' }
	];

	const TRACK_MAP = new Map();
	const CATALOG = buildCatalog();

	SITE.sections.classique.forEach((track) => TRACK_MAP.set(track.code, track));
	SITE.sections.integre.forEach((track) => TRACK_MAP.set(track.code, track));

	window.AIDE_PREPA_SITE = {
		...SITE,
		catalog: CATALOG
	};

	function shellHeader(active) {
		const navItems = [
			{ label: 'Accueil', href: 'src/index.html', key: 'home' },
			{ label: 'Filières', href: 'src/filiere.html', key: 'filiere' },
			{ label: 'Recherche', href: 'src/search.html', key: 'search' }
		];

		return `
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<a class="brand-mark" href="src/index.html" aria-label="Aide Prépa accueil">
						<span class="brand-mark-badge">AP</span>
						<span class="brand-copy">
							<span>${SITE.brand}</span>
							<small>Ressources de préparation</small>
						</span>
					</a>
					<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="Basculer la navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="siteNav">
						<div class="ms-lg-auto top-actions">
							<form class="search-inline" action="src/search.html" method="get" role="search">
								<input class="form-control" type="search" name="q" placeholder="Rechercher une ressource" aria-label="Rechercher">
							</form>
							<ul class="navbar-nav nav-pills gap-2">
								${navItems.map((item) => `<li class="nav-item"><a class="nav-link ${active === item.key ? 'active' : ''}" href="${item.href}">${item.label}</a></li>`).join('')}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		`;
	}

	document.addEventListener('DOMContentLoaded', () => {
		const route = getRoute();
		const active = route.kind === 'home' ? 'home' : route.kind === 'search' ? 'search' : 'filiere';
		const header = document.getElementById('site-header');
		const main = document.getElementById('site-main');
		const footer = document.getElementById('site-footer');

		if (header) {
			header.innerHTML = shellHeader(active);
		}

		if (main) {
			main.innerHTML = renderRoute(route);
		}

		if (footer) {
			footer.innerHTML = buildFooter();
		}

		document.body.classList.add('loaded');
		document.title = getDocumentTitle(route);
	});

	function buildCatalog() {
		const catalog = [];

		addCatalogEntry(catalog, 'src/index.html', 'Accueil', 'Point d’entrée du site avec les parcours, les ressources et la recherche.', ['accueil', 'prépa', 'ressources']);
		addCatalogEntry(catalog, 'src/filiere.html', 'Filières', 'Choisir entre prépa classique et prépa intégrée.', ['filière', 'classique', 'intégrée']);
		addCatalogEntry(catalog, 'src/search.html', 'Recherche', 'Retrouver rapidement une page, un cours ou un examen.', ['recherche', 'navigation']);

		SITE.sections.classique.forEach((track) => {
			addCatalogEntry(catalog, `src/classique/${track.code}/index.html`, `Prépa classique ${track.title}`, track.summary, [track.code, 'classique', ...getTrackTopics(track)]);

			['1ere', '2eme'].forEach((year) => {
				const yearTopics = getYearTopics(track, year);
				addCatalogEntry(catalog, `src/classique/${track.code}/${year}/index.html`, `${track.title} ${YEAR_LABELS[year]}`, `${track.label} - organisation des ressources de ${YEAR_LABELS[year].toLowerCase()}.`, [track.code, year, 'cours', 'tds', 'examens', ...yearTopics]);

				SITE.resourceKinds.forEach((resource) => {
					addCatalogEntry(catalog, `src/classique/${track.code}/${year}/${resource.key}.html`, `${resource.title} ${track.title} ${YEAR_LABELS[year]}`, `${resource.summary} pour le parcours ${track.title} en ${YEAR_LABELS[year].toLowerCase()}.`, [track.code, year, resource.key, ...yearTopics]);
				});
			});
		});

		SITE.sections.integre.forEach((track) => {
			addCatalogEntry(catalog, `src/integre/${track.code}/index.html`, `Prépa intégrée ${track.title}`, track.summary, [track.code, 'intégrée']);

			track.branches.forEach((branch) => {
				const branchTopics = getBranchTopics(branch);
				const branchIndexPath = `src/integre/${track.code}/${branch.code}/index.html`;
				if (branchIndexPath) {
					addCatalogEntry(catalog, branchIndexPath, `${branch.title} ${track.title}`, `${branch.label} - organisation des ressources et repères de travail.`, [track.code, branch.code, 'cours', 'tds', 'examens', ...branchTopics]);
				}

				SITE.resourceKinds.forEach((resource) => {
					addCatalogEntry(catalog, `src/integre/${track.code}/${branch.code}/${resource.key}.html`, `${resource.title} ${branch.title}`, `${resource.summary} pour la branche ${branch.title}.`, [track.code, branch.code, resource.key, ...branchTopics]);
				});
			});
		});

		return catalog;
	}

	function addCatalogEntry(collection, path, title, summary, tags) {
			collection.push({
				path,
				url: path,
				title,
				summary,
				tags,
				searchable: [title, summary, ...(tags || [])].join(' ').toLowerCase()
			});
	}

	function getRoute() {
		const path = normalizePath(window.location.pathname);
		const searchParams = new URLSearchParams(window.location.search);
		const segments = path.split('/').filter(Boolean);

		if (segments.length === 2 && segments[0] === 'src') {
			const file = segments[1];

			if (file === 'index.html') {
				return { kind: 'home', path, searchParams };
			}

			if (file === 'filiere.html') {
				return { kind: 'filiere', path, searchParams };
			}

			if (file === 'search.html') {
				return { kind: 'search', path, searchParams };
			}
		}

		if (segments[0] === 'src' && segments[1] === 'classique') {
			const track = TRACK_MAP.get(segments[2]);

			if (segments.length === 4 && segments[3] === 'index.html') {
				return { kind: 'track', section: 'classique', track, path, searchParams };
			}

			if (segments.length === 5 && segments[4] === 'index.html') {
				return { kind: 'year', section: 'classique', track, year: segments[3], path, searchParams };
			}

			if (segments.length === 5) {
				return { kind: 'resource', section: 'classique', track, year: segments[3], resource: stripHtml(segments[4]), path, searchParams };
			}
		}

		if (segments[0] === 'src' && segments[1] === 'integre') {
			const track = TRACK_MAP.get(segments[2]);

			if (segments.length === 4 && segments[3] === 'index.html') {
				return { kind: 'track', section: 'integre', track, path, searchParams };
			}

			if (segments.length === 5 && segments[4] === 'index.html') {
				return { kind: 'branch', section: 'integre', track, branch: segments[3], path, searchParams };
			}

			if (segments.length === 5) {
				return { kind: 'resource', section: 'integre', track, branch: segments[3], resource: stripHtml(segments[4]), path, searchParams };
			}
		}

		return { kind: 'home', path: 'src/index.html', searchParams: new URLSearchParams() };
	}

	function normalizePath(pathname) {
		const path = pathname.replace(/\\/g, '/');
		const srcIndex = path.lastIndexOf('/src/');
		if (srcIndex !== -1) {
			return path.slice(srcIndex + 1);
		}

		if (path.startsWith('/src/')) {
			return path.slice(1);
		}

		return path.replace(/^\//, '');
	}

	function stripHtml(fileName) {
		return fileName.replace(/\.html$/i, '');
	}

	function getDocumentTitle(route) {
		switch (route.kind) {
			case 'home':
				return 'Aide Prépa | Accueil';
			case 'filiere':
				return 'Aide Prépa | Filières';
			case 'search':
				return 'Aide Prépa | Recherche';
			case 'track':
				return `Aide Prépa | ${route.track ? route.track.title : 'Parcours'}`;
			case 'branch':
				return `Aide Prépa | ${route.track ? route.track.title : 'Branche'}`;
			case 'year':
				return `Aide Prépa | ${route.track ? route.track.title : 'Parcours'} ${YEAR_LABELS[route.year] || route.year}`;
			case 'resource':
				return `Aide Prépa | ${resourceTitle(route.resource)}${route.track ? ` - ${route.track.title}` : ''}`;
			default:
				return 'Aide Prépa';
		}
	}

	function renderRoute(route) {
		switch (route.kind) {
			case 'home':
				return renderHome();
			case 'filiere':
				return renderFiliere(route.searchParams);
			case 'search':
				return renderSearch(route.searchParams);
			case 'track':
				return renderTrack(route);
			case 'branch':
				return renderBranch(route);
			case 'year':
				return renderYear(route);
			case 'resource':
				return renderResource(route);
			default:
				return renderHome();
		}
	}

	function renderHome() {
		const cards = SITE.sections.classique.map((track) => renderTrackPreview(track, `src/classique/${track.code}/index.html`)).join('');
		const integratedCards = SITE.sections.integre.map((track) => renderTrackPreview(track, `src/integre/${track.code}/index.html`)).join('');

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<div class="hero-layout">
						<div>
							<p class="eyebrow">Plateforme de révision</p>
							<h1>Une structure claire pour réviser vite, bien et sans dispersion.</h1>
							<p class="hero-lead">Aide Prépa rassemble les cours, les travaux dirigés et les examens dans un parcours lisible, pensé pour avancer par filière, par année et par type de ressource.</p>
							<div class="hero-actions">
								<a class="btn btn-lg btn-light" href="src/filiere.html">Choisir une filière</a>
								<a class="btn btn-lg btn-outline-light" href="src/search.html">Rechercher un contenu</a>
							</div>
							<div class="pill-row">
								<span class="pill pill--accent">Cours</span>
								<span class="pill pill--warm">TDs</span>
								<span class="pill">Examens</span>
								<span class="pill">Prépa classique</span>
								<span class="pill">Prépa intégrée</span>
							</div>
						</div>
						<aside class="hero-side">
							<div class="overview-card">
								<p class="tagline">Vue d’ensemble</p>
								<div class="metric-grid">
									<div class="metric-card">
										<span class="metric-value">6</span>
										<p class="metric-label">parcours principaux</p>
									</div>
									<div class="metric-card">
										<span class="metric-value">3</span>
										<p class="metric-label">types de ressources</p>
									</div>
									<div class="metric-card">
										<span class="metric-value">1</span>
										<p class="metric-label">moteur de recherche</p>
									</div>
								</div>
							</div>
							<div class="overview-card">
								<p class="tagline">Méthode rapide</p>
								<div class="timeline">
									<div class="timeline-step">
										<span class="timeline-index">1</span>
										<div>
											<h4>Choisir la filière</h4>
											<p>Orientez-vous vers la prépa classique ou intégrée.</p>
										</div>
									</div>
									<div class="timeline-step">
										<span class="timeline-index">2</span>
										<div>
											<h4>Entrer dans l’année</h4>
											<p>Accédez au niveau voulu puis au type de ressource.</p>
										</div>
									</div>
									<div class="timeline-step">
										<span class="timeline-index">3</span>
										<div>
											<h4>Réviser efficacement</h4>
											<p>Enchaînez cours, TDs et examens dans le bon ordre.</p>
										</div>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</section>

				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Parcours</p>
							<h2 class="section-title">Les filières disponibles</h2>
						</div>
						<p class="section-lead">Chaque carte mène à un parcours clair avec les années, les branches et les ressources utiles.</p>
					</div>
					<div class="grid-3">${cards}${integratedCards}</div>
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Ressources</p>
							<h2 class="section-title">Cours, TDs et examens</h2>
						</div>
						<p class="section-lead">Le site est organisé autour de trois usages simples pour aller du rappel au test complet.</p>
					</div>
					<div class="grid-3">
						${SITE.resourceKinds.map((resource) => `
							<article class="content-card">
								<span class="pill ${resource.key === 'cours' ? 'pill--accent' : resource.key === 'examens' ? 'pill--warm' : ''}">${resource.label}</span>
								<h3>${resource.title}</h3>
								<p>${resource.summary}</p>
								<a class="btn btn-sm btn-outline-light" href="src/filiere.html">Explorer</a>
							</article>
						`).join('')}
					</div>
				</section>
			</div>
		`;
	}

	function renderFiliere(searchParams) {
		const selectedType = searchParams.get('type');
		const selectedSection = selectedType === 'integre' ? 'integre' : 'classique';
		const intro = selectedType
			? selectedSection === 'classique'
				? 'Prépa classique : choisissez votre filière puis votre année.'
				: 'Prépa intégrée : choisissez un cycle puis la branche correspondante.'
			: 'Sélectionnez d’abord le type de prépa à parcourir.';

		const cards = selectedSection === 'classique'
			? SITE.sections.classique.map((track) => renderTrackPreview(track, `src/classique/${track.code}/index.html`)).join('')
			: SITE.sections.integre.map((track) => renderTrackPreview(track, `src/integre/${track.code}/index.html`)).join('');

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<p class="eyebrow">Filières</p>
					<h1>Organisez votre parcours en deux étapes.</h1>
					<p class="hero-lead">${intro}</p>
					<div class="hero-actions">
						<a class="btn btn-light btn-lg" href="src/filiere.html?type=classique">Prépa classique</a>
						<a class="btn btn-outline-light btn-lg" href="src/filiere.html?type=integre">Prépa intégrée</a>
					</div>
				</section>
				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Parcours</p>
							<h2 class="section-title">${selectedSection === 'classique' ? 'Filières classiques' : 'Cycles intégrés'}</h2>
						</div>
						<p class="section-lead">Passez de la vue d’ensemble au détail sans changer de logique de navigation.</p>
					</div>
					<div class="grid-3">${cards}</div>
				</section>
			</div>
		`;
	}

	function renderSearch(searchParams) {
		const query = (searchParams.get('q') || '').trim();
		const normalized = query.toLowerCase();
		const results = normalized
			? CATALOG.filter((item) => item.searchable.includes(normalized))
			: [];

		const resultMarkup = normalized
			? results.length
				? results.map((item) => `
						<article class="search-result">
							<h3><a href="${item.url}">${item.title}</a></h3>
							<p>${item.summary}</p>
							<div class="meta">${item.tags.slice(0, 4).map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join('')}</div>
						</article>
					`).join('')
				: '<div class="empty-state">Aucun résultat ne correspond à cette recherche.</div>'
			: '<div class="empty-state">Saisissez un mot-clé pour chercher un cours, un TD, un examen ou un parcours.</div>';

		const featured = CATALOG.filter((item) => ['Accueil', 'Filières', 'Recherche'].indexOf(item.title) === -1).slice(0, 6);

		return `
			<div class="page-shell search-panel">
				<section class="page-hero fade-in">
					<p class="eyebrow">Recherche</p>
					<h1>Retrouvez une page en quelques secondes.</h1>
					<p class="hero-lead">La recherche parcourt l’ensemble du plan du site pour vous renvoyer vers le bon parcours, la bonne année ou le bon type de ressource.</p>
					<form class="search-inline hero-actions" action="src/search.html" method="get">
						<input class="form-control form-control-lg" type="search" name="q" value="${escapeHtml(query)}" placeholder="Ex. MP 2ème examens, CPI2 mi, BG 1ere cours" aria-label="Rechercher">
						<button class="btn btn-lg btn-light" type="submit">Rechercher</button>
					</form>
				</section>

				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Résultats</p>
							<h2 class="section-title">${normalized ? `${results.length} résultat${results.length > 1 ? 's' : ''}` : 'Rien à afficher pour le moment'}</h2>
						</div>
						<p class="section-lead">${normalized ? `Recherche pour « ${query} »` : 'Lancez une requête pour filtrer les pages du site.'}</p>
					</div>
					<div class="result-grid">${resultMarkup}</div>
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Accès rapide</p>
							<h2 class="section-title">Pages utiles</h2>
						</div>
					</div>
					<div class="grid-3">
						${featured.map((item) => `
							<article class="content-card">
								<span class="pill">${escapeHtml(primaryTag(item.tags))}</span>
								<h3><a href="${item.url}">${item.title}</a></h3>
								<p>${item.summary}</p>
							</article>
						`).join('')}
					</div>
				</section>
			</div>
		`;
	}

	function renderTrack(route) {
		if (!route.track) {
			return renderFallback('Parcours introuvable', 'Le parcours demandé n’existe pas dans la structure actuelle.');
		}

		if (route.section === 'classique') {
			return renderClassicTrack(route.track);
		}

		return renderIntegratedTrack(route.track);
	}

	function renderClassicTrack(track) {
		const subjects = getTrackTopics(track);
		const statusCard = track.code === 'bg'
			? `
				<div class="panel">
					<h3 class="display-title">BG en construction</h3>
					<p>Les contenus BG ne sont pas encore publiés. Les prochaines pages garderont cette structure pour accueillir les matières de biologie et de géologie.</p>
				</div>
			`
			: '';
		const subjectCards = track.code === 'bg'
			? statusCard
			: subjects.length
			? subjects.map((topic) => renderTopicPanel(topic, `Matière de référence du parcours ${track.title}.`)).join('')
			: statusCard;

		const yearCards = track.years.map((year) => `
			<article class="content-card route-card">
				<span class="pill ${track.accent}">${track.title}</span>
				<h3>${YEAR_LABELS[year]}</h3>
				<p>${track.label} - accès direct aux cours, aux TDs et aux examens de ${YEAR_LABELS[year].toLowerCase()}.</p>
				<div class="hero-actions">
					<a class="btn btn-sm btn-light" href="src/classique/${track.code}/${year}/index.html">Ouvrir l’année</a>
					<a class="btn btn-sm btn-outline-light" href="src/classique/${track.code}/${year}/cours.html">Cours</a>
					<a class="btn btn-sm btn-outline-light" href="src/classique/${track.code}/${year}/tds.html">TDs</a>
				</div>
			</article>
		`).join('');

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<div class="breadcrumb">
						<a href="src/index.html">Accueil</a><span class="breadcrumb-sep">/</span>
						<a href="src/filiere.html?type=classique">Prépa classique</a><span class="breadcrumb-sep">/</span>
						<span>${track.title}</span>
					</div>
					<p class="eyebrow">Prépa classique</p>
					<h1>${track.title} - ${track.label}</h1>
					<p class="hero-lead">${track.summary}</p>
					<div class="hero-actions">
						<a class="btn btn-light btn-lg" href="src/classique/${track.code}/1ere/index.html">Commencer en 1ère année</a>
						<a class="btn btn-outline-light btn-lg" href="src/classique/${track.code}/2eme/index.html">Aller en 2ème année</a>
					</div>
					<div class="pill-row">${track.topics.map((topic) => `<span class="pill">${escapeHtml(topic)}</span>`).join('')}</div>
				</section>
				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Organisation</p>
							<h2 class="section-title">Vos deux années</h2>
						</div>
						<p class="section-lead">Chaque année débouche ensuite sur les cours, les TDs et les examens dédiés.</p>
					</div>
					<div class="grid-3">${yearCards}</div>
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Matières</p>
							<h2 class="section-title">${track.code === 'bg' ? 'En cours de construction' : 'Programme du parcours'}</h2>
						</div>
					</div>
					<div class="topic-grid">
						${subjectCards}
					</div>
				</section>
			</div>
		`;
	}

	function renderIntegratedTrack(track) {
		const subjects = track.code === 'cpi1'
			? getBranchTopics(track.branches[0])
			: track.branches.flatMap((branch) => getBranchTopics(branch));
		const uniqueSubjects = Array.from(new Set(subjects));

		const branchCards = track.branches.map((branch) => `
			<article class="content-card route-card">
				<span class="pill ${track.accent}">${track.title}</span>
				<h3>${branch.title}</h3>
				<p>${branch.label}</p>
				<p>${branch.summary}</p>
				<div class="hero-actions">
					${track.code === 'cpi2'
						? `<a class="btn btn-sm btn-light" href="src/integre/${track.code}/${branch.code}/index.html">Ouvrir la branche</a>`
						: `<a class="btn btn-sm btn-light" href="src/integre/${track.code}/${branch.code}/cours.html">Cours</a>`}
					<a class="btn btn-sm btn-outline-light" href="src/integre/${track.code}/${branch.code}/cours.html">Cours</a>
					<a class="btn btn-sm btn-outline-light" href="src/integre/${track.code}/${branch.code}/tds.html">TDs</a>
				</div>
			</article>
		`).join('');

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<div class="breadcrumb">
						<a href="src/index.html">Accueil</a><span class="breadcrumb-sep">/</span>
						<a href="src/filiere.html?type=integre">Prépa intégrée</a><span class="breadcrumb-sep">/</span>
						<span>${track.title}</span>
					</div>
					<p class="eyebrow">Prépa intégrée</p>
					<h1>${track.title} - ${track.label}</h1>
					<p class="hero-lead">${track.summary}</p>
					<div class="pill-row">${track.branches.map((branch) => `<span class="pill">${escapeHtml(branch.label)}</span>`).join('')}</div>
				</section>
				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Branches</p>
							<h2 class="section-title">Accéder aux ressources</h2>
						</div>
						<p class="section-lead">Les ressources suivent la branche et le type de travail demandé.</p>
					</div>
					 <div class="grid-3">${branchCards}</div> 
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Matières</p>
							<h2 class="section-title">${track.code === 'cpi1' ? 'Programme de CPI1' : 'Programme commun avant spécialisation'}</h2>
						</div>
					</div>
					<div class="topic-grid">
						${uniqueSubjects.map((topic) => renderTopicPanel(topic, `Matière proposée dans le cycle ${track.title}.`)).join('')}
					</div>
				</section>
			</div>
		`;
	}

	function renderBranch(route) {
		if (!route.track) {
			return renderFallback('Branche introuvable', 'La branche demandée n’existe pas dans le parcours courant.');
		}

		const branch = (route.track.branches || []).find((item) => item.code === route.branch);
		if (!branch) {
			return renderFallback('Branche introuvable', 'La branche demandée n’est pas disponible dans ce cycle.');
		}

		const topics = getBranchTopics(branch);

		const resourceCards = SITE.resourceKinds.map((resource) => `
			<article class="content-card route-card">
				<span class="pill ${route.track.accent}">${resource.label}</span>
				<h3>${resource.title}</h3>
				<p>${resource.summary}</p>
				<a class="btn btn-sm btn-light" href="src/integre/${route.track.code}/${branch.code}/${resource.key}.html">Ouvrir ${resource.title.toLowerCase()}</a>
			</article>
		`).join('');

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<div class="breadcrumb">
						<a href="src/index.html">Accueil</a><span class="breadcrumb-sep">/</span>
						<a href="src/filiere.html?type=integre">Prépa intégrée</a><span class="breadcrumb-sep">/</span>
						<a href="src/integre/${route.track.code}/index.html">${route.track.title}</a><span class="breadcrumb-sep">/</span>
						<span>${branch.title}</span>
					</div>
					<p class="eyebrow">Branche ${route.track.title}</p>
					<h1>${branch.title} - ${branch.label}</h1>
					<p class="hero-lead">${branch.summary}</p>
				</section>
				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Ressources</p>
							<h2 class="section-title">Cours, TDs et examens</h2>
						</div>
					</div>
					<!-- <div class="grid-3">${resourceCards}</div> -->
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Matières</p>
							<h2 class="section-title">Programme détaillé</h2>
						</div>
					</div>
					<div class="topic-grid">
						${topics.map((topic) => renderTopicPanel(topic, `Matière de la branche ${branch.title}.`)).join('')}
					</div>
				</section>
			</div>
		`;
	}

	function renderYear(route) {
		if (!route.track) {
			return renderFallback('Année introuvable', 'Le parcours demandé n’existe pas.');
		}

		const resourceCards = SITE.resourceKinds.map((resource) => `
			<article class="content-card route-card">
				<span class="pill ${route.track.accent}">${resource.label}</span>
				<h3>${resource.title}</h3>
				<p>${resource.summary}</p>
				<a class="btn btn-sm btn-light" href="src/classique/${route.track.code}/${route.year}/${resource.key}.html">Ouvrir ${resource.title.toLowerCase()}</a>
			</article>
		`).join('');

		const siblingYear = route.year === '1ere' ? '2eme' : '1ere';

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<div class="breadcrumb">
						<a href="src/index.html">Accueil</a><span class="breadcrumb-sep">/</span>
						<a href="src/filiere.html?type=classique">Prépa classique</a><span class="breadcrumb-sep">/</span>
						<a href="src/classique/${route.track.code}/index.html">${route.track.title}</a><span class="breadcrumb-sep">/</span>
						<span>${YEAR_LABELS[route.year] || route.year}</span>
					</div>
					<p class="eyebrow">Prépa classique</p>
					<h1>${route.track.title} - ${YEAR_LABELS[route.year] || route.year}</h1>
					<p class="hero-lead">Accédez à la structure complète de l’année : cours pour réviser, TDs pour consolider et examens pour vous tester.</p>
					<div class="hero-actions">
						<a class="btn btn-light btn-lg" href="src/classique/${route.track.code}/${route.year}/cours.html">Cours</a>
						<a class="btn btn-outline-light btn-lg" href="src/classique/${route.track.code}/${route.year}/tds.html">TDs</a>
						<a class="btn btn-outline-light btn-lg" href="src/classique/${route.track.code}/${route.year}/examens.html">Examens</a>
					</div>
					<div class="pill-row">
						<span class="pill ${route.track.accent}">${route.track.label}</span>
						<span class="pill">${YEAR_LABELS[route.year] || route.year}</span>
						<span class="pill">Année voisine : <a href="src/classique/${route.track.code}/${siblingYear}/index.html">${YEAR_LABELS[siblingYear]}</a></span>
					</div>
				</section>

				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Ressources</p>
							<h2 class="section-title">Les trois portes d’entrée cours, TDs et examens</h2>
						</div>
						<p class="section-lead">Le même parcours pour toutes les années, avec un contenu qui s’adapte à la filière.</p>
					</div>
					<!-- <div class="grid-3">${resourceCards}</div> -->
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Matières</p>
							<h2 class="section-title">${route.track.code === 'bg' ? 'Parcours en construction' : `Programme de ${YEAR_LABELS[route.year] || route.year}`}</h2>
						</div>
					</div>
					<div class="topic-grid">
						${getYearTopics(route.track, route.year).map((topic) => renderTopicPanel(topic, route.track.code === 'bg' ? 'Le détail n’est pas encore publié.' : `Matière travaillée en ${YEAR_LABELS[route.year] || route.year}.`)).join('')}
					</div>
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Focus</p>
							<h2 class="section-title">À travailler en priorité</h2>
						</div>
					</div>
					<div class="grid-4">
						<div class="panel">
							<h3 class="display-title">Rythme de travail</h3>
							<p>Travaillez une notion courte en cours, appliquez-la en TD puis testez-la sur un sujet plus long.</p>
						</div>
						<div class="panel">
							<h3 class="display-title">Méthode</h3>
							<p>Conservez une fiche par chapitre avec formules, erreurs fréquentes et points à revoir.</p>
						</div>
						<div class="panel">
							<h3 class="display-title">Révision active</h3>
							<p>Revenez régulièrement aux exercices corrigés pour vérifier que les automatismes sont installés.</p>
						</div>
						<div class="panel">
							<h3 class="display-title">Dernier réflexe</h3>
							<p>Terminez par un examen pour vérifier la tenue du temps, la rédaction et la gestion du stress.</p>
						</div>
					</div>
				</section>
			</div>
		`;
	}

	function renderResource(route) {
		const resource = SITE.resourceKinds.find((item) => item.key === route.resource) || SITE.resourceKinds[0];
		const title = resourceTitle(resource.key);
		const topicPool = getTopicPool(route);
		const siblingLinks = SITE.resourceKinds.map((item) => `
			<a class="btn btn-sm ${item.key === resource.key ? 'btn-light' : 'btn-outline-light'}" href="${buildSiblingUrl(route, item.key)}">${item.title}</a>
		`).join('');

		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<div class="breadcrumb">
						<a href="src/index.html">Accueil</a><span class="breadcrumb-sep">/</span>
						<a href="${buildParentLink(route)}">${route.track ? route.track.title : 'Parcours'}</a><span class="breadcrumb-sep">/</span>
						<span>${title}</span>
					</div>
					<p class="eyebrow">${route.section === 'classique' ? 'Prépa classique' : 'Prépa intégrée'}</p>
					<h1>${title}</h1>
					<p class="hero-lead">${resource.summary} ${route.track ? `Le contenu est adapté au parcours ${route.track.title}${route.year ? ` et à ${YEAR_LABELS[route.year] || route.year}` : ''}.` : ''}</p>
					<div class="hero-actions">${siblingLinks}</div>
				</section>

				<section class="section-block fade-in delay-1">
					<div class="section-head">
						<div>
							<p class="eyebrow">Chapitres</p>
							<h2 class="section-title">Repères rapides</h2>
						</div>
						<p class="section-lead">La page reste courte mais donne la logique de travail à suivre.</p>
					</div>
					<div class="grid-3">
						${topicPool.map((topic, index) => `
							<article class="content-card">
								<span class="pill ${index % 2 === 0 ? 'pill--accent' : 'pill--warm'}">${resource.title}</span>
								<h3>${escapeHtml(topic)}</h3>
								<p>${resourceKeySentence(resource.key, topic)}</p>
							</article>
						`).join('')}
					</div>
				</section>

				<section class="section-block fade-in delay-2">
					<div class="section-head">
						<div>
							<p class="eyebrow">Checklist</p>
							<h2 class="section-title">À faire avant de passer au suivant</h2>
						</div>
					</div>
					<div class="grid-4">
						<div class="panel"><h3 class="display-title">1. Comprendre</h3><p>Relisez le cours et notez les définitions à connaître sans hésitation.</p></div>
						<div class="panel"><h3 class="display-title">2. Appliquer</h3><p>Faites les exercices les plus courts jusqu’à obtenir une méthode stable.</p></div>
						<div class="panel"><h3 class="display-title">3. Corriger</h3><p>Reprenez les erreurs et écrivez la cause de chaque blocage.</p></div>
						<div class="panel"><h3 class="display-title">4. Tester</h3><p>Terminez avec un sujet plus long pour vérifier la tenue du temps.</p></div>
					</div>
				</section>
			</div>
		`;
	}

	function renderTrackPreview(track, url) {
		return `
			<article class="content-card fade-in">
				<span class="pill ${track.accent}">${track.title}</span>
				<h3>${track.label}</h3>
				<p>${track.summary}</p>
				<div class="hero-actions">
					<a class="btn btn-sm btn-light" href="${url}">Ouvrir</a>
					<a class="btn btn-sm btn-outline-light" href="src/search.html?q=${encodeURIComponent(track.title)}">Rechercher</a>
				</div>
			</article>
		`;
	}

	function renderFallback(title, text) {
		return `
			<div class="page-shell">
				<section class="page-hero fade-in">
					<p class="eyebrow">Aide Prépa</p>
					<h1>${escapeHtml(title)}</h1>
					<p class="hero-lead">${escapeHtml(text)}</p>
					<div class="hero-actions">
						<a class="btn btn-light btn-lg" href="src/index.html">Retour à l’accueil</a>
						<a class="btn btn-outline-light btn-lg" href="src/filiere.html">Choisir une filière</a>
					</div>
				</section>
			</div>
		`;
	}

	function buildParentLink(route) {
		if (route.section === 'classique') {
			if (route.year) {
				return `src/classique/${route.track.code}/${route.year}/index.html`;
			}

			return `src/classique/${route.track.code}/index.html`;
		}

		if (route.section === 'integre') {
			if (route.branch && route.track && route.track.code === 'cpi2') {
				return `src/integre/${route.track.code}/${route.branch}/index.html`;
			}

			return `src/integre/${route.track.code}/index.html`;
		}

		return 'src/index.html';
	}

	function buildSiblingUrl(route, resourceKey) {
		if (route.section === 'classique') {
			return `src/classique/${route.track.code}/${route.year}/${resourceKey}.html`;
		}

		return `src/integre/${route.track.code}/${route.branch}/${resourceKey}.html`;
	}

	function buildFooter() {
		const year = new Date().getFullYear();
		return `
			<div class="footer-shell py-4 py-lg-5">
				<div class="container-xl">
					<div class="footer-grid">
						<div>
							<h3 class="footer-title">Aide Prépa</h3>
							<p class="small-note">Un site pour accompagner les étudiants en préparation aux concours d'entrée aux cycles de formation d'ingénieurs.</p>
						</div>
						<div>
							<h3 class="footer-title">Navigation</h3>
							<ul class="footer-list">
								<li><a href="src/index.html">Accueil</a></li>
								<li><a href="src/filiere.html">Filière</a></li>
								<li><a href="src/search.html">Recherche</a></li>
							</ul>
						</div>
						<div>
							<h3 class="footer-title">Conseil</h3>
							<p class="small-note">Commencez par le parcours, ouvrez l’année, puis enchaînez cours, TDs et examens.</p>
						</div>
					</div>
					<div class="mt-4 d-flex flex-wrap justify-content-between gap-2 small-note">
						<span>© ${year} Aide Prépa</span>
						<span></span>
					</div>
				</div>
			</div>
		`;
	}

	function resourceTitle(resourceKey) {
		const resource = SITE.resourceKinds.find((item) => item.key === resourceKey);
		return resource ? resource.title : 'Ressource';
	}

	function resourceKeySentence(resourceKey, topic) {
		const sentences = {
			cours: `Reprenez ${topic.toLowerCase()} en lisant les définitions, les formules et les idées clés.`,
			tds: `Travaillez ${topic.toLowerCase()} en commençant par les exercices les plus courts puis en augmentant la difficulté.`,
			examens: `Testez ${topic.toLowerCase()} dans des conditions proches d’un sujet de concours pour vérifier votre rythme.`
		};

		return sentences[resourceKey] || 'Travaillez la notion, puis vérifiez votre méthode sur des exercices progressifs.';
	}

	function renderTopicPanel(topic, description) {
		const sources = getTopicSources(topic);

		return `
			<article class="panel topic-panel">
				<div class="topic-panel-head">
					<h3 class="display-title">${escapeHtml(topic)}</h3>
					<span class="pill">Sources</span>
				</div>
				<p>${escapeHtml(description)}</p>
				<div class="source-links">
					${sources.map((source) => `
						<a class="source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a>
					`).join('')}
				</div>
			</article>
		`;
	}

	function getTopicSources(topic) {
		const normalizedTopic = String(topic || '').toLowerCase();
		const match = TOPIC_SOURCE_GROUPS.find((group) => group.patterns.some((pattern) => pattern.test(normalizedTopic)));
		return match ? match.sources : DEFAULT_TOPIC_SOURCES;
	}

	function getTopicPool(route) {
		if (route.section === 'classique' && route.track) {
			return getYearTopics(route.track, route.year).slice(0, 4);
		}

		if (route.section === 'integre' && route.track) {
			if (route.branch) {
				return getBranchTopics((route.track.branches || []).find((branch) => branch.code === route.branch)).slice(0, 4);
			}

			return getBranchTopics((route.track.branches || [])[0]).slice(0, 4);
		}

		if (route.track && Array.isArray(route.track.topics)) {
			return route.track.topics.slice(0, 4);
		}

		if (route.section === 'integre') {
			return ['Mathématiques', 'Physique', 'Informatique', 'Méthodologie'];
		}

		return ['Notion 1', 'Notion 2', 'Notion 3', 'Notion 4'];
	}

	function getTrackTopics(track) {
		return Array.isArray(track && track.topics) ? track.topics : [];
	}

	function getYearTopics(track, year) {
		if (track && track.yearTopics && Array.isArray(track.yearTopics[year])) {
			return track.yearTopics[year];
		}

		return getTrackTopics(track);
	}

	function getBranchTopics(branch) {
		return Array.isArray(branch && branch.topics) ? branch.topics : [];
	}

	function primaryTag(tags) {
		return tags && tags.length ? tags[0] : 'Ressource';
	}

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}
})();