/**
 * Metalsmith plugin for assigning additional data to MD files.
 *
 * @param {Object} opts
 * @return {Function}
 */

module.exports = (opts) => (files, metalsmith, done) => {
	const meta = metalsmith.metadata();
	const slugs = Object.keys(files).map((file) => file.slice(0, file.indexOf('.')));
	const redirects = [];

	Object.keys(files).forEach((file, index) => {
		if (!(file.endsWith('.md') || file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.jpg'))) return;

		const slugId = file.slice(0, file.indexOf('.'));
		// const single = slugs.indexOf(slugId) === slugs.lastIndexOf(slugId);
		const slug = slugId.split('/');
		slug.push(slug.slice(-1)[0]);
		if (slugs.indexOf(slugId) === index) {
			const dir = slug.slice(0, -1).join('/');
			if (dir.length > 4 || !dir.startsWith('2')) console.log(`mkdir ${dir}`);
		}
		if (file.endsWith('.md')) {
			console.log(`mv ${file} ${file.replace('.', '/index.')}`);
		} else if (file.indexOf('.') === file.lastIndexOf('.')){
			console.log(`mv ${file} ${file.replace('.', '/index.')}`);
			redirects.push(`/${file}  /${file.replace('.', '/index.')}`);
		} else {
			console.log(`mv ${file} ${file.replace('.', '/')}`);
			redirects.push(`/${file}  /${file.replace('.', '/')}`);
		}
		// console.log(`mv ${file} ${slug.join('/')}${file.slice(file.lastIndexOf('.'))}`);

		// if (!file.endsWith('.md')) return;

		// const item = files[file];
		// let head = item.contents.toString().split('\n').slice(1);
		// const split = head.indexOf('---');
		// const body = head.slice(split + 1).join('\n');
		// head = head.slice(0, split);
		// const group = head[0].split('"')[1];
		// const layoutLine = head[2];
		// head = [layoutLine, `group: "${group}"`].concat(head.slice(3));
		// item.contents = Buffer.from(['---', head.join('\n'), '---', body].join('\n'));
	});
	console.log('');
	console.log(redirects.sort().join('\n'));
	done();
};
