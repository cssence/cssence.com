/* Enhance all index.html files */

import { getFileContent, writeFileContent } from '../utils/files.mjs';
import getMetaData from '../../src/dev/data-meta.mjs';
import storeTocData from '../../src/dev/data-toc.mjs';
import augment from '../../src/dev/augment.mjs';

(async () => {
	const meta = getMetaData();
	try {
		const tocFile = await getFileContent('./public/index.json');
		const toc = JSON.parse(tocFile);
		storeTocData(meta, toc);

		for (const deck of ['pages', 'posts', 'indexes']) {
			const fileList = toc[deck].map((card) => `./public${card.path}index.html`);
			if (deck === 'indexes') {
				const swap = fileList[0]; fileList[0] = fileList[1]; fileList[1] = swap;
				fileList.reverse();
			}
			for (const file of fileList) {
				const urlPath = ['', file.split('/').slice(2, -1), ''].flat().join('/');
				const html = await getFileContent(file);
				const enhancedHtml = augment(urlPath, html, meta);
				await writeFileContent(file, enhancedHtml);
			}
		}
	} catch (err) {
		console.error(err);
	}
})()
