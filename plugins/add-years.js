module.exports = plugin;
const path = require('path');
const multimatch = require('multimatch');

/**
 * Metalsmith plugin for taking rewritting one date.md to many yyyy.md files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = ['year.html'];

	return (files, metalsmith, done) => {
		const meta = metalsmith.metadata();
		multimatch(Object.keys(files), opts.files).forEach((file) => {
			const item = files[file];

			// create year-specific files from template
			for (let year = meta.website.years.from; year <= meta.website.years.to; year += 1) {
				const item = files[file];
				const shallowClonedItem = {};
				Object.keys(item).forEach((key) => { shallowClonedItem[key] = item[key]; });
				// augment: [yaml]
				['title', 'titleMarkdown', 'description'].forEach((key) => {
					shallowClonedItem[key] = shallowClonedItem[key].replace(/{year}/g, year);
				});
				// override: urlPath
				const urlPath = '/' + year;
				shallowClonedItem.urlPath = urlPath;
				// augment: contents
				let content = shallowClonedItem.contents.toString();
				content = content.replace(/{year}/g, year);
				shallowClonedItem.contents = Buffer.from(content);
				files[year + '.html'] = shallowClonedItem;
			}
			// remove template file
			delete files[file];
		});
		done();
	};
}
