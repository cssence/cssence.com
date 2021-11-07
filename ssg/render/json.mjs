/* create index.json TOC */

import { getFileList, getFileContent, writeFileContent } from '../utils/files.mjs';
import getMetaData from '../../src/dev/data-meta.mjs';
import getPageData from '../../src/dev/data-page.mjs';

(async () => {
	const meta = getMetaData();
	meta.toc = {indexes: [], pages: [], posts: []};
	try {
		const fileList = await getFileList();
		for (const file of fileList) {
			const urlPath = ['', file.split('/').slice(2, -1), ''].flat().join('/');
			const html = await getFileContent(file);
			const content = html.split('\n');
			const { page, isIndex, isPostByYear } = getPageData(urlPath, content);
			const deck = isIndex ? 'indexes' : (isPostByYear ? 'posts' : 'pages');
			meta.toc[deck].push(page);
		}
		const getIndexWeight = (page) => {
			const weight = [3, page.path];
			if (['/', '/about/about/'].includes(page.path)) {
				weight[0] = 0;
			} else if (['/articles/', '/code/', '/editorials/', '/essays/', '/events/', '/notes/'].includes(page.path)) {
				weight[0] = 1;
			} else if (page.path.match(/^\/[0-9]{4}\//)) {
				if (page.path.length > 6) {
					weight[0] = 4;
				} else {
					weight[0] = 2;
					weight[1] = `/${9999 - Number(page.path.slice(1, -1))}/`;
				}
			}
			return weight.join('');
		};
		meta.toc.posts.sort((a, b) => b.published < a.published ? -1 : 1);
		meta.toc.pages.sort((a, b) => a.path < b.path ? -1 : 1);
		meta.toc.indexes.sort((a, b) => getIndexWeight(a) < getIndexWeight(b) ? -1 : 1);
		const jsonParts = {};
		for (const deck of Object.keys(meta.toc)) {
			jsonParts[deck] = JSON.stringify(meta.toc[deck]).split('},{').join('},\n{').slice(1, -1);
		}
		const jsonString = `{"indexes":[\n${jsonParts.indexes}\n],"pages":[\n${jsonParts.pages}\n],"posts":[\n${jsonParts.posts}\n]}\n`;
		await writeFileContent('./src/index.json', jsonString);
	} catch (err) {
		console.error(err);
	}
})()
