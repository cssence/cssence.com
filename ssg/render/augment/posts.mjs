/* Add `.posts` (and occasionally the .posts summary) to index pages */

const add = (content, meta) => {

	const start = content.indexOf('<section class="posts">');
	if (start === -1) return;

	const showAllPosts = meta.page.path === '/all/';
	const showLatestPosts = meta.page.path === '/latest/';
	const noThumbnail = showAllPosts ? '/404/index.webp' : undefined;

	for (const section of meta.page.sections) {
		if (!section.offset) continue; // [home:rss]
		const listItems = [];
		for (const card of section.cards) {
			const date = card.published || card.revised;
			const listItem = [
				`<li class="${card.className}">`,
				`<h3><a href="${card.path}">${card.title}</a></h3>`,
				`<p>${card.description}</p>`,
				`<p><i>${card.type}</i><br>${date ? meta.date.format(date) : ''}<br><img src="${noThumbnail || card.thumbnail}" width="128" height="96" alt=""></p>`,
				'</li>'
			];
			listItems.push(listItem.join('\n'));
		}
		content[start + section.offset] = listItems.join('\n');
		delete section.offset;
	}

	const section = meta.page.sections[0];
	if (meta.page.sections.length === 1 && section.id === 'overview') {
		const writtenForm = (n) => meta.number.format(n).toLowerCase().replace('zero', 'no');
		const latestOnly = section.limit && section.total > section.limit;

		const sectionHeading = start + 1;
		content[sectionHeading] = content[sectionHeading].replace('Overview', latestOnly ? 'Latest posts' : 'All posts');

		const unlimited = `The list above contains ${writtenForm(section.total)} ${section.total === 1 ? 'entry' : 'entries'}, but there are a lot more in other sections on this site.`;
		const limited = `The list above contains only the ${writtenForm(section.limit)} most recent entries.`;
		const limitedPlus = ` In this section alone, there are ${writtenForm(section.total)} blog posts, and there are other sections on this site.`
		const whatElse = ' To see what else is going on, you may want to head over to the <a href="/">home page</a> or browse using the <a href="#navigation">navigation</a> below.';
		let summary;
		if (showLatestPosts) {
			summary = `${limited}${whatElse}`;
		} else if (latestOnly) {
			summary = `${limited}${limitedPlus}${whatElse}`;
		} else {
			summary = `${unlimited}${whatElse}`;
			if (showAllPosts) {
				summary = summary.replace(', but there are a lot more in other sections on this site. To see what else is going on', '. If this is too much');
			}
		}
		const insertBefore = content.indexOf('</main>') - 2;
		content.splice(insertBefore, 0, `<p>${summary}</p>`);
	}

};

export default add;
