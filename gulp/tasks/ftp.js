import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';
import { join } from 'path';

export const ftp = () => {
	if (
		!configFTP.host ||
		!configFTP.user ||
		!configFTP.password ||
		!configFTP.parallel
	) {
		process.on('exit', function (code) {
			return console.log(colors.error('❗ FTP configuration is missing ❗'));
		});
		process.exit(0);
	}
	configFTP.log = util.log;
	const ftpConnect = vinylFTP.create(configFTP);
	return app.gulp
		.src(join(app.path.buildFolder, '**', '*.*'), {})
		.pipe(app.plugins.plumber({ errorHandler: app.onError('FTP') }))
		.pipe(ftpConnect.dest(join(app.path.ftp, app.path.rootFolder)));
};
