module.exports = (opts) => (files, metalsmith, done) => {
	Object.keys(files).forEach((file) => {
		if (!file.endsWith('.html')) return;

		const item = files[file];
		const content = item.contents.toString().replace(/></g, '>\n<');
		item.contents = Buffer.from(content);
	});
	done();
};
