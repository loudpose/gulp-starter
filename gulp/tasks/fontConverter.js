import fs from 'fs';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';
import { join } from 'path';

export const otfToTtf = () => {
	return app.gulp
		.src(join(app.path.srcFolder, 'fonts', '**', '*.otf'), {})
		.pipe(app.plugins.plumber({ errorHandler: app.onError('FONT CONVERTER') }))
		.pipe(
			fonter({
				formats: ['ttf']
			})
		)
		.pipe(app.gulp.dest(join(app.path.srcFolder, 'fonts', 'ttf')));
};

export const ttfToWoff = () => {
	return (
		app.gulp
			.src(join(app.path.srcFolder, 'fonts', 'ttf', '*.ttf'), {})
			.pipe(
				app.plugins.plumber({ errorHandler: app.onError('FONT CONVERTER') })
			)
			// convert to .woff
			.pipe(
				fonter({
					formats: ['woff']
				})
			)
			// add .woff to src
			.pipe(app.gulp.dest(join(app.path.srcFolder, 'fonts', 'woff')))
			// find .ttf
			.pipe(app.gulp.src(join(app.path.srcFolder, 'fonts', '*.ttf')))
			.pipe(
				fonter({
					formats: ['ttf']
				})
			)
			// convert into .woff2
			.pipe(ttf2woff2())
			// add .woff2 to src
			.pipe(app.gulp.dest(join(app.path.srcFolder, 'fonts', 'woff')))
	);
};

export const fontsStyle = () => {
	// pick scss
	let fontsFile = join(app.path.srcFolder, 'styles', 'fonts', 'fonts.scss');

	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			// check if file exists
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, '', (err) => {
					if (err) console.log(err);
					console.log(colors.success('✔'), colors.sass('fonts.scss'));
					// console.log('Generated scss');
				});
				let newFileOnly;
				// parse all fonts in the folder
				for (let i = 0; i < fontsFiles.length; i++) {
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0]
							? fontFileName.split('-')[0]
							: fontFileName;
						let fontWeight = fontFileName.split('-')[1]
							? fontFileName.split('-')[1]
							: fontFileName;
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (
							fontWeight.toLowerCase() === 'extrabold' ||
							fontWeight.toLowerCase() === 'heavy'
						) {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(
							fontsFile,
							`@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
							(err) => {
								if (err) console.log(err);
								// console.log('Added styles to scss');
							}
						);
						newFileOnly = fontFileName;
					}
				}
			} else {
				// When the file exists don't update fonts.scss
				console.log(
					colors.warn('⚠ Warning: '),
					'File scss/fonts.scss already exists. You have to delete the file to update it!'
				);
			}
		}
	});
	return app.gulp.src(app.path.srcFolder);
};
