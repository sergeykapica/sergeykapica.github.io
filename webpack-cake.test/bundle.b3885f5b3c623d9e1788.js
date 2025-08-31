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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Cake Shop</title>\r\n  <meta name=\"description\" content=\"Cake Shop best and fresh\">\r\n  <meta name=\"keywords\" content=\"Cake, Shop\">\r\n  <meta name=\"author\" content=\"Marsel Firsov\">\r\n  <link rel=\"canonical\" href=\"/\">\r\n  <meta property=\"og:type\" content=\"website\">\r\n  <meta property=\"og:url\" content=\"/\">\r\n  <meta property=\"og:title\" content=\"Cake Shop\">\r\n  <meta property=\"og:description\" content=\"Cake Shop best and fresh\">\r\n  <meta property=\"og:image\" content=\"assets/favicon.ico\">\r\n  <meta property=\"og:site_name\" content=\"Cake Shop\">\r\n  <meta property=\"og:locale\" content=\"ru_RU\">\r\n  <!-- favicon -->\r\n  <link rel=\"icon\" href=\"assets/favicon.ico\" type=\"image/x-icon\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css\"/>\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n\r\n    <div class=\"container flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between text-white\">\r\n      <a href=\"#!\" class=\"text-[21px] font-medium leading-[1.43em]\">Парк сладкого</a>\r\n      <div class=\"flex items-center gap-5 md:gap-[69px]\">\r\n        <div class=\"flex gap-3\">\r\n          <svg class=\"w-4 h-4 sm:w-[17px] sm:h-[23px]\">\r\n\r\n              <use xlink:href=\"assets/sprite.svg#location\"></use>\r\n\r\n          </svg>\r\n          <p class=\"text-[13px] leading-[1.5em]\">г. Стамбул,<br>ул. Семсетина Гунала 31</p>\r\n        </div>\r\n\r\n        <div class=\"flex gap-3\">\r\n          <svg class=\"relative top-1 sm:top-[6px] w-4 h-4 sm:w-[19px] sm:h-[19px]\">\r\n\r\n              <use xlink:href=\"assets/sprite.svg#phone\"></use>\r\n\r\n          </svg>\r\n          <div>\r\n            <a href=\"tel:+88128449549\" class=\"sm:text-xl leading-[1.52em] font-bold\">8 (812) 844-95-49</a>\r\n            <p class=\"text-[13px] leading-[1.5em]\">Ежедневно с 9:00 до 20:00</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </header>\r\n  <main>\r\n    <section class=\"section welcome-section relative pt-[210px] pb-[233px] md:pt-[420px] md:pb-[465px] overflow-hidden\">\r\n      <div class=\"welcome-section__bg\"></div>\r\n      <div class=\"container text-white relative z-10\">\r\n        <div class=\"max-w-[647px]\">\r\n          <span class=\"section__sub-headline\">вкуснейшие</span>\r\n          <h1 class=\"my-5 md:my-6 font-bold text-2xl md:text-[48px] leading-[1.25em] tracking-[-1px]\">Пирожные и капкейки от 50 $/шт. с доставкой по Стамбулу</h1>\r\n          <p class=\"text-lg md:text-2xl leading-[1.43em] mb-5 md:mb-[40px]\">Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.</p>\r\n          <div class=\"flex flex-col sm:flex-row items-center gap-5\">\r\n            <a href=\"#!\" class=\"button-1 !py-[15px] !px-[25px] md:!py-[30px] md:!px-[50px]\">Перейти в каталог</a>\r\n            <span class=\"text-[15px] leading-[1.6em]\">9 различных<br>видов на выбор</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute top-0 left-0 -translate-x-[65px] translate-y-[202px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/berry.png\" alt=\"Berry 1\" data-depth=\"0.3\" class=\"w-[195px]\">\r\n      </div>\r\n\r\n      <div class=\"absolute bottom-0 left-0 -translate-x-[84px] -translate-y-[50px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/leaf.png\" data-depth=\"0.4\" class=\"w-[275px]\">\r\n      </div>\r\n\r\n      <div class=\"absolute top-0 right-0 translate-x-[53px] translate-y-[130px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/berry_1.png\" data-depth=\"0.3\" class=\"w-[170px]\">\r\n      </div>\r\n\r\n      <div class=\"absolute bottom-0 right-0 -translate-x-[165px] -translate-y-[210px] scene z-0\">\r\n        <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/berry_2.png\" data-depth=\"0.4\" class=\"w-[195px]\">\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"section relative bg-white\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"overflow-hidden\">\r\n        <div class=\"container relative\">\r\n          <h2 class=\"section__headline mb-[40px] md:mb-[80px]\">Для любых событий и дорогих вам людей </h2>\r\n          <div class=\"product-list grid sm:grid-cols-2 lg:grid-cols-3 gap-5\">\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_1.jpg\" alt=\"Product 1\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Кремовый замок</h3>\r\n                <p class=\"product-list__card-description mb-6\">Нежный крем любого цвета на выбор, вафельная основа</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_2.jpg\" alt=\"Product 2\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Малиновый рай</h3>\r\n                <p class=\"product-list__card-description mb-6\">Воздушный крем, темная основа и ягода малины</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_3.jpg\" alt=\"Product 3\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Фейерверк</h3>\r\n                <p class=\"product-list__card-description mb-6\">Разноцветные крем, с бисквитной основой</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_4.jpg\" alt=\"Product 4\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Шоколадный мир</h3>\r\n                <p class=\"product-list__card-description mb-6\">Ореховая стружка, нежный крем и шоколадная основа</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_5.jpg\" alt=\"Product 5\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Слезы дракона</h3>\r\n                <p class=\"product-list__card-description mb-6\">Нежный крем любого цвета на выбор, вафельная основа</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_6.jpg\" alt=\"Product 6\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Летняя фантазия</h3>\r\n                <p class=\"product-list__card-description mb-6\">Украшения в форме сердец, для любимого человека</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_7.jpg\" alt=\"Product 7\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Мыс безумия</h3>\r\n                <p class=\"product-list__card-description mb-6\">Разноцветная основа, стружка и нежный крем</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_8.jpg\" alt=\"Product 8\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Облачная сказка</h3>\r\n                <p class=\"product-list__card-description mb-6\">Светлая основа, нежный крем со стружкой сверху</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"product-list__card\">\r\n              <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product_9.jpg\" alt=\"Product 9\" class=\"rounded-t-[10px] w-full h-[245px] object-cover\">\r\n              <div class=\"product-list__card-content\">\r\n                <h3 class=\"product-list__card-headline mb-3\">Темный рыцарь</h3>\r\n                <p class=\"product-list__card-description mb-6\">Тёмная основа, нежный крем и вкусные шарики</p>\r\n                <div class=\"inline-block mt-auto\">\r\n                  <span class=\"block text-grey-4 text-xl md:text-2xl leading-[1.5em] font-medium\">50 $/шт.</span>\r\n                  <a href=\"#!\" class=\"button-1 mt-[14px]\">Заказать</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"absolute top-0 left-0 -translate-x-[165px] translate-y-[214px] scene z-0\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product-berry.png\" alt=\"Product Berry 1\" data-depth=\"0.3\">\r\n          </div>\r\n\r\n          <div class=\"absolute bottom-0 left-0 -translate-x-[145px] -translate-y-[420px] scene z-0\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product-leaf.png\" data-depth=\"0.3\" alt=\"Product Leaf 1\">\r\n          </div>\r\n\r\n          <div class=\"absolute bottom-0 right-0 translate-x-[160px] -translate-y-[700px] scene z-0\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/product-leaf-2.png\" data-depth=\"0.3\" alt=\"Product Leaf 2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute inset-x-0 -bottom-1 h-2 bg-white\"></div>\r\n    </section>\r\n\r\n    <section class=\"relative pt-[300px] lg:pt-[409px] lg:pb-[459px] overflow-hidden text-white\">\r\n      <div class=\"absolute top-0 w-full h-[330px] photo-bg-start z-20 lazy-bg\" data-src=\"./assets/photo-bg-start.png\"></div>\r\n      <div class=\"container flex flex-col gap-10 lg:block relative z-10\">\r\n        <div class=\"absolute top-0 left-0 -translate-x-[26px] -translate-y-[49px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/feature-leaf.png\" data-depth=\"0.3\" alt=\"Feature Leaf\" class=\"w-[110px]\">\r\n        </div>\r\n        <div class=\"absolute top-0 right-0 translate-x-[152px] -translate-y-[100px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/feature-berry.png\" data-depth=\"0.3\" alt=\"Feature Berry\" class=\"w-[152px]\">\r\n        </div>\r\n        <div class=\"lg:absolute lg:top-[-90px] lg:left-[-406px] order-2\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/phone1.png\" alt=\"Phone\" class=\"w-[986px]\">\r\n        </div>\r\n        <div class=\"lg:max-w-[480px] lg:float-right relative order-1 text-center md:text-left\">\r\n          <span class=\"section__sub-headline\">Не нашли то что нужно?</span>\r\n          <h2 class=\"section__headline !text-white md:!text-left my-5 lg:my-6\">Приготовим заказ любой сложности по фото или эскизу</h2>\r\n          <p class=\"text-lg md:text-[21px] leading-[1.43em] tracking-[-0.2px] mb-5 md:mb-[40px]\">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>\r\n          <a href=\"#!\" class=\"button-1 !py-[15px] !px-[25px] md:!py-[30px] md:!px-[50px]\">Загрузить фотографию</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute bottom-0 w-full h-[489px] photo-bg-end z-20 lazy-bg\" data-src=\"./assets/photo-bg-end.png\"></div>\r\n    </section>\r\n\r\n    <section class=\"bg-white relative z-30\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"container flex flex-col lg:flex-row items-center gap-10 lg:gap-0\">\r\n        <div class=\"lg:max-w-[580px] text-center md:text-left\">\r\n          <span class=\"section__sub-headline\">Кто будет готовить?</span>\r\n          <h2 class=\"section__headline md:!text-left mt-4 md:mt-6 mb-5 md:mb-[36px]\">Лично приготовлю и всё красиво упакую для вашего события</h2>\r\n          <ul class=\"section__list space-y-5 md:space-y-[30px] max-w-[438px] mb-[25px] md:mb-[50px] text-left mx-auto md:mx-0\">\r\n            <li>\r\n              Проконсультирую по выбору капкейков и придумаю нестандартную идею\r\n            </li>\r\n            <li>\r\n              Приготовлю капкейки для вашего события, которые обязательно всем понравятся \r\n            </li>\r\n            <li>\r\n              Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок\r\n            </li>\r\n          </ul>\r\n          <a href=\"#!\" class=\"button-1 !py-[15px] !px-[25px] md:!py-[30px] md:!px-[50px]\">Задать вопрос Юлии</a>\r\n        </div>\r\n        <div class=\"relative\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/Group2.png\" alt=\"Women\">\r\n          <div class=\"absolute bottom-10 lg:bottom-[162px] left-1/2 lg:left-[-92px] -translate-x-1/2 lg:translate-x-0\">\r\n            <div class=\"w-[287px] h-[60px] bg-grey-3 flex items-center justify-center text-white text-xl md:text-2xl tracking-[-0.3px] font-medium skew-x-[-8deg] rounded-[6px]\"><span class=\"skew-x-[8deg]\">Юлия Кондратьева</span></div>\r\n            <div class=\"w-[218px] h-[52px] mx-auto bg-grey-2 flex items-center justify-center text-grey-3 text-base md:text-lg tracking-[1px] uppercase skew-x-[-8deg] rounded-b-[6px]\"><span class=\"skew-x-[8deg]\">ваш кондитер</span></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"relative\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"pt-[300px] pb-[238px] lg:pb-[308px] overflow-hidden text-white\">\r\n        <div class=\"absolute top-0 w-full h-[330px] reviews-bg-start z-20 lazy-bg\" data-src=\"./assets/reviews-bg-start.png\"></div>\r\n        <div class=\"container relative z-10\">\r\n          <div class=\"absolute top-0 left-0 -translate-x-[126px] -translate-y-[30px] scene z-20\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/reviews-leaf.png\" data-depth=\"0.3\" alt=\"Feature Leaf\" class=\"w-[126px]\">\r\n          </div>\r\n          <div class=\"absolute top-0 right-0 translate-x-[95px] translate-y-[115px] scene z-20\">\r\n            <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/reviews-berry.png\" data-depth=\"0.3\" alt=\"Feature Berry\" class=\"w-[152px]\">\r\n          </div>\r\n          <h2 class=\"section__headline !text-white mb-[40px] md:mb-[80px]\">Почитайте отзывы довольных клиентов</h2>\r\n          <div class=\"swiper reviews-slider !overflow-visible\">\r\n            <!-- Additional required wrapper -->\r\n            <div class=\"swiper-wrapper mb-[35px] lg:mb-[70px]\">\r\n              <!-- Slides -->\r\n              <div class=\"swiper-slide reviews-slider__slide\">\r\n                <div class=\"flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white px-6 py-5 md:px-[143px] md:py-[70px] text-grey-3 rounded-[5px] border border-[2px] border-[#E2EAF2] shadow-[2px_8px_16px_rgba(194,198,208,0.06)]\">\r\n                  <div class=\"lg:max-w-[460px] order-2 lg:order-1\">\r\n                    <svg class=\"w-5 h-5 md:w-[40px] md:h-[40px] text-blue mx-auto mt-5 md:m-0\">\r\n\r\n                        <use xlink:href=\"assets/sprite.svg#quote\"></use>\r\n\r\n                    </svg>\r\n                    <h2 class=\"text-xl md:text-[30px] leading-[1.43em] font-medium text-center md:text-left my-5 md:my-6\">«Результат дико порадовал, друзья были в восторге»</h2>\r\n                    <p class=\"text-[15px] leading-[1.7em] mb-5 md:mb-6\">«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                    <a href=\"#!\" class=\"inline-block text-[14px] leading-[1.5em] text-[#4A94FF] hover:text-yellow hover:border-yellow transition-colors duration-150 border-b border-b-[#4A94FF] border-dashed pb-[1px]\">Читать отзыв полностью</a>\r\n                  </div>\r\n                  <div class=\"shrink-0 text-center order-1 lg:order-2\">\r\n                    <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/client.png\" alt=\"Client\" class=\"w-[200px] h-[200px] md:w-[380px] md:h-[380px] border border-grey-2 rounded-full mb-[30px]\">\r\n                    <h3 class=\"text-[21px] leading-[1.43em] font-medium text-grey-3\">Ирина Ларионова</h3>\r\n                    <span class=\"text-[#A6AEB6] leading-[1.7em]\">Стамбул</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide reviews-slider__slide\">\r\n                <div class=\"flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white px-6 py-5 md:px-[143px] md:py-[70px] text-grey-3 rounded-[5px] border border-[2px] border-[#E2EAF2] shadow-[2px_8px_16px_rgba(194,198,208,0.06)]\">\r\n                  <div class=\"lg:max-w-[460px] order-2 lg:order-1\">\r\n                    <svg class=\"w-5 h-5 md:w-[40px] md:h-[40px] text-blue mx-auto mt-5 md:m-0\">\r\n\r\n                        <use xlink:href=\"assets/sprite.svg#quote\"></use>\r\n\r\n                    </svg>\r\n                    <h2 class=\"text-xl md:text-[30px] leading-[1.43em] font-medium text-center md:text-left my-5 md:my-6\">«Результат дико порадовал, друзья были в восторге»</h2>\r\n                    <p class=\"text-[15px] leading-[1.7em] mb-5 md:mb-6\">«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                    <a href=\"#!\" class=\"inline-block text-[14px] leading-[1.5em] text-[#4A94FF] hover:text-yellow hover:border-yellow transition-colors duration-150 border-b border-b-[#4A94FF] border-dashed pb-[1px]\">Читать отзыв полностью</a>\r\n                  </div>\r\n                  <div class=\"shrink-0 text-center order-1 lg:order-2\">\r\n                    <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/client.png\" alt=\"Client\" class=\"w-[200px] h-[200px] md:w-[380px] md:h-[380px] border border-grey-2 rounded-full mb-[30px]\">\r\n                    <h3 class=\"text-[21px] leading-[1.43em] font-medium text-grey-3\">Ирина Ларионова</h3>\r\n                    <span class=\"text-[#A6AEB6] leading-[1.7em]\">Стамбул</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide reviews-slider__slide\">\r\n                <div class=\"flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white px-6 py-5 md:px-[143px] md:py-[70px] text-grey-3 rounded-[5px] border border-[2px] border-[#E2EAF2] shadow-[2px_8px_16px_rgba(194,198,208,0.06)]\">\r\n                  <div class=\"lg:max-w-[460px] order-2 lg:order-1\">\r\n                    <svg class=\"w-5 h-5 md:w-[40px] md:h-[40px] text-blue mx-auto mt-5 md:m-0\">\r\n\r\n                        <use xlink:href=\"assets/sprite.svg#quote\"></use>\r\n\r\n                    </svg>\r\n                    <h2 class=\"text-xl md:text-[30px] leading-[1.43em] font-medium text-center md:text-left my-5 md:my-6\">«Результат дико порадовал, друзья были в восторге»</h2>\r\n                    <p class=\"text-[15px] leading-[1.7em] mb-5 md:mb-6\">«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) </p>\r\n                    <a href=\"#!\" class=\"inline-block text-[14px] leading-[1.5em] text-[#4A94FF] hover:text-yellow hover:border-yellow transition-colors duration-150 border-b border-b-[#4A94FF] border-dashed pb-[1px]\">Читать отзыв полностью</a>\r\n                  </div>\r\n                  <div class=\"shrink-0 text-center order-1 lg:order-2\">\r\n                    <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/client.png\" alt=\"Client\" class=\"w-[200px] h-[200px] md:w-[380px] md:h-[380px] border border-grey-2 rounded-full mb-[30px]\">\r\n                    <h3 class=\"text-[21px] leading-[1.43em] font-medium text-grey-3\">Ирина Ларионова</h3>\r\n                    <span class=\"text-[#A6AEB6] leading-[1.7em]\">Стамбул</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"flex items-center justify-center gap-6\">\r\n              <div class=\"reviews-slider__prev\">\r\n                <svg class=\"w-[8px] h-[16px] md:w-[10px] md:h-5\">\r\n\r\n                    <use xlink:href=\"assets/sprite.svg#arrow-left\"></use>\r\n\r\n                </svg>\r\n              </div>\r\n              <div class=\"reviews-slider__next\">\r\n                <svg class=\"w-[8px] h-[16px] md:w-[10px] md:h-5\">\r\n\r\n                    <use xlink:href=\"assets/sprite.svg#arrow-right\"></use>\r\n\r\n                </svg>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"absolute bottom-0 w-full h-[284px] reviews-bg-end z-0 lazy-bg\" data-src=\"./assets/reviews-bg-end.png\"></div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"bg-white relative\">\r\n      <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n      <div class=\"container\">\r\n        <h2 class=\"section__headline mb-[14px]\">Сделали более 3.000 заказов за 2 года</h2>\r\n        <p class=\"mb-[40px] md:mb-[80px] text-center text-xl md:text-2xl leading-[1.43em] text-grey-3\">Посмотрите фото реальных заказов из нашего instagram</p>\r\n      </div>\r\n      <div class=\"grid md:grid-cols-2 lg:grid-cols-3 gap-[9px]\" id=\"products-gallery\">\r\n        <a href=\"./assets/photo.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo.jpg\" alt=\"Photo 1\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_1.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_1.jpg\" alt=\"Photo 2\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_2.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_2.jpg\" alt=\"Photo 3\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n\r\n        <a href=\"./assets/photo_3.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_3.jpg\" alt=\"Photo 4\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_4.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_4.jpg\" alt=\"Photo 5\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_5.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_5.jpg\" alt=\"Photo 6\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n\r\n         <a href=\"./assets/photo_6.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_6.jpg\" alt=\"Photo 6\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_7.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_7.jpg\" alt=\"Photo 7\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n        <a href=\"./assets/photo_8.jpg\" target=\"_blank\" data-pswp-width=\"634\" data-pswp-height=\"444\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/photo_8.jpg\" alt=\"Photo 8\" class=\"w-full h-full object-cover\">\r\n        </a>\r\n      </div>\r\n    </section>\r\n  </main>\r\n  <footer class=\"footer pt-[300px] relative\">\r\n    <div class=\"absolute inset-x-0 -top-1 h-2 bg-white\"></div>\r\n    <div class=\"absolute top-0 w-full h-[284px] footer-bg-start z-20 lazy-bg\" data-src=\"./assets/footer-bg-start.png\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"relative py-[35px] md:py-[70px] px-[75px] md:px-[150px] bg-white rounded-[8px]\">\r\n        <h2 class=\"text-xl md:text-[36px] leading-[1.33em] font-bold text-center text-grey-3 mb-[12px]\">Чтобы сделать заказ, укажите ваш телефон</h2>\r\n        <p class=\"mb-5 md:mb-[36px] text-center text-lg md:text-[21px] leading-[1.43em] tracking-[-0.2px] text-grey-3\">Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>\r\n        <form>\r\n          <div class=\"grid md:grid-cols-2 gap-5 mb-5 md:mb-6\">\r\n            <div class=\"flex px-[26px] py-[30px] text-grey rounded-[8px] bg-grey-2\">\r\n              <svg class=\"shrink-0 w-[25px] h-[25px] mr-[7px] text-[#929AA2]\">\r\n\r\n                  <use xlink:href=\"assets/sprite.svg#phone-input\"></use>\r\n\r\n              </svg>\r\n              <input type=\"tel\" name=\"Сделать заказ\" placeholder=\"Номер телефона\" class=\"w-full text-[15px] leading-[1.6em] bg-transparent outline-none border-none placeholder-inherit\">\r\n            </div>\r\n            <div>\r\n              <a href=\"#!\" class=\"button-1 !py-[28.8px] w-full text-center\">Сделать заказ</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"relative flex items-center justify-center gap-[7px]\">\r\n           <label class=\"w-3 h-3 flex items-center justify-center\">\r\n            <input type=\"checkbox\" name=\"politics\" class=\"peer hidden\" value=\"1\" />\r\n            <span class=\"w-full h-full rounded-[2px] border border-grey \r\n                        peer-checked:bg-[#4A94FF] peer-checked:border-[#4A94FF] cursor-pointer\">\r\n            </span>\r\n            <svg class=\"absolute z-20 w-[7px] text-white opacity-0 peer-checked:opacity-100 transition\">\r\n\r\n                  <use xlink:href=\"assets/sprite.svg#check\"></use>\r\n\r\n            </svg>\r\n           </label>\r\n           <a href=\"#!\" class=\"text-grey text-[11px] hover:text-grey-3 transition-colors duration-150\">Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных</a>\r\n          </div>\r\n        </form>\r\n        <div class=\"absolute top-0 left-0 -translate-x-[76px] -translate-y-[65px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-leaf.png\" data-depth=\"0.3\" alt=\"Footer Leaf\" class=\"w-[106px]\">\r\n        </div>\r\n        <div class=\"absolute top-0 right-0 translate-x-[100px] -translate-y-[80px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-berry.png\" data-depth=\"0.3\" alt=\"Footer Berry\" class=\"w-[152px]\">\r\n        </div>\r\n        <div class=\"absolute bottom-0 left-0 -translate-x-[130px] translate-y-[90px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-berry-1.png\" data-depth=\"0.3\" alt=\"Footer Berry 2\" class=\"w-[167px]\">\r\n        </div>\r\n        <div class=\"absolute bottom-0 right-0 translate-x-[110px] translate-y-[90px] scene z-0\">\r\n          <img loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" data-src=\"./assets/footer-leaf-1.png\" data-depth=\"0.3\" alt=\"Footer Leaf 2\" class=\"w-[146px]\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"footer__bottom mx-auto max-w-[605px] text-[12px] leading-[1.5em] text-center text-grey my-[40px] md:my-[80px]\">\r\n        <ul class=\"flex flex-col sm:flex-row justify-between gap-2 mb-[22px]\">\r\n          <li><a href=\"#!\">\r\n            Согласие на обработку данных\r\n          </a></li>\r\n          <li><a href=\"#!\">\r\n            Служба поддержки\r\n          </a></li>\r\n          <li><a href=\"#!\">\r\n            Политика конфиденциальности\r\n          </a></li>\r\n        </ul>\r\n        <p>© cake.test, 2025 | Created by Marsel Firsov</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js\"></script>\r\n</body>\r\n</html>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmIzODg1ZjViM2M2MjNkOWUxNzg4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDLEdBQUcsQ0FBQztBQUFBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy8gc3luYyBub25yZWN1cnNpdmUgXFwuc3ZnJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9hcnJvdy1sZWZ0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvY2hlY2suc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2xvY2F0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9waG9uZS1pbnB1dC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvcGhvbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL3F1b3RlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzY0ZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9jb3JlL2V2ZW50YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3NsaWRlL3BsYWNlaG9sZGVyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvc2xpZGUvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3V0aWwvdmlld3BvcnQtc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3NsaWRlL3pvb20tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zbGlkZS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9saWdodGJveC9saWdodGJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9yL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmNzcz8wMDVkIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwidmFyIG1hcCA9IHtcblx0XCIuL0dyb3VwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvR3JvdXAyLnBuZ1wiLFxuXHRcIi4vYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2JlcnJ5LnBuZ1wiLFxuXHRcIi4vYmVycnlfMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvYmVycnlfMS5wbmdcIixcblx0XCIuL2JlcnJ5XzIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2JlcnJ5XzIucG5nXCIsXG5cdFwiLi9jbGllbnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2NsaWVudC5wbmdcIixcblx0XCIuL2ZlYXR1cmUtYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ZlYXR1cmUtYmVycnkucG5nXCIsXG5cdFwiLi9mZWF0dXJlLWxlYWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ZlYXR1cmUtbGVhZi5wbmdcIixcblx0XCIuL2Zvb3Rlci1iZXJyeS0xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9mb290ZXItYmVycnktMS5wbmdcIixcblx0XCIuL2Zvb3Rlci1iZXJyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvZm9vdGVyLWJlcnJ5LnBuZ1wiLFxuXHRcIi4vZm9vdGVyLWJnLXN0YXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9mb290ZXItYmctc3RhcnQucG5nXCIsXG5cdFwiLi9mb290ZXItbGVhZi0xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9mb290ZXItbGVhZi0xLnBuZ1wiLFxuXHRcIi4vZm9vdGVyLWxlYWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2Zvb3Rlci1sZWFmLnBuZ1wiLFxuXHRcIi4vbGVhZi5wbmdcIjogXCIuL3NyYy9hc3NldHMvbGVhZi5wbmdcIixcblx0XCIuL3Bob25lMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvcGhvbmUxLnBuZ1wiLFxuXHRcIi4vcGhvdG8tYmctZW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90by1iZy1lbmQucG5nXCIsXG5cdFwiLi9waG90by1iZy1zdGFydC5wbmdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG8tYmctc3RhcnQucG5nXCIsXG5cdFwiLi9waG90by5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG8uanBnXCIsXG5cdFwiLi9waG90b18xLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b18xLmpwZ1wiLFxuXHRcIi4vcGhvdG9fMi5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9fMi5qcGdcIixcblx0XCIuL3Bob3RvXzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Bob3RvXzMuanBnXCIsXG5cdFwiLi9waG90b180LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b180LmpwZ1wiLFxuXHRcIi4vcGhvdG9fNS5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9fNS5qcGdcIixcblx0XCIuL3Bob3RvXzYuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Bob3RvXzYuanBnXCIsXG5cdFwiLi9waG90b183LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b183LmpwZ1wiLFxuXHRcIi4vcGhvdG9fOC5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9fOC5qcGdcIixcblx0XCIuL3BsYWNlaG9sZGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGFjZWhvbGRlci5wbmdcIixcblx0XCIuL3Byb2R1Y3QtYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3QtYmVycnkucG5nXCIsXG5cdFwiLi9wcm9kdWN0LWxlYWYtMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdC1sZWFmLTIucG5nXCIsXG5cdFwiLi9wcm9kdWN0LWxlYWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3QtbGVhZi5wbmdcIixcblx0XCIuL3Byb2R1Y3RfMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdF8xLmpwZ1wiLFxuXHRcIi4vcHJvZHVjdF8yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wcm9kdWN0XzIuanBnXCIsXG5cdFwiLi9wcm9kdWN0XzMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3RfMy5qcGdcIixcblx0XCIuL3Byb2R1Y3RfNC5qcGdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdF80LmpwZ1wiLFxuXHRcIi4vcHJvZHVjdF81LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wcm9kdWN0XzUuanBnXCIsXG5cdFwiLi9wcm9kdWN0XzYuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3RfNi5qcGdcIixcblx0XCIuL3Byb2R1Y3RfNy5qcGdcIjogXCIuL3NyYy9hc3NldHMvcHJvZHVjdF83LmpwZ1wiLFxuXHRcIi4vcHJvZHVjdF84LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9wcm9kdWN0XzguanBnXCIsXG5cdFwiLi9wcm9kdWN0XzkuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3Byb2R1Y3RfOS5qcGdcIixcblx0XCIuL3Jldmlld3MtYmVycnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Jldmlld3MtYmVycnkucG5nXCIsXG5cdFwiLi9yZXZpZXdzLWJnLWVuZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvcmV2aWV3cy1iZy1lbmQucG5nXCIsXG5cdFwiLi9yZXZpZXdzLWJnLXN0YXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXZpZXdzLWJnLXN0YXJ0LnBuZ1wiLFxuXHRcIi4vcmV2aWV3cy1sZWFmLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXZpZXdzLWxlYWYucG5nXCIsXG5cdFwiLi93ZWxjb21lLXNlY3Rpb24tYmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlbGNvbWUtc2VjdGlvbi1iZy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NnaWYlN0N3ZWJwKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJyb3ctbGVmdC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2Fycm93LWxlZnQuc3ZnXCIsXG5cdFwiLi9hcnJvdy1yaWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1wiLFxuXHRcIi4vY2hlY2suc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9jaGVjay5zdmdcIixcblx0XCIuL2xvY2F0aW9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvbG9jYXRpb24uc3ZnXCIsXG5cdFwiLi9waG9uZS1pbnB1dC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3Bob25lLWlucHV0LnN2Z1wiLFxuXHRcIi4vcGhvbmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9waG9uZS5zdmdcIixcblx0XCIuL3F1b3RlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvcXVvdGUuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zdmcgc3luYyBcXFxcLnN2ZyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJhcnJvdy1sZWZ0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxNyAyNlwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjYXJyb3ctbGVmdFwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJhcnJvdy1yaWdodC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTYgMjZcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI2Fycm93LXJpZ2h0XCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImNoZWNrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA4IDdcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI2NoZWNrXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImxvY2F0aW9uLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxNyAyM1wiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjbG9jYXRpb25cIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwicGhvbmUtaW5wdXQtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI2XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3ByaXRlLnN2ZyNwaG9uZS1pbnB1dFwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJwaG9uZS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTkgMTlcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI3Bob25lXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcInF1b3RlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA0MCA0MFwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcGxhY2Vob2xkZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbjxoZWFkPlxcclxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgPHRpdGxlPkNha2UgU2hvcDwvdGl0bGU+XFxyXFxuICA8bWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiQ2FrZSBTaG9wIGJlc3QgYW5kIGZyZXNoXFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcImtleXdvcmRzXFxcIiBjb250ZW50PVxcXCJDYWtlLCBTaG9wXFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcImF1dGhvclxcXCIgY29udGVudD1cXFwiTWFyc2VsIEZpcnNvdlxcXCI+XFxyXFxuICA8bGluayByZWw9XFxcImNhbm9uaWNhbFxcXCIgaHJlZj1cXFwiL1xcXCI+XFxyXFxuICA8bWV0YSBwcm9wZXJ0eT1cXFwib2c6dHlwZVxcXCIgY29udGVudD1cXFwid2Vic2l0ZVxcXCI+XFxyXFxuICA8bWV0YSBwcm9wZXJ0eT1cXFwib2c6dXJsXFxcIiBjb250ZW50PVxcXCIvXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzp0aXRsZVxcXCIgY29udGVudD1cXFwiQ2FrZSBTaG9wXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzpkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiQ2FrZSBTaG9wIGJlc3QgYW5kIGZyZXNoXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzppbWFnZVxcXCIgY29udGVudD1cXFwiYXNzZXRzL2Zhdmljb24uaWNvXFxcIj5cXHJcXG4gIDxtZXRhIHByb3BlcnR5PVxcXCJvZzpzaXRlX25hbWVcXFwiIGNvbnRlbnQ9XFxcIkNha2UgU2hvcFxcXCI+XFxyXFxuICA8bWV0YSBwcm9wZXJ0eT1cXFwib2c6bG9jYWxlXFxcIiBjb250ZW50PVxcXCJydV9SVVxcXCI+XFxyXFxuICA8IS0tIGZhdmljb24gLS0+XFxyXFxuICA8bGluayByZWw9XFxcImljb25cXFwiIGhyZWY9XFxcImFzc2V0cy9mYXZpY29uLmljb1xcXCIgdHlwZT1cXFwiaW1hZ2UveC1pY29uXFxcIj5cXHJcXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zd2lwZXJAMTEvc3dpcGVyLWJ1bmRsZS5taW4uY3NzXFxcIi8+XFxyXFxuICA8bGluayByZWw9XFxcInByZWNvbm5lY3RcXFwiIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cXFwiPlxcclxcbiAgPGxpbmsgcmVsPVxcXCJwcmVjb25uZWN0XFxcIiBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXFxcIiBjcm9zc29yaWdpbj5cXHJcXG4gIDxsaW5rIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcFxcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNSBtZDpnYXAtMCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtd2hpdGVcXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwidGV4dC1bMjFweF0gZm9udC1tZWRpdW0gbGVhZGluZy1bMS40M2VtXVxcXCI+0J/QsNGA0Log0YHQu9Cw0LTQutC+0LPQvjwvYT5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNSBtZDpnYXAtWzY5cHhdXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZ2FwLTNcXFwiPlxcclxcbiAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJ3LTQgaC00IHNtOnctWzE3cHhdIHNtOmgtWzIzcHhdXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjbG9jYXRpb25cXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICA8L3N2Zz5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzEzcHhdIGxlYWRpbmctWzEuNWVtXVxcXCI+0LMuINCh0YLQsNC80LHRg9C7LDxicj7Rg9C7LiDQodC10LzRgdC10YLQuNC90LAg0JPRg9C90LDQu9CwIDMxPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGdhcC0zXFxcIj5cXHJcXG4gICAgICAgICAgPHN2ZyBjbGFzcz1cXFwicmVsYXRpdmUgdG9wLTEgc206dG9wLVs2cHhdIHctNCBoLTQgc206dy1bMTlweF0gc206aC1bMTlweF1cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNwaG9uZVxcXCI+PC91c2U+XFxyXFxuXFxyXFxuICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcInRlbDorODgxMjg0NDk1NDlcXFwiIGNsYXNzPVxcXCJzbTp0ZXh0LXhsIGxlYWRpbmctWzEuNTJlbV0gZm9udC1ib2xkXFxcIj44ICg4MTIpIDg0NC05NS00OTwvYT5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1bMTNweF0gbGVhZGluZy1bMS41ZW1dXFxcIj7QldC20LXQtNC90LXQstC90L4g0YEgOTowMCDQtNC+IDIwOjAwPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwvaGVhZGVyPlxcclxcbiAgPG1haW4+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uIHdlbGNvbWUtc2VjdGlvbiByZWxhdGl2ZSBwdC1bMjEwcHhdIHBiLVsyMzNweF0gbWQ6cHQtWzQyMHB4XSBtZDpwYi1bNDY1cHhdIG92ZXJmbG93LWhpZGRlblxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2VsY29tZS1zZWN0aW9uX19iZ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtd2hpdGUgcmVsYXRpdmUgei0xMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYXgtdy1bNjQ3cHhdXFxcIj5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlY3Rpb25fX3N1Yi1oZWFkbGluZVxcXCI+0LLQutGD0YHQvdC10LnRiNC40LU8L3NwYW4+XFxyXFxuICAgICAgICAgIDxoMSBjbGFzcz1cXFwibXktNSBtZDpteS02IGZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LVs0OHB4XSBsZWFkaW5nLVsxLjI1ZW1dIHRyYWNraW5nLVstMXB4XVxcXCI+0J/QuNGA0L7QttC90YvQtSDQuCDQutCw0L/QutC10LnQutC4INC+0YIgNTAgJC/RiNGCLiDRgSDQtNC+0YHRgtCw0LLQutC+0Lkg0L/QviDQodGC0LDQvNCx0YPQu9GDPC9oMT5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtbGcgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS40M2VtXSBtYi01IG1kOm1iLVs0MHB4XVxcXCI+0J/RgNC40LPQvtGC0L7QstC40Lwg0LfQsCAzINGH0LDRgdCwINCyINC00LXQvdGMINC30LDQutCw0LfQsC4g0JTQvtGB0YLQsNCy0LrQsCDQvdCwINCw0LLRgtC+INCyINGF0L7Qu9C+0LTQuNC70YzQvdC40LrQtS48L3A+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC01XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMTVweF0gIXB4LVsyNXB4XSBtZDohcHktWzMwcHhdIG1kOiFweC1bNTBweF1cXFwiPtCf0LXRgNC10LnRgtC4INCyINC60LDRgtCw0LvQvtCzPC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsxNXB4XSBsZWFkaW5nLVsxLjZlbV1cXFwiPjkg0YDQsNC30LvQuNGH0L3Ri9GFPGJyPtCy0LjQtNC+0LIg0L3QsCDQstGL0LHQvtGAPC9zcGFuPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzY1cHhdIHRyYW5zbGF0ZS15LVsyMDJweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2JlcnJ5LnBuZ1xcXCIgYWx0PVxcXCJCZXJyeSAxXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGNsYXNzPVxcXCJ3LVsxOTVweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzg0cHhdIC10cmFuc2xhdGUteS1bNTBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2xlYWYucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjRcXFwiIGNsYXNzPVxcXCJ3LVsyNzVweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdHJhbnNsYXRlLXgtWzUzcHhdIHRyYW5zbGF0ZS15LVsxMzBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2JlcnJ5XzEucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGNsYXNzPVxcXCJ3LVsxNzBweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgLXRyYW5zbGF0ZS14LVsxNjVweF0gLXRyYW5zbGF0ZS15LVsyMTBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2JlcnJ5XzIucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjRcXFwiIGNsYXNzPVxcXCJ3LVsxOTVweF1cXFwiPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uIHJlbGF0aXZlIGJnLXdoaXRlXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLXRvcC0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3ZlcmZsb3ctaGlkZGVuXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciByZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwic2VjdGlvbl9faGVhZGxpbmUgbWItWzQwcHhdIG1kOm1iLVs4MHB4XVxcXCI+0JTQu9GPINC70Y7QsdGL0YUg0YHQvtCx0YvRgtC40Lkg0Lgg0LTQvtGA0L7Qs9C40YUg0LLQsNC8INC70Y7QtNC10LkgPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0IGdyaWQgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9wcm9kdWN0XzEuanBnXFxcIiBhbHQ9XFxcIlByb2R1Y3QgMVxcXCIgY2xhc3M9XFxcInJvdW5kZWQtdC1bMTBweF0gdy1mdWxsIGgtWzI0NXB4XSBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1oZWFkbGluZSBtYi0zXFxcIj7QmtGA0LXQvNC+0LLRi9C5INC30LDQvNC+0Lo8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCd0LXQttC90YvQuSDQutGA0LXQvCDQu9GO0LHQvtCz0L4g0YbQstC10YLQsCDQvdCwINCy0YvQsdC+0YAsINCy0LDRhNC10LvRjNC90LDRjyDQvtGB0L3QvtCy0LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfMi5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCAyXFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCc0LDQu9C40L3QvtCy0YvQuSDRgNCw0Lk8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCS0L7Qt9C00YPRiNC90YvQuSDQutGA0LXQvCwg0YLQtdC80L3QsNGPINC+0YHQvdC+0LLQsCDQuCDRj9Cz0L7QtNCwINC80LDQu9C40L3RizwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5saW5lLWJsb2NrIG10LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibG9jayB0ZXh0LWdyZXktNCB0ZXh0LXhsIG1kOnRleHQtMnhsIGxlYWRpbmctWzEuNWVtXSBmb250LW1lZGl1bVxcXCI+NTAgJC/RiNGCLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xIG10LVsxNHB4XVxcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdF8zLmpwZ1xcXCIgYWx0PVxcXCJQcm9kdWN0IDNcXFwiIGNsYXNzPVxcXCJyb3VuZGVkLXQtWzEwcHhdIHctZnVsbCBoLVsyNDVweF0gb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtaGVhZGxpbmUgbWItM1xcXCI+0KTQtdC50LXRgNCy0LXRgNC6PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1kZXNjcmlwdGlvbiBtYi02XFxcIj7QoNCw0LfQvdC+0YbQstC10YLQvdGL0LUg0LrRgNC10LwsINGBINCx0LjRgdC60LLQuNGC0L3QvtC5INC+0YHQvdC+0LLQvtC5PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtYmxvY2sgbXQtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJsb2NrIHRleHQtZ3JleS00IHRleHQteGwgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS41ZW1dIGZvbnQtbWVkaXVtXFxcIj41MCAkL9GI0YIuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwiYnV0dG9uLTEgbXQtWzE0cHhdXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9wcm9kdWN0XzQuanBnXFxcIiBhbHQ9XFxcIlByb2R1Y3QgNFxcXCIgY2xhc3M9XFxcInJvdW5kZWQtdC1bMTBweF0gdy1mdWxsIGgtWzI0NXB4XSBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1oZWFkbGluZSBtYi0zXFxcIj7QqNC+0LrQvtC70LDQtNC90YvQuSDQvNC40YA8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCe0YDQtdGF0L7QstCw0Y8g0YHRgtGA0YPQttC60LAsINC90LXQttC90YvQuSDQutGA0LXQvCDQuCDRiNC+0LrQvtC70LDQtNC90LDRjyDQvtGB0L3QvtCy0LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfNS5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCA1XFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCh0LvQtdC30Ysg0LTRgNCw0LrQvtC90LA8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWRlc2NyaXB0aW9uIG1iLTZcXFwiPtCd0LXQttC90YvQuSDQutGA0LXQvCDQu9GO0LHQvtCz0L4g0YbQstC10YLQsCDQvdCwINCy0YvQsdC+0YAsINCy0LDRhNC10LvRjNC90LDRjyDQvtGB0L3QvtCy0LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfNi5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCA2XFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCb0LXRgtC90Y/RjyDRhNCw0L3RgtCw0LfQuNGPPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1kZXNjcmlwdGlvbiBtYi02XFxcIj7Qo9C60YDQsNGI0LXQvdC40Y8g0LIg0YTQvtGA0LzQtSDRgdC10YDQtNC10YYsINC00LvRjyDQu9GO0LHQuNC80L7Qs9C+INGH0LXQu9C+0LLQtdC60LA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1ibG9jayBtdC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxvY2sgdGV4dC1ncmV5LTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBsZWFkaW5nLVsxLjVlbV0gZm9udC1tZWRpdW1cXFwiPjUwICQv0YjRgi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJidXR0b24tMSBtdC1bMTRweF1cXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3RfNy5qcGdcXFwiIGFsdD1cXFwiUHJvZHVjdCA3XFxcIiBjbGFzcz1cXFwicm91bmRlZC10LVsxMHB4XSB3LWZ1bGwgaC1bMjQ1cHhdIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWhlYWRsaW5lIG1iLTNcXFwiPtCc0YvRgSDQsdC10LfRg9C80LjRjzwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtZGVzY3JpcHRpb24gbWItNlxcXCI+0KDQsNC30L3QvtGG0LLQtdGC0L3QsNGPINC+0YHQvdC+0LLQsCwg0YHRgtGA0YPQttC60LAg0Lgg0L3QtdC20L3Ri9C5INC60YDQtdC8PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtYmxvY2sgbXQtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJsb2NrIHRleHQtZ3JleS00IHRleHQteGwgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS41ZW1dIGZvbnQtbWVkaXVtXFxcIj41MCAkL9GI0YIuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwiYnV0dG9uLTEgbXQtWzE0cHhdXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9wcm9kdWN0XzguanBnXFxcIiBhbHQ9XFxcIlByb2R1Y3QgOFxcXCIgY2xhc3M9XFxcInJvdW5kZWQtdC1bMTBweF0gdy1mdWxsIGgtWzI0NXB4XSBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1saXN0X19jYXJkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1oZWFkbGluZSBtYi0zXFxcIj7QntCx0LvQsNGH0L3QsNGPINGB0LrQsNC30LrQsDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtZGVzY3JpcHRpb24gbWItNlxcXCI+0KHQstC10YLQu9Cw0Y8g0L7RgdC90L7QstCwLCDQvdC10LbQvdGL0Lkg0LrRgNC10Lwg0YHQviDRgdGC0YDRg9C20LrQvtC5INGB0LLQtdGA0YXRgzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5saW5lLWJsb2NrIG10LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibG9jayB0ZXh0LWdyZXktNCB0ZXh0LXhsIG1kOnRleHQtMnhsIGxlYWRpbmctWzEuNWVtXSBmb250LW1lZGl1bVxcXCI+NTAgJC/RiNGCLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xIG10LVsxNHB4XVxcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdF85LmpwZ1xcXCIgYWx0PVxcXCJQcm9kdWN0IDlcXFwiIGNsYXNzPVxcXCJyb3VuZGVkLXQtWzEwcHhdIHctZnVsbCBoLVsyNDVweF0gb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtbGlzdF9fY2FyZC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtaGVhZGxpbmUgbWItM1xcXCI+0KLQtdC80L3Ri9C5INGA0YvRhtCw0YDRjDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwcm9kdWN0LWxpc3RfX2NhcmQtZGVzY3JpcHRpb24gbWItNlxcXCI+0KLRkdC80L3QsNGPINC+0YHQvdC+0LLQsCwg0L3QtdC20L3Ri9C5INC60YDQtdC8INC4INCy0LrRg9GB0L3Ri9C1INGI0LDRgNC40LrQuDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5saW5lLWJsb2NrIG10LWF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibG9jayB0ZXh0LWdyZXktNCB0ZXh0LXhsIG1kOnRleHQtMnhsIGxlYWRpbmctWzEuNWVtXSBmb250LW1lZGl1bVxcXCI+NTAgJC/RiNGCLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xIG10LVsxNHB4XVxcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzE2NXB4XSB0cmFuc2xhdGUteS1bMjE0cHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdC1iZXJyeS5wbmdcXFwiIGFsdD1cXFwiUHJvZHVjdCBCZXJyeSAxXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC10cmFuc2xhdGUteC1bMTQ1cHhdIC10cmFuc2xhdGUteS1bNDIwcHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcHJvZHVjdC1sZWFmLnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIlByb2R1Y3QgTGVhZiAxXFxcIj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdHJhbnNsYXRlLXgtWzE2MHB4XSAtdHJhbnNsYXRlLXktWzcwMHB4XSBzY2VuZSB6LTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Byb2R1Y3QtbGVhZi0yLnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIlByb2R1Y3QgTGVhZiAyXFxcIj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLWJvdHRvbS0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInJlbGF0aXZlIHB0LVszMDBweF0gbGc6cHQtWzQwOXB4XSBsZzpwYi1bNDU5cHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LXdoaXRlXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1bMzMwcHhdIHBob3RvLWJnLXN0YXJ0IHotMjAgbGF6eS1iZ1xcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvLWJnLXN0YXJ0LnBuZ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2FwLTEwIGxnOmJsb2NrIHJlbGF0aXZlIHotMTBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC10cmFuc2xhdGUteC1bMjZweF0gLXRyYW5zbGF0ZS15LVs0OXB4XSBzY2VuZSB6LTBcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9mZWF0dXJlLWxlYWYucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRmVhdHVyZSBMZWFmXFxcIiBjbGFzcz1cXFwidy1bMTEwcHhdXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB0cmFuc2xhdGUteC1bMTUycHhdIC10cmFuc2xhdGUteS1bMTAwcHhdIHNjZW5lIHotMFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2ZlYXR1cmUtYmVycnkucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRmVhdHVyZSBCZXJyeVxcXCIgY2xhc3M9XFxcInctWzE1MnB4XVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOmFic29sdXRlIGxnOnRvcC1bLTkwcHhdIGxnOmxlZnQtWy00MDZweF0gb3JkZXItMlxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob25lMS5wbmdcXFwiIGFsdD1cXFwiUGhvbmVcXFwiIGNsYXNzPVxcXCJ3LVs5ODZweF1cXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZzptYXgtdy1bNDgwcHhdIGxnOmZsb2F0LXJpZ2h0IHJlbGF0aXZlIG9yZGVyLTEgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlY3Rpb25fX3N1Yi1oZWFkbGluZVxcXCI+0J3QtSDQvdCw0YjQu9C4INGC0L4g0YfRgtC+INC90YPQttC90L4/PC9zcGFuPlxcclxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb25fX2hlYWRsaW5lICF0ZXh0LXdoaXRlIG1kOiF0ZXh0LWxlZnQgbXktNSBsZzpteS02XFxcIj7Qn9GA0LjQs9C+0YLQvtCy0LjQvCDQt9Cw0LrQsNC3INC70Y7QsdC+0Lkg0YHQu9C+0LbQvdC+0YHRgtC4INC/0L4g0YTQvtGC0L4g0LjQu9C4INGN0YHQutC40LfRgzwvaDI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LWxnIG1kOnRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gdHJhY2tpbmctWy0wLjJweF0gbWItNSBtZDptYi1bNDBweF1cXFwiPtCX0LDQs9GA0YPQt9C40YLQtSDRhNC+0YLQvtCz0YDQsNGE0LjRjiDQuNC70Lgg0Y3RgdC60LjQtyDQutCw0L/QutC10LnQutC+0LIg0Lgg0LzRiyDRgNCw0YHRgdGH0LjRgtCw0LXQvCDRgdGC0L7QuNC80L7RgdGC0Ywg0LfQsCAzMCDQvNC40L3Rg9GCPC9wPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMTVweF0gIXB4LVsyNXB4XSBtZDohcHktWzMwcHhdIG1kOiFweC1bNTBweF1cXFwiPtCX0LDQs9GA0YPQt9C40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBoLVs0ODlweF0gcGhvdG8tYmctZW5kIHotMjAgbGF6eS1iZ1xcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvLWJnLWVuZC5wbmdcXFwiPjwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJiZy13aGl0ZSByZWxhdGl2ZSB6LTMwXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLXRvcC0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0xMCBsZzpnYXAtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZzptYXgtdy1bNTgwcHhdIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWN0aW9uX19zdWItaGVhZGxpbmVcXFwiPtCa0YLQviDQsdGD0LTQtdGCINCz0L7RgtC+0LLQuNGC0Yw/PC9zcGFuPlxcclxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb25fX2hlYWRsaW5lIG1kOiF0ZXh0LWxlZnQgbXQtNCBtZDptdC02IG1iLTUgbWQ6bWItWzM2cHhdXFxcIj7Qm9C40YfQvdC+INC/0YDQuNCz0L7RgtC+0LLQu9GOINC4INCy0YHRkSDQutGA0LDRgdC40LLQviDRg9C/0LDQutGD0Y4g0LTQu9GPINCy0LDRiNC10LPQviDRgdC+0LHRi9GC0LjRjzwvaDI+XFxyXFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2VjdGlvbl9fbGlzdCBzcGFjZS15LTUgbWQ6c3BhY2UteS1bMzBweF0gbWF4LXctWzQzOHB4XSBtYi1bMjVweF0gbWQ6bWItWzUwcHhdIHRleHQtbGVmdCBteC1hdXRvIG1kOm14LTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgINCf0YDQvtC60L7QvdGB0YPQu9GM0YLQuNGA0YPRjiDQv9C+INCy0YvQsdC+0YDRgyDQutCw0L/QutC10LnQutC+0LIg0Lgg0L/RgNC40LTRg9C80LDRjiDQvdC10YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQuNC00LXRjlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAg0J/RgNC40LPQvtGC0L7QstC70Y4g0LrQsNC/0LrQtdC50LrQuCDQtNC70Y8g0LLQsNGI0LXQs9C+INGB0L7QsdGL0YLQuNGPLCDQutC+0YLQvtGA0YvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INCy0YHQtdC8INC/0L7QvdGA0LDQstGP0YLRgdGPIFxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAg0JDQutC60YPRgNCw0YLQvdC+INC4INC60YDQsNGB0LjQstC+INCy0YHRkSDRg9C/0LDQutGD0Y4sINC10YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGB0LTQtdC70LDRgtGMINC/0YDQuNGP0YLQvdGL0Lkg0L/QvtC00LDRgNC+0LpcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImJ1dHRvbi0xICFweS1bMTVweF0gIXB4LVsyNXB4XSBtZDohcHktWzMwcHhdIG1kOiFweC1bNTBweF1cXFwiPtCX0LDQtNCw0YLRjCDQstC+0L/RgNC+0YEg0K7Qu9C40Lg8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvR3JvdXAyLnBuZ1xcXCIgYWx0PVxcXCJXb21lblxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0xMCBsZzpib3R0b20tWzE2MnB4XSBsZWZ0LTEvMiBsZzpsZWZ0LVstOTJweF0gLXRyYW5zbGF0ZS14LTEvMiBsZzp0cmFuc2xhdGUteC0wXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LVsyODdweF0gaC1bNjBweF0gYmctZ3JleS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC14bCBtZDp0ZXh0LTJ4bCB0cmFja2luZy1bLTAuM3B4XSBmb250LW1lZGl1bSBza2V3LXgtWy04ZGVnXSByb3VuZGVkLVs2cHhdXFxcIj48c3BhbiBjbGFzcz1cXFwic2tldy14LVs4ZGVnXVxcXCI+0K7Qu9C40Y8g0JrQvtC90LTRgNCw0YLRjNC10LLQsDwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LVsyMThweF0gaC1bNTJweF0gbXgtYXV0byBiZy1ncmV5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmV5LTMgdGV4dC1iYXNlIG1kOnRleHQtbGcgdHJhY2tpbmctWzFweF0gdXBwZXJjYXNlIHNrZXcteC1bLThkZWddIHJvdW5kZWQtYi1bNnB4XVxcXCI+PHNwYW4gY2xhc3M9XFxcInNrZXcteC1bOGRlZ11cXFwiPtCy0LDRiCDQutC+0L3QtNC40YLQtdGAPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgaW5zZXQteC0wIC10b3AtMSBoLTIgYmctd2hpdGVcXFwiPjwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInB0LVszMDBweF0gcGItWzIzOHB4XSBsZzpwYi1bMzA4cHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LXdoaXRlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIHctZnVsbCBoLVszMzBweF0gcmV2aWV3cy1iZy1zdGFydCB6LTIwIGxhenktYmdcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9yZXZpZXdzLWJnLXN0YXJ0LnBuZ1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgcmVsYXRpdmUgei0xMFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzEyNnB4XSAtdHJhbnNsYXRlLXktWzMwcHhdIHNjZW5lIHotMjBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Jldmlld3MtbGVhZi5wbmdcXFwiIGRhdGEtZGVwdGg9XFxcIjAuM1xcXCIgYWx0PVxcXCJGZWF0dXJlIExlYWZcXFwiIGNsYXNzPVxcXCJ3LVsxMjZweF1cXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB0cmFuc2xhdGUteC1bOTVweF0gdHJhbnNsYXRlLXktWzExNXB4XSBzY2VuZSB6LTIwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9yZXZpZXdzLWJlcnJ5LnBuZ1xcXCIgZGF0YS1kZXB0aD1cXFwiMC4zXFxcIiBhbHQ9XFxcIkZlYXR1cmUgQmVycnlcXFwiIGNsYXNzPVxcXCJ3LVsxNTJweF1cXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uX19oZWFkbGluZSAhdGV4dC13aGl0ZSBtYi1bNDBweF0gbWQ6bWItWzgwcHhdXFxcIj7Qn9C+0YfQuNGC0LDQudGC0LUg0L7RgtC30YvQstGLINC00L7QstC+0LvRjNC90YvRhSDQutC70LjQtdC90YLQvtCyPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyIHJldmlld3Mtc2xpZGVyICFvdmVyZmxvdy12aXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgcmVxdWlyZWQgd3JhcHBlciAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlciBtYi1bMzVweF0gbGc6bWItWzcwcHhdXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gU2xpZGVzIC0tPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHJldmlld3Mtc2xpZGVyX19zbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweC02IHB5LTUgbWQ6cHgtWzE0M3B4XSBtZDpweS1bNzBweF0gdGV4dC1ncmV5LTMgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLVsycHhdIGJvcmRlci1bI0UyRUFGMl0gc2hhZG93LVsycHhfOHB4XzE2cHhfcmdiYSgxOTQsMTk4LDIwOCwwLjA2KV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOm1heC13LVs0NjBweF0gb3JkZXItMiBsZzpvcmRlci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInctNSBoLTUgbWQ6dy1bNDBweF0gbWQ6aC1bNDBweF0gdGV4dC1ibHVlIG14LWF1dG8gbXQtNSBtZDptLTBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzBweF0gbGVhZGluZy1bMS40M2VtXSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbXktNSBtZDpteS02XFxcIj7Cq9Cg0LXQt9GD0LvRjNGC0LDRgiDQtNC40LrQviDQv9C+0YDQsNC00L7QstCw0LssINC00YDRg9C30YzRjyDQsdGL0LvQuCDQsiDQstC+0YHRgtC+0YDQs9C1wrs8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzE1cHhdIGxlYWRpbmctWzEuN2VtXSBtYi01IG1kOm1iLTZcXFwiPsKr0JfQsNC60LDQt9Cw0LvQsCDQutCw0L/QutC10LnQutC4LCDQutCw0Log0L/QvtC00LDRgNC+0Log0L3QsCDQvdC+0LLRi9C5INCz0L7QtC4g0JTQtdC70LDRgtGMINC30LDQutCw0Lcg0LHRi9C70L4g0LvQtdCz0LrQviDQuCDQv9GA0LjRj9GC0L3Qviwg0L3RgyDQsCDRgNC10LfRg9C70YzRgtCw0YIg0LTQuNC60L4g0L/QvtGA0LDQtNC+0LLQsNC7LCDQtNGA0YPQt9GM0Y8g0LHRi9C70Lgg0LIg0LLQvtGB0YLQvtGA0LPQtS4g0Jgg0L7RhNC+0YDQvNC70LXQvdC40LUsINC4INC90LAg0LLQutGD0YEg0LrQsNC/0LrQtdC50LrQuCDQsdGL0LvQuCDQv9GA0L7RgdGC0L4g0LfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0LUuINCe0LHRj9C30LDRgtC10LvRjNC90L4g0LHRg9C00YMg0LfQsNC60LDQt9GL0LLQsNGC0Ywg0LXRidC1KSkg0KPQttC1INGB0YLRgNC+0Y4g0L/Qu9Cw0L3Riywg0YfRgtC+0LHRiyDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINCy0YHQtSDQvdCw0YfQuNC90LrQuC4g0J7QvdC4INCy0L7RgdGF0LjRgtC40YLQtdC70YzQvdGLISkg0JTQsNC20LUg0LrRg9GI0LDRgtGMINCx0YvQu9C+INC20LDQu9C60L4sINGC0LDQutCw0Y8g0LrRgNCw0YHQvtGC0LAhKSA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImlubGluZS1ibG9jayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1bIzRBOTRGRl0gaG92ZXI6dGV4dC15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYm9yZGVyLWIgYm9yZGVyLWItWyM0QTk0RkZdIGJvcmRlci1kYXNoZWQgcGItWzFweF1cXFwiPtCn0LjRgtCw0YLRjCDQvtGC0LfRi9CyINC/0L7Qu9C90L7RgdGC0YzRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstMCB0ZXh0LWNlbnRlciBvcmRlci0xIGxnOm9yZGVyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvY2xpZW50LnBuZ1xcXCIgYWx0PVxcXCJDbGllbnRcXFwiIGNsYXNzPVxcXCJ3LVsyMDBweF0gaC1bMjAwcHhdIG1kOnctWzM4MHB4XSBtZDpoLVszODBweF0gYm9yZGVyIGJvcmRlci1ncmV5LTIgcm91bmRlZC1mdWxsIG1iLVszMHB4XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gZm9udC1tZWRpdW0gdGV4dC1ncmV5LTNcXFwiPtCY0YDQuNC90LAg0JvQsNGA0LjQvtC90L7QstCwPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjQTZBRUI2XSBsZWFkaW5nLVsxLjdlbV1cXFwiPtCh0YLQsNC80LHRg9C7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHJldmlld3Mtc2xpZGVyX19zbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweC02IHB5LTUgbWQ6cHgtWzE0M3B4XSBtZDpweS1bNzBweF0gdGV4dC1ncmV5LTMgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLVsycHhdIGJvcmRlci1bI0UyRUFGMl0gc2hhZG93LVsycHhfOHB4XzE2cHhfcmdiYSgxOTQsMTk4LDIwOCwwLjA2KV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOm1heC13LVs0NjBweF0gb3JkZXItMiBsZzpvcmRlci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInctNSBoLTUgbWQ6dy1bNDBweF0gbWQ6aC1bNDBweF0gdGV4dC1ibHVlIG14LWF1dG8gbXQtNSBtZDptLTBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzBweF0gbGVhZGluZy1bMS40M2VtXSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbXktNSBtZDpteS02XFxcIj7Cq9Cg0LXQt9GD0LvRjNGC0LDRgiDQtNC40LrQviDQv9C+0YDQsNC00L7QstCw0LssINC00YDRg9C30YzRjyDQsdGL0LvQuCDQsiDQstC+0YHRgtC+0YDQs9C1wrs8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzE1cHhdIGxlYWRpbmctWzEuN2VtXSBtYi01IG1kOm1iLTZcXFwiPsKr0JfQsNC60LDQt9Cw0LvQsCDQutCw0L/QutC10LnQutC4LCDQutCw0Log0L/QvtC00LDRgNC+0Log0L3QsCDQvdC+0LLRi9C5INCz0L7QtC4g0JTQtdC70LDRgtGMINC30LDQutCw0Lcg0LHRi9C70L4g0LvQtdCz0LrQviDQuCDQv9GA0LjRj9GC0L3Qviwg0L3RgyDQsCDRgNC10LfRg9C70YzRgtCw0YIg0LTQuNC60L4g0L/QvtGA0LDQtNC+0LLQsNC7LCDQtNGA0YPQt9GM0Y8g0LHRi9C70Lgg0LIg0LLQvtGB0YLQvtGA0LPQtS4g0Jgg0L7RhNC+0YDQvNC70LXQvdC40LUsINC4INC90LAg0LLQutGD0YEg0LrQsNC/0LrQtdC50LrQuCDQsdGL0LvQuCDQv9GA0L7RgdGC0L4g0LfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0LUuINCe0LHRj9C30LDRgtC10LvRjNC90L4g0LHRg9C00YMg0LfQsNC60LDQt9GL0LLQsNGC0Ywg0LXRidC1KSkg0KPQttC1INGB0YLRgNC+0Y4g0L/Qu9Cw0L3Riywg0YfRgtC+0LHRiyDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINCy0YHQtSDQvdCw0YfQuNC90LrQuC4g0J7QvdC4INCy0L7RgdGF0LjRgtC40YLQtdC70YzQvdGLISkg0JTQsNC20LUg0LrRg9GI0LDRgtGMINCx0YvQu9C+INC20LDQu9C60L4sINGC0LDQutCw0Y8g0LrRgNCw0YHQvtGC0LAhKSA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImlubGluZS1ibG9jayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1bIzRBOTRGRl0gaG92ZXI6dGV4dC15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYm9yZGVyLWIgYm9yZGVyLWItWyM0QTk0RkZdIGJvcmRlci1kYXNoZWQgcGItWzFweF1cXFwiPtCn0LjRgtCw0YLRjCDQvtGC0LfRi9CyINC/0L7Qu9C90L7RgdGC0YzRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstMCB0ZXh0LWNlbnRlciBvcmRlci0xIGxnOm9yZGVyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvY2xpZW50LnBuZ1xcXCIgYWx0PVxcXCJDbGllbnRcXFwiIGNsYXNzPVxcXCJ3LVsyMDBweF0gaC1bMjAwcHhdIG1kOnctWzM4MHB4XSBtZDpoLVszODBweF0gYm9yZGVyIGJvcmRlci1ncmV5LTIgcm91bmRlZC1mdWxsIG1iLVszMHB4XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gZm9udC1tZWRpdW0gdGV4dC1ncmV5LTNcXFwiPtCY0YDQuNC90LAg0JvQsNGA0LjQvtC90L7QstCwPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjQTZBRUI2XSBsZWFkaW5nLVsxLjdlbV1cXFwiPtCh0YLQsNC80LHRg9C7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHJldmlld3Mtc2xpZGVyX19zbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOmp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweC02IHB5LTUgbWQ6cHgtWzE0M3B4XSBtZDpweS1bNzBweF0gdGV4dC1ncmV5LTMgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLVsycHhdIGJvcmRlci1bI0UyRUFGMl0gc2hhZG93LVsycHhfOHB4XzE2cHhfcmdiYSgxOTQsMTk4LDIwOCwwLjA2KV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxnOm1heC13LVs0NjBweF0gb3JkZXItMiBsZzpvcmRlci0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcInctNSBoLTUgbWQ6dy1bNDBweF0gbWQ6aC1bNDBweF0gdGV4dC1ibHVlIG14LWF1dG8gbXQtNSBtZDptLTBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcXVvdGVcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzBweF0gbGVhZGluZy1bMS40M2VtXSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbXktNSBtZDpteS02XFxcIj7Cq9Cg0LXQt9GD0LvRjNGC0LDRgiDQtNC40LrQviDQv9C+0YDQsNC00L7QstCw0LssINC00YDRg9C30YzRjyDQsdGL0LvQuCDQsiDQstC+0YHRgtC+0YDQs9C1wrs8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtWzE1cHhdIGxlYWRpbmctWzEuN2VtXSBtYi01IG1kOm1iLTZcXFwiPsKr0JfQsNC60LDQt9Cw0LvQsCDQutCw0L/QutC10LnQutC4LCDQutCw0Log0L/QvtC00LDRgNC+0Log0L3QsCDQvdC+0LLRi9C5INCz0L7QtC4g0JTQtdC70LDRgtGMINC30LDQutCw0Lcg0LHRi9C70L4g0LvQtdCz0LrQviDQuCDQv9GA0LjRj9GC0L3Qviwg0L3RgyDQsCDRgNC10LfRg9C70YzRgtCw0YIg0LTQuNC60L4g0L/QvtGA0LDQtNC+0LLQsNC7LCDQtNGA0YPQt9GM0Y8g0LHRi9C70Lgg0LIg0LLQvtGB0YLQvtGA0LPQtS4g0Jgg0L7RhNC+0YDQvNC70LXQvdC40LUsINC4INC90LAg0LLQutGD0YEg0LrQsNC/0LrQtdC50LrQuCDQsdGL0LvQuCDQv9GA0L7RgdGC0L4g0LfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0LUuINCe0LHRj9C30LDRgtC10LvRjNC90L4g0LHRg9C00YMg0LfQsNC60LDQt9GL0LLQsNGC0Ywg0LXRidC1KSkg0KPQttC1INGB0YLRgNC+0Y4g0L/Qu9Cw0L3Riywg0YfRgtC+0LHRiyDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINCy0YHQtSDQvdCw0YfQuNC90LrQuC4g0J7QvdC4INCy0L7RgdGF0LjRgtC40YLQtdC70YzQvdGLISkg0JTQsNC20LUg0LrRg9GI0LDRgtGMINCx0YvQu9C+INC20LDQu9C60L4sINGC0LDQutCw0Y8g0LrRgNCw0YHQvtGC0LAhKSA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIVxcXCIgY2xhc3M9XFxcImlubGluZS1ibG9jayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1bIzRBOTRGRl0gaG92ZXI6dGV4dC15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYm9yZGVyLWIgYm9yZGVyLWItWyM0QTk0RkZdIGJvcmRlci1kYXNoZWQgcGItWzFweF1cXFwiPtCn0LjRgtCw0YLRjCDQvtGC0LfRi9CyINC/0L7Qu9C90L7RgdGC0YzRjjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstMCB0ZXh0LWNlbnRlciBvcmRlci0xIGxnOm9yZGVyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvY2xpZW50LnBuZ1xcXCIgYWx0PVxcXCJDbGllbnRcXFwiIGNsYXNzPVxcXCJ3LVsyMDBweF0gaC1bMjAwcHhdIG1kOnctWzM4MHB4XSBtZDpoLVszODBweF0gYm9yZGVyIGJvcmRlci1ncmV5LTIgcm91bmRlZC1mdWxsIG1iLVszMHB4XVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRleHQtWzIxcHhdIGxlYWRpbmctWzEuNDNlbV0gZm9udC1tZWRpdW0gdGV4dC1ncmV5LTNcXFwiPtCY0YDQuNC90LAg0JvQsNGA0LjQvtC90L7QstCwPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LVsjQTZBRUI2XSBsZWFkaW5nLVsxLjdlbV1cXFwiPtCh0YLQsNC80LHRg9C7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJldmlld3Mtc2xpZGVyX19wcmV2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwidy1bOHB4XSBoLVsxNnB4XSBtZDp3LVsxMHB4XSBtZDpoLTVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNhcnJvdy1sZWZ0XFxcIj48L3VzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJldmlld3Mtc2xpZGVyX19uZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwidy1bOHB4XSBoLVsxNnB4XSBtZDp3LVsxMHB4XSBtZDpoLTVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNhcnJvdy1yaWdodFxcXCI+PC91c2U+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgaC1bMjg0cHhdIHJldmlld3MtYmctZW5kIHotMCBsYXp5LWJnXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcmV2aWV3cy1iZy1lbmQucG5nXFxcIj48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcblxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiYmctd2hpdGUgcmVsYXRpdmVcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGluc2V0LXgtMCAtdG9wLTEgaC0yIGJnLXdoaXRlXFxcIj48L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uX19oZWFkbGluZSBtYi1bMTRweF1cXFwiPtCh0LTQtdC70LDQu9C4INCx0L7Qu9C10LUgMy4wMDAg0LfQsNC60LDQt9C+0LIg0LfQsCAyINCz0L7QtNCwPC9oMj5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJtYi1bNDBweF0gbWQ6bWItWzgwcHhdIHRleHQtY2VudGVyIHRleHQteGwgbWQ6dGV4dC0yeGwgbGVhZGluZy1bMS40M2VtXSB0ZXh0LWdyZXktM1xcXCI+0J/QvtGB0LzQvtGC0YDQuNGC0LUg0YTQvtGC0L4g0YDQtdCw0LvRjNC90YvRhSDQt9Cw0LrQsNC30L7QsiDQuNC3INC90LDRiNC10LPQviBpbnN0YWdyYW08L3A+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtWzlweF1cXFwiIGlkPVxcXCJwcm9kdWN0cy1nYWxsZXJ5XFxcIj5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvLmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90by5qcGdcXFwiIGFsdD1cXFwiUGhvdG8gMVxcXCIgY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvXzEuanBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgZGF0YS1wc3dwLXdpZHRoPVxcXCI2MzRcXFwiIGRhdGEtcHN3cC1oZWlnaHQ9XFxcIjQ0NFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvXzEuanBnXFxcIiBhbHQ9XFxcIlBob3RvIDJcXFwiIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIuL2Fzc2V0cy9waG90b18yLmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90b18yLmpwZ1xcXCIgYWx0PVxcXCJQaG90byAzXFxcIiBjbGFzcz1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiLi9hc3NldHMvcGhvdG9fMy5qcGdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBkYXRhLXBzd3Atd2lkdGg9XFxcIjYzNFxcXCIgZGF0YS1wc3dwLWhlaWdodD1cXFwiNDQ0XFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcGhvdG9fMy5qcGdcXFwiIGFsdD1cXFwiUGhvdG8gNFxcXCIgY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvXzQuanBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgZGF0YS1wc3dwLXdpZHRoPVxcXCI2MzRcXFwiIGRhdGEtcHN3cC1oZWlnaHQ9XFxcIjQ0NFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvXzQuanBnXFxcIiBhbHQ9XFxcIlBob3RvIDVcXFwiIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIuL2Fzc2V0cy9waG90b181LmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90b181LmpwZ1xcXCIgYWx0PVxcXCJQaG90byA2XFxcIiBjbGFzcz1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgIDxhIGhyZWY9XFxcIi4vYXNzZXRzL3Bob3RvXzYuanBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgZGF0YS1wc3dwLXdpZHRoPVxcXCI2MzRcXFwiIGRhdGEtcHN3cC1oZWlnaHQ9XFxcIjQ0NFxcXCI+XFxyXFxuICAgICAgICAgIDxpbWcgbG9hZGluZz1cXFwibGF6eVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL3Bob3RvXzYuanBnXFxcIiBhbHQ9XFxcIlBob3RvIDZcXFwiIGNsYXNzPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclxcXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIuL2Fzc2V0cy9waG90b183LmpwZ1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGRhdGEtcHN3cC13aWR0aD1cXFwiNjM0XFxcIiBkYXRhLXBzd3AtaGVpZ2h0PVxcXCI0NDRcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9waG90b183LmpwZ1xcXCIgYWx0PVxcXCJQaG90byA3XFxcIiBjbGFzcz1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiLi9hc3NldHMvcGhvdG9fOC5qcGdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBkYXRhLXBzd3Atd2lkdGg9XFxcIjYzNFxcXCIgZGF0YS1wc3dwLWhlaWdodD1cXFwiNDQ0XFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvcGhvdG9fOC5qcGdcXFwiIGFsdD1cXFwiUGhvdG8gOFxcXCIgY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbiAgPC9tYWluPlxcclxcbiAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyIHB0LVszMDBweF0gcmVsYXRpdmVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBpbnNldC14LTAgLXRvcC0xIGgtMiBiZy13aGl0ZVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIHctZnVsbCBoLVsyODRweF0gZm9vdGVyLWJnLXN0YXJ0IHotMjAgbGF6eS1iZ1xcXCIgZGF0YS1zcmM9XFxcIi4vYXNzZXRzL2Zvb3Rlci1iZy1zdGFydC5wbmdcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlIHB5LVszNXB4XSBtZDpweS1bNzBweF0gcHgtWzc1cHhdIG1kOnB4LVsxNTBweF0gYmctd2hpdGUgcm91bmRlZC1bOHB4XVxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQteGwgbWQ6dGV4dC1bMzZweF0gbGVhZGluZy1bMS4zM2VtXSBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmV5LTMgbWItWzEycHhdXFxcIj7Qp9GC0L7QsdGLINGB0LTQtdC70LDRgtGMINC30LDQutCw0LcsINGD0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvTwvaDI+XFxyXFxuICAgICAgICA8cCBjbGFzcz1cXFwibWItNSBtZDptYi1bMzZweF0gdGV4dC1jZW50ZXIgdGV4dC1sZyBtZDp0ZXh0LVsyMXB4XSBsZWFkaW5nLVsxLjQzZW1dIHRyYWNraW5nLVstMC4ycHhdIHRleHQtZ3JleS0zXFxcIj7QnNGLINC/0LXRgNC10LfQstC+0L3QuNC8INCyINGC0LXRh9C10L3QuNC4IDE1INC80LjQvdGD0YIsINGH0YLQvtCx0Ysg0YPRgtC+0YfQvdC40YLRjCDQstCw0YjQuCDQv9C+0LbQtdC70LDQvdC40Y88L3A+XFxyXFxuICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNSBtYi01IG1kOm1iLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggcHgtWzI2cHhdIHB5LVszMHB4XSB0ZXh0LWdyZXkgcm91bmRlZC1bOHB4XSBiZy1ncmV5LTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwic2hyaW5rLTAgdy1bMjVweF0gaC1bMjVweF0gbXItWzdweF0gdGV4dC1bIzkyOUFBMl1cXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiYXNzZXRzL3Nwcml0ZS5zdmcjcGhvbmUtaW5wdXRcXFwiPjwvdXNlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGVsXFxcIiBuYW1lPVxcXCLQodC00LXQu9Cw0YLRjCDQt9Cw0LrQsNC3XFxcIiBwbGFjZWhvbGRlcj1cXFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXFxcIiBjbGFzcz1cXFwidy1mdWxsIHRleHQtWzE1cHhdIGxlYWRpbmctWzEuNmVtXSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUgcGxhY2Vob2xkZXItaW5oZXJpdFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMhXFxcIiBjbGFzcz1cXFwiYnV0dG9uLTEgIXB5LVsyOC44cHhdIHctZnVsbCB0ZXh0LWNlbnRlclxcXCI+0KHQtNC10LvQsNGC0Ywg0LfQsNC60LDQtzwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC1bN3B4XVxcXCI+XFxyXFxuICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInctMyBoLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicG9saXRpY3NcXFwiIGNsYXNzPVxcXCJwZWVyIGhpZGRlblxcXCIgdmFsdWU9XFxcIjFcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInctZnVsbCBoLWZ1bGwgcm91bmRlZC1bMnB4XSBib3JkZXIgYm9yZGVyLWdyZXkgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVlci1jaGVja2VkOmJnLVsjNEE5NEZGXSBwZWVyLWNoZWNrZWQ6Ym9yZGVyLVsjNEE5NEZGXSBjdXJzb3ItcG9pbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImFic29sdXRlIHotMjAgdy1bN3B4XSB0ZXh0LXdoaXRlIG9wYWNpdHktMCBwZWVyLWNoZWNrZWQ6b3BhY2l0eS0xMDAgdHJhbnNpdGlvblxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCJhc3NldHMvc3ByaXRlLnN2ZyNjaGVja1xcXCI+PC91c2U+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgPGEgaHJlZj1cXFwiIyFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyZXkgdGV4dC1bMTFweF0gaG92ZXI6dGV4dC1ncmV5LTMgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwXFxcIj7QndCw0LbQuNC80LDRjyDQvdCwINC60L3QvtC/0LrRgywg0LLRiyDRgdC+0LPQu9Cw0YjQsNC10YLQtdGB0Ywg0YEg0YPRgdC70L7QstC40Y/QvNC4INC+0LHRgNCw0LHQvtGC0LrQuCDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtWzc2cHhdIC10cmFuc2xhdGUteS1bNjVweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvZm9vdGVyLWxlYWYucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRm9vdGVyIExlYWZcXFwiIGNsYXNzPVxcXCJ3LVsxMDZweF1cXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHRyYW5zbGF0ZS14LVsxMDBweF0gLXRyYW5zbGF0ZS15LVs4MHB4XSBzY2VuZSB6LTBcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9mb290ZXItYmVycnkucG5nXFxcIiBkYXRhLWRlcHRoPVxcXCIwLjNcXFwiIGFsdD1cXFwiRm9vdGVyIEJlcnJ5XFxcIiBjbGFzcz1cXFwidy1bMTUycHhdXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC10cmFuc2xhdGUteC1bMTMwcHhdIHRyYW5zbGF0ZS15LVs5MHB4XSBzY2VuZSB6LTBcXFwiPlxcclxcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XFxcImxhenlcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGRhdGEtc3JjPVxcXCIuL2Fzc2V0cy9mb290ZXItYmVycnktMS5wbmdcXFwiIGRhdGEtZGVwdGg9XFxcIjAuM1xcXCIgYWx0PVxcXCJGb290ZXIgQmVycnkgMlxcXCIgY2xhc3M9XFxcInctWzE2N3B4XVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdHJhbnNsYXRlLXgtWzExMHB4XSB0cmFuc2xhdGUteS1bOTBweF0gc2NlbmUgei0wXFxcIj5cXHJcXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVxcXCJsYXp5XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBkYXRhLXNyYz1cXFwiLi9hc3NldHMvZm9vdGVyLWxlYWYtMS5wbmdcXFwiIGRhdGEtZGVwdGg9XFxcIjAuM1xcXCIgYWx0PVxcXCJGb290ZXIgTGVhZiAyXFxcIiBjbGFzcz1cXFwidy1bMTQ2cHhdXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fYm90dG9tIG14LWF1dG8gbWF4LXctWzYwNXB4XSB0ZXh0LVsxMnB4XSBsZWFkaW5nLVsxLjVlbV0gdGV4dC1jZW50ZXIgdGV4dC1ncmV5IG15LVs0MHB4XSBtZDpteS1bODBweF1cXFwiPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBnYXAtMiBtYi1bMjJweF1cXFwiPlxcclxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiIyFcXFwiPlxcclxcbiAgICAgICAgICAgINCh0L7Qs9C70LDRgdC40LUg0L3QsCDQvtCx0YDQsNCx0L7RgtC60YMg0LTQsNC90L3Ri9GFXFxyXFxuICAgICAgICAgIDwvYT48L2xpPlxcclxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiIyFcXFwiPlxcclxcbiAgICAgICAgICAgINCh0LvRg9C20LHQsCDQv9C+0LTQtNC10YDQttC60LhcXHJcXG4gICAgICAgICAgPC9hPjwvbGk+XFxyXFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjIVxcXCI+XFxyXFxuICAgICAgICAgICAg0J/QvtC70LjRgtC40LrQsCDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0LhcXHJcXG4gICAgICAgICAgPC9hPjwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPHA+wqkgY2FrZS50ZXN0LCAyMDI1IHwgQ3JlYXRlZCBieSBNYXJzZWwgRmlyc292PC9wPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZm9vdGVyPlxcclxcblxcclxcbiAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc3dpcGVyQDExL3N3aXBlci1idW5kbGUubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG4gIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wYXJhbGxheC8zLjEuMC9wYXJhbGxheC5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9IFRcclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxyXG4gKiBAcGFyYW0ge1R9IHRhZ05hbWVcclxuICogQHBhcmFtIHtOb2RlfSBbYXBwZW5kVG9FbF1cclxuICogQHJldHVybnMge0hUTUxFbGVtZW50VGFnTmFtZU1hcFtUXX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNsYXNzTmFtZSwgdGFnTmFtZSwgYXBwZW5kVG9FbCkge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgfVxyXG4gIGlmIChhcHBlbmRUb0VsKSB7XHJcbiAgICBhcHBlbmRUb0VsLmFwcGVuZENoaWxkKGVsKTtcclxuICB9XHJcbiAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQb2ludH0gcDFcclxuICogQHBhcmFtIHtQb2ludH0gcDJcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXplUG9pbnRzKHAxLCBwMikge1xyXG4gIHAxLnggPSBwMi54O1xyXG4gIHAxLnkgPSBwMi55O1xyXG4gIGlmIChwMi5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwMS5pZCA9IHAyLmlkO1xyXG4gIH1cclxuICByZXR1cm4gcDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRQb2ludChwKSB7XHJcbiAgcC54ID0gTWF0aC5yb3VuZChwLngpO1xyXG4gIHAueSA9IE1hdGgucm91bmQocC55KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlbihwMSwgcDIpIHtcclxuICBjb25zdCB4ID0gTWF0aC5hYnMocDEueCAtIHAyLngpO1xyXG4gIGNvbnN0IHkgPSBNYXRoLmFicyhwMS55IC0gcDIueSk7XHJcbiAgcmV0dXJuIE1hdGguc3FydCgoeCAqIHgpICsgKHkgKiB5KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIFggYW5kIFkgcG9zaXRpb25zIG9mIHBvaW50cyBhcmUgZXF1YWxcclxuICpcclxuICogQHBhcmFtIHtQb2ludH0gcDFcclxuICogQHBhcmFtIHtQb2ludH0gcDJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRzRXF1YWwocDEsIHAyKSB7XHJcbiAgcmV0dXJuIHAxLnggPT09IHAyLnggJiYgcDEueSA9PT0gcDIueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBmbG9hdCByZXN1bHQgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRyYW5zZm9ybSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IFt5XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlXVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVHJhbnNmb3JtU3RyaW5nKHgsIHksIHNjYWxlKSB7XHJcbiAgbGV0IHByb3BWYWx1ZSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsJHt5IHx8IDB9cHgsMClgO1xyXG5cclxuICBpZiAoc2NhbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcHJvcFZhbHVlICs9IGAgc2NhbGUzZCgke3NjYWxlfSwke3NjYWxlfSwxKWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcFZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgdHJhbnNmb3JtOnRyYW5zbGF0ZSh4LCB5KSBzY2FsZShzY2FsZSkgdG8gZWxlbWVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3ldXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGVdXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsLCB4LCB5LCBzY2FsZSkge1xyXG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtU3RyaW5nKHgsIHksIHNjYWxlKTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENTU0Vhc2luZyA9ICdjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSknO1xyXG5cclxuLyoqXHJcbiAqIEFwcGx5IENTUyB0cmFuc2l0aW9uIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wXSBDU1MgcHJvcGVydHkgdG8gYW5pbWF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uXSBpbiBtc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Vhc2VdIENTUyBlYXNpbmcgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uU3R5bGUoZWwsIHByb3AsIGR1cmF0aW9uLCBlYXNlKSB7XHJcbiAgLy8gaW5PdXQ6ICdjdWJpYy1iZXppZXIoLjQsIDAsIC4yMiwgMSknLCAvLyBmb3IgXCJ0b2dnbGUgc3RhdGVcIiB0cmFuc2l0aW9uc1xyXG4gIC8vIG91dDogJ2N1YmljLWJlemllcigwLCAwLCAuMjIsIDEpJywgLy8gZm9yIFwic2hvd1wiIHRyYW5zaXRpb25zXHJcbiAgLy8gaW46ICdjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpJy8vIGZvciBcImhpZGVcIiB0cmFuc2l0aW9uc1xyXG4gIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9wXHJcbiAgICA/IGAke3Byb3B9ICR7ZHVyYXRpb259bXMgJHtlYXNlIHx8IGRlZmF1bHRDU1NFYXNpbmd9YFxyXG4gICAgOiAnbm9uZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBseSB3aWR0aCBhbmQgaGVpZ2h0IENTUyBwcm9wZXJ0aWVzIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHdcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXaWR0aEhlaWdodChlbCwgdywgaCkge1xyXG4gIGVsLnN0eWxlLndpZHRoID0gKHR5cGVvZiB3ID09PSAnbnVtYmVyJykgPyBgJHt3fXB4YCA6IHc7XHJcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gKHR5cGVvZiBoID09PSAnbnVtYmVyJykgPyBgJHtofXB4YCA6IGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25TdHlsZShlbCkge1xyXG4gIHNldFRyYW5zaXRpb25TdHlsZShlbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZ1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgdm9pZD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSW1hZ2UoaW1nKSB7XHJcbiAgaWYgKCdkZWNvZGUnIGluIGltZykge1xyXG4gICAgcmV0dXJuIGltZy5kZWNvZGUoKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1nLmNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGltZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge0xPQURfU1RBVEVba2V5b2YgTE9BRF9TVEFURV19IExvYWRTdGF0ZSAqL1xyXG4vKiogQHR5cGUge3sgSURMRTogJ2lkbGUnOyBMT0FESU5HOiAnbG9hZGluZyc7IExPQURFRDogJ2xvYWRlZCc7IEVSUk9SOiAnZXJyb3InIH19ICovXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NUQVRFID0ge1xyXG4gIElETEU6ICdpZGxlJyxcclxuICBMT0FESU5HOiAnbG9hZGluZycsXHJcbiAgTE9BREVEOiAnbG9hZGVkJyxcclxuICBFUlJPUjogJ2Vycm9yJyxcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgY2xpY2sgb3Iga2V5ZG93biBldmVudCB3YXMgZGlzcGF0Y2hlZFxyXG4gKiB3aXRoIGEgc3BlY2lhbCBrZXkgb3IgdmlhIG1vdXNlIHdoZWVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge01vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50fSBlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwZWNpYWxLZXlVc2VkKGUpIHtcclxuICByZXR1cm4gKCdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPT09IDEpIHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGBnYWxsZXJ5YCBvciBgY2hpbGRyZW5gIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRWxlbWVudFByb3ZpZGVyfSBbb3B0aW9uXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2xlZ2FjeVNlbGVjdG9yXVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgRG9jdW1lbnR9IFtwYXJlbnRdXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50W11cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0Zyb21PcHRpb24ob3B0aW9uLCBsZWdhY3lTZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQpIHtcclxuICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXHJcbiAgbGV0IGVsZW1lbnRzID0gW107XHJcblxyXG4gIGlmIChvcHRpb24gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICBlbGVtZW50cyA9IFtvcHRpb25dO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9uIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShvcHRpb24pKSB7XHJcbiAgICBlbGVtZW50cyA9IEFycmF5LmZyb20ob3B0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdGlvbiA6IGxlZ2FjeVNlbGVjdG9yO1xyXG4gICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdmFyaWFibGUgaXMgUGhvdG9Td2lwZSBjbGFzc1xyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gZm5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQc3dwQ2xhc3MoZm4pIHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXHJcbiAgICAmJiBmbi5wcm90b3R5cGVcclxuICAgICYmIGZuLnByb3RvdHlwZS5nb1RvO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYnJvd3NlciBpcyBTYWZhcmlcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XHJcbiAgcmV0dXJuICEhKG5hdmlnYXRvci52ZW5kb3IgJiYgbmF2aWdhdG9yLnZlbmRvci5tYXRjaCgvYXBwbGUvaSkpO1xyXG59XHJcblxyXG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vbGlnaHRib3gvbGlnaHRib3guanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlTGlnaHRib3ggKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRGF0YVNvdXJjZX0gRGF0YVNvdXJjZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vdWkvdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL2NvbnRlbnQuanMnKS5kZWZhdWx0fSBDb250ZW50RGVmYXVsdCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvem9vbS1sZXZlbC5qcycpLmRlZmF1bHR9IFpvb21MZXZlbCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvZ2V0LXRodW1iLWJvdW5kcy5qcycpLkJvdW5kc30gQm91bmRzICovXHJcblxyXG4vKipcclxuICogQWxsb3cgYWRkaW5nIGFuIGFyYml0cmFyeSBwcm9wcyB0byB0aGUgQ29udGVudFxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2N1c3RvbS1jb250ZW50LyN1c2luZy13ZWJwLWltYWdlLWZvcm1hdFxyXG4gKiBAdHlwZWRlZiB7Q29udGVudERlZmF1bHQgJiBSZWNvcmQ8c3RyaW5nLCBhbnk+fSBDb250ZW50XHJcbiAqL1xyXG4vKiogQHR5cGVkZWYge3sgeD86IG51bWJlcjsgeT86IG51bWJlciB9fSBQb2ludCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBob3RvU3dpcGVFdmVudHNNYXAgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vYWRkaW5nLXVpLWVsZW1lbnRzL1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB1aVJlZ2lzdGVyXHJcbiAqIEBwcm9wIHt7IGRhdGE6IFVJRWxlbWVudERhdGEgfX0gdWlFbGVtZW50Q3JlYXRlXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNpbml0aWFsaXphdGlvbi1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmVmb3JlT3BlblxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBmaXJzdFVwZGF0ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsTGF5b3V0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNoYW5nZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBhZnRlckluaXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmluZEV2ZW50c1xyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jb3BlbmluZy1vci1jbG9zaW5nLXRyYW5zaXRpb24tZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IG9wZW5pbmdBbmltYXRpb25TdGFydFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBvcGVuaW5nQW5pbWF0aW9uRW5kXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NpbmdBbmltYXRpb25TdGFydFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zaW5nQW5pbWF0aW9uRW5kXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNjbG9zaW5nLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBkZXN0cm95XHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNwb2ludGVyLWFuZC1nZXN0dXJlLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlckRvd25cclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJNb3ZlXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyVXBcclxuICogQHByb3Age3sgYmdPcGFjaXR5OiBudW1iZXIgfX0gcGluY2hDbG9zZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcGFuWTogbnVtYmVyIH19IHZlcnRpY2FsRHJhZyBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI3NsaWRlLWNvbnRlbnQtZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEluaXRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgaXNMYXp5OiBib29sZWFuIH19IGNvbnRlbnRMb2FkIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBpc0xhenk6IGJvb2xlYW4gfX0gY29udGVudExvYWRJbWFnZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgc2xpZGU6IFNsaWRlOyBpc0Vycm9yPzogYm9vbGVhbiB9fSBsb2FkQ29tcGxldGVcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgc2xpZGU6IFNsaWRlIH19IGxvYWRFcnJvclxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9fSBjb250ZW50UmVzaXplIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgc2xpZGU6IFNsaWRlIH19IGltYWdlU2l6ZUNoYW5nZVxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRMYXp5TG9hZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QXBwZW5kIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBY3RpdmF0ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50RGVhY3RpdmF0ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50UmVtb3ZlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnREZXN0cm95IGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKlxyXG4gKiB1bmRvY3VtZW50ZWRcclxuICpcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gaW1hZ2VDbGlja0FjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gYmdDbGlja0FjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gdGFwQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBkb3VibGVUYXBBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IEtleWJvYXJkRXZlbnQgfX0ga2V5ZG93biBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgeDogbnVtYmVyOyBkcmFnZ2luZzogYm9vbGVhbiB9fSBtb3ZlTWFpblNjcm9sbFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gZmlyc3Rab29tUGFuXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB8IHVuZGVmaW5lZCwgZGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyIH19IGdldHRpbmdEYXRhXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJlZm9yZVJlc2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSByZXNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gdmlld3BvcnRTaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHVwZGF0ZVNjcm9sbE9mZnNldFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVJbml0XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhZnRlclNldENvbnRlbnRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlTG9hZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYXBwZW5kSGVhdnkgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhcHBlbmRIZWF2eUNvbnRlbnRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlQWN0aXZhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlRGVhY3RpdmF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVEZXN0cm95XHJcbiAqIEBwcm9wIHt7IGRlc3Rab29tTGV2ZWw6IG51bWJlciwgY2VudGVyUG9pbnQ6IFBvaW50IHwgdW5kZWZpbmVkLCB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciB8IGZhbHNlIHwgdW5kZWZpbmVkIH19IGJlZm9yZVpvb21Ub1xyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gem9vbVBhblVwZGF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gaW5pdGlhbFpvb21QYW5cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGNhbGNTbGlkZVNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gcmVzb2x1dGlvbkNoYW5nZWRcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogV2hlZWxFdmVudCB9fSB3aGVlbCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QXBwZW5kSW1hZ2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGluZGV4OiBudW1iZXI7IGl0ZW1EYXRhOiBTbGlkZURhdGEgfX0gbGF6eUxvYWRTbGlkZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3VuZGVmaW5lZH0gbGF6eUxvYWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGNhbGNCb3VuZHNcclxuICogQHByb3Age3sgem9vbUxldmVsczogWm9vbUxldmVsLCBzbGlkZURhdGE6IFNsaWRlRGF0YSB9fSB6b29tTGV2ZWxzVXBkYXRlXHJcbiAqXHJcbiAqXHJcbiAqIGxlZ2FjeVxyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tSW5cclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21PdXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21JbkVuZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbU91dEVuZFxyXG4gKiBAcHJvcCB7eyBkYXRhU291cmNlOiBEYXRhU291cmNlIHwgdW5kZWZpbmVkLCBudW1JdGVtczogbnVtYmVyIH19IG51bUl0ZW1zXHJcbiAqIEBwcm9wIHt7IGl0ZW1EYXRhOiBTbGlkZURhdGE7IGluZGV4OiBudW1iZXIgfX0gaXRlbURhdGFcclxuICogQHByb3Age3sgaW5kZXg6IG51bWJlciwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5zdGFuY2U6IFBob3RvU3dpcGUgfX0gdGh1bWJCb3VuZHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUGhvdG9Td2lwZUZpbHRlcnNNYXAgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzL1xyXG4gKlxyXG4gKiBAcHJvcCB7KG51bUl0ZW1zOiBudW1iZXIsIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UgfCB1bmRlZmluZWQpID0+IG51bWJlcn0gbnVtSXRlbXNcclxuICogTW9kaWZ5IHRoZSB0b3RhbCBhbW91bnQgb2Ygc2xpZGVzLiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI251bWl0ZW1zXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gU2xpZGVEYXRhfSBpdGVtRGF0YVxyXG4gKiBNb2RpZnkgc2xpZGUgaXRlbSBkYXRhLiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2l0ZW1kYXRhXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXRlbURhdGE6IFNsaWRlRGF0YSwgZWxlbWVudDogSFRNTEVsZW1lbnQsIGxpbmtFbDogSFRNTEFuY2hvckVsZW1lbnQpID0+IFNsaWRlRGF0YX0gZG9tSXRlbURhdGFcclxuICogTW9kaWZ5IGl0ZW0gZGF0YSB3aGVuIGl0J3MgcGFyc2VkIGZyb20gRE9NIGVsZW1lbnQuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jZG9taXRlbWRhdGFcclxuICpcclxuICogQHByb3AgeyhjbGlja2VkSW5kZXg6IG51bWJlciwgZTogTW91c2VFdmVudCwgaW5zdGFuY2U6IFBob3RvU3dpcGVMaWdodGJveCkgPT4gbnVtYmVyfSBjbGlja2VkSW5kZXhcclxuICogTW9kaWZ5IGNsaWNrZWQgZ2FsbGVyeSBpdGVtIGluZGV4LlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2NsaWNrZWRpbmRleFxyXG4gKlxyXG4gKiBAcHJvcCB7KHBsYWNlaG9sZGVyU3JjOiBzdHJpbmcgfCBmYWxzZSwgY29udGVudDogQ29udGVudCkgPT4gc3RyaW5nIHwgZmFsc2V9IHBsYWNlaG9sZGVyU3JjXHJcbiAqIE1vZGlmeSBwbGFjZWhvbGRlciBpbWFnZSBzb3VyY2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jcGxhY2Vob2xkZXJzcmNcclxuICpcclxuICogQHByb3Ageyhpc0NvbnRlbnRMb2FkaW5nOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0NvbnRlbnRMb2FkaW5nXHJcbiAqIE1vZGlmeSBpZiB0aGUgY29udGVudCBpcyBjdXJyZW50bHkgbG9hZGluZy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2NvbnRlbnRsb2FkaW5nXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNDb250ZW50Wm9vbWFibGU6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzQ29udGVudFpvb21hYmxlXHJcbiAqIE1vZGlmeSBpZiB0aGUgY29udGVudCBjYW4gYmUgem9vbWVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lzY29udGVudHpvb21hYmxlXHJcbiAqXHJcbiAqIEBwcm9wIHsodXNlQ29udGVudFBsYWNlaG9sZGVyOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSB1c2VDb250ZW50UGxhY2Vob2xkZXJcclxuICogTW9kaWZ5IGlmIHRoZSBwbGFjZWhvbGRlciBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGNvbnRlbnQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdXNlY29udGVudHBsYWNlaG9sZGVyXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNLZWVwaW5nUGxhY2Vob2xkZXI6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzS2VlcGluZ1BsYWNlaG9sZGVyXHJcbiAqIE1vZGlmeSBpZiB0aGUgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIGtlcHQgYWZ0ZXIgdGhlIGNvbnRlbnQgaXMgbG9hZGVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lza2VlcGluZ3BsYWNlaG9sZGVyXHJcbiAqXHJcbiAqXHJcbiAqIEBwcm9wIHsoY29udGVudEVycm9yRWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbnRlbnQ6IENvbnRlbnQpID0+IEhUTUxFbGVtZW50fSBjb250ZW50RXJyb3JFbGVtZW50XHJcbiAqIE1vZGlmeSBhbiBlbGVtZW50IHdoZW4gdGhlIGNvbnRlbnQgaGFzIGVycm9yIHN0YXRlIChmb3IgZXhhbXBsZSwgaWYgaW1hZ2UgY2Fubm90IGJlIGxvYWRlZCkuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jY29udGVudGVycm9yZWxlbWVudFxyXG4gKlxyXG4gKiBAcHJvcCB7KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhOiBVSUVsZW1lbnREYXRhKSA9PiBIVE1MRWxlbWVudH0gdWlFbGVtZW50XHJcbiAqIE1vZGlmeSBhIFVJIGVsZW1lbnQgdGhhdCdzIGJlaW5nIGNyZWF0ZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdWllbGVtZW50XHJcbiAqXHJcbiAqIEBwcm9wIHsodGh1bWJuYWlsOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IEhUTUxFbGVtZW50fSB0aHVtYkVsXHJcbiAqIE1vZGlmeSB0aGUgdGh1bWJuYWlsIGVsZW1lbnQgZnJvbSB3aGljaCBvcGVuaW5nIHpvb20gYW5pbWF0aW9uIHN0YXJ0cyBvciBlbmRzLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3RodW1iZWxcclxuICpcclxuICogQHByb3Ageyh0aHVtYkJvdW5kczogQm91bmRzIHwgdW5kZWZpbmVkLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBCb3VuZHN9IHRodW1iQm91bmRzXHJcbiAqIE1vZGlmeSB0aGUgdGh1bWJuYWlsIGJvdW5kcyBmcm9tIHdoaWNoIG9wZW5pbmcgem9vbSBhbmltYXRpb24gc3RhcnRzIG9yIGVuZHMuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdGh1bWJib3VuZHNcclxuICpcclxuICogQHByb3AgeyhzcmNzZXRTaXplc1dpZHRoOiBudW1iZXIsIGNvbnRlbnQ6IENvbnRlbnQpID0+IG51bWJlcn0gc3Jjc2V0U2l6ZXNXaWR0aFxyXG4gKlxyXG4gKiBAcHJvcCB7KHByZXZlbnRQb2ludGVyRXZlbnQ6IGJvb2xlYW4sIGV2ZW50OiBQb2ludGVyRXZlbnQsIHBvaW50ZXJUeXBlOiBzdHJpbmcpID0+IGJvb2xlYW59IHByZXZlbnRQb2ludGVyRXZlbnRcclxuICpcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7eyBmbjogUGhvdG9Td2lwZUZpbHRlcnNNYXBbVF0sIHByaW9yaXR5OiBudW1iZXIgfX0gRmlsdGVyXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXSBleHRlbmRzIHVuZGVmaW5lZCA/IFBob3RvU3dpcGVFdmVudDxUPiA6IFBob3RvU3dpcGVFdmVudDxUPiAmIFBob3RvU3dpcGVFdmVudHNNYXBbVF19IEF1Z21lbnRlZEV2ZW50XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7KGV2ZW50OiBBdWdtZW50ZWRFdmVudDxUPikgPT4gdm9pZH0gRXZlbnRDYWxsYmFja1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCYXNlIFBob3RvU3dpcGUgZXZlbnQgb2JqZWN0XHJcbiAqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZUV2ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1R9IHR5cGVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVFdmVudHNNYXBbVF19IFtkZXRhaWxzXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGRldGFpbHMpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcclxuICAgIGlmIChkZXRhaWxzKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGV0YWlscyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgpIHtcclxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUGhvdG9Td2lwZSBiYXNlIGNsYXNzIHRoYXQgY2FuIGxpc3RlbiBhbmQgZGlzcGF0Y2ggZm9yIGV2ZW50cy5cclxuICogU2hhcmVkIGJ5IFBob3RvU3dpcGUgQ29yZSBhbmQgUGhvdG9Td2lwZSBMaWdodGJveCwgZXh0ZW5kZWQgYnkgYmFzZS5qc1xyXG4gKi9cclxuY2xhc3MgRXZlbnRhYmxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3sgW1QgaW4ga2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcF0/OiAoKGV2ZW50OiBBdWdtZW50ZWRFdmVudDxUPikgPT4gdm9pZClbXSB9fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHt7IFtUIGluIGtleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwXT86IEZpbHRlcjxUPltdIH19XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2ZpbHRlcnMgPSB7fTtcclxuXHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGUgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnBzd3AgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtQaG90b1N3aXBlT3B0aW9ucyB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMub3B0aW9ucyA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVGaWx0ZXJzTWFwW1RdfSBmblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eVxyXG4gICAqL1xyXG4gIGFkZEZpbHRlcihuYW1lLCBmbiwgcHJpb3JpdHkgPSAxMDApIHtcclxuICAgIGlmICghdGhpcy5fZmlsdGVyc1tuYW1lXSkge1xyXG4gICAgICB0aGlzLl9maWx0ZXJzW25hbWVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8ucHVzaCh7IGZuLCBwcmlvcml0eSB9KTtcclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LnNvcnQoKGYxLCBmMikgPT4gZjEucHJpb3JpdHkgLSBmMi5wcmlvcml0eSk7XHJcblxyXG4gICAgdGhpcy5wc3dwPy5hZGRGaWx0ZXIobmFtZSwgZm4sIHByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVGaWx0ZXJzTWFwW1RdfSBmblxyXG4gICAqL1xyXG4gIHJlbW92ZUZpbHRlcihuYW1lLCBmbikge1xyXG4gICAgaWYgKHRoaXMuX2ZpbHRlcnNbbmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICB0aGlzLl9maWx0ZXJzW25hbWVdID0gdGhpcy5fZmlsdGVyc1tuYW1lXS5maWx0ZXIoZmlsdGVyID0+IChmaWx0ZXIuZm4gIT09IGZuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cCkge1xyXG4gICAgICB0aGlzLnBzd3AucmVtb3ZlRmlsdGVyKG5hbWUsIGZuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1BhcmFtZXRlcnM8UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF0+fSBhcmdzXHJcbiAgICogQHJldHVybnMge1BhcmFtZXRlcnM8UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF0+WzBdfVxyXG4gICAqL1xyXG4gIGFwcGx5RmlsdGVycyhuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICBhcmdzWzBdID0gZmlsdGVyLmZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJnc1swXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFjazxUPn0gZm5cclxuICAgKi9cclxuICBvbihuYW1lLCBmbikge1xyXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0/LnB1c2goZm4pO1xyXG5cclxuICAgIC8vIFdoZW4gYmluZGluZyBldmVudHMgdG8gbGlnaHRib3gsXHJcbiAgICAvLyBhbHNvIGJpbmQgZXZlbnRzIHRvIFBob3RvU3dpcGUgQ29yZSxcclxuICAgIC8vIGlmIGl0J3Mgb3Blbi5cclxuICAgIHRoaXMucHN3cD8ub24obmFtZSwgZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrPFQ+fSBmblxyXG4gICAqL1xyXG4gIG9mZihuYW1lLCBmbikge1xyXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXS5maWx0ZXIobGlzdGVuZXIgPT4gKGZuICE9PSBsaXN0ZW5lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHN3cD8ub2ZmKG5hbWUsIGZuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gW2RldGFpbHNdXHJcbiAgICogQHJldHVybnMge0F1Z21lbnRlZEV2ZW50PFQ+fVxyXG4gICAqL1xyXG4gIGRpc3BhdGNoKG5hbWUsIGRldGFpbHMpIHtcclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHN3cC5kaXNwYXRjaChuYW1lLCBkZXRhaWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudCA9IC8qKiBAdHlwZSB7QXVnbWVudGVkRXZlbnQ8VD59ICovIChuZXcgUGhvdG9Td2lwZUV2ZW50KG5hbWUsIGRldGFpbHMpKTtcclxuXHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0/LmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRhYmxlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBzZXRXaWR0aEhlaWdodCwgdG9UcmFuc2Zvcm1TdHJpbmcgfSBmcm9tICcuLi91dGlsL3V0aWwuanMnO1xyXG5cclxuY2xhc3MgUGxhY2Vob2xkZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgZmFsc2V9IGltYWdlU3JjXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VTcmMsIGNvbnRhaW5lcikge1xyXG4gICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyXHJcbiAgICAvLyAoc3RyZXRjaGVkIHRodW1ibmFpbCBvciBzaW1wbGUgZGl2IGJlaGluZCB0aGUgbWFpbiBpbWFnZSlcclxuICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50IHwgbnVsbH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICdwc3dwX19pbWcgcHN3cF9faW1nLS1wbGFjZWhvbGRlcicsXHJcbiAgICAgIGltYWdlU3JjID8gJ2ltZycgOiAnZGl2JyxcclxuICAgICAgY29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICBjb25zdCBpbWdFbCA9IC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudH0gKi8gKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGltZ0VsLmRlY29kaW5nID0gJ2FzeW5jJztcclxuICAgICAgaW1nRWwuYWx0ID0gJyc7XHJcbiAgICAgIGltZ0VsLnNyYyA9IGltYWdlU3JjO1xyXG4gICAgICBpbWdFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0lNRycpIHtcclxuICAgICAgLy8gVXNlIHRyYW5zZm9ybSBzY2FsZSgpIHRvIG1vZGlmeSBpbWcgcGxhY2Vob2xkZXIgc2l6ZVxyXG4gICAgICAvLyAoaW5zdGVhZCBvZiBjaGFuZ2luZyB3aWR0aC9oZWlnaHQgZGlyZWN0bHkpLlxyXG4gICAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyZm9ybWFuY2UsIHNwZWNpZmljYWxseSBpbiBpT1MxNSBTYWZhcmkuXHJcbiAgICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgMjUwLCAnYXV0bycpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJzAgMCc7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0b1RyYW5zZm9ybVN0cmluZygwLCAwLCB3aWR0aCAvIDI1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRXaWR0aEhlaWdodCh0aGlzLmVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQ/LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlaG9sZGVyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBpc1NhZmFyaSwgTE9BRF9TVEFURSwgc2V0V2lkdGhIZWlnaHQgfSBmcm9tICcuLi91dGlsL3V0aWwuanMnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi9wbGFjZWhvbGRlci5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi91dGlsL3V0aWwuanMnKS5Mb2FkU3RhdGV9IExvYWRTdGF0ZSAqL1xyXG5cclxuY2xhc3MgQ29udGVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIFNsaWRlIGRhdGFcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBpbnN0YW5jZSBQaG90b1N3aXBlIG9yIFBob3RvU3dpcGVMaWdodGJveCBpbnN0YW5jZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGl0ZW1EYXRhLCBpbnN0YW5jZSwgaW5kZXgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgIHRoaXMuZGF0YSA9IGl0ZW1EYXRhO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtQbGFjZWhvbGRlciB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5zbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggPSAwO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRJbWFnZUhlaWdodCA9IDA7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE51bWJlcih0aGlzLmRhdGEudykgfHwgTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgfHwgMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTnVtYmVyKHRoaXMuZGF0YS5oKSB8fCBOdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgfHwgMDtcclxuXHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzU2xpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNEZWNvZGluZyA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtMb2FkU3RhdGV9ICovXHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5JRExFO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEudHlwZSkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLmRhdGEudHlwZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnNyYykge1xyXG4gICAgICB0aGlzLnR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50eXBlID0gJ2h0bWwnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRJbml0JywgeyBjb250ZW50OiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5rZWVwUGxhY2Vob2xkZXIoKSkge1xyXG4gICAgICAvLyBXaXRoIGRlbGF5LCBhcyBpbWFnZSBtaWdodCBiZSBsb2FkZWQsIGJ1dCBub3QgcmVuZGVyZWRcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBjb250ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGF6eVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbG9hZF1cclxuICAgKi9cclxuICBsb2FkKGlzTGF6eSwgcmVsb2FkKSB7XHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLnVzZVBsYWNlaG9sZGVyKCkpIHtcclxuICAgICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJTcmMgPSB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgICAgICdwbGFjZWhvbGRlclNyYycsXHJcbiAgICAgICAgICAvLyB1c2UgIGltYWdlLWJhc2VkIHBsYWNlaG9sZGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBzbGlkZSxcclxuICAgICAgICAgIC8vIGFzIHJlbmRlcmluZyAoZXZlbiBzbWFsbCBzdHJldGNoZWQgdGh1bWJuYWlsKSBpcyBhbiBleHBlbnNpdmUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAodGhpcy5kYXRhLm1zcmMgJiYgdGhpcy5zbGlkZS5pc0ZpcnN0U2xpZGUpID8gdGhpcy5kYXRhLm1zcmMgOiBmYWxzZSxcclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBuZXcgUGxhY2Vob2xkZXIoXHJcbiAgICAgICAgICBwbGFjZWhvbGRlclNyYyxcclxuICAgICAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlckVsID0gdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50O1xyXG4gICAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciB0byBET00gaWYgaXQgd2FzIGFscmVhZHkgY3JlYXRlZFxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlckVsICYmICFwbGFjZWhvbGRlckVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLnByZXBlbmQocGxhY2Vob2xkZXJFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhcmVsb2FkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExvYWQnLCB7IGNvbnRlbnQ6IHRoaXMsIGlzTGF6eSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2ltZycsICdpbWcnKTtcclxuICAgICAgLy8gU3RhcnQgbG9hZGluZyBvbmx5IGFmdGVyIHdpZHRoIGlzIGRlZmluZWQsIGFzIHNpemVzIG1pZ2h0IGRlcGVuZCBvbiBpdC5cclxuICAgICAgLy8gRHVlIHRvIFNhZmFyaSBmZWF0dXJlLCB3ZSBtdXN0IGRlZmluZSBzaXplcyBiZWZvcmUgc3Jjc2V0LlxyXG4gICAgICBpZiAodGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoaXNMYXp5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cF9fY29udGVudCcsICdkaXYnKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZGF0YS5odG1sIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZWxvYWQgJiYgdGhpcy5zbGlkZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLnVwZGF0ZUNvbnRlbnRTaXplKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0xhenlcclxuICAgKi9cclxuICBsb2FkSW1hZ2UoaXNMYXp5KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZUNvbnRlbnQoKVxyXG4gICAgICB8fCAhdGhpcy5lbGVtZW50XHJcbiAgICAgIHx8IHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMb2FkSW1hZ2UnLCB7IGNvbnRlbnQ6IHRoaXMsIGlzTGF6eSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSAvKiogQHR5cGUgSFRNTEltYWdlRWxlbWVudCAqLyAodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNyY3NldFNpemVzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5zcmNzZXQpIHtcclxuICAgICAgaW1hZ2VFbGVtZW50LnNyY3NldCA9IHRoaXMuZGF0YS5zcmNzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuZGF0YS5zcmMgPz8gJyc7XHJcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5kYXRhLmFsdCA/PyAnJztcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5MT0FESU5HO1xyXG5cclxuICAgIGlmIChpbWFnZUVsZW1lbnQuY29tcGxldGUpIHtcclxuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2VFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpbWFnZUVsZW1lbnQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc2lnbiBzbGlkZSB0byBjb250ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NsaWRlfSBzbGlkZVxyXG4gICAqL1xyXG4gIHNldFNsaWRlKHNsaWRlKSB7XHJcbiAgICB0aGlzLnNsaWRlID0gc2xpZGU7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzbGlkZS5wc3dwO1xyXG5cclxuICAgIC8vIHRvZG86IGRvIHdlIG5lZWQgdG8gdW5zZXQgc2xpZGU/XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250ZW50IGxvYWQgc3VjY2VzcyBoYW5kbGVyXHJcbiAgICovXHJcbiAgb25Mb2FkZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5MT0FERUQ7XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2xvYWRDb21wbGV0ZScsIHsgc2xpZGU6IHRoaXMuc2xpZGUsIGNvbnRlbnQ6IHRoaXMgfSk7XHJcblxyXG4gICAgICAvLyBpZiBjb250ZW50IGlzIHJlbG9hZGVkXHJcbiAgICAgIGlmICh0aGlzLnNsaWRlLmlzQWN0aXZlXHJcbiAgICAgICAgICAmJiB0aGlzLnNsaWRlLmhlYXZ5QXBwZW5kZWRcclxuICAgICAgICAgICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BREVEIHx8IHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1IpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgbG9hZCBlcnJvciBoYW5kbGVyXHJcbiAgICovXHJcbiAgb25FcnJvcigpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkVSUk9SO1xyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUVycm9yKCk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2xvYWRDb21wbGV0ZScsIHsgc2xpZGU6IHRoaXMuc2xpZGUsIGlzRXJyb3I6IHRydWUsIGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2xvYWRFcnJvcicsIHsgc2xpZGU6IHRoaXMuc2xpZGUsIGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgaXMgY3VycmVudGx5IGxvYWRpbmdcclxuICAgKi9cclxuICBpc0xvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdpc0NvbnRlbnRMb2FkaW5nJyxcclxuICAgICAgdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5MT0FESU5HLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGluIGVycm9yIHN0YXRlXHJcbiAgICovXHJcbiAgaXNFcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGltYWdlXHJcbiAgICovXHJcbiAgaXNJbWFnZUNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnaW1hZ2UnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGNvbnRlbnQgc2l6ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaChcclxuICAgICAgJ2NvbnRlbnRSZXNpemUnLFxyXG4gICAgICB7IGNvbnRlbnQ6IHRoaXMsIHdpZHRoLCBoZWlnaHQgfSkuZGVmYXVsdFByZXZlbnRlZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXaWR0aEhlaWdodCh0aGlzLmVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgIXRoaXMuaXNFcnJvcigpKSB7XHJcbiAgICAgIGNvbnN0IGlzSW5pdGlhbFNpemVVcGRhdGUgPSAoIXRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCAmJiB3aWR0aCk7XHJcblxyXG4gICAgICB0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZUhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIGlmIChpc0luaXRpYWxTaXplVXBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3Jjc2V0U2l6ZXMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc2xpZGUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKFxyXG4gICAgICAgICAgJ2ltYWdlU2l6ZUNoYW5nZScsXHJcbiAgICAgICAgICB7IHNsaWRlOiB0aGlzLnNsaWRlLCB3aWR0aCwgaGVpZ2h0LCBjb250ZW50OiB0aGlzIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgY2FuIGJlIHpvb21lZFxyXG4gICAqL1xyXG4gIGlzWm9vbWFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdpc0NvbnRlbnRab29tYWJsZScsXHJcbiAgICAgIHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiAodGhpcy5zdGF0ZSAhPT0gTE9BRF9TVEFURS5FUlJPUiksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgaW1hZ2Ugc3Jjc2V0IHNpemVzIGF0dHJpYnV0ZSBiYXNlZCBvbiB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICovXHJcbiAgdXBkYXRlU3Jjc2V0U2l6ZXMoKSB7XHJcbiAgICAvLyBIYW5kbGUgc3Jjc2V0IHNpemVzIGF0dHJpYnV0ZS5cclxuICAgIC8vXHJcbiAgICAvLyBOZXZlciBsb3dlciBxdWFsaXR5LCBpZiBpdCB3YXMgaW5jcmVhc2VkIHByZXZpb3VzbHkuXHJcbiAgICAvLyBDaHJvbWUgZG9lcyB0aGlzIGF1dG9tYXRpY2FsbHksIEZpcmVmb3ggYW5kIFNhZmFyaSBkbyBub3QsXHJcbiAgICAvLyBzbyB3ZSBzdG9yZSBsYXJnZXN0IHVzZWQgc2l6ZSBpbiBkYXRhc2V0LlxyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VDb250ZW50KCkgfHwgIXRoaXMuZWxlbWVudCB8fCAhdGhpcy5kYXRhLnNyY3NldCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSAvKiogQHR5cGUgSFRNTEltYWdlRWxlbWVudCAqLyAodGhpcy5lbGVtZW50KTtcclxuICAgIGNvbnN0IHNpemVzV2lkdGggPSB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ3NyY3NldFNpemVzV2lkdGgnLFxyXG4gICAgICB0aGlzLmRpc3BsYXllZEltYWdlV2lkdGgsXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemVcclxuICAgICAgfHwgc2l6ZXNXaWR0aCA+IHBhcnNlSW50KGltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplLCAxMClcclxuICAgICkge1xyXG4gICAgICBpbWFnZS5zaXplcyA9IHNpemVzV2lkdGggKyAncHgnO1xyXG4gICAgICBpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZSA9IFN0cmluZyhzaXplc1dpZHRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBjb250ZW50IHNob3VsZCB1c2UgYSBwbGFjZWhvbGRlciAoZnJvbSBtc3JjIGJ5IGRlZmF1bHQpXHJcbiAgICovXHJcbiAgdXNlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICd1c2VDb250ZW50UGxhY2Vob2xkZXInLFxyXG4gICAgICB0aGlzLmlzSW1hZ2VDb250ZW50KCksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkIGNvbnRlbnQgd2l0aCBsYXp5LWxvYWRpbmcgcGFyYW1cclxuICAgKi9cclxuICBsYXp5TG9hZCgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TGF6eUxvYWQnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHBsYWNlaG9sZGVyIHNob3VsZCBiZSBrZXB0IGFmdGVyIGNvbnRlbnQgaXMgbG9hZGVkXHJcbiAgICovXHJcbiAga2VlcFBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNLZWVwaW5nUGxhY2Vob2xkZXInLFxyXG4gICAgICB0aGlzLmlzTG9hZGluZygpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveSB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNsaWRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50RGVzdHJveScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5vbmxvYWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmVsZW1lbnQub25lcnJvciA9IG51bGw7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgZXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGRpc3BsYXlFcnJvcigpIHtcclxuICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgIGxldCBlcnJvck1zZ0VsID0gY3JlYXRlRWxlbWVudCgncHN3cF9fZXJyb3ItbXNnJywgJ2RpdicpO1xyXG4gICAgICBlcnJvck1zZ0VsLmlubmVyVGV4dCA9IHRoaXMuaW5zdGFuY2Uub3B0aW9ucz8uZXJyb3JNc2cgPz8gJyc7XHJcbiAgICAgIGVycm9yTXNnRWwgPSAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqLyAodGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICAgJ2NvbnRlbnRFcnJvckVsZW1lbnQnLFxyXG4gICAgICAgIGVycm9yTXNnRWwsXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApKTtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cF9fY29udGVudCBwc3dwX19lcnJvci1tc2ctY29udGFpbmVyJywgJ2RpdicpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JNc2dFbCk7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnNsaWRlLnVwZGF0ZUNvbnRlbnRTaXplKHRydWUpO1xyXG4gICAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmQgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBhcHBlbmQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0F0dGFjaGVkIHx8ICF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNBdHRhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1IpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QXBwZW5kJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cHBvcnRzRGVjb2RlID0gKCdkZWNvZGUnIGluIHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSkge1xyXG4gICAgICAvLyBVc2UgZGVjb2RlKCkgb24gbmVhcmJ5IHNsaWRlc1xyXG4gICAgICAvL1xyXG4gICAgICAvLyBOZWFyYnkgc2xpZGUgaW1hZ2VzIGFyZSBpbiBET00gYW5kIG5vdCBoaWRkZW4gdmlhIGRpc3BsYXk6bm9uZS5cclxuICAgICAgLy8gSG93ZXZlciwgdGhleSBhcmUgcGxhY2VkIG9mZnNjcmVlbiAodG8gdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUpLlxyXG4gICAgICAvL1xyXG4gICAgICAvLyBTb21lIGJyb3dzZXJzIGRvIG5vdCBjb21wb3NpdGUgdGhlIGltYWdlIHVudGlsIGl0J3MgYWN0dWFsbHkgdmlzaWJsZSxcclxuICAgICAgLy8gdXNpbmcgZGVjb2RlKCkgaGVscHMuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIFlvdSBtaWdodCBhc2sgXCJ3aHkgZG9udCB5b3UganVzdCBkZWNvZGUoKSBhbmQgdGhlbiBhcHBlbmQgYWxsIGltYWdlc1wiLFxyXG4gICAgICAvLyB0aGF0J3MgYmVjYXVzZSBJIHdhbnQgdG8gc2hvdyBpbWFnZSBiZWZvcmUgaXQncyBmdWxseSBsb2FkZWQsXHJcbiAgICAgIC8vIGFzIGJyb3dzZXIgY2FuIHJlbmRlciBwYXJ0cyBvZiBpbWFnZSB3aGlsZSBpdCBpcyBsb2FkaW5nLlxyXG4gICAgICAvLyBXZSBkbyBub3QgZG8gdGhpcyBpbiBTYWZhcmkgZHVlIHRvIHBhcnRpYWwgbG9hZGluZyBidWcuXHJcbiAgICAgIGlmIChzdXBwb3J0c0RlY29kZSAmJiB0aGlzLnNsaWRlICYmICghdGhpcy5zbGlkZS5pc0FjdGl2ZSB8fCBpc1NhZmFyaSgpKSkge1xyXG4gICAgICAgIHRoaXMuaXNEZWNvZGluZyA9IHRydWU7XHJcbiAgICAgICAgLy8gcHVycG9zZWZ1bGx5IHVzaW5nIGZpbmFsbHkgaW5zdGVhZCBvZiB0aGVuLFxyXG4gICAgICAgIC8vIGFzIGlmIHNyY3NldCBzaXplcyBjaGFuZ2VzIGR5bmFtaWNhbGx5IC0gaXQgbWF5IGNhdXNlIGRlY29kZSBlcnJvclxyXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudH0gKi9cclxuICAgICAgICAodGhpcy5lbGVtZW50KS5kZWNvZGUoKS5jYXRjaCgoKSA9PiB7fSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRGVjb2RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcGVuZEltYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZSAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIHRoZSBzbGlkZSxcclxuICAgKiBhY3RpdmUgc2xpZGUgaXMgZ2VuZXJhbGx5IHRoZSBjdXJyZW50IG9uZSxcclxuICAgKiBtZWFuaW5nIHRoZSB1c2VyIGNhbiBzZWUgaXQuXHJcbiAgICovXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFjdGl2YXRlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWRcclxuICAgICAgfHwgIXRoaXMuc2xpZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgdGhpcy5pc0RlY29kaW5nICYmICFpc1NhZmFyaSgpKSB7XHJcbiAgICAgIC8vIGFkZCBpbWFnZSB0byBzbGlkZSB3aGVuIGl0IGJlY29tZXMgYWN0aXZlLFxyXG4gICAgICAvLyBldmVuIGlmIGl0J3Mgbm90IGZpbmlzaGVkIGRlY29kaW5nXHJcbiAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Vycm9yKCkpIHtcclxuICAgICAgdGhpcy5sb2FkKGZhbHNlLCB0cnVlKTsgLy8gdHJ5IHRvIHJlbG9hZFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlYWN0aXZhdGUgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudERlYWN0aXZhdGUnLCB7IGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgY29udGVudCBmcm9tIERPTVxyXG4gICAqL1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuaXNBdHRhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50UmVtb3ZlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmQgdGhlIGltYWdlIGNvbnRlbnQgdG8gc2xpZGUgY29udGFpbmVyXHJcbiAgICovXHJcbiAgYXBwZW5kSW1hZ2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRBcHBlbmRJbWFnZScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbnN1cmUgdGhhdCBlbGVtZW50IGV4aXN0cyBhbmQgaXMgbm90IGFscmVhZHkgYXBwZW5kZWRcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuZWxlbWVudCAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5MT0FERUQgfHwgdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUikge1xyXG4gICAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBob3RvU3dpcGVPcHRpb25zfSBQaG90b1N3aXBlT3B0aW9ucyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9iYXNlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUJhc2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IHBzd3BcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBwc3dwKSB7XHJcbiAgaWYgKG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4pIHtcclxuICAgIGNvbnN0IG5ld1ZpZXdwb3J0U2l6ZSA9IG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4ob3B0aW9ucywgcHN3cCk7XHJcbiAgICBpZiAobmV3Vmlld3BvcnRTaXplKSB7XHJcbiAgICAgIHJldHVybiBuZXdWaWV3cG9ydFNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG5cclxuICAgIC8vIFRPRE86IGhlaWdodCBvbiBtb2JpbGUgaXMgdmVyeSBpbmNvc2lzdGVudCBkdWUgdG8gdG9vbGJhclxyXG4gICAgLy8gZmluZCBhIHdheSB0byBpbXByb3ZlIHRoaXNcclxuICAgIC8vXHJcbiAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gZG9lc24ndCBzZWVtIHRvIHdvcmsgd2VsbFxyXG4gICAgeTogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBwYWRkaW5nIG9wdGlvbi5cclxuICogU3VwcG9ydGVkIGZvcm1hdHM6XHJcbiAqXHJcbiAqIC8vIE9iamVjdFxyXG4gKiBwYWRkaW5nOiB7XHJcbiAqICB0b3A6IDAsXHJcbiAqICBib3R0b206IDAsXHJcbiAqICBsZWZ0OiAwLFxyXG4gKiAgcmlnaHQ6IDBcclxuICogfVxyXG4gKlxyXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgb2JqZWN0XHJcbiAqIHBhZGRpbmdGbjogKHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSA9PiB7XHJcbiAqICByZXR1cm4ge1xyXG4gKiAgICB0b3A6IDAsXHJcbiAqICAgIGJvdHRvbTogMCxcclxuICogICAgbGVmdDogMCxcclxuICogICAgcmlnaHQ6IDBcclxuICogIH07XHJcbiAqIH1cclxuICpcclxuICogLy8gTGVnYWN5IHZhcmlhbnRcclxuICogcGFkZGluZ0xlZnQ6IDAsXHJcbiAqIHBhZGRpbmdSaWdodDogMCxcclxuICogcGFkZGluZ1RvcDogMCxcclxuICogcGFkZGluZ0JvdHRvbTogMCxcclxuICpcclxuICogQHBhcmFtIHsnbGVmdCcgfCAndG9wJyB8ICdib3R0b20nIHwgJ3JpZ2h0J30gcHJvcFxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zIFBob3RvU3dpcGUgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1BvaW50fSB2aWV3cG9ydFNpemUgUGhvdG9Td2lwZSB2aWV3cG9ydCBzaXplLCBmb3IgZXhhbXBsZTogeyB4OjgwMCwgeTo2MDAgfVxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYWRkaW5nT3B0aW9uKHByb3AsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgbGV0IHBhZGRpbmdWYWx1ZSA9IDA7XHJcblxyXG4gIGlmIChvcHRpb25zLnBhZGRpbmdGbikge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nRm4odmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpW3Byb3BdO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XHJcbiAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zLnBhZGRpbmdbcHJvcF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGxlZ2FjeVByb3BOYW1lID0gJ3BhZGRpbmcnICsgcHJvcFswXS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGlmIChvcHRpb25zW2xlZ2FjeVByb3BOYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnNbbGVnYWN5UHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE51bWJlcihwYWRkaW5nVmFsdWUpIHx8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHZpZXdwb3J0U2l6ZVxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGFcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB2aWV3cG9ydFNpemUueFxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbignbGVmdCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigncmlnaHQnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCksXHJcbiAgICB5OiB2aWV3cG9ydFNpemUueVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigndG9wJywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdib3R0b20nLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICB9O1xyXG59XHJcbiIsImNvbnN0IE1BWF9JTUFHRV9XSURUSCA9IDQwMDA7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7J2ZpdCcgfCAnZmlsbCcgfCBudW1iZXIgfCAoKHpvb21MZXZlbE9iamVjdDogWm9vbUxldmVsKSA9PiBudW1iZXIpfSBab29tTGV2ZWxPcHRpb24gKi9cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHpvb20gbGV2ZWxzIGZvciBzcGVjaWZpYyBzbGlkZS5cclxuICogRGVwZW5kcyBvbiB2aWV3cG9ydCBzaXplIGFuZCBpbWFnZSBzaXplLlxyXG4gKi9cclxuY2xhc3MgWm9vbUxldmVsIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zIFBob3RvU3dpcGUgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBTbGlkZSBkYXRhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBbcHN3cF0gUGhvdG9Td2lwZSBpbnN0YW5jZSwgY2FuIGJlIHVuZGVmaW5lZCBpZiBub3QgaW5pdGlhbGl6ZWQgeWV0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgaXRlbURhdGEsIGluZGV4LCBwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuaXRlbURhdGEgPSBpdGVtRGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIC8qKiBAdHlwZSB7IFBvaW50IHwgbnVsbCB9ICovXHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7IFBvaW50IHwgbnVsbCB9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0gbnVsbDtcclxuICAgIHRoaXMuZml0ID0gMTtcclxuICAgIHRoaXMuZmlsbCA9IDE7XHJcbiAgICB0aGlzLnZGaWxsID0gMTtcclxuICAgIHRoaXMuaW5pdGlhbCA9IDE7XHJcbiAgICB0aGlzLnNlY29uZGFyeSA9IDE7XHJcbiAgICB0aGlzLm1heCA9IDE7XHJcbiAgICB0aGlzLm1pbiA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgaW5pdGlhbCwgc2Vjb25kYXJ5IGFuZCBtYXhpbXVtIHpvb20gbGV2ZWwgZm9yIHRoZSBzcGVjaWZpZWQgc2xpZGUuXHJcbiAgICpcclxuICAgKiBJdCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gZWl0aGVyIGltYWdlIG9yIHZpZXdwb3J0IHNpemUgY2hhbmdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhIZWlnaHRcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwYW5BcmVhU2l6ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZShtYXhXaWR0aCwgbWF4SGVpZ2h0LCBwYW5BcmVhU2l6ZSkge1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIGNvbnN0IGVsZW1lbnRTaXplID0geyB4OiBtYXhXaWR0aCwgeTogbWF4SGVpZ2h0IH07XHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0gZWxlbWVudFNpemU7XHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0gcGFuQXJlYVNpemU7XHJcblxyXG4gICAgY29uc3QgaFJhdGlvID0gcGFuQXJlYVNpemUueCAvIGVsZW1lbnRTaXplLng7XHJcbiAgICBjb25zdCB2UmF0aW8gPSBwYW5BcmVhU2l6ZS55IC8gZWxlbWVudFNpemUueTtcclxuXHJcbiAgICB0aGlzLmZpdCA9IE1hdGgubWluKDEsIGhSYXRpbyA8IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbyk7XHJcbiAgICB0aGlzLmZpbGwgPSBNYXRoLm1pbigxLCBoUmF0aW8gPiB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW8pO1xyXG5cclxuICAgIC8vIHpvb20udkZpbGwgZGVmaW5lcyB6b29tIGxldmVsIG9mIHRoZSBpbWFnZVxyXG4gICAgLy8gd2hlbiBpdCBoYXMgMTAwJSBvZiB2aWV3cG9ydCB2ZXJ0aWNhbCBzcGFjZSAoaGVpZ2h0KVxyXG4gICAgdGhpcy52RmlsbCA9IE1hdGgubWluKDEsIHZSYXRpbyk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsID0gdGhpcy5fZ2V0SW5pdGlhbCgpO1xyXG4gICAgdGhpcy5zZWNvbmRhcnkgPSB0aGlzLl9nZXRTZWNvbmRhcnkoKTtcclxuICAgIHRoaXMubWF4ID0gTWF0aC5tYXgoXHJcbiAgICAgIHRoaXMuaW5pdGlhbCxcclxuICAgICAgdGhpcy5zZWNvbmRhcnksXHJcbiAgICAgIHRoaXMuX2dldE1heCgpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubWluID0gTWF0aC5taW4oXHJcbiAgICAgIHRoaXMuZml0LFxyXG4gICAgICB0aGlzLmluaXRpYWwsXHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5XHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgdGhpcy5wc3dwLmRpc3BhdGNoKCd6b29tTGV2ZWxzVXBkYXRlJywgeyB6b29tTGV2ZWxzOiB0aGlzLCBzbGlkZURhdGE6IHRoaXMuaXRlbURhdGEgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgdXNlci1kZWZpbmVkIHpvb20gb3B0aW9uLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geydpbml0aWFsJyB8ICdzZWNvbmRhcnknIHwgJ21heCd9IG9wdGlvblByZWZpeCBab29tIGxldmVsIG9wdGlvbiBwcmVmaXggKGluaXRpYWwsIHNlY29uZGFyeSwgbWF4KVxyXG4gICAqIEByZXR1cm5zIHsgbnVtYmVyIHwgdW5kZWZpbmVkIH1cclxuICAgKi9cclxuICBfcGFyc2Vab29tTGV2ZWxPcHRpb24ob3B0aW9uUHJlZml4KSB7XHJcbiAgICBjb25zdCBvcHRpb25OYW1lID0gLyoqIEB0eXBlIHsnaW5pdGlhbFpvb21MZXZlbCcgfCAnc2Vjb25kYXJ5Wm9vbUxldmVsJyB8ICdtYXhab29tTGV2ZWwnfSAqLyAoXHJcbiAgICAgIG9wdGlvblByZWZpeCArICdab29tTGV2ZWwnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSB0aGlzLm9wdGlvbnNbb3B0aW9uTmFtZV07XHJcblxyXG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gb3B0aW9uVmFsdWUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSAnZmlsbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uVmFsdWUgPT09ICdmaXQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTnVtYmVyKG9wdGlvblZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB6b29tIGxldmVsIHRvIHdoaWNoIGltYWdlIHdpbGwgYmUgem9vbWVkIGFmdGVyIGRvdWJsZS10YXAgZ2VzdHVyZSxcclxuICAgKiBvciB3aGVuIHVzZXIgY2xpY2tzIG9uIHpvb20gaWNvbixcclxuICAgKiBvciBtb3VzZS1jbGljayBvbiBpbWFnZSBpdHNlbGYuXHJcbiAgICogSWYgeW91IHJldHVybiAxIGltYWdlIHdpbGwgYmUgem9vbWVkIHRvIGl0cyBvcmlnaW5hbCBzaXplLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldFNlY29uZGFyeSgpIHtcclxuICAgIGxldCBjdXJyWm9vbUxldmVsID0gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ3NlY29uZGFyeScpO1xyXG5cclxuICAgIGlmIChjdXJyWm9vbUxldmVsKSB7XHJcbiAgICAgIHJldHVybiBjdXJyWm9vbUxldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDN4IG9mIFwiZml0XCIgc3RhdGUsIGJ1dCBub3QgbGFyZ2VyIHRoYW4gb3JpZ2luYWxcclxuICAgIGN1cnJab29tTGV2ZWwgPSBNYXRoLm1pbigxLCB0aGlzLmZpdCAqIDMpO1xyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRTaXplICYmIGN1cnJab29tTGV2ZWwgKiB0aGlzLmVsZW1lbnRTaXplLnggPiBNQVhfSU1BR0VfV0lEVEgpIHtcclxuICAgICAgY3Vyclpvb21MZXZlbCA9IE1BWF9JTUFHRV9XSURUSCAvIHRoaXMuZWxlbWVudFNpemUueDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3Vyclpvb21MZXZlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpbml0aWFsIGltYWdlIHpvb20gbGV2ZWwuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0SW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignaW5pdGlhbCcpIHx8IHRoaXMuZml0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSB6b29tIGxldmVsIHdoZW4gdXNlciB6b29tc1xyXG4gICAqIHZpYSB6b29tL3BpbmNoIGdlc3R1cmUsXHJcbiAgICogdmlhIGNtZC9jdHJsLXdoZWVsIG9yIHZpYSB0cmFja3BhZC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRNYXgoKSB7XHJcbiAgICAvLyBtYXggem9vbSBsZXZlbCBpcyB4NCBmcm9tIFwiZml0IHN0YXRlXCIsXHJcbiAgICAvLyB1c2VkIGZvciB6b29tIGdlc3R1cmUgYW5kIGN0cmwvdHJhY2twYWQgem9vbVxyXG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdtYXgnKSB8fCBNYXRoLm1heCgxLCB0aGlzLmZpdCAqIDQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgWm9vbUxldmVsO1xyXG4iLCJpbXBvcnQgeyBnZXRWaWV3cG9ydFNpemUsIGdldFBhbkFyZWFTaXplIH0gZnJvbSAnLi4vdXRpbC92aWV3cG9ydC1zaXplLmpzJztcclxuaW1wb3J0IFpvb21MZXZlbCBmcm9tICcuL3pvb20tbGV2ZWwuanMnO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29udGVudC5qcycpLmRlZmF1bHR9IENvbnRlbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2Jhc2UuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlQmFzZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuXHJcbmNvbnN0IE1JTl9TTElERVNfVE9fQ0FDSEUgPSA1O1xyXG5cclxuLyoqXHJcbiAqIExhenktbG9hZCBhbiBpbWFnZVxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYm90aCBieSBMaWdodGJveCBhbmQgUGhvdG9Td2lwZSBjb3JlLFxyXG4gKiB0aHVzIGl0IGNhbiBiZSBjYWxsZWQgYmVmb3JlIGRpYWxvZyBpcyBvcGVuZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBpbnN0YW5jZSBQaG90b1N3aXBlIG9yIFBob3RvU3dpcGVMaWdodGJveCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICogQHJldHVybnMge0NvbnRlbnR9IEltYWdlIHRoYXQgaXMgYmVpbmcgZGVjb2RlZCBvciBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBpbnN0YW5jZS5jcmVhdGVDb250ZW50RnJvbURhdGEoaXRlbURhdGEsIGluZGV4KTtcclxuICAvKiogQHR5cGUge1pvb21MZXZlbCB8IHVuZGVmaW5lZH0gKi9cclxuICBsZXQgem9vbUxldmVsO1xyXG5cclxuICBjb25zdCB7IG9wdGlvbnMgfSA9IGluc3RhbmNlO1xyXG5cclxuICAvLyBXZSBuZWVkIHRvIGtub3cgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2UgdG8gcHJlbG9hZCBpdCxcclxuICAvLyBhcyBpdCBtaWdodCB1c2Ugc3Jjc2V0LCBhbmQgd2UgbmVlZCB0byBkZWZpbmUgc2l6ZXNcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgem9vbUxldmVsID0gbmV3IFpvb21MZXZlbChvcHRpb25zLCBpdGVtRGF0YSwgLTEpO1xyXG5cclxuICAgIGxldCB2aWV3cG9ydFNpemU7XHJcbiAgICBpZiAoaW5zdGFuY2UucHN3cCkge1xyXG4gICAgICB2aWV3cG9ydFNpemUgPSBpbnN0YW5jZS5wc3dwLnZpZXdwb3J0U2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFuQXJlYVNpemUgPSBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCk7XHJcbiAgICB6b29tTGV2ZWwudXBkYXRlKGNvbnRlbnQud2lkdGgsIGNvbnRlbnQuaGVpZ2h0LCBwYW5BcmVhU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LmxhenlMb2FkKCk7XHJcblxyXG4gIGlmICh6b29tTGV2ZWwpIHtcclxuICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkU2l6ZShcclxuICAgICAgTWF0aC5jZWlsKGNvbnRlbnQud2lkdGggKiB6b29tTGV2ZWwuaW5pdGlhbCksXHJcbiAgICAgIE1hdGguY2VpbChjb250ZW50LmhlaWdodCAqIHpvb21MZXZlbC5pbml0aWFsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIExhenktbG9hZHMgc3BlY2lmaWMgc2xpZGUuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBib3RoIGJ5IExpZ2h0Ym94IGFuZCBQaG90b1N3aXBlIGNvcmUsXHJcbiAqIHRodXMgaXQgY2FuIGJlIGNhbGxlZCBiZWZvcmUgZGlhbG9nIGlzIG9wZW5lZC5cclxuICpcclxuICogQnkgZGVmYXVsdCwgaXQgbG9hZHMgaW1hZ2UgYmFzZWQgb24gdmlld3BvcnQgc2l6ZSBhbmQgaW5pdGlhbCB6b29tIGxldmVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggZXZlbnRhYmxlIGluc3RhbmNlXHJcbiAqIEByZXR1cm5zIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxhenlMb2FkU2xpZGUoaW5kZXgsIGluc3RhbmNlKSB7XHJcbiAgY29uc3QgaXRlbURhdGEgPSBpbnN0YW5jZS5nZXRJdGVtRGF0YShpbmRleCk7XHJcblxyXG4gIGlmIChpbnN0YW5jZS5kaXNwYXRjaCgnbGF6eUxvYWRTbGlkZScsIHsgaW5kZXgsIGl0ZW1EYXRhIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJldHVybiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCk7XHJcbn1cclxuXHJcbmNsYXNzIENvbnRlbnRMb2FkZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICAvLyBUb3RhbCBhbW91bnQgb2YgY2FjaGVkIGltYWdlc1xyXG4gICAgdGhpcy5saW1pdCA9IE1hdGgubWF4KFxyXG4gICAgICBwc3dwLm9wdGlvbnMucHJlbG9hZFswXSArIHBzd3Aub3B0aW9ucy5wcmVsb2FkWzFdICsgMSxcclxuICAgICAgTUlOX1NMSURFU19UT19DQUNIRVxyXG4gICAgKTtcclxuICAgIC8qKiBAdHlwZSB7Q29udGVudFtdfSAqL1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExhenkgbG9hZCBuZWFyYnkgc2xpZGVzIGJhc2VkIG9uIGBwcmVsb2FkYCBvcHRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RpZmZdIERpZmZlcmVuY2UgYmV0d2VlbiBzbGlkZSBpbmRleGVzIHRoYXQgd2FzIGNoYW5nZWQgcmVjZW50bHksIG9yIDAuXHJcbiAgICovXHJcbiAgdXBkYXRlTGF6eShkaWZmKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHBzd3AuZGlzcGF0Y2goJ2xhenlMb2FkJykuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBwcmVsb2FkIH0gPSBwc3dwLm9wdGlvbnM7XHJcbiAgICBjb25zdCBpc0ZvcndhcmQgPSBkaWZmID09PSB1bmRlZmluZWQgPyB0cnVlIDogKGRpZmYgPj0gMCk7XHJcbiAgICBsZXQgaTtcclxuXHJcbiAgICAvLyBwcmVsb2FkWzFdIC0gbnVtIGl0ZW1zIHRvIHByZWxvYWQgaW4gZm9yd2FyZCBkaXJlY3Rpb25cclxuICAgIGZvciAoaSA9IDA7IGkgPD0gcHJlbG9hZFsxXTsgaSsrKSB7XHJcbiAgICAgIHRoaXMubG9hZFNsaWRlQnlJbmRleChwc3dwLmN1cnJJbmRleCArIChpc0ZvcndhcmQgPyBpIDogKC1pKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByZWxvYWRbMF0gLSBudW0gaXRlbXMgdG8gcHJlbG9hZCBpbiBiYWNrd2FyZCBkaXJlY3Rpb25cclxuICAgIGZvciAoaSA9IDE7IGkgPD0gcHJlbG9hZFswXTsgaSsrKSB7XHJcbiAgICAgIHRoaXMubG9hZFNsaWRlQnlJbmRleChwc3dwLmN1cnJJbmRleCArIChpc0ZvcndhcmQgPyAoLWkpIDogaSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluaXRpYWxJbmRleFxyXG4gICAqL1xyXG4gIGxvYWRTbGlkZUJ5SW5kZXgoaW5pdGlhbEluZGV4KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHN3cC5nZXRMb29wZWRJbmRleChpbml0aWFsSW5kZXgpO1xyXG4gICAgLy8gdHJ5IHRvIGdldCBjYWNoZWQgY29udGVudFxyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRCeUluZGV4KGluZGV4KTtcclxuICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAvLyBubyBjYWNoZWQgY29udGVudCwgc28gdHJ5IHRvIGxvYWQgZnJvbSBzY3JhdGNoOlxyXG4gICAgICBjb250ZW50ID0gbGF6eUxvYWRTbGlkZShpbmRleCwgdGhpcy5wc3dwKTtcclxuICAgICAgLy8gaWYgY29udGVudCBjYW4gYmUgbG9hZGVkLCBhZGQgaXQgdG8gY2FjaGU6XHJcbiAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NhY2hlKGNvbnRlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlfSBzbGlkZVxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fVxyXG4gICAqL1xyXG4gIGdldENvbnRlbnRCeVNsaWRlKHNsaWRlKSB7XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudEJ5SW5kZXgoc2xpZGUuaW5kZXgpO1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjb250ZW50IGlmIG5vdCBmb3VuZCBpbiBjYWNoZVxyXG4gICAgICBjb250ZW50ID0gdGhpcy5wc3dwLmNyZWF0ZUNvbnRlbnRGcm9tRGF0YShzbGlkZS5kYXRhLCBzbGlkZS5pbmRleCk7XHJcbiAgICAgIHRoaXMuYWRkVG9DYWNoZShjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhc3NpZ24gc2xpZGUgdG8gY29udGVudFxyXG4gICAgY29udGVudC5zZXRTbGlkZShzbGlkZSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NvbnRlbnR9IGNvbnRlbnRcclxuICAgKi9cclxuICBhZGRUb0NhY2hlKGNvbnRlbnQpIHtcclxuICAgIC8vIG1vdmUgdG8gdGhlIGVuZCBvZiBhcnJheVxyXG4gICAgdGhpcy5yZW1vdmVCeUluZGV4KGNvbnRlbnQuaW5kZXgpO1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5fY2FjaGVkSXRlbXMubGVuZ3RoID4gdGhpcy5saW1pdCkge1xyXG4gICAgICAvLyBEZXN0cm95IHRoZSBmaXJzdCBjb250ZW50IHRoYXQncyBub3QgYXR0YWNoZWRcclxuICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuX2NhY2hlZEl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhaXRlbS5pc0F0dGFjaGVkICYmICFpdGVtLmhhc1NsaWRlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZEl0ZW0gPSB0aGlzLl9jYWNoZWRJdGVtcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSlbMF07XHJcbiAgICAgICAgcmVtb3ZlZEl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFuIGltYWdlIGZyb20gY2FjaGUsIGRvZXMgbm90IGRlc3Ryb3koKSBpdCwganVzdCByZW1vdmVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICovXHJcbiAgcmVtb3ZlQnlJbmRleChpbmRleCkge1xyXG4gICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuX2NhY2hlZEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaW5kZXggPT09IGluZGV4KTtcclxuICAgIGlmIChpbmRleFRvUmVtb3ZlICE9PSAtMSkge1xyXG4gICAgICB0aGlzLl9jYWNoZWRJdGVtcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7Q29udGVudCB8IHVuZGVmaW5lZH1cclxuICAgKi9cclxuICBnZXRDb250ZW50QnlJbmRleChpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZEl0ZW1zLmZpbmQoY29udGVudCA9PiBjb250ZW50LmluZGV4ID09PSBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMuZm9yRWFjaChjb250ZW50ID0+IGNvbnRlbnQuZGVzdHJveSgpKTtcclxuICAgIHRoaXMuX2NhY2hlZEl0ZW1zID0gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TG9hZGVyO1xyXG4iLCJpbXBvcnQgRXZlbnRhYmxlIGZyb20gJy4vZXZlbnRhYmxlLmpzJztcclxuaW1wb3J0IHsgZ2V0RWxlbWVudHNGcm9tT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC91dGlsLmpzJztcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vc2xpZGUvY29udGVudC5qcyc7XHJcbmltcG9ydCB7IGxhenlMb2FkRGF0YSB9IGZyb20gJy4uL3NsaWRlL2xvYWRlci5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL3Bob3Rvc3dpcGUuanNcIikuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL3NsaWRlL3NsaWRlLmpzXCIpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKipcclxuICogUGhvdG9Td2lwZSBiYXNlIGNsYXNzIHRoYXQgY2FuIHJldHJpZXZlIGRhdGEgYWJvdXQgZXZlcnkgc2xpZGUuXHJcbiAqIFNoYXJlZCBieSBQaG90b1N3aXBlIENvcmUgYW5kIFBob3RvU3dpcGUgTGlnaHRib3hcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGVCYXNlIGV4dGVuZHMgRXZlbnRhYmxlIHtcclxuICAvKipcclxuICAgKiBHZXQgdG90YWwgbnVtYmVyIG9mIHNsaWRlc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXROdW1JdGVtcygpIHtcclxuICAgIGxldCBudW1JdGVtcyA9IDA7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5vcHRpb25zPy5kYXRhU291cmNlO1xyXG5cclxuICAgIGlmIChkYXRhU291cmNlICYmICdsZW5ndGgnIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gbWF5IGJlIGFuIGFycmF5IG9yIGp1c3Qgb2JqZWN0IHdpdGggbGVuZ3RoIHByb3BlcnR5XHJcbiAgICAgIG51bUl0ZW1zID0gZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UgJiYgJ2dhbGxlcnknIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gcXVlcnkgRE9NIGVsZW1lbnRzXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIGRhdGFTb3VyY2UuaXRlbXMgPSB0aGlzLl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZGF0YVNvdXJjZS5nYWxsZXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBudW1JdGVtcyA9IGRhdGFTb3VyY2UuaXRlbXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50LCBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kaXNwYXRjaCgnbnVtSXRlbXMnLCB7XHJcbiAgICAgIGRhdGFTb3VyY2UsXHJcbiAgICAgIG51bUl0ZW1zXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnbnVtSXRlbXMnLCBldmVudC5udW1JdGVtcywgZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gc2xpZGVEYXRhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9XHJcbiAgICovXHJcbiAgY3JlYXRlQ29udGVudEZyb21EYXRhKHNsaWRlRGF0YSwgaW5kZXgpIHtcclxuICAgIHJldHVybiBuZXcgQ29udGVudChzbGlkZURhdGEsIHRoaXMsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpdGVtIGRhdGEgYnkgaW5kZXguXHJcbiAgICpcclxuICAgKiBcIml0ZW0gZGF0YVwiIHNob3VsZCBjb250YWluIG5vcm1hbGl6ZWQgaW5mb3JtYXRpb24gdGhhdCBQaG90b1N3aXBlIG5lZWRzIHRvIGdlbmVyYXRlIGEgc2xpZGUuXHJcbiAgICogRm9yIGV4YW1wbGUsIGl0IG1heSBjb250YWluIHByb3BlcnRpZXMgbGlrZVxyXG4gICAqIGBzcmNgLCBgc3Jjc2V0YCwgYHdgLCBgaGAsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBhIHNsaWRlIHdpdGggaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7U2xpZGVEYXRhfVxyXG4gICAqL1xyXG4gIGdldEl0ZW1EYXRhKGluZGV4KSB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5vcHRpb25zPy5kYXRhU291cmNlO1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZURhdGEgfCBIVE1MRWxlbWVudH0gKi9cclxuICAgIGxldCBkYXRhU291cmNlSXRlbSA9IHt9O1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVNvdXJjZSkpIHtcclxuICAgICAgLy8gRGF0YXNvdXJjZSBpcyBhbiBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAgICBkYXRhU291cmNlSXRlbSA9IGRhdGFTb3VyY2VbaW5kZXhdO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlICYmICdnYWxsZXJ5JyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIGRhdGFTb3VyY2UgaGFzIGdhbGxlcnkgcHJvcGVydHksXHJcbiAgICAgIC8vIHRodXMgaXQgd2FzIGNyZWF0ZWQgYnkgTGlnaHRib3gsIGJhc2VkIG9uXHJcbiAgICAgIC8vIGdhbGxlcnkgYW5kIGNoaWxkcmVuIG9wdGlvbnNcclxuXHJcbiAgICAgIC8vIHF1ZXJ5IERPTSBlbGVtZW50c1xyXG4gICAgICBpZiAoIWRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBkYXRhU291cmNlLml0ZW1zID0gdGhpcy5fZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGRhdGFTb3VyY2UuZ2FsbGVyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRhdGFTb3VyY2VJdGVtID0gZGF0YVNvdXJjZS5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1EYXRhID0gZGF0YVNvdXJjZUl0ZW07XHJcblxyXG4gICAgaWYgKGl0ZW1EYXRhIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICBpdGVtRGF0YSA9IHRoaXMuX2RvbUVsZW1lbnRUb0l0ZW1EYXRhKGl0ZW1EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNwYXRjaGluZyB0aGUgaXRlbURhdGEgZXZlbnQsXHJcbiAgICAvLyBpdCdzIGEgbGVnYWN5IHZlcmlvbiBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kaXNwYXRjaCgnaXRlbURhdGEnLCB7XHJcbiAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YSB8fCB7fSxcclxuICAgICAgaW5kZXhcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnaXRlbURhdGEnLCBldmVudC5pdGVtRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFycmF5IG9mIGdhbGxlcnkgRE9NIGVsZW1lbnRzLFxyXG4gICAqIGJhc2VkIG9uIGNoaWxkU2VsZWN0b3IgYW5kIGdhbGxlcnkgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGdhbGxlcnlFbGVtZW50XHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119XHJcbiAgICovXHJcbiAgX2dldEdhbGxlcnlET01FbGVtZW50cyhnYWxsZXJ5RWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucz8uY2hpbGRyZW4gfHwgdGhpcy5vcHRpb25zPy5jaGlsZFNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBnZXRFbGVtZW50c0Zyb21PcHRpb24oXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZFNlbGVjdG9yLFxyXG4gICAgICAgIGdhbGxlcnlFbGVtZW50XHJcbiAgICAgICkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtnYWxsZXJ5RWxlbWVudF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBET00gZWxlbWVudCB0byBpdGVtIGRhdGEgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBET00gZWxlbWVudFxyXG4gICAqIEByZXR1cm5zIHtTbGlkZURhdGF9XHJcbiAgICovXHJcbiAgX2RvbUVsZW1lbnRUb0l0ZW1EYXRhKGVsZW1lbnQpIHtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGVEYXRhfSAqL1xyXG4gICAgY29uc3QgaXRlbURhdGEgPSB7XHJcbiAgICAgIGVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGlua0VsID0gLyoqIEB0eXBlIHtIVE1MQW5jaG9yRWxlbWVudH0gKi8gKFxyXG4gICAgICBlbGVtZW50LnRhZ05hbWUgPT09ICdBJ1xyXG4gICAgICAgID8gZWxlbWVudFxyXG4gICAgICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJylcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGxpbmtFbCkge1xyXG4gICAgICAvLyBzcmMgY29tZXMgZnJvbSBkYXRhLXBzd3Atc3JjIGF0dHJpYnV0ZSxcclxuICAgICAgLy8gaWYgaXQncyBlbXB0eSBsaW5rIGhyZWYgaXMgdXNlZFxyXG4gICAgICBpdGVtRGF0YS5zcmMgPSBsaW5rRWwuZGF0YXNldC5wc3dwU3JjIHx8IGxpbmtFbC5ocmVmO1xyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BTcmNzZXQpIHtcclxuICAgICAgICBpdGVtRGF0YS5zcmNzZXQgPSBsaW5rRWwuZGF0YXNldC5wc3dwU3Jjc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtRGF0YS53aWR0aCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BXaWR0aCA/IHBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LnBzd3BXaWR0aCwgMTApIDogMDtcclxuICAgICAgaXRlbURhdGEuaGVpZ2h0ID0gbGlua0VsLmRhdGFzZXQucHN3cEhlaWdodCA/IHBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LnBzd3BIZWlnaHQsIDEwKSA6IDA7XHJcblxyXG4gICAgICAvLyBzdXBwb3J0IGxlZ2FjeSB3ICYgaCBwcm9wZXJ0aWVzXHJcbiAgICAgIGl0ZW1EYXRhLncgPSBpdGVtRGF0YS53aWR0aDtcclxuICAgICAgaXRlbURhdGEuaCA9IGl0ZW1EYXRhLmhlaWdodDtcclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwVHlwZSkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnR5cGUgPSBsaW5rRWwuZGF0YXNldC5wc3dwVHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGh1bWJuYWlsRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICAgICAgaWYgKHRodW1ibmFpbEVsKSB7XHJcbiAgICAgICAgLy8gbXNyYyBpcyBVUkwgdG8gcGxhY2Vob2xkZXIgaW1hZ2UgdGhhdCdzIGRpc3BsYXllZCBiZWZvcmUgbGFyZ2UgaW1hZ2UgaXMgbG9hZGVkXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBpdCdzIGRpc3BsYXllZCBvbmx5IGZvciB0aGUgZmlyc3Qgc2xpZGVcclxuICAgICAgICBpdGVtRGF0YS5tc3JjID0gdGh1bWJuYWlsRWwuY3VycmVudFNyYyB8fCB0aHVtYm5haWxFbC5zcmM7XHJcbiAgICAgICAgaXRlbURhdGEuYWx0ID0gdGh1bWJuYWlsRWwuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BDcm9wcGVkIHx8IGxpbmtFbC5kYXRhc2V0LmNyb3BwZWQpIHtcclxuICAgICAgICBpdGVtRGF0YS50aHVtYkNyb3BwZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdkb21JdGVtRGF0YScsIGl0ZW1EYXRhLCBlbGVtZW50LCBsaW5rRWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6eS1sb2FkIGJ5IHNsaWRlIGRhdGFcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fSBJbWFnZSB0aGF0IGlzIGJlaW5nIGRlY29kZWQgb3IgZmFsc2UuXHJcbiAgICovXHJcbiAgbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gICAgcmV0dXJuIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgdGhpcywgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9Td2lwZUJhc2U7XHJcbiIsImltcG9ydCB7XHJcbiAgc3BlY2lhbEtleVVzZWQsXHJcbiAgZ2V0RWxlbWVudHNGcm9tT3B0aW9uLFxyXG4gIGlzUHN3cENsYXNzXHJcbn0gZnJvbSAnLi4vdXRpbC91dGlsLmpzJztcclxuXHJcbmltcG9ydCBQaG90b1N3aXBlQmFzZSBmcm9tICcuLi9jb3JlL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBsYXp5TG9hZFNsaWRlIH0gZnJvbSAnLi4vc2xpZGUvbG9hZGVyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi90eXBlcy5qcycpLlR5cGU8VD59IFR5cGU8VD5cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5EYXRhU291cmNlfSBEYXRhU291cmNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9jb250ZW50LmpzJykuZGVmYXVsdH0gQ29udGVudCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9ldmVudGFibGUuanMnKS5QaG90b1N3aXBlRXZlbnRzTWFwfSBQaG90b1N3aXBlRXZlbnRzTWFwICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2V2ZW50YWJsZS5qcycpLlBob3RvU3dpcGVGaWx0ZXJzTWFwfSBQaG90b1N3aXBlRmlsdGVyc01hcCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2V2ZW50YWJsZS5qcycpLkV2ZW50Q2FsbGJhY2s8VD59IEV2ZW50Q2FsbGJhY2s8VD5cclxuICovXHJcblxyXG4vKipcclxuICogUGhvdG9Td2lwZSBMaWdodGJveFxyXG4gKlxyXG4gKiAtIElmIHVzZXIgaGFzIHVuc3VwcG9ydGVkIGJyb3dzZXIgaXQgZmFsbHMgYmFjayB0byBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uIChqdXN0IG9wZW5zIFVSTClcclxuICogLSBCaW5kcyBjbGljayBldmVudCB0byBsaW5rcyB0aGF0IHNob3VsZCBvcGVuIFBob3RvU3dpcGVcclxuICogLSBwYXJzZXMgRE9NIHN0cmN0dXJlIGZvciBQaG90b1N3aXBlIChyZXRyaWV2ZXMgbGFyZ2UgaW1hZ2UgVVJMcyBhbmQgc2l6ZXMpXHJcbiAqIC0gSW5pdGlhbGl6ZXMgUGhvdG9Td2lwZVxyXG4gKlxyXG4gKlxyXG4gKiBMb2FkZXIgb3B0aW9ucyB1c2UgdGhlIHNhbWUgb2JqZWN0IGFzIFBob3RvU3dpcGUsIGFuZCBzdXBwb3J0cyBzdWNoIG9wdGlvbnM6XHJcbiAqXHJcbiAqIGdhbGxlcnkgLSBFbGVtZW50IHwgRWxlbWVudFtdIHwgTm9kZUxpc3QgfCBzdHJpbmcgc2VsZWN0b3IgZm9yIHRoZSBnYWxsZXJ5IGVsZW1lbnRcclxuICogY2hpbGRyZW4gLSBFbGVtZW50IHwgRWxlbWVudFtdIHwgTm9kZUxpc3QgfCBzdHJpbmcgc2VsZWN0b3IgZm9yIHRoZSBnYWxsZXJ5IGNoaWxkcmVuXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBQaG90b1N3aXBlTGlnaHRib3ggZXh0ZW5kcyBQaG90b1N3aXBlQmFzZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gW29wdGlvbnNdXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8qKiBAdHlwZSB7UGhvdG9Td2lwZU9wdGlvbnN9ICovXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdGhpcy5fdWlkID0gMDtcclxuICAgIHRoaXMuc2hvdWxkT3BlbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUge0NvbnRlbnQgfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3ByZWxvYWRlZENvbnRlbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5vblRodW1ibmFpbHNDbGljayA9IHRoaXMub25UaHVtYm5haWxzQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgbGlnaHRib3gsIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLlxyXG4gICAqIEl0J3Mgbm90IGluY2x1ZGVkIGluIHRoZSBtYWluIGNvbnN0cnVjdG9yLCBzbyB5b3UgbWF5IGJpbmQgZXZlbnRzIGJlZm9yZSBpdC5cclxuICAgKi9cclxuICBpbml0KCkge1xyXG4gICAgLy8gQmluZCBjbGljayBldmVudHMgdG8gZWFjaCBnYWxsZXJ5XHJcbiAgICBnZXRFbGVtZW50c0Zyb21PcHRpb24odGhpcy5vcHRpb25zLmdhbGxlcnksIHRoaXMub3B0aW9ucy5nYWxsZXJ5U2VsZWN0b3IpXHJcbiAgICAgIC5mb3JFYWNoKChnYWxsZXJ5RWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGdhbGxlcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRodW1ibmFpbHNDbGljaywgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZVxyXG4gICAqL1xyXG4gIG9uVGh1bWJuYWlsc0NsaWNrKGUpIHtcclxuICAgIC8vIEV4aXQgYW5kIGFsbG93IGRlZmF1bHQgYnJvd3NlciBhY3Rpb24gaWY6XHJcbiAgICBpZiAoc3BlY2lhbEtleVVzZWQoZSkgLy8gLi4uIGlmIGNsaWNrZWQgd2l0aCBhIHNwZWNpYWwga2V5IChjdHJsL2NtZC4uLilcclxuICAgICAgICB8fCB3aW5kb3cucHN3cCkgeyAvLyAuLi4gaWYgUGhvdG9Td2lwZSBpcyBhbHJlYWR5IG9wZW5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGJvdGggY2xpZW50WCBhbmQgY2xpZW50WSBhcmUgMCBvciBub3QgZGVmaW5lZCxcclxuICAgIC8vIHRoZSBldmVudCBpcyBsaWtlbHkgdHJpZ2dlcmVkIGJ5IGtleWJvYXJkLFxyXG4gICAgLy8gc28gd2UgZG8gbm90IHBhc3MgdGhlIGluaXRpYWxQb2ludFxyXG4gICAgLy9cclxuICAgIC8vIE5vdGUgdGhhdCBzb21lIHNjcmVlbiByZWFkZXJzIGVtdWxhdGUgdGhlIG1vdXNlIHBvc2l0aW9uLFxyXG4gICAgLy8gc28gaXQncyBub3QgdGhlIGlkZWFsIHdheSB0byBkZXRlY3QgdGhlbS5cclxuICAgIC8vXHJcbiAgICAvKiogQHR5cGUge1BvaW50IHwgbnVsbH0gKi9cclxuICAgIGxldCBpbml0aWFsUG9pbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcblxyXG4gICAgaWYgKCFpbml0aWFsUG9pbnQueCAmJiAhaW5pdGlhbFBvaW50LnkpIHtcclxuICAgICAgaW5pdGlhbFBvaW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xpY2tlZEluZGV4ID0gdGhpcy5nZXRDbGlja2VkSW5kZXgoZSk7XHJcbiAgICBjbGlja2VkSW5kZXggPSB0aGlzLmFwcGx5RmlsdGVycygnY2xpY2tlZEluZGV4JywgY2xpY2tlZEluZGV4LCBlLCB0aGlzKTtcclxuICAgIC8qKiBAdHlwZSB7RGF0YVNvdXJjZX0gKi9cclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB7XHJcbiAgICAgIGdhbGxlcnk6IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChlLmN1cnJlbnRUYXJnZXQpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjbGlja2VkSW5kZXggPj0gMCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMubG9hZEFuZE9wZW4oY2xpY2tlZEluZGV4LCBkYXRhU291cmNlLCBpbml0aWFsUG9pbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGluZGV4IG9mIGdhbGxlcnkgaXRlbSB0aGF0IHdhcyBjbGlja2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBlIGNsaWNrIGV2ZW50XHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRDbGlja2VkSW5kZXgoZSkge1xyXG4gICAgLy8gbGVnYWN5IG9wdGlvblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXRDbGlja2VkSW5kZXhGbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldENsaWNrZWRJbmRleEZuLmNhbGwodGhpcywgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tlZFRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChlLnRhcmdldCk7XHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4sXHJcbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZFNlbGVjdG9yLFxyXG4gICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsaWNrZWRDaGlsZEluZGV4ID0gY2hpbGRFbGVtZW50cy5maW5kSW5kZXgoXHJcbiAgICAgIGNoaWxkID0+IGNoaWxkID09PSBjbGlja2VkVGFyZ2V0IHx8IGNoaWxkLmNvbnRhaW5zKGNsaWNrZWRUYXJnZXQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChjbGlja2VkQ2hpbGRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGNsaWNrZWRDaGlsZEluZGV4O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW4gfHwgdGhpcy5vcHRpb25zLmNoaWxkU2VsZWN0b3IpIHtcclxuICAgICAgLy8gY2xpY2sgd2Fzbid0IG9uIGEgY2hpbGQgZWxlbWVudFxyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlcmUgaXMgb25seSBvbmUgaXRlbSAod2hpY2ggaXMgdGhlIGdhbGxlcnkpXHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgYW5kIG9wZW4gUGhvdG9Td2lwZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHBhcmFtIHtEYXRhU291cmNlfSBbZGF0YVNvdXJjZV1cclxuICAgKiBAcGFyYW0ge1BvaW50IHwgbnVsbH0gW2luaXRpYWxQb2ludF1cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBsb2FkQW5kT3BlbihpbmRleCwgZGF0YVNvdXJjZSwgaW5pdGlhbFBvaW50KSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZ2FsbGVyeSBpcyBhbHJlYWR5IG9wZW5cclxuICAgIGlmICh3aW5kb3cucHN3cCB8fCAhdGhpcy5vcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgdGhlIGZpcnN0IGdhbGxlcnkgZWxlbWVudCBpZiBkYXRhU291cmNlIGlzIG5vdCBwcm92aWRlZFxyXG4gICAgaWYgKCFkYXRhU291cmNlICYmIHRoaXMub3B0aW9ucy5nYWxsZXJ5ICYmIHRoaXMub3B0aW9ucy5jaGlsZHJlbikge1xyXG4gICAgICBjb25zdCBnYWxsZXJ5RWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21PcHRpb24odGhpcy5vcHRpb25zLmdhbGxlcnkpO1xyXG4gICAgICBpZiAoZ2FsbGVyeUVsZW1lbnRzWzBdKSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZSA9IHtcclxuICAgICAgICAgIGdhbGxlcnk6IGdhbGxlcnlFbGVtZW50c1swXVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgaW5pdGlhbCBpbmRleFxyXG4gICAgdGhpcy5vcHRpb25zLmluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgLy8gZGVmaW5lIG9wdGlvbnMgZm9yIFBob3RvU3dpcGUgY29uc3RydWN0b3JcclxuICAgIHRoaXMub3B0aW9ucy5pbml0aWFsUG9pbnRlclBvcyA9IGluaXRpYWxQb2ludDtcclxuXHJcbiAgICB0aGlzLnNob3VsZE9wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wcmVsb2FkKGluZGV4LCBkYXRhU291cmNlKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCB0aGUgbWFpbiBtb2R1bGUgYW5kIHRoZSBzbGlkZSBjb250ZW50IGJ5IGluZGV4XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcGFyYW0ge0RhdGFTb3VyY2V9IFtkYXRhU291cmNlXVxyXG4gICAqL1xyXG4gIHByZWxvYWQoaW5kZXgsIGRhdGFTb3VyY2UpIHtcclxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZSkge1xyXG4gICAgICBvcHRpb25zLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB0aGUgbWFpbiBtb2R1bGVcclxuICAgIC8qKiBAdHlwZSB7UHJvbWlzZTxUeXBlPFBob3RvU3dpcGU+PltdfSAqL1xyXG4gICAgY29uc3QgcHJvbWlzZUFycmF5ID0gW107XHJcblxyXG4gICAgY29uc3QgcHN3cE1vZHVsZVR5cGUgPSB0eXBlb2Ygb3B0aW9ucy5wc3dwTW9kdWxlO1xyXG4gICAgaWYgKGlzUHN3cENsYXNzKG9wdGlvbnMucHN3cE1vZHVsZSkpIHtcclxuICAgICAgcHJvbWlzZUFycmF5LnB1c2goUHJvbWlzZS5yZXNvbHZlKC8qKiBAdHlwZSB7VHlwZTxQaG90b1N3aXBlPn0gKi8gKG9wdGlvbnMucHN3cE1vZHVsZSkpKTtcclxuICAgIH0gZWxzZSBpZiAocHN3cE1vZHVsZVR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHN3cE1vZHVsZSBhcyBzdHJpbmcgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCcpO1xyXG4gICAgfSBlbHNlIGlmIChwc3dwTW9kdWxlVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBwcm9taXNlQXJyYXkucHVzaCgvKiogQHR5cGUgeygpID0+IFByb21pc2U8VHlwZTxQaG90b1N3aXBlPj59ICovIChvcHRpb25zLnBzd3BNb2R1bGUpKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwc3dwTW9kdWxlIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjdXN0b20tZGVmaW5lZCBwcm9taXNlLCBpZiBhbnlcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vcGVuUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAvLyBhbGxvdyBkZXZlbG9wZXJzIHRvIHBlcmZvcm0gc29tZSB0YXNrIGJlZm9yZSBvcGVuaW5nXHJcbiAgICAgIHByb21pc2VBcnJheS5wdXNoKG9wdGlvbnMub3BlblByb21pc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMucHJlbG9hZEZpcnN0U2xpZGUgIT09IGZhbHNlICYmIGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5fcHJlbG9hZGVkQ29udGVudCA9IGxhenlMb2FkU2xpZGUoaW5kZXgsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdhaXQgdGlsbCBhbGwgcHJvbWlzZXMgcmVzb2x2ZSBhbmQgb3BlbiBQaG90b1N3aXBlXHJcbiAgICBjb25zdCB1aWQgPSArK3RoaXMuX3VpZDtcclxuICAgIFByb21pc2UuYWxsKHByb21pc2VBcnJheSkudGhlbigoaXRlcmFibGVNb2R1bGVzKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNob3VsZE9wZW4pIHtcclxuICAgICAgICBjb25zdCBtYWluTW9kdWxlID0gaXRlcmFibGVNb2R1bGVzWzBdO1xyXG4gICAgICAgIHRoaXMuX29wZW5QaG90b3N3aXBlKG1haW5Nb2R1bGUsIHVpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1R5cGU8UGhvdG9Td2lwZT4gfCB7IGRlZmF1bHQ6IFR5cGU8UGhvdG9Td2lwZT4gfX0gbW9kdWxlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVpZFxyXG4gICAqL1xyXG4gIF9vcGVuUGhvdG9zd2lwZShtb2R1bGUsIHVpZCkge1xyXG4gICAgLy8gQ2FuY2VsIG9wZW5pbmcgaWYgVUlEIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb25lXHJcbiAgICAvLyAoaWYgdXNlciBjbGlja2VkIG9uIGFub3RoZXIgZ2FsbGVyeSBpdGVtIGJlZm9yZSBjdXJyZW50IHdhcyBsb2FkZWQpLlxyXG4gICAgLy9cclxuICAgIC8vIE9yIGlmIHNob3VsZE9wZW4gZmxhZyBpcyBzZXQgdG8gZmFsc2VcclxuICAgIC8vIChkZXZlbG9wZXIgbWF5IG1vZGlmeSBpdCB2aWEgcHVibGljIEFQSSlcclxuICAgIGlmICh1aWQgIT09IHRoaXMuX3VpZCAmJiB0aGlzLnNob3VsZE9wZW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdWxkT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFBob3RvU3dpcGUgaXMgYWxyZWFkeSBvcGVuXHJcbiAgICBpZiAod2luZG93LnBzd3ApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFzcyBkYXRhIHRvIFBob3RvU3dpcGUgYW5kIG9wZW4gaW5pdFxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtQaG90b1N3aXBlfVxyXG4gICAgICovXHJcbiAgICBjb25zdCBwc3dwID0gdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCdcclxuICAgICAgICA/IG5ldyBtb2R1bGUuZGVmYXVsdCh0aGlzLm9wdGlvbnMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICA6IG5ldyBtb2R1bGUodGhpcy5vcHRpb25zKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB3aW5kb3cucHN3cCA9IHBzd3A7XHJcblxyXG4gICAgLy8gbWFwIGxpc3RlbmVycyBmcm9tIExpZ2h0Ym94IHRvIFBob3RvU3dpcGUgQ29yZVxyXG4gICAgLyoqIEB0eXBlIHsoa2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcClbXX0gKi9cclxuICAgIChPYmplY3Qua2V5cyh0aGlzLl9saXN0ZW5lcnMpKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8uZm9yRWFjaCgoZm4pID0+IHtcclxuICAgICAgICBwc3dwLm9uKG5hbWUsIC8qKiBAdHlwZSB7RXZlbnRDYWxsYmFjazx0eXBlb2YgbmFtZT59ICovKGZuKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2FtZSB3aXRoIGZpbHRlcnNcclxuICAgIC8qKiBAdHlwZSB7KGtleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwKVtdfSAqL1xyXG4gICAgKE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcnMpKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIHBzd3AuYWRkRmlsdGVyKG5hbWUsIGZpbHRlci5mbiwgZmlsdGVyLnByaW9yaXR5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5fcHJlbG9hZGVkQ29udGVudCkge1xyXG4gICAgICBwc3dwLmNvbnRlbnRMb2FkZXIuYWRkVG9DYWNoZSh0aGlzLl9wcmVsb2FkZWRDb250ZW50KTtcclxuICAgICAgdGhpcy5fcHJlbG9hZGVkQ29udGVudCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwc3dwLm9uKCdkZXN0cm95JywgKCkgPT4ge1xyXG4gICAgICAvLyBjbGVhbiB1cCBwdWJsaWMgdmFyaWFibGVzXHJcbiAgICAgIHRoaXMucHN3cCA9IHVuZGVmaW5lZDtcclxuICAgICAgZGVsZXRlIHdpbmRvdy5wc3dwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHN3cC5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbmJpbmRzIGFsbCBldmVudHMsIGNsb3NlcyBQaG90b1N3aXBlIGlmIGl0J3Mgb3Blbi5cclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5wc3dwPy5kZXN0cm95KCk7XHJcblxyXG4gICAgdGhpcy5zaG91bGRPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuXHJcbiAgICBnZXRFbGVtZW50c0Zyb21PcHRpb24odGhpcy5vcHRpb25zLmdhbGxlcnksIHRoaXMub3B0aW9ucy5nYWxsZXJ5U2VsZWN0b3IpXHJcbiAgICAgIC5mb3JFYWNoKChnYWxsZXJ5RWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGdhbGxlcnlFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRodW1ibmFpbHNDbGljaywgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvU3dpcGVMaWdodGJveDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiMzMyZTNiY2NmNGVkM2IwZGI1NmJcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xuLy8gZGF0YS13ZWJwYWNrIGlzIG5vdCB1c2VkIGFzIGJ1aWxkIGhhcyBubyB1bmlxdWVOYW1lXG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IFBob3RvU3dpcGVMaWdodGJveCBmcm9tICcuL3ZlbmRvci9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS1saWdodGJveC5lc20uanMnO1xyXG5pbXBvcnQgUGhvdG9Td2lwZUNzcyBmcm9tICcuL3ZlbmRvci9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJ1xyXG5pbXBvcnQgJy4vdGVtcGxhdGUuaHRtbCdcclxuaW1wb3J0IGZhdmljb24gZnJvbSAnLi9hc3NldHMvZmF2aWNvbi5pY28nXHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIHIua2V5cygpLmZvckVhY2gocik7XHJcbn1cclxuXHJcbi8vINCY0LzQv9C+0YDRgiDQstGB0LXRhSBTVkcg0LjQtyDQv9Cw0L/QutC4INGB0L/RgNCw0LnRgtCwXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL3N2ZycsIGZhbHNlLCAvXFwuc3ZnJC8pKTtcclxuXHJcbi8vINC40LzQv9C+0YDRgtC40YDRg9C10Lwg0LLRgdC1INC60LDRgNGC0LjQvdC60Lgg0LjQtyBzcmMvYXNzZXRzXHJcbmZ1bmN0aW9uIGltcG9ydEFsbEltYWdlcyhyKSB7XHJcbiAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcclxufVxyXG5cclxuLy8g0LjRidC10Lwg0YTQsNC50LvRiyDRgSDRgNCw0YHRiNC40YDQtdC90LjRj9C80LggKHBuZywganBnLCBqcGVnLCBzdmcsIGdpZiwgd2VicClcclxuaW1wb3J0QWxsSW1hZ2VzKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8Z2lmfHdlYnApJC8pKTtcclxuXHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5yZXZpZXdzLXNsaWRlcicsIHtcclxuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGFjZUJldHdlZW46IC0xMDAsXHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcucmV2aWV3cy1zbGlkZXJfX25leHQnLFxyXG4gICAgcHJldkVsOiAnLnJldmlld3Mtc2xpZGVyX19wcmV2JyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNjZW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY2VuZScpO1xyXG5zY2VuZXMuZm9yRWFjaCgoc2NlbmUpID0+IHtcclxuY29uc3QgcGFyYWxsYXhJbnN0YW5jZSAgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xyXG5cclxuY29uc3QgbGlnaHRib3ggPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KHtcclxuICBnYWxsZXJ5OiAnI3Byb2R1Y3RzLWdhbGxlcnknLFxyXG4gIGNoaWxkcmVuOiAnYScsXHJcbiAgcHN3cE1vZHVsZTogKCkgPT4gaW1wb3J0KCcuL3ZlbmRvci9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5lc20uanMnKSxcclxufSk7XHJcbmxpZ2h0Ym94LmluaXQoKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3RoaXMuc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPVtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1tsb2FkaW5nPWxhenldXCIpKSx0PVtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXp5LWJnXCIpKTtpZihlLmxlbmd0aD4wKXtsZXQgbj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSx0KXtlLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5pc0ludGVyc2VjdGluZyl7bGV0IHQ9ZS50YXJnZXQ7dC5zcmM9dC5kYXRhc2V0LnNyYyxuLnVub2JzZXJ2ZSh0KX19KX0se3Jvb3RNYXJnaW46JzQwMHB4IDBweCcsdGhyZXNob2xkOjAuMDF9KTtlLmZvckVhY2goZnVuY3Rpb24oZSl7bi5vYnNlcnZlKGUpfSl9dC5sZW5ndGg+MCYmdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2xldCB0PWU7dC5jbGFzc0xpc3QucmVtb3ZlKFwibGF6eS1iZ1wiKSx0LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybChcIit0LmRhdGFzZXQuc3JjK1wiKVwifSl9LDNlMyl9KTsiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRhZ05hbWUiLCJhcHBlbmRUb0VsIiwiZWwiLCJkb2N1bWVudCIsImFwcGVuZENoaWxkIiwidG9UcmFuc2Zvcm1TdHJpbmciLCJ4IiwieSIsInNjYWxlIiwicHJvcFZhbHVlIiwiY29uY2F0IiwidW5kZWZpbmVkIiwic2V0V2lkdGhIZWlnaHQiLCJ3IiwiaCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJMT0FEX1NUQVRFIiwiSURMRSIsIkxPQURJTkciLCJMT0FERUQiLCJFUlJPUiIsInNwZWNpYWxLZXlVc2VkIiwiZSIsImJ1dHRvbiIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJnZXRFbGVtZW50c0Zyb21PcHRpb24iLCJvcHRpb24iLCJsZWdhY3lTZWxlY3RvciIsInBhcmVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImVsZW1lbnRzIiwiRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImlzUHN3cENsYXNzIiwiZm4iLCJwcm90b3R5cGUiLCJnb1RvIiwiaXNTYWZhcmkiLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJtYXRjaCIsIlBob3RvU3dpcGVFdmVudCIsInR5cGUiLCJkZXRhaWxzIiwiX2NsYXNzQ2FsbENoZWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIk9iamVjdCIsImFzc2lnbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJFdmVudGFibGUiLCJfbGlzdGVuZXJzIiwiX2ZpbHRlcnMiLCJwc3dwIiwib3B0aW9ucyIsImFkZEZpbHRlciIsIm5hbWUiLCJwcmlvcml0eSIsIl90aGlzJF9maWx0ZXJzJG5hbWUiLCJfdGhpcyRfZmlsdGVycyRuYW1lMiIsIl90aGlzJHBzd3AiLCJwdXNoIiwic29ydCIsImYxIiwiZjIiLCJyZW1vdmVGaWx0ZXIiLCJmaWx0ZXIiLCJhcHBseUZpbHRlcnMiLCJfdGhpcyIsIl9sZW4iLCJhcmdzIiwiX2tleSIsIl90aGlzJF9maWx0ZXJzJG5hbWUzIiwiZm9yRWFjaCIsImFwcGx5Iiwib24iLCJfdGhpcyRfbGlzdGVuZXJzJG5hbWUiLCJfdGhpcyRwc3dwMiIsIm9mZiIsIl90aGlzJHBzd3AzIiwibGlzdGVuZXIiLCJkaXNwYXRjaCIsIl90aGlzMiIsIl90aGlzJF9saXN0ZW5lcnMkbmFtZTIiLCJldmVudCIsImNhbGwiLCJQbGFjZWhvbGRlciIsImltYWdlU3JjIiwiY29udGFpbmVyIiwiZWxlbWVudCIsImltZ0VsIiwiZGVjb2RpbmciLCJhbHQiLCJzcmMiLCJzZXRBdHRyaWJ1dGUiLCJzZXREaXNwbGF5ZWRTaXplIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwiZGVzdHJveSIsIl90aGlzJGVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwiQ29udGVudCIsIml0ZW1EYXRhIiwiaW5zdGFuY2UiLCJpbmRleCIsImRhdGEiLCJwbGFjZWhvbGRlciIsInNsaWRlIiwiZGlzcGxheWVkSW1hZ2VXaWR0aCIsImRpc3BsYXllZEltYWdlSGVpZ2h0IiwiTnVtYmVyIiwiaXNBdHRhY2hlZCIsImhhc1NsaWRlIiwiaXNEZWNvZGluZyIsInN0YXRlIiwiY29udGVudCIsInJlbW92ZVBsYWNlaG9sZGVyIiwiX3RoaXMzIiwia2VlcFBsYWNlaG9sZGVyIiwic2V0VGltZW91dCIsImxvYWQiLCJpc0xhenkiLCJyZWxvYWQiLCJ1c2VQbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyU3JjIiwibXNyYyIsImlzRmlyc3RTbGlkZSIsInBsYWNlaG9sZGVyRWwiLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImlzSW1hZ2VDb250ZW50IiwibG9hZEltYWdlIiwiaW5uZXJIVE1MIiwiaHRtbCIsInVwZGF0ZUNvbnRlbnRTaXplIiwiX3RoaXM0IiwiX3RoaXMkZGF0YSRzcmMiLCJfdGhpcyRkYXRhJGFsdCIsImltYWdlRWxlbWVudCIsInVwZGF0ZVNyY3NldFNpemVzIiwic3Jjc2V0IiwiY29tcGxldGUiLCJvbkxvYWRlZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbkVycm9yIiwic2V0U2xpZGUiLCJpc0FjdGl2ZSIsImhlYXZ5QXBwZW5kZWQiLCJhcHBlbmQiLCJkaXNwbGF5RXJyb3IiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiaXNJbml0aWFsU2l6ZVVwZGF0ZSIsImlzWm9vbWFibGUiLCJpbWFnZSIsInNpemVzV2lkdGgiLCJkYXRhc2V0IiwibGFyZ2VzdFVzZWRTaXplIiwicGFyc2VJbnQiLCJzaXplcyIsIlN0cmluZyIsImxhenlMb2FkIiwiX3RoaXMkaW5zdGFuY2Ukb3B0aW9uIiwiX3RoaXMkaW5zdGFuY2Ukb3B0aW9uMiIsImVycm9yTXNnRWwiLCJpbm5lclRleHQiLCJlcnJvck1zZyIsIl90aGlzNSIsInN1cHBvcnRzRGVjb2RlIiwiZGVjb2RlIiwiYXBwZW5kSW1hZ2UiLCJhY3RpdmF0ZSIsImhvbGRlckVsZW1lbnQiLCJkZWFjdGl2YXRlIiwiZ2V0Vmlld3BvcnRTaXplIiwiZ2V0Vmlld3BvcnRTaXplRm4iLCJuZXdWaWV3cG9ydFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicGFyc2VQYWRkaW5nT3B0aW9uIiwicHJvcCIsInZpZXdwb3J0U2l6ZSIsInBhZGRpbmdWYWx1ZSIsInBhZGRpbmdGbiIsInBhZGRpbmciLCJsZWdhY3lQcm9wTmFtZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRQYW5BcmVhU2l6ZSIsIk1BWF9JTUFHRV9XSURUSCIsIlpvb21MZXZlbCIsInBhbkFyZWFTaXplIiwiZWxlbWVudFNpemUiLCJmaXQiLCJmaWxsIiwidkZpbGwiLCJpbml0aWFsIiwic2Vjb25kYXJ5IiwibWF4IiwibWluIiwidXBkYXRlIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJoUmF0aW8iLCJ2UmF0aW8iLCJNYXRoIiwiX2dldEluaXRpYWwiLCJfZ2V0U2Vjb25kYXJ5IiwiX2dldE1heCIsInpvb21MZXZlbHMiLCJzbGlkZURhdGEiLCJfcGFyc2Vab29tTGV2ZWxPcHRpb24iLCJvcHRpb25QcmVmaXgiLCJvcHRpb25OYW1lIiwib3B0aW9uVmFsdWUiLCJjdXJyWm9vbUxldmVsIiwibGF6eUxvYWREYXRhIiwiY3JlYXRlQ29udGVudEZyb21EYXRhIiwiem9vbUxldmVsIiwiY2VpbCIsImxhenlMb2FkU2xpZGUiLCJnZXRJdGVtRGF0YSIsIlBob3RvU3dpcGVCYXNlIiwiX0V2ZW50YWJsZSIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJnZXROdW1JdGVtcyIsIl90aGlzJG9wdGlvbnMiLCJudW1JdGVtcyIsImRhdGFTb3VyY2UiLCJpdGVtcyIsIl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMiLCJnYWxsZXJ5IiwiX3RoaXMkb3B0aW9uczIiLCJkYXRhU291cmNlSXRlbSIsIl9kb21FbGVtZW50VG9JdGVtRGF0YSIsImdhbGxlcnlFbGVtZW50IiwiX3RoaXMkb3B0aW9uczMiLCJfdGhpcyRvcHRpb25zNCIsImNoaWxkcmVuIiwiY2hpbGRTZWxlY3RvciIsImxpbmtFbCIsInF1ZXJ5U2VsZWN0b3IiLCJwc3dwU3JjIiwiaHJlZiIsInBzd3BTcmNzZXQiLCJwc3dwV2lkdGgiLCJwc3dwSGVpZ2h0IiwicHN3cFR5cGUiLCJ0aHVtYm5haWxFbCIsIl90aHVtYm5haWxFbCRnZXRBdHRyaSIsImN1cnJlbnRTcmMiLCJnZXRBdHRyaWJ1dGUiLCJwc3dwQ3JvcHBlZCIsImNyb3BwZWQiLCJ0aHVtYkNyb3BwZWQiLCJQaG90b1N3aXBlTGlnaHRib3giLCJfUGhvdG9Td2lwZUJhc2UiLCJfdGhpczYiLCJfdWlkIiwic2hvdWxkT3BlbiIsIl9wcmVsb2FkZWRDb250ZW50Iiwib25UaHVtYm5haWxzQ2xpY2siLCJiaW5kIiwiaW5pdCIsIl90aGlzNyIsImdhbGxlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImNsaWNrZWRJbmRleCIsImdldENsaWNrZWRJbmRleCIsImN1cnJlbnRUYXJnZXQiLCJsb2FkQW5kT3BlbiIsImdldENsaWNrZWRJbmRleEZuIiwiY2xpY2tlZFRhcmdldCIsInRhcmdldCIsImNoaWxkRWxlbWVudHMiLCJjbGlja2VkQ2hpbGRJbmRleCIsImZpbmRJbmRleCIsImNoaWxkIiwiY29udGFpbnMiLCJnYWxsZXJ5RWxlbWVudHMiLCJpbml0aWFsUG9pbnRlclBvcyIsInByZWxvYWQiLCJfdGhpczgiLCJwcm9taXNlQXJyYXkiLCJwc3dwTW9kdWxlVHlwZSIsIl90eXBlb2YiLCJwc3dwTW9kdWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJFcnJvciIsIm9wZW5Qcm9taXNlIiwicHJlbG9hZEZpcnN0U2xpZGUiLCJ1aWQiLCJhbGwiLCJ0aGVuIiwiaXRlcmFibGVNb2R1bGVzIiwibWFpbk1vZHVsZSIsIl9vcGVuUGhvdG9zd2lwZSIsIm1vZHVsZSIsIl90aGlzOSIsImtleXMiLCJjb250ZW50TG9hZGVyIiwiYWRkVG9DYWNoZSIsIl90aGlzMCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQaG90b1N3aXBlQ3NzIiwiZmF2aWNvbiIsImltcG9ydEFsbCIsInIiLCJyZXF1aXJlIiwiY29udGV4dCIsImltcG9ydEFsbEltYWdlcyIsIm1hcCIsInN3aXBlciIsIlN3aXBlciIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic2NlbmVzIiwic2NlbmUiLCJwYXJhbGxheEluc3RhbmNlIiwiUGFyYWxsYXgiLCJsaWdodGJveCIsInQiLCJuIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiY2xhc3NMaXN0IiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==