// configured in .bootstraprc file to add or remove needed styles, etc..
require('bootstrap-loader');

require("kendo-ui-webpack/styles/web/kendo.common.core.css");
require("kendo-ui-webpack/styles/web/kendo.default.css");

require('../../Content/style.css');
require('../../Content/style.scss');

var _ = require('underscore');

var kendo = require("kendo-ui-webpack/kendo");

// https://github.com/webpack/webpack/issues/108#issuecomment-26287856
//window.jQuery = window.$ = require("jquery");

(function ($, _) {

	var obj = new kendo.Observable();
	console.log(obj);

	$(function () {
		console.log('doc ready!');

		_.each([1, 2, 3], function (i) {
			console.log(i);
		});
	});
})($, _);
