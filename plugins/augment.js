module.exports = plugin;
var path = require("path");
var multimatch = require("multimatch");

/**
 * Metalsmith plugin for assigning additional data to HTML files.
 *
 * @param {Object} opts
 * @return {Function}
 */

function plugin (opts) {
	opts = opts || {};
	opts.files = opts.files || ["**/*.html"];

	var indicators = {
		"Home":      {                         layout: "home.pug" },
		"Index":     {                         layout: "section.pug" },
		"Bookmark":  { category: "/bookmarks", layout: "note.pug" },
		"Code":      { category: "/code",      layout: "codepen.pug" },
		"Editorial": { category: "/editorials" },
		"Essay":     { category: "/essays" },
		"Event":     { category: "/events" },
		"Opinion":   { category: "/opinions",  layout: "note.pug" },
		"Internal":  {}
	};
	var categories = {};
	Object.keys(indicators).forEach(function (indicator) {
		var category = indicators[indicator].category;
		if (!category) return;
		indicators[indicator].className = [category.replace("/", "c-"), `i-${indicator.toLowerCase()}`].join(" ");
		categories[category] = category.replace("/", "c-");
	});

	return function (files, metalsmith, done) {
		var matchingFiles = multimatch(Object.keys(files), opts.files);
		matchingFiles.forEach(function (file) {
			var item = files[file];
			// assign: urlPath
			item.urlPath = `/${file.startsWith("index") ? "" : file.slice(0, -".html".length)}`;
			// augment: indicator
			item.indicator = item.indicator || "Internal";
			// assign: layout
			if (indicators[item.indicator].layout) {
				item.layout = indicators[item.indicator].layout;
			}
			// assign: category, className, listings
			if (item.published) { // === "if (indicators[item.indicator].category)"
				item.className = indicators[item.indicator].className;
				item.listings = [indicators[item.indicator].category, `/${item.published.getFullYear()}`, "/"];
				item.listings.push(item.layout === "note.pug" ? "/notes" : "/articles");
			} else {
				if (item.urlPath.startsWith("/about")) {
					item.className = "c-about";
				} else if (categories[item.urlPath]) { // those are all indicator==="Index" but without /year and /about/about
					item.className = categories[item.urlPath];
				} else if (["/articles", "/notes"].indexOf(item.urlPath) !== -1) {
					item.className = item.urlPath.replace("/", "c-");
				} else {
					item.className = "c-default";
				}
				item.listings = ["/about/about"];
			}
			// assign: schema
			item.schema = ["home.pug", "section.pug"].indexOf(item.layout) !== -1 ? "website" : "article";
			// assign: collection
			item.collection = "posts";
			// assign: order
			item.order = item.published || item.revised;
			// augment: conversation
			if (item.conversation) {
				var dtName = new Date(2019, 6);
				item.conversation.forEach(function (conversation) {
					conversation.author = conversation.author || {id: "@CSSence", name: item.order < dtName ? "Matthias Beitl" : "Matthias Zöchling"};
					conversation.author.url = conversation.author.url || "https://twitter.com/" + conversation.author.id.slice(1);
				});
			}
			// augment: thumbnail
			if (item.thumbnail) {
				if (item.thumbnail.type) {
					var mimeTypeMap = {"image/jpeg": ".jpg", "image/png": ".png"};
					item.thumbnail.url = item.urlPath + mimeTypeMap[item.thumbnail.type];
					delete item.thumbnail.type;
				}
			} else {
				var fallbackThumbnailPath = item.listings[0];
				if (item.className === "c-default") {
					fallbackThumbnailPath = "/default"
				} else if (item.layout === "note.pug") {
					fallbackThumbnailPath = "/notes";
				}
				item.thumbnail = {url: `${fallbackThumbnailPath}.jpg`, default: true};
			}
			// augment: title, contents
			var content = item.contents.toString();
			var titleMarker = "</h1>";
			if (content.indexOf("<p>^") !== -1) {
				titleMarker = "</p>";
			}
			var titleSplit = content.indexOf(titleMarker) + titleMarker.length;
			item.titleMarkdown = content.slice(0, titleSplit).replace(/id="[^"]*"/, "id=\"content\" class=\"title\"").replace("<p>^", "<p class=\"title-suffix\">");
			item.contents = Buffer.from(content.slice(titleSplit));
		});
		done();
	};
}
