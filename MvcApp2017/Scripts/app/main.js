﻿//require("kendo-ui-webpack/styles/web/kendo.common.core.css");
//require("kendo-ui-webpack/styles/web/kendo.default.css");

//import css from '../Content/style.css';

// https://github.com/webpack/webpack/issues/108#issuecomment-26287856
//window.jQuery = window.$ = require("jquery");

// es6 imports
//import tether from 'tether';
//global.Tether = tether;

//require("bootstrap");

var _ = require('underscore');

//var kendo = require("kendo");

var kendoCalendar = require("kendo-ui-webpack/kendo.ui.Calendar");

//var kendoObservable = require("kendo-ui-webpack/kendo.ui.Observable");

(function () {
	var cal = new kendoCalendar($("#my-calendar"));

	var obj = new kendo.Observable();
	console.log(obj);

	$(function () {
		console.log('doc ready!');

		_.each([1, 2, 3], function (i) {
			console.log('foo: ' + i);
		});
	});
})();