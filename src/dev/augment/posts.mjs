/* Add `.posts` (and occasionally the .posts summary) to index pages */

const add = (content, meta) => {

	const start = content.indexOf('<section class="posts">');
	if (start === -1) return content;

	const indicatorMap = {
		'c-default': 'Internal',
		'c-about': 'Internal',
		'c-code': 'Code',
		'c-editorial': 'Editorial',
		'c-essay': 'Essay',
		'c-event': 'Event',
		'c-note': 'Note'
	};

	for (const section of meta.page.sections) {
		const listItems = [];
		for (const card of section.cards) {
			const indicator = card.isIndex ? (card.urlPath === '/' ? 'Home' : 'Index') : indicatorMap[card.className];
			const date = card.published || card.revised;
			const listItem = [
				`<li class="${card.className}">`,
				`<h3><a href="${card.path}">${card.title}</a></h3>`,
				`<p>${card.description}</p>`,
				`<p><i>${indicator}</i><br>${date ? meta.date.format(date) : ''}<br><img src="${card.thumbnail}" alt=""></p>`,
				'</li>'
			];
			listItems.push(listItem.join('\n'));
		}
		content[start + section.offset] = listItems.join('\n');
		delete section.offset;
	}

	const section = meta.page.sections[0];
	if (meta.page.sections.length === 1 && section.id === 'overview') {
		const countLong = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
		const writtenForm = (n) => countLong[n] ? countLong[n].toLowerCase() : n;
		const latestOnly = section.limit && section.total > section.limit;

		const sectionHeading = start + 1;
		content[sectionHeading] = content[sectionHeading].replace('Overview', latestOnly ? 'Latest posts' : 'All posts');

		const unlimited = `The list above contains ${writtenForm(section.total)} ${section.total === 1 ? 'entry' : 'entries'}, but there are a lot more in other sections on this site.`;
		const limited = `The list above contains only the ${writtenForm(section.limit)} most recent entries. In this section alone, there are ${writtenForm(section.total)} blog posts, and there are other sections on this site.`
		const whatElse = ' To see what else is going on, you may want to head over to the <a href="/">home page</a> or browse using the <a href="#navigation">navigation</a> below.';

		const summary = `<p>${latestOnly ? limited : unlimited}${whatElse}</p>`;

		const insertBefore = content.indexOf('</main>') - 2;
		content.splice(insertBefore, 0, summary);
	}

	return content;
};	

export default add;
