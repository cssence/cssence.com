/**
 * Metalsmith plugin for assigning additional data to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

module.exports = (opts) => (files, metalsmith, done) => {
	Object.keys(files).forEach((file) => {
		if (!file.endsWith('.html')) return;

		const item = files[file];
		// assign: urlPath
		item.urlPath = file === 'index.html' ? '/' : `/${file.split('/').slice(0, -1).join('/')}/`;
		// assign: order
		item.order = item.published || item.revised;
		// assign: listings
		if (item.layout === 'article.pug') {
			item.listings = ['/articles/', `/${item.order.getFullYear()}/`, {'c-code': '/code/', 'c-editorial': '/editorials/', 'c-event': '/events/', 'c-essay': '/essays/'}[item.type]];
		} else if (item.layout === 'note.pug') {
			item.listings = ['/notes/', `/${item.order.getFullYear()}/`];
		} else {
			item.listings = ['/about/about/'];
		}
		// augment: thumbnail
		if (item.thumbnail) {
			if (item.thumbnail.type) {
				const mimeTypeMap = {'image/jpeg': '.jpg', 'image/png': '.png'};
				item.thumbnail.url = `${item.urlPath}index${mimeTypeMap[item.thumbnail.type]}`;
				delete item.thumbnail.type;
			}
		} else {
			item.thumbnail = {url: '/404/index.png'};
		}
		// augment: title, contents
		const content = item.contents.toString();
		let titleMarker = '</h1>';
		if (content.includes('<p>^')) {
			titleMarker = '</p>';
		}
		const titleSplit = content.indexOf(titleMarker) + titleMarker.length;
		item.titleMarkdown = content.slice(0, titleSplit).replace(/id="[^"]*"/, 'id="content"').replace('<p>^ ', '<p>');
		item.contents = Buffer.from(content.slice(titleSplit));
	});
	done();
};
