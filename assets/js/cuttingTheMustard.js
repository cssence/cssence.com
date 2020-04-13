/* cssence.com init script (mustard cutter, async asset loader) */
(function(window, document, loadJS) {
	"use strict";
	try {
		if (window.CSS.supports("--:1")) {
			if (document.querySelectorAll("code").length) {
				var stylesheet = document.createElement("link");
				stylesheet.setAttribute("rel", "stylesheet");
				stylesheet.setAttribute("media", "screen");
				stylesheet.href = "/css/prism.css";
				var insertAfter = document.querySelector("style.page");
				insertAfter.parentNode.insertBefore(stylesheet, insertAfter.nextSibling);
				loadJS("/js/prism.min.js", function () {
					Prism.highlightAll();
				});
			}
		}
	} catch (err) {
		console.log(err);
	}
}(window, document, loadJS));
