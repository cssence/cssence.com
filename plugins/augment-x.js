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
			if (item.schema === "website") {
				if (item.urlPath === "/") {
					item.revised = new Date();
				} else {
					var latestArticleInCategory = meta.articles.filter(function (child) {
						return child.listings.indexOf(item.urlPath) !== -1;
					})[0];
					item.revised = latestArticleInCategory.order;
				}
			}
		});
		done();
	};
}
