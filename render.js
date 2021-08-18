const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const contentParserMarkdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');

const augment = require('./plugins/augment.js');
const crossAugment = require('./plugins/augment-x.js');

const pretty = require('./plugins/pretty.js');
const yaml = require('./plugins/yaml.js');

metalsmith('.')
	.metadata({
		countLong: ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
		monthLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		website: {
			years: { from: 2010, to: 2021 },
			url: 'https://cssence.com'
		},
		getClassName: (group) => `c-${group}`,
		getFilteredPosts: (posts, urlPath) => posts.filter((post) => post.listings.includes(urlPath)),
		getAuthor: (message, order) => {
			// if (message.unavailable) return {};
			const url = message.author ? message.author.url : message.url.split('/').slice(0, 4).join('/');
			if (message.author) return {url: url, name: message.author.name};
			return {url: 'https://twitter.com/cssence', name: order < new Date(2019, 6) ? 'Matthias Beitl' : 'Matthias Zöchling'};
		}
	})
	.source('data')
	.destination('public')
	.clean(false)
	.use(contentParserMarkdown({
		useMetadata: true
	}))
	.use(augment())
	.use(collections({
		posts: {
			pattern: '**/*.html',
			refer: false,
			sortBy: 'order',
			reverse: true
		}
	}))
	.use(crossAugment())
	.use(layouts({
		engine: 'pug',
		pattern: '**/*.html'
	}))
	// .use(pretty())
	.build((err) => { if (err) console.error(err); });

// metalsmith('.')
// 	.frontmatter(false)
// 	.source('data')
// 	.destination('public')
// 	.clean(true)
// 	.use(yaml())
// 	.build((err) => { if (err) console.error(err); });
