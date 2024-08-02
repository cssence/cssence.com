/* bump version (minor or patch) */

import { getFileContent, writeFileContent } from './utils/files.mjs';

const types = ['major', 'minor', 'patch'];

const isMajor = process.argv.slice(-1)[0] === `--${types[0]}`;
const isBugfix = process.argv.slice(-1)[0] === `--${types[2]}`;

(async () => {
	const PACKAGE = './package.json';

	try {
		let pkg = await getFileContent(PACKAGE);
		pkg = JSON.parse(pkg);

		const version = pkg.version.split('.');
		let type = 0;
		if (!isMajor) type += 1;
		if (isBugfix) type += 1;
		version[type] = String(Number(version[type]) + 1);
		for (let suffix = type + 1; suffix < version.length; suffix += 1) {
			version[suffix] = '0';
		}
		pkg.version = version.join('.');

		const fileContent = `${JSON.stringify(pkg, null, '  ')}\n`;
		await writeFileContent(PACKAGE, fileContent);
	
		console.log(`Bump version to ${pkg.version} (${types[type]}).`);
	
	} catch (err) {
		console.error(err);
	}
})()
