/* serve src directory (DEV mode) */

import http from 'http';

import getArg from './utils/args.mjs';
import colorize, { getColorByHttpResponseStatusCode } from './utils/color.mjs';
import { getFileContent } from './utils/files.mjs';
import getMimeType from './utils/mime.mjs';

import getMetaData from './render/data.mjs';
import augment from './render/augment.mjs';

const hostname = '127.0.0.1';
const port = 8080;
const origin = `http://${hostname}:${port}`;

const isDev = getArg('--dev');
const folder = isDev ? './src' : './public';

(async () => {

	let meta;
	try {
		meta = await getMetaData(folder, !isDev);
	} catch (err) {
		console.error(err);
		return;
	}

	http.createServer(async (request, response) => {

		const ts = new Date();
		const url = new URL(`${origin}${request.url}`);

		const getUrlPath = (url) => url.href.replace(origin, '');
		const finish = (statusCode, mimeTypeOrNewPath, content) => {
			response.statusCode = statusCode;
			response.setHeader(statusCode === 301 ? 'Location' : 'Content-Type', mimeTypeOrNewPath || getMimeType('txt'));
			const prettyRequest = colorize(`${response.statusCode}  ${request.method} "${request.url}"`, getColorByHttpResponseStatusCode(response.statusCode));
			console.info(`[${ts.toISOString()}] ${prettyRequest}  "${request.headers['user-agent']}"`);
			if (statusCode >= 500) console.error(content);
			response.end(statusCode < 300 ? content : '');
		}

		const hasTrailingSlash = url.pathname.endsWith('/');
		if (!hasTrailingSlash) {
			const pathWithSlash = `${url.pathname}/`;
			if (meta.indexHtmlList.includes(pathWithSlash)) {
				url.pathname = pathWithSlash;
				return finish(301, getUrlPath(url));
			}
		}
		const path = url.pathname;
		if (meta.indexHtmlList.includes(path)) {
			const file = `${folder}${path}index.html`;
			try {
				const html = await getFileContent(file);
				if (!isDev) return finish(200, getMimeType('html'), html);
				const enhancedHtml = await augment(path, html, meta);
				return finish(201, getMimeType('html'), enhancedHtml);
			} catch (err) {
				return finish(500, null, err);
			}
		}
		const file = `${folder}${path}`;
		const ext = request.url.split('.').pop();
		try {
			const arbitraryData = await getFileContent(file, {useBuffer: true});
			return finish(200, getMimeType(ext) || getMimeType('txt'), arbitraryData);
		} catch (err) {
			return finish(404);
		}

	}).listen(port, hostname, () => {
		console.info('Running cssence.com DEV server');
		console.info(`Serving ${colorize(meta.indexHtmlList.length, 'green')} pages from '${colorize(folder)}'`);
		console.info(`Available on:\n  ${colorize(origin)}`);
		console.info('Hit CTRL-C to stop the server\n');
	});

})()
