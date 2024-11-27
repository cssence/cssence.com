/* Set global meta data */

import getArg from '../../utils/args.mjs';

const createMetaData = () => {

	// set basic meta data for Static Site Generator

	const forceTimestamp = getArg('--timestamp');
	if (forceTimestamp) { 
		console.info(`Build time override: ${forceTimestamp}`);
	}
	const now = forceTimestamp || new Date().toISOString().replace(/\.[0-9]+Z/, 'Z');
	const year = Number(now.split('-')[0]);
	return {
		RSS_FILE: 'rss.xml',
		getPermalink: (path) => `https://cssence.com${path}`,
		date: {
			build: now,
			year: year,
			getAgeInYears: (ts) => {
				const num = (n) => Number(n.slice(0, 10).replaceAll('-', ''));
				return Number(String(num(now) - num(ts)).slice(0, -4)) || 0;
			},
			getAuthor: (ts) => ts < '2019-07-00T00:00:00Z' ? 'Matthias Beitl' : 'Matthias Zöchling',
			format: (ts, timeSuffix) => {
				const monthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				const date = new Date(ts);
				const readable = `${monthLong[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
				const withTime = timeSuffix ? ` at ${ts.slice(11, 16)}` : '';
				return `<time datetime="${ts}">${readable}${withTime}</time>`;
			}
		},
		number: {
			format: (value) => {
				const countLong = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
				return countLong[value] || String(value);
			}
		}
	};
};

export default createMetaData;
