/* Build rss.xml from scratch */

const createFeed = (urlPath, meta) => {

	const url = meta.getPermalink(urlPath);

	const TITLE_PREFIX = 'CSSence';
	const content = [];
	content.push('<?xml version="1.0" encoding="utf-8"?>');
	content.push('<?xml-stylesheet href="/assets/rss.xsl" type="text/xsl"?>');
	content.push('<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">');
	content.push('<channel>');
	if (urlPath === '/') {
		content.push(`<title>${TITLE_PREFIX}: Recent</title>`);
		content.push('<description>Recent posts, but every blog post type represented.</description>');
	} else {
		if (urlPath === '/all/') {
			content.push(`<title>${TITLE_PREFIX}</title>`);
		} else {
			content.push(`<title>${TITLE_PREFIX}: ${meta.toc.byPath[urlPath].title.split(' ')[0]}</title>`);
		}
		content.push(`<description>${meta.toc.byPath[urlPath].description}</description>`);
	}
	content.push('<language>en</language>');
	content.push(`<link>${url}${meta.RSS_FILE}</link>`);
	content.push('<managingEditor>rss-feed@cssence.com (Matthias Zöchling)</managingEditor>');
	content.push('<webMaster>rss-feed@cssence.com (Matthias Zöchling)</webMaster>');
	content.push(`<atom:link href="${url}${meta.RSS_FILE}" rel="self" type="application/rss+xml" />`);

	for (const card of meta.page.sections.at(-1).cards) {
		const cardUrl = meta.getPermalink(card.path);
		content.push('<item>');
		content.push(`<link>${cardUrl}</link>`);
		content.push(`<title>${card.title.replaceAll('&nbsp;', ' ')}</title>`);
		content.push('<description>');
		content.push('<![CDATA[');
		content.push(card.rssDescription);
		content.push(']]>');
		content.push('</description>');
		content.push(`<pubDate>${new Date(card.published).toUTCString()}</pubDate>`);
		content.push(`<guid>${cardUrl}</guid>`);
		content.push('</item>');
	}

	content.push('</channel>');
	content.push('</rss>');
	content.push('');

	return content;
};

export default createFeed;
