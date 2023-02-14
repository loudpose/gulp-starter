import webpack from 'webpack-stream';

export const js = () => {
	return app.gulp
		.src(app.path.src.js, { sourcemaps: true })
		.pipe(app.plugins.plumber({ errorHandler: app.onError('JS') }))
		.pipe(
			webpack({
				mode: app.isDev ? 'development' : 'production',
				output: {
					filename: 'app.min.js'
				}
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
};
