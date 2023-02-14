import svgSprite from 'gulp-svg-sprite';
import { join } from 'path';

export const svgSprive = () => {
	return app.gulp
		.src(app.path.src.svgicons, {})
		.pipe(app.plugins.plumber({ errorHandler: app.onError('SVG') }))
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: join('icons', 'icons.svg'),
						example: true
					}
				}
			})
		)
		.pipe(app.gulp.dest(app.path.build.images));
};
