import { readdir, readFile, lstat, writeFile } from 'fs/promises';

const getFileList = async () => {
	const list = [];

	const getFiles = async (folder, depth = 0) => {
		const filesInFolder = await readdir(folder);
		for (const fileInFolder of filesInFolder) {
			const file = `${folder}/${fileInFolder}`;
			const stats = await lstat(file);
			const isDir = stats.isDirectory();
			if (isDir) {
				await getFiles(file, depth + 1);
			} else if (fileInFolder === 'index.html') {
				list.push(file);
			}
		}
	};
	await getFiles('./src');
	return list;
};

const getFileContent = async (file) => await readFile(file, 'utf8');

const writeFileContent = async (file, data) => await writeFile(file, data, 'utf8');

export { getFileList, getFileContent, writeFileContent };
