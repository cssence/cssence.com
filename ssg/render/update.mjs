/* Augment any index.html (may be index or article) */

import { storePageData } from './data/page.mjs';
import modifyCodePen from './update/codepen.mjs';

const augment = async (urlPath, html, meta) => {
	const content = html.split('\n');
	storePageData(urlPath, meta);
	modifyCodePen(content, meta);
	return content.join('\n');
};

export default augment;
