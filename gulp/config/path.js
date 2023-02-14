import { join } from 'path';

export const createPath = () => {
	const rootFolder = app.__dirname;
	const buildFolder = join(app.__dirname, 'dist');
	const srcFolder = join(app.__dirname, 'src');

	const path = {
		build: {
			js: join(buildFolder, 'js'),
			css: join(buildFolder, 'css'),
			html: buildFolder,
			files: join(buildFolder, 'files'),
			fonts: join(buildFolder, 'fonts'),
			images: join(buildFolder, 'img')
		},
		src: {
			images: join(srcFolder, 'img', '**', '*.{jpg,jpeg,png,gif,webp}'),
			svg: join(srcFolder, 'img', '**', '*.svg'),
			js: join(srcFolder, 'js', 'app.js'),
			html: `${srcFolder}/*.pug`,
			files: join(srcFolder, 'files', '**', '*.*'),
			svgicons: join(srcFolder, 'svg', '*.svg'),
			scss: join(srcFolder, 'styles', 'index.scss'),
			fonts: join(srcFolder, 'fonts', '**/*.{woff,woff2}')
		},
		watch: {
			images: join(srcFolder, 'img', '**', '*.{jpg,jpeg,png,gif,webp,ico,svg}'),
			js: join(srcFolder, 'js', '**', '*.js'),
			scss: join('src', 'styles', '**', '*.scss'),
			html: join(srcFolder, '**', '*.pug'),
			fonts: join(srcFolder, '**', '*.{woff,woff2}'),
			files: join(srcFolder, 'files', '**', '*.*')
		},
		clean: buildFolder,
		buildFolder: buildFolder,
		srcFolder: srcFolder,
		rootFolder: rootFolder,
		ftp: `test`
	};

	return path;
};
