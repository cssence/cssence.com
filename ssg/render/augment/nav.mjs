/* Add primary navigation (`nav`) */

const modify = (content, meta) => {

	const createMenuItem = (link, tag, rel = '', suffix = '') => `<a${link.className ? ` class="${link.className}"` : ''}${rel} href="${link.url}"><span hidden aria-hidden="true">${tag} </span>${link.label}${suffix}</a>`;
	const nav = [
		'<nav class="nav-menu" aria-label="Main">',
		'<p>',
		createMenuItem({url: '/', label: 'Home', className: 'c-default'}, '01', ' rel="home"', `<span class="${meta.page.className}" hidden aria-hidden="true" data-hl="Home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 660 660"><circle cx="330" cy="330" r="330"/><path fill="#d34b6c" d="m435 153 71 71-283 283-71-71Z"/><path fill="#fff" d="M507 153a250 250 0 0 0-354 0 250 250 0 0 0 0 354 250 250 0 0 0 354 0 250 250 0 0 0 32-39l-74-73a150 150 0 0 1-29 41 150 150 0 0 1-212 0 150 150 0 0 1 0-212 150 150 0 0 1 212 0 150 150 0 0 1 29 41l74-73a250 250 0 0 0-32-39Z"/></svg></span>`),
		[
			{url: '/articles/', label: 'Articles', className: 'c-article'},
			{url: '/threads/', label: 'Threads', className: 'c-thread'},
			{url: '/about/', label: 'About', className: 'c-about'},
			{url: '/latest/', label: 'Latest'},
			{url: '/popular/', label: 'Popular'},
			{url: '/series/', label: 'Series'},
			{url: '/archive/', label: 'Archive'}
		].map((link, index) => createMenuItem(link, String(2 + index).padStart(2, '0'))).join('\n'),
		'</p>',
		'</nav>'
	];
	const insertNearTo = content.indexOf('<footer class="imprint">');
	content.splice(insertNearTo + 1, 0, nav.join('\n'));
	content[insertNearTo] = '<footer id="navigation" class="imprint" tabindex="-1">';

};

export default modify;
