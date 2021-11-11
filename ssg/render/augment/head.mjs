/* Modify `head` */

const modify = (content, meta) => {

	if (meta.page.path !== '/') {
		content[5] = `<title>${meta.page.title} • CSSence.com</title>`; // this also replaces all &nbsp;
	}

	const alternateUrl = content[7].startsWith('<link rel="alternate" type="text/html"') ? content[7].match(/href="([^"]+)/)[1] : undefined;
	meta.page.alternateUrl = content[7].includes('data-syndication=') ? undefined : alternateUrl;
	if (alternateUrl) content.splice(7, 1);

	const headPlus = [
		`<meta name="author" content="${meta.date.getAuthor(meta.page.published || meta.page.revised)}">`,
		`<link rel="canonical" href="${meta.getPermalink(meta.page.path)}">`,

		'<link rel="alternate stylesheet" media="screen" href="/assets/basic.css" title="Basic Style">',
		'<link rel="stylesheet" media="screen" href="/assets/advanced.css" title="Advanced Style">',
		'<link rel="stylesheet" media="print" href="/assets/basic.css">',

		`<meta property="og:type" content="${meta.page.isIndex ? 'website' : 'article'}">`,
		`<meta property="og:url" content="${meta.getPermalink(meta.page.path)}">`,
		'<meta name="twitter:card" content="summary">',
		'<meta name="twitter:creator" content="@cssence">',
		`<meta name="twitter:title" property="og:title" content="${meta.page.title}">`,
		`<meta name="twitter:description" property="og:description" content="${meta.page.description}">`,
		`<meta name="twitter:image" property="og:image" content="${meta.getPermalink(meta.page.thumbnail)}">`,

		'<link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/apple-touch-icon.png">',
		'<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png">',
		'<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">',
		'<link rel="manifest" href="/assets/manifest.json">',
		'<meta name="theme-color" content="#202225">',

		`<meta name="robots" content="${['/404/', '/assets/', '/about/about/'].includes(meta.page.path) ? 'no' : ''}index,follow">`,

		'<script src="/assets/ctm.js"></script>',
	];

	const insertBefore = content.indexOf('</head>');
	content.splice(insertBefore, 0, headPlus.join('\n'));

};	

export default modify;
