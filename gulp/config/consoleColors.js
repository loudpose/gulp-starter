import colors from 'colors';

export const getColors = () => {
	colors.setTheme({
		data: 'grey',
		debug: 'blue',
		error: 'red',
		warn: 'yellow',
		success: 'green',
		sass: 'magenta'
	});

	return colors;
};
