/* cssence.com init script (mustard cutter, async asset loader) */
(function(w, d, dh) {
	'use strict';
	var addStyle = function (href) {
		var s = d.createElement('link');
		s.setAttribute('rel', 'stylesheet');
		s.setAttribute('media', 'screen');
		s.href = href;
		dh.appendChild(s);
	};
	var fallback = function (reason) {
		d.querySelector('link[rel="stylesheet"][media="print"]').removeAttribute('media');
		d.querySelector('link[rel="stylesheet"][media="screen"]').disabled = true;
		d.addEventListener('DOMContentLoaded', function () {
			var s = d.querySelectorAll('link[rel="stylesheet"][media="screen"], style[media="screen"]');
			for (var i = 0; i < s.length; ++i) s[i].disabled = true;
		});
		console.info(reason, '\nNo further progressive enhancement.');
	};
	try {
		if (!w.CSS.supports('--v:4')) {
			fallback('Browser does not support CSS custom properties.');
			return;
		}
		if (w.location.search === '?ie') {
			fallback('Fallback requested manually.');
			return;
		}
		d.addEventListener('DOMContentLoaded', function () {
			if (d.querySelectorAll('code[class]').length) {
				/* loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. */
				var loadJS = function (src, cb) {
					var s = d.createElement('script');
					s.src = src;
					s.async = true;
					dh.appendChild(s);
					if (cb && typeof(cb) === 'function') {
						s.onload = cb;
					}
					return s;
				};
				addStyle('/assets/syntax/prism.css');
				loadJS('/assets/syntax/prism.js', function () {
					Prism.highlightAll();
				});
			}
		});
	} catch (err) {
		console.warn(err);
		fallback('Error occured, switching to fallback mode.');
	}
}(window, document, document.querySelector('head')));
