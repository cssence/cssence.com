/**
 * Metalsmith plugin for assigning data from other HTML files to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

module.exports = (opts) => (files, metalsmith, done) => {
	const meta = metalsmith.metadata();
	const buildTimestamp = new Date();
	Object.keys(files).forEach((file) => {
		if (!file.endsWith('.html')) return;

		const item = files[file];
		// augment: revised
		if (item.layout === 'index.pug' && !item.revised) {
			if (['/', '/about/about/'].includes(item.urlPath)) {
				item.revised = buildTimestamp;
			} else {
				const latestPostInCategory = meta.getFilteredPosts(meta.posts, item.urlPath)[0];
				item.revised = latestPostInCategory.order;
			}
		}
	});
	done();
};
