/**
 * Metalsmith plugin for taking rewritting one year.md to many yyyy.md files.
 *
 * @param {Object} opts
 * @return {Function}
 */

module.exports = (opts) => (files, metalsmith, done) => {
	const meta = metalsmith.metadata();
	const file = 'year.html';
	const item = files[file];

	// create year-specific files from template
	for (let year = meta.website.years.from; year <= meta.website.years.to; year += 1) {
		const shallowClonedItem = {};
		Object.keys(item).forEach((key) => { shallowClonedItem[key] = item[key]; });
		// augment: [yaml]
		['title', 'titleMarkdown', 'description'].forEach((key) => {
			shallowClonedItem[key] = shallowClonedItem[key].replace(/{{year}}/g, year);
		});
		// override: urlPath
		const urlPath = `/${year}`;
		shallowClonedItem.urlPath = urlPath;
		// augment: contents
		let content = shallowClonedItem.contents.toString();
		content = content.replace(/{{year}}/g, year);
		// add yyyy file
		shallowClonedItem.contents = Buffer.from(content);
		files[`${year}.html`] = shallowClonedItem;
	}
	// remove template file
	delete files[file];

	done();
};
