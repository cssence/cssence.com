/* cssence.com init script (mustard cutter, async asset loader) */
(function(window, document) {
	try {
		var addStyle = function (href) {
			var stylesheet = document.createElement("link");
			stylesheet.setAttribute("rel", "stylesheet");
			stylesheet.setAttribute("media", "screen");
			stylesheet.href = href;
			var insertAfter = document.querySelector("style.page");
			insertAfter.parentNode.insertBefore(stylesheet, insertAfter.nextSibling);
		};
		if (!window.CSS.supports("--supports-var", 0) || window.location.search === "?ie") {
			throw "No CSS custom properties.";
		}
		document.addEventListener("DOMContentLoaded", function() {
			if (document.querySelectorAll("code").length) {
				/* loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. */
				var loadJS = function (src, cb) {
					var ref = window.document.getElementsByTagName("script")[0];
					var script = window.document.createElement("script");
					script.src = src;
					script.async = true;
					ref.parentNode.insertBefore(script, ref);
					if (cb && typeof(cb) === "function") {
						script.onload = cb;
					}
					return script;
				};
				addStyle("/css/prism.css");
				loadJS("/js/prism.min.js", function () {
					Prism.highlightAll();
				});
			}
		});
	} catch (err) {
		console.log(err);
		var styles = document.querySelector("head").querySelectorAll("link[rel=stylesheet],style");
		for (var i = styles.length - 1; i >= 0; --i) {
			var style = styles[i];
			if (style.tagName.toLowerCase() === "link") {
				style.parentNode.removeChild(style);
			} else {
				style.removeAttribute("media");
			}
		}
		addStyle("/css/ie.css");
	}
}(window, document));
