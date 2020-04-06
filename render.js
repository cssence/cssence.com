var fs = require("fs");
var path = require("path");

var metalsmith = require("metalsmith");
var collections = require("metalsmith-collections");
var contentParserMarkdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");
var ignore = require("metalsmith-ignore");
var minifyCss = require("metalsmith-clean-css");
var minifyJs = require("metalsmith-uglify");

var addYears = require("./plugins/add-years.js");
var metadata = require("./plugins/metadata.js");
var augment = require("./plugins/augment.js");
var crossAugment = require("./plugins/augment-x.js");

var minification = function (cb) {
	metalsmith(".")
		.source("assets")
		.destination("public")
		.clean(true)
		.use(minifyJs({
			uglify: { sourceMap: false }
		}))
		.use(minifyCss({
			files: "**/*.css"
		}))
		.use(ignore([
			"img/.**",
			"img/**",
			"img",
			"**/*.js",
			"!**/*.min.js",
		]))
		.build(function (err) {
			console.log(err || "Asset preparation successful.");
			if (!err) {
				cb();
			}
		});
};

var rendering = function () {
	metalsmith(".")
		.metadata({
			countLong: ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"],
			monthLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		})
		.source("data")
		.destination("public")
		.clean(false)
		.use(metadata())
		.use(contentParserMarkdown({
			useMetadata: true
		}))
		.use(augment())
		.use(addYears())
		.use(collections({
			articles: {
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
		.build(function (err) {
			console.log(err || "Rendering successful.");
		});
};

minification(rendering);
