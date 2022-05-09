/* Add link to `html.c-code articles` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear || meta.page.className !== 'c-code') return;
	if (!meta.page.alternateUrl) return;

	const aside = [
		'<aside class="figure standout codepen" aria-labelledby="showcase">',
		'<h2 id="showcase">Showcase</h2>',
		`<p><a href="${meta.page.alternateUrl}">Visit CodePen to see this&nbsp;example in&nbsp;action.</a></p>`,
		'</aside>'
	];
	const hasUpdates = content.indexOf('<h2 id="updates">Updates</h2>');
	const hasFootnotes = content.indexOf('<h2>Footnotes</h2>');
	let insertBefore = content.indexOf('<h2 id="comments">Comments</h2>') - 2;
	for (let i = insertBefore - 1; content[i] !== '</header>'; i -= 1) {
		if (content[i].startsWith('<h2 id="updates"') || content[i] === '<h2>Footnotes</h2>') {
			insertBefore = i;
		} else if (content[i].startsWith('<h2')) {
			break;
		}
	}
	content.splice(insertBefore, 0, aside.join('\n'));

};

export default modify;
