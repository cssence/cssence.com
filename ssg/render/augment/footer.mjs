/* Add contentinfo `body > footer` */

const modify = (content, meta) => {

	const firstLastLink = meta.page.isPostByYear ? '<a href="#contribute">Contribute</a> ' : '';
	const footer = [
		'<footer class="imprint">',
		'<div>',
		'<h2 class="visually-hidden">Additional information</h2>',
		`<p><span>© 2010-${meta.date.year} <a href="/about/matt/">Matthias Zöchling.</a> </span><span>Available under the <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons Attribution 4.0 International License">CC&nbsp;BY</a> license. </span><span><a href="/about/privacy/">Legalese</a> <a href="/help/">Help</a> <a href="/settings/">Settings<span aria-hidden="true" data-hl="Settings"></span></a></span></p>`,
		'<section>',
		'<h3 class="visually-hidden" id="elsewhere">CSSence elsewhere on the web</h3>',
		'<p><a rel="me" href="https://codepen.io/cssence">CodePen</a> <a rel="me" href="https://mas.to/@CSSence">Mastodon</a> <a rel="me" href="https://twitter.com/CSSence">Twitter</a></p>',
		'</section>',
		'<section>',
		`<h3 class="visually-hidden" id="bottom">Thanks for ${meta.page.isIndex ? 'visiting' : 'reading'}</h3>`,
		`<p>${firstLastLink}<a href="#navigation">Browse<span aria-hidden="true" data-hl="Menu"></span></a> <a href="#top">Back to top</a></p>`,
		'</section>',
		'</div>',
		'</footer>'
	];

	const insertBefore = content.indexOf('</body>');
	content.splice(insertBefore, 0, footer.join('\n'));

};

export default modify;
