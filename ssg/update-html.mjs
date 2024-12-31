/* Enhance all index.html files */

import { getFileContent, writeFileContent } from './utils/files.mjs';

import getMetaData from './render/data.mjs';
import augment from './render/update.mjs';

const folder = './src';

(async () => {

	try {
		const meta = await getMetaData(folder);

		for (const urlPath of meta.indexHtmlList) {
			const file = `${folder}${urlPath}index.html`;
			console.log(file);
			const html = await getFileContent(file);
			const enhancedHtml = await augment(urlPath, html, meta);
			await writeFileContent(file, enhancedHtml);
		}

	} catch (err) {
		console.error(err);
	}

})()
