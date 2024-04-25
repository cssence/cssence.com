/* Enhance all index.html files */

import { getFileContent, writeFileContent } from './utils/files.mjs';

import getMetaData from './render/data.mjs';
import augment from './render/augment.mjs';

import createFeed from './render/create-feed.mjs';

const folder = './public';

(async () => {

	try {
		const meta = await getMetaData(folder);

		for (const urlPath of meta.indexHtmlList) {
			const file = `${folder}${urlPath}index.html`;
			const html = await getFileContent(file);
			const enhancedHtml = await augment(urlPath, html, meta);
			await writeFileContent(file, enhancedHtml);

			if (meta.page.alternateUrl?.endsWith(meta.RSS_FILE)) {
				const rssFile = `${folder}${urlPath}${meta.RSS_FILE}`;
				const xml = createFeed(urlPath, meta);
				await writeFileContent(rssFile, xml.join('\n'));
			}
		}

	} catch (err) {
		console.error(err);
	}

})()
