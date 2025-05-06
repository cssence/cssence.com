/* create index.json TOC */

import { writeFileContent } from './utils/files.mjs';

import getMetaData from './render/data.mjs';

const folderIn = './src';
const folderOut = './public';

(async () => {

	try {
		const meta = await getMetaData(folderIn);

		// remove unneeded data in JSON before storing

		const clean = (card, deletableCardProps = []) => {
			if (card.className === 'c-default') deletableCardProps.push('className');
			if (card.thumbnail === '/404/index.webp') deletableCardProps.push('thumbnail');
			if (card.alternateUrl) deletableCardProps.push('alternateUrl');
			for (const key of deletableCardProps) {
				delete card[key];
			}
		};
		for (const index of meta.toc.indexes) clean(index, ['isIndex']);
		for (const page of meta.toc.pages) clean(page);
		for (const post of meta.toc.posts) clean(post, ['isPostByYear', 'rssDescription']);

		// create JSON string and write to file

		const jsonStringParts = [];
		for (const deck of ['indexes', 'pages', 'posts']) {
			jsonStringParts.push(`"${deck}":[\n${JSON.stringify(meta.toc[deck]).split('},{').join('},\n{').slice(1, -1)}\n]`);
		}
		const jsonString = `{${jsonStringParts.join(',')}}\n`;
		await writeFileContent(`${folderOut}/index.json`, jsonString);

	} catch (err) {
		console.error(err);
	}

})()
