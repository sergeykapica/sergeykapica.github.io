/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/assets sync \\.(png%7Cjpe?g%7Cgif%7Cwebp)$":
/*!*********************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png%7Cjpe?g%7Cgif%7Cwebp)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Group2.png": "./src/assets/Group2.png",
	"./berry.png": "./src/assets/berry.png",
	"./berry_1.png": "./src/assets/berry_1.png",
	"./berry_2.png": "./src/assets/berry_2.png",
	"./client.png": "./src/assets/client.png",
	"./feature-berry.png": "./src/assets/feature-berry.png",
	"./feature-leaf.png": "./src/assets/feature-leaf.png",
	"./footer-berry-1.png": "./src/assets/footer-berry-1.png",
	"./footer-berry.png": "./src/assets/footer-berry.png",
	"./footer-bg-start.png": "./src/assets/footer-bg-start.png",
	"./footer-leaf-1.png": "./src/assets/footer-leaf-1.png",
	"./footer-leaf.png": "./src/assets/footer-leaf.png",
	"./leaf.png": "./src/assets/leaf.png",
	"./phone1.png": "./src/assets/phone1.png",
	"./photo-bg-end.png": "./src/assets/photo-bg-end.png",
	"./photo-bg-start.png": "./src/assets/photo-bg-start.png",
	"./photo.jpg": "./src/assets/photo.jpg",
	"./photo_1.jpg": "./src/assets/photo_1.jpg",
	"./photo_2.jpg": "./src/assets/photo_2.jpg",
	"./photo_3.jpg": "./src/assets/photo_3.jpg",
	"./photo_4.jpg": "./src/assets/photo_4.jpg",
	"./photo_5.jpg": "./src/assets/photo_5.jpg",
	"./photo_6.jpg": "./src/assets/photo_6.jpg",
	"./photo_7.jpg": "./src/assets/photo_7.jpg",
	"./photo_8.jpg": "./src/assets/photo_8.jpg",
	"./placeholder.png": "./src/assets/placeholder.png",
	"./product-berry.png": "./src/assets/product-berry.png",
	"./product-leaf-2.png": "./src/assets/product-leaf-2.png",
	"./product-leaf.png": "./src/assets/product-leaf.png",
	"./product_1.jpg": "./src/assets/product_1.jpg",
	"./product_2.jpg": "./src/assets/product_2.jpg",
	"./product_3.jpg": "./src/assets/product_3.jpg",
	"./product_4.jpg": "./src/assets/product_4.jpg",
	"./product_5.jpg": "./src/assets/product_5.jpg",
	"./product_6.jpg": "./src/assets/product_6.jpg",
	"./product_7.jpg": "./src/assets/product_7.jpg",
	"./product_8.jpg": "./src/assets/product_8.jpg",
	"./product_9.jpg": "./src/assets/product_9.jpg",
	"./reviews-berry.png": "./src/assets/reviews-berry.png",
	"./reviews-bg-end.png": "./src/assets/reviews-bg-end.png",
	"./reviews-bg-start.png": "./src/assets/reviews-bg-start.png",
	"./reviews-leaf.png": "./src/assets/reviews-leaf.png",
	"./welcome-section-bg.png": "./src/assets/welcome-section-bg.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync \\.(png%7Cjpe?g%7Cgif%7Cwebp)$";

/***/ }),

/***/ "./src/assets/Group2.png":
/*!*******************************!*\
  !*** ./src/assets/Group2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Group2.png";

/***/ }),

/***/ "./src/assets/berry.png":
/*!******************************!*\
  !*** ./src/assets/berry.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/berry.png";

/***/ }),

/***/ "./src/assets/berry_1.png":
/*!********************************!*\
  !*** ./src/assets/berry_1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/berry_1.png";

/***/ }),

/***/ "./src/assets/berry_2.png":
/*!********************************!*\
  !*** ./src/assets/berry_2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/berry_2.png";

/***/ }),

/***/ "./src/assets/client.png":
/*!*******************************!*\
  !*** ./src/assets/client.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/client.png";

/***/ }),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon.ico";

/***/ }),

/***/ "./src/assets/feature-berry.png":
/*!**************************************!*\
  !*** ./src/assets/feature-berry.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/feature-berry.png";

/***/ }),

/***/ "./src/assets/feature-leaf.png":
/*!*************************************!*\
  !*** ./src/assets/feature-leaf.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/feature-leaf.png";

/***/ }),

/***/ "./src/assets/footer-berry-1.png":
/*!***************************************!*\
  !*** ./src/assets/footer-berry-1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/footer-berry-1.png";

/***/ }),

/***/ "./src/assets/footer-berry.png":
/*!*************************************!*\
  !*** ./src/assets/footer-berry.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/footer-berry.png";

/***/ }),

/***/ "./src/assets/footer-bg-start.png":
/*!****************************************!*\
  !*** ./src/assets/footer-bg-start.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/footer-bg-start.png";

/***/ }),

/***/ "./src/assets/footer-leaf-1.png":
/*!**************************************!*\
  !*** ./src/assets/footer-leaf-1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/footer-leaf-1.png";

/***/ }),

/***/ "./src/assets/footer-leaf.png":
/*!************************************!*\
  !*** ./src/assets/footer-leaf.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/footer-leaf.png";

/***/ }),

/***/ "./src/assets/leaf.png":
/*!*****************************!*\
  !*** ./src/assets/leaf.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/leaf.png";

/***/ }),

/***/ "./src/assets/phone1.png":
/*!*******************************!*\
  !*** ./src/assets/phone1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/phone1.png";

/***/ }),

/***/ "./src/assets/photo-bg-end.png":
/*!*************************************!*\
  !*** ./src/assets/photo-bg-end.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo-bg-end.png";

/***/ }),

/***/ "./src/assets/photo-bg-start.png":
/*!***************************************!*\
  !*** ./src/assets/photo-bg-start.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo-bg-start.png";

/***/ }),

/***/ "./src/assets/photo.jpg":
/*!******************************!*\
  !*** ./src/assets/photo.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo.jpg";

/***/ }),

/***/ "./src/assets/photo_1.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_1.jpg";

/***/ }),

/***/ "./src/assets/photo_2.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_2.jpg";

/***/ }),

/***/ "./src/assets/photo_3.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_3.jpg";

/***/ }),

/***/ "./src/assets/photo_4.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_4.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_4.jpg";

/***/ }),

/***/ "./src/assets/photo_5.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_5.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_5.jpg";

/***/ }),

/***/ "./src/assets/photo_6.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_6.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_6.jpg";

/***/ }),

/***/ "./src/assets/photo_7.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_7.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_7.jpg";

/***/ }),

/***/ "./src/assets/photo_8.jpg":
/*!********************************!*\
  !*** ./src/assets/photo_8.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo_8.jpg";

/***/ }),

/***/ "./src/assets/placeholder.png":
/*!************************************!*\
  !*** ./src/assets/placeholder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/placeholder.png";

/***/ }),

/***/ "./src/assets/product-berry.png":
/*!**************************************!*\
  !*** ./src/assets/product-berry.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product-berry.png";

/***/ }),

/***/ "./src/assets/product-leaf-2.png":
/*!***************************************!*\
  !*** ./src/assets/product-leaf-2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product-leaf-2.png";

/***/ }),

/***/ "./src/assets/product-leaf.png":
/*!*************************************!*\
  !*** ./src/assets/product-leaf.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product-leaf.png";

/***/ }),

/***/ "./src/assets/product_1.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_1.jpg";

/***/ }),

/***/ "./src/assets/product_2.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_2.jpg";

/***/ }),

/***/ "./src/assets/product_3.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_3.jpg";

/***/ }),

/***/ "./src/assets/product_4.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_4.jpg";

/***/ }),

/***/ "./src/assets/product_5.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_5.jpg";

/***/ }),

/***/ "./src/assets/product_6.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_6.jpg";

/***/ }),

/***/ "./src/assets/product_7.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_7.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_7.jpg";

/***/ }),

/***/ "./src/assets/product_8.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_8.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_8.jpg";

/***/ }),

/***/ "./src/assets/product_9.jpg":
/*!**********************************!*\
  !*** ./src/assets/product_9.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_9.jpg";

/***/ }),

/***/ "./src/assets/reviews-berry.png":
/*!**************************************!*\
  !*** ./src/assets/reviews-berry.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/reviews-berry.png";

/***/ }),

/***/ "./src/assets/reviews-bg-end.png":
/*!***************************************!*\
  !*** ./src/assets/reviews-bg-end.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/reviews-bg-end.png";

/***/ }),

/***/ "./src/assets/reviews-bg-start.png":
/*!*****************************************!*\
  !*** ./src/assets/reviews-bg-start.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/reviews-bg-start.png";

/***/ }),

/***/ "./src/assets/reviews-leaf.png":
/*!*************************************!*\
  !*** ./src/assets/reviews-leaf.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/reviews-leaf.png";

/***/ }),

/***/ "./src/assets/svg sync \\.svg$":
/*!**************************************************!*\
  !*** ./src/assets/svg/ sync nonrecursive \.svg$ ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow-left.svg": "./src/assets/svg/arrow-left.svg",
	"./arrow-right.svg": "./src/assets/svg/arrow-right.svg",
	"./check.svg": "./src/assets/svg/check.svg",
	"./location.svg": "./src/assets/svg/location.svg",
	"./phone-input.svg": "./src/assets/svg/phone-input.svg",
	"./phone.svg": "./src/assets/svg/phone.svg",
	"./quote.svg": "./src/assets/svg/quote.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/svg sync \\.svg$";

/***/ }),

/***/ "./src/assets/svg/arrow-left.svg":
/*!***************************************!*\
  !*** ./src/assets/svg/arrow-left.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow-left-usage",
      viewBox: "0 0 17 26",
      url: __webpack_require__.p + "assets/sprite.svg#arrow-left",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/svg/arrow-right.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/arrow-right.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow-right-usage",
      viewBox: "0 0 16 26",
      url: __webpack_require__.p + "assets/sprite.svg#arrow-right",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/svg/check.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/check.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "check-usage",
      viewBox: "0 0 8 7",
      url: __webpack_require__.p + "assets/sprite.svg#check",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/svg/location.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/location.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "location-usage",
      viewBox: "0 0 17 23",
      url: __webpack_require__.p + "assets/sprite.svg#location",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/svg/phone-input.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/phone-input.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "phone-input-usage",
      viewBox: "0 0 25 26",
      url: __webpack_require__.p + "assets/sprite.svg#phone-input",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/svg/phone.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/phone.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "phone-usage",
      viewBox: "0 0 19 19",
      url: __webpack_require__.p + "assets/sprite.svg#phone",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/svg/quote.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/quote.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "quote-usage",
      viewBox: "0 0 40 40",
      url: __webpack_require__.p + "assets/sprite.svg#quote",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/welcome-section-bg.png":
/*!*******************************************!*\
  !*** ./src/assets/welcome-section-bg.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/welcome-section-bg.png";

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/placeholder.png */ "./src/assets/placeholder.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Cake Shop</title>\r\n  <meta name=\"description\" content=\"Cake Shop best and fresh\">\r\n  <meta name=\"keywords\" content=\"Cake, Shop\">\r\n  <meta name=\"author\" content=\"Marsel Firsov\">\r\n  <link rel=\"canonical\" href=\"/\">\r\n  <meta property=\"og:type\" content=\"website\">\r\n  <meta property=\"og:url\" content=\"/\">\r\n  <meta property=\"og:title\" content=\"Cake Shop\">\r\n  <meta property=\"og:description\" content=\"Cake Shop best and fresh\">\r\n  <meta property=\"og:image\" content=\"assets/favicon.ico\">\r\n  <meta property=\"og:site_name\" content=\"Cake Shop\">\r\n  <meta property=\"og:locale\" content=\"ru_RU\">\r\n  <!-- favicon -->\r\n  <link rel=\"icon\" href=\"assets/favicon.ico\" type=\"image/x-icon\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css\"/>\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n\r\n    <div class=\"container flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between text-white\">\r\n      <a href=\"#!\" class=\"text-[21px] font-medium leading-[1.43em]\">Парк сладкого</a>\r\n      <div class=\"flex items-center gap-5 md:gap-[69px]\">\r\n        <div class=\"flex gap-3\">\r\n          <svg class=\"w-4 h-4 sm:w-[17px] sm:h-[23px]\">\r\n\r\n              <use xlink:href=\"assets/sprite.svg#location\"></use>\r\n\r\n          </svg>\r\n          <p class=\"text-[13px] leading-[1.5em]\">г. Стамбул,<br>ул. Семсетина Гунала 31</p>\r\n        </div>\r\n\r\n        <div class=\"flex gap-3\">\r\n          <svg class=\"relative top-1 sm:top-[6px] w-4 h-4 sm:w-[19px] sm:h-[19px]\">\r\n\r\n              <use xlink:href=\"assets/sprite.svg#phone\"></use>\r\n\r\n          </svg>\r\n          <div>\r\n            <a href=\"tel:+88128449549\" class=\"sm:text-xl leading-[1.52em] font-bold\">8 (812) 844-95-49</a>\r\n            <p class=\"text-[13px] leading-[1.5em]\">Ежедневно с 9:00 до 20:00</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </header>\r\n  <main>\r\n    <section class=\"section welcome-section relative pt-[210px] pb-[233px] md:pt-[420px] md:pb-[465px] overflow-hidden\">\r\n      <div class=\"welcome-section__bg\"></div>\r\n      <div class=\"container text-white relative z-10\">\r\n        <div class=\"max-w-[647px]\">\r\n          <span class=\"section__sub-headline\">вкуснейшие</span>\r\n          <h1 class=\"my-5 md:my-6 font-bold text-2xl md:text-[48px] leading-[1.25em] tracking-[-1px]\">Пирожные и капкейки от 50 $/шт. с доставкой по Стамбулу</h1>\r\n          <p class=\"text-lg md:text-2xl leading-[1.43em] mb-5 md:mb-[40px]\">Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.</p>\r\n          <div class=\"flex flex-col sm:flex-row items-center gap-5\">\r\n            <a href=\"#!\" class=\"button-1 !py-[15px] !px-[25px] md:!py-[30px] md:!px-[50px]\">Перейти в каталог</a>\r\n            <span class=\"text-[15px] leading-[1.6em]\">9 различных<br>видов на выбор</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute top-0 left-0 -translate-x-[65px] translate-y-[202px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/berry.png\" alt=\"Berry 1\" data-depth=\"0.3\" class=\"w-[195px]\">\r\n      </div>\r\n\r\n      <div class=\"absolute bottom-0 left-0 -translate-x-[84px] -translate-y-[50px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/leaf.png\" data-depth=\"0.4\" class=\"w-[275px]\">\r\n      </div>\r\n\r\n      <div class=\"absolute top-0 right-0 translate-x-[53px] translate-y-[130px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/berry_1.png\" data-depth=\"0.3\" class=\"w-[170px]\">\r\n      </div>\r\n\r\n      <div class=\"absolute bottom-0 right-0 -translate-x-[165px] -translate-y-[210px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/berry_2.png\" data-depth=\"0.4\" class=\"w-[195px]\">\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"section relative bg-white\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"overflow-hidden\">\r\n        <div class=\"container relative\">\r\n          <h2 class=\"section__headline mb-[40px] md:mb-[80px]\">Для любых событий и дорогих вам людей </h2>\r\n          <div class=\"product-list grid sm:grid-cols-2 lg:grid-cols-3 gap-5\">\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_1.jpg\" alt=\"Product 1\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Кремовый замок</h3>\r\n                <p class=\"product-list__card-description mb-6\">Нежный крем любого цвета на выбор, вафельная основа</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_2.jpg\" alt=\"Product 2\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Малиновый рай</h3>\r\n                <p class=\"product-list__card-description mb-6\">Воздушный крем, темная основа и ягода малины</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_3.jpg\" alt=\"Product 3\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Фейерверк</h3>\r\n                <p class=\"product-list__card-description mb-6\">Разноцветные крем, с бисквитной основой</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_4.jpg\" alt=\"Product 4\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Шоколадный мир</h3>\r\n                <p class=\"product-list__card-description mb-6\">Ореховая стружка, нежный крем и шоколадная основа</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_5.jpg\" alt=\"Product 5\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Слезы дракона</h3>\r\n                <p class=\"product-list__card-description mb-6\">Нежный крем любого цвета на выбор, вафельная основа</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_6.jpg\" alt=\"Product 6\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Летняя фантазия</h3>\r\n                <p class=\"product-list__card-description mb-6\">Украшения в форме сердец, для любимого человека</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_7.jpg\" alt=\"Product 7\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Мыс безумия</h3>\r\n                <p class=\"product-list__card-description mb-6\">Разноцветная основа, стружка и нежный крем</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_8.jpg\" alt=\"Product 8\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Облачная сказка</h3>\r\n                <p class=\"product-list__card-description mb-6\">Светлая основа, нежный крем со стружкой сверху</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_9.jpg\" alt=\"Product 9\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Темный рыцарь</h3>\r\n                <p class=\"product-list__card-description mb-6\">Тёмная основа, нежный крем и вкусные шарики</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"absolute top-0 left-0 -translate-x-[165px] translate-y-[214px] scene z-0\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product-berry.png\" alt=\"Product Berry 1\" data-depth=\"0.3\">\r\n          </div>\r\n\r\n          <div class=\"absolute bottom-0 left-0 -translate-x-[145px] -translate-y-[420px] scene z-0\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product-leaf.png\" data-depth=\"0.3\" alt=\"Product Leaf 1\">\r\n          </div>\r\n\r\n          <div class=\"absolute bottom-0 right-0 translate-x-[160px] -translate-y-[700px] scene z-0\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product-leaf-2.png\" data-depth=\"0.3\" alt=\"Product Leaf 2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute inset-x-0 -bottom-1 h-2 bg-white\"></div>\r\n    </section>\r\n\r\n    <section class=\"relative pt-[300px] lg:pt-[409px] lg:pb-[459px] overflow-hidden text-white\">\r\n      <div class=\"absolute top-0 w-full h-[330px] photo-bg-start z-20 lazy-bg\" data-src=\"./assets/photo-bg-start.png\"></div>\r\n      <div class=\"container flex flex-col gap-10 lg:block relative z-10\">\r\n        <div class=\"absolute top-0 left-0 -translate-x-[26px] -translate-y-[49px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/feature-leaf.png\" data-depth=\"0.3\" alt=\"Feature Leaf\" class=\"w-[110px]\">\r\n        </div>\r\n        <div class=\"absolute top-0 right-0 translate-x-[152px] -translate-y-[100px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/feature-berry.png\" data-depth=\"0.3\" alt=\"Feature Berry\" class=\"w-[152px]\">\r\n        </div>\r\n        <div class=\"lg:absolute lg:top-[-90px] lg:left-[-406px] order-2\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/phone1.png\" alt=\"Phone\" class=\"w-[986px]\">\r\n        </div>\r\n        <div class=\"lg:max-w-[480px] lg:float-right relative order-1 text-center md:text-left\">\r\n          <span class=\"section__sub-headline\">Не нашли то что нужно?</span>\r\n          <h2 class=\"section__headline !text-white md:!text-left my-5 lg:my-6\">Приготовим заказ любой сложности по фото или эскизу</h2>\r\n          <p class=\"text-lg md:text-[21px] leading-[1.43em] tracking-[-0.2px] mb-5 md:mb-[40px]\">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>\r\n          <a href=\"#!\" class=\"button-1 !py-[15px] !px-[25px] md:!py-[30px] md:!px-[50px]\">Загрузить фотографию</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute bottom-0 w-full h-[489px] photo-bg-end z-20 lazy-bg\" data-src=\"./assets/photo-bg-end.png\"></div>\r\n    </section>\r\n\r\n    <section class=\"bg-white relative z-30\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"container flex flex-col lg:flex-row items-center gap-10 lg:gap-0\">\r\n        <div class=\"lg:max-w-[580px] text-center md:text-left\">\r\n          <span class=\"section__sub-headline\">Кто будет готовить?</span>\r\n          <h2 class=\"section__headline md:!text-left mt-4 md:mt-6 mb-5 md:mb-[36px]\">Лично приготовлю и всё красиво упакую для вашего события</h2>\r\n          <ul class=\"section__list space-y-5 md:space-y-[30px] max-w-[438px] mb-[25px] md:mb-[50px] text-left mx-auto md:mx-0\">\r\n            <li>\r\n              Проконсультирую по выбору капкейков и придумаю нестандартную идею\r\n            </li>\r\n            <li>\r\n              Приготовлю капкейки для вашего события, которые обязательно всем понравятся \r\n            </li>\r\n            <li>\r\n              Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок\r\n            </li>\r\n          </ul>\r\n          <a href=\"#!\" class=\"button-1 !py-[15px] !px-[25px] md:!py-[30px] md:!px-[50px]\">Задать вопрос Юлии</a>\r\n        </div>\r\n        <div class=\"relative\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/Group2.png\" alt=\"Women\">\r\n          <div class=\"absolute bottom-10 lg:bottom-[162px] left-1/2 lg:left-[-92px] -translate-x-1/2 lg:translate-x-0\">\r\n            <div class=\"w-[287px] h-[60px] bg-grey-3 flex items-center justify-center text-white text-xl md:text-2xl tracking-[-0.3px] font-medium skew-x-[-8deg] rounded-[6px]\"><span class=\"skew-x-[8deg]\">Юлия Кондратьева</span></div>\r\n            <div class=\"w-[218px] h-[52px] mx-auto bg-grey-2 flex items-center justify-center text-grey-3 text-base md:text-lg tracking-[1px] uppercase skew-x-[-8deg] rounded-b-[6px]\"><span class=\"skew-x-[8deg]\">ваш кондитер</span></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"relative\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"pt-[300px] pb-[238px] lg:pb-[308px] overflow-hidden text-white\">\r\n        <div class=\"absolute top-0 w-full h-[330px] reviews-bg-start z-20 lazy-bg\" data-src=\"./assets/reviews-bg-start.png\"></div>\r\n        <div class=\"container relative z-10\">\r\n          <div class=\"absolute top-0 left-0 -translate-x-[126px] -translate-y-[30px] scene z-20\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/reviews-leaf.png\" data-depth=\"0.3\" alt=\"Feature Leaf\" class=\"w-[126px]\">\r\n          </div>\r\n          <div class=\"absolute top-0 right-0 translate-x-[95px] translate-y-[115px] scene z-20\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/reviews-berry.png\" data-depth=\"0.3\" alt=\"Feature Berry\" class=\"w-[152px]\">\r\n          </div>\r\n          <h2 class=\"section__headline !text-white mb-[40px] md:mb-[80px]\">Почитайте отзывы довольных клиентов</h2>\r\n          <div class=\"swiper reviews-slider !overflow-visible\">\r\n            <!-- Additional required wrapper -->\r\n            <div class=\"swiper-wrapper mb-[35px] lg:mb-[70px]\">\r\n              <!-- Slides -->\r\n              <div class=\"swiper-slide reviews-slider__slide\">\r\n                <div class=\"flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white px-6 py-5 md:px-[143px] md:py-[70px] text-grey-3 rounded-[5px] border border-[2px] border-[#E2EAF2] shadow-[2px_8px_16px_rgba(194,198,208,0.06)]\">\r\n                  <div class=\"lg:max-w-[460px] order-2 lg:order-1\">\r\n                    <svg class=\"w-5 h-5 md:w-[40px] md:h-[40px] text-blue mx-auto mt-5 md:m-0\">\r\n\r\n                        <use xlink:href=\"assets/sprite.svg#quote\"></use>\r\n\r\n                    </svg>\r\n                    <h2 class=\"text-xl md:text-[30px] leading-[1.43em] font-medium text-center md:text-left my-5 md:my-6\">«Результат дико порадовал, друзья были в восторге»</h2>\r\n                    <p class=\"text-[15px] leading-[1.7em] mb-5 md:mb-6\">«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                    <a href=\"#!\" class=\"inline-block text-[14px] leading-[1.5em] text-[#4A94FF] hover:text-yellow hover:border-yellow transition-colors duration-150 border-b border-b-[#4A94FF] border-dashed pb-[1px]\">Читать отзыв полностью</a>\r\n                  </div>\r\n                  <div class=\"shrink-0 text-center order-1 lg:order-2\">\r\n                    <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/client.png\" alt=\"Client\" class=\"w-[200px] h-[200px] md:w-[380px] md:h-[380px] border border-grey-2 rounded-full mb-[30px]\">\r\n                    <h3 class=\"text-[21px] leading-[1.43em] font-medium text-grey-3\">Ирина Ларионова</h3>\r\n                    <span class=\"text-[#A6AEB6] leading-[1.7em]\">Стамбул</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide reviews-slider__slide\">\r\n                <div class=\"flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white px-6 py-5 md:px-[143px] md:py-[70px] text-grey-3 rounded-[5px] border border-[2px] border-[#E2EAF2] shadow-[2px_8px_16px_rgba(194,198,208,0.06)]\">\r\n                  <div class=\"lg:max-w-[460px] order-2 lg:order-1\">\r\n                    <svg class=\"w-5 h-5 md:w-[40px] md:h-[40px] text-blue mx-auto mt-5 md:m-0\">\r\n\r\n                        <use xlink:href=\"assets/sprite.svg#quote\"></use>\r\n\r\n                    </svg>\r\n                    <h2 class=\"text-xl md:text-[30px] leading-[1.43em] font-medium text-center md:text-left my-5 md:my-6\">«Результат дико порадовал, друзья были в восторге»</h2>\r\n                    <p class=\"text-[15px] leading-[1.7em] mb-5 md:mb-6\">«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                    <a href=\"#!\" class=\"inline-block text-[14px] leading-[1.5em] text-[#4A94FF] hover:text-yellow hover:border-yellow transition-colors duration-150 border-b border-b-[#4A94FF] border-dashed pb-[1px]\">Читать отзыв полностью</a>\r\n                  </div>\r\n                  <div class=\"shrink-0 text-center order-1 lg:order-2\">\r\n                    <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/client.png\" alt=\"Client\" class=\"w-[200px] h-[200px] md:w-[380px] md:h-[380px] border border-grey-2 rounded-full mb-[30px]\">\r\n                    <h3 class=\"text-[21px] leading-[1.43em] font-medium text-grey-3\">Ирина Ларионова</h3>\r\n                    <span class=\"text-[#A6AEB6] leading-[1.7em]\">Стамбул</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide reviews-slider__slide\">\r\n                <div class=\"flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white px-6 py-5 md:px-[143px] md:py-[70px] text-grey-3 rounded-[5px] border border-[2px] border-[#E2EAF2] shadow-[2px_8px_16px_rgba(194,198,208,0.06)]\">\r\n                  <div class=\"lg:max-w-[460px] order-2 lg:order-1\">\r\n                    <svg class=\"w-5 h-5 md:w-[40px] md:h-[40px] text-blue mx-auto mt-5 md:m-0\">\r\n\r\n                        <use xlink:href=\"assets/sprite.svg#quote\"></use>\r\n\r\n                    </svg>\r\n                    <h2 class=\"text-xl md:text-[30px] leading-[1.43em] font-medium text-center md:text-left my-5 md:my-6\">«Результат дико порадовал, друзья были в восторге»</h2>\r\n                    <p class=\"text-[15px] leading-[1.7em] mb-5 md:mb-6\">«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                    <a href=\"#!\" class=\"inline-block text-[14px] leading-[1.5em] text-[#4A94FF] hover:text-yellow hover:border-yellow transition-colors duration-150 border-b border-b-[#4A94FF] border-dashed pb-[1px]\">Читать отзыв полностью</a>\r\n                  </div>\r\n                  <div class=\"shrink-0 text-center order-1 lg:order-2\">\r\n                    <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/client.png\" alt=\"Client\" class=\"w-[200px] h-[200px] md:w-[380px] md:h-[380px] border border-grey-2 rounded-full mb-[30px]\">\r\n                    <h3 class=\"text-[21px] leading-[1.43em] font-medium text-grey-3\">Ирина Ларионова</h3>\r\n                    <span class=\"text-[#A6AEB6] leading-[1.7em]\">Стамбул</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"flex items-center justify-center gap-6\">\r\n              <div class=\"reviews-slider__prev\">\r\n                <svg class=\"w-[8px] h-[16px] md:w-[10px] md:h-5\">\r\n\r\n                    <use xlink:href=\"assets/sprite.svg#arrow-left\"></use>\r\n\r\n                </svg>\r\n              </div>\r\n              <div class=\"reviews-slider__next\">\r\n                <svg class=\"w-[8px] h-[16px] md:w-[10px] md:h-5\">\r\n\r\n                    <use xlink:href=\"assets/sprite.svg#arrow-right\"></use>\r\n\r\n                </svg>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"absolute bottom-0 w-full h-[284px] reviews-bg-end z-0 lazy-bg\" data-src=\"./assets/reviews-bg-end.png\"></div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"bg-white relative\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"container\">\r\n        <h2 class=\"section__headline mb-[14px]\">Сделали более 3.000 заказов за 2 года</h2>\r\n        <p class=\"mb-[40px] md:mb-[80px] text-center text-xl md:text-2xl leading-[1.43em] text-grey-3\">Посмотрите фото реальных заказов из нашего instagram</p>\r\n      </div>\r\n      <div class=\"grid md:grid-cols-2 lg:grid-cols-3 gap-[9px]\" id=\"products-gallery\">\r\n        <a href=\"./assets/photo.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo.jpg\" alt=\"Photo 1\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_1.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_1.jpg\" alt=\"Photo 2\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_2.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_2.jpg\" alt=\"Photo 3\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n\r\n        <a href=\"./assets/photo_3.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_3.jpg\" alt=\"Photo 4\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_4.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_4.jpg\" alt=\"Photo 5\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_5.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_5.jpg\" alt=\"Photo 6\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n\r\n         <a href=\"./assets/photo_6.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_6.jpg\" alt=\"Photo 6\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_7.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_7.jpg\" alt=\"Photo 7\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_8.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_8.jpg\" alt=\"Photo 8\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n      </div>\r\n    </section>\r\n  </main>\r\n  <footer class=\"footer pt-[300px] relative overflow-hidden\">\r\n    <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n    <div class=\"absolute top-0 w-full h-[284px] footer-bg-start z-20 lazy-bg\" data-src=\"./assets/footer-bg-start.png\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"relative py-[35px] md:py-[70px] px-[20px] md:px-[150px] bg-white rounded-[8px]\">\r\n        <h2 class=\"text-xl md:text-[36px] leading-[1.33em] font-bold text-center text-grey-3 mb-[12px]\">Чтобы сделать заказ, укажите ваш телефон</h2>\r\n        <p class=\"mb-5 md:mb-[36px] text-center text-lg md:text-[21px] leading-[1.43em] tracking-[-0.2px] text-grey-3\">Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>\r\n        <form>\r\n          <div class=\"grid md:grid-cols-2 gap-5 mb-5 md:mb-6\">\r\n            <div class=\"flex px-[26px] py-[30px] text-grey rounded-[8px] bg-grey-2\">\r\n              <svg class=\"shrink-0 w-[25px] h-[25px] mr-[7px] text-[#929AA2]\">\r\n\r\n                  <use xlink:href=\"assets/sprite.svg#phone-input\"></use>\r\n\r\n              </svg>\r\n              <input type=\"tel\" name=\"Сделать заказ\" placeholder=\"Номер телефона\" class=\"w-full text-[15px] leading-[1.6em] bg-transparent outline-none border-none placeholder-inherit\">\r\n            </div>\r\n            <div>\r\n              <a href=\"#!\" class=\"button-1 !py-[28.8px] w-full text-center\">Сделать заказ</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"relative flex items-center justify-center gap-[7px]\">\r\n           <label class=\"w-3 h-3 flex items-center justify-center shrink-0\">\r\n            <input type=\"checkbox\" name=\"politics\" class=\"peer hidden\" value=\"1\" />\r\n            <span class=\"w-full h-full rounded-[2px] border border-grey \r\n                        peer-checked:bg-[#4A94FF] peer-checked:border-[#4A94FF] cursor-pointer\">\r\n            </span>\r\n            <svg class=\"absolute z-20 w-[7px] text-white opacity-0 peer-checked:opacity-100 transition\">\r\n\r\n                  <use xlink:href=\"assets/sprite.svg#check\"></use>\r\n\r\n            </svg>\r\n           </label>\r\n           <a href=\"#!\" class=\"text-grey text-[11px] hover:text-grey-3 transition-colors duration-150\">Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных</a>\r\n          </div>\r\n        </form>\r\n        <div class=\"absolute top-0 left-0 -translate-x-[76px] -translate-y-[65px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-leaf.png\" data-depth=\"0.3\" alt=\"Footer Leaf\" class=\"w-[106px]\">\r\n        </div>\r\n        <div class=\"absolute top-0 right-0 translate-x-[100px] -translate-y-[80px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-berry.png\" data-depth=\"0.3\" alt=\"Footer Berry\" class=\"w-[152px]\">\r\n        </div>\r\n        <div class=\"absolute bottom-0 left-0 -translate-x-[130px] translate-y-[90px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-berry-1.png\" data-depth=\"0.3\" alt=\"Footer Berry 2\" class=\"w-[167px]\">\r\n        </div>\r\n        <div class=\"absolute bottom-0 right-0 translate-x-[110px] translate-y-[90px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-leaf-1.png\" data-depth=\"0.3\" alt=\"Footer Leaf 2\" class=\"w-[146px]\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"footer__bottom mx-auto max-w-[605px] text-[12px] leading-[1.5em] text-center text-grey my-[40px] md:my-[80px]\">\r\n        <ul class=\"flex flex-col sm:flex-row justify-between gap-2 mb-[22px]\">\r\n          <li><a href=\"#!\">\r\n            Согласие на обработку данных\r\n          </a></li>\r\n          <li><a href=\"#!\">\r\n            Служба поддержки\r\n          </a></li>\r\n          <li><a href=\"#!\">\r\n            Политика конфиденциальности\r\n          </a></li>\r\n        </ul>\r\n        <p>© cake.test, 2025 | Created by Marsel Firsov</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js\"></script>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/vendor/photoswipe/dist/photoswipe-lightbox.esm.js":
/*!***************************************************************!*\
  !*** ./src/vendor/photoswipe/dist/photoswipe-lightbox.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoSwipeLightbox)
/* harmony export */ });
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */
/** @typedef {import('../photoswipe.js').Point} Point */

/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {string} className
 * @param {T} tagName
 * @param {Node} [appendToEl]
 * @returns {HTMLElementTagNameMap[T]}
 */
function createElement(className, tagName, appendToEl) {
  var el = document.createElement(tagName);
  if (className) {
    el.className = className;
  }
  if (appendToEl) {
    appendToEl.appendChild(el);
  }
  return el;
}
/**
 * Get transform string
 *
 * @param {number} x
 * @param {number} [y]
 * @param {number} [scale]
 * @returns {string}
 */

function toTransformString(x, y, scale) {
  var propValue = "translate3d(".concat(x, "px,").concat(y || 0, "px,0)");
  if (scale !== undefined) {
    propValue += " scale3d(".concat(scale, ",").concat(scale, ",1)");
  }
  return propValue;
}
/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */

function setWidthHeight(el, w, h) {
  el.style.width = typeof w === 'number' ? "".concat(w, "px") : w;
  el.style.height = typeof h === 'number' ? "".concat(h, "px") : h;
}
/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */

/** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */

var LOAD_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};
/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 * @returns {boolean}
 */

function specialKeyUsed(e) {
  return 'button' in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
/**
 * Parse `gallery` or `children` options.
 *
 * @param {import('../photoswipe.js').ElementProvider} [option]
 * @param {string} [legacySelector]
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */

function getElementsFromOption(option, legacySelector) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  /** @type {HTMLElement[]} */
  var elements = [];
  if (option instanceof Element) {
    elements = [option];
  } else if (option instanceof NodeList || Array.isArray(option)) {
    elements = Array.from(option);
  } else {
    var selector = typeof option === 'string' ? option : legacySelector;
    if (selector) {
      elements = Array.from(parent.querySelectorAll(selector));
    }
  }
  return elements;
}
/**
 * Check if variable is PhotoSwipe class
 *
 * @param {any} fn
 * @returns {boolean}
 */

function isPswpClass(fn) {
  return typeof fn === 'function' && fn.prototype && fn.prototype.goTo;
}
/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */

function isSafari() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}

/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */

/** @typedef {import('../photoswipe.js').default} PhotoSwipe */

/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */

/** @typedef {import('../photoswipe.js').DataSource} DataSource */

/** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */

/** @typedef {import('../slide/content.js').default} ContentDefault */

/** @typedef {import('../slide/slide.js').default} Slide */

/** @typedef {import('../slide/slide.js').SlideData} SlideData */

/** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */

/** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */

/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */

/** @typedef {{ x?: number; y?: number }} Point */

/**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide | undefined, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point | undefined, transitionDuration: number | false | undefined }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource | undefined, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */

/**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource | undefined) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement | null | undefined, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thumbnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds | undefined, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thumbnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 * @prop {(preventPointerEvent: boolean, event: PointerEvent, pointerType: string) => boolean} preventPointerEvent
 *
 */

/**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter
 */

/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */

/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback
 */

/**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */
var PhotoSwipeEvent = /*#__PURE__*/function () {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  function PhotoSwipeEvent(type, details) {
    _classCallCheck(this, PhotoSwipeEvent);
    this.type = type;
    this.defaultPrevented = false;
    if (details) {
      Object.assign(this, details);
    }
  }
  return _createClass(PhotoSwipeEvent, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }]);
}();
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */
var Eventable = /*#__PURE__*/function () {
  function Eventable() {
    _classCallCheck(this, Eventable);
    /**
     * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
     */
    this._listeners = {};
    /**
     * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
     */

    this._filters = {};
    /** @type {PhotoSwipe | undefined} */

    this.pswp = undefined;
    /** @type {PhotoSwipeOptions | undefined} */

    this.options = undefined;
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  return _createClass(Eventable, [{
    key: "addFilter",
    value: function addFilter(name, fn) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      var _this$_filters$name, _this$_filters$name2, _this$pswp;
      if (!this._filters[name]) {
        this._filters[name] = [];
      }
      (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
        fn: fn,
        priority: priority
      });
      (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort(function (f1, f2) {
        return f1.priority - f2.priority;
      });
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
  }, {
    key: "removeFilter",
    value: function removeFilter(name, fn) {
      if (this._filters[name]) {
        // @ts-expect-error
        this._filters[name] = this._filters[name].filter(function (filter) {
          return filter.fn !== fn;
        });
      }
      if (this.pswp) {
        this.pswp.removeFilter(name, fn);
      }
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
  }, {
    key: "applyFilters",
    value: function applyFilters(name) {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var _this$_filters$name3;
      (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach(function (filter) {
        // @ts-expect-error
        args[0] = filter.fn.apply(_this, args);
      });
      return args[0];
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
  }, {
    key: "on",
    value: function on(name, fn) {
      var _this$_listeners$name, _this$pswp2;
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }
      (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn); // When binding events to lightbox,
      // also bind events to PhotoSwipe Core,
      // if it's open.

      (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
  }, {
    key: "off",
    value: function off(name, fn) {
      var _this$pswp3;
      if (this._listeners[name]) {
        // @ts-expect-error
        this._listeners[name] = this._listeners[name].filter(function (listener) {
          return fn !== listener;
        });
      }
      (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
  }, {
    key: "dispatch",
    value: function dispatch(name, details) {
      var _this2 = this;
      var _this$_listeners$name2;
      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }
      var event = /** @type {AugmentedEvent<T>} */
      new PhotoSwipeEvent(name, details);
      (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach(function (listener) {
        listener.call(_this2, event);
      });
      return event;
    }
  }]);
}();
var Placeholder = /*#__PURE__*/function () {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  function Placeholder(imageSrc, container) {
    _classCallCheck(this, Placeholder);
    // Create placeholder
    // (stretched thumbnail or simple div behind the main image)

    /** @type {HTMLImageElement | HTMLDivElement | null} */
    this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : 'div', container);
    if (imageSrc) {
      var imgEl = /** @type {HTMLImageElement} */
      this.element;
      imgEl.decoding = 'async';
      imgEl.alt = '';
      imgEl.src = imageSrc;
      imgEl.setAttribute('role', 'presentation');
    }
    this.element.setAttribute('aria-hidden', 'true');
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  return _createClass(Placeholder, [{
    key: "setDisplayedSize",
    value: function setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.element.tagName === 'IMG') {
        // Use transform scale() to modify img placeholder size
        // (instead of changing width/height directly).
        // This helps with performance, specifically in iOS15 Safari.
        setWidthHeight(this.element, 250, 'auto');
        this.element.style.transformOrigin = '0 0';
        this.element.style.transform = toTransformString(0, 0, width / 250);
      } else {
        setWidthHeight(this.element, width, height);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$element;
      if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
        this.element.remove();
      }
      this.element = null;
    }
  }]);
}();
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../util/util.js').LoadState} LoadState */
var Content = /*#__PURE__*/function () {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  function Content(itemData, instance, index) {
    _classCallCheck(this, Content);
    this.instance = instance;
    this.data = itemData;
    this.index = index;
    /** @type {HTMLImageElement | HTMLDivElement | undefined} */

    this.element = undefined;
    /** @type {Placeholder | undefined} */

    this.placeholder = undefined;
    /** @type {Slide | undefined} */

    this.slide = undefined;
    this.displayedImageWidth = 0;
    this.displayedImageHeight = 0;
    this.width = Number(this.data.w) || Number(this.data.width) || 0;
    this.height = Number(this.data.h) || Number(this.data.height) || 0;
    this.isAttached = false;
    this.hasSlide = false;
    this.isDecoding = false;
    /** @type {LoadState} */

    this.state = LOAD_STATE.IDLE;
    if (this.data.type) {
      this.type = this.data.type;
    } else if (this.data.src) {
      this.type = 'image';
    } else {
      this.type = 'html';
    }
    this.instance.dispatch('contentInit', {
      content: this
    });
  }
  return _createClass(Content, [{
    key: "removePlaceholder",
    value: function removePlaceholder() {
      var _this3 = this;
      if (this.placeholder && !this.keepPlaceholder()) {
        // With delay, as image might be loaded, but not rendered
        setTimeout(function () {
          if (_this3.placeholder) {
            _this3.placeholder.destroy();
            _this3.placeholder = undefined;
          }
        }, 1000);
      }
    }
    /**
     * Preload content
     *
     * @param {boolean} isLazy
     * @param {boolean} [reload]
     */
  }, {
    key: "load",
    value: function load(isLazy, reload) {
      if (this.slide && this.usePlaceholder()) {
        if (!this.placeholder) {
          var placeholderSrc = this.instance.applyFilters('placeholderSrc',
          // use  image-based placeholder only for the first slide,
          // as rendering (even small stretched thumbnail) is an expensive operation
          this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
          this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
        } else {
          var placeholderEl = this.placeholder.element; // Add placeholder to DOM if it was already created

          if (placeholderEl && !placeholderEl.parentElement) {
            this.slide.container.prepend(placeholderEl);
          }
        }
      }
      if (this.element && !reload) {
        return;
      }
      if (this.instance.dispatch('contentLoad', {
        content: this,
        isLazy: isLazy
      }).defaultPrevented) {
        return;
      }
      if (this.isImageContent()) {
        this.element = createElement('pswp__img', 'img'); // Start loading only after width is defined, as sizes might depend on it.
        // Due to Safari feature, we must define sizes before srcset.

        if (this.displayedImageWidth) {
          this.loadImage(isLazy);
        }
      } else {
        this.element = createElement('pswp__content', 'div');
        this.element.innerHTML = this.data.html || '';
      }
      if (reload && this.slide) {
        this.slide.updateContentSize(true);
      }
    }
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
  }, {
    key: "loadImage",
    value: function loadImage(isLazy) {
      var _this4 = this;
      var _this$data$src, _this$data$alt;
      if (!this.isImageContent() || !this.element || this.instance.dispatch('contentLoadImage', {
        content: this,
        isLazy: isLazy
      }).defaultPrevented) {
        return;
      }
      var imageElement = /** @type HTMLImageElement */
      this.element;
      this.updateSrcsetSizes();
      if (this.data.srcset) {
        imageElement.srcset = this.data.srcset;
      }
      imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : '';
      imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : '';
      this.state = LOAD_STATE.LOADING;
      if (imageElement.complete) {
        this.onLoaded();
      } else {
        imageElement.onload = function () {
          _this4.onLoaded();
        };
        imageElement.onerror = function () {
          _this4.onError();
        };
      }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
  }, {
    key: "setSlide",
    value: function setSlide(slide) {
      this.slide = slide;
      this.hasSlide = true;
      this.instance = slide.pswp; // todo: do we need to unset slide?
    }
    /**
     * Content load success handler
     */
  }, {
    key: "onLoaded",
    value: function onLoaded() {
      this.state = LOAD_STATE.LOADED;
      if (this.slide && this.element) {
        this.instance.dispatch('loadComplete', {
          slide: this.slide,
          content: this
        }); // if content is reloaded

        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.append();
          this.slide.updateContentSize(true);
        }
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
          this.removePlaceholder();
        }
      }
    }
    /**
     * Content load error handler
     */
  }, {
    key: "onError",
    value: function onError() {
      this.state = LOAD_STATE.ERROR;
      if (this.slide) {
        this.displayError();
        this.instance.dispatch('loadComplete', {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch('loadError', {
          slide: this.slide,
          content: this
        });
      }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */
  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
    }
    /**
     * @returns {Boolean} If the content is in error state
     */
  }, {
    key: "isError",
    value: function isError() {
      return this.state === LOAD_STATE.ERROR;
    }
    /**
     * @returns {boolean} If the content is image
     */
  }, {
    key: "isImageContent",
    value: function isImageContent() {
      return this.type === 'image';
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
  }, {
    key: "setDisplayedSize",
    value: function setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.placeholder) {
        this.placeholder.setDisplayedSize(width, height);
      }
      if (this.instance.dispatch('contentResize', {
        content: this,
        width: width,
        height: height
      }).defaultPrevented) {
        return;
      }
      setWidthHeight(this.element, width, height);
      if (this.isImageContent() && !this.isError()) {
        var isInitialSizeUpdate = !this.displayedImageWidth && width;
        this.displayedImageWidth = width;
        this.displayedImageHeight = height;
        if (isInitialSizeUpdate) {
          this.loadImage(false);
        } else {
          this.updateSrcsetSizes();
        }
        if (this.slide) {
          this.instance.dispatch('imageSizeChange', {
            slide: this.slide,
            width: width,
            height: height,
            content: this
          });
        }
      }
    }
    /**
     * @returns {boolean} If the content can be zoomed
     */
  }, {
    key: "isZoomable",
    value: function isZoomable() {
      return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    /**
     * Update image srcset sizes attribute based on width and height
     */
  }, {
    key: "updateSrcsetSizes",
    value: function updateSrcsetSizes() {
      // Handle srcset sizes attribute.
      //
      // Never lower quality, if it was increased previously.
      // Chrome does this automatically, Firefox and Safari do not,
      // so we store largest used size in dataset.
      if (!this.isImageContent() || !this.element || !this.data.srcset) {
        return;
      }
      var image = /** @type HTMLImageElement */
      this.element;
      var sizesWidth = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + 'px';
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
  }, {
    key: "usePlaceholder",
    value: function usePlaceholder() {
      return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     */
  }, {
    key: "lazyLoad",
    value: function lazyLoad() {
      if (this.instance.dispatch('contentLazyLoad', {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.load(true);
    }
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
  }, {
    key: "keepPlaceholder",
    value: function keepPlaceholder() {
      return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
    }
    /**
     * Destroy the content
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.hasSlide = false;
      this.slide = undefined;
      if (this.instance.dispatch('contentDestroy', {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.remove();
      if (this.placeholder) {
        this.placeholder.destroy();
        this.placeholder = undefined;
      }
      if (this.isImageContent() && this.element) {
        this.element.onload = null;
        this.element.onerror = null;
        this.element = undefined;
      }
    }
    /**
     * Display error message
     */
  }, {
    key: "displayError",
    value: function displayError() {
      if (this.slide) {
        var _this$instance$option, _this$instance$option2;
        var errorMsgEl = createElement('pswp__error-msg', 'div');
        errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : '';
        errorMsgEl = /** @type {HTMLDivElement} */
        this.instance.applyFilters('contentErrorElement', errorMsgEl, this);
        this.element = createElement('pswp__content pswp__error-msg-container', 'div');
        this.element.appendChild(errorMsgEl);
        this.slide.container.innerText = '';
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    /**
     * Append the content
     */
  }, {
    key: "append",
    value: function append() {
      var _this5 = this;
      if (this.isAttached || !this.element) {
        return;
      }
      this.isAttached = true;
      if (this.state === LOAD_STATE.ERROR) {
        this.displayError();
        return;
      }
      if (this.instance.dispatch('contentAppend', {
        content: this
      }).defaultPrevented) {
        return;
      }
      var supportsDecode = 'decode' in this.element;
      if (this.isImageContent()) {
        // Use decode() on nearby slides
        //
        // Nearby slide images are in DOM and not hidden via display:none.
        // However, they are placed offscreen (to the left and right side).
        //
        // Some browsers do not composite the image until it's actually visible,
        // using decode() helps.
        //
        // You might ask "why dont you just decode() and then append all images",
        // that's because I want to show image before it's fully loaded,
        // as browser can render parts of image while it is loading.
        // We do not do this in Safari due to partial loading bug.
        if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
          this.isDecoding = true; // purposefully using finally instead of then,
          // as if srcset sizes changes dynamically - it may cause decode error

          /** @type {HTMLImageElement} */

          this.element.decode()["catch"](function () {})["finally"](function () {
            _this5.isDecoding = false;
            _this5.appendImage();
          });
        } else {
          this.appendImage();
        }
      } else if (this.slide && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
  }, {
    key: "activate",
    value: function activate() {
      if (this.instance.dispatch('contentActivate', {
        content: this
      }).defaultPrevented || !this.slide) {
        return;
      }
      if (this.isImageContent() && this.isDecoding && !isSafari()) {
        // add image to slide when it becomes active,
        // even if it's not finished decoding
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true); // try to reload
      }
      if (this.slide.holderElement) {
        this.slide.holderElement.setAttribute('aria-hidden', 'false');
      }
    }
    /**
     * Deactivate the content
     */
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.instance.dispatch('contentDeactivate', {
        content: this
      });
      if (this.slide && this.slide.holderElement) {
        this.slide.holderElement.setAttribute('aria-hidden', 'true');
      }
    }
    /**
     * Remove the content from DOM
     */
  }, {
    key: "remove",
    value: function remove() {
      this.isAttached = false;
      if (this.instance.dispatch('contentRemove', {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
      if (this.placeholder && this.placeholder.element) {
        this.placeholder.element.remove();
      }
    }
    /**
     * Append the image content to slide container
     */
  }, {
    key: "appendImage",
    value: function appendImage() {
      if (!this.isAttached) {
        return;
      }
      if (this.instance.dispatch('contentAppendImage', {
        content: this
      }).defaultPrevented) {
        return;
      } // ensure that element exists and is not already appended

      if (this.slide && this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
      if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
        this.removePlaceholder();
      }
    }
  }]);
}();
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipeBase} pswp
 * @returns {Point}
 */
function getViewportSize(options, pswp) {
  if (options.getViewportSizeFn) {
    var newViewportSize = options.getViewportSizeFn(options, pswp);
    if (newViewportSize) {
      return newViewportSize;
    }
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}
/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {Point} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */

function parsePaddingOption(prop, options, viewportSize, itemData, index) {
  var paddingValue = 0;
  if (options.paddingFn) {
    paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
  } else if (options.padding) {
    paddingValue = options.padding[prop];
  } else {
    var legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1); // @ts-expect-error

    if (options[legacyPropName]) {
      // @ts-expect-error
      paddingValue = options[legacyPropName];
    }
  }
  return Number(paddingValue) || 0;
}
/**
 * @param {PhotoSwipeOptions} options
 * @param {Point} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 * @returns {Point}
 */

function getPanAreaSize(options, viewportSize, itemData, index) {
  return {
    x: viewportSize.x - parsePaddingOption('left', options, viewportSize, itemData, index) - parsePaddingOption('right', options, viewportSize, itemData, index),
    y: viewportSize.y - parsePaddingOption('top', options, viewportSize, itemData, index) - parsePaddingOption('bottom', options, viewportSize, itemData, index)
  };
}
var MAX_IMAGE_WIDTH = 4000;
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */

/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */

/** @typedef {import('../photoswipe.js').Point} Point */

/** @typedef {import('../slide/slide.js').SlideData} SlideData */

/** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */

/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */
var ZoomLevel = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */
  function ZoomLevel(options, itemData, index, pswp) {
    _classCallCheck(this, ZoomLevel);
    this.pswp = pswp;
    this.options = options;
    this.itemData = itemData;
    this.index = index;
    /** @type { Point | null } */

    this.panAreaSize = null;
    /** @type { Point | null } */

    this.elementSize = null;
    this.fit = 1;
    this.fill = 1;
    this.vFill = 1;
    this.initial = 1;
    this.secondary = 1;
    this.max = 1;
    this.min = 1;
  }
  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */
  return _createClass(ZoomLevel, [{
    key: "update",
    value: function update(maxWidth, maxHeight, panAreaSize) {
      /** @type {Point} */
      var elementSize = {
        x: maxWidth,
        y: maxHeight
      };
      this.elementSize = elementSize;
      this.panAreaSize = panAreaSize;
      var hRatio = panAreaSize.x / elementSize.x;
      var vRatio = panAreaSize.y / elementSize.y;
      this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
      this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio); // zoom.vFill defines zoom level of the image
      // when it has 100% of viewport vertical space (height)

      this.vFill = Math.min(1, vRatio);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);
      if (this.pswp) {
        this.pswp.dispatch('zoomLevelsUpdate', {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     * @returns { number | undefined }
     */
  }, {
    key: "_parseZoomLevelOption",
    value: function _parseZoomLevelOption(optionPrefix) {
      var optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
      optionPrefix + 'ZoomLevel';
      var optionValue = this.options[optionName];
      if (!optionValue) {
        return;
      }
      if (typeof optionValue === 'function') {
        return optionValue(this);
      }
      if (optionValue === 'fill') {
        return this.fill;
      }
      if (optionValue === 'fit') {
        return this.fit;
      }
      return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
  }, {
    key: "_getSecondary",
    value: function _getSecondary() {
      var currZoomLevel = this._parseZoomLevelOption('secondary');
      if (currZoomLevel) {
        return currZoomLevel;
      } // 3x of "fit" state, but not larger than original

      currZoomLevel = Math.min(1, this.fit * 3);
      if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
        currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
      }
      return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
  }, {
    key: "_getInitial",
    value: function _getInitial() {
      return this._parseZoomLevelOption('initial') || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
  }, {
    key: "_getMax",
    value: function _getMax() {
      // max zoom level is x4 from "fit state",
      // used for zoom gesture and ctrl/trackpad zoom
      return this._parseZoomLevelOption('max') || Math.max(1, this.fit * 4);
    }
  }]);
}();
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
 * @param {number} index
 * @returns {Content} Image that is being decoded or false.
 */
function _lazyLoadData(itemData, instance, index) {
  var content = instance.createContentFromData(itemData, index);
  /** @type {ZoomLevel | undefined} */

  var zoomLevel;
  var options = instance.options; // We need to know dimensions of the image to preload it,
  // as it might use srcset, and we need to define sizes

  if (options) {
    zoomLevel = new ZoomLevel(options, itemData, -1);
    var viewportSize;
    if (instance.pswp) {
      viewportSize = instance.pswp.viewportSize;
    } else {
      viewportSize = getViewportSize(options, instance);
    }
    var panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
    zoomLevel.update(content.width, content.height, panAreaSize);
  }
  content.lazyLoad();
  if (zoomLevel) {
    content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
  }
  return content;
}
/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default, it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 * @returns {Content | undefined}
 */

function lazyLoadSlide(index, instance) {
  var itemData = instance.getItemData(index);
  if (instance.dispatch('lazyLoadSlide', {
    index: index,
    itemData: itemData
  }).defaultPrevented) {
    return;
  }
  return _lazyLoadData(itemData, instance, index);
}

/** @typedef {import("../photoswipe.js").default} PhotoSwipe */

/** @typedef {import("../slide/slide.js").SlideData} SlideData */

/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */
var PhotoSwipeBase = /*#__PURE__*/function (_Eventable) {
  function PhotoSwipeBase() {
    _classCallCheck(this, PhotoSwipeBase);
    return _callSuper(this, PhotoSwipeBase, arguments);
  }
  _inherits(PhotoSwipeBase, _Eventable);
  return _createClass(PhotoSwipeBase, [{
    key: "getNumItems",
    value:
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    function getNumItems() {
      var _this$options;
      var numItems = 0;
      var dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
      if (dataSource && 'length' in dataSource) {
        // may be an array or just object with length property
        numItems = dataSource.length;
      } else if (dataSource && 'gallery' in dataSource) {
        // query DOM elements
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        if (dataSource.items) {
          numItems = dataSource.items.length;
        }
      } // legacy event, before filters were introduced

      var event = this.dispatch('numItems', {
        dataSource: dataSource,
        numItems: numItems
      });
      return this.applyFilters('numItems', event.numItems, dataSource);
    }
    /**
     * @param {SlideData} slideData
     * @param {number} index
     * @returns {Content}
     */
  }, {
    key: "createContentFromData",
    value: function createContentFromData(slideData, index) {
      return new Content(slideData, this, index);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     * @returns {SlideData}
     */
  }, {
    key: "getItemData",
    value: function getItemData(index) {
      var _this$options2;
      var dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
      /** @type {SlideData | HTMLElement} */

      var dataSourceItem = {};
      if (Array.isArray(dataSource)) {
        // Datasource is an array of elements
        dataSourceItem = dataSource[index];
      } else if (dataSource && 'gallery' in dataSource) {
        // dataSource has gallery property,
        // thus it was created by Lightbox, based on
        // gallery and children options
        // query DOM elements
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        dataSourceItem = dataSource.items[index];
      }
      var itemData = dataSourceItem;
      if (itemData instanceof Element) {
        itemData = this._domElementToItemData(itemData);
      } // Dispatching the itemData event,
      // it's a legacy verion before filters were introduced

      var event = this.dispatch('itemData', {
        itemData: itemData || {},
        index: index
      });
      return this.applyFilters('itemData', event.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     * @returns {HTMLElement[]}
     */
  }, {
    key: "_getGalleryDOMElements",
    value: function _getGalleryDOMElements(galleryElement) {
      var _this$options3, _this$options4;
      if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
        return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
      }
      return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     * @returns {SlideData}
     */
  }, {
    key: "_domElementToItemData",
    value: function _domElementToItemData(element) {
      /** @type {SlideData} */
      var itemData = {
        element: element
      };
      var linkEl = /** @type {HTMLAnchorElement} */
      element.tagName === 'A' ? element : element.querySelector('a');
      if (linkEl) {
        // src comes from data-pswp-src attribute,
        // if it's empty link href is used
        itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
        if (linkEl.dataset.pswpSrcset) {
          itemData.srcset = linkEl.dataset.pswpSrcset;
        }
        itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
        itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0; // support legacy w & h properties

        itemData.w = itemData.width;
        itemData.h = itemData.height;
        if (linkEl.dataset.pswpType) {
          itemData.type = linkEl.dataset.pswpType;
        }
        var thumbnailEl = element.querySelector('img');
        if (thumbnailEl) {
          var _thumbnailEl$getAttri;

          // msrc is URL to placeholder image that's displayed before large image is loaded
          // by default it's displayed only for the first slide
          itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
          itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute('alt')) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : '';
        }
        if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
          itemData.thumbCropped = true;
        }
      }
      return this.applyFilters('domItemData', itemData, element, linkEl);
    }
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns {Content} Image that is being decoded or false.
     */
  }, {
    key: "lazyLoadData",
    value: function lazyLoadData(itemData, index) {
      return _lazyLoadData(itemData, this, index);
    }
  }]);
}(Eventable);
/**
 * @template T
 * @typedef {import('../types.js').Type<T>} Type<T>
 */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/content.js').default} Content */
/** @typedef {import('../core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('../core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {import('../core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * PhotoSwipe Lightbox
 *
 * - If user has unsupported browser it falls back to default browser action (just opens URL)
 * - Binds click event to links that should open PhotoSwipe
 * - parses DOM strcture for PhotoSwipe (retrieves large image URLs and sizes)
 * - Initializes PhotoSwipe
 *
 *
 * Loader options use the same object as PhotoSwipe, and supports such options:
 *
 * gallery - Element | Element[] | NodeList | string selector for the gallery element
 * children - Element | Element[] | NodeList | string selector for the gallery children
 *
 */
var PhotoSwipeLightbox = /*#__PURE__*/function (_PhotoSwipeBase) {
  /**
   * @param {PhotoSwipeOptions} [options]
   */
  function PhotoSwipeLightbox(options) {
    var _this6;
    _classCallCheck(this, PhotoSwipeLightbox);
    _this6 = _callSuper(this, PhotoSwipeLightbox);
    /** @type {PhotoSwipeOptions} */

    _this6.options = options || {};
    _this6._uid = 0;
    _this6.shouldOpen = false;
    /**
     * @private
     * @type {Content | undefined}
     */

    _this6._preloadedContent = undefined;
    _this6.onThumbnailsClick = _this6.onThumbnailsClick.bind(_this6);
    return _this6;
  }
  /**
   * Initialize lightbox, should be called only once.
   * It's not included in the main constructor, so you may bind events before it.
   */
  _inherits(PhotoSwipeLightbox, _PhotoSwipeBase);
  return _createClass(PhotoSwipeLightbox, [{
    key: "init",
    value: function init() {
      var _this7 = this;
      // Bind click events to each gallery
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(function (galleryElement) {
        galleryElement.addEventListener('click', _this7.onThumbnailsClick, false);
      });
    }
    /**
     * @param {MouseEvent} e
     */
  }, {
    key: "onThumbnailsClick",
    value: function onThumbnailsClick(e) {
      // Exit and allow default browser action if:
      if (specialKeyUsed(e) // ... if clicked with a special key (ctrl/cmd...)
      || window.pswp) {
        // ... if PhotoSwipe is already open
        return;
      } // If both clientX and clientY are 0 or not defined,
      // the event is likely triggered by keyboard,
      // so we do not pass the initialPoint
      //
      // Note that some screen readers emulate the mouse position,
      // so it's not the ideal way to detect them.
      //

      /** @type {Point | null} */

      var initialPoint = {
        x: e.clientX,
        y: e.clientY
      };
      if (!initialPoint.x && !initialPoint.y) {
        initialPoint = null;
      }
      var clickedIndex = this.getClickedIndex(e);
      clickedIndex = this.applyFilters('clickedIndex', clickedIndex, e, this);
      /** @type {DataSource} */

      var dataSource = {
        gallery: /** @type {HTMLElement} */
        e.currentTarget
      };
      if (clickedIndex >= 0) {
        e.preventDefault();
        this.loadAndOpen(clickedIndex, dataSource, initialPoint);
      }
    }
    /**
     * Get index of gallery item that was clicked.
     *
     * @param {MouseEvent} e click event
     * @returns {number}
     */
  }, {
    key: "getClickedIndex",
    value: function getClickedIndex(e) {
      // legacy option
      if (this.options.getClickedIndexFn) {
        return this.options.getClickedIndexFn.call(this, e);
      }
      var clickedTarget = /** @type {HTMLElement} */
      e.target;
      var childElements = getElementsFromOption(this.options.children, this.options.childSelector, /** @type {HTMLElement} */
      e.currentTarget);
      var clickedChildIndex = childElements.findIndex(function (child) {
        return child === clickedTarget || child.contains(clickedTarget);
      });
      if (clickedChildIndex !== -1) {
        return clickedChildIndex;
      } else if (this.options.children || this.options.childSelector) {
        // click wasn't on a child element
        return -1;
      } // There is only one item (which is the gallery)

      return 0;
    }
    /**
     * Load and open PhotoSwipe
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     * @param {Point | null} [initialPoint]
     * @returns {boolean}
     */
  }, {
    key: "loadAndOpen",
    value: function loadAndOpen(index, dataSource, initialPoint) {
      // Check if the gallery is already open
      if (window.pswp || !this.options) {
        return false;
      } // Use the first gallery element if dataSource is not provided

      if (!dataSource && this.options.gallery && this.options.children) {
        var galleryElements = getElementsFromOption(this.options.gallery);
        if (galleryElements[0]) {
          dataSource = {
            gallery: galleryElements[0]
          };
        }
      } // set initial index

      this.options.index = index; // define options for PhotoSwipe constructor

      this.options.initialPointerPos = initialPoint;
      this.shouldOpen = true;
      this.preload(index, dataSource);
      return true;
    }
    /**
     * Load the main module and the slide content by index
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     */
  }, {
    key: "preload",
    value: function preload(index, dataSource) {
      var _this8 = this;
      var options = this.options;
      if (dataSource) {
        options.dataSource = dataSource;
      } // Add the main module

      /** @type {Promise<Type<PhotoSwipe>>[]} */

      var promiseArray = [];
      var pswpModuleType = _typeof(options.pswpModule);
      if (isPswpClass(options.pswpModule)) {
        promiseArray.push(Promise.resolve(/** @type {Type<PhotoSwipe>} */
        options.pswpModule));
      } else if (pswpModuleType === 'string') {
        throw new Error('pswpModule as string is no longer supported');
      } else if (pswpModuleType === 'function') {
        promiseArray.push(/** @type {() => Promise<Type<PhotoSwipe>>} */
        options.pswpModule());
      } else {
        throw new Error('pswpModule is not valid');
      } // Add custom-defined promise, if any

      if (typeof options.openPromise === 'function') {
        // allow developers to perform some task before opening
        promiseArray.push(options.openPromise());
      }
      if (options.preloadFirstSlide !== false && index >= 0) {
        this._preloadedContent = lazyLoadSlide(index, this);
      } // Wait till all promises resolve and open PhotoSwipe

      var uid = ++this._uid;
      Promise.all(promiseArray).then(function (iterableModules) {
        if (_this8.shouldOpen) {
          var mainModule = iterableModules[0];
          _this8._openPhotoswipe(mainModule, uid);
        }
      });
    }
    /**
     * @private
     * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
     * @param {number} uid
     */
  }, {
    key: "_openPhotoswipe",
    value: function _openPhotoswipe(module, uid) {
      var _this9 = this;
      // Cancel opening if UID doesn't match the current one
      // (if user clicked on another gallery item before current was loaded).
      //
      // Or if shouldOpen flag is set to false
      // (developer may modify it via public API)
      if (uid !== this._uid && this.shouldOpen) {
        return;
      }
      this.shouldOpen = false; // PhotoSwipe is already open

      if (window.pswp) {
        return;
      }
      /**
       * Pass data to PhotoSwipe and open init
       *
       * @type {PhotoSwipe}
       */

      var pswp = _typeof(module) === 'object' ? new module["default"](this.options) // eslint-disable-line
      : new module(this.options); // eslint-disable-line

      this.pswp = pswp;
      window.pswp = pswp; // map listeners from Lightbox to PhotoSwipe Core

      /** @type {(keyof PhotoSwipeEventsMap)[]} */

      Object.keys(this._listeners).forEach(function (name) {
        var _this$_listeners$name;
        (_this$_listeners$name = _this9._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach(function (fn) {
          pswp.on(name, /** @type {EventCallback<typeof name>} */
          fn);
        });
      }); // same with filters

      /** @type {(keyof PhotoSwipeFiltersMap)[]} */

      Object.keys(this._filters).forEach(function (name) {
        var _this$_filters$name;
        (_this$_filters$name = _this9._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach(function (filter) {
          pswp.addFilter(name, filter.fn, filter.priority);
        });
      });
      if (this._preloadedContent) {
        pswp.contentLoader.addToCache(this._preloadedContent);
        this._preloadedContent = undefined;
      }
      pswp.on('destroy', function () {
        // clean up public variables
        _this9.pswp = undefined;
        delete window.pswp;
      });
      pswp.init();
    }
    /**
     * Unbinds all events, closes PhotoSwipe if it's open.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this0 = this;
      var _this$pswp;
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
      this.shouldOpen = false;
      this._listeners = {};
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(function (galleryElement) {
        galleryElement.removeEventListener('click', _this0.onThumbnailsClick, false);
      });
    }
  }]);
}(PhotoSwipeBase);


/***/ }),

/***/ "./src/vendor/photoswipe/dist/photoswipe.css":
/*!***************************************************!*\
  !*** ./src/vendor/photoswipe/dist/photoswipe.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "332e3bccf4ed3b0db56b" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_photoswipe_dist_photoswipe_lightbox_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/photoswipe/dist/photoswipe-lightbox.esm.js */ "./src/vendor/photoswipe/dist/photoswipe-lightbox.esm.js");
/* harmony import */ var _vendor_photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/photoswipe/dist/photoswipe.css */ "./src/vendor/photoswipe/dist/photoswipe.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.html */ "./src/template.html");
/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/favicon.ico */ "./src/assets/favicon.ico");





function importAll(r) {
  r.keys().forEach(r);
}

// Импорт всех SVG из папки спрайта
importAll(__webpack_require__("./src/assets/svg sync \\.svg$"));

// импортируем все картинки из src/assets
function importAllImages(r) {
  return r.keys().map(r);
}

// ищем файлы с расширениями (png, jpg, jpeg, svg, gif, webp)
importAllImages(__webpack_require__("./src/assets sync \\.(png%7Cjpe?g%7Cgif%7Cwebp)$"));
var swiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  spaceBetween: -100,
  slidesPerView: "auto",
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__next',
    prevEl: '.reviews-slider__prev'
  }
});
var scenes = document.querySelectorAll('.scene');
scenes.forEach(function (scene) {
  var parallaxInstance = new Parallax(scene);
  var lightbox = new _vendor_photoswipe_dist_photoswipe_lightbox_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    gallery: '#products-gallery',
    children: 'a',
    pswpModule: function pswpModule() {
      return __webpack_require__.e(/*! import() */ "src_vendor_photoswipe_dist_photoswipe_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! ./vendor/photoswipe/dist/photoswipe.esm.js */ "./src/vendor/photoswipe/dist/photoswipe.esm.js"));
    }
  });
  lightbox.init();
});
window.addEventListener("load", function () {
  this.setTimeout(function () {
    var e = [].slice.call(document.querySelectorAll("img[loading=lazy]")),
      t = [].slice.call(document.querySelectorAll(".lazy-bg"));
    if (e.length > 0) {
      var n = new IntersectionObserver(function (e, t) {
        e.forEach(function (e) {
          if (e.isIntersecting) {
            var _t = e.target;
            _t.src = _t.dataset.src, n.unobserve(_t);
          }
        });
      }, {
        rootMargin: '400px 0px',
        threshold: 0.01
      });
      e.forEach(function (e) {
        n.observe(e);
      });
    }
    t.length > 0 && t.forEach(function (e) {
      var t = e;
      t.classList.remove("lazy-bg"), t.style.backgroundImage = "url(" + t.dataset.src + ")";
    });
  }, 3e3);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmFmZGRkMTVmZGQ5YjVkZTAyODUwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDLEdBQUcsQ0FBQztBQUFBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy8gc3luYyBub25yZWN1cnNpdmUgXFwuc3ZnJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9hcnJvdy1sZWZ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvY2hlY2suc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2xvY2F0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9waG9uZS1pbnB1dC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvcGhvbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL3F1b3RlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzY0ZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9jb3JlL2V2ZW50YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3NsaWRlL3BsYWNlaG9sZGVyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvc2xpZGUvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3V0aWwvdmlld3BvcnQtc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3NsaWRlL3pvb20tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zbGlkZS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9saWdodGJveC9saWdodGJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9yL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmNzcz8wMDVkIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwidmFyIG1hcCA9IHtcblx0XCIuL0dyb3VwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvR3JvdXAyLnBuZ1wiLFxuXHRcIi4vYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2JlcnJ5LnBuZ1wiLFxuXHRcIi4vYmVycnlfMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvYmVycnlfMS5wbmdcIixcblx0XCIuL2JlcnJ5XzIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2JlcnJ5XzIucG5nXCIsXG5cdFwiLi9jbGllbnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2NsaWVudC5wbmdcIixcblx0XCIuL2ZlYXR1cmUtYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ZlYXR1cmUtYmVycnkucG5nXCIsXG5cdFwiLi9mZWF0dXJlLWxlYWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ZlYXR1cmUtbGVhZi5wbmdcIixcblx0XCIuL2Zvb3Rlci1iZXJyeS0xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9mb290ZXItYmVycnktMS5wbmdcIixcblx0XCIuL2Zvb3Rlci1iZXJyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvZm9vdGVyLWJlcnJ5LnBuZ1wiLFxuXHRcIi4vZm9vdGVyLWJnLXN0YXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9mb290ZXItYmctc3RhcnQucG5nXCIsXG5cdFwiLi9mb290ZXItbGVhZi0xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9mb290ZXItbGVhZi0xLnBuZ1wiLFxuXHRcIi4vZm9vdGVyLWxlYWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2Zvb3Rlci1sZWFmLnBuZ1wiLFxuXHRcIi4vbGVhZi5wbmdcIjogXCIuL3NyYy9hc3NldHMvbGVhZi5wbmdcIixcblx0XCIuL3Bob25lMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvcGhvbmUxLnBuZ1wiLFxuXHRcIi4vcGhvdG8tYmctZW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90by1iZy1lbmQucG5nXCIsXG5cdFwiLi9waG90by1iZy1zdGFydC5wbmdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG8tYmctc3RhcnQucG5nXCIsXG5cdFwiLi9waG90by5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG8uanBnXCIsXG5cdFwiLi9waG90b18xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b18xLmpwZ1wiLFxuXHRcIi4vcGhvdG9fMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9fMi5qcGdcIixcblx0XCIuL3Bob3RvXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Bob3RvXzMuanBnXCIsXG5cdFwiLi9waG90b180LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b180LmpwZ1wiLFxuXHRcIi4vcGhvdG9fNS5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9fNS5qcGdcIixcblx0XCIuL3Bob3RvXzYuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Bob3RvXzYuanBnXCIsXG5cdFwiLi9waG90b183LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b183LmpwZ1wiLFxuXHRcIi4vcGhvdG9fOC5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9fOC5qcGdcIixcblx0XCIuL3BsYWNlaG9sZGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGFjZWhvbGRlci5wbmdcIixcblx0XCIuL3Byb2R1Y3QtYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3QtYmVycnkucG5nXCIsXG5cdFwiLi9wcm9kdWN0LWxlYWYtMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdC1sZWFmLTIucG5nXCIsXG5cdFwiLi9wcm9kdWN0LWxlYWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3QtbGVhZi5wbmdcIixcblx0XCIuL3Byb2R1Y3RfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdF8xLmpwZ1wiLFxuXHRcIi4vcHJvZHVjdF8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wcm9kdWN0XzIuanBnXCIsXG5cdFwiLi9wcm9kdWN0XzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3RfMy5qcGdcIixcblx0XCIuL3Byb2R1Y3RfNC5qcGdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdF80LmpwZ1wiLFxuXHRcIi4vcHJvZHVjdF81LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wcm9kdWN0XzUuanBnXCIsXG5cdFwiLi9wcm9kdWN0XzYuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3RfNi5qcGdcIixcblx0XCIuL3Byb2R1Y3RfNy5qcGdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdF83LmpwZ1wiLFxuXHRcIi4vcHJvZHVjdF84LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wcm9kdWN0XzguanBnXCIsXG5cdFwiLi9wcm9kdWN0XzkuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3RfOS5qcGdcIixcblx0XCIuL3Jldmlld3MtYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Jldmlld3MtYmVycnkucG5nXCIsXG5cdFwiLi9yZXZpZXdzLWJnLWVuZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvcmV2aWV3cy1iZy1lbmQucG5nXCIsXG5cdFwiLi9yZXZpZXdzLWJnLXN0YXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXZpZXdzLWJnLXN0YXJ0LnBuZ1wiLFxuXHRcIi4vcmV2aWV3cy1sZWFmLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXZpZXdzLWxlYWYucG5nXCIsXG5cdFwiLi93ZWxjb21lLXNlY3Rpb24tYmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlbGNvbWUtc2VjdGlvbi1iZy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NnaWYlN0N3ZWJwKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJyb3ctbGVmdC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2Fycm93LWxlZnQuc3ZnXCIsXG5cdFwiLi9hcnJvdy1yaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1wiLFxuXHRcIi4vY2hlY2suc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9jaGVjay5zdmdcIixcblx0XCIuL2xvY2F0aW9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvbG9jYXRpb24uc3ZnXCIsXG5cdFwiLi9waG9uZS1pbnB1dC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3Bob25lLWlucHV0LnN2Z1wiLFxuXHRcIi4vcGhvbmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9waG9uZS5zdmdcIixcblx0XCIuL3F1b3RlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvcXVvdGUuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zdmcgc3luYyBcXFxcLnN2ZyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJhcnJvdy1sZWZ0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxNyAyNlwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjYXJyb3ctbGVmdFwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJhcnJvdy1yaWdodC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTYgMjZcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI2Fycm93LXJpZ2h0XCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImNoZWNrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA4IDdcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI2NoZWNrXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImxvY2F0aW9uLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxNyAyM1wiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjbG9jYXRpb25cIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwicGhvbmUtaW5wdXQtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI2XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3ByaXRlLnN2ZyNwaG9uZS1pbnB1dFwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJwaG9uZS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTkgMTlcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI3Bob25lXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcInF1b3RlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA0MCA0MFwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcGxhY2Vob2xkZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbjxoZWFkPlxcclxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgPHRpdGxlPkNha2UgU2hvcDwvdGl0bGU+XFxyXFxuICA8bWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiQ2FrZSBTaG9wIGJlc3QgYW5kIGZyZXNoXFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcImtleXdvcmRzXFxcIiBjb250ZW50PVxcXCJDYWtlLCBTaG9wXFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcImF1dGhvclxcXCIgY29udGVudD1cXFwiTWFyc2VsIEZpcnNvdlxcXCI+XFxyXFxuICA8bGluayByZWw9XFxcImNhbm9uaWNhbFxcXCIgaHJlZj1cXFwiL1xcXCI+XFxyXFxuICA8bWV0YSBwcm9wZXJ0eT1cXFwib2c6dHlwZVxcXCIgY29udGVudD1cXFwid2Vic2l0ZVxcXCI+XFxyXFxuICA8bWV0YSBwcm9wZXJ0eT1cXFwib2c6dXJsXFxcIiBjb250ZW50PVxcXCIvXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzp0aXRsZVxcXCIgY29udGVudD1cXFwiQ2FrZSBTaG9wXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzpkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiQ2FrZSBTaG9wIGJlc3QgYW5kIGZyZXNoXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzppbWFnZVxcXCIgY29udGVudD1cXFwiYXNzZXRzL2Zhdmljb24uaWNvXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzpzaXRlX25hbWVcXFwiIGNvbnRlbnQ9XFxcIkNha2UgU2hvcFxcXCI+XFxyXFxuICA8bWV0YSBwcm9wZXJ0eT1cXFwib2c6bG9jYWxlXFxcIiBjb250ZW50PVxcXCJydV9SVVxcXCI+XFxyXFxuICA8IS0tIGZhdmljb24gLS0+XFxyXFxuICA8bGluayByZWw9XFxcImljb25cXFwiIGhyZWY9XFxcImFzc2V0cy9mYXZpY29uLmljb1xcXCIgdHlwZT1cXFwiaW1hZ2UveC1pY29uXFxcIj5cXHJcXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zd2lwZXJAMTEvc3dpcGVyLWJ1bmRsZS5taW4uY3NzXFxcIi8+XFxyXFxuICA8bGluayByZWw9XFxcInByZWNvbm5lY3RcXFwiIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cXFwiPlxcclxcbiAgPGxpbmsgcmVsPVxcXCJwcmVjb25uZWN0XFxcIiBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXFxcIiBjcm9zc29yaWdpbj5cXHJcXG4gIDxsaW5rIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcFxcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNSBtZDpnYXAtMCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtd2hpdGVcXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwidGV4dC1bMjFweF0gZm9udC1tZWRpdW0gbGVhZGluZy1bMS40M2VtXVxcXCI+0J/QsNGA0Log0YHQu9Cw0LTQutC+0LPQvjwvYT5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNSBtZDpnYXAtWzY5cHhdXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZ2FwLTNcXFwiPlxcclxcbiAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJ3LTQgaC00IHNtOnctWzE3cHhdIHNtOmgtWzIzcHhdXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjbG9jYXRpb25cXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICA8L3N2Zz5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzEzcHhdIGxlYWRpbmctWzEuNWVtXVxcXCI+0LMuINCh0YLQsNC80LHRg9C7LDxicj7Rg9C7LiDQodC10LzRgdC10YLQuNC90LAg0JPRg9C90LDQu9CwIDMxPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGdhcC0zXFxcIj5cXHJcXG4gICAgICAgICAgPHN2ZyBjbGFzcz1cXFwicmVsYXRpdmUgdG9wLTEgc206dG9wLVs2cHhdIHctNCBoLTQgc206dy1bMTlweF0gc206aC1bMTlweF1cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNwaG9uZVxcXCI+PC91c2U+XFxyXFxuXFxyXFxuICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcInRlbDorODgxMjg0NDk1NDlcXFwiIGNsYXNzPVxcXCJzbTp0ZXh0LXhsIGxlYWRpbmctWzEuNTJlbV0gZm9udC1ib2xkXFxcIj44ICg4MTIpIDg0NC05NS00OTwvYT5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1bMTNweF0gbGVhZGluZy1bMS41ZW1dXFxcIj7QldC20LXQtNC90LXQstC90L4g0YEgOTowMCDQtNC+IDIwOjAwPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwvaGVhZGVyPlxcclxcbiAgPG1haW4+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uIHdlbGNvbWUtc2VjdGlvbiByZWxhdGl2ZSBwdC1bMjEwcHhdIHBiLVsyMzNweF0gbWQ6cHQtWzQyMHB4XSBtZDpwYi1bNDY1cHhdIG92ZXJmbG93LWhpZGRlblxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2VsY29tZS1zZWN0aW9uX19iZ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtd2hpdGUgcmVsYXRpdmUgei0xMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYXgtdy1bNjQ3cHhdXFxcIj5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlY3Rpb25fX3N1Yi1oZWFkbGluZVxcXCI+0LLQutGD0YHQvdC10LnRiNC40LU8L3NwYW4+XFxyXFxuICAgICAgICAgIDxoMSBjbGFzcz1cXFwibXktNSBtZDpteS02IGZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LVs0OHB4XSBsZWFkaW5nLVsxLjI1ZW1dIHRyYWNraW5nLVstMXB4XVxcXCI+0J/QuNGA0L7QttC90YvQtSDQuCDQutCw0L/QutC10LnQutC4INC+0YIgNTAgJC/RiNGCLiDRgSDQtNC+0YHRgtCw0LLQutC+0Lkg0L/QviDQodGC0LDQvNCx0YPQu9GDPC9oMT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtbGcgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS40M2VtXSBtYi01IG1kOm1iLVs0MHB4XVxcXCI+0J/RgNC40LPQvtGC0L7QstC40Lwg0LfQsCAzINGH0LDRgdCwINCyINC00LXQvdGMINC30LDQutCw0LfQsC4g0JTQvtGB0YLQsNCy0LrQsCDQvdCwINCw0LLRgtC+INCyINGF0L7Qu9C+0LTQuNC70YzQvdC40LrQtS48L3A+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC01XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMTVweF0gIXB4LVsyNXB4XSBtZDohcHktWzMwcHhdIG1kOiFweC1bNTBweF1cXFwiPtCf0LXRgNC10LnRgtC4INCyINC60LDRgtCw0LvQvtCzPC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsxNXB4XSBsZWFkaW5nLVsxLjZlbV1cXFwiPjkg0YDQsNC30LvQuNGH0L3Ri9GFPGJyPtCy0LjQtNC+0LIg0L3QsCDQstGL0LHQvtGAPC9zcGFuPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzY1cHhdIHRyYW5zbGF0ZS15LVsyMDJweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2JlcnJ5LnBuZ1xcXCIgYWx0PVxcXCJCZXJyeSAxXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGNsYXNzPVxcXCJ3LVsxOTVweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzg0cHhdIC10cmFuc2xhdGUteS1bNTBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2xlYWYucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjRcXFwiIGNsYXNzPVxcXCJ3LVsyNzVweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdHJhbnNsYXRlLXgtWzUzcHhdIHRyYW5zbGF0ZS15LVsxMzBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2JlcnJ5XzEucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGNsYXNzPVxcXCJ3LVsxNzBweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgLXRyYW5zbGF0ZS14LVsxNjVweF0gLXRyYW5zbGF0ZS15LVsyMTBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2JlcnJ5XzIucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjRcXFwiIGNsYXNzPVxcXCJ3LVsxOTVweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uIHJlbGF0aXZlIGJnLXdoaXRlXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLXRvcC0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3ZlcmZsb3ctaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciByZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwic2VjdGlvbl9faGVhZGxpbmUgbWItWzQwcHhdIG1kOm1iLVs4MHB4XVxcXCI+0JTQu9GPINC70Y7QsdGL0YUg0YHQvtCx0YvRgtC40Lkg0Lgg0LTQvtGA0L7Qs9C40YUg0LLQsNC8INC70Y7QtNC10LkgPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0IGdyaWQgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9wcm9kdWN0XzEuanBnXFxcIiBhbHQ9XFxcIlByb2R1Y3QgMVxcXCIgY2xhc3M9XFxcInJvdW5kZWQtdC1bMTBweF0gdy1mdWxsIGgtWzI0NXB4XSBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1oZWFkbGluZSBtYi0zXFxcIj7QmtGA0LXQvNC+0LLRi9C5INC30LDQvNC+0Lo8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCd0LXQttC90YvQuSDQutGA0LXQvCDQu9GO0LHQvtCz0L4g0YbQstC10YLQsCDQvdCwINCy0YvQsdC+0YAsINCy0LDRhNC10LvRjNC90LDRjyDQvtGB0L3QvtCy0LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfMi5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCAyXFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCc0LDQu9C40L3QvtCy0YvQuSDRgNCw0Lk8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCS0L7Qt9C00YPRiNC90YvQuSDQutGA0LXQvCwg0YLQtdC80L3QsNGPINC+0YHQvdC+0LLQsCDQuCDRj9Cz0L7QtNCwINC80LDQu9C40L3RizwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5saW5lLWJsb2NrIG10LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibG9jayB0ZXh0LWdyZXktNCB0ZXh0LXhsIG1kOnRleHQtMnhsIGxlYWRpbmctWzEuNWVtXSBmb250LW1lZGl1bVxcXCI+NTAgJC/RiNGCLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xIG10LVsxNHB4XVxcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdF8zLmpwZ1xcXCIgYWx0PVxcXCJQcm9kdWN0IDNcXFwiIGNsYXNzPVxcXCJyb3VuZGVkLXQtWzEwcHhdIHctZnVsbCBoLVsyNDVweF0gb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtaGVhZGxpbmUgbWItM1xcXCI+0KTQtdC50LXRgNCy0LXRgNC6PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1kZXNjcmlwdGlvbiBtYi02XFxcIj7QoNCw0LfQvdC+0YbQstC10YLQvdGL0LUg0LrRgNC10LwsINGBINCx0LjRgdC60LLQuNGC0L3QvtC5INC+0YHQvdC+0LLQvtC5PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtYmxvY2sgbXQtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJsb2NrIHRleHQtZ3JleS00IHRleHQteGwgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS41ZW1dIGZvbnQtbWVkaXVtXFxcIj41MCAkL9GI0YIuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwiYnV0dG9uLTEgbXQtWzE0cHhdXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9wcm9kdWN0XzQuanBnXFxcIiBhbHQ9XFxcIlByb2R1Y3QgNFxcXCIgY2xhc3M9XFxcInJvdW5kZWQtdC1bMTBweF0gdy1mdWxsIGgtWzI0NXB4XSBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1oZWFkbGluZSBtYi0zXFxcIj7QqNC+0LrQvtC70LDQtNC90YvQuSDQvNC40YA8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCe0YDQtdGF0L7QstCw0Y8g0YHRgtGA0YPQttC60LAsINC90LXQttC90YvQuSDQutGA0LXQvCDQuCDRiNC+0LrQvtC70LDQtNC90LDRjyDQvtGB0L3QvtCy0LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfNS5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCA1XFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCh0LvQtdC30Ysg0LTRgNCw0LrQvtC90LA8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCd0LXQttC90YvQuSDQutGA0LXQvCDQu9GO0LHQvtCz0L4g0YbQstC10YLQsCDQvdCwINCy0YvQsdC+0YAsINCy0LDRhNC10LvRjNC90LDRjyDQvtGB0L3QvtCy0LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfNi5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCA2XFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCb0LXRgtC90Y/RjyDRhNCw0L3RgtCw0LfQuNGPPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1kZXNjcmlwdGlvbiBtYi02XFxcIj7Qo9C60YDQsNGI0LXQvdC40Y8g0LIg0YTQvtGA0LzQtSDRgdC10YDQtNC10YYsINC00LvRjyDQu9GO0LHQuNC80L7Qs9C+INGH0LXQu9C+0LLQtdC60LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfNy5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCA3XFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCc0YvRgSDQsdC10LfRg9C80LjRjzwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtZGVzY3JpcHRpb24gbWItNlxcXCI+0KDQsNC30L3QvtGG0LLQtdGC0L3QsNGPINC+0YHQvdC+0LLQsCwg0YHRgtGA0YPQttC60LAg0Lgg0L3QtdC20L3Ri9C5INC60YDQtdC8PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtYmxvY2sgbXQtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJsb2NrIHRleHQtZ3JleS00IHRleHQteGwgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS41ZW1dIGZvbnQtbWVkaXVtXFxcIj41MCAkL9GI0YIuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwiYnV0dG9uLTEgbXQtWzE0cHhdXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9wcm9kdWN0XzguanBnXFxcIiBhbHQ9XFxcIlByb2R1Y3QgOFxcXCIgY2xhc3M9XFxcInJvdW5kZWQtdC1bMTBweF0gdy1mdWxsIGgtWzI0NXB4XSBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1oZWFkbGluZSBtYi0zXFxcIj7QntCx0LvQsNGH0L3QsNGPINGB0LrQsNC30LrQsDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtZGVzY3JpcHRpb24gbWItNlxcXCI+0KHQstC10YLQu9Cw0Y8g0L7RgdC90L7QstCwLCDQvdC10LbQvdGL0Lkg0LrRgNC10Lwg0YHQviDRgdGC0YDRg9C20LrQvtC5INGB0LLQtdGA0YXRgzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5saW5lLWJsb2NrIG10LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibG9jayB0ZXh0LWdyZXktNCB0ZXh0LXhsIG1kOnRleHQtMnhsIGxlYWRpbmctWzEuNWVtXSBmb250LW1lZGl1bVxcXCI+NTAgJC/RiNGCLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xIG10LVsxNHB4XVxcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdF85LmpwZ1xcXCIgYWx0PVxcXCJQcm9kdWN0IDlcXFwiIGNsYXNzPVxcXCJyb3VuZGVkLXQtWzEwcHhdIHctZnVsbCBoLVsyNDVweF0gb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtaGVhZGxpbmUgbWItM1xcXCI+0KLQtdC80L3Ri9C5INGA0YvRhtCw0YDRjDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtZGVzY3JpcHRpb24gbWItNlxcXCI+0KLRkdC80L3QsNGPINC+0YHQvdC+0LLQsCwg0L3QtdC20L3Ri9C5INC60YDQtdC8INC4INCy0LrRg9GB0L3Ri9C1INGI0LDRgNC40LrQuDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5saW5lLWJsb2NrIG10LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibG9jayB0ZXh0LWdyZXktNCB0ZXh0LXhsIG1kOnRleHQtMnhsIGxlYWRpbmctWzEuNWVtXSBmb250LW1lZGl1bVxcXCI+NTAgJC/RiNGCLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xIG10LVsxNHB4XVxcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzE2NXB4XSB0cmFuc2xhdGUteS1bMjE0cHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdC1iZXJyeS5wbmdcXFwiIGFsdD1cXFwiUHJvZHVjdCBCZXJyeSAxXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC10cmFuc2xhdGUteC1bMTQ1cHhdIC10cmFuc2xhdGUteS1bNDIwcHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdC1sZWFmLnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIlByb2R1Y3QgTGVhZiAxXFxcIj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdHJhbnNsYXRlLXgtWzE2MHB4XSAtdHJhbnNsYXRlLXktWzcwMHB4XSBzY2VuZSB6LTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3QtbGVhZi0yLnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIlByb2R1Y3QgTGVhZiAyXFxcIj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLWJvdHRvbS0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInJlbGF0aXZlIHB0LVszMDBweF0gbGc6cHQtWzQwOXB4XSBsZzpwYi1bNDU5cHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LXdoaXRlXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1bMzMwcHhdIHBob3RvLWJnLXN0YXJ0IHotMjAgbGF6eS1iZ1xcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvLWJnLXN0YXJ0LnBuZ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2FwLTEwIGxnOmJsb2NrIHJlbGF0aXZlIHotMTBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC10cmFuc2xhdGUteC1bMjZweF0gLXRyYW5zbGF0ZS15LVs0OXB4XSBzY2VuZSB6LTBcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9mZWF0dXJlLWxlYWYucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRmVhdHVyZSBMZWFmXFxcIiBjbGFzcz1cXFwidy1bMTEwcHhdXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB0cmFuc2xhdGUteC1bMTUycHhdIC10cmFuc2xhdGUteS1bMTAwcHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2ZlYXR1cmUtYmVycnkucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRmVhdHVyZSBCZXJyeVxcXCIgY2xhc3M9XFxcInctWzE1MnB4XVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOmFic29sdXRlIGxnOnRvcC1bLTkwcHhdIGxnOmxlZnQtWy00MDZweF0gb3JkZXItMlxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob25lMS5wbmdcXFwiIGFsdD1cXFwiUGhvbmVcXFwiIGNsYXNzPVxcXCJ3LVs5ODZweF1cXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZzptYXgtdy1bNDgwcHhdIGxnOmZsb2F0LXJpZ2h0IHJlbGF0aXZlIG9yZGVyLTEgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlY3Rpb25fX3N1Yi1oZWFkbGluZVxcXCI+0J3QtSDQvdCw0YjQu9C4INGC0L4g0YfRgtC+INC90YPQttC90L4/PC9zcGFuPlxcclxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb25fX2hlYWRsaW5lICF0ZXh0LXdoaXRlIG1kOiF0ZXh0LWxlZnQgbXktNSBsZzpteS02XFxcIj7Qn9GA0LjQs9C+0YLQvtCy0LjQvCDQt9Cw0LrQsNC3INC70Y7QsdC+0Lkg0YHQu9C+0LbQvdC+0YHRgtC4INC/0L4g0YTQvtGC0L4g0LjQu9C4INGN0YHQutC40LfRgzwvaDI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LWxnIG1kOnRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gdHJhY2tpbmctWy0wLjJweF0gbWItNSBtZDptYi1bNDBweF1cXFwiPtCX0LDQs9GA0YPQt9C40YLQtSDRhNC+0YLQvtCz0YDQsNGE0LjRjiDQuNC70Lgg0Y3RgdC60LjQtyDQutCw0L/QutC10LnQutC+0LIg0Lgg0LzRiyDRgNCw0YHRgdGH0LjRgtCw0LXQvCDRgdGC0L7QuNC80L7RgdGC0Ywg0LfQsCAzMCDQvNC40L3Rg9GCPC9wPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMTVweF0gIXB4LVsyNXB4XSBtZDohcHktWzMwcHhdIG1kOiFweC1bNTBweF1cXFwiPtCX0LDQs9GA0YPQt9C40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBoLVs0ODlweF0gcGhvdG8tYmctZW5kIHotMjAgbGF6eS1iZ1xcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvLWJnLWVuZC5wbmdcXFwiPjwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJiZy13aGl0ZSByZWxhdGl2ZSB6LTMwXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLXRvcC0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0xMCBsZzpnYXAtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZzptYXgtdy1bNTgwcHhdIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWN0aW9uX19zdWItaGVhZGxpbmVcXFwiPtCa0YLQviDQsdGD0LTQtdGCINCz0L7RgtC+0LLQuNGC0Yw/PC9zcGFuPlxcclxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb25fX2hlYWRsaW5lIG1kOiF0ZXh0LWxlZnQgbXQtNCBtZDptdC02IG1iLTUgbWQ6bWItWzM2cHhdXFxcIj7Qm9C40YfQvdC+INC/0YDQuNCz0L7RgtC+0LLQu9GOINC4INCy0YHRkSDQutGA0LDRgdC40LLQviDRg9C/0LDQutGD0Y4g0LTQu9GPINCy0LDRiNC10LPQviDRgdC+0LHRi9GC0LjRjzwvaDI+XFxyXFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2VjdGlvbl9fbGlzdCBzcGFjZS15LTUgbWQ6c3BhY2UteS1bMzBweF0gbWF4LXctWzQzOHB4XSBtYi1bMjVweF0gbWQ6bWItWzUwcHhdIHRleHQtbGVmdCBteC1hdXRvIG1kOm14LTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgINCf0YDQvtC60L7QvdGB0YPQu9GM0YLQuNGA0YPRjiDQv9C+INCy0YvQsdC+0YDRgyDQutCw0L/QutC10LnQutC+0LIg0Lgg0L/RgNC40LTRg9C80LDRjiDQvdC10YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQuNC00LXRjlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAg0J/RgNC40LPQvtGC0L7QstC70Y4g0LrQsNC/0LrQtdC50LrQuCDQtNC70Y8g0LLQsNGI0LXQs9C+INGB0L7QsdGL0YLQuNGPLCDQutC+0YLQvtGA0YvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INCy0YHQtdC8INC/0L7QvdGA0LDQstGP0YLRgdGPIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAg0JDQutC60YPRgNCw0YLQvdC+INC4INC60YDQsNGB0LjQstC+INCy0YHRkSDRg9C/0LDQutGD0Y4sINC10YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGB0LTQtdC70LDRgtGMINC/0YDQuNGP0YLQvdGL0Lkg0L/QvtC00LDRgNC+0LpcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMTVweF0gIXB4LVsyNXB4XSBtZDohcHktWzMwcHhdIG1kOiFweC1bNTBweF1cXFwiPtCX0LDQtNCw0YLRjCDQstC+0L/RgNC+0YEg0K7Qu9C40Lg8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvR3JvdXAyLnBuZ1xcXCIgYWx0PVxcXCJXb21lblxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0xMCBsZzpib3R0b20tWzE2MnB4XSBsZWZ0LTEvMiBsZzpsZWZ0LVstOTJweF0gLXRyYW5zbGF0ZS14LTEvMiBsZzp0cmFuc2xhdGUteC0wXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LVsyODdweF0gaC1bNjBweF0gYmctZ3JleS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC14bCBtZDp0ZXh0LTJ4bCB0cmFja2luZy1bLTAuM3B4XSBmb250LW1lZGl1bSBza2V3LXgtWy04ZGVnXSByb3VuZGVkLVs2cHhdXFxcIj48c3BhbiBjbGFzcz1cXFwic2tldy14LVs4ZGVnXVxcXCI+0K7Qu9C40Y8g0JrQvtC90LTRgNCw0YLRjNC10LLQsDwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LVsyMThweF0gaC1bNTJweF0gbXgtYXV0byBiZy1ncmV5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmV5LTMgdGV4dC1iYXNlIG1kOnRleHQtbGcgdHJhY2tpbmctWzFweF0gdXBwZXJjYXNlIHNrZXcteC1bLThkZWddIHJvdW5kZWQtYi1bNnB4XVxcXCI+PHNwYW4gY2xhc3M9XFxcInNrZXcteC1bOGRlZ11cXFwiPtCy0LDRiCDQutC+0L3QtNC40YLQtdGAPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgaW5zZXQteC0wIC10b3AtMSBoLTIgYmctd2hpdGVcXFwiPjwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInB0LVszMDBweF0gcGItWzIzOHB4XSBsZzpwYi1bMzA4cHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LXdoaXRlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIHctZnVsbCBoLVszMzBweF0gcmV2aWV3cy1iZy1zdGFydCB6LTIwIGxhenktYmdcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9yZXZpZXdzLWJnLXN0YXJ0LnBuZ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgcmVsYXRpdmUgei0xMFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzEyNnB4XSAtdHJhbnNsYXRlLXktWzMwcHhdIHNjZW5lIHotMjBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Jldmlld3MtbGVhZi5wbmdcXFwiIGRhdGEtZGVwdGg9XFxcIjAuM1xcXCIgYWx0PVxcXCJGZWF0dXJlIExlYWZcXFwiIGNsYXNzPVxcXCJ3LVsxMjZweF1cXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB0cmFuc2xhdGUteC1bOTVweF0gdHJhbnNsYXRlLXktWzExNXB4XSBzY2VuZSB6LTIwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9yZXZpZXdzLWJlcnJ5LnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIkZlYXR1cmUgQmVycnlcXFwiIGNsYXNzPVxcXCJ3LVsxNTJweF1cXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uX19oZWFkbGluZSAhdGV4dC13aGl0ZSBtYi1bNDBweF0gbWQ6bWItWzgwcHhdXFxcIj7Qn9C+0YfQuNGC0LDQudGC0LUg0L7RgtC30YvQstGLINC00L7QstC+0LvRjNC90YvRhSDQutC70LjQtdC90YLQvtCyPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyIHJldmlld3Mtc2xpZGVyICFvdmVyZmxvdy12aXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgcmVxdWlyZWQgd3JhcHBlciAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlciBtYi1bMzVweF0gbGc6bWItWzcwcHhdXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gU2xpZGVzIC0tPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHJldmlld3Mtc2xpZGVyX19zbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweC02IHB5LTUgbWQ6cHgtWzE0M3B4XSBtZDpweS1bNzBweF0gdGV4dC1ncmV5LTMgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLVsycHhdIGJvcmRlci1bI0UyRUFGMl0gc2hhZG93LVsycHhfOHB4XzE2cHhfcmdiYSgxOTQsMTk4LDIwOCwwLjA2KV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOm1heC13LVs0NjBweF0gb3JkZXItMiBsZzpvcmRlci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInctNSBoLTUgbWQ6dy1bNDBweF0gbWQ6aC1bNDBweF0gdGV4dC1ibHVlIG14LWF1dG8gbXQtNSBtZDptLTBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzBweF0gbGVhZGluZy1bMS40M2VtXSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbXktNSBtZDpteS02XFxcIj7Cq9Cg0LXQt9GD0LvRjNGC0LDRgiDQtNC40LrQviDQv9C+0YDQsNC00L7QstCw0LssINC00YDRg9C30YzRjyDQsdGL0LvQuCDQsiDQstC+0YHRgtC+0YDQs9C1wrs8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzE1cHhdIGxlYWRpbmctWzEuN2VtXSBtYi01IG1kOm1iLTZcXFwiPsKr0JfQsNC60LDQt9Cw0LvQsCDQutCw0L/QutC10LnQutC4LCDQutCw0Log0L/QvtC00LDRgNC+0Log0L3QsCDQvdC+0LLRi9C5INCz0L7QtC4g0JTQtdC70LDRgtGMINC30LDQutCw0Lcg0LHRi9C70L4g0LvQtdCz0LrQviDQuCDQv9GA0LjRj9GC0L3Qviwg0L3RgyDQsCDRgNC10LfRg9C70YzRgtCw0YIg0LTQuNC60L4g0L/QvtGA0LDQtNC+0LLQsNC7LCDQtNGA0YPQt9GM0Y8g0LHRi9C70Lgg0LIg0LLQvtGB0YLQvtGA0LPQtS4g0Jgg0L7RhNC+0YDQvNC70LXQvdC40LUsINC4INC90LAg0LLQutGD0YEg0LrQsNC/0LrQtdC50LrQuCDQsdGL0LvQuCDQv9GA0L7RgdGC0L4g0LfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0LUuINCe0LHRj9C30LDRgtC10LvRjNC90L4g0LHRg9C00YMg0LfQsNC60LDQt9GL0LLQsNGC0Ywg0LXRidC1KSkg0KPQttC1INGB0YLRgNC+0Y4g0L/Qu9Cw0L3Riywg0YfRgtC+0LHRiyDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINCy0YHQtSDQvdCw0YfQuNC90LrQuC4g0J7QvdC4INCy0L7RgdGF0LjRgtC40YLQtdC70YzQvdGLISkg0JTQsNC20LUg0LrRg9GI0LDRgtGMINCx0YvQu9C+INC20LDQu9C60L4sINGC0LDQutCw0Y8g0LrRgNCw0YHQvtGC0LAhKSA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImlubGluZS1ibG9jayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1bIzRBOTRGRl0gaG92ZXI6dGV4dC15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYm9yZGVyLWIgYm9yZGVyLWItWyM0QTk0RkZdIGJvcmRlci1kYXNoZWQgcGItWzFweF1cXFwiPtCn0LjRgtCw0YLRjCDQvtGC0LfRi9CyINC/0L7Qu9C90L7RgdGC0YzRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstMCB0ZXh0LWNlbnRlciBvcmRlci0xIGxnOm9yZGVyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvY2xpZW50LnBuZ1xcXCIgYWx0PVxcXCJDbGllbnRcXFwiIGNsYXNzPVxcXCJ3LVsyMDBweF0gaC1bMjAwcHhdIG1kOnctWzM4MHB4XSBtZDpoLVszODBweF0gYm9yZGVyIGJvcmRlci1ncmV5LTIgcm91bmRlZC1mdWxsIG1iLVszMHB4XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gZm9udC1tZWRpdW0gdGV4dC1ncmV5LTNcXFwiPtCY0YDQuNC90LAg0JvQsNGA0LjQvtC90L7QstCwPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjQTZBRUI2XSBsZWFkaW5nLVsxLjdlbV1cXFwiPtCh0YLQsNC80LHRg9C7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHJldmlld3Mtc2xpZGVyX19zbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweC02IHB5LTUgbWQ6cHgtWzE0M3B4XSBtZDpweS1bNzBweF0gdGV4dC1ncmV5LTMgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLVsycHhdIGJvcmRlci1bI0UyRUFGMl0gc2hhZG93LVsycHhfOHB4XzE2cHhfcmdiYSgxOTQsMTk4LDIwOCwwLjA2KV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOm1heC13LVs0NjBweF0gb3JkZXItMiBsZzpvcmRlci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInctNSBoLTUgbWQ6dy1bNDBweF0gbWQ6aC1bNDBweF0gdGV4dC1ibHVlIG14LWF1dG8gbXQtNSBtZDptLTBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzBweF0gbGVhZGluZy1bMS40M2VtXSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbXktNSBtZDpteS02XFxcIj7Cq9Cg0LXQt9GD0LvRjNGC0LDRgiDQtNC40LrQviDQv9C+0YDQsNC00L7QstCw0LssINC00YDRg9C30YzRjyDQsdGL0LvQuCDQsiDQstC+0YHRgtC+0YDQs9C1wrs8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzE1cHhdIGxlYWRpbmctWzEuN2VtXSBtYi01IG1kOm1iLTZcXFwiPsKr0JfQsNC60LDQt9Cw0LvQsCDQutCw0L/QutC10LnQutC4LCDQutCw0Log0L/QvtC00LDRgNC+0Log0L3QsCDQvdC+0LLRi9C5INCz0L7QtC4g0JTQtdC70LDRgtGMINC30LDQutCw0Lcg0LHRi9C70L4g0LvQtdCz0LrQviDQuCDQv9GA0LjRj9GC0L3Qviwg0L3RgyDQsCDRgNC10LfRg9C70YzRgtCw0YIg0LTQuNC60L4g0L/QvtGA0LDQtNC+0LLQsNC7LCDQtNGA0YPQt9GM0Y8g0LHRi9C70Lgg0LIg0LLQvtGB0YLQvtGA0LPQtS4g0Jgg0L7RhNC+0YDQvNC70LXQvdC40LUsINC4INC90LAg0LLQutGD0YEg0LrQsNC/0LrQtdC50LrQuCDQsdGL0LvQuCDQv9GA0L7RgdGC0L4g0LfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0LUuINCe0LHRj9C30LDRgtC10LvRjNC90L4g0LHRg9C00YMg0LfQsNC60LDQt9GL0LLQsNGC0Ywg0LXRidC1KSkg0KPQttC1INGB0YLRgNC+0Y4g0L/Qu9Cw0L3Riywg0YfRgtC+0LHRiyDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINCy0YHQtSDQvdCw0YfQuNC90LrQuC4g0J7QvdC4INCy0L7RgdGF0LjRgtC40YLQtdC70YzQvdGLISkg0JTQsNC20LUg0LrRg9GI0LDRgtGMINCx0YvQu9C+INC20LDQu9C60L4sINGC0LDQutCw0Y8g0LrRgNCw0YHQvtGC0LAhKSA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImlubGluZS1ibG9jayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1bIzRBOTRGRl0gaG92ZXI6dGV4dC15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYm9yZGVyLWIgYm9yZGVyLWItWyM0QTk0RkZdIGJvcmRlci1kYXNoZWQgcGItWzFweF1cXFwiPtCn0LjRgtCw0YLRjCDQvtGC0LfRi9CyINC/0L7Qu9C90L7RgdGC0YzRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstMCB0ZXh0LWNlbnRlciBvcmRlci0xIGxnOm9yZGVyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvY2xpZW50LnBuZ1xcXCIgYWx0PVxcXCJDbGllbnRcXFwiIGNsYXNzPVxcXCJ3LVsyMDBweF0gaC1bMjAwcHhdIG1kOnctWzM4MHB4XSBtZDpoLVszODBweF0gYm9yZGVyIGJvcmRlci1ncmV5LTIgcm91bmRlZC1mdWxsIG1iLVszMHB4XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gZm9udC1tZWRpdW0gdGV4dC1ncmV5LTNcXFwiPtCY0YDQuNC90LAg0JvQsNGA0LjQvtC90L7QstCwPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjQTZBRUI2XSBsZWFkaW5nLVsxLjdlbV1cXFwiPtCh0YLQsNC80LHRg9C7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHJldmlld3Mtc2xpZGVyX19zbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweC02IHB5LTUgbWQ6cHgtWzE0M3B4XSBtZDpweS1bNzBweF0gdGV4dC1ncmV5LTMgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLVsycHhdIGJvcmRlci1bI0UyRUFGMl0gc2hhZG93LVsycHhfOHB4XzE2cHhfcmdiYSgxOTQsMTk4LDIwOCwwLjA2KV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOm1heC13LVs0NjBweF0gb3JkZXItMiBsZzpvcmRlci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInctNSBoLTUgbWQ6dy1bNDBweF0gbWQ6aC1bNDBweF0gdGV4dC1ibHVlIG14LWF1dG8gbXQtNSBtZDptLTBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzBweF0gbGVhZGluZy1bMS40M2VtXSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbXktNSBtZDpteS02XFxcIj7Cq9Cg0LXQt9GD0LvRjNGC0LDRgiDQtNC40LrQviDQv9C+0YDQsNC00L7QstCw0LssINC00YDRg9C30YzRjyDQsdGL0LvQuCDQsiDQstC+0YHRgtC+0YDQs9C1wrs8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzE1cHhdIGxlYWRpbmctWzEuN2VtXSBtYi01IG1kOm1iLTZcXFwiPsKr0JfQsNC60LDQt9Cw0LvQsCDQutCw0L/QutC10LnQutC4LCDQutCw0Log0L/QvtC00LDRgNC+0Log0L3QsCDQvdC+0LLRi9C5INCz0L7QtC4g0JTQtdC70LDRgtGMINC30LDQutCw0Lcg0LHRi9C70L4g0LvQtdCz0LrQviDQuCDQv9GA0LjRj9GC0L3Qviwg0L3RgyDQsCDRgNC10LfRg9C70YzRgtCw0YIg0LTQuNC60L4g0L/QvtGA0LDQtNC+0LLQsNC7LCDQtNGA0YPQt9GM0Y8g0LHRi9C70Lgg0LIg0LLQvtGB0YLQvtGA0LPQtS4g0Jgg0L7RhNC+0YDQvNC70LXQvdC40LUsINC4INC90LAg0LLQutGD0YEg0LrQsNC/0LrQtdC50LrQuCDQsdGL0LvQuCDQv9GA0L7RgdGC0L4g0LfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0LUuINCe0LHRj9C30LDRgtC10LvRjNC90L4g0LHRg9C00YMg0LfQsNC60LDQt9GL0LLQsNGC0Ywg0LXRidC1KSkg0KPQttC1INGB0YLRgNC+0Y4g0L/Qu9Cw0L3Riywg0YfRgtC+0LHRiyDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINCy0YHQtSDQvdCw0YfQuNC90LrQuC4g0J7QvdC4INCy0L7RgdGF0LjRgtC40YLQtdC70YzQvdGLISkg0JTQsNC20LUg0LrRg9GI0LDRgtGMINCx0YvQu9C+INC20LDQu9C60L4sINGC0LDQutCw0Y8g0LrRgNCw0YHQvtGC0LAhKSA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImlubGluZS1ibG9jayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1bIzRBOTRGRl0gaG92ZXI6dGV4dC15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYm9yZGVyLWIgYm9yZGVyLWItWyM0QTk0RkZdIGJvcmRlci1kYXNoZWQgcGItWzFweF1cXFwiPtCn0LjRgtCw0YLRjCDQvtGC0LfRi9CyINC/0L7Qu9C90L7RgdGC0YzRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstMCB0ZXh0LWNlbnRlciBvcmRlci0xIGxnOm9yZGVyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvY2xpZW50LnBuZ1xcXCIgYWx0PVxcXCJDbGllbnRcXFwiIGNsYXNzPVxcXCJ3LVsyMDBweF0gaC1bMjAwcHhdIG1kOnctWzM4MHB4XSBtZDpoLVszODBweF0gYm9yZGVyIGJvcmRlci1ncmV5LTIgcm91bmRlZC1mdWxsIG1iLVszMHB4XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gZm9udC1tZWRpdW0gdGV4dC1ncmV5LTNcXFwiPtCY0YDQuNC90LAg0JvQsNGA0LjQvtC90L7QstCwPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjQTZBRUI2XSBsZWFkaW5nLVsxLjdlbV1cXFwiPtCh0YLQsNC80LHRg9C7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJldmlld3Mtc2xpZGVyX19wcmV2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwidy1bOHB4XSBoLVsxNnB4XSBtZDp3LVsxMHB4XSBtZDpoLTVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNhcnJvdy1sZWZ0XFxcIj48L3VzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJldmlld3Mtc2xpZGVyX19uZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwidy1bOHB4XSBoLVsxNnB4XSBtZDp3LVsxMHB4XSBtZDpoLTVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNhcnJvdy1yaWdodFxcXCI+PC91c2U+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgaC1bMjg0cHhdIHJldmlld3MtYmctZW5kIHotMCBsYXp5LWJnXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcmV2aWV3cy1iZy1lbmQucG5nXFxcIj48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcblxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiYmctd2hpdGUgcmVsYXRpdmVcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGluc2V0LXgtMCAtdG9wLTEgaC0yIGJnLXdoaXRlXFxcIj48L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uX19oZWFkbGluZSBtYi1bMTRweF1cXFwiPtCh0LTQtdC70LDQu9C4INCx0L7Qu9C10LUgMy4wMDAg0LfQsNC60LDQt9C+0LIg0LfQsCAyINCz0L7QtNCwPC9oMj5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJtYi1bNDBweF0gbWQ6bWItWzgwcHhdIHRleHQtY2VudGVyIHRleHQteGwgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS40M2VtXSB0ZXh0LWdyZXktM1xcXCI+0J/QvtGB0LzQvtGC0YDQuNGC0LUg0YTQvtGC0L4g0YDQtdCw0LvRjNC90YvRhSDQt9Cw0LrQsNC30L7QsiDQuNC3INC90LDRiNC10LPQviBpbnN0YWdyYW08L3A+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtWzlweF1cXFwiIGlkPVxcXCJwcm9kdWN0cy1nYWxsZXJ5XFxcIj5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvLmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90by5qcGdcXFwiIGFsdD1cXFwiUGhvdG8gMVxcXCIgY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvXzEuanBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgZGF0YS1wc3dwLXdpZHRoPVxcXCI2MzRcXFwiIGRhdGEtcHN3cC1oZWlnaHQ9XFxcIjQ0NFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvXzEuanBnXFxcIiBhbHQ9XFxcIlBob3RvIDJcXFwiIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIuL2Fzc2V0cy9waG90b18yLmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90b18yLmpwZ1xcXCIgYWx0PVxcXCJQaG90byAzXFxcIiBjbGFzcz1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiLi9hc3NldHMvcGhvdG9fMy5qcGdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBkYXRhLXBzd3Atd2lkdGg9XFxcIjYzNFxcXCIgZGF0YS1wc3dwLWhlaWdodD1cXFwiNDQ0XFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcGhvdG9fMy5qcGdcXFwiIGFsdD1cXFwiUGhvdG8gNFxcXCIgY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvXzQuanBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgZGF0YS1wc3dwLXdpZHRoPVxcXCI2MzRcXFwiIGRhdGEtcHN3cC1oZWlnaHQ9XFxcIjQ0NFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvXzQuanBnXFxcIiBhbHQ9XFxcIlBob3RvIDVcXFwiIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIuL2Fzc2V0cy9waG90b181LmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90b181LmpwZ1xcXCIgYWx0PVxcXCJQaG90byA2XFxcIiBjbGFzcz1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvXzYuanBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgZGF0YS1wc3dwLXdpZHRoPVxcXCI2MzRcXFwiIGRhdGEtcHN3cC1oZWlnaHQ9XFxcIjQ0NFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvXzYuanBnXFxcIiBhbHQ9XFxcIlBob3RvIDZcXFwiIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIuL2Fzc2V0cy9waG90b183LmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90b183LmpwZ1xcXCIgYWx0PVxcXCJQaG90byA3XFxcIiBjbGFzcz1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiLi9hc3NldHMvcGhvdG9fOC5qcGdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBkYXRhLXBzd3Atd2lkdGg9XFxcIjYzNFxcXCIgZGF0YS1wc3dwLWhlaWdodD1cXFwiNDQ0XFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcGhvdG9fOC5qcGdcXFwiIGFsdD1cXFwiUGhvdG8gOFxcXCIgY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbiAgPC9tYWluPlxcclxcbiAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyIHB0LVszMDBweF0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgaW5zZXQteC0wIC10b3AtMSBoLTIgYmctd2hpdGVcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1bMjg0cHhdIGZvb3Rlci1iZy1zdGFydCB6LTIwIGxhenktYmdcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9mb290ZXItYmctc3RhcnQucG5nXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyZWxhdGl2ZSBweS1bMzVweF0gbWQ6cHktWzcwcHhdIHB4LVsyMHB4XSBtZDpweC1bMTUwcHhdIGJnLXdoaXRlIHJvdW5kZWQtWzhweF1cXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJ0ZXh0LXhsIG1kOnRleHQtWzM2cHhdIGxlYWRpbmctWzEuMzNlbV0gZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtZ3JleS0zIG1iLVsxMnB4XVxcXCI+0KfRgtC+0LHRiyDRgdC00LXQu9Cw0YLRjCDQt9Cw0LrQsNC3LCDRg9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L08L2gyPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcIm1iLTUgbWQ6bWItWzM2cHhdIHRleHQtY2VudGVyIHRleHQtbGcgbWQ6dGV4dC1bMjFweF0gbGVhZGluZy1bMS40M2VtXSB0cmFja2luZy1bLTAuMnB4XSB0ZXh0LWdyZXktM1xcXCI+0JzRiyDQv9C10YDQtdC30LLQvtC90LjQvCDQsiDRgtC10YfQtdC90LjQuCAxNSDQvNC40L3Rg9GCLCDRh9GC0L7QsdGLINGD0YLQvtGH0L3QuNGC0Ywg0LLQsNGI0Lgg0L/QvtC20LXQu9Cw0L3QuNGPPC9wPlxcclxcbiAgICAgICAgPGZvcm0+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTUgbWItNSBtZDptYi02XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IHB4LVsyNnB4XSBweS1bMzBweF0gdGV4dC1ncmV5IHJvdW5kZWQtWzhweF0gYmctZ3JleS0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInNocmluay0wIHctWzI1cHhdIGgtWzI1cHhdIG1yLVs3cHhdIHRleHQtWyM5MjlBQTJdXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcImFzc2V0cy9zcHJpdGUuc3ZnI3Bob25lLWlucHV0XFxcIj48L3VzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRlbFxcXCIgbmFtZT1cXFwi0KHQtNC10LvQsNGC0Ywg0LfQsNC60LDQt1xcXCIgcGxhY2Vob2xkZXI9XFxcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFxcXCIgY2xhc3M9XFxcInctZnVsbCB0ZXh0LVsxNXB4XSBsZWFkaW5nLVsxLjZlbV0gYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIGJvcmRlci1ub25lIHBsYWNlaG9sZGVyLWluaGVyaXRcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMjguOHB4XSB3LWZ1bGwgdGV4dC1jZW50ZXJcXFwiPtCh0LTQtdC70LDRgtGMINC30LDQutCw0Lc8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtWzdweF1cXFwiPlxcclxcbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJ3LTMgaC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInBvbGl0aWNzXFxcIiBjbGFzcz1cXFwicGVlciBoaWRkZW5cXFwiIHZhbHVlPVxcXCIxXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtWzJweF0gYm9yZGVyIGJvcmRlci1ncmV5IFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXItY2hlY2tlZDpiZy1bIzRBOTRGRl0gcGVlci1jaGVja2VkOmJvcmRlci1bIzRBOTRGRl0gY3Vyc29yLXBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJhYnNvbHV0ZSB6LTIwIHctWzdweF0gdGV4dC13aGl0ZSBvcGFjaXR5LTAgcGVlci1jaGVja2VkOm9wYWNpdHktMTAwIHRyYW5zaXRpb25cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjY2hlY2tcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwidGV4dC1ncmV5IHRleHQtWzExcHhdIGhvdmVyOnRleHQtZ3JleS0zIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MFxcXCI+0J3QsNC20LjQvNCw0Y8g0L3QsCDQutC90L7Qv9C60YMsINCy0Ysg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBINGD0YHQu9C+0LLQuNGP0LzQuCDQvtCx0YDQsNCx0L7RgtC60Lgg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvYT5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgLXRyYW5zbGF0ZS14LVs3NnB4XSAtdHJhbnNsYXRlLXktWzY1cHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2Zvb3Rlci1sZWFmLnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIkZvb3RlciBMZWFmXFxcIiBjbGFzcz1cXFwidy1bMTA2cHhdXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB0cmFuc2xhdGUteC1bMTAwcHhdIC10cmFuc2xhdGUteS1bODBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvZm9vdGVyLWJlcnJ5LnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIkZvb3RlciBCZXJyeVxcXCIgY2xhc3M9XFxcInctWzE1MnB4XVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzEzMHB4XSB0cmFuc2xhdGUteS1bOTBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvZm9vdGVyLWJlcnJ5LTEucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRm9vdGVyIEJlcnJ5IDJcXFwiIGNsYXNzPVxcXCJ3LVsxNjdweF1cXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHRyYW5zbGF0ZS14LVsxMTBweF0gdHJhbnNsYXRlLXktWzkwcHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2Zvb3Rlci1sZWFmLTEucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRm9vdGVyIExlYWYgMlxcXCIgY2xhc3M9XFxcInctWzE0NnB4XVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2JvdHRvbSBteC1hdXRvIG1heC13LVs2MDVweF0gdGV4dC1bMTJweF0gbGVhZGluZy1bMS41ZW1dIHRleHQtY2VudGVyIHRleHQtZ3JleSBteS1bNDBweF0gbWQ6bXktWzgwcHhdXFxcIj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgbWItWzIycHhdXFxcIj5cXHJcXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiMhXFxcIj5cXHJcXG4gICAgICAgICAgICDQodC+0LPQu9Cw0YHQuNC1INC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC00LDQvdC90YvRhVxcclxcbiAgICAgICAgICA8L2E+PC9saT5cXHJcXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiMhXFxcIj5cXHJcXG4gICAgICAgICAgICDQodC70YPQttCx0LAg0L/QvtC00LTQtdGA0LbQutC4XFxyXFxuICAgICAgICAgIDwvYT48L2xpPlxcclxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiIyFcXFwiPlxcclxcbiAgICAgICAgICAgINCf0L7Qu9C40YLQuNC60LAg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4XFxyXFxuICAgICAgICAgIDwvYT48L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDxwPsKpIGNha2UudGVzdCwgMjAyNSB8IENyZWF0ZWQgYnkgTWFyc2VsIEZpcnNvdjwvcD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Zvb3Rlcj5cXHJcXG5cXHJcXG4gIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3N3aXBlckAxMS9zd2lwZXItYnVuZGxlLm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxyXFxuICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGFyYWxsYXgvMy4xLjAvcGFyYWxsYXgubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBUXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcclxuICogQHBhcmFtIHtUfSB0YWdOYW1lXHJcbiAqIEBwYXJhbSB7Tm9kZX0gW2FwcGVuZFRvRWxdXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjbGFzc05hbWUsIHRhZ05hbWUsIGFwcGVuZFRvRWwpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIH1cclxuICBpZiAoYXBwZW5kVG9FbCkge1xyXG4gICAgYXBwZW5kVG9FbC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl6ZVBvaW50cyhwMSwgcDIpIHtcclxuICBwMS54ID0gcDIueDtcclxuICBwMS55ID0gcDIueTtcclxuICBpZiAocDIuaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcDEuaWQgPSBwMi5pZDtcclxuICB9XHJcbiAgcmV0dXJuIHAxO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQb2ludH0gcFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kUG9pbnQocCkge1xyXG4gIHAueCA9IE1hdGgucm91bmQocC54KTtcclxuICBwLnkgPSBNYXRoLnJvdW5kKHAueSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50cy5cclxuICpcclxuICogQHBhcmFtIHtQb2ludH0gcDFcclxuICogQHBhcmFtIHtQb2ludH0gcDJcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZUJldHdlZW4ocDEsIHAyKSB7XHJcbiAgY29uc3QgeCA9IE1hdGguYWJzKHAxLnggLSBwMi54KTtcclxuICBjb25zdCB5ID0gTWF0aC5hYnMocDEueSAtIHAyLnkpO1xyXG4gIHJldHVybiBNYXRoLnNxcnQoKHggKiB4KSArICh5ICogeSkpO1xyXG59XHJcblxyXG4vKipcclxuICogV2hldGhlciBYIGFuZCBZIHBvc2l0aW9ucyBvZiBwb2ludHMgYXJlIGVxdWFsXHJcbiAqXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50c0VxdWFsKHAxLCBwMikge1xyXG4gIHJldHVybiBwMS54ID09PSBwMi54ICYmIHAxLnkgPT09IHAyLnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZmxvYXQgcmVzdWx0IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IHZhbHVlcy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWwsIG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0cmFuc2Zvcm0gc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV1cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZV1cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1RyYW5zZm9ybVN0cmluZyh4LCB5LCBzY2FsZSkge1xyXG4gIGxldCBwcm9wVmFsdWUgPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCR7eSB8fCAwfXB4LDApYDtcclxuXHJcbiAgaWYgKHNjYWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHByb3BWYWx1ZSArPSBgIHNjYWxlM2QoJHtzY2FsZX0sJHtzY2FsZX0sMSlgO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb3BWYWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGx5IHRyYW5zZm9ybTp0cmFuc2xhdGUoeCwgeSkgc2NhbGUoc2NhbGUpIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IFt5XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlXVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbCwgeCwgeSwgc2NhbGUpIHtcclxuICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0b1RyYW5zZm9ybVN0cmluZyh4LCB5LCBzY2FsZSk7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRDU1NFYXNpbmcgPSAnY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpJztcclxuXHJcbi8qKlxyXG4gKiBBcHBseSBDU1MgdHJhbnNpdGlvbiB0byBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcF0gQ1NTIHByb3BlcnR5IHRvIGFuaW1hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbl0gaW4gbXNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtlYXNlXSBDU1MgZWFzaW5nIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNpdGlvblN0eWxlKGVsLCBwcm9wLCBkdXJhdGlvbiwgZWFzZSkge1xyXG4gIC8vIGluT3V0OiAnY3ViaWMtYmV6aWVyKC40LCAwLCAuMjIsIDEpJywgLy8gZm9yIFwidG9nZ2xlIHN0YXRlXCIgdHJhbnNpdGlvbnNcclxuICAvLyBvdXQ6ICdjdWJpYy1iZXppZXIoMCwgMCwgLjIyLCAxKScsIC8vIGZvciBcInNob3dcIiB0cmFuc2l0aW9uc1xyXG4gIC8vIGluOiAnY3ViaWMtYmV6aWVyKC40LCAwLCAxLCAxKScvLyBmb3IgXCJoaWRlXCIgdHJhbnNpdGlvbnNcclxuICBlbC5zdHlsZS50cmFuc2l0aW9uID0gcHJvcFxyXG4gICAgPyBgJHtwcm9wfSAke2R1cmF0aW9ufW1zICR7ZWFzZSB8fCBkZWZhdWx0Q1NTRWFzaW5nfWBcclxuICAgIDogJ25vbmUnO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgd2lkdGggYW5kIGhlaWdodCBDU1MgcHJvcGVydGllcyB0byBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB3XHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0V2lkdGhIZWlnaHQoZWwsIHcsIGgpIHtcclxuICBlbC5zdHlsZS53aWR0aCA9ICh0eXBlb2YgdyA9PT0gJ251bWJlcicpID8gYCR7d31weGAgOiB3O1xyXG4gIGVsLnN0eWxlLmhlaWdodCA9ICh0eXBlb2YgaCA9PT0gJ251bWJlcicpID8gYCR7aH1weGAgOiBoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uU3R5bGUoZWwpIHtcclxuICBzZXRUcmFuc2l0aW9uU3R5bGUoZWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWdcclxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IHZvaWQ+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUltYWdlKGltZykge1xyXG4gIGlmICgnZGVjb2RlJyBpbiBpbWcpIHtcclxuICAgIHJldHVybiBpbWcuZGVjb2RlKCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGltZy5jb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbWcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XHJcbiAgICBpbWcub25lcnJvciA9IHJlamVjdDtcclxuICB9KTtcclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtMT0FEX1NUQVRFW2tleW9mIExPQURfU1RBVEVdfSBMb2FkU3RhdGUgKi9cclxuLyoqIEB0eXBlIHt7IElETEU6ICdpZGxlJzsgTE9BRElORzogJ2xvYWRpbmcnOyBMT0FERUQ6ICdsb2FkZWQnOyBFUlJPUjogJ2Vycm9yJyB9fSAqL1xyXG5leHBvcnQgY29uc3QgTE9BRF9TVEFURSA9IHtcclxuICBJRExFOiAnaWRsZScsXHJcbiAgTE9BRElORzogJ2xvYWRpbmcnLFxyXG4gIExPQURFRDogJ2xvYWRlZCcsXHJcbiAgRVJST1I6ICdlcnJvcicsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGNsaWNrIG9yIGtleWRvd24gZXZlbnQgd2FzIGRpc3BhdGNoZWRcclxuICogd2l0aCBhIHNwZWNpYWwga2V5IG9yIHZpYSBtb3VzZSB3aGVlbC5cclxuICpcclxuICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudH0gZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGVjaWFsS2V5VXNlZChlKSB7XHJcbiAgcmV0dXJuICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID09PSAxKSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBgZ2FsbGVyeWAgb3IgYGNoaWxkcmVuYCBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLkVsZW1lbnRQcm92aWRlcn0gW29wdGlvbl1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtsZWdhY3lTZWxlY3Rvcl1cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IERvY3VtZW50fSBbcGFyZW50XVxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudFtdXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKG9wdGlvbiwgbGVnYWN5U2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50KSB7XHJcbiAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xyXG4gIGxldCBlbGVtZW50cyA9IFtdO1xyXG5cclxuICBpZiAob3B0aW9uIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgZWxlbWVudHMgPSBbb3B0aW9uXTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkob3B0aW9uKSkge1xyXG4gICAgZWxlbWVudHMgPSBBcnJheS5mcm9tKG9wdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gdHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBsZWdhY3lTZWxlY3RvcjtcclxuICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICBlbGVtZW50cyA9IEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHZhcmlhYmxlIGlzIFBob3RvU3dpcGUgY2xhc3NcclxuICpcclxuICogQHBhcmFtIHthbnl9IGZuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHN3cENsYXNzKGZuKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgJiYgZm4ucHJvdG90eXBlXHJcbiAgICAmJiBmbi5wcm90b3R5cGUuZ29UbztcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGJyb3dzZXIgaXMgU2FmYXJpXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xyXG4gIHJldHVybiAhIShuYXZpZ2F0b3IudmVuZG9yICYmIG5hdmlnYXRvci52ZW5kb3IubWF0Y2goL2FwcGxlL2kpKTtcclxufVxyXG5cclxuIiwiLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUxpZ2h0Ym94ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBob3RvU3dpcGVPcHRpb25zfSBQaG90b1N3aXBlT3B0aW9ucyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLkRhdGFTb3VyY2V9IERhdGFTb3VyY2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3VpL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9jb250ZW50LmpzJykuZGVmYXVsdH0gQ29udGVudERlZmF1bHQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3pvb20tbGV2ZWwuanMnKS5kZWZhdWx0fSBab29tTGV2ZWwgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL2dldC10aHVtYi1ib3VuZHMuanMnKS5Cb3VuZHN9IEJvdW5kcyAqL1xyXG5cclxuLyoqXHJcbiAqIEFsbG93IGFkZGluZyBhbiBhcmJpdHJhcnkgcHJvcHMgdG8gdGhlIENvbnRlbnRcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9jdXN0b20tY29udGVudC8jdXNpbmctd2VicC1pbWFnZS1mb3JtYXRcclxuICogQHR5cGVkZWYge0NvbnRlbnREZWZhdWx0ICYgUmVjb3JkPHN0cmluZywgYW55Pn0gQ29udGVudFxyXG4gKi9cclxuLyoqIEB0eXBlZGVmIHt7IHg/OiBudW1iZXI7IHk/OiBudW1iZXIgfX0gUG9pbnQgKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQaG90b1N3aXBlRXZlbnRzTWFwIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzL1xyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2FkZGluZy11aS1lbGVtZW50cy9cclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gdWlSZWdpc3RlclxyXG4gKiBAcHJvcCB7eyBkYXRhOiBVSUVsZW1lbnREYXRhIH19IHVpRWxlbWVudENyZWF0ZVxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jaW5pdGlhbGl6YXRpb24tZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJlZm9yZU9wZW5cclxuICogQHByb3Age3VuZGVmaW5lZH0gZmlyc3RVcGRhdGVcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbExheW91dFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjaGFuZ2VcclxuICogQHByb3Age3VuZGVmaW5lZH0gYWZ0ZXJJbml0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJpbmRFdmVudHNcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI29wZW5pbmctb3ItY2xvc2luZy10cmFuc2l0aW9uLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBvcGVuaW5nQW5pbWF0aW9uU3RhcnRcclxuICogQHByb3Age3VuZGVmaW5lZH0gb3BlbmluZ0FuaW1hdGlvbkVuZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zaW5nQW5pbWF0aW9uU3RhcnRcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2xvc2luZ0FuaW1hdGlvbkVuZFxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jY2xvc2luZy1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2xvc2VcclxuICogQHByb3Age3VuZGVmaW5lZH0gZGVzdHJveVxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jcG9pbnRlci1hbmQtZ2VzdHVyZS1ldmVudHNcclxuICpcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJEb3duXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyTW92ZVxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlclVwXHJcbiAqIEBwcm9wIHt7IGJnT3BhY2l0eTogbnVtYmVyIH19IHBpbmNoQ2xvc2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBhblk6IG51bWJlciB9fSB2ZXJ0aWNhbERyYWcgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNzbGlkZS1jb250ZW50LWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRJbml0XHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IGlzTGF6eTogYm9vbGVhbiB9fSBjb250ZW50TG9hZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgaXNMYXp5OiBib29sZWFuIH19IGNvbnRlbnRMb2FkSW1hZ2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHNsaWRlOiBTbGlkZTsgaXNFcnJvcj86IGJvb2xlYW4gfX0gbG9hZENvbXBsZXRlXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHNsaWRlOiBTbGlkZSB9fSBsb2FkRXJyb3JcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfX0gY29udGVudFJlc2l6ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHNsaWRlOiBTbGlkZSB9fSBpbWFnZVNpemVDaGFuZ2VcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50TGF6eUxvYWQgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEFwcGVuZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QWN0aXZhdGUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudERlYWN0aXZhdGUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudFJlbW92ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50RGVzdHJveSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICpcclxuICogdW5kb2N1bWVudGVkXHJcbiAqXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IGltYWdlQ2xpY2tBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IGJnQ2xpY2tBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHRhcEFjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gZG91YmxlVGFwQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBLZXlib2FyZEV2ZW50IH19IGtleWRvd24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHg6IG51bWJlcjsgZHJhZ2dpbmc6IGJvb2xlYW4gfX0gbW92ZU1haW5TY3JvbGxcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGZpcnN0Wm9vbVBhblxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfCB1bmRlZmluZWQsIGRhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlciB9fSBnZXR0aW5nRGF0YVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBiZWZvcmVSZXNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gcmVzaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHZpZXdwb3J0U2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB1cGRhdGVTY3JvbGxPZmZzZXRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlSW5pdFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYWZ0ZXJTZXRDb250ZW50XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZUxvYWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGFwcGVuZEhlYXZ5IGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYXBwZW5kSGVhdnlDb250ZW50XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZUFjdGl2YXRlXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZURlYWN0aXZhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlRGVzdHJveVxyXG4gKiBAcHJvcCB7eyBkZXN0Wm9vbUxldmVsOiBudW1iZXIsIGNlbnRlclBvaW50OiBQb2ludCB8IHVuZGVmaW5lZCwgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgfCBmYWxzZSB8IHVuZGVmaW5lZCB9fSBiZWZvcmVab29tVG9cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHpvb21QYW5VcGRhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGluaXRpYWxab29tUGFuXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBjYWxjU2xpZGVTaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHJlc29sdXRpb25DaGFuZ2VkXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFdoZWVsRXZlbnQgfX0gd2hlZWwgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEFwcGVuZEltYWdlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBpbmRleDogbnVtYmVyOyBpdGVtRGF0YTogU2xpZGVEYXRhIH19IGxhenlMb2FkU2xpZGUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGxhenlMb2FkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBjYWxjQm91bmRzXHJcbiAqIEBwcm9wIHt7IHpvb21MZXZlbHM6IFpvb21MZXZlbCwgc2xpZGVEYXRhOiBTbGlkZURhdGEgfX0gem9vbUxldmVsc1VwZGF0ZVxyXG4gKlxyXG4gKlxyXG4gKiBsZWdhY3lcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbUluXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tT3V0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tSW5FbmRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21PdXRFbmRcclxuICogQHByb3Age3sgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCwgbnVtSXRlbXM6IG51bWJlciB9fSBudW1JdGVtc1xyXG4gKiBAcHJvcCB7eyBpdGVtRGF0YTogU2xpZGVEYXRhOyBpbmRleDogbnVtYmVyIH19IGl0ZW1EYXRhXHJcbiAqIEBwcm9wIHt7IGluZGV4OiBudW1iZXIsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluc3RhbmNlOiBQaG90b1N3aXBlIH19IHRodW1iQm91bmRzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBob3RvU3dpcGVGaWx0ZXJzTWFwIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy9cclxuICpcclxuICogQHByb3AgeyhudW1JdGVtczogbnVtYmVyLCBkYXRhU291cmNlOiBEYXRhU291cmNlIHwgdW5kZWZpbmVkKSA9PiBudW1iZXJ9IG51bUl0ZW1zXHJcbiAqIE1vZGlmeSB0aGUgdG90YWwgYW1vdW50IG9mIHNsaWRlcy4gRXhhbXBsZSBvbiBEYXRhIHNvdXJjZXMgcGFnZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNudW1pdGVtc1xyXG4gKlxyXG4gKiBAcHJvcCB7KGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IFNsaWRlRGF0YX0gaXRlbURhdGFcclxuICogTW9kaWZ5IHNsaWRlIGl0ZW0gZGF0YS4gRXhhbXBsZSBvbiBEYXRhIHNvdXJjZXMgcGFnZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpdGVtZGF0YVxyXG4gKlxyXG4gKiBAcHJvcCB7KGl0ZW1EYXRhOiBTbGlkZURhdGEsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBsaW5rRWw6IEhUTUxBbmNob3JFbGVtZW50KSA9PiBTbGlkZURhdGF9IGRvbUl0ZW1EYXRhXHJcbiAqIE1vZGlmeSBpdGVtIGRhdGEgd2hlbiBpdCdzIHBhcnNlZCBmcm9tIERPTSBlbGVtZW50LiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2RvbWl0ZW1kYXRhXHJcbiAqXHJcbiAqIEBwcm9wIHsoY2xpY2tlZEluZGV4OiBudW1iZXIsIGU6IE1vdXNlRXZlbnQsIGluc3RhbmNlOiBQaG90b1N3aXBlTGlnaHRib3gpID0+IG51bWJlcn0gY2xpY2tlZEluZGV4XHJcbiAqIE1vZGlmeSBjbGlja2VkIGdhbGxlcnkgaXRlbSBpbmRleC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNjbGlja2VkaW5kZXhcclxuICpcclxuICogQHByb3AgeyhwbGFjZWhvbGRlclNyYzogc3RyaW5nIHwgZmFsc2UsIGNvbnRlbnQ6IENvbnRlbnQpID0+IHN0cmluZyB8IGZhbHNlfSBwbGFjZWhvbGRlclNyY1xyXG4gKiBNb2RpZnkgcGxhY2Vob2xkZXIgaW1hZ2Ugc291cmNlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3BsYWNlaG9sZGVyc3JjXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNDb250ZW50TG9hZGluZzogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gaXNDb250ZW50TG9hZGluZ1xyXG4gKiBNb2RpZnkgaWYgdGhlIGNvbnRlbnQgaXMgY3VycmVudGx5IGxvYWRpbmcuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXNjb250ZW50bG9hZGluZ1xyXG4gKlxyXG4gKiBAcHJvcCB7KGlzQ29udGVudFpvb21hYmxlOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0NvbnRlbnRab29tYWJsZVxyXG4gKiBNb2RpZnkgaWYgdGhlIGNvbnRlbnQgY2FuIGJlIHpvb21lZC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2NvbnRlbnR6b29tYWJsZVxyXG4gKlxyXG4gKiBAcHJvcCB7KHVzZUNvbnRlbnRQbGFjZWhvbGRlcjogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gdXNlQ29udGVudFBsYWNlaG9sZGVyXHJcbiAqIE1vZGlmeSBpZiB0aGUgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBjb250ZW50LlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3VzZWNvbnRlbnRwbGFjZWhvbGRlclxyXG4gKlxyXG4gKiBAcHJvcCB7KGlzS2VlcGluZ1BsYWNlaG9sZGVyOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0tlZXBpbmdQbGFjZWhvbGRlclxyXG4gKiBNb2RpZnkgaWYgdGhlIHBsYWNlaG9sZGVyIHNob3VsZCBiZSBrZXB0IGFmdGVyIHRoZSBjb250ZW50IGlzIGxvYWRlZC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2tlZXBpbmdwbGFjZWhvbGRlclxyXG4gKlxyXG4gKlxyXG4gKiBAcHJvcCB7KGNvbnRlbnRFcnJvckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb250ZW50OiBDb250ZW50KSA9PiBIVE1MRWxlbWVudH0gY29udGVudEVycm9yRWxlbWVudFxyXG4gKiBNb2RpZnkgYW4gZWxlbWVudCB3aGVuIHRoZSBjb250ZW50IGhhcyBlcnJvciBzdGF0ZSAoZm9yIGV4YW1wbGUsIGlmIGltYWdlIGNhbm5vdCBiZSBsb2FkZWQpLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2NvbnRlbnRlcnJvcmVsZW1lbnRcclxuICpcclxuICogQHByb3AgeyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZGF0YTogVUlFbGVtZW50RGF0YSkgPT4gSFRNTEVsZW1lbnR9IHVpRWxlbWVudFxyXG4gKiBNb2RpZnkgYSBVSSBlbGVtZW50IHRoYXQncyBiZWluZyBjcmVhdGVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3VpZWxlbWVudFxyXG4gKlxyXG4gKiBAcHJvcCB7KHRodW1ibmFpbDogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBIVE1MRWxlbWVudH0gdGh1bWJFbFxyXG4gKiBNb2RpZnkgdGhlIHRodW1ibmFpbCBlbGVtZW50IGZyb20gd2hpY2ggb3BlbmluZyB6b29tIGFuaW1hdGlvbiBzdGFydHMgb3IgZW5kcy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN0aHVtYmVsXHJcbiAqXHJcbiAqIEBwcm9wIHsodGh1bWJCb3VuZHM6IEJvdW5kcyB8IHVuZGVmaW5lZCwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gQm91bmRzfSB0aHVtYkJvdW5kc1xyXG4gKiBNb2RpZnkgdGhlIHRodW1ibmFpbCBib3VuZHMgZnJvbSB3aGljaCBvcGVuaW5nIHpvb20gYW5pbWF0aW9uIHN0YXJ0cyBvciBlbmRzLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3RodW1iYm91bmRzXHJcbiAqXHJcbiAqIEBwcm9wIHsoc3Jjc2V0U2l6ZXNXaWR0aDogbnVtYmVyLCBjb250ZW50OiBDb250ZW50KSA9PiBudW1iZXJ9IHNyY3NldFNpemVzV2lkdGhcclxuICpcclxuICogQHByb3AgeyhwcmV2ZW50UG9pbnRlckV2ZW50OiBib29sZWFuLCBldmVudDogUG9pbnRlckV2ZW50LCBwb2ludGVyVHlwZTogc3RyaW5nKSA9PiBib29sZWFufSBwcmV2ZW50UG9pbnRlckV2ZW50XHJcbiAqXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICogQHR5cGVkZWYge3sgZm46IFBob3RvU3dpcGVGaWx0ZXJzTWFwW1RdLCBwcmlvcml0eTogbnVtYmVyIH19IEZpbHRlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICogQHR5cGVkZWYge1Bob3RvU3dpcGVFdmVudHNNYXBbVF0gZXh0ZW5kcyB1bmRlZmluZWQgPyBQaG90b1N3aXBlRXZlbnQ8VD4gOiBQaG90b1N3aXBlRXZlbnQ8VD4gJiBQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBBdWdtZW50ZWRFdmVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICogQHR5cGVkZWYgeyhldmVudDogQXVnbWVudGVkRXZlbnQ8VD4pID0+IHZvaWR9IEV2ZW50Q2FsbGJhY2tcclxuICovXHJcblxyXG4vKipcclxuICogQmFzZSBQaG90b1N3aXBlIGV2ZW50IG9iamVjdFxyXG4gKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGVFdmVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtUfSB0eXBlXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBbZGV0YWlsc11cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0eXBlLCBkZXRhaWxzKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XHJcbiAgICBpZiAoZGV0YWlscykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRldGFpbHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgYmFzZSBjbGFzcyB0aGF0IGNhbiBsaXN0ZW4gYW5kIGRpc3BhdGNoIGZvciBldmVudHMuXHJcbiAqIFNoYXJlZCBieSBQaG90b1N3aXBlIENvcmUgYW5kIFBob3RvU3dpcGUgTGlnaHRib3gsIGV4dGVuZGVkIGJ5IGJhc2UuanNcclxuICovXHJcbmNsYXNzIEV2ZW50YWJsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHt7IFtUIGluIGtleW9mIFBob3RvU3dpcGVFdmVudHNNYXBdPzogKChldmVudDogQXVnbWVudGVkRXZlbnQ8VD4pID0+IHZvaWQpW10gfX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7eyBbVCBpbiBrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcF0/OiBGaWx0ZXI8VD5bXSB9fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9maWx0ZXJzID0ge307XHJcblxyXG4gICAgLyoqIEB0eXBlIHtQaG90b1N3aXBlIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5wc3dwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7UGhvdG9Td2lwZU9wdGlvbnMgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRmlsdGVyc01hcFtUXX0gZm5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcHJpb3JpdHlcclxuICAgKi9cclxuICBhZGRGaWx0ZXIobmFtZSwgZm4sIHByaW9yaXR5ID0gMTAwKSB7XHJcbiAgICBpZiAoIXRoaXMuX2ZpbHRlcnNbbmFtZV0pIHtcclxuICAgICAgdGhpcy5fZmlsdGVyc1tuYW1lXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LnB1c2goeyBmbiwgcHJpb3JpdHkgfSk7XHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5zb3J0KChmMSwgZjIpID0+IGYxLnByaW9yaXR5IC0gZjIucHJpb3JpdHkpO1xyXG5cclxuICAgIHRoaXMucHN3cD8uYWRkRmlsdGVyKG5hbWUsIGZuLCBwcmlvcml0eSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRmlsdGVyc01hcFtUXX0gZm5cclxuICAgKi9cclxuICByZW1vdmVGaWx0ZXIobmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLl9maWx0ZXJzW25hbWVdKSB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgdGhpcy5fZmlsdGVyc1tuYW1lXSA9IHRoaXMuX2ZpbHRlcnNbbmFtZV0uZmlsdGVyKGZpbHRlciA9PiAoZmlsdGVyLmZuICE9PSBmbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgdGhpcy5wc3dwLnJlbW92ZUZpbHRlcihuYW1lLCBmbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQYXJhbWV0ZXJzPFBob3RvU3dpcGVGaWx0ZXJzTWFwW1RdPn0gYXJnc1xyXG4gICAqIEByZXR1cm5zIHtQYXJhbWV0ZXJzPFBob3RvU3dpcGVGaWx0ZXJzTWFwW1RdPlswXX1cclxuICAgKi9cclxuICBhcHBseUZpbHRlcnMobmFtZSwgLi4uYXJncykge1xyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8uZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgYXJnc1swXSA9IGZpbHRlci5mbi5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFyZ3NbMF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2s8VD59IGZuXHJcbiAgICovXHJcbiAgb24obmFtZSwgZm4pIHtcclxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdPy5wdXNoKGZuKTtcclxuXHJcbiAgICAvLyBXaGVuIGJpbmRpbmcgZXZlbnRzIHRvIGxpZ2h0Ym94LFxyXG4gICAgLy8gYWxzbyBiaW5kIGV2ZW50cyB0byBQaG90b1N3aXBlIENvcmUsXHJcbiAgICAvLyBpZiBpdCdzIG9wZW4uXHJcbiAgICB0aGlzLnBzd3A/Lm9uKG5hbWUsIGZuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFjazxUPn0gZm5cclxuICAgKi9cclxuICBvZmYobmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0uZmlsdGVyKGxpc3RlbmVyID0+IChmbiAhPT0gbGlzdGVuZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBzd3A/Lm9mZihuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVFdmVudHNNYXBbVF19IFtkZXRhaWxzXVxyXG4gICAqIEByZXR1cm5zIHtBdWdtZW50ZWRFdmVudDxUPn1cclxuICAgKi9cclxuICBkaXNwYXRjaChuYW1lLCBkZXRhaWxzKSB7XHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBzd3AuZGlzcGF0Y2gobmFtZSwgZGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSAvKiogQHR5cGUge0F1Z21lbnRlZEV2ZW50PFQ+fSAqLyAobmV3IFBob3RvU3dpcGVFdmVudChuYW1lLCBkZXRhaWxzKSk7XHJcblxyXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdPy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50YWJsZTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgc2V0V2lkdGhIZWlnaHQsIHRvVHJhbnNmb3JtU3RyaW5nIH0gZnJvbSAnLi4vdXRpbC91dGlsLmpzJztcclxuXHJcbmNsYXNzIFBsYWNlaG9sZGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IGZhbHNlfSBpbWFnZVNyY1xyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlU3JjLCBjb250YWluZXIpIHtcclxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlclxyXG4gICAgLy8gKHN0cmV0Y2hlZCB0aHVtYm5haWwgb3Igc2ltcGxlIGRpdiBiZWhpbmQgdGhlIG1haW4gaW1hZ2UpXHJcbiAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCB8IG51bGx9ICovXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAncHN3cF9faW1nIHBzd3BfX2ltZy0tcGxhY2Vob2xkZXInLFxyXG4gICAgICBpbWFnZVNyYyA/ICdpbWcnIDogJ2RpdicsXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaW1hZ2VTcmMpIHtcclxuICAgICAgY29uc3QgaW1nRWwgPSAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnR9ICovICh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICBpbWdFbC5kZWNvZGluZyA9ICdhc3luYyc7XHJcbiAgICAgIGltZ0VsLmFsdCA9ICcnO1xyXG4gICAgICBpbWdFbC5zcmMgPSBpbWFnZVNyYztcclxuICAgICAgaW1nRWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICAgIC8vIFVzZSB0cmFuc2Zvcm0gc2NhbGUoKSB0byBtb2RpZnkgaW1nIHBsYWNlaG9sZGVyIHNpemVcclxuICAgICAgLy8gKGluc3RlYWQgb2YgY2hhbmdpbmcgd2lkdGgvaGVpZ2h0IGRpcmVjdGx5KS5cclxuICAgICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcmZvcm1hbmNlLCBzcGVjaWZpY2FsbHkgaW4gaU9TMTUgU2FmYXJpLlxyXG4gICAgICBzZXRXaWR0aEhlaWdodCh0aGlzLmVsZW1lbnQsIDI1MCwgJ2F1dG8nKTtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICcwIDAnO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdG9UcmFuc2Zvcm1TdHJpbmcoMCwgMCwgd2lkdGggLyAyNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50Py5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgaXNTYWZhcmksIExPQURfU1RBVEUsIHNldFdpZHRoSGVpZ2h0IH0gZnJvbSAnLi4vdXRpbC91dGlsLmpzJztcclxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4vcGxhY2Vob2xkZXIuanMnO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2Jhc2UuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlQmFzZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vdXRpbC91dGlsLmpzJykuTG9hZFN0YXRlfSBMb2FkU3RhdGUgKi9cclxuXHJcbmNsYXNzIENvbnRlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBTbGlkZSBkYXRhXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggaW5zdGFuY2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBpdGVtRGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7UGxhY2Vob2xkZXIgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZSB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuc2xpZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoID0gMDtcclxuICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VIZWlnaHQgPSAwO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBOdW1iZXIodGhpcy5kYXRhLncpIHx8IE51bWJlcih0aGlzLmRhdGEud2lkdGgpIHx8IDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IE51bWJlcih0aGlzLmRhdGEuaCkgfHwgTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIHx8IDA7XHJcblxyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGVjb2RpbmcgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7TG9hZFN0YXRlfSAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuSURMRTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnR5cGUpIHtcclxuICAgICAgdGhpcy50eXBlID0gdGhpcy5kYXRhLnR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5zcmMpIHtcclxuICAgICAgdGhpcy50eXBlID0gJ2ltYWdlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHlwZSA9ICdodG1sJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50SW5pdCcsIHsgY29udGVudDogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMua2VlcFBsYWNlaG9sZGVyKCkpIHtcclxuICAgICAgLy8gV2l0aCBkZWxheSwgYXMgaW1hZ2UgbWlnaHQgYmUgbG9hZGVkLCBidXQgbm90IHJlbmRlcmVkXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0xhenlcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZWxvYWRdXHJcbiAgICovXHJcbiAgbG9hZChpc0xhenksIHJlbG9hZCkge1xyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy51c2VQbGFjZWhvbGRlcigpKSB7XHJcbiAgICAgIGlmICghdGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyU3JjID0gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICAgICAncGxhY2Vob2xkZXJTcmMnLFxyXG4gICAgICAgICAgLy8gdXNlICBpbWFnZS1iYXNlZCBwbGFjZWhvbGRlciBvbmx5IGZvciB0aGUgZmlyc3Qgc2xpZGUsXHJcbiAgICAgICAgICAvLyBhcyByZW5kZXJpbmcgKGV2ZW4gc21hbGwgc3RyZXRjaGVkIHRodW1ibmFpbCkgaXMgYW4gZXhwZW5zaXZlIG9wZXJhdGlvblxyXG4gICAgICAgICAgKHRoaXMuZGF0YS5tc3JjICYmIHRoaXMuc2xpZGUuaXNGaXJzdFNsaWRlKSA/IHRoaXMuZGF0YS5tc3JjIDogZmFsc2UsXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gbmV3IFBsYWNlaG9sZGVyKFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXJTcmMsXHJcbiAgICAgICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lclxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJFbCA9IHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudDtcclxuICAgICAgICAvLyBBZGQgcGxhY2Vob2xkZXIgdG8gRE9NIGlmIGl0IHdhcyBhbHJlYWR5IGNyZWF0ZWRcclxuICAgICAgICBpZiAocGxhY2Vob2xkZXJFbCAmJiAhcGxhY2Vob2xkZXJFbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5wcmVwZW5kKHBsYWNlaG9sZGVyRWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXJlbG9hZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMb2FkJywgeyBjb250ZW50OiB0aGlzLCBpc0xhenkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19pbWcnLCAnaW1nJyk7XHJcbiAgICAgIC8vIFN0YXJ0IGxvYWRpbmcgb25seSBhZnRlciB3aWR0aCBpcyBkZWZpbmVkLCBhcyBzaXplcyBtaWdodCBkZXBlbmQgb24gaXQuXHJcbiAgICAgIC8vIER1ZSB0byBTYWZhcmkgZmVhdHVyZSwgd2UgbXVzdCBkZWZpbmUgc2l6ZXMgYmVmb3JlIHNyY3NldC5cclxuICAgICAgaWYgKHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKGlzTGF6eSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2NvbnRlbnQnLCAnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmRhdGEuaHRtbCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVsb2FkICYmIHRoaXMuc2xpZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXp5XHJcbiAgICovXHJcbiAgbG9hZEltYWdlKGlzTGF6eSkge1xyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VDb250ZW50KClcclxuICAgICAgfHwgIXRoaXMuZWxlbWVudFxyXG4gICAgICB8fCB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TG9hZEltYWdlJywgeyBjb250ZW50OiB0aGlzLCBpc0xhenkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gLyoqIEB0eXBlIEhUTUxJbWFnZUVsZW1lbnQgKi8gKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcmNzZXRTaXplcygpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuc3Jjc2V0KSB7XHJcbiAgICAgIGltYWdlRWxlbWVudC5zcmNzZXQgPSB0aGlzLmRhdGEuc3Jjc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLmRhdGEuc3JjID8/ICcnO1xyXG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuZGF0YS5hbHQgPz8gJyc7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuTE9BRElORztcclxuXHJcbiAgICBpZiAoaW1hZ2VFbGVtZW50LmNvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltYWdlRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaW1hZ2VFbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ24gc2xpZGUgdG8gY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gc2xpZGVcclxuICAgKi9cclxuICBzZXRTbGlkZShzbGlkZSkge1xyXG4gICAgdGhpcy5zbGlkZSA9IHNsaWRlO1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IHRydWU7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gc2xpZGUucHN3cDtcclxuXHJcbiAgICAvLyB0b2RvOiBkbyB3ZSBuZWVkIHRvIHVuc2V0IHNsaWRlP1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGVudCBsb2FkIHN1Y2Nlc3MgaGFuZGxlclxyXG4gICAqL1xyXG4gIG9uTG9hZGVkKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuTE9BREVEO1xyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkQ29tcGxldGUnLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBjb250ZW50OiB0aGlzIH0pO1xyXG5cclxuICAgICAgLy8gaWYgY29udGVudCBpcyByZWxvYWRlZFxyXG4gICAgICBpZiAodGhpcy5zbGlkZS5pc0FjdGl2ZVxyXG4gICAgICAgICAgJiYgdGhpcy5zbGlkZS5oZWF2eUFwcGVuZGVkXHJcbiAgICAgICAgICAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZCgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURFRCB8fCB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250ZW50IGxvYWQgZXJyb3IgaGFuZGxlclxyXG4gICAqL1xyXG4gIG9uRXJyb3IoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5FUlJPUjtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkQ29tcGxldGUnLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBpc0Vycm9yOiB0cnVlLCBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkRXJyb3InLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGN1cnJlbnRseSBsb2FkaW5nXHJcbiAgICovXHJcbiAgaXNMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNDb250ZW50TG9hZGluZycsXHJcbiAgICAgIHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BRElORyxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgY29udGVudCBpcyBpbiBlcnJvciBzdGF0ZVxyXG4gICAqL1xyXG4gIGlzRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiB0aGUgY29udGVudCBpcyBpbWFnZVxyXG4gICAqL1xyXG4gIGlzSW1hZ2VDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2ltYWdlJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBjb250ZW50IHNpemVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLnNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goXHJcbiAgICAgICdjb250ZW50UmVzaXplJyxcclxuICAgICAgeyBjb250ZW50OiB0aGlzLCB3aWR0aCwgaGVpZ2h0IH0pLmRlZmF1bHRQcmV2ZW50ZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmICF0aGlzLmlzRXJyb3IoKSkge1xyXG4gICAgICBjb25zdCBpc0luaXRpYWxTaXplVXBkYXRlID0gKCF0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggJiYgd2lkdGgpO1xyXG5cclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VIZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoaXNJbml0aWFsU2l6ZVVwZGF0ZSkge1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNyY3NldFNpemVzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaChcclxuICAgICAgICAgICdpbWFnZVNpemVDaGFuZ2UnLFxyXG4gICAgICAgICAgeyBzbGlkZTogdGhpcy5zbGlkZSwgd2lkdGgsIGhlaWdodCwgY29udGVudDogdGhpcyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHRoZSBjb250ZW50IGNhbiBiZSB6b29tZWRcclxuICAgKi9cclxuICBpc1pvb21hYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNDb250ZW50Wm9vbWFibGUnLFxyXG4gICAgICB0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgKHRoaXMuc3RhdGUgIT09IExPQURfU1RBVEUuRVJST1IpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGltYWdlIHNyY3NldCBzaXplcyBhdHRyaWJ1dGUgYmFzZWQgb24gd2lkdGggYW5kIGhlaWdodFxyXG4gICAqL1xyXG4gIHVwZGF0ZVNyY3NldFNpemVzKCkge1xyXG4gICAgLy8gSGFuZGxlIHNyY3NldCBzaXplcyBhdHRyaWJ1dGUuXHJcbiAgICAvL1xyXG4gICAgLy8gTmV2ZXIgbG93ZXIgcXVhbGl0eSwgaWYgaXQgd2FzIGluY3JlYXNlZCBwcmV2aW91c2x5LlxyXG4gICAgLy8gQ2hyb21lIGRvZXMgdGhpcyBhdXRvbWF0aWNhbGx5LCBGaXJlZm94IGFuZCBTYWZhcmkgZG8gbm90LFxyXG4gICAgLy8gc28gd2Ugc3RvcmUgbGFyZ2VzdCB1c2VkIHNpemUgaW4gZGF0YXNldC5cclxuICAgIGlmICghdGhpcy5pc0ltYWdlQ29udGVudCgpIHx8ICF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuZGF0YS5zcmNzZXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gLyoqIEB0eXBlIEhUTUxJbWFnZUVsZW1lbnQgKi8gKHRoaXMuZWxlbWVudCk7XHJcbiAgICBjb25zdCBzaXplc1dpZHRoID0gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdzcmNzZXRTaXplc1dpZHRoJyxcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplXHJcbiAgICAgIHx8IHNpemVzV2lkdGggPiBwYXJzZUludChpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZSwgMTApXHJcbiAgICApIHtcclxuICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplc1dpZHRoICsgJ3B4JztcclxuICAgICAgaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemUgPSBTdHJpbmcoc2l6ZXNXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgY29udGVudCBzaG91bGQgdXNlIGEgcGxhY2Vob2xkZXIgKGZyb20gbXNyYyBieSBkZWZhdWx0KVxyXG4gICAqL1xyXG4gIHVzZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAndXNlQ29udGVudFBsYWNlaG9sZGVyJyxcclxuICAgICAgdGhpcy5pc0ltYWdlQ29udGVudCgpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBjb250ZW50IHdpdGggbGF6eS1sb2FkaW5nIHBhcmFtXHJcbiAgICovXHJcbiAgbGF6eUxvYWQoKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExhenlMb2FkJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZCh0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBwbGFjZWhvbGRlciBzaG91bGQgYmUga2VwdCBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxyXG4gICAqL1xyXG4gIGtlZXBQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzS2VlcGluZ1BsYWNlaG9sZGVyJyxcclxuICAgICAgdGhpcy5pc0xvYWRpbmcoKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudERlc3Ryb3knLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmIHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQub25sb2FkID0gbnVsbDtcclxuICAgICAgdGhpcy5lbGVtZW50Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgKi9cclxuICBkaXNwbGF5RXJyb3IoKSB7XHJcbiAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICBsZXQgZXJyb3JNc2dFbCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2Vycm9yLW1zZycsICdkaXYnKTtcclxuICAgICAgZXJyb3JNc2dFbC5pbm5lclRleHQgPSB0aGlzLmluc3RhbmNlLm9wdGlvbnM/LmVycm9yTXNnID8/ICcnO1xyXG4gICAgICBlcnJvck1zZ0VsID0gLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi8gKHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAgICdjb250ZW50RXJyb3JFbGVtZW50JyxcclxuICAgICAgICBlcnJvck1zZ0VsLFxyXG4gICAgICAgIHRoaXNcclxuICAgICAgKSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2NvbnRlbnQgcHN3cF9fZXJyb3ItbXNnLWNvbnRhaW5lcicsICdkaXYnKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVycm9yTXNnRWwpO1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgYXBwZW5kKCkge1xyXG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCB8fCAhdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUVycm9yKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFwcGVuZCcsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBwb3J0c0RlY29kZSA9ICgnZGVjb2RlJyBpbiB0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkpIHtcclxuICAgICAgLy8gVXNlIGRlY29kZSgpIG9uIG5lYXJieSBzbGlkZXNcclxuICAgICAgLy9cclxuICAgICAgLy8gTmVhcmJ5IHNsaWRlIGltYWdlcyBhcmUgaW4gRE9NIGFuZCBub3QgaGlkZGVuIHZpYSBkaXNwbGF5Om5vbmUuXHJcbiAgICAgIC8vIEhvd2V2ZXIsIHRoZXkgYXJlIHBsYWNlZCBvZmZzY3JlZW4gKHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlKS5cclxuICAgICAgLy9cclxuICAgICAgLy8gU29tZSBicm93c2VycyBkbyBub3QgY29tcG9zaXRlIHRoZSBpbWFnZSB1bnRpbCBpdCdzIGFjdHVhbGx5IHZpc2libGUsXHJcbiAgICAgIC8vIHVzaW5nIGRlY29kZSgpIGhlbHBzLlxyXG4gICAgICAvL1xyXG4gICAgICAvLyBZb3UgbWlnaHQgYXNrIFwid2h5IGRvbnQgeW91IGp1c3QgZGVjb2RlKCkgYW5kIHRoZW4gYXBwZW5kIGFsbCBpbWFnZXNcIixcclxuICAgICAgLy8gdGhhdCdzIGJlY2F1c2UgSSB3YW50IHRvIHNob3cgaW1hZ2UgYmVmb3JlIGl0J3MgZnVsbHkgbG9hZGVkLFxyXG4gICAgICAvLyBhcyBicm93c2VyIGNhbiByZW5kZXIgcGFydHMgb2YgaW1hZ2Ugd2hpbGUgaXQgaXMgbG9hZGluZy5cclxuICAgICAgLy8gV2UgZG8gbm90IGRvIHRoaXMgaW4gU2FmYXJpIGR1ZSB0byBwYXJ0aWFsIGxvYWRpbmcgYnVnLlxyXG4gICAgICBpZiAoc3VwcG9ydHNEZWNvZGUgJiYgdGhpcy5zbGlkZSAmJiAoIXRoaXMuc2xpZGUuaXNBY3RpdmUgfHwgaXNTYWZhcmkoKSkpIHtcclxuICAgICAgICB0aGlzLmlzRGVjb2RpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIHB1cnBvc2VmdWxseSB1c2luZyBmaW5hbGx5IGluc3RlYWQgb2YgdGhlbixcclxuICAgICAgICAvLyBhcyBpZiBzcmNzZXQgc2l6ZXMgY2hhbmdlcyBkeW5hbWljYWxseSAtIGl0IG1heSBjYXVzZSBkZWNvZGUgZXJyb3JcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnR9ICovXHJcbiAgICAgICAgKHRoaXMuZWxlbWVudCkuZGVjb2RlKCkuY2F0Y2goKCkgPT4ge30pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0RlY29kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmFwcGVuZEltYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGUgJiYgIXRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3RpdmF0ZSB0aGUgc2xpZGUsXHJcbiAgICogYWN0aXZlIHNsaWRlIGlzIGdlbmVyYWxseSB0aGUgY3VycmVudCBvbmUsXHJcbiAgICogbWVhbmluZyB0aGUgdXNlciBjYW4gc2VlIGl0LlxyXG4gICAqL1xyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRBY3RpdmF0ZScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkXHJcbiAgICAgIHx8ICF0aGlzLnNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmIHRoaXMuaXNEZWNvZGluZyAmJiAhaXNTYWZhcmkoKSkge1xyXG4gICAgICAvLyBhZGQgaW1hZ2UgdG8gc2xpZGUgd2hlbiBpdCBiZWNvbWVzIGFjdGl2ZSxcclxuICAgICAgLy8gZXZlbiBpZiBpdCdzIG5vdCBmaW5pc2hlZCBkZWNvZGluZ1xyXG4gICAgICB0aGlzLmFwcGVuZEltYWdlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFcnJvcigpKSB7XHJcbiAgICAgIHRoaXMubG9hZChmYWxzZSwgdHJ1ZSk7IC8vIHRyeSB0byByZWxvYWRcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWFjdGl2YXRlIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnREZWFjdGl2YXRlJywgeyBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGNvbnRlbnQgZnJvbSBET01cclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudFJlbW92ZScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kIHRoZSBpbWFnZSBjb250ZW50IHRvIHNsaWRlIGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGFwcGVuZEltYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QXBwZW5kSW1hZ2UnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5zdXJlIHRoYXQgZWxlbWVudCBleGlzdHMgYW5kIGlzIG5vdCBhbHJlYWR5IGFwcGVuZGVkXHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BREVEIHx8IHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1IpIHtcclxuICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcclxuIiwiLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBwc3dwXHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydFNpemUob3B0aW9ucywgcHN3cCkge1xyXG4gIGlmIChvcHRpb25zLmdldFZpZXdwb3J0U2l6ZUZuKSB7XHJcbiAgICBjb25zdCBuZXdWaWV3cG9ydFNpemUgPSBvcHRpb25zLmdldFZpZXdwb3J0U2l6ZUZuKG9wdGlvbnMsIHBzd3ApO1xyXG4gICAgaWYgKG5ld1ZpZXdwb3J0U2l6ZSkge1xyXG4gICAgICByZXR1cm4gbmV3Vmlld3BvcnRTaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuXHJcbiAgICAvLyBUT0RPOiBoZWlnaHQgb24gbW9iaWxlIGlzIHZlcnkgaW5jb3Npc3RlbnQgZHVlIHRvIHRvb2xiYXJcclxuICAgIC8vIGZpbmQgYSB3YXkgdG8gaW1wcm92ZSB0aGlzXHJcbiAgICAvL1xyXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHdlbGxcclxuICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgcGFkZGluZyBvcHRpb24uXHJcbiAqIFN1cHBvcnRlZCBmb3JtYXRzOlxyXG4gKlxyXG4gKiAvLyBPYmplY3RcclxuICogcGFkZGluZzoge1xyXG4gKiAgdG9wOiAwLFxyXG4gKiAgYm90dG9tOiAwLFxyXG4gKiAgbGVmdDogMCxcclxuICogIHJpZ2h0OiAwXHJcbiAqIH1cclxuICpcclxuICogLy8gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG9iamVjdFxyXG4gKiBwYWRkaW5nRm46ICh2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkgPT4ge1xyXG4gKiAgcmV0dXJuIHtcclxuICogICAgdG9wOiAwLFxyXG4gKiAgICBib3R0b206IDAsXHJcbiAqICAgIGxlZnQ6IDAsXHJcbiAqICAgIHJpZ2h0OiAwXHJcbiAqICB9O1xyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIExlZ2FjeSB2YXJpYW50XHJcbiAqIHBhZGRpbmdMZWZ0OiAwLFxyXG4gKiBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAqIHBhZGRpbmdUb3A6IDAsXHJcbiAqIHBhZGRpbmdCb3R0b206IDAsXHJcbiAqXHJcbiAqIEBwYXJhbSB7J2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJyB8ICdyaWdodCd9IHByb3BcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9ucyBQaG90b1N3aXBlIG9wdGlvbnNcclxuICogQHBhcmFtIHtQb2ludH0gdmlld3BvcnRTaXplIFBob3RvU3dpcGUgdmlld3BvcnQgc2l6ZSwgZm9yIGV4YW1wbGU6IHsgeDo4MDAsIHk6NjAwIH1cclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFkZGluZ09wdGlvbihwcm9wLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIGxldCBwYWRkaW5nVmFsdWUgPSAwO1xyXG5cclxuICBpZiAob3B0aW9ucy5wYWRkaW5nRm4pIHtcclxuICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnMucGFkZGluZ0ZuKHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVtwcm9wXTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMucGFkZGluZykge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nW3Byb3BdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsZWdhY3lQcm9wTmFtZSA9ICdwYWRkaW5nJyArIHByb3BbMF0udG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBpZiAob3B0aW9uc1tsZWdhY3lQcm9wTmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zW2xlZ2FjeVByb3BOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBOdW1iZXIocGFkZGluZ1ZhbHVlKSB8fCAwO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1BvaW50fSB2aWV3cG9ydFNpemVcclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFuQXJlYVNpemUob3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgeDogdmlld3BvcnRTaXplLnhcclxuICAgICAgLSBwYXJzZVBhZGRpbmdPcHRpb24oJ2xlZnQnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICAgICAgLSBwYXJzZVBhZGRpbmdPcHRpb24oJ3JpZ2h0Jywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpLFxyXG4gICAgeTogdmlld3BvcnRTaXplLnlcclxuICAgICAgLSBwYXJzZVBhZGRpbmdPcHRpb24oJ3RvcCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbignYm90dG9tJywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgfTtcclxufVxyXG4iLCJjb25zdCBNQVhfSU1BR0VfV0lEVEggPSA0MDAwO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKiogQHR5cGVkZWYgeydmaXQnIHwgJ2ZpbGwnIHwgbnVtYmVyIHwgKCh6b29tTGV2ZWxPYmplY3Q6IFpvb21MZXZlbCkgPT4gbnVtYmVyKX0gWm9vbUxldmVsT3B0aW9uICovXHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB6b29tIGxldmVscyBmb3Igc3BlY2lmaWMgc2xpZGUuXHJcbiAqIERlcGVuZHMgb24gdmlld3BvcnQgc2l6ZSBhbmQgaW1hZ2Ugc2l6ZS5cclxuICovXHJcbmNsYXNzIFpvb21MZXZlbCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9ucyBQaG90b1N3aXBlIG9wdGlvbnNcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgU2xpZGUgZGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gW3Bzd3BdIFBob3RvU3dpcGUgaW5zdGFuY2UsIGNhbiBiZSB1bmRlZmluZWQgaWYgbm90IGluaXRpYWxpemVkIHlldFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGl0ZW1EYXRhLCBpbmRleCwgcHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLml0ZW1EYXRhID0gaXRlbURhdGE7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAvKiogQHR5cGUgeyBQb2ludCB8IG51bGwgfSAqL1xyXG4gICAgdGhpcy5wYW5BcmVhU2l6ZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUgeyBQb2ludCB8IG51bGwgfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50U2l6ZSA9IG51bGw7XHJcbiAgICB0aGlzLmZpdCA9IDE7XHJcbiAgICB0aGlzLmZpbGwgPSAxO1xyXG4gICAgdGhpcy52RmlsbCA9IDE7XHJcbiAgICB0aGlzLmluaXRpYWwgPSAxO1xyXG4gICAgdGhpcy5zZWNvbmRhcnkgPSAxO1xyXG4gICAgdGhpcy5tYXggPSAxO1xyXG4gICAgdGhpcy5taW4gPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIGluaXRpYWwsIHNlY29uZGFyeSBhbmQgbWF4aW11bSB6b29tIGxldmVsIGZvciB0aGUgc3BlY2lmaWVkIHNsaWRlLlxyXG4gICAqXHJcbiAgICogSXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIGVpdGhlciBpbWFnZSBvciB2aWV3cG9ydCBzaXplIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4SGVpZ2h0XHJcbiAgICogQHBhcmFtIHtQb2ludH0gcGFuQXJlYVNpemVcclxuICAgKi9cclxuICB1cGRhdGUobWF4V2lkdGgsIG1heEhlaWdodCwgcGFuQXJlYVNpemUpIHtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICBjb25zdCBlbGVtZW50U2l6ZSA9IHsgeDogbWF4V2lkdGgsIHk6IG1heEhlaWdodCB9O1xyXG4gICAgdGhpcy5lbGVtZW50U2l6ZSA9IGVsZW1lbnRTaXplO1xyXG4gICAgdGhpcy5wYW5BcmVhU2l6ZSA9IHBhbkFyZWFTaXplO1xyXG5cclxuICAgIGNvbnN0IGhSYXRpbyA9IHBhbkFyZWFTaXplLnggLyBlbGVtZW50U2l6ZS54O1xyXG4gICAgY29uc3QgdlJhdGlvID0gcGFuQXJlYVNpemUueSAvIGVsZW1lbnRTaXplLnk7XHJcblxyXG4gICAgdGhpcy5maXQgPSBNYXRoLm1pbigxLCBoUmF0aW8gPCB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW8pO1xyXG4gICAgdGhpcy5maWxsID0gTWF0aC5taW4oMSwgaFJhdGlvID4gdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvKTtcclxuXHJcbiAgICAvLyB6b29tLnZGaWxsIGRlZmluZXMgem9vbSBsZXZlbCBvZiB0aGUgaW1hZ2VcclxuICAgIC8vIHdoZW4gaXQgaGFzIDEwMCUgb2Ygdmlld3BvcnQgdmVydGljYWwgc3BhY2UgKGhlaWdodClcclxuICAgIHRoaXMudkZpbGwgPSBNYXRoLm1pbigxLCB2UmF0aW8pO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuX2dldEluaXRpYWwoKTtcclxuICAgIHRoaXMuc2Vjb25kYXJ5ID0gdGhpcy5fZ2V0U2Vjb25kYXJ5KCk7XHJcbiAgICB0aGlzLm1heCA9IE1hdGgubWF4KFxyXG4gICAgICB0aGlzLmluaXRpYWwsXHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5LFxyXG4gICAgICB0aGlzLl9nZXRNYXgoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1pbiA9IE1hdGgubWluKFxyXG4gICAgICB0aGlzLmZpdCxcclxuICAgICAgdGhpcy5pbml0aWFsLFxyXG4gICAgICB0aGlzLnNlY29uZGFyeVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnem9vbUxldmVsc1VwZGF0ZScsIHsgem9vbUxldmVsczogdGhpcywgc2xpZGVEYXRhOiB0aGlzLml0ZW1EYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIHVzZXItZGVmaW5lZCB6b29tIG9wdGlvbi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsnaW5pdGlhbCcgfCAnc2Vjb25kYXJ5JyB8ICdtYXgnfSBvcHRpb25QcmVmaXggWm9vbSBsZXZlbCBvcHRpb24gcHJlZml4IChpbml0aWFsLCBzZWNvbmRhcnksIG1heClcclxuICAgKiBAcmV0dXJucyB7IG51bWJlciB8IHVuZGVmaW5lZCB9XHJcbiAgICovXHJcbiAgX3BhcnNlWm9vbUxldmVsT3B0aW9uKG9wdGlvblByZWZpeCkge1xyXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IC8qKiBAdHlwZSB7J2luaXRpYWxab29tTGV2ZWwnIHwgJ3NlY29uZGFyeVpvb21MZXZlbCcgfCAnbWF4Wm9vbUxldmVsJ30gKi8gKFxyXG4gICAgICBvcHRpb25QcmVmaXggKyAnWm9vbUxldmVsJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gdGhpcy5vcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cclxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvblZhbHVlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSAnZml0Jykge1xyXG4gICAgICByZXR1cm4gdGhpcy5maXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlcihvcHRpb25WYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgem9vbSBsZXZlbCB0byB3aGljaCBpbWFnZSB3aWxsIGJlIHpvb21lZCBhZnRlciBkb3VibGUtdGFwIGdlc3R1cmUsXHJcbiAgICogb3Igd2hlbiB1c2VyIGNsaWNrcyBvbiB6b29tIGljb24sXHJcbiAgICogb3IgbW91c2UtY2xpY2sgb24gaW1hZ2UgaXRzZWxmLlxyXG4gICAqIElmIHlvdSByZXR1cm4gMSBpbWFnZSB3aWxsIGJlIHpvb21lZCB0byBpdHMgb3JpZ2luYWwgc2l6ZS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRTZWNvbmRhcnkoKSB7XHJcbiAgICBsZXQgY3Vyclpvb21MZXZlbCA9IHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdzZWNvbmRhcnknKTtcclxuXHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCkge1xyXG4gICAgICByZXR1cm4gY3Vyclpvb21MZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzeCBvZiBcImZpdFwiIHN0YXRlLCBidXQgbm90IGxhcmdlciB0aGFuIG9yaWdpbmFsXHJcbiAgICBjdXJyWm9vbUxldmVsID0gTWF0aC5taW4oMSwgdGhpcy5maXQgKiAzKTtcclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50U2l6ZSAmJiBjdXJyWm9vbUxldmVsICogdGhpcy5lbGVtZW50U2l6ZS54ID4gTUFYX0lNQUdFX1dJRFRIKSB7XHJcbiAgICAgIGN1cnJab29tTGV2ZWwgPSBNQVhfSU1BR0VfV0lEVEggLyB0aGlzLmVsZW1lbnRTaXplLng7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJab29tTGV2ZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaW5pdGlhbCBpbWFnZSB6b29tIGxldmVsLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldEluaXRpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ2luaXRpYWwnKSB8fCB0aGlzLmZpdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1heGltdW0gem9vbSBsZXZlbCB3aGVuIHVzZXIgem9vbXNcclxuICAgKiB2aWEgem9vbS9waW5jaCBnZXN0dXJlLFxyXG4gICAqIHZpYSBjbWQvY3RybC13aGVlbCBvciB2aWEgdHJhY2twYWQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0TWF4KCkge1xyXG4gICAgLy8gbWF4IHpvb20gbGV2ZWwgaXMgeDQgZnJvbSBcImZpdCBzdGF0ZVwiLFxyXG4gICAgLy8gdXNlZCBmb3Igem9vbSBnZXN0dXJlIGFuZCBjdHJsL3RyYWNrcGFkIHpvb21cclxuICAgIHJldHVybiB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignbWF4JykgfHwgTWF0aC5tYXgoMSwgdGhpcy5maXQgKiA0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFpvb21MZXZlbDtcclxuIiwiaW1wb3J0IHsgZ2V0Vmlld3BvcnRTaXplLCBnZXRQYW5BcmVhU2l6ZSB9IGZyb20gJy4uL3V0aWwvdmlld3BvcnQtc2l6ZS5qcyc7XHJcbmltcG9ydCBab29tTGV2ZWwgZnJvbSAnLi96b29tLWxldmVsLmpzJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbnRlbnQuanMnKS5kZWZhdWx0fSBDb250ZW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9iYXNlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUJhc2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG5jb25zdCBNSU5fU0xJREVTX1RPX0NBQ0hFID0gNTtcclxuXHJcbi8qKlxyXG4gKiBMYXp5LWxvYWQgYW4gaW1hZ2VcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJvdGggYnkgTGlnaHRib3ggYW5kIFBob3RvU3dpcGUgY29yZSxcclxuICogdGh1cyBpdCBjYW4gYmUgY2FsbGVkIGJlZm9yZSBkaWFsb2cgaXMgb3BlbmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggaW5zdGFuY2VcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtDb250ZW50fSBJbWFnZSB0aGF0IGlzIGJlaW5nIGRlY29kZWQgb3IgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbnN0YW5jZSwgaW5kZXgpIHtcclxuICBjb25zdCBjb250ZW50ID0gaW5zdGFuY2UuY3JlYXRlQ29udGVudEZyb21EYXRhKGl0ZW1EYXRhLCBpbmRleCk7XHJcbiAgLyoqIEB0eXBlIHtab29tTGV2ZWwgfCB1bmRlZmluZWR9ICovXHJcbiAgbGV0IHpvb21MZXZlbDtcclxuXHJcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBpbnN0YW5jZTtcclxuXHJcbiAgLy8gV2UgbmVlZCB0byBrbm93IGRpbWVuc2lvbnMgb2YgdGhlIGltYWdlIHRvIHByZWxvYWQgaXQsXHJcbiAgLy8gYXMgaXQgbWlnaHQgdXNlIHNyY3NldCwgYW5kIHdlIG5lZWQgdG8gZGVmaW5lIHNpemVzXHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHpvb21MZXZlbCA9IG5ldyBab29tTGV2ZWwob3B0aW9ucywgaXRlbURhdGEsIC0xKTtcclxuXHJcbiAgICBsZXQgdmlld3BvcnRTaXplO1xyXG4gICAgaWYgKGluc3RhbmNlLnBzd3ApIHtcclxuICAgICAgdmlld3BvcnRTaXplID0gaW5zdGFuY2UucHN3cC52aWV3cG9ydFNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWV3cG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUob3B0aW9ucywgaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhbkFyZWFTaXplID0gZ2V0UGFuQXJlYVNpemUob3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpO1xyXG4gICAgem9vbUxldmVsLnVwZGF0ZShjb250ZW50LndpZHRoLCBjb250ZW50LmhlaWdodCwgcGFuQXJlYVNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29udGVudC5sYXp5TG9hZCgpO1xyXG5cclxuICBpZiAoem9vbUxldmVsKSB7XHJcbiAgICBjb250ZW50LnNldERpc3BsYXllZFNpemUoXHJcbiAgICAgIE1hdGguY2VpbChjb250ZW50LndpZHRoICogem9vbUxldmVsLmluaXRpYWwpLFxyXG4gICAgICBNYXRoLmNlaWwoY29udGVudC5oZWlnaHQgKiB6b29tTGV2ZWwuaW5pdGlhbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBMYXp5LWxvYWRzIHNwZWNpZmljIHNsaWRlLlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYm90aCBieSBMaWdodGJveCBhbmQgUGhvdG9Td2lwZSBjb3JlLFxyXG4gKiB0aHVzIGl0IGNhbiBiZSBjYWxsZWQgYmVmb3JlIGRpYWxvZyBpcyBvcGVuZWQuXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIGl0IGxvYWRzIGltYWdlIGJhc2VkIG9uIHZpZXdwb3J0IHNpemUgYW5kIGluaXRpYWwgem9vbSBsZXZlbC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IGluc3RhbmNlIFBob3RvU3dpcGUgb3IgUGhvdG9Td2lwZUxpZ2h0Ym94IGV2ZW50YWJsZSBpbnN0YW5jZVxyXG4gKiBAcmV0dXJucyB7Q29udGVudCB8IHVuZGVmaW5lZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXp5TG9hZFNsaWRlKGluZGV4LCBpbnN0YW5jZSkge1xyXG4gIGNvbnN0IGl0ZW1EYXRhID0gaW5zdGFuY2UuZ2V0SXRlbURhdGEoaW5kZXgpO1xyXG5cclxuICBpZiAoaW5zdGFuY2UuZGlzcGF0Y2goJ2xhenlMb2FkU2xpZGUnLCB7IGluZGV4LCBpdGVtRGF0YSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbnN0YW5jZSwgaW5kZXgpO1xyXG59XHJcblxyXG5jbGFzcyBDb250ZW50TG9hZGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgLy8gVG90YWwgYW1vdW50IG9mIGNhY2hlZCBpbWFnZXNcclxuICAgIHRoaXMubGltaXQgPSBNYXRoLm1heChcclxuICAgICAgcHN3cC5vcHRpb25zLnByZWxvYWRbMF0gKyBwc3dwLm9wdGlvbnMucHJlbG9hZFsxXSArIDEsXHJcbiAgICAgIE1JTl9TTElERVNfVE9fQ0FDSEVcclxuICAgICk7XHJcbiAgICAvKiogQHR5cGUge0NvbnRlbnRbXX0gKi9cclxuICAgIHRoaXMuX2NhY2hlZEl0ZW1zID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXp5IGxvYWQgbmVhcmJ5IHNsaWRlcyBiYXNlZCBvbiBgcHJlbG9hZGAgb3B0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkaWZmXSBEaWZmZXJlbmNlIGJldHdlZW4gc2xpZGUgaW5kZXhlcyB0aGF0IHdhcyBjaGFuZ2VkIHJlY2VudGx5LCBvciAwLlxyXG4gICAqL1xyXG4gIHVwZGF0ZUxhenkoZGlmZikge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG5cclxuICAgIGlmIChwc3dwLmRpc3BhdGNoKCdsYXp5TG9hZCcpLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcHJlbG9hZCB9ID0gcHN3cC5vcHRpb25zO1xyXG4gICAgY29uc3QgaXNGb3J3YXJkID0gZGlmZiA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IChkaWZmID49IDApO1xyXG4gICAgbGV0IGk7XHJcblxyXG4gICAgLy8gcHJlbG9hZFsxXSAtIG51bSBpdGVtcyB0byBwcmVsb2FkIGluIGZvcndhcmQgZGlyZWN0aW9uXHJcbiAgICBmb3IgKGkgPSAwOyBpIDw9IHByZWxvYWRbMV07IGkrKykge1xyXG4gICAgICB0aGlzLmxvYWRTbGlkZUJ5SW5kZXgocHN3cC5jdXJySW5kZXggKyAoaXNGb3J3YXJkID8gaSA6ICgtaSkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcmVsb2FkWzBdIC0gbnVtIGl0ZW1zIHRvIHByZWxvYWQgaW4gYmFja3dhcmQgZGlyZWN0aW9uXHJcbiAgICBmb3IgKGkgPSAxOyBpIDw9IHByZWxvYWRbMF07IGkrKykge1xyXG4gICAgICB0aGlzLmxvYWRTbGlkZUJ5SW5kZXgocHN3cC5jdXJySW5kZXggKyAoaXNGb3J3YXJkID8gKC1pKSA6IGkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbml0aWFsSW5kZXhcclxuICAgKi9cclxuICBsb2FkU2xpZGVCeUluZGV4KGluaXRpYWxJbmRleCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnBzd3AuZ2V0TG9vcGVkSW5kZXgoaW5pdGlhbEluZGV4KTtcclxuICAgIC8vIHRyeSB0byBnZXQgY2FjaGVkIGNvbnRlbnRcclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50QnlJbmRleChpbmRleCk7XHJcbiAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgLy8gbm8gY2FjaGVkIGNvbnRlbnQsIHNvIHRyeSB0byBsb2FkIGZyb20gc2NyYXRjaDpcclxuICAgICAgY29udGVudCA9IGxhenlMb2FkU2xpZGUoaW5kZXgsIHRoaXMucHN3cCk7XHJcbiAgICAgIC8vIGlmIGNvbnRlbnQgY2FuIGJlIGxvYWRlZCwgYWRkIGl0IHRvIGNhY2hlOlxyXG4gICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9DYWNoZShjb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gc2xpZGVcclxuICAgKiBAcmV0dXJucyB7Q29udGVudH1cclxuICAgKi9cclxuICBnZXRDb250ZW50QnlTbGlkZShzbGlkZSkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRCeUluZGV4KHNsaWRlLmluZGV4KTtcclxuICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAvLyBjcmVhdGUgY29udGVudCBpZiBub3QgZm91bmQgaW4gY2FjaGVcclxuICAgICAgY29udGVudCA9IHRoaXMucHN3cC5jcmVhdGVDb250ZW50RnJvbURhdGEoc2xpZGUuZGF0YSwgc2xpZGUuaW5kZXgpO1xyXG4gICAgICB0aGlzLmFkZFRvQ2FjaGUoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXNzaWduIHNsaWRlIHRvIGNvbnRlbnRcclxuICAgIGNvbnRlbnQuc2V0U2xpZGUoc2xpZGUpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDb250ZW50fSBjb250ZW50XHJcbiAgICovXHJcbiAgYWRkVG9DYWNoZShjb250ZW50KSB7XHJcbiAgICAvLyBtb3ZlIHRvIHRoZSBlbmQgb2YgYXJyYXlcclxuICAgIHRoaXMucmVtb3ZlQnlJbmRleChjb250ZW50LmluZGV4KTtcclxuICAgIHRoaXMuX2NhY2hlZEl0ZW1zLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NhY2hlZEl0ZW1zLmxlbmd0aCA+IHRoaXMubGltaXQpIHtcclxuICAgICAgLy8gRGVzdHJveSB0aGUgZmlyc3QgY29udGVudCB0aGF0J3Mgbm90IGF0dGFjaGVkXHJcbiAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0aGlzLl9jYWNoZWRJdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gIWl0ZW0uaXNBdHRhY2hlZCAmJiAhaXRlbS5oYXNTbGlkZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZWRJdGVtID0gdGhpcy5fY2FjaGVkSXRlbXMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpWzBdO1xyXG4gICAgICAgIHJlbW92ZWRJdGVtLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbiBpbWFnZSBmcm9tIGNhY2hlLCBkb2VzIG5vdCBkZXN0cm95KCkgaXQsIGp1c3QgcmVtb3Zlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqL1xyXG4gIHJlbW92ZUJ5SW5kZXgoaW5kZXgpIHtcclxuICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0aGlzLl9jYWNoZWRJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmluZGV4ID09PSBpbmRleCk7XHJcbiAgICBpZiAoaW5kZXhUb1JlbW92ZSAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5fY2FjaGVkSXRlbXMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge0NvbnRlbnQgfCB1bmRlZmluZWR9XHJcbiAgICovXHJcbiAgZ2V0Q29udGVudEJ5SW5kZXgoaW5kZXgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRJdGVtcy5maW5kKGNvbnRlbnQgPT4gY29udGVudC5pbmRleCA9PT0gaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2NhY2hlZEl0ZW1zLmZvckVhY2goY29udGVudCA9PiBjb250ZW50LmRlc3Ryb3koKSk7XHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcyA9IFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudExvYWRlcjtcclxuIiwiaW1wb3J0IEV2ZW50YWJsZSBmcm9tICcuL2V2ZW50YWJsZS5qcyc7XHJcbmltcG9ydCB7IGdldEVsZW1lbnRzRnJvbU9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL3NsaWRlL2NvbnRlbnQuanMnO1xyXG5pbXBvcnQgeyBsYXp5TG9hZERhdGEgfSBmcm9tICcuLi9zbGlkZS9sb2FkZXIuanMnO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9waG90b3N3aXBlLmpzXCIpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9zbGlkZS9zbGlkZS5qc1wiKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgYmFzZSBjbGFzcyB0aGF0IGNhbiByZXRyaWV2ZSBkYXRhIGFib3V0IGV2ZXJ5IHNsaWRlLlxyXG4gKiBTaGFyZWQgYnkgUGhvdG9Td2lwZSBDb3JlIGFuZCBQaG90b1N3aXBlIExpZ2h0Ym94XHJcbiAqL1xyXG5jbGFzcyBQaG90b1N3aXBlQmFzZSBleHRlbmRzIEV2ZW50YWJsZSB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHRvdGFsIG51bWJlciBvZiBzbGlkZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0TnVtSXRlbXMoKSB7XHJcbiAgICBsZXQgbnVtSXRlbXMgPSAwO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMub3B0aW9ucz8uZGF0YVNvdXJjZTtcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZSAmJiAnbGVuZ3RoJyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIG1heSBiZSBhbiBhcnJheSBvciBqdXN0IG9iamVjdCB3aXRoIGxlbmd0aCBwcm9wZXJ0eVxyXG4gICAgICBudW1JdGVtcyA9IGRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlICYmICdnYWxsZXJ5JyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIHF1ZXJ5IERPTSBlbGVtZW50c1xyXG4gICAgICBpZiAoIWRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBkYXRhU291cmNlLml0ZW1zID0gdGhpcy5fZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGRhdGFTb3VyY2UuZ2FsbGVyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhU291cmNlLml0ZW1zKSB7XHJcbiAgICAgICAgbnVtSXRlbXMgPSBkYXRhU291cmNlLml0ZW1zLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGxlZ2FjeSBldmVudCwgYmVmb3JlIGZpbHRlcnMgd2VyZSBpbnRyb2R1Y2VkXHJcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZGlzcGF0Y2goJ251bUl0ZW1zJywge1xyXG4gICAgICBkYXRhU291cmNlLFxyXG4gICAgICBudW1JdGVtc1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBseUZpbHRlcnMoJ251bUl0ZW1zJywgZXZlbnQubnVtSXRlbXMsIGRhdGFTb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IHNsaWRlRGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fVxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbnRlbnRGcm9tRGF0YShzbGlkZURhdGEsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbnRlbnQoc2xpZGVEYXRhLCB0aGlzLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaXRlbSBkYXRhIGJ5IGluZGV4LlxyXG4gICAqXHJcbiAgICogXCJpdGVtIGRhdGFcIiBzaG91bGQgY29udGFpbiBub3JtYWxpemVkIGluZm9ybWF0aW9uIHRoYXQgUGhvdG9Td2lwZSBuZWVkcyB0byBnZW5lcmF0ZSBhIHNsaWRlLlxyXG4gICAqIEZvciBleGFtcGxlLCBpdCBtYXkgY29udGFpbiBwcm9wZXJ0aWVzIGxpa2VcclxuICAgKiBgc3JjYCwgYHNyY3NldGAsIGB3YCwgYGhgLCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgYSBzbGlkZSB3aXRoIGltYWdlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge1NsaWRlRGF0YX1cclxuICAgKi9cclxuICBnZXRJdGVtRGF0YShpbmRleCkge1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMub3B0aW9ucz8uZGF0YVNvdXJjZTtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGVEYXRhIHwgSFRNTEVsZW1lbnR9ICovXHJcbiAgICBsZXQgZGF0YVNvdXJjZUl0ZW0gPSB7fTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFTb3VyY2UpKSB7XHJcbiAgICAgIC8vIERhdGFzb3VyY2UgaXMgYW4gYXJyYXkgb2YgZWxlbWVudHNcclxuICAgICAgZGF0YVNvdXJjZUl0ZW0gPSBkYXRhU291cmNlW2luZGV4XTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZSAmJiAnZ2FsbGVyeScgaW4gZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBkYXRhU291cmNlIGhhcyBnYWxsZXJ5IHByb3BlcnR5LFxyXG4gICAgICAvLyB0aHVzIGl0IHdhcyBjcmVhdGVkIGJ5IExpZ2h0Ym94LCBiYXNlZCBvblxyXG4gICAgICAvLyBnYWxsZXJ5IGFuZCBjaGlsZHJlbiBvcHRpb25zXHJcblxyXG4gICAgICAvLyBxdWVyeSBET00gZWxlbWVudHNcclxuICAgICAgaWYgKCFkYXRhU291cmNlLml0ZW1zKSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5pdGVtcyA9IHRoaXMuX2dldEdhbGxlcnlET01FbGVtZW50cyhkYXRhU291cmNlLmdhbGxlcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhU291cmNlSXRlbSA9IGRhdGFTb3VyY2UuaXRlbXNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtRGF0YSA9IGRhdGFTb3VyY2VJdGVtO1xyXG5cclxuICAgIGlmIChpdGVtRGF0YSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgaXRlbURhdGEgPSB0aGlzLl9kb21FbGVtZW50VG9JdGVtRGF0YShpdGVtRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzcGF0Y2hpbmcgdGhlIGl0ZW1EYXRhIGV2ZW50LFxyXG4gICAgLy8gaXQncyBhIGxlZ2FjeSB2ZXJpb24gYmVmb3JlIGZpbHRlcnMgd2VyZSBpbnRyb2R1Y2VkXHJcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZGlzcGF0Y2goJ2l0ZW1EYXRhJywge1xyXG4gICAgICBpdGVtRGF0YTogaXRlbURhdGEgfHwge30sXHJcbiAgICAgIGluZGV4XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5hcHBseUZpbHRlcnMoJ2l0ZW1EYXRhJywgZXZlbnQuaXRlbURhdGEsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhcnJheSBvZiBnYWxsZXJ5IERPTSBlbGVtZW50cyxcclxuICAgKiBiYXNlZCBvbiBjaGlsZFNlbGVjdG9yIGFuZCBnYWxsZXJ5IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBnYWxsZXJ5RWxlbWVudFxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfVxyXG4gICAqL1xyXG4gIF9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZ2FsbGVyeUVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnM/LmNoaWxkcmVuIHx8IHRoaXMub3B0aW9ucz8uY2hpbGRTZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbixcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRTZWxlY3RvcixcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudFxyXG4gICAgICApIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZ2FsbGVyeUVsZW1lbnRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgRE9NIGVsZW1lbnQgdG8gaXRlbSBkYXRhIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgRE9NIGVsZW1lbnRcclxuICAgKiBAcmV0dXJucyB7U2xpZGVEYXRhfVxyXG4gICAqL1xyXG4gIF9kb21FbGVtZW50VG9JdGVtRGF0YShlbGVtZW50KSB7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlRGF0YX0gKi9cclxuICAgIGNvbnN0IGl0ZW1EYXRhID0ge1xyXG4gICAgICBlbGVtZW50XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmtFbCA9IC8qKiBAdHlwZSB7SFRNTEFuY2hvckVsZW1lbnR9ICovIChcclxuICAgICAgZWxlbWVudC50YWdOYW1lID09PSAnQSdcclxuICAgICAgICA/IGVsZW1lbnRcclxuICAgICAgICA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChsaW5rRWwpIHtcclxuICAgICAgLy8gc3JjIGNvbWVzIGZyb20gZGF0YS1wc3dwLXNyYyBhdHRyaWJ1dGUsXHJcbiAgICAgIC8vIGlmIGl0J3MgZW1wdHkgbGluayBocmVmIGlzIHVzZWRcclxuICAgICAgaXRlbURhdGEuc3JjID0gbGlua0VsLmRhdGFzZXQucHN3cFNyYyB8fCBsaW5rRWwuaHJlZjtcclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwU3Jjc2V0KSB7XHJcbiAgICAgICAgaXRlbURhdGEuc3Jjc2V0ID0gbGlua0VsLmRhdGFzZXQucHN3cFNyY3NldDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbURhdGEud2lkdGggPSBsaW5rRWwuZGF0YXNldC5wc3dwV2lkdGggPyBwYXJzZUludChsaW5rRWwuZGF0YXNldC5wc3dwV2lkdGgsIDEwKSA6IDA7XHJcbiAgICAgIGl0ZW1EYXRhLmhlaWdodCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BIZWlnaHQgPyBwYXJzZUludChsaW5rRWwuZGF0YXNldC5wc3dwSGVpZ2h0LCAxMCkgOiAwO1xyXG5cclxuICAgICAgLy8gc3VwcG9ydCBsZWdhY3kgdyAmIGggcHJvcGVydGllc1xyXG4gICAgICBpdGVtRGF0YS53ID0gaXRlbURhdGEud2lkdGg7XHJcbiAgICAgIGl0ZW1EYXRhLmggPSBpdGVtRGF0YS5oZWlnaHQ7XHJcblxyXG4gICAgICBpZiAobGlua0VsLmRhdGFzZXQucHN3cFR5cGUpIHtcclxuICAgICAgICBpdGVtRGF0YS50eXBlID0gbGlua0VsLmRhdGFzZXQucHN3cFR5cGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRodW1ibmFpbEVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuXHJcbiAgICAgIGlmICh0aHVtYm5haWxFbCkge1xyXG4gICAgICAgIC8vIG1zcmMgaXMgVVJMIHRvIHBsYWNlaG9sZGVyIGltYWdlIHRoYXQncyBkaXNwbGF5ZWQgYmVmb3JlIGxhcmdlIGltYWdlIGlzIGxvYWRlZFxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgaXQncyBkaXNwbGF5ZWQgb25seSBmb3IgdGhlIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgaXRlbURhdGEubXNyYyA9IHRodW1ibmFpbEVsLmN1cnJlbnRTcmMgfHwgdGh1bWJuYWlsRWwuc3JjO1xyXG4gICAgICAgIGl0ZW1EYXRhLmFsdCA9IHRodW1ibmFpbEVsLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwQ3JvcHBlZCB8fCBsaW5rRWwuZGF0YXNldC5jcm9wcGVkKSB7XHJcbiAgICAgICAgaXRlbURhdGEudGh1bWJDcm9wcGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnZG9tSXRlbURhdGEnLCBpdGVtRGF0YSwgZWxlbWVudCwgbGlua0VsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExhenktbG9hZCBieSBzbGlkZSBkYXRhXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7Q29udGVudH0gSW1hZ2UgdGhhdCBpcyBiZWluZyBkZWNvZGVkIG9yIGZhbHNlLlxyXG4gICAqL1xyXG4gIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5kZXgpIHtcclxuICAgIHJldHVybiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIHRoaXMsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvU3dpcGVCYXNlO1xyXG4iLCJpbXBvcnQge1xyXG4gIHNwZWNpYWxLZXlVc2VkLFxyXG4gIGdldEVsZW1lbnRzRnJvbU9wdGlvbixcclxuICBpc1Bzd3BDbGFzc1xyXG59IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcblxyXG5pbXBvcnQgUGhvdG9Td2lwZUJhc2UgZnJvbSAnLi4vY29yZS9iYXNlLmpzJztcclxuaW1wb3J0IHsgbGF6eUxvYWRTbGlkZSB9IGZyb20gJy4uL3NsaWRlL2xvYWRlci5qcyc7XHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vdHlwZXMuanMnKS5UeXBlPFQ+fSBUeXBlPFQ+XHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRGF0YVNvdXJjZX0gRGF0YVNvdXJjZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvY29udGVudC5qcycpLmRlZmF1bHR9IENvbnRlbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvZXZlbnRhYmxlLmpzJykuUGhvdG9Td2lwZUV2ZW50c01hcH0gUGhvdG9Td2lwZUV2ZW50c01hcCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9ldmVudGFibGUuanMnKS5QaG90b1N3aXBlRmlsdGVyc01hcH0gUGhvdG9Td2lwZUZpbHRlcnNNYXAgKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9ldmVudGFibGUuanMnKS5FdmVudENhbGxiYWNrPFQ+fSBFdmVudENhbGxiYWNrPFQ+XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgTGlnaHRib3hcclxuICpcclxuICogLSBJZiB1c2VyIGhhcyB1bnN1cHBvcnRlZCBicm93c2VyIGl0IGZhbGxzIGJhY2sgdG8gZGVmYXVsdCBicm93c2VyIGFjdGlvbiAoanVzdCBvcGVucyBVUkwpXHJcbiAqIC0gQmluZHMgY2xpY2sgZXZlbnQgdG8gbGlua3MgdGhhdCBzaG91bGQgb3BlbiBQaG90b1N3aXBlXHJcbiAqIC0gcGFyc2VzIERPTSBzdHJjdHVyZSBmb3IgUGhvdG9Td2lwZSAocmV0cmlldmVzIGxhcmdlIGltYWdlIFVSTHMgYW5kIHNpemVzKVxyXG4gKiAtIEluaXRpYWxpemVzIFBob3RvU3dpcGVcclxuICpcclxuICpcclxuICogTG9hZGVyIG9wdGlvbnMgdXNlIHRoZSBzYW1lIG9iamVjdCBhcyBQaG90b1N3aXBlLCBhbmQgc3VwcG9ydHMgc3VjaCBvcHRpb25zOlxyXG4gKlxyXG4gKiBnYWxsZXJ5IC0gRWxlbWVudCB8IEVsZW1lbnRbXSB8IE5vZGVMaXN0IHwgc3RyaW5nIHNlbGVjdG9yIGZvciB0aGUgZ2FsbGVyeSBlbGVtZW50XHJcbiAqIGNoaWxkcmVuIC0gRWxlbWVudCB8IEVsZW1lbnRbXSB8IE5vZGVMaXN0IHwgc3RyaW5nIHNlbGVjdG9yIGZvciB0aGUgZ2FsbGVyeSBjaGlsZHJlblxyXG4gKlxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZUxpZ2h0Ym94IGV4dGVuZHMgUGhvdG9Td2lwZUJhc2Uge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IFtvcHRpb25zXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGVPcHRpb25zfSAqL1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIHRoaXMuX3VpZCA9IDA7XHJcbiAgICB0aGlzLnNob3VsZE9wZW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9wcmVsb2FkZWRDb250ZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMub25UaHVtYm5haWxzQ2xpY2sgPSB0aGlzLm9uVGh1bWJuYWlsc0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGxpZ2h0Ym94LCBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS5cclxuICAgKiBJdCdzIG5vdCBpbmNsdWRlZCBpbiB0aGUgbWFpbiBjb25zdHJ1Y3Rvciwgc28geW91IG1heSBiaW5kIGV2ZW50cyBiZWZvcmUgaXQuXHJcbiAgICovXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vIEJpbmQgY2xpY2sgZXZlbnRzIHRvIGVhY2ggZ2FsbGVyeVxyXG4gICAgZ2V0RWxlbWVudHNGcm9tT3B0aW9uKHRoaXMub3B0aW9ucy5nYWxsZXJ5LCB0aGlzLm9wdGlvbnMuZ2FsbGVyeVNlbGVjdG9yKVxyXG4gICAgICAuZm9yRWFjaCgoZ2FsbGVyeUVsZW1lbnQpID0+IHtcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaHVtYm5haWxzQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGVcclxuICAgKi9cclxuICBvblRodW1ibmFpbHNDbGljayhlKSB7XHJcbiAgICAvLyBFeGl0IGFuZCBhbGxvdyBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uIGlmOlxyXG4gICAgaWYgKHNwZWNpYWxLZXlVc2VkKGUpIC8vIC4uLiBpZiBjbGlja2VkIHdpdGggYSBzcGVjaWFsIGtleSAoY3RybC9jbWQuLi4pXHJcbiAgICAgICAgfHwgd2luZG93LnBzd3ApIHsgLy8gLi4uIGlmIFBob3RvU3dpcGUgaXMgYWxyZWFkeSBvcGVuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBib3RoIGNsaWVudFggYW5kIGNsaWVudFkgYXJlIDAgb3Igbm90IGRlZmluZWQsXHJcbiAgICAvLyB0aGUgZXZlbnQgaXMgbGlrZWx5IHRyaWdnZXJlZCBieSBrZXlib2FyZCxcclxuICAgIC8vIHNvIHdlIGRvIG5vdCBwYXNzIHRoZSBpbml0aWFsUG9pbnRcclxuICAgIC8vXHJcbiAgICAvLyBOb3RlIHRoYXQgc29tZSBzY3JlZW4gcmVhZGVycyBlbXVsYXRlIHRoZSBtb3VzZSBwb3NpdGlvbixcclxuICAgIC8vIHNvIGl0J3Mgbm90IHRoZSBpZGVhbCB3YXkgdG8gZGV0ZWN0IHRoZW0uXHJcbiAgICAvL1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludCB8IG51bGx9ICovXHJcbiAgICBsZXQgaW5pdGlhbFBvaW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG5cclxuICAgIGlmICghaW5pdGlhbFBvaW50LnggJiYgIWluaXRpYWxQb2ludC55KSB7XHJcbiAgICAgIGluaXRpYWxQb2ludCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsaWNrZWRJbmRleCA9IHRoaXMuZ2V0Q2xpY2tlZEluZGV4KGUpO1xyXG4gICAgY2xpY2tlZEluZGV4ID0gdGhpcy5hcHBseUZpbHRlcnMoJ2NsaWNrZWRJbmRleCcsIGNsaWNrZWRJbmRleCwgZSwgdGhpcyk7XHJcbiAgICAvKiogQHR5cGUge0RhdGFTb3VyY2V9ICovXHJcbiAgICBjb25zdCBkYXRhU291cmNlID0ge1xyXG4gICAgICBnYWxsZXJ5OiAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY2xpY2tlZEluZGV4ID49IDApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmxvYWRBbmRPcGVuKGNsaWNrZWRJbmRleCwgZGF0YVNvdXJjZSwgaW5pdGlhbFBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpbmRleCBvZiBnYWxsZXJ5IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZSBjbGljayBldmVudFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0Q2xpY2tlZEluZGV4KGUpIHtcclxuICAgIC8vIGxlZ2FjeSBvcHRpb25cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0Q2xpY2tlZEluZGV4Rm4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXRDbGlja2VkSW5kZXhGbi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrZWRUYXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZS50YXJnZXQpO1xyXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRzRnJvbU9wdGlvbihcclxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRTZWxlY3RvcixcclxuICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKGUuY3VycmVudFRhcmdldClcclxuICAgICk7XHJcbiAgICBjb25zdCBjbGlja2VkQ2hpbGRJbmRleCA9IGNoaWxkRWxlbWVudHMuZmluZEluZGV4KFxyXG4gICAgICBjaGlsZCA9PiBjaGlsZCA9PT0gY2xpY2tlZFRhcmdldCB8fCBjaGlsZC5jb250YWlucyhjbGlja2VkVGFyZ2V0KVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoY2xpY2tlZENoaWxkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBjbGlja2VkQ2hpbGRJbmRleDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuIHx8IHRoaXMub3B0aW9ucy5jaGlsZFNlbGVjdG9yKSB7XHJcbiAgICAgIC8vIGNsaWNrIHdhc24ndCBvbiBhIGNoaWxkIGVsZW1lbnRcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZXJlIGlzIG9ubHkgb25lIGl0ZW0gKHdoaWNoIGlzIHRoZSBnYWxsZXJ5KVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGFuZCBvcGVuIFBob3RvU3dpcGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEBwYXJhbSB7RGF0YVNvdXJjZX0gW2RhdGFTb3VyY2VdXHJcbiAgICogQHBhcmFtIHtQb2ludCB8IG51bGx9IFtpbml0aWFsUG9pbnRdXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgbG9hZEFuZE9wZW4oaW5kZXgsIGRhdGFTb3VyY2UsIGluaXRpYWxQb2ludCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGdhbGxlcnkgaXMgYWxyZWFkeSBvcGVuXHJcbiAgICBpZiAod2luZG93LnBzd3AgfHwgIXRoaXMub3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBnYWxsZXJ5IGVsZW1lbnQgaWYgZGF0YVNvdXJjZSBpcyBub3QgcHJvdmlkZWRcclxuICAgIGlmICghZGF0YVNvdXJjZSAmJiB0aGlzLm9wdGlvbnMuZ2FsbGVyeSAmJiB0aGlzLm9wdGlvbnMuY2hpbGRyZW4pIHtcclxuICAgICAgY29uc3QgZ2FsbGVyeUVsZW1lbnRzID0gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKHRoaXMub3B0aW9ucy5nYWxsZXJ5KTtcclxuICAgICAgaWYgKGdhbGxlcnlFbGVtZW50c1swXSkge1xyXG4gICAgICAgIGRhdGFTb3VyY2UgPSB7XHJcbiAgICAgICAgICBnYWxsZXJ5OiBnYWxsZXJ5RWxlbWVudHNbMF1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IGluaXRpYWwgaW5kZXhcclxuICAgIHRoaXMub3B0aW9ucy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIC8vIGRlZmluZSBvcHRpb25zIGZvciBQaG90b1N3aXBlIGNvbnN0cnVjdG9yXHJcbiAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbFBvaW50ZXJQb3MgPSBpbml0aWFsUG9pbnQ7XHJcblxyXG4gICAgdGhpcy5zaG91bGRPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucHJlbG9hZChpbmRleCwgZGF0YVNvdXJjZSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgdGhlIG1haW4gbW9kdWxlIGFuZCB0aGUgc2xpZGUgY29udGVudCBieSBpbmRleFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHBhcmFtIHtEYXRhU291cmNlfSBbZGF0YVNvdXJjZV1cclxuICAgKi9cclxuICBwcmVsb2FkKGluZGV4LCBkYXRhU291cmNlKSB7XHJcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgb3B0aW9ucy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgdGhlIG1haW4gbW9kdWxlXHJcbiAgICAvKiogQHR5cGUge1Byb21pc2U8VHlwZTxQaG90b1N3aXBlPj5bXX0gKi9cclxuICAgIGNvbnN0IHByb21pc2VBcnJheSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBzd3BNb2R1bGVUeXBlID0gdHlwZW9mIG9wdGlvbnMucHN3cE1vZHVsZTtcclxuICAgIGlmIChpc1Bzd3BDbGFzcyhvcHRpb25zLnBzd3BNb2R1bGUpKSB7XHJcbiAgICAgIHByb21pc2VBcnJheS5wdXNoKFByb21pc2UucmVzb2x2ZSgvKiogQHR5cGUge1R5cGU8UGhvdG9Td2lwZT59ICovIChvcHRpb25zLnBzd3BNb2R1bGUpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHBzd3BNb2R1bGVUeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Bzd3BNb2R1bGUgYXMgc3RyaW5nIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnKTtcclxuICAgIH0gZWxzZSBpZiAocHN3cE1vZHVsZVR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcHJvbWlzZUFycmF5LnB1c2goLyoqIEB0eXBlIHsoKSA9PiBQcm9taXNlPFR5cGU8UGhvdG9Td2lwZT4+fSAqLyAob3B0aW9ucy5wc3dwTW9kdWxlKSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHN3cE1vZHVsZSBpcyBub3QgdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgY3VzdG9tLWRlZmluZWQgcHJvbWlzZSwgaWYgYW55XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub3BlblByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8gYWxsb3cgZGV2ZWxvcGVycyB0byBwZXJmb3JtIHNvbWUgdGFzayBiZWZvcmUgb3BlbmluZ1xyXG4gICAgICBwcm9taXNlQXJyYXkucHVzaChvcHRpb25zLm9wZW5Qcm9taXNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLnByZWxvYWRGaXJzdFNsaWRlICE9PSBmYWxzZSAmJiBpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuX3ByZWxvYWRlZENvbnRlbnQgPSBsYXp5TG9hZFNsaWRlKGluZGV4LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXYWl0IHRpbGwgYWxsIHByb21pc2VzIHJlc29sdmUgYW5kIG9wZW4gUGhvdG9Td2lwZVxyXG4gICAgY29uc3QgdWlkID0gKyt0aGlzLl91aWQ7XHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlQXJyYXkpLnRoZW4oKGl0ZXJhYmxlTW9kdWxlcykgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zaG91bGRPcGVuKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbk1vZHVsZSA9IGl0ZXJhYmxlTW9kdWxlc1swXTtcclxuICAgICAgICB0aGlzLl9vcGVuUGhvdG9zd2lwZShtYWluTW9kdWxlLCB1aWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtUeXBlPFBob3RvU3dpcGU+IHwgeyBkZWZhdWx0OiBUeXBlPFBob3RvU3dpcGU+IH19IG1vZHVsZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1aWRcclxuICAgKi9cclxuICBfb3BlblBob3Rvc3dpcGUobW9kdWxlLCB1aWQpIHtcclxuICAgIC8vIENhbmNlbCBvcGVuaW5nIGlmIFVJRCBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50IG9uZVxyXG4gICAgLy8gKGlmIHVzZXIgY2xpY2tlZCBvbiBhbm90aGVyIGdhbGxlcnkgaXRlbSBiZWZvcmUgY3VycmVudCB3YXMgbG9hZGVkKS5cclxuICAgIC8vXHJcbiAgICAvLyBPciBpZiBzaG91bGRPcGVuIGZsYWcgaXMgc2V0IHRvIGZhbHNlXHJcbiAgICAvLyAoZGV2ZWxvcGVyIG1heSBtb2RpZnkgaXQgdmlhIHB1YmxpYyBBUEkpXHJcbiAgICBpZiAodWlkICE9PSB0aGlzLl91aWQgJiYgdGhpcy5zaG91bGRPcGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3VsZE9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBQaG90b1N3aXBlIGlzIGFscmVhZHkgb3BlblxyXG4gICAgaWYgKHdpbmRvdy5wc3dwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhc3MgZGF0YSB0byBQaG90b1N3aXBlIGFuZCBvcGVuIGluaXRcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7UGhvdG9Td2lwZX1cclxuICAgICAqL1xyXG4gICAgY29uc3QgcHN3cCA9IHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgPyBuZXcgbW9kdWxlLmRlZmF1bHQodGhpcy5vcHRpb25zKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgOiBuZXcgbW9kdWxlKHRoaXMub3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgd2luZG93LnBzd3AgPSBwc3dwO1xyXG5cclxuICAgIC8vIG1hcCBsaXN0ZW5lcnMgZnJvbSBMaWdodGJveCB0byBQaG90b1N3aXBlIENvcmVcclxuICAgIC8qKiBAdHlwZSB7KGtleW9mIFBob3RvU3dpcGVFdmVudHNNYXApW119ICovXHJcbiAgICAoT2JqZWN0LmtleXModGhpcy5fbGlzdGVuZXJzKSkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0/LmZvckVhY2goKGZuKSA9PiB7XHJcbiAgICAgICAgcHN3cC5vbihuYW1lLCAvKiogQHR5cGUge0V2ZW50Q2FsbGJhY2s8dHlwZW9mIG5hbWU+fSAqLyhmbikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNhbWUgd2l0aCBmaWx0ZXJzXHJcbiAgICAvKiogQHR5cGUgeyhrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcClbXX0gKi9cclxuICAgIChPYmplY3Qua2V5cyh0aGlzLl9maWx0ZXJzKSkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBwc3dwLmFkZEZpbHRlcihuYW1lLCBmaWx0ZXIuZm4sIGZpbHRlci5wcmlvcml0eSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3ByZWxvYWRlZENvbnRlbnQpIHtcclxuICAgICAgcHN3cC5jb250ZW50TG9hZGVyLmFkZFRvQ2FjaGUodGhpcy5fcHJlbG9hZGVkQ29udGVudCk7XHJcbiAgICAgIHRoaXMuX3ByZWxvYWRlZENvbnRlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5vbignZGVzdHJveScsICgpID0+IHtcclxuICAgICAgLy8gY2xlYW4gdXAgcHVibGljIHZhcmlhYmxlc1xyXG4gICAgICB0aGlzLnBzd3AgPSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlbGV0ZSB3aW5kb3cucHN3cDtcclxuICAgIH0pO1xyXG5cclxuICAgIHBzd3AuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5iaW5kcyBhbGwgZXZlbnRzLCBjbG9zZXMgUGhvdG9Td2lwZSBpZiBpdCdzIG9wZW4uXHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucHN3cD8uZGVzdHJveSgpO1xyXG5cclxuICAgIHRoaXMuc2hvdWxkT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgZ2V0RWxlbWVudHNGcm9tT3B0aW9uKHRoaXMub3B0aW9ucy5nYWxsZXJ5LCB0aGlzLm9wdGlvbnMuZ2FsbGVyeVNlbGVjdG9yKVxyXG4gICAgICAuZm9yRWFjaCgoZ2FsbGVyeUVsZW1lbnQpID0+IHtcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaHVtYm5haWxzQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1N3aXBlTGlnaHRib3g7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBcIjMzMmUzYmNjZjRlZDNiMGRiNTZiXCIgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbi8vIGRhdGEtd2VicGFjayBpcyBub3QgdXNlZCBhcyBidWlsZCBoYXMgbm8gdW5pcXVlTmFtZVxuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCBQaG90b1N3aXBlTGlnaHRib3ggZnJvbSAnLi92ZW5kb3IvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtbGlnaHRib3guZXNtLmpzJztcclxuaW1wb3J0IFBob3RvU3dpcGVDc3MgZnJvbSAnLi92ZW5kb3IvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcydcclxuaW1wb3J0ICcuL3RlbXBsYXRlLmh0bWwnXHJcbmltcG9ydCBmYXZpY29uIGZyb20gJy4vYXNzZXRzL2Zhdmljb24uaWNvJ1xyXG5cclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICByLmtleXMoKS5mb3JFYWNoKHIpO1xyXG59XHJcblxyXG4vLyDQmNC80L/QvtGA0YIg0LLRgdC10YUgU1ZHINC40Lcg0L/QsNC/0LrQuCDRgdC/0YDQsNC50YLQsFxyXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9zdmcnLCBmYWxzZSwgL1xcLnN2ZyQvKSk7XHJcblxyXG4vLyDQuNC80L/QvtGA0YLQuNGA0YPQtdC8INCy0YHQtSDQutCw0YDRgtC40L3QutC4INC40Lcgc3JjL2Fzc2V0c1xyXG5mdW5jdGlvbiBpbXBvcnRBbGxJbWFnZXMocikge1xyXG4gIHJldHVybiByLmtleXMoKS5tYXAocik7XHJcbn1cclxuXHJcbi8vINC40YnQtdC8INGE0LDQudC70Ysg0YEg0YDQsNGB0YjQuNGA0LXQvdC40Y/QvNC4IChwbmcsIGpwZywganBlZywgc3ZnLCBnaWYsIHdlYnApXHJcbmltcG9ydEFsbEltYWdlcyhyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfGdpZnx3ZWJwKSQvKSk7XHJcblxyXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcucmV2aWV3cy1zbGlkZXInLCB7XHJcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAtMTAwLFxyXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnJldmlld3Mtc2xpZGVyX19uZXh0JyxcclxuICAgIHByZXZFbDogJy5yZXZpZXdzLXNsaWRlcl9fcHJldicsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzY2VuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NlbmUnKTtcclxuc2NlbmVzLmZvckVhY2goKHNjZW5lKSA9PiB7XHJcbmNvbnN0IHBhcmFsbGF4SW5zdGFuY2UgID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcclxuXHJcbmNvbnN0IGxpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XHJcbiAgZ2FsbGVyeTogJyNwcm9kdWN0cy1nYWxsZXJ5JyxcclxuICBjaGlsZHJlbjogJ2EnLFxyXG4gIHBzd3BNb2R1bGU6ICgpID0+IGltcG9ydCgnLi92ZW5kb3IvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuZXNtLmpzJyksXHJcbn0pO1xyXG5saWdodGJveC5pbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt0aGlzLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT1bXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdbbG9hZGluZz1sYXp5XVwiKSksdD1bXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGF6eS1iZ1wiKSk7aWYoZS5sZW5ndGg+MCl7bGV0IG49bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGUsdCl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUuaXNJbnRlcnNlY3Rpbmcpe2xldCB0PWUudGFyZ2V0O3Quc3JjPXQuZGF0YXNldC5zcmMsbi51bm9ic2VydmUodCl9fSl9LHtyb290TWFyZ2luOic0MDBweCAwcHgnLHRocmVzaG9sZDowLjAxfSk7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe24ub2JzZXJ2ZShlKX0pfXQubGVuZ3RoPjAmJnQuZm9yRWFjaChmdW5jdGlvbihlKXtsZXQgdD1lO3QuY2xhc3NMaXN0LnJlbW92ZShcImxhenktYmdcIiksdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJ1cmwoXCIrdC5kYXRhc2V0LnNyYytcIilcIn0pfSwzZTMpfSk7Il0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0YWdOYW1lIiwiYXBwZW5kVG9FbCIsImVsIiwiZG9jdW1lbnQiLCJhcHBlbmRDaGlsZCIsInRvVHJhbnNmb3JtU3RyaW5nIiwieCIsInkiLCJzY2FsZSIsInByb3BWYWx1ZSIsImNvbmNhdCIsInVuZGVmaW5lZCIsInNldFdpZHRoSGVpZ2h0IiwidyIsImgiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiTE9BRF9TVEFURSIsIklETEUiLCJMT0FESU5HIiwiTE9BREVEIiwiRVJST1IiLCJzcGVjaWFsS2V5VXNlZCIsImUiLCJidXR0b24iLCJjdHJsS2V5IiwibWV0YUtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiZ2V0RWxlbWVudHNGcm9tT3B0aW9uIiwib3B0aW9uIiwibGVnYWN5U2VsZWN0b3IiLCJwYXJlbnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJlbGVtZW50cyIsIkVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImZyb20iLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpc1Bzd3BDbGFzcyIsImZuIiwicHJvdG90eXBlIiwiZ29UbyIsImlzU2FmYXJpIiwibmF2aWdhdG9yIiwidmVuZG9yIiwibWF0Y2giLCJQaG90b1N3aXBlRXZlbnQiLCJ0eXBlIiwiZGV0YWlscyIsIl9jbGFzc0NhbGxDaGVjayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiRXZlbnRhYmxlIiwiX2xpc3RlbmVycyIsIl9maWx0ZXJzIiwicHN3cCIsIm9wdGlvbnMiLCJhZGRGaWx0ZXIiLCJuYW1lIiwicHJpb3JpdHkiLCJfdGhpcyRfZmlsdGVycyRuYW1lIiwiX3RoaXMkX2ZpbHRlcnMkbmFtZTIiLCJfdGhpcyRwc3dwIiwicHVzaCIsInNvcnQiLCJmMSIsImYyIiwicmVtb3ZlRmlsdGVyIiwiZmlsdGVyIiwiYXBwbHlGaWx0ZXJzIiwiX3RoaXMiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJfdGhpcyRfZmlsdGVycyRuYW1lMyIsImZvckVhY2giLCJhcHBseSIsIm9uIiwiX3RoaXMkX2xpc3RlbmVycyRuYW1lIiwiX3RoaXMkcHN3cDIiLCJvZmYiLCJfdGhpcyRwc3dwMyIsImxpc3RlbmVyIiwiZGlzcGF0Y2giLCJfdGhpczIiLCJfdGhpcyRfbGlzdGVuZXJzJG5hbWUyIiwiZXZlbnQiLCJjYWxsIiwiUGxhY2Vob2xkZXIiLCJpbWFnZVNyYyIsImNvbnRhaW5lciIsImVsZW1lbnQiLCJpbWdFbCIsImRlY29kaW5nIiwiYWx0Iiwic3JjIiwic2V0QXR0cmlidXRlIiwic2V0RGlzcGxheWVkU2l6ZSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsImRlc3Ryb3kiLCJfdGhpcyRlbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZSIsIkNvbnRlbnQiLCJpdGVtRGF0YSIsImluc3RhbmNlIiwiaW5kZXgiLCJkYXRhIiwicGxhY2Vob2xkZXIiLCJzbGlkZSIsImRpc3BsYXllZEltYWdlV2lkdGgiLCJkaXNwbGF5ZWRJbWFnZUhlaWdodCIsIk51bWJlciIsImlzQXR0YWNoZWQiLCJoYXNTbGlkZSIsImlzRGVjb2RpbmciLCJzdGF0ZSIsImNvbnRlbnQiLCJyZW1vdmVQbGFjZWhvbGRlciIsIl90aGlzMyIsImtlZXBQbGFjZWhvbGRlciIsInNldFRpbWVvdXQiLCJsb2FkIiwiaXNMYXp5IiwicmVsb2FkIiwidXNlUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclNyYyIsIm1zcmMiLCJpc0ZpcnN0U2xpZGUiLCJwbGFjZWhvbGRlckVsIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJpc0ltYWdlQ29udGVudCIsImxvYWRJbWFnZSIsImlubmVySFRNTCIsImh0bWwiLCJ1cGRhdGVDb250ZW50U2l6ZSIsIl90aGlzNCIsIl90aGlzJGRhdGEkc3JjIiwiX3RoaXMkZGF0YSRhbHQiLCJpbWFnZUVsZW1lbnQiLCJ1cGRhdGVTcmNzZXRTaXplcyIsInNyY3NldCIsImNvbXBsZXRlIiwib25Mb2FkZWQiLCJvbmxvYWQiLCJvbmVycm9yIiwib25FcnJvciIsInNldFNsaWRlIiwiaXNBY3RpdmUiLCJoZWF2eUFwcGVuZGVkIiwiYXBwZW5kIiwiZGlzcGxheUVycm9yIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImlzSW5pdGlhbFNpemVVcGRhdGUiLCJpc1pvb21hYmxlIiwiaW1hZ2UiLCJzaXplc1dpZHRoIiwiZGF0YXNldCIsImxhcmdlc3RVc2VkU2l6ZSIsInBhcnNlSW50Iiwic2l6ZXMiLCJTdHJpbmciLCJsYXp5TG9hZCIsIl90aGlzJGluc3RhbmNlJG9wdGlvbiIsIl90aGlzJGluc3RhbmNlJG9wdGlvbjIiLCJlcnJvck1zZ0VsIiwiaW5uZXJUZXh0IiwiZXJyb3JNc2ciLCJfdGhpczUiLCJzdXBwb3J0c0RlY29kZSIsImRlY29kZSIsImFwcGVuZEltYWdlIiwiYWN0aXZhdGUiLCJob2xkZXJFbGVtZW50IiwiZGVhY3RpdmF0ZSIsImdldFZpZXdwb3J0U2l6ZSIsImdldFZpZXdwb3J0U2l6ZUZuIiwibmV3Vmlld3BvcnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInBhcnNlUGFkZGluZ09wdGlvbiIsInByb3AiLCJ2aWV3cG9ydFNpemUiLCJwYWRkaW5nVmFsdWUiLCJwYWRkaW5nRm4iLCJwYWRkaW5nIiwibGVnYWN5UHJvcE5hbWUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZ2V0UGFuQXJlYVNpemUiLCJNQVhfSU1BR0VfV0lEVEgiLCJab29tTGV2ZWwiLCJwYW5BcmVhU2l6ZSIsImVsZW1lbnRTaXplIiwiZml0IiwiZmlsbCIsInZGaWxsIiwiaW5pdGlhbCIsInNlY29uZGFyeSIsIm1heCIsIm1pbiIsInVwZGF0ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiaFJhdGlvIiwidlJhdGlvIiwiTWF0aCIsIl9nZXRJbml0aWFsIiwiX2dldFNlY29uZGFyeSIsIl9nZXRNYXgiLCJ6b29tTGV2ZWxzIiwic2xpZGVEYXRhIiwiX3BhcnNlWm9vbUxldmVsT3B0aW9uIiwib3B0aW9uUHJlZml4Iiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwiY3Vyclpvb21MZXZlbCIsImxhenlMb2FkRGF0YSIsImNyZWF0ZUNvbnRlbnRGcm9tRGF0YSIsInpvb21MZXZlbCIsImNlaWwiLCJsYXp5TG9hZFNsaWRlIiwiZ2V0SXRlbURhdGEiLCJQaG90b1N3aXBlQmFzZSIsIl9FdmVudGFibGUiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiZ2V0TnVtSXRlbXMiLCJfdGhpcyRvcHRpb25zIiwibnVtSXRlbXMiLCJkYXRhU291cmNlIiwiaXRlbXMiLCJfZ2V0R2FsbGVyeURPTUVsZW1lbnRzIiwiZ2FsbGVyeSIsIl90aGlzJG9wdGlvbnMyIiwiZGF0YVNvdXJjZUl0ZW0iLCJfZG9tRWxlbWVudFRvSXRlbURhdGEiLCJnYWxsZXJ5RWxlbWVudCIsIl90aGlzJG9wdGlvbnMzIiwiX3RoaXMkb3B0aW9uczQiLCJjaGlsZHJlbiIsImNoaWxkU2VsZWN0b3IiLCJsaW5rRWwiLCJxdWVyeVNlbGVjdG9yIiwicHN3cFNyYyIsImhyZWYiLCJwc3dwU3Jjc2V0IiwicHN3cFdpZHRoIiwicHN3cEhlaWdodCIsInBzd3BUeXBlIiwidGh1bWJuYWlsRWwiLCJfdGh1bWJuYWlsRWwkZ2V0QXR0cmkiLCJjdXJyZW50U3JjIiwiZ2V0QXR0cmlidXRlIiwicHN3cENyb3BwZWQiLCJjcm9wcGVkIiwidGh1bWJDcm9wcGVkIiwiUGhvdG9Td2lwZUxpZ2h0Ym94IiwiX1Bob3RvU3dpcGVCYXNlIiwiX3RoaXM2IiwiX3VpZCIsInNob3VsZE9wZW4iLCJfcHJlbG9hZGVkQ29udGVudCIsIm9uVGh1bWJuYWlsc0NsaWNrIiwiYmluZCIsImluaXQiLCJfdGhpczciLCJnYWxsZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbFBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGlja2VkSW5kZXgiLCJnZXRDbGlja2VkSW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwibG9hZEFuZE9wZW4iLCJnZXRDbGlja2VkSW5kZXhGbiIsImNsaWNrZWRUYXJnZXQiLCJ0YXJnZXQiLCJjaGlsZEVsZW1lbnRzIiwiY2xpY2tlZENoaWxkSW5kZXgiLCJmaW5kSW5kZXgiLCJjaGlsZCIsImNvbnRhaW5zIiwiZ2FsbGVyeUVsZW1lbnRzIiwiaW5pdGlhbFBvaW50ZXJQb3MiLCJwcmVsb2FkIiwiX3RoaXM4IiwicHJvbWlzZUFycmF5IiwicHN3cE1vZHVsZVR5cGUiLCJfdHlwZW9mIiwicHN3cE1vZHVsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiRXJyb3IiLCJvcGVuUHJvbWlzZSIsInByZWxvYWRGaXJzdFNsaWRlIiwidWlkIiwiYWxsIiwidGhlbiIsIml0ZXJhYmxlTW9kdWxlcyIsIm1haW5Nb2R1bGUiLCJfb3BlblBob3Rvc3dpcGUiLCJtb2R1bGUiLCJfdGhpczkiLCJrZXlzIiwiY29udGVudExvYWRlciIsImFkZFRvQ2FjaGUiLCJfdGhpczAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUGhvdG9Td2lwZUNzcyIsImZhdmljb24iLCJpbXBvcnRBbGwiLCJyIiwicmVxdWlyZSIsImNvbnRleHQiLCJpbXBvcnRBbGxJbWFnZXMiLCJtYXAiLCJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImNlbnRlcmVkU2xpZGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNjZW5lcyIsInNjZW5lIiwicGFyYWxsYXhJbnN0YW5jZSIsIlBhcmFsbGF4IiwibGlnaHRib3giLCJ0IiwibiIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImNsYXNzTGlzdCIsImJhY2tncm91bmRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=