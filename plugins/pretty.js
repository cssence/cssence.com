module.exports = plugin;
const path = require('path');
const multimatch = require('multimatch');

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ['**/*.html'];

	return (files, metalsmith, done) => {
		multimatch(Object.keys(files), opts.files).forEach((file) => {
			const item = files[file];
			const content = item.contents.toString().replace(/></g, '>\n<');
			item.contents = Buffer.from(content);
		});
		done();
	};
}
