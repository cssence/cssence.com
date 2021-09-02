/**
 * Metalsmith plugin for assigning additional data to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

 const indexMap = {
	'c-bookmark': '/bookmarks/',
	'c-opinion': '/opinions/',
	'c-code': '/code/',
	'c-editorial': '/editorials/',
	'c-event': '/events/',
	'c-essay': '/essays/',
};

module.exports = (opts) => (files, metalsmith, done) => {
	Object.keys(files).forEach((file) => {
		if (!file.endsWith('.html')) return;

		const item = files[file];
		// assign: urlPath
		item.urlPath = file === 'index.html' ? '/' : `/${file.split('/').slice(0, -1).join('/')}/`;
		// assign: order
		item.order = item.published || item.revised;
		// assign: listings
		if (['article.pug', 'note.pug'].includes(item.layout)) {
			item.listings = [indexMap[item.type], `/${item.layout.split('.')[0]}s/`, '/', `/${item.order.toISOString().split('-')[0]}/`];
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
			let fallbackThumbnailPath = `${item.listings[0]}index`;
			if (item.type === 'c-default') {
				fallbackThumbnailPath = '/default'
			} else if (item.layout === 'note.pug') {
				fallbackThumbnailPath = '/notes/index';
			}
			item.thumbnail = {url: `${fallbackThumbnailPath}.jpg`, default: true};
		}
		// augment: title, contents
		const content = item.contents.toString();
		let titleMarker = '</h1>';
		if (content.includes('<p>^')) {
			titleMarker = '</p>';
		}
		const titleSplit = content.indexOf(titleMarker) + titleMarker.length;
		item.titleMarkdown = content.slice(0, titleSplit).replace(/id="[^"]*"/, 'id="content" class="title"').replace('<p>^', '<p class="title-suffix">');
		item.contents = Buffer.from(content.slice(titleSplit));
	});
	done();
};
