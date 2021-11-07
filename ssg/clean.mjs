/* clean target directory */

import { rm } from 'fs/promises';

(async () => {
	try {
		await rm('./public', {
			force: true,
			recursive: true
		});
	} catch (err) {
		console.error(err);
	}
})()
