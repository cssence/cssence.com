/* cssence.com codepen.io-enhancer */
(function(document) {
	'use strict';
	if (!('querySelector' in document)) return;
	var script = document.querySelector('script[src^="https://cssence.com/js/codepen"]');
	var helpUrl = script.src.split('#')[1];
	if (!helpUrl) {
		console.warn('Added "Learn more" script without help URL.');
		return;
	}
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.href = 'https://cssence.com/css/codepen.css';
	document.head.appendChild(style);
	var anchor = document.createElement('a');
	anchor.rel = 'help';
	anchor.href = 'https://cssence.com' + helpUrl;
	anchor.target = '_blank';
	anchor.setAttribute('hidden', '');
	anchor.textContent = 'Learn more';
	document.body.appendChild(anchor);
}(document));
