/* Modify `head` */

const modify = (content, meta) => {

	const TITLE = 3, DESC = 4, ALT = 5;

	const forbidden = ['/404/', '/about/about/', '/assets/'].includes(meta.page.path);

	const intro = [
		'<meta charset="utf-8">',
		'<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1">',
		meta.page.path === '/' ? content[TITLE] : `<title>${meta.page.title} - CSSence.com</title>`, // this also replaces all &nbsp;
		content[DESC],
		`<meta name="author" content="${meta.date.getAuthor(meta.page.published || meta.page.revised)}">`,
		'<meta name="color-scheme" content="light dark">',
		`<link rel="canonical" href="${meta.getPermalink(meta.page.path)}">`,
	];
	const styles = [
		'<link rel="alternate stylesheet" media="screen" href="/assets/basic.css" title="Basic Style">',
		'<link rel="alternate stylesheet" media="screen" href="/assets/advanced.css" title="Advanced Style">',
		'<link rel="alternate stylesheet" media="screen" href="/assets/elegant.css" title="Elegant Style">',
		'<link rel="stylesheet" media="screen" href="/assets/advanced.css" title="Custom Style">',
	];
	const ogp = [
		`<meta property="og:type" content="${meta.page.isIndex ? 'website' : 'article'}">`,
		`<meta property="og:url" content="${meta.getPermalink(meta.page.path)}">`,
		`<meta property="og:title" content="${meta.page.title}">`,
		`<meta property="og:description" content="${meta.page.description}">`,
		`<meta property="og:image" content="${meta.getPermalink(meta.page.thumbnail)}">`,
	];
	const branding = [
		'<link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/apple-touch-icon.png">',
		'<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png">',
		'<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">',
		'<link rel="manifest" href="/assets/manifest.json">',
		'<meta name="theme-color" content="#202225">',
	];
	const other = [
		`<meta name="robots" content="${forbidden ? 'noindex' : 'index'},follow">`,
	];
	const scripts = [
		'<script nomodule src="/assets/old.js"></script>',
		'<script type="module" src="/assets/modern.js"></script>',
	];

	const swapAfter = content.indexOf('<head>') + 1;
	const swapBefore = content.indexOf('</head>');
	let inside = null;
	for (let i = ALT; i < swapBefore; i += 1) {
		if (inside) {
			inside.addTo.push(content[i]);
			if (content[i] === inside.until) inside = null;
		} else {
			if (content[i].startsWith('<script')) {
				scripts.push(content[i]);
				if (!content[i].endsWith('</script>')) inside = {addTo: scripts, until: '</script>'};
			} else if (content[i].startsWith('<link rel="alternate stylesheet"') || content[i].startsWith('<link rel="stylesheet"')) {
				styles.push(content[i]);
			} else if (content[i].startsWith('<style')) {
				styles.push(content[i]);
				if (!content[i].endsWith('</style>')) inside = {addTo: styles, until: '</style>'};
			} else if (content[i].startsWith('<link rel="alternate" type="text/html"')) {
				const remoteUrl = content[i].match(/href="([^"]+)/)[1];
				const remote = remoteUrl.split('/')[2];
				if (!['codepen.io', 'medium.com', 'mas.to', 'bsky.app', 'twitter.com', 'cssence.wordpress.com'].includes(remote)) {
					intro.push(content[i]);
				}
			} else {
				other.push(content[i]);
			}
		}
	}
	styles.push('<link rel="stylesheet" media="print" href="/assets/basic.css">');
	const head = [
		...intro,
		...styles,
		...branding,
		...scripts,
		...ogp,
		...other,
	];
	content.splice(swapAfter, swapBefore - swapAfter, head.join('\n'));
};	

export default modify;
