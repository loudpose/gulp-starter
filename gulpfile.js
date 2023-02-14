// modules
import gulp from 'gulp';
import * as url from 'url';

// import plugins
import { plugins } from './gulp/config/plugins.js';

// global variables
global.app = {
	isBuild: process.argv.includes('--prod'),
	isDev: !process.argv.includes('--prod'),
	gulp: gulp,
	plugins: plugins,
	__dirname: url.fileURLToPath(new URL('.', import.meta.url))
	// __filename = url.fileURLToPath(import.meta.url)
};

// error handling
global.app.onError = (title) =>
	app.plugins.notify.onError({
		title,
		message: 'Error: <%= error.message %>'
	});

// configs
import { createPath } from './gulp/config/path.js';
import { getColors } from './gulp/config/consoleColors.js';

global.app.path = createPath();
global.colors = getColors();

// import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fontConverter.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// watcher
const watcher = () => {
	gulp.watch(global.app.path.watch.files, copy);
	gulp.watch(global.app.path.watch.html, html);
	gulp.watch(global.app.path.watch.scss, scss);
	gulp.watch(global.app.path.watch.js, js);
	gulp.watch(global.app.path.watch.images, images);
};

export { svgSprive };

// main tasks
const mainTasks = gulp.parallel(copy, fonts, html, scss, js, images);

// set tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const createZIP = gulp.series(zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);
const convertFonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const build = gulp.series(reset, convertFonts, mainTasks);

export { dev };
export { build };
export { createZIP };
export { convertFonts };
export { deployFTP };

// default task
gulp.task('default', dev);
