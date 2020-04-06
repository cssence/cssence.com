/* cssence.com codepen.io-enhancer */
(function(document) {
	'use strict';
	if ('querySelector' in document) {
		var help = document.querySelector('[rel="help"][href*="cssence.com"]');
		if (help) {
			var a = document.createElement('a');
			a.href = help.href;
			a.rel = 'help';
			a.target = '_blank';
			a.textContent = 'Learn more';
			document.body.appendChild(a);
		}
	}
}(document));
