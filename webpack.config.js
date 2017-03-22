var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// https://webpack.js.org/configuration
// https://github.com/colindresj/sample-webpack-config
// https://github.com/kriasoft/aspnet-starter-kit
// http://blog.andrewray.me/webpack-when-to-use-and-why/
module.exports = {
	entry: [
		'bootstrap-loader',
		'./MvcApp2017/Scripts/app/main.js',
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './MvcApp2017/dist')
	},
	module: {
		loaders: [
			{ test: /kendo\-ui\-core[\///].*\.js$/, loader: "imports?jQuery=jquery" },
			//{
			//	test: /\.(jpe?g|png|gif|svg)$/i,
			//	loaders: [
			//		'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
			//		'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
			//	]
			//},
			//{
			//	test: /\.sass$/,
			//	exclude: /node_modules/,
			//	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css!sass?indentedSyntax=true&sourceMap=true'})
			//},
		],
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["style-loader","css-loader","sass-loader"]
				})
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("./MvcApp2017/Content/styles.css"),
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
