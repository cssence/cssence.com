/* Add primary navigation (`nav`) */

const modify = (content, meta) => {

	const navBase = [
		{url: '/articles/', label: 'Articles', className: 'c-article'},
		{url: '/threads/', label: 'Threads', className: 'c-thread'},
		{url: '/about/', label: 'About', className: 'c-about'},
		{url: '/latest/', label: 'Latest'},
		{url: '/series/', label: 'Series'},
		{url: '/archive/', label: 'Archive'}
	];
	const navArticles = [
		{url: '/essays/', label: 'Essays', className: 'c-essay'},
		{url: '/events/', label: 'Events', className: 'c-event'},
		{url: '/editorials/', label: 'Editorials', className: 'c-editorial'},
		{url: '/code/', label: 'Snippets', className: 'c-code'}
	];
	const navShorts = [
		{url: '/notes/', label: 'Notes', className: 'c-note'},
		{url: '/links/', label: 'Links', className: 'c-link'}
	];
	const navMore = [
		{url: '/popular/', label: 'Popular'},
		{url: '/series/easter-eggs/', label: 'Gems'},
		{url: '/all/', label: 'All'}
	];
	const createMenuItem = (link, tag, rel = '', suffix = '') => `<a${link.className ? ` class="${link.className}"` : ''}${rel} href="${link.url}"><span hidden aria-hidden="true">${tag} </span>${link.label}${suffix}</a>`;
	const nav = [
		'<nav class="nav-menu" aria-label="Main">',
		'<p>',
		createMenuItem({url: '/', label: 'Home', className: 'c-default'}, '00', ' rel="home"', `<span class="${meta.page.className}" hidden aria-hidden="true" data-hl="Home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-8 -8 112 112"><path fill="#fff" d="M48 8C26 8 8 26 8 48s18 40 40 40c14 0 26.2-7 33.4-18L69.7 58.4c-4 8-12 13.7-21.7 13.7-13.3 0-24-10.7-24-24s10.7-24 24-24c9.6 0 17.8 5.6 21.7 13.7L81.4 26C74.2 15 62 8 48 8z"/><path fill="#d34b6c" d="M58.3 26.3l-32 32c2.4 5 6.4 9 11.4 11.4l32-32c-2.4-5-6.4-9-11.4-11.4z"/></svg></span>`),
		navBase.map((link, index) => createMenuItem(link, String(1 + index).padStart(2, '0'))).join('\n'),
		'</p>',
		'<details><summary><span hidden aria-hidden="true">«» </span><span>More</span></summary><p>',
		navArticles.map((link, index) => createMenuItem(link, String(11 + index))).join('\n'),
		navShorts.map((link, index) => createMenuItem(link, String(21 + index))).join('\n'),
		navMore.map((link, index) => createMenuItem(link, String(7 + index).padStart(2, '0'))).join('\n'),
		'</p></details>',
		'</nav>'
	];
	const insertNearTo = content.indexOf('<footer class="imprint">');
	content.splice(insertNearTo + 1, 0, nav.join('\n'));
	content[insertNearTo] = '<footer id="navigation" class="imprint">';

};	

export default modify;
