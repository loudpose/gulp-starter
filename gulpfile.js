// Main module
import gulp from 'gulp';
// import path
import { path } from './gulp/config/path.js';
// import plugins
import { plugins } from './gulp/config/plugins.js';

// global variable
global.app = {
	isBuild: process.argv.includes('--prod'),
	isDev: !process.argv.includes('--prod'),
	path: path,
	gulp: gulp,
	plugins: plugins
};

// import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';

// watcher
const watcher = () => {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
};

export { svgSprive };

// fonts transformation
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
// main tasks
const mainTasks = gulp.parallel(copy, html, scss, js, images);

// set tasks
const dev = gulp.series(
	reset,
	fonts,
	mainTasks,
	gulp.parallel(watcher, server)
);
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev };
export { build };
export { deployZIP };
// export { deployFTP };
// run tasks
gulp.task('default', dev);
