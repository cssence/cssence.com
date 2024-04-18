/* Create RSS feed XML files */

import { getFileContent, writeFileContent } from './utils/files.mjs';

import getMetaData from './render/data.mjs';
import getFeedData from './render/feed-data.mjs';

const folderIn = './src';
const folderOut = './public';

(async () => {

	try {
		const meta = await getMetaData(folderIn);

		const RSS_FILE = 'rss.xml';
		const feeds = [];
		for (const urlPath of meta.indexHtmlList) {
			const alternateUrl = meta.toc.byPath[urlPath].alternateUrl;
			if (alternateUrl?.endsWith(RSS_FILE)) {
				feeds.push(urlPath);
			}
		}

		for (const urlPath of feeds) {
			const url = meta.getPermalink(urlPath);

			const htmlFile = `${folderIn}${urlPath}index.html`;
			const html = await getFileContent(htmlFile);
			await getFeedData(urlPath, html, meta, true);

			const rssFile = `${folderOut}${urlPath}${RSS_FILE}`;
			const rss = [];
			rss.push('<?xml version="1.0" encoding="utf-8"?>');
			rss.push('<?xml-stylesheet href="/assets/rss.xsl" type="text/xsl"?>');
			rss.push('<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">');
			rss.push('<channel>');
			const rssTitle = urlPath === '/all/' ? 'CSSence' : `CSSence: ${meta.toc.byPath[urlPath].title.split(' ')[0]}`;
			rss.push(`<title>${rssTitle}</title>`);
			rss.push(`<description>${meta.toc.byPath[urlPath].description}</description>`);
			rss.push('<language>en</language>');
			rss.push(`<link>${url}${RSS_FILE}</link>`);
			rss.push('<managingEditor>rss-feed@cssence.com (Matthias Zöchling)</managingEditor>');
			rss.push('<webMaster>rss-feed@cssence.com (Matthias Zöchling)</webMaster>');
			rss.push(`<atom:link href="${url}${RSS_FILE}" rel="self" type="application/rss+xml" />`);

			if (meta.page.sections.length !== 1) {
				throw new Error('RSS generation limited to single-section index pages.');
			}
			for (const card of meta.page.sections[0].cards) {
				const cardUrl = meta.getPermalink(card.path);
				const cardHtmlFile = `${folderIn}${card.path}index.html`;
				const cardHtml = await getFileContent(cardHtmlFile);
				const reducedCardHtml = await getFeedData(card.path, cardHtml, meta);

				rss.push('<item>');
				rss.push(`<link>${cardUrl}</link>`);
				rss.push(`<title>${card.title.replaceAll('&nbsp;', ' ')}</title>`);
				rss.push('<description>');
				rss.push('<![CDATA[');
				rss.push(reducedCardHtml);
				rss.push(']]>');
				rss.push('</description>');
				rss.push(`<pubDate>${new Date(card.published).toUTCString()}</pubDate>`);
				rss.push(`<guid>${cardUrl}</guid>`);
				rss.push('</item>');
			}

			rss.push('</channel>');
			rss.push('</rss>');
			rss.push('');

			await writeFileContent(rssFile, rss.join('\n'));
		}

	} catch (err) {
		console.error(err);
	}

})()
