export const server = (done) => {
	app.plugins.browsersync.init({
		open: false,
		server: {
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000
	})
}