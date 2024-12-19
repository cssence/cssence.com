/** cssence.com type=module global after:DOMContentLoaded script */
try {
	const onReady = (cb) => {
		if (document.readyState !== 'loading') return cb();
		document.addEventListener('DOMContentLoaded', cb);
	};

	onReady(() => {
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
		let pageStyle = localStorage.getItem('page-style');
		if (celebrateCssNakedDay) {
			pageStyle = 'none';
			document.querySelector('body').insertAdjacentHTML('afterbegin', `<aside><center><samp>What’s this? Website broken? Redesign gone wrong? <mark>&nbsp;No!&nbsp;</mark><b> We’re celebrating <a href="${location.pathname === '/settings/' ? '#customization' : '/settings/'}">CSS Naked Day!</a></b></samp></center><hr></aside>`);
		}

		if (pageStyle !== 'none' && document.querySelectorAll('code[class]').length > 0) {
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
			if (sh) shTheme = `prism-${sh}.css`;
			addStyle(`/assets/${shTheme}`);
			loadJS('/assets/prism.js', () => {
				Prism.highlightAll();
			});
		}
	});

} catch (err) {
	console.warn(err);
}
