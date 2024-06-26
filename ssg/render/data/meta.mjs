/* Set global meta data */

const createMetaData = () => {

	// set basic meta data for Static Site Generator

	const now = new Date().toISOString().replace(/\.[0-9]+Z/, 'Z');
	const year = Number(now.split('-')[0]);
	const archiveThreshold = now.replace(year, year - 3);
	return {
		RSS_FILE: 'rss.xml',
		getPermalink: (path) => `https://cssence.com${path}`,
		date: {
			build: now,
			year: year,
			isOld: (ts) => ts < archiveThreshold,
			getAuthor: (ts) => ts < "2019-07-00T00:00:00Z" ? 'Matthias Beitl' : 'Matthias Zöchling',
			format: (ts, timeSuffix) => {
				const monthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				const date = new Date(ts);
				const readable = `${monthLong[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
				const withTime = timeSuffix ? ` at ${ts.slice(11, 16)}` : '';
				return `<time datetime="${ts}">${readable}${withTime}</time>`;
			}
		}
	};
};

export default createMetaData;
