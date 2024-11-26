const mapping = {
	'-t': '--timestamp'
};

const args = {};
process.argv.forEach((arg) => {
	if (!arg.startsWith('-')) return;
	const keyValue = arg.split('=');
	const key = keyValue[0];
	args[mapping[key] || key] = keyValue[1] || true;
});

const getArg = (key) => args[mapping[key] || key];

export default getArg;
