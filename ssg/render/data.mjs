/* Set global meta data */

import createMetaData from './data/meta.mjs';
import getIndexHtmlList, { getSortedIndexHtmlList } from './data/files.mjs';
import getToc from './data/toc.mjs';

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
