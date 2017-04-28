// configured in .bootstraprc file to add or remove needed styles, etc..
require('bootstrap-loader');

require("kendo-ui-webpack/styles/web/kendo.common.core.css");
require("kendo-ui-webpack/styles/web/kendo.default.css");

require('../../Content/style.css');
require('../../Content/style.scss');

var _ = require('underscore');

// http://docs.telerik.com/kendo-ui/third-party/webpack
import 'kendo-ui-core';
require('./api');

// https://github.com/webpack/webpack/issues/108#issuecomment-26287856
//window.jQuery = window.$ = require("jquery");

(function () {
	$(function () {
		console.log('main.js');
	});
})();
