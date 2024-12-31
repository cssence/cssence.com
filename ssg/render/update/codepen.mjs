/* Add link to `html.c-extra articles` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear || meta.page.className !== 'c-extra') return;
	if (!meta.page.alternateUrl) return;

	const ALT = 5;

	const aside = [
		'<h2 id="showcase">Showcase</h2>',
		`<p><a href="${meta.page.alternateUrl}">View “${meta.page.title}” on CodePen.</a></p>`,
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

	content.splice(ALT, 1);

};

export default modify;
