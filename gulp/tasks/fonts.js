// copies fonts in woff & woff2 format
export const fonts = () => {
	return app.gulp
		.src(app.path.src.fonts)
		.pipe(app.plugins.plumber({ errorHandler: app.onError('FONTS') }))
		.pipe(app.gulp.dest(app.path.build.fonts));
};
