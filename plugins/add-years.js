module.exports = plugin;
var path = require("path");
var multimatch = require("multimatch");

/**
 * Metalsmith plugin for taking rewritting one date.md to many yyyy.md files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = ["year.html"];

	return function (files, metalsmith, done) {
		var meta = metalsmith.metadata();
		var matchingFiles = multimatch(Object.keys(files), opts.files);
		matchingFiles.forEach(function (file) {
			var item = files[file];

			// create year-specific files from template
			for (var year = meta.settings.years.from; year <= meta.settings.years.to; year += 1) {
				var item = files[file];
				var shallowClonedItem = {};
				Object.keys(item).forEach(function (key) {
					shallowClonedItem[key] = item[key];
				});
				// augment: [yaml]
				["title", "titleMarkdown", "description"].forEach(function (key) {
					shallowClonedItem[key] = shallowClonedItem[key].replace(/{year}/g, year);
				});
				// override: urlPath
				var urlPath = "/" + year;
				shallowClonedItem.urlPath = urlPath;
				// augment: contents
				var content = shallowClonedItem.contents.toString();
				content = content.replace(/{year}/g, year);
				shallowClonedItem.contents = Buffer.from(content);
				files[year + ".html"] = shallowClonedItem;
			}
			// remove template file
			delete files[file];
		});
		done();
	};
}
