/* prepare all assets */

import { cp } from 'fs/promises';

(async () => {
	try {
		await cp('./src', './public', {
			recursive: true
		});
	} catch (err) {
		console.error(err);
	}
})()
