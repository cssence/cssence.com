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
		if (!file.endsWith('.md')) return;

		const item = files[file];
		let head = item.contents.toString().split('\n').slice(1);
		const split = head.indexOf('---');
		const body = head.slice(split + 1).join('\n');
		head = head.slice(0, split);
		const syndStart = head.indexOf('syndication:');
		let syndEnd;
		if (syndStart !== -1) {
			const synds = [];
			for (let i = syndStart + 1; i < head.length; i += 1) {
				if (!head[i].startsWith('  ')) {
					syndEnd = i;
					break;
				}
				if (head[i].startsWith('  - url: ')) {
					const sUrl = head[i].slice('  - url: '.length);
					if (sUrl.includes(' ')) console.log(file, sUrl);
					synds.push({ url: sUrl });
				} else if (head[i].startsWith('    published: ')) {
					synds[synds.length - 1].published = head[i].slice('    published: '.length);
				}
			}
			const replacement = [];
			const origins = synds.filter((s) => !s.published);
			if (origins.length > 1) {
				throw file;
			} else if (origins.length === 1) {
				if (head[1] === 'type: c-code') {
					replacement.push(`codepen: ${origins[0].url}`);
				} else {
					replacement.push(`origin: ${origins[0].url}`);
				}
			}
			const syndicated = synds.filter((s) => s.published && !s.url.includes('twitter.com'))[0];
			if (syndicated) {
				replacement.push(`deprecatedSyndication: {posted: ${syndicated.published}, url: ${syndicated.url}}`);
			}
			const tweeted = synds.filter((s) => s.published && s.url.includes('twitter.com'))[0];
			if (tweeted) {
				if (head[syndEnd] === 'conversation:') syndEnd += 1;
				replacement.push(`conversation:`);
				replacement.push(`  - url: ${tweeted.url}`);
				replacement.push(`    id: comment-0`);
				replacement.push(`    text: "%%TBD"`);
				replacement.push(`    posted: ${tweeted.published}`);
			}
			head = head.slice(0, syndStart).concat(replacement).concat(syndEnd ? head.slice(syndEnd) : []);
			item.contents = Buffer.from(['---', head.join('\n'), '---', body].join('\n'));
		}
	});
	done();
};
