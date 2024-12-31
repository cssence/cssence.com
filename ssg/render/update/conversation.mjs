/* Modify conversation `html.c-note main > article > div, aside[aria-labelledby="comments"]` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear) return; // commenting not possible/allowed

	const isStandaloneThread = meta.page.isPostByYear && content.includes('<h2 class="visually-hidden" id="comments">Message thread</h2>');

	const conversation = {thread: []};
	if (isStandaloneThread) {
		conversation.start = content.indexOf('</header>') + 1;
		conversation.end = content.lastIndexOf('</article>') - 1;
	} else {
		conversation.start = content.indexOf('<h2 id="comments">Comments</h2>') - 1;
		conversation.end = conversation.start + content.slice(conversation.start).indexOf('</aside>');
	}
	for (let i = conversation.start + 2; i < conversation.end; i += 1) {
		if (content[i].startsWith('<article')) {
			if (content[i + 1].includes('rel="me"')) {
				content[i + 1] = content[i + 1].replace('<a rel="me" ', '<span data-').replace('</a>', '</span>');
			}
		}
	}

};

export default modify;
