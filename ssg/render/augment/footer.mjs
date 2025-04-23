/* Add contentinfo `body > footer` */

const modify = (content, meta) => {

	const footer = [
		'<footer class="imprint">',
		`<p><span>© 2010–${meta.date.year} <a href="/about/matt/">Matthias Zöchling</a>  </span><span><a href="/imprint/">Imprint</a>  <a href="/webrings/">Webrings</a>  <a href="/elsewhere/">Elsewhere</a>  <a href="#navigation">Menu<span aria-hidden="true" data-hl="Menu"></span></a>  <a href="/settings/">Settings<span aria-hidden="true" data-hl="Settings"></span></a>  </span><a href="/rss/">RSS feeds</a>  <a href="#top">Back to top</a></p>`,
		'</footer>'
	];

	const insertBefore = content.indexOf('</body>');
	content.splice(insertBefore, 0, ...footer);

};

export default modify;
