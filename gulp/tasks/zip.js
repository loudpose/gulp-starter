import { deleteAsync } from 'del';
import zipPlugin from 'gulp-zip';
import { join } from 'path';

export const zip = () => {
	deleteAsync(join(app.path.rootFolder, `project.zip`));
	return app.gulp
		.src(join(app.path.buildFolder, '**', '*.*'), {})
		.pipe(app.plugins.plumber({ errorHandler: app.onError('ZIP') }))
		.pipe(zipPlugin(`project.zip`))
		.pipe(app.gulp.dest(app.path.rootFolder));
};
