/* Add contentinfo `body > footer` */

const modify = (content, meta) => {

	const navElsewhere = [
		'<nav class="nav-else" aria-label="Elsewhere">',
		'<p><a href="https://github.com/cssence">GitHub</a>  <a rel="me" href="https://codepen.io/cssence">CodePen</a>  <a rel="me" href="https://mas.to/@CSSence">Mastodon</a></p>',
		'</nav>'
	];
	const contentInfo = [
		'<div class="content-info">',
		`<p>© 2010–${meta.date.year} <a href="/about/matt/">Matthias Zöchling.</a></p>`,
		'<p>Available under the <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons Attribution 4.0 International License">CC&nbsp;BY</a> license.</p>',
		'<p><a href="/imprint/">Imprint</a>  <a href="#navigation">Menu<span aria-hidden="true" data-hl="Menu"></span></a>  <a href="/settings/">Settings<span aria-hidden="true" data-hl="Settings"></span></a>  <a href="#top">Back to top</a></p>',
		'</div>'
	];
	const footer = [
		'<footer class="imprint">',
		'<div>',
		navElsewhere.join('\n'),
		contentInfo.join('\n'),
		'</div>',
		'</footer>'
	];

	const insertBefore = content.indexOf('</body>');
	content.splice(insertBefore, 0, ...footer);

};

export default modify;
