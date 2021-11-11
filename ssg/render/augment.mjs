/* Augment any index.html (may be index or article) */

import { storePageData } from './data/page.mjs';
import indexCards from './augment/index.mjs';
import modifyHead from './augment/head.mjs';
import modifyHeader from './augment/header.mjs';
import addPosts from './augment/posts.mjs';
import addCodepen from './augment/codepen.mjs';
import modifyConversation from './augment/conversation.mjs';
import addAboutPage from './augment/about.mjs';
import addNav from './augment/nav.mjs';
import addFooter from './augment/footer.mjs';

const augment = (urlPath, html, meta) => {
	const content = html.split('\n');
	storePageData(urlPath, meta);
	indexCards(content, meta);
	modifyHead(content, meta);
	modifyHeader(content, meta);
	addPosts(content, meta);
	addCodepen(content, meta);
	modifyConversation(content, meta);
	addAboutPage(content, meta);
	addNav(content, meta);
	addFooter(content, meta);
	return content.join('\n');
};

export default augment;
