/* Add link to `html.c-code articles` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear || meta.page.className !== 'c-code') return content;
	if (!meta.page.alternateUrl) return content;

	const aside = [
		'<aside class="figure standout codepen" aria-labelledby="showcase">',
		'<h2 id="showcase">Showcase</h2>',
		`<p><a href="${meta.page.alternateUrl}">Visit CodePen to see this&nbsp;example in&nbsp;action.</a></p>`,
		'</aside>'
	];
	const insertBefore = content.indexOf('<aside aria-labelledby="comments">');
	content.splice(insertBefore, 0, aside.join('\n'));
	return content;
};

export default modify;
