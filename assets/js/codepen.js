/* cssence.com codepen.io-enhancer */
((document) => {
	'use strict';
	const script = document.querySelector('script[src^="https://cssence.com/js/codepen"]');
	const helpUrl = script.src.split('#')[1];
	if (!helpUrl) {
		console.warn('Added "Learn more" script without help URL.');
		return;
	}
	const style = document.createElement('style');
	style.textContent = `
[rel=help]{position:fixed;bottom:1rem;left:1rem;height:2em;max-width:calc(100vw - 2rem);padding:0 .5em 0 2em;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 96 96'%3E%3Cpath fill='%23fff' d='M48 8C26 8 8 26 8 48s18 40 40 40c14 0 26.2-7 33.4-18L69.7 58.4c-4 8-12 13.7-21.7 13.7-13.3 0-24-10.7-24-24s10.7-24 24-24c9.6 0 17.8 5.6 21.7 13.7L81.4 26C74.2 15 62 8 48 8z'/%3E%3Cpath fill='%23d34b6c' d='M58.3 26.3l-32 32c2.4 5 6.4 9 11.4 11.4l32-32c-2.4-5-6.4-9-11.4-11.4z'/%3E%3C/svg%3E") left center / contain no-repeat #000;border:2px solid #000;border-radius:2em;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);color:#d34b6c;line-height:1.875;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:24px;text-decoration:none;white-space:nowrap;overflow:hidden}
[rel=help]:focus{outline:0;box-shadow:0 0 0 3px #d34b6c}
[rel=help]::before{content:"";position:absolute;background:linear-gradient(to left,#000 0,rgba(0,0,0,0));right:0;top:0;bottom:0;width:.5em}
[rel=help]::after{content:attr(href);display:inline-block;margin-left:1ch;color:#fff;font-weight:400}`;
	document.head.appendChild(style);
	const anchor = document.createElement('a');
	anchor.rel = 'help';
	anchor.href = 'https://cssence.com' + helpUrl;
	anchor.target = '_blank';
	anchor.textContent = 'Learn more';
	document.body.appendChild(anchor);
})(document);
