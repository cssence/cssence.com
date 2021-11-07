/* prepare all assets */

import { cp } from 'fs/promises';

(async () => {
	try {
		await cp('./src', './public', {
			filter: (directoryOrFile) => directoryOrFile !== 'src/dev',
			recursive: true
		});
	} catch (err) {
		console.error(err);
	}
})()
