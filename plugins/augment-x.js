module.exports = plugin;
const path = require('path');
const multimatch = require('multimatch');

/**
 * Metalsmith plugin for assigning data from other HTML files to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ['**/*.html'];

	return (files, metalsmith, done) => {
		const meta = metalsmith.metadata();
		multimatch(Object.keys(files), opts.files).forEach((file) => {
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
}
