/* bump version (minor or patch) */

import { getFileContent, writeFileContent } from './utils/files.mjs';

const types = ['major', 'minor', 'patch'];

const isMajor = process.argv.slice(-1)[0] === `--${types[0]}`;
const isBugfix = process.argv.slice(-1)[0] === `--${types[2]}`;

(async () => {
	const now = new Date().toISOString().replace(/\.[0-9]+Z/, 'Z');

	try {
		let file = './package.json';

		let fileContent = await getFileContent(file);
		const pkg = JSON.parse(fileContent);

		const version = pkg.version.split('.');
		let type = 0;
		if (!isMajor) type += 1;
		if (isBugfix) type += 1;
		version[type] = String(Number(version[type]) + 1);
		for (let suffix = type + 1; suffix < version.length; suffix += 1) {
			version[suffix] = '0';
		}
		pkg.version = version.join('.');

		fileContent = `${JSON.stringify(pkg, null, '  ')}\n`;
		await writeFileContent(file, fileContent);
		// package.json updated

		file = './src/assets/index.html';
		fileContent = await getFileContent(file);
		const src = fileContent.split('\n');
		for (let l = 0; l < src.length; l += 1) {
			if (src[l].startsWith('<h1')) {
				src[l + 1] = `<p>CSSence.com v${pkg.version}</p>`;
				src[l + 2] = `<p><i>Internal</i><br><time>${now}</time></p>`;
				break;
			}
		}
		fileContent = src.join('\n');
		await writeFileContent(file, fileContent);
		// HTML template updated

		console.log(`Bump version to ${pkg.version} (${types[type]}).`);
	
	} catch (err) {
		console.error(err);
	}
})()
