/** cssence.com type=module global script */
try {
	const onReady = (cb) => {
		if (document.readyState !== 'loading') return cb();
		document.addEventListener('DOMContentLoaded', cb);
	};

	const celebrateCssNakedDay = (() => {
		const duration = localStorage.getItem('cnd-observation');
		if (duration === 'none') return false;
		const date = { now: new Date() };
		const year = date.now.getFullYear();
		const tz = duration === '50h' ? { start: '+14:00', end: '-12:00'} : { start: '', end: ''};
		date.from = new Date(`${year}-04-09T00:00:00${tz.start}`).getTime();
		date.to = new Date(`${year}-04-09T24:00:00${tz.end}`).getTime();
		date.now = date.now.getTime();
		return date.from <= date.now && date.now < date.to;
	})();

	const highlight = () => {
		if (!document.querySelectorAll('code[class]').length) return;
		const addStyle = (href) => {
			const s = document.createElement('link');
			s.rel = 'stylesheet';
			s.setAttribute('media', 'screen');
			s.href = href;
			document.querySelector('head').appendChild(s);
		};
		const loadJS = (src, cb) => {
			/* loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. */
			const s = document.createElement('script');
			s.src = src;
			s.async = true;
			document.querySelector('head').appendChild(s);
			if (cb && typeof(cb) === 'function') {
				s.onload = cb;
			}
			return s;
		};
		let shTheme = 'prism.css';
		const sh = localStorage.getItem('syntax-highlighting');
		if (sh === 'none') return;
		if (!sh && pageStyle === 'elegant') shTheme = 'prism-a11y.css';
		if (sh && ['a11y-dark', 'a11y-light'].includes(sh)) shTheme = `prism-${sh}.css`;
		addStyle(`/assets/${shTheme}`);
		loadJS('/assets/prism.js', () => {
			Prism.highlightAll();
		});
	};

	let pageStyle = localStorage.getItem('page-style');
	if (pageStyle && !['none', 'basic', 'elegant'].includes(pageStyle)) pageStyle = null;
	if (celebrateCssNakedDay) {
		pageStyle = 'none';
		onReady(() => {
			document.querySelector('body').insertAdjacentHTML('afterbegin', `<aside><center><samp>What’s this? Website broken? Redesign gone wrong? <mark>&nbsp;No!&nbsp;</mark><b> We’re celebrating <a href="${location.pathname === '/settings/' ? '#customization' : '/settings/'}">CSS Naked Day!</a></b></samp></center><hr></aside>`);
		});
	}
	const colorScheme = localStorage.getItem('color-scheme');
	if (pageStyle) {
		let styleSet = {};
		document.querySelectorAll('link[media="screen"][rel$="stylesheet"]').forEach((stylesheet) => {
			const style = stylesheet.title.split(' ')[0].toLowerCase();
			if (style === 'custom') {
				stylesheet.href = styleSet[pageStyle] || 'data:text/css;charset=utf-8,';
				styleSet = {};
			} else {
				styleSet[style] = stylesheet.href;
			}
		});
	}
	if (colorScheme && ['dark', 'light'].includes(pageStyle)) document.querySelector('meta[name="color-scheme"]').setAttribute('content', colorScheme);
	if (pageStyle !== 'none') onReady(highlight);

	const shareLink = document.querySelector('#contribute + p a:last-child');
	if (shareLink && navigator.share) {
		shareLink.addEventListener('click', (event) => {
			event.preventDefault();
			navigator.share({
				title: document.querySelector('title').textContent,
				text: document.querySelector('meta[name="description"]').getAttribute('content'),
				url: document.querySelector('link[rel="canonical"]').getAttribute('href')
			});
		});
	}

} catch (err) {
	console.warn(err);
}
