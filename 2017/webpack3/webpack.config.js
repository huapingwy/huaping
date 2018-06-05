const path = require('path');
module.exports = {
	entry: ['babel-polyfill', './src/main.js'],
	output: {
		path: __dirname + '/dist',
		publicPath: '/static/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			},
			{
				test: /\.styl$/,
				use: ["vue-style-loader", "css-loader", "stylus-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000,
						name: 'src/images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
					}
				}]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000,
						name: 'src/style/fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
					}
				}]
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				include: [path.resolve(__dirname, 'src')]
			}
		]
	}
}