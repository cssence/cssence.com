/* Inline example source code in `<pre>` */

import { getFileContent } from '../../utils/files.mjs';

const folderIn = './src';

const modify = async (content, _meta) => {

	let i = content.indexOf('</header>') + 1;

	const stopBefore = content.indexOf('</main>') - 1;
	for (i = content.indexOf('</header>') + 1; i < stopBefore; i += 1) {
		if (content[i].startsWith('<pre><a href=')) {
			const href = content[i].match(/<a href="([^"]+)"/)[1];
			const type = href.slice(href.lastIndexOf('.') + 1);
			let example = await getFileContent(`${folderIn}${href}`);
			example = example.replaceAll('&', '&amp;');
			example = example.replaceAll('<', '&lt;');
			example = example.replaceAll('>', '&gt;');
			example = example.replaceAll('"', '&quot;');
			example = example.replaceAll('\'', '&#39;');
			if (example.endsWith('\n')) example = example.slice(0, -1);
			content[i] = `<pre><code class="language-${type}">${example}</code></pre>`;
		}
	}

};

export default modify;
