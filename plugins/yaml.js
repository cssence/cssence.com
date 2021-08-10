module.exports = plugin;
const path = require('path');
const multimatch = require('multimatch');

/**
 * Metalsmith plugin for assigning additional data to MD files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ['**/*.md'];

	return (files, metalsmith, done) => {
		multimatch(Object.keys(files), opts.files).forEach((file) => {
			const item = files[file];
			let head = item.contents.toString().split('\n').slice(1);
			const split = head.indexOf('---');
			const body = head.slice(split + 1).join('\n');
			head = head.slice(0, split);
			const group = head[0].split('"')[1];
			const layoutLine = head[2];
			head = [layoutLine, `group: "${group}"`].concat(head.slice(3));
			item.contents = Buffer.from(['---', head.join('\n'), '---', body].join('\n'));
		});
		done();
	};
}
