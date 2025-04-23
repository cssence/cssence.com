/* Assign IDs, tabindex, aria-labelledby, and data-title */

const modify = (content, meta) => {

	let i;
	i = content.indexOf('<body>');
	content[i] = '<body id="top">';
	i = content.indexOf('<header>');
	content[i + 1] = content[i + 1].replace('<h1>', '<h1 id="content">');

	if (content[i - 1] !== '<article>') return;
	content[i - 1] = '<article aria-labelledby="content">';

	const stopBefore = content.lastIndexOf('</div>');
	for (i = content.indexOf('</header>') + 1; i < stopBefore; i += 1) {
		if (content[i].startsWith('<figure id=')) {
			content[i] = content[i].replace('>', ' tabindex="-1">'); // focusable ^1
			continue;
		}
		if (!content[i].match(/^<h[1-6]/)) continue; // no heading
		let text2id = content[i].slice(content[i].indexOf('>') + 1, -'</h#>'.length); // innerText
		const id = content[i].match(/id="([^"]+)"/)?.[1];
		content[i] = content[i].replace('>', ' tabindex="-1">'); // focusable ^1
		if (id) { // already has ID
			if (content[i].startsWith('<h2 id="updates"') || content[i].startsWith('<h2 id="fns"')) {
				content[i - 1] = `<section aria-labelledby="${id}"><hr>`;
			}
			continue;
		}
		const tag = content[i].slice(1, '<h#'.length);
		text2id = text2id.replaceAll(/<[^>]+>/g, ''); // remove html elements
		text2id = text2id.replaceAll('&nbsp;', ' ').replaceAll(/&[^;]+;/g, ''); // replace html entities
		text2id = text2id.toLowerCase().replaceAll(/[^a-z0-9- ]/g, '').trim().replaceAll(' ', '-'); // convert to ID
		content[i] = content[i].replace(tag, `${tag} id="${text2id}"`);
	}
};

// ^1 https://brucelawson.co.uk/2024/drive-by-accessibility-tweaks/#comment-3881818

export default modify;
