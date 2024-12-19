/** cssence.com type=module global immediate (inline) script */
try {
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
	const pageStyle = celebrateCssNakedDay ? 'none' : localStorage.getItem('page-style');
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
	const colorScheme = localStorage.getItem('color-scheme');
	if (colorScheme) document.querySelector('meta[name="color-scheme"]').setAttribute('content', colorScheme);
} catch (err) {
	console.warn(err);
}
