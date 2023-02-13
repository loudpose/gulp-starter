import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`
	},
	src: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/styles/index.scss`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svg/*.svg`
	},
	watch: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/styles/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`
};
