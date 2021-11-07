/* Augment any index.html (may be index or article) */

import { storePageData } from './data-page.mjs';
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
	let content = html.split('\n');
	storePageData(urlPath, meta);
	content = indexCards(content, meta);
	content = modifyHead(content, meta);
	content = modifyHeader(content, meta);
	content = addPosts(content, meta);
	content = addCodepen(content, meta);
	content = modifyConversation(content, meta);
	content = addAboutPage(content, meta);
	content = addNav(content, meta);
	content = addFooter(content, meta);
	return content.join('\n');
};

export default augment;
