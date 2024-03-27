/* Modify hero `header` */

const modify = (content, meta) => {

	const i = content.indexOf('</header>') - 1;
	if (!content[i].includes('<br><time')) {
		content[i] = content[i].replace('</i>', `</i><br>${meta.date.format(meta.page.revised)}`);
	} else {
		content[i] = content[i].replace(/<time([^>]*)>([^<]+)<\/time>/g, meta.date.format(meta.page.published || meta.page.revised));
	}
	if (!content[i].includes('<br><img')) {
		content[i] = content[i].replace('</p>', `<br><img src="${meta.page.thumbnail}" alt=""></p>`);
	}
	content[i] = content[i].replace('alt=""', 'width="128" height="96" alt=""');
};

export default modify;
