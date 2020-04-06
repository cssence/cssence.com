module.exports = plugin;
var path = require("path");
var multimatch = require("multimatch");

/**
 * Metalsmith plugin, expose content of JSON files to metadata.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ["**/*.json"];

	return function (files, metalsmith, done) {
		var meta = metalsmith.metadata();
		var matchingFiles = multimatch(Object.keys(files), opts.files);
		matchingFiles.forEach(function (file) {
			var key = path.parse(file).name.split("-").pop(); // TODO remove .split("-").pop()
			meta[key] = JSON.parse(files[file].contents.toString());
		});
		done();
	};
}
