/* cssence.com init script (mustard cutter, async asset loader) */
(function(window, document, loadJS) {
	"use strict";
	try {
		if (window.CSS.supports("--:1")) {
			if (document.querySelectorAll("code").length) {
				loadJS("/js/loadCSS.min.js", function () {
					loadCSS("/css/prism.css", document.querySelector("style.page"), "screen");
					loadJS("/js/prism.min.js", function () {
						Prism.highlightAll();
					});
				});
			}
		}
	} catch (err) {
		console.log(err);
	}
}(window, document, loadJS));
