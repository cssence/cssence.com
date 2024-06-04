/* Add link to `html.c-extra articles` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear || meta.page.className !== 'c-extra') return;
	if (!meta.page.alternateUrl) return;

	const aside = [
		'<div class="figure standout codepen">',
		'<h2 id="showcase">Showcase</h2>',
		`<p><a href="${meta.page.alternateUrl}">Visit CodePen to see this&nbsp;example in&nbsp;action.</a></p>`,
		'</div>'
	];
	let insertBefore = content.indexOf('<h2 id="comments">Comments</h2>') - 2;
	for (let i = insertBefore - 1; content[i] !== '</header>'; i -= 1) {
		if (content[i].startsWith('<h2 id="updates"') || content[i].startsWith('<h2 id="fns"')) {
			insertBefore = i - 1;
		} else if (content[i].startsWith('<h2')) {
			break;
		}
	}
	content.splice(insertBefore, 0, aside.join('\n'));

};

export default modify;
