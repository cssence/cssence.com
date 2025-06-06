/* Extract page-specific meta data */

const storePageData = (urlPath, meta) => {
	meta.page = { ...meta.toc.byPath[urlPath] };
	meta.page.title = meta.page.title.replaceAll('&nbsp;', ' ');
};

const getPageData = (urlPath, content, meta) => {

	const ROOT = 1, TITLE = 3, DESC = 4, ALT = 5, INDICATOR = content.indexOf('</header>') - 1;

	// const heading = content[content.indexOf('<header>') + 1].match(/<h1[^>]*>([\s\S]+)<\/h1>/)[1];
	const title = content[TITLE].match(/<title>([^<]+)/)[1];
	const description = content[DESC].match(/<meta name="description" content="([^"]+)/)[1];
	const className = content[ROOT].match(/class="([^" ]+)/)[1];
	const isIndex = !content[content.indexOf('<main>') + 1].startsWith('<article');
	const isIndexOrPage = isIndex || ['c-default', 'c-about'].includes(className);
	const type = content[INDICATOR].match(/^<p><i>([^<]+)/)[1];
	const thumbnailUrlPath = content[INDICATOR].includes('<br><img') ? content[INDICATOR].match(/<img src="([^"]+)/)[1] : undefined;
	const dates = content[INDICATOR].includes('<br><time') ? content[INDICATOR].match(/<time( data-revised="([^"]+)")*>([^<]+)/).slice(2) : [undefined, undefined];
	if (isIndexOrPage) dates.reverse(); // !isPostByYear posts are revised-only
	const alternateUrl = content[ALT].startsWith('<link rel="alternate"') && !content[ALT].includes('data-syndication=') ? content[ALT].match(/href="([^"]+)/)[1] : undefined;

	if (alternateUrl?.endsWith(meta.RSS_FILE)) {
		meta.rssXmlList.push(urlPath);
	}

	return {
		isIndex: isIndex,
		isPostByYear: !isIndexOrPage,
		page: {
			path: urlPath,
			type: type,
			title: title,
			description: description,
			published: dates[1],
			revised: dates[0],
			alternateUrl: alternateUrl,
			thumbnail: thumbnailUrlPath || '/404/index.webp',
			className: className
		}
	};
};

export { storePageData };
export default getPageData;
