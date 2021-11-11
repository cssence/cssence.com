import { readdir, readFile, lstat, writeFile } from 'fs/promises';

const getFileList = async (folder) => {

	const fileList = [];

	const getFiles = async (dir, depth = 0) => {
		const filesInFolder = await readdir(dir);
		for (const fileInFolder of filesInFolder) {
			const file = `${dir}/${fileInFolder}`;
			const stats = await lstat(file);
			const isDir = stats.isDirectory();
			if (isDir) {
				await getFiles(file, depth + 1);
			} else if (fileInFolder === 'index.html') {
				fileList.push(file);
			}
		}
	};
	await getFiles(folder);

	return fileList;
};

const getFileContent = async (file, options = {}) => await readFile(file, options.useBuffer ? null : 'utf8');

const writeFileContent = async (file, data) => await writeFile(file, data, 'utf8');

export { getFileContent, writeFileContent };
export default getFileList;
