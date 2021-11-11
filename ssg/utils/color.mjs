const httpResponseStatusCodeMap = {
	'201': 'green',
	'301': 'yellow',
	'404': 'magenta',
	'500': 'red'
};

const getColorByHttpResponseStatusCode = (statusCode) => httpResponseStatusCodeMap[statusCode];

const colorize = (text, color = 'cyan') => {
	const colors = {red: 31, green: 32, yellow: 33, blue: 34, magenta: 35, cyan: 36, white: 37};
	return `\x1b[${colors[color]}m${text}\x1b[0m`;
}

export { getColorByHttpResponseStatusCode };
export default colorize;
