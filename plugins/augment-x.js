module.exports = plugin;
var path = require("path");
var multimatch = require("multimatch");

/**
 * Metalsmith plugin for assigning data from other HTML files to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ["**/*.html"];

	return function (files, metalsmith, done) {
		var meta = metalsmith.metadata();
		var matchingFiles = multimatch(Object.keys(files), opts.files);
		matchingFiles.forEach(function (file) {
			var item = files[file];
			// augment: revised
			if (item.schema === "website" && !item.revised) {
				if (item.urlPath === "/") {
					item.revised = new Date(); // build timestamp
				} else if (item.urlPath === "/about/about") {
					item.revised = meta.posts[0].order; // freshest across all categories
				} else {
					var latestPostInCategory = meta.posts.filter(function (child) {
						return child.listings.indexOf(item.urlPath) !== -1;
					})[0];
					item.revised = latestPostInCategory.order;
				}
			}
		});
		done();
	};
}
