/* cssence.com development script (localhost page enhancer) */

import getMetaData from '/dev/data-meta.mjs';
import storeTocData from '/dev/data-toc.mjs';
import augment from '/dev/augment.mjs';

(async (d) => {
	const url = new URL(document.URL);
	if (url.search === '?raw') return;

	const loadJS = (src, type) => {
		const s = d.createElement('script');
		s.src = src;
		if (type) s.type = type;
		s.async = true;
		d.querySelector('head').appendChild(s);
		return s;
	};

	const meta = getMetaData();
	try {

		const [response, tocResponse] = await Promise.all([fetch(url.pathname), fetch('/index.json')]);
		const html = await response.text();
		const toc = await tocResponse.json();
		storeTocData(meta, toc);

		const enhancedHtml = augment(url.pathname, html, meta);

		const scripts = [];
		let innerHTML = enhancedHtml.match(/<html[^>]*>([\S\s]*)<\/html>/)[1];
		innerHTML = innerHTML.replaceAll(/<script src="([^"]+)"[^>]*><\/script>\n/g, (element, src) => { scripts.push(src); return ''; });
		d.querySelector('html').innerHTML = innerHTML;
		scripts.forEach((src) => loadJS(src));

	} catch (err) {
		console.error(err);
	}
})(document);
