const path = require('path');
module.exports = {
	entry:  [path.join(__dirname, 'src/app.js')],
	output: {
		path: path.join(__dirname, '/dest/'),
		publicPath: '/static/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				include: [path.resolve(__dirname, 'src')]
			}
		]
	}
};