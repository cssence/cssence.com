const metalsmith = require("metalsmith");
const collections = require("metalsmith-collections");
const contentParserMarkdown = require("metalsmith-markdown");
const layouts = require("metalsmith-layouts");

const addYears = require("./plugins/add-years.js");
const augment = require("./plugins/augment.js");
const crossAugment = require("./plugins/augment-x.js");

metalsmith(".")
	.metadata({
		countLong: ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"],
		monthLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		website: {
			years: { from: 2010, to: 2021 },
			url: "https://cssence.com"
		}
	})
	.source("data")
	.destination("public")
	.clean(false)
	.use(contentParserMarkdown({
		useMetadata: true
	}))
	.use(augment())
	.use(addYears())
	.use(collections({
		posts: {
			refer: false,
			sortBy: "order",
			reverse: true
		}
	}))
	.use(crossAugment())
	.use(layouts({
		engine: "pug",
		default: "article.pug",
		pattern: "**/*.html"
	}))
	.build((err) => console.info(err || "Rendering successful."));
