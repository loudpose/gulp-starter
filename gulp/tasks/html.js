import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(app.plugins.plumber({ errorHandler: app.onError('HTML') }))
		.pipe(fileInclude())
		.pipe(
			pug({
				// HTML file compression
				pretty: true,
				// log edited files in terminal
				verbose: true
			})
		)
		.pipe(app.plugins.replace(/@img\//g, './img/'))
		.pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					value: '%DT%',
					append: {
						key: '_v',
						cover: 0,
						to: ['css', 'js']
					},
					output: {
						file: 'gulp/version.json'
					}
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
};
