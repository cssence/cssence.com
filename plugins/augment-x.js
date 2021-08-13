/**
 * Metalsmith plugin for assigning data from other HTML files to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

module.exports = (opts) => (files, metalsmith, done) => {
	const meta = metalsmith.metadata();
	Object.keys(files).forEach((file) => {
		if (!file.endsWith('.html')) return;

		const item = files[file];
		// augment: revised
		if (item.layout === 'index.pug' && !item.revised) {
			if (item.urlPath === '/') {
				item.revised = new Date(); // build timestamp
			} else if (item.urlPath === '/about/about') {
				item.revised = meta.posts[0].order; // freshest across all categories
			} else {
				const latestPostInCategory = meta.getFilteredPosts(meta.posts, item.urlPath)[0];
				item.revised = latestPostInCategory.order;
			}
		}
	});
	done();
};
