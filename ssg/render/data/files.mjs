/* Get list of urlPaths for all index.html files */

import getFileList from '../../utils/files.mjs';

const getIndexHtmlList = async (folder) => {

	// create build file list

	const fileList = await getFileList(folder);
	return fileList.map((file) => file.slice(folder.length, -'index.html'.length));
};

const getSortedIndexHtmlList = (toc) => {

	// create sorted build file list

	let indexHtmlList = [];
	for (const deck of ['pages', 'posts', 'indexes']) {
		const deckFileList = toc[deck].map((card) => card.path);
		if (deck === 'indexes') {
			const swap = deckFileList[0]; deckFileList[0] = deckFileList[1]; deckFileList[1] = swap;
			deckFileList.reverse();
		}
		indexHtmlList = indexHtmlList.concat(deckFileList);
	}
	return indexHtmlList;
};

export { getSortedIndexHtmlList };
export default getIndexHtmlList;
