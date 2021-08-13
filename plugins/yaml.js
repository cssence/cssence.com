/**
 * Metalsmith plugin for assigning additional data to MD files.
 *
 * @param {Object} opts
 * @return {Function}
 */

module.exports = (opts) => (files, metalsmith, done) => {
	const meta = metalsmith.metadata();
	Object.keys(files).forEach((file) => {
		if (!file.endsWith('.md')) return;

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
