const mimeTypeMap = {
	'html': 'text/html',
	'css': 'text/css',
	'js': 'text/javascript',
	'json': 'application/json',
	'gif': 'image/gif',
	'ico': 'image/vnd.microsoft.icon',
	'jpg': 'image/jpeg', // TODO .jpeg
	'png': 'image/png',
	'svg': 'image/svg+xml',
	'txt': 'text/plain'
};

const getMimeType = (fileExtension) => mimeTypeMap[fileExtension];

export default getMimeType;
