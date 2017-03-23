const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCssPlugin = new ExtractTextPlugin("[name].style.css");
//const extractCssPlugin = new ExtractTextPlugin("[contenthash].style.css");

// https://webpack.js.org/configuration
module.exports = {
	entry: [
		path.resolve(__dirname, './MvcApp2017/Scripts/app/main.js')
	],
	output: {
		path: path.resolve(__dirname, './MvcApp2017/dist'),
		//filename: '[hash].bundle.js',
		filename: '[name].bundle.js',
		publicPath: '/dist/',
	},

	// fail out on the first error instead of tolerating it.
	bail: true,

	module: {
		rules: [
			//{
			//	test: /\.(css|scss)$/,
			//	use: extractCssPlugin.extract({
			//		fallback: "style-loader",
			//		use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			//	})
			//},

			// https://github.com/webpack-contrib/url-loader
			// http://stackoverflow.com/questions/31180570/webpack-can-not-load-font-file-unexpected-token
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				],
			},

			// https://github.com/shakacode/bootstrap-loader/blob/master/examples/basic/webpack.dev.config.js#L45
			{ test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'url-loader?limit=10000',
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				use: 'file-loader',
			},
		],
	},

	// https://webpack.js.org/configuration/plugins/
	plugins: [
		//extractCssPlugin,
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			Tether: "tether",
			"window.Tether": "tether",
			Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
			Button: "exports-loader?Button!bootstrap/js/dist/button",
			Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
			Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
			Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
			Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
			Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
			Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
			Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
			Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
			Util: "exports-loader?Util!bootstrap/js/dist/util",
		})
	]
};
