/* prepare all assets */

import { cp } from 'fs/promises';

(async () => {
	try {
		await cp('./src', './public', {
			filter: (src, _target) => {
				const fileOrDirectory = src.split('/').pop();
				if (!fileOrDirectory.includes('.')) return true;
				return !fileOrDirectory.startsWith('code.') && !fileOrDirectory.startsWith('og-image.');
			},
			recursive: true
		});
	} catch (err) {
		console.error(err);
	}
})()
