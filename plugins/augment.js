module.exports = plugin;
const path = require('path');
const multimatch = require('multimatch');

/**
 * Metalsmith plugin for assigning additional data to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ['**/*.html'];

	const indexMap = {
		'bookmark': '/bookmarks',
		'opinion': '/opinions',
		'code': '/code',
		'editorial': '/editorials',
		'event': '/events',
		'essay': '/essays',
	};

	return (files, metalsmith, done) => {
		multimatch(Object.keys(files), opts.files).forEach((file) => {
			const item = files[file];
			// assign: urlPath
			item.urlPath = `/${file.startsWith('index') ? '' : file.slice(0, -'.html'.length)}`;
			// assign: order
			item.order = item.published || item.revised;
			// assign: listings
			if (['article.pug', 'note.pug'].includes(item.layout)) {
				item.listings = [indexMap[item.group], `/${item.layout.split('.')[0]}s`, '/', `/${item.order.toISOString().split('-')[0]}`];
			} else {
				item.listings = ['/about/about'];
			}
			// augment: thumbnail
			if (item.thumbnail) {
				if (item.thumbnail.type) {
					const mimeTypeMap = {'image/jpeg': '.jpg', 'image/png': '.png'};
					item.thumbnail.url = item.urlPath + mimeTypeMap[item.thumbnail.type];
					delete item.thumbnail.type;
				}
			} else {
				let fallbackThumbnailPath = item.listings[0];
				if (item.group === 'default') {
					fallbackThumbnailPath = '/default'
				} else if (item.layout === 'note.pug') {
					fallbackThumbnailPath = '/notes';
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
}
