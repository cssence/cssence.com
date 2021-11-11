/* Set global meta data */

import getIndexHtmlList, { getSortedIndexHtmlList } from './data/files.mjs';
import getToc from './data/toc.mjs';

const createMetaData = () => {

	// set basic meta data for Static Site Generator

	const now = new Date().toISOString().replace(/\.[0-9]+Z/, 'Z');
	return {
		getPermalink: (path) => `https://cssence.com${path}`,
		date: {
			build: now,
			year: Number(now.split('-')[0]),
			getAuthor: (ts) => ts < "2019-07-00T00:00:00Z" ? 'Matthias Beitl' : 'Matthias Zöchling',
			format: (ts, timeSuffix) => {
				const monthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				const date = new Date(ts);
				const readable = `${monthLong[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
				const withTime = timeSuffix ? ` at ${ts.slice(11, 16)}` : '';
				return `<time datetime="${ts}">${readable}${withTime}</time>`;
			}
		}
	};
};

const getMetaData = async (folder, filesOnly) => {

	// provide simple or rich meta data

	const meta = filesOnly ? {} : createMetaData();
	meta.indexHtmlList = await getIndexHtmlList(folder);
	if (filesOnly) return meta;
	meta.toc = await getToc(folder, meta.indexHtmlList);
	meta.indexHtmlList = getSortedIndexHtmlList(meta.toc);
	return meta;
};

export default getMetaData;
