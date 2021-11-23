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
	var onReady = function (cb) {
		if (d.readyState !== 'loading') return cb();
		d.addEventListener('DOMContentLoaded', cb);
	};
	var fallback = function (reason) {
		onReady(function () {
			var s = d.querySelectorAll('link[rel="alternate stylesheet"], link[rel="stylesheet"][title="Advanced Style"], style[title="Advanced Style"]');
			for (var i = 0; i < s.length; ++i) s[i].parentNode.removeChild(s[i]);
			d.querySelector('link[rel="stylesheet"][media="print"]').removeAttribute('media');
		});
		console.info(reason, '\nNo further progressive enhancement.');
	};
	try {
		if (!w.CSS.supports('--v:4')) return fallback('Browser does not support CSS custom properties.');
		if (w.location.search.indexOf('?ie') === 0) return fallback('Fallback requested manually.');
		var highlight = function () {
			if (d.querySelectorAll('code[class]').length) {
				var loadJS = function (src, cb) {
					/* loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. */
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
		};
		onReady(highlight);
	} catch (err) {
		console.warn(err);
		fallback('Error occured, switching to fallback mode.');
	}
}(window, document, document.querySelector('head')));
