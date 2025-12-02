/** cssence.com nomodule global script */
'use strict';
try {
	var onReady = function (cb) {
		if (document.readyState !== 'loading') return cb();
		document.addEventListener('DOMContentLoaded', cb);
	};
	onReady(function () {
		var s = document.querySelectorAll('link[rel="alternate stylesheet"], link[rel="stylesheet"][title="Custom Style"],');
		for (var i = 0; i < s.length; ++i) s[i].parentNode.removeChild(s[i]);
		document.querySelector('link[rel="stylesheet"][media="print"]').removeAttribute('media');
	});
	console.info('No further progressive enhancement.');
} catch (err) {
	console.warn(err);
}
