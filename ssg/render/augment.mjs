/* Augment any index.html (may be index or article) */

import { storePageData } from './data/page.mjs';
import indexCards from './augment/index.mjs';
import modifyHead from './augment/head.mjs';
import modifyHeader from './augment/header.mjs';
import addPosts from './augment/posts.mjs';
import addSourceCode from './augment/source.mjs';
import modifyContentArchive from './augment/archive.mjs';
import addCodepen from './augment/codepen.mjs';
import modifyConversation from './augment/conversation.mjs';
import addAboutPage from './augment/about.mjs';
import addNav from './augment/nav.mjs';
import addFooter from './augment/footer.mjs';
import assignIds from './augment/id.mjs';

const augment = async (urlPath, html, meta) => {
	const content = html.split('\n');
	storePageData(urlPath, meta);
	indexCards(content, meta);
	modifyHead(content, meta);
	modifyContentArchive(content, meta);
	modifyHeader(content, meta);
	addPosts(content, meta);
	await addSourceCode(content, meta);
	addCodepen(content, meta);
	modifyConversation(content, meta);
	addAboutPage(content, meta);
	addNav(content, meta);
	addFooter(content, meta);
	assignIds(content, meta);
	return content.join('\n');
};

export default augment;
