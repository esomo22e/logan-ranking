/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	window.onResize = function (width) {
		console.log(width);
	};

	window.enterView = function (msg) {
		console.log('enter-view');
	};

/***/ })
/******/ ]);

var data =
[{"Name":"Las Vegas McCarran International Airport","Value":781},
{"Name":"Orlando International Airport","Value":781},
{"Name":"Detroit Metropolitan Wayne County Airport","Value":775},
{"Name":"Denver International Airport","Value":771},
{"Name":"Dallas/Fort Worth International Airport","Value":770},
{"Name":"Hartsfield-Jackson Atlanta International Airport","Value":769},
{"Name":"Houston George Bush Intercontinental Airport","Value":769},
{"Name":"Minneapolis-Saint Paul International Airport","Value":767},
{"Name":"Phoenix Sky Harbor International Airport","Value":765},
{"Name":"San Francisco International Airport","Value":763},
{"Name":"Charlotte Douglas International Airport","Value":761},
{"Name":"Toronto Pearson International Airport","Value":761},
{"Name":"Seattle-Tacoma International Airport","Value":756},
{"Name":"New York John F. Kennedy International Airport","Value":752},
{"Name":"Miami International Airport","Value":750},
{"Name":"Boston Logan International Airport","Value":747},
{"Name":"Chicago O'Hare International Airport","Value":735},
{"Name":"Los Angeles International Airport","Value":735},
{"Name":"Newark Liberty International Airport","Value":701}]





// Use a suffix or preffix if you want to include units or any other character after the value, in this example, we use m for millions. But can be left just as var suffix=""
var preffix = "";
var suffix = "";

// Do you want to highlight a particular bar?
// Use the order number here to do it: 1,2, 3...


	// called once on page load
	var init = function() {

	var arrayValues = [];

	var masterSelector = '.article-graphic.HorizBarcharts';
	var master = $(masterSelector);

	for (var i in data) {
		arrayValues.push(data[i].Value);
	}

	var largest = Math.max.apply(Math, arrayValues);

	for (var i in data) {
		$("#main").append('<div class="row" id="r'+i+'">'+
				'<div class="Name">'+data[i].Name+'</div>'+
				'<div class="Value" style="width:'+(data[i].Value*78)/largest+'%"><span></span></div>'+
				'<div class="ValueNumber">'+preffix+''+numberWithCommas(data[i].Value)+''+suffix+'</div>'+
			'</div>')
	}

	// If you want to highlight a particular chart, change the ID. The first one will be highlighted by default

	$("#r"+0).addClass("highlight");



function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

	};

	// called automatically on page resize
	window.onPymParentResize = function(width) {

	};

init();
