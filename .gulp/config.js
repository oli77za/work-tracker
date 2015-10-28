module.exports = {
	globs: {
		sass: {
			src:	[
			'../private/sass/colors.scss',
			'../private/sass/mixins.scss',
			'../private/sass/base.scss',
			'../private/sass/normalize.scss',
			'../client/**/*.scss'
			]
		},
		tmpDir: './tmp',
		tmpFile: 'all-sass.css',
		destDir: '../client/css'
	}
};
