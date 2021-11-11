/* Extract page-specific meta data */

const storePageData = (urlPath, meta) => {
	meta.page = { ...meta.toc.byPath[urlPath] };
	meta.page.title = meta.page.title.replaceAll('&nbsp;', ' ');
};

const getPageData = (urlPath, content) => {

	// const heading = content[content.indexOf('<header>') + 1].match(/<h1[^>]*>([\s\S]+)<\/h1>/)[1];
	const title = content[5].match(/<title>([^<]+)/)[1];
	const description = content[6].match(/<meta name="description" content="([^"]+)/)[1];
	const className = content[1].match(/class="([^"]+)"/)[1];
	const isIndex = !content[content.indexOf('<main>') + 1].startsWith('<article');
	const isIndexOrPage = isIndex || ['c-default', 'c-about'].includes(className);
	const indicator = content.indexOf('</header>') - 1;
	const thumbnailUrlPath = content[indicator].includes('<br><img') ? content[indicator].match(/<img src="([^"]+)/)[1] : undefined;
	const dates = content[indicator].includes('<br><time') ? content[indicator].match(/<time( data-revised="([^"]+)")*>([^<]+)/).slice(2) : [undefined, undefined];
	if (isIndexOrPage) dates.reverse(); // !isPostByYear posts are revised-only

	return {
		isIndex: isIndex,
		isPostByYear: !isIndexOrPage,
		page: {
			path: urlPath,
			title: title,
			description: description,
			published: dates[1],
			revised: dates[0],
			thumbnail: thumbnailUrlPath || '/404/index.png',
			className: className // === 'c-default' ? undefined : className
		}
	};
};

export { storePageData };
export default getPageData;
