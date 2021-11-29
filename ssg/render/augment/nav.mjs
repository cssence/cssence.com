/* Add primary navigation (`nav`) */

const modify = (content, meta) => {

	const navItems = [
		{url: '/', label: 'Home', className: 'c-default', suffix: `<span class="${meta.page.className}" aria-hidden="true" data-hl="Home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-8 -8 112 112" focusable="false"><path fill="#fff" d="M48 8C26 8 8 26 8 48s18 40 40 40c14 0 26.2-7 33.4-18L69.7 58.4c-4 8-12 13.7-21.7 13.7-13.3 0-24-10.7-24-24s10.7-24 24-24c9.6 0 17.8 5.6 21.7 13.7L81.4 26C74.2 15 62 8 48 8z"/><path fill="#d34b6c" d="M58.3 26.3l-32 32c2.4 5 6.4 9 11.4 11.4l32-32c-2.4-5-6.4-9-11.4-11.4z"/></svg></span>`},
		{url: '/articles/', label: 'Articles', className: 'c-article'},
		{url: '/notes/', label: 'Notes', className: 'c-note'},
		{url: '/about/', label: 'About', className: 'c-about'},
		{url: '/popular/', label: 'Popular'},
		{url: `/${meta.date.year}/`, label: 'This year'},
		{url: `/${meta.date.year - 1}/`, label: 'Last year'},
		{url: '/archive/', label: 'Archive'}
	];
	if (!meta.toc.byPath[navItems[5].url]) {
		navItems[5] = navItems[6];
		navItems[6] = {url: `/${meta.date.year - 2}/`, label: '2 years ago'};
	}
	const createMenuItem = (link, index) => `<li><a${link.className ? ` class="${link.className}"` : ''}${link.url === '/' ? ' rel="home"' : ''} href="${link.url}"><span hidden aria-hidden="true">0${index + 1} </span>${link.label}${link.suffix || ''}</a></li>`;
	const nav = [
		'<nav>',
		'<h2 class="visually-hidden" id="navigation">Where to go from here?</h2>',
		'<ul role="list" aria-label="Menu">',
		navItems.map((link, index) => createMenuItem(link, index)).join('\n'),
		'</ul>',
		'</nav>'
	];
	const insertBefore = content.indexOf('</body>');
	content.splice(insertBefore, 0, nav.join('\n'));

};	

export default modify;
