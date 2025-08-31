"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_vendor_photoswipe_dist_photoswipe_esm_js"],{

/***/ "./src/vendor/photoswipe/dist/photoswipe.esm.js":
/*!******************************************************!*\
  !*** ./src/vendor/photoswipe/dist/photoswipe.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoSwipe)
/* harmony export */ });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
  * PhotoSwipe 5.4.4 - https://photoswipe.com
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
 * @param {Point} p1
 * @param {Point} p2
 * @returns {Point}
 */

function equalizePoints(p1, p2) {
  p1.x = p2.x;
  p1.y = p2.y;
  if (p2.id !== undefined) {
    p1.id = p2.id;
  }
  return p1;
}
/**
 * @param {Point} p
 */

function roundPoint(p) {
  p.x = Math.round(p.x);
  p.y = Math.round(p.y);
}
/**
 * Returns distance between two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {number}
 */

function getDistanceBetween(p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  return Math.sqrt(x * x + y * y);
}
/**
 * Whether X and Y positions of points are equal
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {boolean}
 */

function pointsEqual(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
/**
 * The float result between the min and max values.
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
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
 * Apply transform:translate(x, y) scale(scale) to element
 *
 * @param {HTMLElement} el
 * @param {number} x
 * @param {number} [y]
 * @param {number} [scale]
 */

function setTransform(el, x, y, scale) {
  el.style.transform = toTransformString(x, y, scale);
}
var defaultCSSEasing = 'cubic-bezier(.4,0,.22,1)';
/**
 * Apply CSS transition to element
 *
 * @param {HTMLElement} el
 * @param {string} [prop] CSS property to animate
 * @param {number} [duration] in ms
 * @param {string} [ease] CSS easing function
 */

function setTransitionStyle(el, prop, duration, ease) {
  // inOut: 'cubic-bezier(.4, 0, .22, 1)', // for "toggle state" transitions
  // out: 'cubic-bezier(0, 0, .22, 1)', // for "show" transitions
  // in: 'cubic-bezier(.4, 0, 1, 1)'// for "hide" transitions
  el.style.transition = prop ? "".concat(prop, " ").concat(duration, "ms ").concat(ease || defaultCSSEasing) : 'none';
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
/**
 * @param {HTMLElement} el
 */

function removeTransitionStyle(el) {
  setTransitionStyle(el);
}
/**
 * @param {HTMLImageElement} img
 * @returns {Promise<HTMLImageElement | void>}
 */

function decodeImage(img) {
  if ('decode' in img) {
    return img.decode()["catch"](function () {});
  }
  if (img.complete) {
    return Promise.resolve(img);
  }
  return new Promise(function (resolve, reject) {
    img.onload = function () {
      return resolve(img);
    };
    img.onerror = reject;
  });
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
 * Check if browser is Safari
 *
 * @returns {boolean}
 */

function isSafari() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}

// Detect passive event listener support
var supportsPassive = false;
/* eslint-disable */

try {
  /* @ts-ignore */
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}
/* eslint-enable */

/**
 * @typedef {Object} PoolItem
 * @prop {HTMLElement | Window | Document | undefined | null} target
 * @prop {string} type
 * @prop {EventListenerOrEventListenerObject} listener
 * @prop {boolean} [passive]
 */
var DOMEvents = /*#__PURE__*/function () {
  function DOMEvents() {
    _classCallCheck(this, DOMEvents);
    /**
     * @type {PoolItem[]}
     * @private
     */
    this._pool = [];
  }
  /**
   * Adds event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type Can be multiple, separated by space.
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */
  return _createClass(DOMEvents, [{
    key: "add",
    value: function add(target, type, listener, passive) {
      this._toggleListener(target, type, listener, passive);
    }
    /**
     * Removes event listeners
     *
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     */
  }, {
    key: "remove",
    value: function remove(target, type, listener, passive) {
      this._toggleListener(target, type, listener, passive, true);
    }
    /**
     * Removes all bound events
     */
  }, {
    key: "removeAll",
    value: function removeAll() {
      var _this = this;
      this._pool.forEach(function (poolItem) {
        _this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
      });
      this._pool = [];
    }
    /**
     * Adds or removes event
     *
     * @private
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     * @param {boolean} [unbind] Whether the event should be added or removed
     * @param {boolean} [skipPool] Whether events pool should be skipped
     */
  }, {
    key: "_toggleListener",
    value: function _toggleListener(target, type, listener, passive, unbind, skipPool) {
      var _this2 = this;
      if (!target) {
        return;
      }
      var methodName = unbind ? 'removeEventListener' : 'addEventListener';
      var types = type.split(' ');
      types.forEach(function (eType) {
        if (eType) {
          // Events pool is used to easily unbind all events when PhotoSwipe is closed,
          // so developer doesn't need to do this manually
          if (!skipPool) {
            if (unbind) {
              // Remove from the events pool
              _this2._pool = _this2._pool.filter(function (poolItem) {
                return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
              });
            } else {
              // Add to the events pool
              _this2._pool.push({
                target: target,
                type: eType,
                listener: listener,
                passive: passive
              });
            }
          } // most PhotoSwipe events call preventDefault,
          // and we do not need browser to scroll the page

          var eventOptions = supportsPassive ? {
            passive: passive || false
          } : false;
          target[methodName](eType, listener, eventOptions);
        }
      });
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

/** @typedef {import('./slide.js').default} Slide */

/** @typedef {Record<Axis, number>} Point */

/** @typedef {'x' | 'y'} Axis */

/**
 * Calculates minimum, maximum and initial (center) bounds of a slide
 */
var PanBounds = /*#__PURE__*/function () {
  /**
   * @param {Slide} slide
   */
  function PanBounds(slide) {
    _classCallCheck(this, PanBounds);
    this.slide = slide;
    this.currZoomLevel = 1;
    this.center = /** @type {Point} */
    {
      x: 0,
      y: 0
    };
    this.max = /** @type {Point} */
    {
      x: 0,
      y: 0
    };
    this.min = /** @type {Point} */
    {
      x: 0,
      y: 0
    };
  }
  /**
   * _getItemBounds
   *
   * @param {number} currZoomLevel
   */
  return _createClass(PanBounds, [{
    key: "update",
    value: function update(currZoomLevel) {
      this.currZoomLevel = currZoomLevel;
      if (!this.slide.width) {
        this.reset();
      } else {
        this._updateAxis('x');
        this._updateAxis('y');
        this.slide.pswp.dispatch('calcBounds', {
          slide: this.slide
        });
      }
    }
    /**
     * _calculateItemBoundsForAxis
     *
     * @param {Axis} axis
     */
  }, {
    key: "_updateAxis",
    value: function _updateAxis(axis) {
      var pswp = this.slide.pswp;
      var elSize = this.slide[axis === 'x' ? 'width' : 'height'] * this.currZoomLevel;
      var paddingProp = axis === 'x' ? 'left' : 'top';
      var padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
      var panAreaSize = this.slide.panAreaSize[axis]; // Default position of element.
      // By default, it is center of viewport:

      this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding; // maximum pan position

      this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis]; // minimum pan position

      this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
    } // _getZeroBounds
  }, {
    key: "reset",
    value: function reset() {
      this.center.x = 0;
      this.center.y = 0;
      this.max.x = 0;
      this.max.y = 0;
      this.min.x = 0;
      this.min.y = 0;
    }
    /**
     * Correct pan position if it's beyond the bounds
     *
     * @param {Axis} axis x or y
     * @param {number} panOffset
     * @returns {number}
     */
  }, {
    key: "correctPan",
    value: function correctPan(axis, panOffset) {
      // checkPanBounds
      return clamp(panOffset, this.max[axis], this.min[axis]);
    }
  }]);
}();
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
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * Renders and allows to control a single slide
 */
var Slide = /*#__PURE__*/function () {
  /**
   * @param {SlideData} data
   * @param {number} index
   * @param {PhotoSwipe} pswp
   */
  function Slide(data, index, pswp) {
    _classCallCheck(this, Slide);
    this.data = data;
    this.index = index;
    this.pswp = pswp;
    this.isActive = index === pswp.currIndex;
    this.currentResolution = 0;
    /** @type {Point} */

    this.panAreaSize = {
      x: 0,
      y: 0
    };
    /** @type {Point} */

    this.pan = {
      x: 0,
      y: 0
    };
    this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
    this.zoomLevels = new ZoomLevel(pswp.options, data, index, pswp);
    this.pswp.dispatch('gettingData', {
      slide: this,
      data: this.data,
      index: index
    });
    this.content = this.pswp.contentLoader.getContentBySlide(this);
    this.container = createElement('pswp__zoom-wrap', 'div');
    /** @type {HTMLElement | null} */

    this.holderElement = null;
    this.currZoomLevel = 1;
    /** @type {number} */

    this.width = this.content.width;
    /** @type {number} */

    this.height = this.content.height;
    this.heavyAppended = false;
    this.bounds = new PanBounds(this);
    this.prevDisplayedWidth = -1;
    this.prevDisplayedHeight = -1;
    this.pswp.dispatch('slideInit', {
      slide: this
    });
  }
  /**
   * If this slide is active/current/visible
   *
   * @param {boolean} isActive
   */
  return _createClass(Slide, [{
    key: "setIsActive",
    value: function setIsActive(isActive) {
      if (isActive && !this.isActive) {
        // slide just became active
        this.activate();
      } else if (!isActive && this.isActive) {
        // slide just became non-active
        this.deactivate();
      }
    }
    /**
     * Appends slide content to DOM
     *
     * @param {HTMLElement} holderElement
     */
  }, {
    key: "append",
    value: function append(holderElement) {
      this.holderElement = holderElement;
      this.container.style.transformOrigin = '0 0'; // Slide appended to DOM

      if (!this.data) {
        return;
      }
      this.calculateSize();
      this.load();
      this.updateContentSize();
      this.appendHeavy();
      this.holderElement.appendChild(this.container);
      this.zoomAndPanToInitial();
      this.pswp.dispatch('firstZoomPan', {
        slide: this
      });
      this.applyCurrentZoomPan();
      this.pswp.dispatch('afterSetContent', {
        slide: this
      });
      if (this.isActive) {
        this.activate();
      }
    }
  }, {
    key: "load",
    value: function load() {
      this.content.load(false);
      this.pswp.dispatch('slideLoad', {
        slide: this
      });
    }
    /**
     * Append "heavy" DOM elements
     *
     * This may depend on a type of slide,
     * but generally these are large images.
     */
  }, {
    key: "appendHeavy",
    value: function appendHeavy() {
      var pswp = this.pswp;
      var appendHeavyNearby = true; // todo
      // Avoid appending heavy elements during animations

      if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
        return;
      }
      if (this.pswp.dispatch('appendHeavy', {
        slide: this
      }).defaultPrevented) {
        return;
      }
      this.heavyAppended = true;
      this.content.append();
      this.pswp.dispatch('appendHeavyContent', {
        slide: this
      });
    }
    /**
     * Triggered when this slide is active (selected).
     *
     * If it's part of opening/closing transition -
     * activate() will trigger after the transition is ended.
     */
  }, {
    key: "activate",
    value: function activate() {
      this.isActive = true;
      this.appendHeavy();
      this.content.activate();
      this.pswp.dispatch('slideActivate', {
        slide: this
      });
    }
    /**
     * Triggered when this slide becomes inactive.
     *
     * Slide can become inactive only after it was active.
     */
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.isActive = false;
      this.content.deactivate();
      if (this.currZoomLevel !== this.zoomLevels.initial) {
        // allow filtering
        this.calculateSize();
      } // reset zoom level

      this.currentResolution = 0;
      this.zoomAndPanToInitial();
      this.applyCurrentZoomPan();
      this.updateContentSize();
      this.pswp.dispatch('slideDeactivate', {
        slide: this
      });
    }
    /**
     * The slide should destroy itself, it will never be used again.
     * (unbind all events and destroy internal components)
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.content.hasSlide = false;
      this.content.remove();
      this.container.remove();
      this.pswp.dispatch('slideDestroy', {
        slide: this
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
        // Keep initial zoom level if it was before the resize,
        // as well as when this slide is not active
        // Reset position and scale to original state
        this.calculateSize();
        this.currentResolution = 0;
        this.zoomAndPanToInitial();
        this.applyCurrentZoomPan();
        this.updateContentSize();
      } else {
        // readjust pan position if it's beyond the bounds
        this.calculateSize();
        this.bounds.update(this.currZoomLevel);
        this.panTo(this.pan.x, this.pan.y);
      }
    }
    /**
     * Apply size to current slide content,
     * based on the current resolution and scale.
     *
     * @param {boolean} [force] if size should be updated even if dimensions weren't changed
     */
  }, {
    key: "updateContentSize",
    value: function updateContentSize(force) {
      // Use initial zoom level
      // if resolution is not defined (user didn't zoom yet)
      var scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
      if (!scaleMultiplier) {
        return;
      }
      var width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
      var height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
      if (!this.sizeChanged(width, height) && !force) {
        return;
      }
      this.content.setDisplayedSize(width, height);
    }
    /**
     * @param {number} width
     * @param {number} height
     */
  }, {
    key: "sizeChanged",
    value: function sizeChanged(width, height) {
      if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
        this.prevDisplayedWidth = width;
        this.prevDisplayedHeight = height;
        return true;
      }
      return false;
    }
    /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
  }, {
    key: "getPlaceholderElement",
    value: function getPlaceholderElement() {
      var _this$content$placeho;
      return (_this$content$placeho = this.content.placeholder) === null || _this$content$placeho === void 0 ? void 0 : _this$content$placeho.element;
    }
    /**
     * Zoom current slide image to...
     *
     * @param {number} destZoomLevel Destination zoom level.
     * @param {Point} [centerPoint]
     * Transform origin center point, or false if viewport center should be used.
     * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
     * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
     */
  }, {
    key: "zoomTo",
    value: function zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
      var _this3 = this;
      var pswp = this.pswp;
      if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
        return;
      }
      pswp.dispatch('beforeZoomTo', {
        destZoomLevel: destZoomLevel,
        centerPoint: centerPoint,
        transitionDuration: transitionDuration
      }); // stop all pan and zoom transitions

      pswp.animations.stopAllPan(); // if (!centerPoint) {
      //   centerPoint = pswp.getViewportCenterPoint();
      // }

      var prevZoomLevel = this.currZoomLevel;
      if (!ignoreBounds) {
        destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
      } // if (transitionDuration === undefined) {
      //   transitionDuration = this.pswp.options.zoomAnimationDuration;
      // }

      this.setZoomLevel(destZoomLevel);
      this.pan.x = this.calculateZoomToPanOffset('x', centerPoint, prevZoomLevel);
      this.pan.y = this.calculateZoomToPanOffset('y', centerPoint, prevZoomLevel);
      roundPoint(this.pan);
      var finishTransition = function finishTransition() {
        _this3._setResolution(destZoomLevel);
        _this3.applyCurrentZoomPan();
      };
      if (!transitionDuration) {
        finishTransition();
      } else {
        pswp.animations.startTransition({
          isPan: true,
          name: 'zoomTo',
          target: this.container,
          transform: this.getCurrentTransform(),
          onComplete: finishTransition,
          duration: transitionDuration,
          easing: pswp.options.easing
        });
      }
    }
    /**
     * @param {Point} [centerPoint]
     */
  }, {
    key: "toggleZoom",
    value: function toggleZoom(centerPoint) {
      this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
    }
    /**
     * Updates zoom level property and recalculates new pan bounds,
     * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
     *
     * @param {number} currZoomLevel
     */
  }, {
    key: "setZoomLevel",
    value: function setZoomLevel(currZoomLevel) {
      this.currZoomLevel = currZoomLevel;
      this.bounds.update(this.currZoomLevel);
    }
    /**
     * Get pan position after zoom at a given `point`.
     *
     * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
     * pan bounds according to the new zoom level.
     *
     * @param {'x' | 'y'} axis
     * @param {Point} [point]
     * point based on which zoom is performed, usually refers to the current mouse position,
     * if false - viewport center will be used.
     * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
     * @returns {number}
     */
  }, {
    key: "calculateZoomToPanOffset",
    value: function calculateZoomToPanOffset(axis, point, prevZoomLevel) {
      var totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
      if (totalPanDistance === 0) {
        return this.bounds.center[axis];
      }
      if (!point) {
        point = this.pswp.getViewportCenterPoint();
      }
      if (!prevZoomLevel) {
        prevZoomLevel = this.zoomLevels.initial;
      }
      var zoomFactor = this.currZoomLevel / prevZoomLevel;
      return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
    }
    /**
     * Apply pan and keep it within bounds.
     *
     * @param {number} panX
     * @param {number} panY
     */
  }, {
    key: "panTo",
    value: function panTo(panX, panY) {
      this.pan.x = this.bounds.correctPan('x', panX);
      this.pan.y = this.bounds.correctPan('y', panY);
      this.applyCurrentZoomPan();
    }
    /**
     * If the slide in the current state can be panned by the user
     * @returns {boolean}
     */
  }, {
    key: "isPannable",
    value: function isPannable() {
      return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
    }
    /**
     * If the slide can be zoomed
     * @returns {boolean}
     */
  }, {
    key: "isZoomable",
    value: function isZoomable() {
      return Boolean(this.width) && this.content.isZoomable();
    }
    /**
     * Apply transform and scale based on
     * the current pan position (this.pan) and zoom level (this.currZoomLevel)
     */
  }, {
    key: "applyCurrentZoomPan",
    value: function applyCurrentZoomPan() {
      this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
      if (this === this.pswp.currSlide) {
        this.pswp.dispatch('zoomPanUpdate', {
          slide: this
        });
      }
    }
  }, {
    key: "zoomAndPanToInitial",
    value: function zoomAndPanToInitial() {
      this.currZoomLevel = this.zoomLevels.initial; // pan according to the zoom level

      this.bounds.update(this.currZoomLevel);
      equalizePoints(this.pan, this.bounds.center);
      this.pswp.dispatch('initialZoomPan', {
        slide: this
      });
    }
    /**
     * Set translate and scale based on current resolution
     *
     * @param {number} x
     * @param {number} y
     * @param {number} zoom
     * @private
     */
  }, {
    key: "_applyZoomTransform",
    value: function _applyZoomTransform(x, y, zoom) {
      zoom /= this.currentResolution || this.zoomLevels.initial;
      setTransform(this.container, x, y, zoom);
    }
  }, {
    key: "calculateSize",
    value: function calculateSize() {
      var pswp = this.pswp;
      equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
      this.zoomLevels.update(this.width, this.height, this.panAreaSize);
      pswp.dispatch('calcSlideSize', {
        slide: this
      });
    }
    /** @returns {string} */
  }, {
    key: "getCurrentTransform",
    value: function getCurrentTransform() {
      var scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
      return toTransformString(this.pan.x, this.pan.y, scale);
    }
    /**
     * Set resolution and re-render the image.
     *
     * For example, if the real image size is 2000x1500,
     * and resolution is 0.5 - it will be rendered as 1000x750.
     *
     * Image with zoom level 2 and resolution 0.5 is
     * the same as image with zoom level 1 and resolution 1.
     *
     * Used to optimize animations and make
     * sure that browser renders image in the highest quality.
     * Also used by responsive images to load the correct one.
     *
     * @param {number} newResolution
     */
  }, {
    key: "_setResolution",
    value: function _setResolution(newResolution) {
      if (newResolution === this.currentResolution) {
        return;
      }
      this.currentResolution = newResolution;
      this.updateContentSize();
      this.pswp.dispatch('resolutionChanged');
    }
  }]);
}();
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('./gestures.js').default} Gestures */
var PAN_END_FRICTION = 0.35;
var VERTICAL_DRAG_FRICTION = 0.6; // 1 corresponds to the third of viewport height

var MIN_RATIO_TO_CLOSE = 0.4; // Minimum speed required to navigate
// to next or previous slide

var MIN_NEXT_SLIDE_SPEED = 0.5;
/**
 * @param {number} initialVelocity
 * @param {number} decelerationRate
 * @returns {number}
 */

function project(initialVelocity, decelerationRate) {
  return initialVelocity * decelerationRate / (1 - decelerationRate);
}
/**
 * Handles single pointer dragging
 */
var DragHandler = /*#__PURE__*/function () {
  /**
   * @param {Gestures} gestures
   */
  function DragHandler(gestures) {
    _classCallCheck(this, DragHandler);
    this.gestures = gestures;
    this.pswp = gestures.pswp;
    /** @type {Point} */

    this.startPan = {
      x: 0,
      y: 0
    };
  }
  return _createClass(DragHandler, [{
    key: "start",
    value: function start() {
      if (this.pswp.currSlide) {
        equalizePoints(this.startPan, this.pswp.currSlide.pan);
      }
      this.pswp.animations.stopAll();
    }
  }, {
    key: "change",
    value: function change() {
      var _this$gestures = this.gestures,
        p1 = _this$gestures.p1,
        prevP1 = _this$gestures.prevP1,
        dragAxis = _this$gestures.dragAxis;
      var currSlide = this.pswp.currSlide;
      if (dragAxis === 'y' && this.pswp.options.closeOnVerticalDrag && currSlide && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
        // Handle vertical drag to close
        var panY = currSlide.pan.y + (p1.y - prevP1.y);
        if (!this.pswp.dispatch('verticalDrag', {
          panY: panY
        }).defaultPrevented) {
          this._setPanWithFriction('y', panY, VERTICAL_DRAG_FRICTION);
          var bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
          this.pswp.applyBgOpacity(bgOpacity);
          currSlide.applyCurrentZoomPan();
        }
      } else {
        var mainScrollChanged = this._panOrMoveMainScroll('x');
        if (!mainScrollChanged) {
          this._panOrMoveMainScroll('y');
          if (currSlide) {
            roundPoint(currSlide.pan);
            currSlide.applyCurrentZoomPan();
          }
        }
      }
    }
  }, {
    key: "end",
    value: function end() {
      var velocity = this.gestures.velocity;
      var _this$pswp4 = this.pswp,
        mainScroll = _this$pswp4.mainScroll,
        currSlide = _this$pswp4.currSlide;
      var indexDiff = 0;
      this.pswp.animations.stopAll(); // Handle main scroll if it's shifted

      if (mainScroll.isShifted()) {
        // Position of the main scroll relative to the viewport
        var mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX(); // Ratio between 0 and 1:
        // 0 - slide is not visible at all,
        // 0.5 - half of the slide is visible
        // 1 - slide is fully visible

        var currentSlideVisibilityRatio = mainScrollShiftDiff / this.pswp.viewportSize.x; // Go next slide.
        //
        // - if velocity and its direction is matched,
        //   and we see at least tiny part of the next slide
        //
        // - or if we see less than 50% of the current slide
        //   and velocity is close to 0
        //

        if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
          // Go to next slide
          indexDiff = 1;
          velocity.x = Math.min(velocity.x, 0);
        } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
          // Go to prev slide
          indexDiff = -1;
          velocity.x = Math.max(velocity.x, 0);
        }
        mainScroll.moveIndexBy(indexDiff, true, velocity.x);
      } // Restore zoom level

      if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.max || this.gestures.isMultitouch) {
        this.gestures.zoomLevels.correctZoomPan(true);
      } else {
        // we run two animations instead of one,
        // as each axis has own pan boundaries and thus different spring function
        // (correctZoomPan does not have this functionality,
        //  it animates all properties with single timing function)
        this._finishPanGestureForAxis('x');
        this._finishPanGestureForAxis('y');
      }
    }
    /**
     * @private
     * @param {'x' | 'y'} axis
     */
  }, {
    key: "_finishPanGestureForAxis",
    value: function _finishPanGestureForAxis(axis) {
      var _this4 = this;
      var velocity = this.gestures.velocity;
      var currSlide = this.pswp.currSlide;
      if (!currSlide) {
        return;
      }
      var pan = currSlide.pan,
        bounds = currSlide.bounds;
      var panPos = pan[axis];
      var restoreBgOpacity = this.pswp.bgOpacity < 1 && axis === 'y'; // 0.995 means - scroll view loses 0.5% of its velocity per millisecond
      // Increasing this number will reduce travel distance

      var decelerationRate = 0.995; // 0.99
      // Pan position if there is no bounds

      var projectedPosition = panPos + project(velocity[axis], decelerationRate);
      if (restoreBgOpacity) {
        var vDragRatio = this._getVerticalDragRatio(panPos);
        var projectedVDragRatio = this._getVerticalDragRatio(projectedPosition); // If we are above and moving upwards,
        // or if we are below and moving downwards

        if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
          this.pswp.close();
          return;
        }
      } // Pan position with corrected bounds

      var correctedPanPosition = bounds.correctPan(axis, projectedPosition); // Exit if pan position should not be changed
      // or if speed it too low

      if (panPos === correctedPanPosition) {
        return;
      } // Overshoot if the final position is out of pan bounds

      var dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
      var initialBgOpacity = this.pswp.bgOpacity;
      var totalPanDist = correctedPanPosition - panPos;
      this.pswp.animations.startSpring({
        name: 'panGesture' + axis,
        isPan: true,
        start: panPos,
        end: correctedPanPosition,
        velocity: velocity[axis],
        dampingRatio: dampingRatio,
        onUpdate: function onUpdate(pos) {
          // Animate opacity of background relative to Y pan position of an image
          if (restoreBgOpacity && _this4.pswp.bgOpacity < 1) {
            // 0 - start of animation, 1 - end of animation
            var animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist; // We clamp opacity to keep it between 0 and 1.
            // As progress ratio can be larger than 1 due to overshoot,
            // and we do not want to bounce opacity.

            _this4.pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
          }
          pan[axis] = Math.floor(pos);
          currSlide.applyCurrentZoomPan();
        }
      });
    }
    /**
     * Update position of the main scroll,
     * or/and update pan position of the current slide.
     *
     * Should return true if it changes (or can change) main scroll.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @returns {boolean}
     */
  }, {
    key: "_panOrMoveMainScroll",
    value: function _panOrMoveMainScroll(axis) {
      var _this$gestures2 = this.gestures,
        p1 = _this$gestures2.p1,
        dragAxis = _this$gestures2.dragAxis,
        prevP1 = _this$gestures2.prevP1,
        isMultitouch = _this$gestures2.isMultitouch;
      var _this$pswp5 = this.pswp,
        currSlide = _this$pswp5.currSlide,
        mainScroll = _this$pswp5.mainScroll;
      var delta = p1[axis] - prevP1[axis];
      var newMainScrollX = mainScroll.x + delta;
      if (!delta || !currSlide) {
        return false;
      } // Always move main scroll if image can not be panned

      if (axis === 'x' && !currSlide.isPannable() && !isMultitouch) {
        mainScroll.moveTo(newMainScrollX, true);
        return true; // changed main scroll
      }
      var bounds = currSlide.bounds;
      var newPan = currSlide.pan[axis] + delta;
      if (this.pswp.options.allowPanToNext && dragAxis === 'x' && axis === 'x' && !isMultitouch) {
        var currSlideMainScrollX = mainScroll.getCurrSlideX(); // Position of the main scroll relative to the viewport

        var mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
        var isLeftToRight = delta > 0;
        var isRightToLeft = !isLeftToRight;
        if (newPan > bounds.min[axis] && isLeftToRight) {
          // Panning from left to right, beyond the left edge
          // Wether the image was at minimum pan position (or less)
          // when this drag gesture started.
          // Minimum pan position refers to the left edge of the image.
          var wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
          if (wasAtMinPanPosition) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          } else {
            this._setPanWithFriction(axis, newPan); //currSlide.pan[axis] = newPan;
          }
        } else if (newPan < bounds.max[axis] && isRightToLeft) {
          // Paning from right to left, beyond the right edge
          // Maximum pan position refers to the right edge of the image.
          var wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
          if (wasAtMaxPanPosition) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          } else {
            this._setPanWithFriction(axis, newPan); //currSlide.pan[axis] = newPan;
          }
        } else {
          // If main scroll is shifted
          if (mainScrollShiftDiff !== 0) {
            // If main scroll is shifted right
            if (mainScrollShiftDiff > 0
            /*&& isRightToLeft*/) {
              mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
              return true;
            } else if (mainScrollShiftDiff < 0
            /*&& isLeftToRight*/) {
              // Main scroll is shifted left (Position is less than 0 comparing to the viewport 0)
              mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
              return true;
            }
          } else {
            // We are within pan bounds, so just pan
            this._setPanWithFriction(axis, newPan);
          }
        }
      } else {
        if (axis === 'y') {
          // Do not pan vertically if main scroll is shifted o
          if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
            this._setPanWithFriction(axis, newPan);
          }
        } else {
          this._setPanWithFriction(axis, newPan);
        }
      }
      return false;
    } // If we move above - the ratio is negative
    // If we move below the ratio is positive

    /**
     * Relation between pan Y position and third of viewport height.
     *
     * When we are at initial position (center bounds) - the ratio is 0,
     * if position is shifted upwards - the ratio is negative,
     * if position is shifted downwards - the ratio is positive.
     *
     * @private
     * @param {number} panY The current pan Y position.
     * @returns {number}
     */
  }, {
    key: "_getVerticalDragRatio",
    value: function _getVerticalDragRatio(panY) {
      var _this$pswp$currSlide$, _this$pswp$currSlide;
      return (panY - ((_this$pswp$currSlide$ = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.bounds.center.y) !== null && _this$pswp$currSlide$ !== void 0 ? _this$pswp$currSlide$ : 0)) / (this.pswp.viewportSize.y / 3);
    }
    /**
     * Set pan position of the current slide.
     * Apply friction if the position is beyond the pan bounds,
     * or if custom friction is defined.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} potentialPan
     * @param {number} [customFriction] (0.1 - 1)
     */
  }, {
    key: "_setPanWithFriction",
    value: function _setPanWithFriction(axis, potentialPan, customFriction) {
      var currSlide = this.pswp.currSlide;
      if (!currSlide) {
        return;
      }
      var pan = currSlide.pan,
        bounds = currSlide.bounds;
      var correctedPan = bounds.correctPan(axis, potentialPan); // If we are out of pan bounds

      if (correctedPan !== potentialPan || customFriction) {
        var delta = Math.round(potentialPan - pan[axis]);
        pan[axis] += delta * (customFriction || PAN_END_FRICTION);
      } else {
        pan[axis] = potentialPan;
      }
    }
  }]);
}();
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('./gestures.js').default} Gestures */
var UPPER_ZOOM_FRICTION = 0.05;
var LOWER_ZOOM_FRICTION = 0.15;
/**
 * Get center point between two points
 *
 * @param {Point} p
 * @param {Point} p1
 * @param {Point} p2
 * @returns {Point}
 */

function getZoomPointsCenter(p, p1, p2) {
  p.x = (p1.x + p2.x) / 2;
  p.y = (p1.y + p2.y) / 2;
  return p;
}
var ZoomHandler = /*#__PURE__*/function () {
  /**
   * @param {Gestures} gestures
   */
  function ZoomHandler(gestures) {
    _classCallCheck(this, ZoomHandler);
    this.gestures = gestures;
    /**
     * @private
     * @type {Point}
     */

    this._startPan = {
      x: 0,
      y: 0
    };
    /**
     * @private
     * @type {Point}
     */

    this._startZoomPoint = {
      x: 0,
      y: 0
    };
    /**
     * @private
     * @type {Point}
     */

    this._zoomPoint = {
      x: 0,
      y: 0
    };
    /** @private */

    this._wasOverFitZoomLevel = false;
    /** @private */

    this._startZoomLevel = 1;
  }
  return _createClass(ZoomHandler, [{
    key: "start",
    value: function start() {
      var currSlide = this.gestures.pswp.currSlide;
      if (currSlide) {
        this._startZoomLevel = currSlide.currZoomLevel;
        equalizePoints(this._startPan, currSlide.pan);
      }
      this.gestures.pswp.animations.stopAllPan();
      this._wasOverFitZoomLevel = false;
    }
  }, {
    key: "change",
    value: function change() {
      var _this$gestures3 = this.gestures,
        p1 = _this$gestures3.p1,
        startP1 = _this$gestures3.startP1,
        p2 = _this$gestures3.p2,
        startP2 = _this$gestures3.startP2,
        pswp = _this$gestures3.pswp;
      var currSlide = pswp.currSlide;
      if (!currSlide) {
        return;
      }
      var minZoomLevel = currSlide.zoomLevels.min;
      var maxZoomLevel = currSlide.zoomLevels.max;
      if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
        return;
      }
      getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
      getZoomPointsCenter(this._zoomPoint, p1, p2);
      var currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel; // slightly over the zoom.fit

      if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
        this._wasOverFitZoomLevel = true;
      }
      if (currZoomLevel < minZoomLevel) {
        if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
          // fade out background if zooming out
          var bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
          if (!pswp.dispatch('pinchClose', {
            bgOpacity: bgOpacity
          }).defaultPrevented) {
            pswp.applyBgOpacity(bgOpacity);
          }
        } else {
          // Apply the friction if zoom level is below the min
          currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
        }
      } else if (currZoomLevel > maxZoomLevel) {
        // Apply the friction if zoom level is above the max
        currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
      }
      currSlide.pan.x = this._calculatePanForZoomLevel('x', currZoomLevel);
      currSlide.pan.y = this._calculatePanForZoomLevel('y', currZoomLevel);
      currSlide.setZoomLevel(currZoomLevel);
      currSlide.applyCurrentZoomPan();
    }
  }, {
    key: "end",
    value: function end() {
      var pswp = this.gestures.pswp;
      var currSlide = pswp.currSlide;
      if ((!currSlide || currSlide.currZoomLevel < currSlide.zoomLevels.initial) && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
        pswp.close();
      } else {
        this.correctZoomPan();
      }
    }
    /**
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} currZoomLevel
     * @returns {number}
     */
  }, {
    key: "_calculatePanForZoomLevel",
    value: function _calculatePanForZoomLevel(axis, currZoomLevel) {
      var zoomFactor = currZoomLevel / this._startZoomLevel;
      return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
    }
    /**
     * Correct currZoomLevel and pan if they are
     * beyond minimum or maximum values.
     * With animation.
     *
     * @param {boolean} [ignoreGesture]
     * Wether gesture coordinates should be ignored when calculating destination pan position.
     */
  }, {
    key: "correctZoomPan",
    value: function correctZoomPan(ignoreGesture) {
      var pswp = this.gestures.pswp;
      var currSlide = pswp.currSlide;
      if (!(currSlide !== null && currSlide !== void 0 && currSlide.isZoomable())) {
        return;
      }
      if (this._zoomPoint.x === 0) {
        ignoreGesture = true;
      }
      var prevZoomLevel = currSlide.currZoomLevel;
      /** @type {number} */

      var destinationZoomLevel;
      var currZoomLevelNeedsChange = true;
      if (prevZoomLevel < currSlide.zoomLevels.initial) {
        destinationZoomLevel = currSlide.zoomLevels.initial; // zoom to min
      } else if (prevZoomLevel > currSlide.zoomLevels.max) {
        destinationZoomLevel = currSlide.zoomLevels.max; // zoom to max
      } else {
        currZoomLevelNeedsChange = false;
        destinationZoomLevel = prevZoomLevel;
      }
      var initialBgOpacity = pswp.bgOpacity;
      var restoreBgOpacity = pswp.bgOpacity < 1;
      var initialPan = equalizePoints({
        x: 0,
        y: 0
      }, currSlide.pan);
      var destinationPan = equalizePoints({
        x: 0,
        y: 0
      }, initialPan);
      if (ignoreGesture) {
        this._zoomPoint.x = 0;
        this._zoomPoint.y = 0;
        this._startZoomPoint.x = 0;
        this._startZoomPoint.y = 0;
        this._startZoomLevel = prevZoomLevel;
        equalizePoints(this._startPan, initialPan);
      }
      if (currZoomLevelNeedsChange) {
        destinationPan = {
          x: this._calculatePanForZoomLevel('x', destinationZoomLevel),
          y: this._calculatePanForZoomLevel('y', destinationZoomLevel)
        };
      } // set zoom level, so pan bounds are updated according to it

      currSlide.setZoomLevel(destinationZoomLevel);
      destinationPan = {
        x: currSlide.bounds.correctPan('x', destinationPan.x),
        y: currSlide.bounds.correctPan('y', destinationPan.y)
      }; // return zoom level and its bounds to initial

      currSlide.setZoomLevel(prevZoomLevel);
      var panNeedsChange = !pointsEqual(destinationPan, initialPan);
      if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
        // update resolution after gesture
        currSlide._setResolution(destinationZoomLevel);
        currSlide.applyCurrentZoomPan(); // nothing to animate

        return;
      }
      pswp.animations.stopAllPan();
      pswp.animations.startSpring({
        isPan: true,
        start: 0,
        end: 1000,
        velocity: 0,
        dampingRatio: 1,
        naturalFrequency: 40,
        onUpdate: function onUpdate(now) {
          now /= 1000; // 0 - start, 1 - end

          if (panNeedsChange || currZoomLevelNeedsChange) {
            if (panNeedsChange) {
              currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now;
              currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now;
            }
            if (currZoomLevelNeedsChange) {
              var newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now;
              currSlide.setZoomLevel(newZoomLevel);
            }
            currSlide.applyCurrentZoomPan();
          } // Restore background opacity

          if (restoreBgOpacity && pswp.bgOpacity < 1) {
            // We clamp opacity to keep it between 0 and 1.
            // As progress ratio can be larger than 1 due to overshoot,
            // and we do not want to bounce opacity.
            pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now, 0, 1));
          }
        },
        onComplete: function onComplete() {
          // update resolution after transition ends
          currSlide._setResolution(destinationZoomLevel);
          currSlide.applyCurrentZoomPan();
        }
      });
    }
  }]);
}();
/**
 * @template {string} T
 * @template {string} P
 * @typedef {import('../types.js').AddPostfix<T, P>} AddPostfix<T, P>
 */
/** @typedef {import('./gestures.js').default} Gestures */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {'imageClick' | 'bgClick' | 'tap' | 'doubleTap'} Actions */
/**
 * Whether the tap was performed on the main slide
 * (rather than controls or caption).
 *
 * @param {PointerEvent} event
 * @returns {boolean}
 */
function didTapOnMainContent(event) {
  return !! /** @type {HTMLElement} */
  event.target.closest('.pswp__container');
}
/**
 * Tap, double-tap handler.
 */
var TapHandler = /*#__PURE__*/function () {
  /**
   * @param {Gestures} gestures
   */
  function TapHandler(gestures) {
    _classCallCheck(this, TapHandler);
    this.gestures = gestures;
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  return _createClass(TapHandler, [{
    key: "click",
    value: function click(point, originalEvent) {
      var targetClassList = /** @type {HTMLElement} */
      originalEvent.target.classList;
      var isImageClick = targetClassList.contains('pswp__img');
      var isBackgroundClick = targetClassList.contains('pswp__item') || targetClassList.contains('pswp__zoom-wrap');
      if (isImageClick) {
        this._doClickOrTapAction('imageClick', point, originalEvent);
      } else if (isBackgroundClick) {
        this._doClickOrTapAction('bgClick', point, originalEvent);
      }
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
  }, {
    key: "tap",
    value: function tap(point, originalEvent) {
      if (didTapOnMainContent(originalEvent)) {
        this._doClickOrTapAction('tap', point, originalEvent);
      }
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
  }, {
    key: "doubleTap",
    value: function doubleTap(point, originalEvent) {
      if (didTapOnMainContent(originalEvent)) {
        this._doClickOrTapAction('doubleTap', point, originalEvent);
      }
    }
    /**
     * @private
     * @param {Actions} actionName
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
  }, {
    key: "_doClickOrTapAction",
    value: function _doClickOrTapAction(actionName, point, originalEvent) {
      var _this$gestures$pswp$e;
      var pswp = this.gestures.pswp;
      var currSlide = pswp.currSlide;
      var actionFullName = /** @type {AddPostfix<Actions, 'Action'>} */
      actionName + 'Action';
      var optionValue = pswp.options[actionFullName];
      if (pswp.dispatch(actionFullName, {
        point: point,
        originalEvent: originalEvent
      }).defaultPrevented) {
        return;
      }
      if (typeof optionValue === 'function') {
        optionValue.call(pswp, point, originalEvent);
        return;
      }
      switch (optionValue) {
        case 'close':
        case 'next':
          pswp[optionValue]();
          break;
        case 'zoom':
          currSlide === null || currSlide === void 0 || currSlide.toggleZoom(point);
          break;
        case 'zoom-or-close':
          // by default click zooms current image,
          // if it can not be zoomed - gallery will be closed
          if (currSlide !== null && currSlide !== void 0 && currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
            currSlide.toggleZoom(point);
          } else if (pswp.options.clickToCloseNonZoomable) {
            pswp.close();
          }
          break;
        case 'toggle-controls':
          (_this$gestures$pswp$e = this.gestures.pswp.element) === null || _this$gestures$pswp$e === void 0 || _this$gestures$pswp$e.classList.toggle('pswp--ui-visible'); // if (_controlsVisible) {
          //   _ui.hideControls();
          // } else {
          //   _ui.showControls();
          // }

          break;
      }
    }
  }]);
}();
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').Point} Point */
// How far should user should drag
// until we can determine that the gesture is swipe and its direction
var AXIS_SWIPE_HYSTERISIS = 10; //const PAN_END_FRICTION = 0.35;

var DOUBLE_TAP_DELAY = 300; // ms

var MIN_TAP_DISTANCE = 25; // px

/**
 * Gestures class bind touch, pointer or mouse events
 * and emits drag to drag-handler and zoom events zoom-handler.
 *
 * Drag and zoom events are emited in requestAnimationFrame,
 * and only when one of pointers was actually changed.
 */
var Gestures = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function Gestures(pswp) {
    var _this5 = this;
    _classCallCheck(this, Gestures);
    this.pswp = pswp;
    /** @type {'x' | 'y' | null} */

    this.dragAxis = null; // point objects are defined once and reused
    // PhotoSwipe keeps track only of two pointers, others are ignored

    /** @type {Point} */

    this.p1 = {
      x: 0,
      y: 0
    }; // the first pressed pointer

    /** @type {Point} */

    this.p2 = {
      x: 0,
      y: 0
    }; // the second pressed pointer

    /** @type {Point} */

    this.prevP1 = {
      x: 0,
      y: 0
    };
    /** @type {Point} */

    this.prevP2 = {
      x: 0,
      y: 0
    };
    /** @type {Point} */

    this.startP1 = {
      x: 0,
      y: 0
    };
    /** @type {Point} */

    this.startP2 = {
      x: 0,
      y: 0
    };
    /** @type {Point} */

    this.velocity = {
      x: 0,
      y: 0
    };
    /** @type {Point}
     * @private
     */

    this._lastStartP1 = {
      x: 0,
      y: 0
    };
    /** @type {Point}
     * @private
     */

    this._intervalP1 = {
      x: 0,
      y: 0
    };
    /** @private */

    this._numActivePoints = 0;
    /** @type {Point[]}
     * @private
     */

    this._ongoingPointers = [];
    /** @private */

    this._touchEventEnabled = 'ontouchstart' in window;
    /** @private */

    this._pointerEventEnabled = !!window.PointerEvent;
    this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
    /** @private */

    this._numActivePoints = 0;
    /** @private */

    this._intervalTime = 0;
    /** @private */

    this._velocityCalculated = false;
    this.isMultitouch = false;
    this.isDragging = false;
    this.isZooming = false;
    /** @type {number | null} */

    this.raf = null;
    /** @type {NodeJS.Timeout | null}
     * @private
     */

    this._tapTimer = null;
    if (!this.supportsTouch) {
      // disable pan to next slide for non-touch devices
      pswp.options.allowPanToNext = false;
    }
    this.drag = new DragHandler(this);
    this.zoomLevels = new ZoomHandler(this);
    this.tapHandler = new TapHandler(this);
    pswp.on('bindEvents', function () {
      pswp.events.add(pswp.scrollWrap, 'click', /** @type EventListener */
      _this5._onClick.bind(_this5));
      if (_this5._pointerEventEnabled) {
        _this5._bindEvents('pointer', 'down', 'up', 'cancel');
      } else if (_this5._touchEventEnabled) {
        _this5._bindEvents('touch', 'start', 'end', 'cancel'); // In previous versions we also bound mouse event here,
        // in case device supports both touch and mouse events,
        // but newer versions of browsers now support PointerEvent.
        // on iOS10 if you bind touchmove/end after touchstart,
        // and you don't preventDefault touchstart (which PhotoSwipe does),
        // preventDefault will have no effect on touchmove and touchend.
        // Unless you bind it previously.

        if (pswp.scrollWrap) {
          pswp.scrollWrap.ontouchmove = function () {};
          pswp.scrollWrap.ontouchend = function () {};
        }
      } else {
        _this5._bindEvents('mouse', 'down', 'up');
      }
    });
  }
  /**
   * @private
   * @param {'mouse' | 'touch' | 'pointer'} pref
   * @param {'down' | 'start'} down
   * @param {'up' | 'end'} up
   * @param {'cancel'} [cancel]
   */
  return _createClass(Gestures, [{
    key: "_bindEvents",
    value: function _bindEvents(pref, down, up, cancel) {
      var pswp = this.pswp;
      var events = pswp.events;
      var cancelEvent = cancel ? pref + cancel : '';
      events.add(pswp.scrollWrap, pref + down, /** @type EventListener */
      this.onPointerDown.bind(this));
      events.add(window, pref + 'move', /** @type EventListener */
      this.onPointerMove.bind(this));
      events.add(window, pref + up, /** @type EventListener */
      this.onPointerUp.bind(this));
      if (cancelEvent) {
        events.add(pswp.scrollWrap, cancelEvent, /** @type EventListener */
        this.onPointerUp.bind(this));
      }
    }
    /**
     * @param {PointerEvent} e
     */
  }, {
    key: "onPointerDown",
    value: function onPointerDown(e) {
      // We do not call preventDefault for touch events
      // to allow browser to show native dialog on longpress
      // (the one that allows to save image or open it in new tab).
      //
      // Desktop Safari allows to drag images when preventDefault isn't called on mousedown,
      // even though preventDefault IS called on mousemove. That's why we preventDefault mousedown.
      var isMousePointer = e.type === 'mousedown' || e.pointerType === 'mouse'; // Allow dragging only via left mouse button.
      // http://www.quirksmode.org/js/events_properties.html
      // https://developer.mozilla.org/en-US/docs/Web/API/event.button

      if (isMousePointer && e.button > 0) {
        return;
      }
      var pswp = this.pswp; // if PhotoSwipe is opening or closing

      if (!pswp.opener.isOpen) {
        e.preventDefault();
        return;
      }
      if (pswp.dispatch('pointerDown', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (isMousePointer) {
        pswp.mouseDetected(); // preventDefault mouse event to prevent
        // browser image drag feature

        this._preventPointerEventBehaviour(e, 'down');
      }
      pswp.animations.stopAll();
      this._updatePoints(e, 'down');
      if (this._numActivePoints === 1) {
        this.dragAxis = null; // we need to store initial point to determine the main axis,
        // drag is activated only after the axis is determined

        equalizePoints(this.startP1, this.p1);
      }
      if (this._numActivePoints > 1) {
        // Tap or double tap should not trigger if more than one pointer
        this._clearTapTimer();
        this.isMultitouch = true;
      } else {
        this.isMultitouch = false;
      }
    }
    /**
     * @param {PointerEvent} e
     */
  }, {
    key: "onPointerMove",
    value: function onPointerMove(e) {
      this._preventPointerEventBehaviour(e, 'move');
      if (!this._numActivePoints) {
        return;
      }
      this._updatePoints(e, 'move');
      if (this.pswp.dispatch('pointerMove', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (this._numActivePoints === 1 && !this.isDragging) {
        if (!this.dragAxis) {
          this._calculateDragDirection();
        } // Drag axis was detected, emit drag.start

        if (this.dragAxis && !this.isDragging) {
          if (this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
          }
          this.isDragging = true;
          this._clearTapTimer(); // Tap can not trigger after drag
          // Adjust starting point

          this._updateStartPoints();
          this._intervalTime = Date.now(); //this._startTime = this._intervalTime;

          this._velocityCalculated = false;
          equalizePoints(this._intervalP1, this.p1);
          this.velocity.x = 0;
          this.velocity.y = 0;
          this.drag.start();
          this._rafStopLoop();
          this._rafRenderLoop();
        }
      } else if (this._numActivePoints > 1 && !this.isZooming) {
        this._finishDrag();
        this.isZooming = true; // Adjust starting points

        this._updateStartPoints();
        this.zoomLevels.start();
        this._rafStopLoop();
        this._rafRenderLoop();
      }
    }
    /**
     * @private
     */
  }, {
    key: "_finishDrag",
    value: function _finishDrag() {
      if (this.isDragging) {
        this.isDragging = false; // Try to calculate velocity,
        // if it wasn't calculated yet in drag.change

        if (!this._velocityCalculated) {
          this._updateVelocity(true);
        }
        this.drag.end();
        this.dragAxis = null;
      }
    }
    /**
     * @param {PointerEvent} e
     */
  }, {
    key: "onPointerUp",
    value: function onPointerUp(e) {
      if (!this._numActivePoints) {
        return;
      }
      this._updatePoints(e, 'up');
      if (this.pswp.dispatch('pointerUp', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (this._numActivePoints === 0) {
        this._rafStopLoop();
        if (this.isDragging) {
          this._finishDrag();
        } else if (!this.isZooming && !this.isMultitouch) {
          //this.zoomLevels.correctZoomPan();
          this._finishTap(e);
        }
      }
      if (this._numActivePoints < 2 && this.isZooming) {
        this.isZooming = false;
        this.zoomLevels.end();
        if (this._numActivePoints === 1) {
          // Since we have 1 point left, we need to reinitiate drag
          this.dragAxis = null;
          this._updateStartPoints();
        }
      }
    }
    /**
     * @private
     */
  }, {
    key: "_rafRenderLoop",
    value: function _rafRenderLoop() {
      if (this.isDragging || this.isZooming) {
        this._updateVelocity();
        if (this.isDragging) {
          // make sure that pointer moved since the last update
          if (!pointsEqual(this.p1, this.prevP1)) {
            this.drag.change();
          }
        } else /* if (this.isZooming) */
          {
            if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
              this.zoomLevels.change();
            }
          }
        this._updatePrevPoints();
        this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
      }
    }
    /**
     * Update velocity at 50ms interval
     *
     * @private
     * @param {boolean} [force]
     */
  }, {
    key: "_updateVelocity",
    value: function _updateVelocity(force) {
      var time = Date.now();
      var duration = time - this._intervalTime;
      if (duration < 50 && !force) {
        return;
      }
      this.velocity.x = this._getVelocity('x', duration);
      this.velocity.y = this._getVelocity('y', duration);
      this._intervalTime = time;
      equalizePoints(this._intervalP1, this.p1);
      this._velocityCalculated = true;
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
  }, {
    key: "_finishTap",
    value: function _finishTap(e) {
      var _this6 = this;
      var mainScroll = this.pswp.mainScroll; // Do not trigger tap events if main scroll is shifted

      if (mainScroll.isShifted()) {
        // restore main scroll position
        // (usually happens if stopped in the middle of animation)
        mainScroll.moveIndexBy(0, true);
        return;
      } // Do not trigger tap for touchcancel or pointercancel

      if (e.type.indexOf('cancel') > 0) {
        return;
      } // Trigger click instead of tap for mouse events

      if (e.type === 'mouseup' || e.pointerType === 'mouse') {
        this.tapHandler.click(this.startP1, e);
        return;
      } // Disable delay if there is no doubleTapAction

      var tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0; // If tapTimer is defined - we tapped recently,
      // check if the current tap is close to the previous one,
      // if yes - trigger double tap

      if (this._tapTimer) {
        this._clearTapTimer(); // Check if two taps were more or less on the same place

        if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
          this.tapHandler.doubleTap(this.startP1, e);
        }
      } else {
        equalizePoints(this._lastStartP1, this.startP1);
        this._tapTimer = setTimeout(function () {
          _this6.tapHandler.tap(_this6.startP1, e);
          _this6._clearTapTimer();
        }, tapDelay);
      }
    }
    /**
     * @private
     */
  }, {
    key: "_clearTapTimer",
    value: function _clearTapTimer() {
      if (this._tapTimer) {
        clearTimeout(this._tapTimer);
        this._tapTimer = null;
      }
    }
    /**
     * Get velocity for axis
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} duration
     * @returns {number}
     */
  }, {
    key: "_getVelocity",
    value: function _getVelocity(axis, duration) {
      // displacement is like distance, but can be negative.
      var displacement = this.p1[axis] - this._intervalP1[axis];
      if (Math.abs(displacement) > 1 && duration > 5) {
        return displacement / duration;
      }
      return 0;
    }
    /**
     * @private
     */
  }, {
    key: "_rafStopLoop",
    value: function _rafStopLoop() {
      if (this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = null;
      }
    }
    /**
     * @private
     * @param {PointerEvent} e
     * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
     */
  }, {
    key: "_preventPointerEventBehaviour",
    value: function _preventPointerEventBehaviour(e, pointerType) {
      var preventPointerEvent = this.pswp.applyFilters('preventPointerEvent', true, e, pointerType);
      if (preventPointerEvent) {
        e.preventDefault();
      }
    }
    /**
     * Parses and normalizes points from the touch, mouse or pointer event.
     * Updates p1 and p2.
     *
     * @private
     * @param {PointerEvent | TouchEvent} e
     * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
     */
  }, {
    key: "_updatePoints",
    value: function _updatePoints(e, pointerType) {
      if (this._pointerEventEnabled) {
        var pointerEvent = /** @type {PointerEvent} */
        e; // Try to find the current pointer in ongoing pointers by its ID

        var pointerIndex = this._ongoingPointers.findIndex(function (ongoingPointer) {
          return ongoingPointer.id === pointerEvent.pointerId;
        });
        if (pointerType === 'up' && pointerIndex > -1) {
          // release the pointer - remove it from ongoing
          this._ongoingPointers.splice(pointerIndex, 1);
        } else if (pointerType === 'down' && pointerIndex === -1) {
          // add new pointer
          this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {
            x: 0,
            y: 0
          }));
        } else if (pointerIndex > -1) {
          // update existing pointer
          this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
        }
        this._numActivePoints = this._ongoingPointers.length; // update points that PhotoSwipe uses
        // to calculate position and scale

        if (this._numActivePoints > 0) {
          equalizePoints(this.p1, this._ongoingPointers[0]);
        }
        if (this._numActivePoints > 1) {
          equalizePoints(this.p2, this._ongoingPointers[1]);
        }
      } else {
        var touchEvent = /** @type {TouchEvent} */
        e;
        this._numActivePoints = 0;
        if (touchEvent.type.indexOf('touch') > -1) {
          // Touch Event
          // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
          if (touchEvent.touches && touchEvent.touches.length > 0) {
            this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
            this._numActivePoints++;
            if (touchEvent.touches.length > 1) {
              this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
              this._numActivePoints++;
            }
          }
        } else {
          // Mouse Event
          this._convertEventPosToPoint(/** @type {PointerEvent} */
          e, this.p1);
          if (pointerType === 'up') {
            // clear all points on mouseup
            this._numActivePoints = 0;
          } else {
            this._numActivePoints++;
          }
        }
      }
    }
    /** update points that were used during previous rAF tick
     * @private
     */
  }, {
    key: "_updatePrevPoints",
    value: function _updatePrevPoints() {
      equalizePoints(this.prevP1, this.p1);
      equalizePoints(this.prevP2, this.p2);
    }
    /** update points at the start of gesture
     * @private
     */
  }, {
    key: "_updateStartPoints",
    value: function _updateStartPoints() {
      equalizePoints(this.startP1, this.p1);
      equalizePoints(this.startP2, this.p2);
      this._updatePrevPoints();
    }
    /** @private */
  }, {
    key: "_calculateDragDirection",
    value: function _calculateDragDirection() {
      if (this.pswp.mainScroll.isShifted()) {
        // if main scroll position is shifted – direction is always horizontal
        this.dragAxis = 'x';
      } else {
        // calculate delta of the last touchmove tick
        var diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
        if (diff !== 0) {
          // check if pointer was shifted horizontally or vertically
          var axisToCheck = diff > 0 ? 'x' : 'y';
          if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
            this.dragAxis = axisToCheck;
          }
        }
      }
    }
    /**
     * Converts touch, pointer or mouse event
     * to PhotoSwipe point.
     *
     * @private
     * @param {Touch | PointerEvent} e
     * @param {Point} p
     * @returns {Point}
     */
  }, {
    key: "_convertEventPosToPoint",
    value: function _convertEventPosToPoint(e, p) {
      p.x = e.pageX - this.pswp.offset.x;
      p.y = e.pageY - this.pswp.offset.y;
      if ('pointerId' in e) {
        p.id = e.pointerId;
      } else if (e.identifier !== undefined) {
        p.id = e.identifier;
      }
      return p;
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      // Do not allow click event to pass through after drag
      if (this.pswp.mainScroll.isShifted()) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }]);
}();
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./slide/slide.js').default} Slide */
/** @typedef {{ el: HTMLDivElement; slide?: Slide }} ItemHolder */
var MAIN_SCROLL_END_FRICTION = 0.35; // const MIN_SWIPE_TRANSITION_DURATION = 250;
// const MAX_SWIPE_TRABSITION_DURATION = 500;
// const DEFAULT_SWIPE_TRANSITION_DURATION = 333;

/**
 * Handles movement of the main scrolling container
 * (for example, it repositions when user swipes left or right).
 *
 * Also stores its state.
 */
var MainScroll = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function MainScroll(pswp) {
    _classCallCheck(this, MainScroll);
    this.pswp = pswp;
    this.x = 0;
    this.slideWidth = 0;
    /** @private */

    this._currPositionIndex = 0;
    /** @private */

    this._prevPositionIndex = 0;
    /** @private */

    this._containerShiftIndex = -1;
    /** @type {ItemHolder[]} */

    this.itemHolders = [];
  }
  /**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {boolean} [resizeSlides] Whether slides content should resized
   */
  return _createClass(MainScroll, [{
    key: "resize",
    value: function resize(resizeSlides) {
      var _this7 = this;
      var pswp = this.pswp;
      var newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing); // Mobile browsers might trigger a resize event during a gesture.
      // (due to toolbar appearing or hiding).
      // Avoid re-adjusting main scroll position if width wasn't changed

      var slideWidthChanged = newSlideWidth !== this.slideWidth;
      if (slideWidthChanged) {
        this.slideWidth = newSlideWidth;
        this.moveTo(this.getCurrSlideX());
      }
      this.itemHolders.forEach(function (itemHolder, index) {
        if (slideWidthChanged) {
          setTransform(itemHolder.el, (index + _this7._containerShiftIndex) * _this7.slideWidth);
        }
        if (resizeSlides && itemHolder.slide) {
          itemHolder.slide.resize();
        }
      });
    }
    /**
     * Reset X position of the main scroller to zero
     */
  }, {
    key: "resetPosition",
    value: function resetPosition() {
      // Position on the main scroller (offset)
      // it is independent from slide index
      this._currPositionIndex = 0;
      this._prevPositionIndex = 0; // This will force recalculation of size on next resize()

      this.slideWidth = 0; // _containerShiftIndex*viewportSize will give you amount of transform of the current slide

      this._containerShiftIndex = -1;
    }
    /**
     * Create and append array of three items
     * that hold data about slides in DOM
     */
  }, {
    key: "appendHolders",
    value: function appendHolders() {
      this.itemHolders = []; // append our three slide holders -
      // previous, current, and next

      for (var i = 0; i < 3; i++) {
        var el = createElement('pswp__item', 'div', this.pswp.container);
        el.setAttribute('role', 'group');
        el.setAttribute('aria-roledescription', 'slide');
        el.setAttribute('aria-hidden', 'true'); // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)

        el.style.display = i === 1 ? 'block' : 'none';
        this.itemHolders.push({
          el: el //index: -1
        });
      }
    }
    /**
     * Whether the main scroll can be horizontally swiped to the next or previous slide.
     * @returns {boolean}
     */
  }, {
    key: "canBeSwiped",
    value: function canBeSwiped() {
      return this.pswp.getNumItems() > 1;
    }
    /**
     * Move main scroll by X amount of slides.
     * For example:
     *   `-1` will move to the previous slide,
     *    `0` will reset the scroll position of the current slide,
     *    `3` will move three slides forward
     *
     * If loop option is enabled - index will be automatically looped too,
     * (for example `-1` will move to the last slide of the gallery).
     *
     * @param {number} diff
     * @param {boolean} [animate]
     * @param {number} [velocityX]
     * @returns {boolean} whether index was changed or not
     */
  }, {
    key: "moveIndexBy",
    value: function moveIndexBy(diff, animate, velocityX) {
      var _this8 = this;
      var pswp = this.pswp;
      var newIndex = pswp.potentialIndex + diff;
      var numSlides = pswp.getNumItems();
      if (pswp.canLoop()) {
        newIndex = pswp.getLoopedIndex(newIndex);
        var distance = (diff + numSlides) % numSlides;
        if (distance <= numSlides / 2) {
          // go forward
          diff = distance;
        } else {
          // go backwards
          diff = distance - numSlides;
        }
      } else {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= numSlides) {
          newIndex = numSlides - 1;
        }
        diff = newIndex - pswp.potentialIndex;
      }
      pswp.potentialIndex = newIndex;
      this._currPositionIndex -= diff;
      pswp.animations.stopMainScroll();
      var destinationX = this.getCurrSlideX();
      if (!animate) {
        this.moveTo(destinationX);
        this.updateCurrItem();
      } else {
        pswp.animations.startSpring({
          isMainScroll: true,
          start: this.x,
          end: destinationX,
          velocity: velocityX || 0,
          naturalFrequency: 30,
          dampingRatio: 1,
          //0.7,
          onUpdate: function onUpdate(x) {
            _this8.moveTo(x);
          },
          onComplete: function onComplete() {
            _this8.updateCurrItem();
            pswp.appendHeavy();
          }
        });
        var currDiff = pswp.potentialIndex - pswp.currIndex;
        if (pswp.canLoop()) {
          var currDistance = (currDiff + numSlides) % numSlides;
          if (currDistance <= numSlides / 2) {
            // go forward
            currDiff = currDistance;
          } else {
            // go backwards
            currDiff = currDistance - numSlides;
          }
        } // Force-append new slides during transition
        // if difference between slides is more than 1

        if (Math.abs(currDiff) > 1) {
          this.updateCurrItem();
        }
      }
      return Boolean(diff);
    }
    /**
     * X position of the main scroll for the current slide
     * (ignores position during dragging)
     * @returns {number}
     */
  }, {
    key: "getCurrSlideX",
    value: function getCurrSlideX() {
      return this.slideWidth * this._currPositionIndex;
    }
    /**
     * Whether scroll position is shifted.
     * For example, it will return true if the scroll is being dragged or animated.
     * @returns {boolean}
     */
  }, {
    key: "isShifted",
    value: function isShifted() {
      return this.x !== this.getCurrSlideX();
    }
    /**
     * Update slides X positions and set their content
     */
  }, {
    key: "updateCurrItem",
    value: function updateCurrItem() {
      var _this$itemHolders$;
      var pswp = this.pswp;
      var positionDifference = this._prevPositionIndex - this._currPositionIndex;
      if (!positionDifference) {
        return;
      }
      this._prevPositionIndex = this._currPositionIndex;
      pswp.currIndex = pswp.potentialIndex;
      var diffAbs = Math.abs(positionDifference);
      /** @type {ItemHolder | undefined} */

      var tempHolder;
      if (diffAbs >= 3) {
        this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
        diffAbs = 3; // If slides are changed by 3 screens or more - clean up previous slides

        this.itemHolders.forEach(function (itemHolder) {
          var _itemHolder$slide;
          (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.destroy();
          itemHolder.slide = undefined;
        });
      }
      for (var i = 0; i < diffAbs; i++) {
        if (positionDifference > 0) {
          tempHolder = this.itemHolders.shift();
          if (tempHolder) {
            this.itemHolders[2] = tempHolder; // move first to last

            this._containerShiftIndex++;
            setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
            pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i + 2);
          }
        } else {
          tempHolder = this.itemHolders.pop();
          if (tempHolder) {
            this.itemHolders.unshift(tempHolder); // move last to first

            this._containerShiftIndex--;
            setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
            pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i - 2);
          }
        }
      } // Reset transfrom every 50ish navigations in one direction.
      //
      // Otherwise transform will keep growing indefinitely,
      // which might cause issues as browsers have a maximum transform limit.
      // I wasn't able to reach it, but just to be safe.
      // This should not cause noticable lag.

      if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
        this.resetPosition();
        this.resize();
      } // Pan transition might be running (and consntantly updating pan position)

      pswp.animations.stopAllPan();
      this.itemHolders.forEach(function (itemHolder, i) {
        if (itemHolder.slide) {
          // Slide in the 2nd holder is always active
          itemHolder.slide.setIsActive(i === 1);
        }
      });
      pswp.currSlide = (_this$itemHolders$ = this.itemHolders[1]) === null || _this$itemHolders$ === void 0 ? void 0 : _this$itemHolders$.slide;
      pswp.contentLoader.updateLazy(positionDifference);
      if (pswp.currSlide) {
        pswp.currSlide.applyCurrentZoomPan();
      }
      pswp.dispatch('change');
    }
    /**
     * Move the X position of the main scroll container
     *
     * @param {number} x
     * @param {boolean} [dragging]
     */
  }, {
    key: "moveTo",
    value: function moveTo(x, dragging) {
      if (!this.pswp.canLoop() && dragging) {
        // Apply friction
        var newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x) / this.slideWidth;
        newSlideIndexOffset += this.pswp.currIndex;
        var delta = Math.round(x - this.x);
        if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
          x = this.x + delta * MAIN_SCROLL_END_FRICTION;
        }
      }
      this.x = x;
      if (this.pswp.container) {
        setTransform(this.pswp.container, x);
      }
      this.pswp.dispatch('moveMainScroll', {
        x: x,
        dragging: dragging !== null && dragging !== void 0 ? dragging : false
      });
    }
  }]);
}();
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('./types.js').Methods<T>} Methods<T>
 */
var KeyboardKeyCodesMap = {
  Escape: 27,
  z: 90,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Tab: 9
};
/**
 * @template {keyof KeyboardKeyCodesMap} T
 * @param {T} key
 * @param {boolean} isKeySupported
 * @returns {T | number | undefined}
 */

var getKeyboardEventKey = function getKeyboardEventKey(key, isKeySupported) {
  return isKeySupported ? key : KeyboardKeyCodesMap[key];
};
/**
 * - Manages keyboard shortcuts.
 * - Helps trap focus within photoswipe.
 */
var Keyboard = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function Keyboard(pswp) {
    var _this9 = this;
    _classCallCheck(this, Keyboard);
    this.pswp = pswp;
    /** @private */

    this._wasFocused = false;
    pswp.on('bindEvents', function () {
      if (pswp.options.trapFocus) {
        // Dialog was likely opened by keyboard if initial point is not defined
        if (!pswp.options.initialPointerPos) {
          // focus causes layout,
          // which causes lag during the animation,
          // that's why we delay it until the opener transition ends
          _this9._focusRoot();
        }
        pswp.events.add(document, 'focusin', /** @type EventListener */
        _this9._onFocusIn.bind(_this9));
      }
      pswp.events.add(document, 'keydown', /** @type EventListener */
      _this9._onKeyDown.bind(_this9));
    });
    var lastActiveElement = /** @type {HTMLElement} */
    document.activeElement;
    pswp.on('destroy', function () {
      if (pswp.options.returnFocus && lastActiveElement && _this9._wasFocused) {
        lastActiveElement.focus();
      }
    });
  }
  /** @private */
  return _createClass(Keyboard, [{
    key: "_focusRoot",
    value: function _focusRoot() {
      if (!this._wasFocused && this.pswp.element) {
        this.pswp.element.focus();
        this._wasFocused = true;
      }
    }
    /**
     * @private
     * @param {KeyboardEvent} e
     */
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      var pswp = this.pswp;
      if (pswp.dispatch('keydown', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (specialKeyUsed(e)) {
        // don't do anything if special key pressed
        // to prevent from overriding default browser actions
        // for example, in Chrome on Mac cmd+arrow-left returns to previous page
        return;
      }
      /** @type {Methods<PhotoSwipe> | undefined} */

      var keydownAction;
      /** @type {'x' | 'y' | undefined} */

      var axis;
      var isForward = false;
      var isKeySupported = 'key' in e;
      switch (isKeySupported ? e.key : e.keyCode) {
        case getKeyboardEventKey('Escape', isKeySupported):
          if (pswp.options.escKey) {
            keydownAction = 'close';
          }
          break;
        case getKeyboardEventKey('z', isKeySupported):
          keydownAction = 'toggleZoom';
          break;
        case getKeyboardEventKey('ArrowLeft', isKeySupported):
          axis = 'x';
          break;
        case getKeyboardEventKey('ArrowUp', isKeySupported):
          axis = 'y';
          break;
        case getKeyboardEventKey('ArrowRight', isKeySupported):
          axis = 'x';
          isForward = true;
          break;
        case getKeyboardEventKey('ArrowDown', isKeySupported):
          isForward = true;
          axis = 'y';
          break;
        case getKeyboardEventKey('Tab', isKeySupported):
          this._focusRoot();
          break;
      } // if left/right/top/bottom key

      if (axis) {
        // prevent page scroll
        e.preventDefault();
        var currSlide = pswp.currSlide;
        if (pswp.options.arrowKeys && axis === 'x' && pswp.getNumItems() > 1) {
          keydownAction = isForward ? 'next' : 'prev';
        } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
          // up/down arrow keys pan the image vertically
          // left/right arrow keys pan horizontally.
          // Unless there is only one image,
          // or arrowKeys option is disabled
          currSlide.pan[axis] += isForward ? -80 : 80;
          currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
        }
      }
      if (keydownAction) {
        e.preventDefault(); // @ts-ignore

        pswp[keydownAction]();
      }
    }
    /**
     * Trap focus inside photoswipe
     *
     * @private
     * @param {FocusEvent} e
     */
  }, {
    key: "_onFocusIn",
    value: function _onFocusIn(e) {
      var template = this.pswp.template;
      if (template && document !== e.target && template !== e.target && !template.contains(/** @type {Node} */
      e.target)) {
        // focus root element
        template.focus();
      }
    }
  }]);
}();
var DEFAULT_EASING = 'cubic-bezier(.4,0,.22,1)';
/** @typedef {import('./animations.js').SharedAnimationProps} SharedAnimationProps */

/** @typedef {Object} DefaultCssAnimationProps
 *
 * @prop {HTMLElement} target
 * @prop {number} [duration]
 * @prop {string} [easing]
 * @prop {string} [transform]
 * @prop {string} [opacity]
 * */

/** @typedef {SharedAnimationProps & DefaultCssAnimationProps} CssAnimationProps */

/**
 * Runs CSS transition.
 */
var CSSAnimation = /*#__PURE__*/function () {
  /**
   * onComplete can be unpredictable, be careful about current state
   *
   * @param {CssAnimationProps} props
   */
  function CSSAnimation(props) {
    var _this0 = this;
    _classCallCheck(this, CSSAnimation);
    var _props$prop;
    this.props = props;
    var target = props.target,
      onComplete = props.onComplete,
      transform = props.transform,
      _props$onFinish = props.onFinish,
      onFinish = _props$onFinish === void 0 ? function () {} : _props$onFinish,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 333 : _props$duration,
      _props$easing = props.easing,
      easing = _props$easing === void 0 ? DEFAULT_EASING : _props$easing;
    this.onFinish = onFinish; // support only transform and opacity

    var prop = transform ? 'transform' : 'opacity';
    var propValue = (_props$prop = props[prop]) !== null && _props$prop !== void 0 ? _props$prop : '';
    /** @private */

    this._target = target;
    /** @private */

    this._onComplete = onComplete;
    /** @private */

    this._finished = false;
    /** @private */

    this._onTransitionEnd = this._onTransitionEnd.bind(this); // Using timeout hack to make sure that animation
    // starts even if the animated property was changed recently,
    // otherwise transitionend might not fire or transition won't start.
    // https://drafts.csswg.org/css-transitions/#starting
    //
    // ¯\_(ツ)_/¯

    /** @private */

    this._helperTimeout = setTimeout(function () {
      setTransitionStyle(target, prop, duration, easing);
      _this0._helperTimeout = setTimeout(function () {
        target.addEventListener('transitionend', _this0._onTransitionEnd, false);
        target.addEventListener('transitioncancel', _this0._onTransitionEnd, false); // Safari occasionally does not emit transitionend event
        // if element property was modified during the transition,
        // which may be caused by resize or third party component,
        // using timeout as a safety fallback

        _this0._helperTimeout = setTimeout(function () {
          _this0._finalizeAnimation();
        }, duration + 500);
        target.style[prop] = propValue;
      }, 30); // Do not reduce this number
    }, 0);
  }
  /**
   * @private
   * @param {TransitionEvent} e
   */
  return _createClass(CSSAnimation, [{
    key: "_onTransitionEnd",
    value: function _onTransitionEnd(e) {
      if (e.target === this._target) {
        this._finalizeAnimation();
      }
    }
    /**
     * @private
     */
  }, {
    key: "_finalizeAnimation",
    value: function _finalizeAnimation() {
      if (!this._finished) {
        this._finished = true;
        this.onFinish();
        if (this._onComplete) {
          this._onComplete();
        }
      }
    } // Destroy is called automatically onFinish
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._helperTimeout) {
        clearTimeout(this._helperTimeout);
      }
      removeTransitionStyle(this._target);
      this._target.removeEventListener('transitionend', this._onTransitionEnd, false);
      this._target.removeEventListener('transitioncancel', this._onTransitionEnd, false);
      if (!this._finished) {
        this._finalizeAnimation();
      }
    }
  }]);
}();
var DEFAULT_NATURAL_FREQUENCY = 12;
var DEFAULT_DAMPING_RATIO = 0.75;
/**
 * Spring easing helper
 */
var SpringEaser = /*#__PURE__*/function () {
  /**
   * @param {number} initialVelocity Initial velocity, px per ms.
   *
   * @param {number} [dampingRatio]
   * Determines how bouncy animation will be.
   * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   * "overshoot" refers to part of animation that
   * goes beyond the final value.
   *
   * @param {number} [naturalFrequency]
   * Determines how fast animation will slow down.
   * The higher value - the stiffer the transition will be,
   * and the faster it will slow down.
   * Recommended value from 10 to 50
   */
  function SpringEaser(initialVelocity, dampingRatio, naturalFrequency) {
    _classCallCheck(this, SpringEaser);
    this.velocity = initialVelocity * 1000; // convert to "pixels per second"
    // https://en.wikipedia.org/wiki/Damping_ratio

    this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO; // https://en.wikipedia.org/wiki/Natural_frequency

    this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
    this._dampedFrequency = this._naturalFrequency;
    if (this._dampingRatio < 1) {
      this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
    }
  }
  /**
   * @param {number} deltaPosition Difference between current and end position of the animation
   * @param {number} deltaTime Frame duration in milliseconds
   *
   * @returns {number} Displacement, relative to the end position.
   */
  return _createClass(SpringEaser, [{
    key: "easeFrame",
    value: function easeFrame(deltaPosition, deltaTime) {
      // Inspired by Apple Webkit and Android spring function implementation
      // https://en.wikipedia.org/wiki/Oscillation
      // https://en.wikipedia.org/wiki/Damping_ratio
      // we ignore mass (assume that it's 1kg)
      var displacement = 0;
      var coeff;
      deltaTime /= 1000;
      var naturalDumpingPow = Math.pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);
      if (this._dampingRatio === 1) {
        coeff = this.velocity + this._naturalFrequency * deltaPosition;
        displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
        this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
      } else if (this._dampingRatio < 1) {
        coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
        var dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
        var dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
        displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
        this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
      } // Overdamped (>1) damping ratio is not supported

      return displacement;
    }
  }]);
}();
/** @typedef {import('./animations.js').SharedAnimationProps} SharedAnimationProps */
/**
 * @typedef {Object} DefaultSpringAnimationProps
 *
 * @prop {number} start
 * @prop {number} end
 * @prop {number} velocity
 * @prop {number} [dampingRatio]
 * @prop {number} [naturalFrequency]
 * @prop {(end: number) => void} onUpdate
 */
/** @typedef {SharedAnimationProps & DefaultSpringAnimationProps} SpringAnimationProps */
var SpringAnimation = /*#__PURE__*/function () {
  /**
   * @param {SpringAnimationProps} props
   */
  function SpringAnimation(props) {
    var _this1 = this;
    _classCallCheck(this, SpringAnimation);
    this.props = props;
    this._raf = 0;
    var start = props.start,
      end = props.end,
      velocity = props.velocity,
      onUpdate = props.onUpdate,
      onComplete = props.onComplete,
      _props$onFinish2 = props.onFinish,
      onFinish = _props$onFinish2 === void 0 ? function () {} : _props$onFinish2,
      dampingRatio = props.dampingRatio,
      naturalFrequency = props.naturalFrequency;
    this.onFinish = onFinish;
    var easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
    var prevTime = Date.now();
    var deltaPosition = start - end;
    var _animationLoop = function animationLoop() {
      if (_this1._raf) {
        deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime); // Stop the animation if velocity is low and position is close to end

        if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
          // Finalize the animation
          onUpdate(end);
          if (onComplete) {
            onComplete();
          }
          _this1.onFinish();
        } else {
          prevTime = Date.now();
          onUpdate(deltaPosition + end);
          _this1._raf = requestAnimationFrame(_animationLoop);
        }
      }
    };
    this._raf = requestAnimationFrame(_animationLoop);
  } // Destroy is called automatically onFinish
  return _createClass(SpringAnimation, [{
    key: "destroy",
    value: function destroy() {
      if (this._raf >= 0) {
        cancelAnimationFrame(this._raf);
      }
      this._raf = 0;
    }
  }]);
}();
/** @typedef {import('./css-animation.js').CssAnimationProps} CssAnimationProps */
/** @typedef {import('./spring-animation.js').SpringAnimationProps} SpringAnimationProps */
/** @typedef {Object} SharedAnimationProps
 * @prop {string} [name]
 * @prop {boolean} [isPan]
 * @prop {boolean} [isMainScroll]
 * @prop {VoidFunction} [onComplete]
 * @prop {VoidFunction} [onFinish]
 */
/** @typedef {SpringAnimation | CSSAnimation} Animation */
/** @typedef {SpringAnimationProps | CssAnimationProps} AnimationProps */
/**
 * Manages animations
 */
var Animations = /*#__PURE__*/function () {
  function Animations() {
    _classCallCheck(this, Animations);
    /** @type {Animation[]} */
    this.activeAnimations = [];
  }
  /**
   * @param {SpringAnimationProps} props
   */
  return _createClass(Animations, [{
    key: "startSpring",
    value: function startSpring(props) {
      this._start(props, true);
    }
    /**
     * @param {CssAnimationProps} props
     */
  }, {
    key: "startTransition",
    value: function startTransition(props) {
      this._start(props);
    }
    /**
     * @private
     * @param {AnimationProps} props
     * @param {boolean} [isSpring]
     * @returns {Animation}
     */
  }, {
    key: "_start",
    value: function _start(props, isSpring) {
      var _this10 = this;
      var animation = isSpring ? new SpringAnimation(/** @type SpringAnimationProps */
      props) : new CSSAnimation(/** @type CssAnimationProps */
      props);
      this.activeAnimations.push(animation);
      animation.onFinish = function () {
        return _this10.stop(animation);
      };
      return animation;
    }
    /**
     * @param {Animation} animation
     */
  }, {
    key: "stop",
    value: function stop(animation) {
      animation.destroy();
      var index = this.activeAnimations.indexOf(animation);
      if (index > -1) {
        this.activeAnimations.splice(index, 1);
      }
    }
  }, {
    key: "stopAll",
    value: function stopAll() {
      // _stopAllAnimations
      this.activeAnimations.forEach(function (animation) {
        animation.destroy();
      });
      this.activeAnimations = [];
    }
    /**
     * Stop all pan or zoom transitions
     */
  }, {
    key: "stopAllPan",
    value: function stopAllPan() {
      this.activeAnimations = this.activeAnimations.filter(function (animation) {
        if (animation.props.isPan) {
          animation.destroy();
          return false;
        }
        return true;
      });
    }
  }, {
    key: "stopMainScroll",
    value: function stopMainScroll() {
      this.activeAnimations = this.activeAnimations.filter(function (animation) {
        if (animation.props.isMainScroll) {
          animation.destroy();
          return false;
        }
        return true;
      });
    }
    /**
     * Returns true if main scroll transition is running
     */
    // isMainScrollRunning() {
    //   return this.activeAnimations.some((animation) => {
    //     return animation.props.isMainScroll;
    //   });
    // }

    /**
     * Returns true if any pan or zoom transition is running
     */
  }, {
    key: "isPanRunning",
    value: function isPanRunning() {
      return this.activeAnimations.some(function (animation) {
        return animation.props.isPan;
      });
    }
  }]);
}();
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * Handles scroll wheel.
 * Can pan and zoom current slide image.
 */
var ScrollWheel = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function ScrollWheel(pswp) {
    _classCallCheck(this, ScrollWheel);
    this.pswp = pswp;
    pswp.events.add(pswp.element, 'wheel', /** @type EventListener */
    this._onWheel.bind(this));
  }
  /**
   * @private
   * @param {WheelEvent} e
   */
  return _createClass(ScrollWheel, [{
    key: "_onWheel",
    value: function _onWheel(e) {
      e.preventDefault();
      var currSlide = this.pswp.currSlide;
      var deltaX = e.deltaX,
        deltaY = e.deltaY;
      if (!currSlide) {
        return;
      }
      if (this.pswp.dispatch('wheel', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (e.ctrlKey || this.pswp.options.wheelToZoom) {
        // zoom
        if (currSlide.isZoomable()) {
          var zoomFactor = -deltaY;
          if (e.deltaMode === 1
          /* DOM_DELTA_LINE */) {
            zoomFactor *= 0.05;
          } else {
            zoomFactor *= e.deltaMode ? 1 : 0.002;
          }
          zoomFactor = Math.pow(2, zoomFactor);
          var destZoomLevel = currSlide.currZoomLevel * zoomFactor;
          currSlide.zoomTo(destZoomLevel, {
            x: e.clientX,
            y: e.clientY
          });
        }
      } else {
        // pan
        if (currSlide.isPannable()) {
          if (e.deltaMode === 1
          /* DOM_DELTA_LINE */) {
            // 18 - average line height
            deltaX *= 18;
            deltaY *= 18;
          }
          currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
        }
      }
    }
  }]);
}();
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('../types.js').Methods<T>} Methods<T>
 */
/**
 * @typedef {Object} UIElementMarkupProps
 * @prop {boolean} [isCustomSVG]
 * @prop {string} inner
 * @prop {string} [outlineID]
 * @prop {number | string} [size]
 */
/**
 * @typedef {Object} UIElementData
 * @prop {DefaultUIElements | string} [name]
 * @prop {string} [className]
 * @prop {UIElementMarkup} [html]
 * @prop {boolean} [isButton]
 * @prop {keyof HTMLElementTagNameMap} [tagName]
 * @prop {string} [title]
 * @prop {string} [ariaLabel]
 * @prop {(element: HTMLElement, pswp: PhotoSwipe) => void} [onInit]
 * @prop {Methods<PhotoSwipe> | ((e: MouseEvent, element: HTMLElement, pswp: PhotoSwipe) => void)} [onClick]
 * @prop {'bar' | 'wrapper' | 'root'} [appendTo]
 * @prop {number} [order]
 */
/** @typedef {'arrowPrev' | 'arrowNext' | 'close' | 'zoom' | 'counter'} DefaultUIElements */
/** @typedef {string | UIElementMarkupProps} UIElementMarkup */
/**
 * @param {UIElementMarkup} [htmlData]
 * @returns {string}
 */
function addElementHTML(htmlData) {
  if (typeof htmlData === 'string') {
    // Allow developers to provide full svg,
    // For example:
    // <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" class="pswp__icn">
    //   <path d="..." />
    //   <circle ... />
    // </svg>
    // Can also be any HTML string.
    return htmlData;
  }
  if (!htmlData || !htmlData.isCustomSVG) {
    return '';
  }
  var svgData = htmlData;
  var out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">'; // replace all %d with size

  out = out.split('%d').join(/** @type {string} */
  svgData.size || 32); // Icons may contain outline/shadow,
  // to make it we "clone" base icon shape and add border to it.
  // Icon itself and border are styled via CSS.
  //
  // Property shadowID defines ID of element that should be cloned.

  if (svgData.outlineID) {
    out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
  }
  out += svgData.inner;
  out += '</svg>';
  return out;
}
var UIElement = /*#__PURE__*/_createClass(
/**
 * @param {PhotoSwipe} pswp
 * @param {UIElementData} data
 */
function UIElement(pswp, data) {
  _classCallCheck(this, UIElement);
  var _container;
  var name = data.name || data.className;
  var elementHTML = data.html; // @ts-expect-error lookup only by `data.name` maybe?

  if (pswp.options[name] === false) {
    // exit if element is disabled from options
    return;
  } // Allow to override SVG icons from options
  // @ts-expect-error lookup only by `data.name` maybe?

  if (typeof pswp.options[name + 'SVG'] === 'string') {
    // arrowPrevSVG
    // arrowNextSVG
    // closeSVG
    // zoomSVG
    // @ts-expect-error lookup only by `data.name` maybe?
    elementHTML = pswp.options[name + 'SVG'];
  }
  pswp.dispatch('uiElementCreate', {
    data: data
  });
  var className = '';
  if (data.isButton) {
    className += 'pswp__button ';
    className += data.className || "pswp__button--".concat(data.name);
  } else {
    className += data.className || "pswp__".concat(data.name);
  }
  var tagName = data.isButton ? data.tagName || 'button' : data.tagName || 'div';
  tagName = /** @type {keyof HTMLElementTagNameMap} */
  tagName.toLowerCase();
  /** @type {HTMLElement} */

  var element = createElement(className, tagName);
  if (data.isButton) {
    if (tagName === 'button') {
      /** @type {HTMLButtonElement} */
      element.type = 'button';
    }
    var title = data.title;
    var ariaLabel = data.ariaLabel; // @ts-expect-error lookup only by `data.name` maybe?

    if (typeof pswp.options[name + 'Title'] === 'string') {
      // @ts-expect-error lookup only by `data.name` maybe?
      title = pswp.options[name + 'Title'];
    }
    if (title) {
      element.title = title;
    }
    var ariaText = ariaLabel || title;
    if (ariaText) {
      element.setAttribute('aria-label', ariaText);
    }
  }
  element.innerHTML = addElementHTML(elementHTML);
  if (data.onInit) {
    data.onInit(element, pswp);
  }
  if (data.onClick) {
    element.onclick = function (e) {
      if (typeof data.onClick === 'string') {
        // @ts-ignore
        pswp[data.onClick]();
      } else if (typeof data.onClick === 'function') {
        data.onClick(e, element, pswp);
      }
    };
  } // Top bar is default position

  var appendTo = data.appendTo || 'bar';
  /** @type {HTMLElement | undefined} root element by default */

  var container = pswp.element;
  if (appendTo === 'bar') {
    if (!pswp.topBar) {
      pswp.topBar = createElement('pswp__top-bar pswp__hide-on-close', 'div', pswp.scrollWrap);
    }
    container = pswp.topBar;
  } else {
    // element outside of top bar gets a secondary class
    // that makes element fade out on close
    element.classList.add('pswp__hide-on-close');
    if (appendTo === 'wrapper') {
      container = pswp.scrollWrap;
    }
  }
  (_container = container) === null || _container === void 0 || _container.appendChild(pswp.applyFilters('uiElement', element, data));
});
/*
  Backward and forward arrow buttons
 */
/** @typedef {import('./ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 *
 * @param {HTMLElement} element
 * @param {PhotoSwipe} pswp
 * @param {boolean} [isNextButton]
 */
function initArrowButton(element, pswp, isNextButton) {
  element.classList.add('pswp__button--arrow'); // TODO: this should point to a unique id for this instance

  element.setAttribute('aria-controls', 'pswp__items');
  pswp.on('change', function () {
    if (!pswp.options.loop) {
      if (isNextButton) {
        /** @type {HTMLButtonElement} */
        element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
      } else {
        /** @type {HTMLButtonElement} */
        element.disabled = !(pswp.currIndex > 0);
      }
    }
  });
}
/** @type {UIElementData} */

var arrowPrev = {
  name: 'arrowPrev',
  className: 'pswp__button--arrow--prev',
  title: 'Previous',
  order: 10,
  isButton: true,
  appendTo: 'wrapper',
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
    outlineID: 'pswp__icn-arrow'
  },
  onClick: 'prev',
  onInit: initArrowButton
};
/** @type {UIElementData} */

var arrowNext = {
  name: 'arrowNext',
  className: 'pswp__button--arrow--next',
  title: 'Next',
  order: 11,
  isButton: true,
  appendTo: 'wrapper',
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<use xlink:href="#pswp__icn-arrow"/>',
    outlineID: 'pswp__icn-arrow'
  },
  onClick: 'next',
  onInit: function onInit(el, pswp) {
    initArrowButton(el, pswp, true);
  }
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var closeButton = {
  name: 'close',
  title: 'Close',
  order: 20,
  isButton: true,
  html: {
    isCustomSVG: true,
    inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
    outlineID: 'pswp__icn-close'
  },
  onClick: 'close'
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var zoomButton = {
  name: 'zoom',
  title: 'Zoom',
  order: 10,
  isButton: true,
  html: {
    isCustomSVG: true,
    // eslint-disable-next-line max-len
    inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/>' + '<path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/>' + '<path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
    outlineID: 'pswp__icn-zoom'
  },
  onClick: 'toggleZoom'
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var loadingIndicator = {
  name: 'preloader',
  appendTo: 'bar',
  order: 7,
  html: {
    isCustomSVG: true,
    // eslint-disable-next-line max-len
    inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
    outlineID: 'pswp__icn-loading'
  },
  onInit: function onInit(indicatorElement, pswp) {
    /** @type {boolean | undefined} */
    var isVisible;
    /** @type {NodeJS.Timeout | null} */

    var delayTimeout = null;
    /**
     * @param {string} className
     * @param {boolean} add
     */

    var toggleIndicatorClass = function toggleIndicatorClass(className, add) {
      indicatorElement.classList.toggle('pswp__preloader--' + className, add);
    };
    /**
     * @param {boolean} visible
     */

    var setIndicatorVisibility = function setIndicatorVisibility(visible) {
      if (isVisible !== visible) {
        isVisible = visible;
        toggleIndicatorClass('active', visible);
      }
    };
    var updatePreloaderVisibility = function updatePreloaderVisibility() {
      var _pswp$currSlide;
      if (!((_pswp$currSlide = pswp.currSlide) !== null && _pswp$currSlide !== void 0 && _pswp$currSlide.content.isLoading())) {
        setIndicatorVisibility(false);
        if (delayTimeout) {
          clearTimeout(delayTimeout);
          delayTimeout = null;
        }
        return;
      }
      if (!delayTimeout) {
        // display loading indicator with delay
        delayTimeout = setTimeout(function () {
          var _pswp$currSlide2;
          setIndicatorVisibility(Boolean((_pswp$currSlide2 = pswp.currSlide) === null || _pswp$currSlide2 === void 0 ? void 0 : _pswp$currSlide2.content.isLoading()));
          delayTimeout = null;
        }, pswp.options.preloaderDelay);
      }
    };
    pswp.on('change', updatePreloaderVisibility);
    pswp.on('loadComplete', function (e) {
      if (pswp.currSlide === e.slide) {
        updatePreloaderVisibility();
      }
    }); // expose the method

    if (pswp.ui) {
      pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
    }
  }
};

/** @type {import('./ui-element.js').UIElementData} UIElementData */
var counterIndicator = {
  name: 'counter',
  order: 5,
  onInit: function onInit(counterElement, pswp) {
    pswp.on('change', function () {
      counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
    });
  }
};

/** @typedef {import('../photoswipe.js').default} PhotoSwipe */

/** @typedef {import('./ui-element.js').UIElementData} UIElementData */

/**
 * Set special class on element when image is zoomed.
 *
 * By default, it is used to adjust
 * zoom icon and zoom cursor via CSS.
 *
 * @param {HTMLElement} el
 * @param {boolean} isZoomedIn
 */

function setZoomedIn(el, isZoomedIn) {
  el.classList.toggle('pswp--zoomed-in', isZoomedIn);
}
var UI = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function UI(pswp) {
    _classCallCheck(this, UI);
    this.pswp = pswp;
    this.isRegistered = false;
    /** @type {UIElementData[]} */

    this.uiElementsData = [];
    /** @type {(UIElement | UIElementData)[]} */

    this.items = [];
    /** @type {() => void} */

    this.updatePreloaderVisibility = function () {};
    /**
     * @private
     * @type {number | undefined}
     */

    this._lastUpdatedZoomLevel = undefined;
  }
  return _createClass(UI, [{
    key: "init",
    value: function init() {
      var _this11 = this;
      var pswp = this.pswp;
      this.isRegistered = false;
      this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
      pswp.dispatch('uiRegister'); // sort by order

      this.uiElementsData.sort(function (a, b) {
        // default order is 0
        return (a.order || 0) - (b.order || 0);
      });
      this.items = [];
      this.isRegistered = true;
      this.uiElementsData.forEach(function (uiElementData) {
        _this11.registerElement(uiElementData);
      });
      pswp.on('change', function () {
        var _pswp$element;
        (_pswp$element = pswp.element) === null || _pswp$element === void 0 || _pswp$element.classList.toggle('pswp--one-slide', pswp.getNumItems() === 1);
      });
      pswp.on('zoomPanUpdate', function () {
        return _this11._onZoomPanUpdate();
      });
    }
    /**
     * @param {UIElementData} elementData
     */
  }, {
    key: "registerElement",
    value: function registerElement(elementData) {
      if (this.isRegistered) {
        this.items.push(new UIElement(this.pswp, elementData));
      } else {
        this.uiElementsData.push(elementData);
      }
    }
    /**
     * Fired each time zoom or pan position is changed.
     * Update classes that control visibility of zoom button and cursor icon.
     *
     * @private
     */
  }, {
    key: "_onZoomPanUpdate",
    value: function _onZoomPanUpdate() {
      var _this$pswp6 = this.pswp,
        template = _this$pswp6.template,
        currSlide = _this$pswp6.currSlide,
        options = _this$pswp6.options;
      if (this.pswp.opener.isClosing || !template || !currSlide) {
        return;
      }
      var currZoomLevel = currSlide.currZoomLevel; // if not open yet - check against initial zoom level

      if (!this.pswp.opener.isOpen) {
        currZoomLevel = currSlide.zoomLevels.initial;
      }
      if (currZoomLevel === this._lastUpdatedZoomLevel) {
        return;
      }
      this._lastUpdatedZoomLevel = currZoomLevel;
      var currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary; // Initial and secondary zoom levels are almost equal

      if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
        // disable zoom
        setZoomedIn(template, false);
        template.classList.remove('pswp--zoom-allowed');
        return;
      }
      template.classList.add('pswp--zoom-allowed');
      var potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
      setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
      if (options.imageClickAction === 'zoom' || options.imageClickAction === 'zoom-or-close') {
        template.classList.add('pswp--click-to-zoom');
      }
    }
  }]);
}();
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {{ x: number; y: number; w: number; innerRect?: { w: number; h: number; x: number; y: number } }} Bounds */
/**
 * @param {HTMLElement} el
 * @returns Bounds
 */
function getBoundsByElement(el) {
  var thumbAreaRect = el.getBoundingClientRect();
  return {
    x: thumbAreaRect.left,
    y: thumbAreaRect.top,
    w: thumbAreaRect.width
  };
}
/**
 * @param {HTMLElement} el
 * @param {number} imageWidth
 * @param {number} imageHeight
 * @returns Bounds
 */

function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
  var thumbAreaRect = el.getBoundingClientRect(); // fill image into the area
  // (do they same as object-fit:cover does to retrieve coordinates)

  var hRatio = thumbAreaRect.width / imageWidth;
  var vRatio = thumbAreaRect.height / imageHeight;
  var fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
  var offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
  var offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
  /**
   * Coordinates of the image,
   * as if it was not cropped,
   * height is calculated automatically
   *
   * @type {Bounds}
   */

  var bounds = {
    x: thumbAreaRect.left + offsetX,
    y: thumbAreaRect.top + offsetY,
    w: imageWidth * fillZoomLevel
  }; // Coordinates of inner crop area
  // relative to the image

  bounds.innerRect = {
    w: thumbAreaRect.width,
    h: thumbAreaRect.height,
    x: offsetX,
    y: offsetY
  };
  return bounds;
}
/**
 * Get dimensions of thumbnail image
 * (click on which opens photoswipe or closes photoswipe to)
 *
 * @param {number} index
 * @param {SlideData} itemData
 * @param {PhotoSwipe} instance PhotoSwipe instance
 * @returns {Bounds | undefined}
 */

function _getThumbBounds(index, itemData, instance) {
  // legacy event, before filters were introduced
  var event = instance.dispatch('thumbBounds', {
    index: index,
    itemData: itemData,
    instance: instance
  }); // @ts-expect-error

  if (event.thumbBounds) {
    // @ts-expect-error
    return event.thumbBounds;
  }
  var element = itemData.element;
  /** @type {Bounds | undefined} */

  var thumbBounds;
  /** @type {HTMLElement | null | undefined} */

  var thumbnail;
  if (element && instance.options.thumbSelector !== false) {
    var thumbSelector = instance.options.thumbSelector || 'img';
    thumbnail = element.matches(thumbSelector) ? element : /** @type {HTMLElement | null} */
    element.querySelector(thumbSelector);
  }
  thumbnail = instance.applyFilters('thumbEl', thumbnail, itemData, index);
  if (thumbnail) {
    if (!itemData.thumbCropped) {
      thumbBounds = getBoundsByElement(thumbnail);
    } else {
      thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w || 0, itemData.height || itemData.h || 0);
    }
  }
  return instance.applyFilters('thumbBounds', thumbBounds, itemData, index);
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
      var _this12 = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var _this$_filters$name3;
      (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach(function (filter) {
        // @ts-expect-error
        args[0] = filter.fn.apply(_this12, args);
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
      var _this13 = this;
      var _this$_listeners$name2;
      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }
      var event = /** @type {AugmentedEvent<T>} */
      new PhotoSwipeEvent(name, details);
      (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach(function (listener) {
        listener.call(_this13, event);
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
      var _this14 = this;
      if (this.placeholder && !this.keepPlaceholder()) {
        // With delay, as image might be loaded, but not rendered
        setTimeout(function () {
          if (_this14.placeholder) {
            _this14.placeholder.destroy();
            _this14.placeholder = undefined;
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
      var _this15 = this;
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
          _this15.onLoaded();
        };
        imageElement.onerror = function () {
          _this15.onError();
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
      var _this16 = this;
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
            _this16.isDecoding = false;
            _this16.appendImage();
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
/** @typedef {import('./content.js').default} Content */
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
var MIN_SLIDES_TO_CACHE = 5;
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
var ContentLoader = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function ContentLoader(pswp) {
    _classCallCheck(this, ContentLoader);
    this.pswp = pswp; // Total amount of cached images

    this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
    /** @type {Content[]} */

    this._cachedItems = [];
  }
  /**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
   */
  return _createClass(ContentLoader, [{
    key: "updateLazy",
    value: function updateLazy(diff) {
      var pswp = this.pswp;
      if (pswp.dispatch('lazyLoad').defaultPrevented) {
        return;
      }
      var preload = pswp.options.preload;
      var isForward = diff === undefined ? true : diff >= 0;
      var i; // preload[1] - num items to preload in forward direction

      for (i = 0; i <= preload[1]; i++) {
        this.loadSlideByIndex(pswp.currIndex + (isForward ? i : -i));
      } // preload[0] - num items to preload in backward direction

      for (i = 1; i <= preload[0]; i++) {
        this.loadSlideByIndex(pswp.currIndex + (isForward ? -i : i));
      }
    }
    /**
     * @param {number} initialIndex
     */
  }, {
    key: "loadSlideByIndex",
    value: function loadSlideByIndex(initialIndex) {
      var index = this.pswp.getLoopedIndex(initialIndex); // try to get cached content

      var content = this.getContentByIndex(index);
      if (!content) {
        // no cached content, so try to load from scratch:
        content = lazyLoadSlide(index, this.pswp); // if content can be loaded, add it to cache:

        if (content) {
          this.addToCache(content);
        }
      }
    }
    /**
     * @param {Slide} slide
     * @returns {Content}
     */
  }, {
    key: "getContentBySlide",
    value: function getContentBySlide(slide) {
      var content = this.getContentByIndex(slide.index);
      if (!content) {
        // create content if not found in cache
        content = this.pswp.createContentFromData(slide.data, slide.index);
        this.addToCache(content);
      } // assign slide to content

      content.setSlide(slide);
      return content;
    }
    /**
     * @param {Content} content
     */
  }, {
    key: "addToCache",
    value: function addToCache(content) {
      // move to the end of array
      this.removeByIndex(content.index);
      this._cachedItems.push(content);
      if (this._cachedItems.length > this.limit) {
        // Destroy the first content that's not attached
        var indexToRemove = this._cachedItems.findIndex(function (item) {
          return !item.isAttached && !item.hasSlide;
        });
        if (indexToRemove !== -1) {
          var removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
          removedItem.destroy();
        }
      }
    }
    /**
     * Removes an image from cache, does not destroy() it, just removes.
     *
     * @param {number} index
     */
  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      var indexToRemove = this._cachedItems.findIndex(function (item) {
        return item.index === index;
      });
      if (indexToRemove !== -1) {
        this._cachedItems.splice(indexToRemove, 1);
      }
    }
    /**
     * @param {number} index
     * @returns {Content | undefined}
     */
  }, {
    key: "getContentByIndex",
    value: function getContentByIndex(index) {
      return this._cachedItems.find(function (content) {
        return content.index === index;
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._cachedItems.forEach(function (content) {
        return content.destroy();
      });
      this._cachedItems = [];
    }
  }]);
}();
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
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./slide/get-thumb-bounds.js').Bounds} Bounds */
/** @typedef {import('./util/animations.js').AnimationProps} AnimationProps */
// some browsers do not paint
// elements which opacity is set to 0,
// since we need to pre-render elements for the animation -
// we set it to the minimum amount
var MIN_OPACITY = 0.003;
/**
 * Manages opening and closing transitions of the PhotoSwipe.
 *
 * It can perform zoom, fade or no transition.
 */
var Opener = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function Opener(pswp) {
    _classCallCheck(this, Opener);
    this.pswp = pswp;
    this.isClosed = true;
    this.isOpen = false;
    this.isClosing = false;
    this.isOpening = false;
    /**
     * @private
     * @type {number | false | undefined}
     */

    this._duration = undefined;
    /** @private */

    this._useAnimation = false;
    /** @private */

    this._croppedZoom = false;
    /** @private */

    this._animateRootOpacity = false;
    /** @private */

    this._animateBgOpacity = false;
    /**
     * @private
     * @type { HTMLDivElement | HTMLImageElement | null | undefined }
     */

    this._placeholder = undefined;
    /**
     * @private
     * @type { HTMLDivElement | undefined }
     */

    this._opacityElement = undefined;
    /**
     * @private
     * @type { HTMLDivElement | undefined }
     */

    this._cropContainer1 = undefined;
    /**
     * @private
     * @type { HTMLElement | null | undefined }
     */

    this._cropContainer2 = undefined;
    /**
     * @private
     * @type {Bounds | undefined}
     */

    this._thumbBounds = undefined;
    this._prepareOpen = this._prepareOpen.bind(this); // Override initial zoom and pan position

    pswp.on('firstZoomPan', this._prepareOpen);
  }
  return _createClass(Opener, [{
    key: "open",
    value: function open() {
      this._prepareOpen();
      this._start();
    }
  }, {
    key: "close",
    value: function close() {
      var _this17 = this;
      if (this.isClosed || this.isClosing || this.isOpening) {
        // if we close during opening animation
        // for now do nothing,
        // browsers aren't good at changing the direction of the CSS transition
        return;
      }
      var slide = this.pswp.currSlide;
      this.isOpen = false;
      this.isOpening = false;
      this.isClosing = true;
      this._duration = this.pswp.options.hideAnimationDuration;
      if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) {
        this._duration = 0;
      }
      this._applyStartProps();
      setTimeout(function () {
        _this17._start();
      }, this._croppedZoom ? 30 : 0);
    }
    /** @private */
  }, {
    key: "_prepareOpen",
    value: function _prepareOpen() {
      this.pswp.off('firstZoomPan', this._prepareOpen);
      if (!this.isOpening) {
        var slide = this.pswp.currSlide;
        this.isOpening = true;
        this.isClosing = false;
        this._duration = this.pswp.options.showAnimationDuration;
        if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) {
          this._duration = 0;
        }
        this._applyStartProps();
      }
    }
    /** @private */
  }, {
    key: "_applyStartProps",
    value: function _applyStartProps() {
      var pswp = this.pswp;
      var slide = this.pswp.currSlide;
      var options = pswp.options;
      if (options.showHideAnimationType === 'fade') {
        options.showHideOpacity = true;
        this._thumbBounds = undefined;
      } else if (options.showHideAnimationType === 'none') {
        options.showHideOpacity = false;
        this._duration = 0;
        this._thumbBounds = undefined;
      } else if (this.isOpening && pswp._initialThumbBounds) {
        // Use initial bounds if defined
        this._thumbBounds = pswp._initialThumbBounds;
      } else {
        this._thumbBounds = this.pswp.getThumbBounds();
      }
      this._placeholder = slide === null || slide === void 0 ? void 0 : slide.getPlaceholderElement();
      pswp.animations.stopAll(); // Discard animations when duration is less than 50ms

      this._useAnimation = Boolean(this._duration && this._duration > 50);
      this._animateZoom = Boolean(this._thumbBounds) && (slide === null || slide === void 0 ? void 0 : slide.content.usePlaceholder()) && (!this.isClosing || !pswp.mainScroll.isShifted());
      if (!this._animateZoom) {
        this._animateRootOpacity = true;
        if (this.isOpening && slide) {
          slide.zoomAndPanToInitial();
          slide.applyCurrentZoomPan();
        }
      } else {
        var _options$showHideOpac;
        this._animateRootOpacity = (_options$showHideOpac = options.showHideOpacity) !== null && _options$showHideOpac !== void 0 ? _options$showHideOpac : false;
      }
      this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
      this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
      if (!this._useAnimation) {
        this._duration = 0;
        this._animateZoom = false;
        this._animateBgOpacity = false;
        this._animateRootOpacity = true;
        if (this.isOpening) {
          if (pswp.element) {
            pswp.element.style.opacity = String(MIN_OPACITY);
          }
          pswp.applyBgOpacity(1);
        }
        return;
      }
      if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
        var _this$pswp$currSlide;

        // Properties are used when animation from cropped thumbnail
        this._croppedZoom = true;
        this._cropContainer1 = this.pswp.container;
        this._cropContainer2 = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.holderElement;
        if (pswp.container) {
          pswp.container.style.overflow = 'hidden';
          pswp.container.style.width = pswp.viewportSize.x + 'px';
        }
      } else {
        this._croppedZoom = false;
      }
      if (this.isOpening) {
        // Apply styles before opening transition
        if (this._animateRootOpacity) {
          if (pswp.element) {
            pswp.element.style.opacity = String(MIN_OPACITY);
          }
          pswp.applyBgOpacity(1);
        } else {
          if (this._animateBgOpacity && pswp.bg) {
            pswp.bg.style.opacity = String(MIN_OPACITY);
          }
          if (pswp.element) {
            pswp.element.style.opacity = '1';
          }
        }
        if (this._animateZoom) {
          this._setClosedStateZoomPan();
          if (this._placeholder) {
            // tell browser that we plan to animate the placeholder
            this._placeholder.style.willChange = 'transform'; // hide placeholder to allow hiding of
            // elements that overlap it (such as icons over the thumbnail)

            this._placeholder.style.opacity = String(MIN_OPACITY);
          }
        }
      } else if (this.isClosing) {
        // hide nearby slides to make sure that
        // they are not painted during the transition
        if (pswp.mainScroll.itemHolders[0]) {
          pswp.mainScroll.itemHolders[0].el.style.display = 'none';
        }
        if (pswp.mainScroll.itemHolders[2]) {
          pswp.mainScroll.itemHolders[2].el.style.display = 'none';
        }
        if (this._croppedZoom) {
          if (pswp.mainScroll.x !== 0) {
            // shift the main scroller to zero position
            pswp.mainScroll.resetPosition();
            pswp.mainScroll.resize();
          }
        }
      }
    }
    /** @private */
  }, {
    key: "_start",
    value: function _start() {
      var _this18 = this;
      if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === 'IMG') {
        // To ensure smooth animation
        // we wait till the current slide image placeholder is decoded,
        // but no longer than 250ms,
        // and no shorter than 50ms
        // (just using requestanimationframe is not enough in Firefox,
        // for some reason)
        new Promise(function (resolve) {
          var decoded = false;
          var isDelaying = true;
          decodeImage(/** @type {HTMLImageElement} */
          _this18._placeholder)["finally"](function () {
            decoded = true;
            if (!isDelaying) {
              resolve(true);
            }
          });
          setTimeout(function () {
            isDelaying = false;
            if (decoded) {
              resolve(true);
            }
          }, 50);
          setTimeout(resolve, 250);
        })["finally"](function () {
          return _this18._initiate();
        });
      } else {
        this._initiate();
      }
    }
    /** @private */
  }, {
    key: "_initiate",
    value: function _initiate() {
      var _this$pswp$element, _this$pswp$element2;
      (_this$pswp$element = this.pswp.element) === null || _this$pswp$element === void 0 || _this$pswp$element.style.setProperty('--pswp-transition-duration', this._duration + 'ms');
      this.pswp.dispatch(this.isOpening ? 'openingAnimationStart' : 'closingAnimationStart'); // legacy event

      this.pswp.dispatch(/** @type {'initialZoomIn' | 'initialZoomOut'} */
      'initialZoom' + (this.isOpening ? 'In' : 'Out'));
      (_this$pswp$element2 = this.pswp.element) === null || _this$pswp$element2 === void 0 || _this$pswp$element2.classList.toggle('pswp--ui-visible', this.isOpening);
      if (this.isOpening) {
        if (this._placeholder) {
          // unhide the placeholder
          this._placeholder.style.opacity = '1';
        }
        this._animateToOpenState();
      } else if (this.isClosing) {
        this._animateToClosedState();
      }
      if (!this._useAnimation) {
        this._onAnimationComplete();
      }
    }
    /** @private */
  }, {
    key: "_onAnimationComplete",
    value: function _onAnimationComplete() {
      var pswp = this.pswp;
      this.isOpen = this.isOpening;
      this.isClosed = this.isClosing;
      this.isOpening = false;
      this.isClosing = false;
      pswp.dispatch(this.isOpen ? 'openingAnimationEnd' : 'closingAnimationEnd'); // legacy event

      pswp.dispatch(/** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
      'initialZoom' + (this.isOpen ? 'InEnd' : 'OutEnd'));
      if (this.isClosed) {
        pswp.destroy();
      } else if (this.isOpen) {
        var _pswp$currSlide;
        if (this._animateZoom && pswp.container) {
          pswp.container.style.overflow = 'visible';
          pswp.container.style.width = '100%';
        }
        (_pswp$currSlide = pswp.currSlide) === null || _pswp$currSlide === void 0 || _pswp$currSlide.applyCurrentZoomPan();
      }
    }
    /** @private */
  }, {
    key: "_animateToOpenState",
    value: function _animateToOpenState() {
      var pswp = this.pswp;
      if (this._animateZoom) {
        if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
          this._animateTo(this._cropContainer1, 'transform', 'translate3d(0,0,0)');
          this._animateTo(this._cropContainer2, 'transform', 'none');
        }
        if (pswp.currSlide) {
          pswp.currSlide.zoomAndPanToInitial();
          this._animateTo(pswp.currSlide.container, 'transform', pswp.currSlide.getCurrentTransform());
        }
      }
      if (this._animateBgOpacity && pswp.bg) {
        this._animateTo(pswp.bg, 'opacity', String(pswp.options.bgOpacity));
      }
      if (this._animateRootOpacity && pswp.element) {
        this._animateTo(pswp.element, 'opacity', '1');
      }
    }
    /** @private */
  }, {
    key: "_animateToClosedState",
    value: function _animateToClosedState() {
      var pswp = this.pswp;
      if (this._animateZoom) {
        this._setClosedStateZoomPan(true);
      } // do not animate opacity if it's already at 0

      if (this._animateBgOpacity && pswp.bgOpacity > 0.01 && pswp.bg) {
        this._animateTo(pswp.bg, 'opacity', '0');
      }
      if (this._animateRootOpacity && pswp.element) {
        this._animateTo(pswp.element, 'opacity', '0');
      }
    }
    /**
     * @private
     * @param {boolean} [animate]
     */
  }, {
    key: "_setClosedStateZoomPan",
    value: function _setClosedStateZoomPan(animate) {
      if (!this._thumbBounds) return;
      var pswp = this.pswp;
      var innerRect = this._thumbBounds.innerRect;
      var currSlide = pswp.currSlide,
        viewportSize = pswp.viewportSize;
      if (this._croppedZoom && innerRect && this._cropContainer1 && this._cropContainer2) {
        var containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
        var containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
        var containerTwoPanX = viewportSize.x - innerRect.w;
        var containerTwoPanY = viewportSize.y - innerRect.h;
        if (animate) {
          this._animateTo(this._cropContainer1, 'transform', toTransformString(containerOnePanX, containerOnePanY));
          this._animateTo(this._cropContainer2, 'transform', toTransformString(containerTwoPanX, containerTwoPanY));
        } else {
          setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
          setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
        }
      }
      if (currSlide) {
        equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
        currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
        if (animate) {
          this._animateTo(currSlide.container, 'transform', currSlide.getCurrentTransform());
        } else {
          currSlide.applyCurrentZoomPan();
        }
      }
    }
    /**
     * @private
     * @param {HTMLElement} target
     * @param {'transform' | 'opacity'} prop
     * @param {string} propValue
     */
  }, {
    key: "_animateTo",
    value: function _animateTo(target, prop, propValue) {
      var _this19 = this;
      if (!this._duration) {
        target.style[prop] = propValue;
        return;
      }
      var animations = this.pswp.animations;
      /** @type {AnimationProps} */

      var animProps = {
        duration: this._duration,
        easing: this.pswp.options.easing,
        onComplete: function onComplete() {
          if (!animations.activeAnimations.length) {
            _this19._onAnimationComplete();
          }
        },
        target: target
      };
      animProps[prop] = propValue;
      animations.startTransition(animProps);
    }
  }]);
}();
/**
 * @template T
 * @typedef {import('./types.js').Type<T>} Type<T>
 */
/** @typedef {import('./slide/slide.js').SlideData} SlideData */
/** @typedef {import('./slide/zoom-level.js').ZoomLevelOption} ZoomLevelOption */
/** @typedef {import('./ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('./main-scroll.js').ItemHolder} ItemHolder */
/** @typedef {import('./core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('./core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/** @typedef {import('./slide/get-thumb-bounds').Bounds} Bounds */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {import('./core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {import('./core/eventable.js').AugmentedEvent<T>} AugmentedEvent<T>
 */
/** @typedef {{ x: number; y: number; id?: string | number }} Point */
/** @typedef {{ top: number; bottom: number; left: number; right: number }} Padding */
/** @typedef {SlideData[]} DataSourceArray */
/** @typedef {{ gallery: HTMLElement; items?: HTMLElement[] }} DataSourceObject */
/** @typedef {DataSourceArray | DataSourceObject} DataSource */
/** @typedef {(point: Point, originalEvent: PointerEvent) => void} ActionFn */
/** @typedef {'close' | 'next' | 'zoom' | 'zoom-or-close' | 'toggle-controls'} ActionType */
/** @typedef {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} PhotoSwipeModule */
/** @typedef {PhotoSwipeModule | Promise<PhotoSwipeModule> | (() => Promise<PhotoSwipeModule>)} PhotoSwipeModuleOption */
/**
 * @typedef {string | NodeListOf<HTMLElement> | HTMLElement[] | HTMLElement} ElementProvider
 */
/** @typedef {Partial<PreparedPhotoSwipeOptions>} PhotoSwipeOptions https://photoswipe.com/options/ */
/**
 * @typedef {Object} PreparedPhotoSwipeOptions
 *
 * @prop {DataSource} [dataSource]
 * Pass an array of any items via dataSource option. Its length will determine amount of slides
 * (which may be modified further from numItems event).
 *
 * Each item should contain data that you need to generate slide
 * (for image slide it would be src (image URL), width (image width), height, srcset, alt).
 *
 * If these properties are not present in your initial array, you may "pre-parse" each item from itemData filter.
 *
 * @prop {number} bgOpacity
 * Background backdrop opacity, always define it via this option and not via CSS rgba color.
 *
 * @prop {number} spacing
 * Spacing between slides. Defined as ratio relative to the viewport width (0.1 = 10% of viewport).
 *
 * @prop {boolean} allowPanToNext
 * Allow swipe navigation to the next slide when the current slide is zoomed. Does not apply to mouse events.
 *
 * @prop {boolean} loop
 * If set to true you'll be able to swipe from the last to the first image.
 * Option is always false when there are less than 3 slides.
 *
 * @prop {boolean} [wheelToZoom]
 * By default PhotoSwipe zooms image with ctrl-wheel, if you enable this option - image will zoom just via wheel.
 *
 * @prop {boolean} pinchToClose
 * Pinch touch gesture to close the gallery.
 *
 * @prop {boolean} closeOnVerticalDrag
 * Vertical drag gesture to close the PhotoSwipe.
 *
 * @prop {Padding} [padding]
 * Slide area padding (in pixels).
 *
 * @prop {(viewportSize: Point, itemData: SlideData, index: number) => Padding} [paddingFn]
 * The option is checked frequently, so make sure it's performant. Overrides padding option if defined. For example:
 *
 * @prop {number | false} hideAnimationDuration
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} showAnimationDuration
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} zoomAnimationDuration
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {string} easing
 * String, 'cubic-bezier(.4,0,.22,1)'. CSS easing function for open/close/zoom transitions.
 *
 * @prop {boolean} escKey
 * Esc key to close.
 *
 * @prop {boolean} arrowKeys
 * Left/right arrow keys for navigation.
 *
 * @prop {boolean} trapFocus
 * Trap focus within PhotoSwipe element while it's open.
 *
 * @prop {boolean} returnFocus
 * Restore focus the last active element after PhotoSwipe is closed.
 *
 * @prop {boolean} clickToCloseNonZoomable
 * If image is not zoomable (for example, smaller than viewport) it can be closed by clicking on it.
 *
 * @prop {ActionType | ActionFn | false} imageClickAction
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} bgClickAction
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} tapAction
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} doubleTapAction
 * Refer to click and tap actions page.
 *
 * @prop {number} preloaderDelay
 * Delay before the loading indicator will be displayed,
 * if image is loaded during it - the indicator will not be displayed at all. Can be zero.
 *
 * @prop {string} indexIndicatorSep
 * Used for slide count indicator ("1 of 10 ").
 *
 * @prop {(options: PhotoSwipeOptions, pswp: PhotoSwipeBase) => Point} [getViewportSizeFn]
 * A function that should return slide viewport width and height, in format {x: 100, y: 100}.
 *
 * @prop {string} errorMsg
 * Message to display when the image wasn't able to load. If you need to display HTML - use contentErrorElement filter.
 *
 * @prop {[number, number]} preload
 * Lazy loading of nearby slides based on direction of movement. Should be an array with two integers,
 * first one - number of items to preload before the current image, second one - after the current image.
 * Two nearby images are always loaded.
 *
 * @prop {string} [mainClass]
 * Class that will be added to the root element of PhotoSwipe, may contain multiple separated by space.
 * Example on Styling page.
 *
 * @prop {HTMLElement} [appendToEl]
 * Element to which PhotoSwipe dialog will be appended when it opens.
 *
 * @prop {number} maxWidthToAnimate
 * Maximum width of image to animate, if initial rendered image width
 * is larger than this value - the opening/closing transition will be automatically disabled.
 *
 * @prop {string} [closeTitle]
 * Translating
 *
 * @prop {string} [zoomTitle]
 * Translating
 *
 * @prop {string} [arrowPrevTitle]
 * Translating
 *
 * @prop {string} [arrowNextTitle]
 * Translating
 *
 * @prop {'zoom' | 'fade' | 'none'} [showHideAnimationType]
 * To adjust opening or closing transition type use lightbox option `showHideAnimationType` (`String`).
 * It supports three values - `zoom` (default), `fade` (default if there is no thumbnail) and `none`.
 *
 * Animations are automatically disabled if user `(prefers-reduced-motion: reduce)`.
 *
 * @prop {number} index
 * Defines start slide index.
 *
 * @prop {(e: MouseEvent) => number} [getClickedIndexFn]
 *
 * @prop {boolean} [arrowPrev]
 * @prop {boolean} [arrowNext]
 * @prop {boolean} [zoom]
 * @prop {boolean} [close]
 * @prop {boolean} [counter]
 *
 * @prop {string} [arrowPrevSVG]
 * @prop {string} [arrowNextSVG]
 * @prop {string} [zoomSVG]
 * @prop {string} [closeSVG]
 * @prop {string} [counterSVG]
 *
 * @prop {string} [arrowPrevTitle]
 * @prop {string} [arrowNextTitle]
 * @prop {string} [zoomTitle]
 * @prop {string} [closeTitle]
 * @prop {string} [counterTitle]
 *
 * @prop {ZoomLevelOption} [initialZoomLevel]
 * @prop {ZoomLevelOption} [secondaryZoomLevel]
 * @prop {ZoomLevelOption} [maxZoomLevel]
 *
 * @prop {boolean} [mouseMovePan]
 * @prop {Point | null} [initialPointerPos]
 * @prop {boolean} [showHideOpacity]
 *
 * @prop {PhotoSwipeModuleOption} [pswpModule]
 * @prop {() => Promise<any>} [openPromise]
 * @prop {boolean} [preloadFirstSlide]
 * @prop {ElementProvider} [gallery]
 * @prop {string} [gallerySelector]
 * @prop {ElementProvider} [children]
 * @prop {string} [childSelector]
 * @prop {string | false} [thumbSelector]
 */
/** @type {PreparedPhotoSwipeOptions} */
var defaultOptions = {
  allowPanToNext: true,
  spacing: 0.1,
  loop: true,
  pinchToClose: true,
  closeOnVerticalDrag: true,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: true,
  arrowKeys: true,
  trapFocus: true,
  returnFocus: true,
  maxWidthToAnimate: 4000,
  clickToCloseNonZoomable: true,
  imageClickAction: 'zoom-or-close',
  bgClickAction: 'close',
  tapAction: 'toggle-controls',
  doubleTapAction: 'zoom',
  indexIndicatorSep: ' / ',
  preloaderDelay: 2000,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: 'The image cannot be loaded',
  preload: [1, 2],
  easing: 'cubic-bezier(.4,0,.22,1)'
};
/**
 * PhotoSwipe Core
 */
var PhotoSwipe = /*#__PURE__*/function (_PhotoSwipeBase) {
  /**
   * @param {PhotoSwipeOptions} [options]
   */
  function PhotoSwipe(options) {
    var _this20;
    _classCallCheck(this, PhotoSwipe);
    _this20 = _callSuper(this, PhotoSwipe);
    _this20.options = _this20._prepareOptions(options || {});
    /**
     * offset of viewport relative to document
     *
     * @type {Point}
     */

    _this20.offset = {
      x: 0,
      y: 0
    };
    /**
     * @type {Point}
     * @private
     */

    _this20._prevViewportSize = {
      x: 0,
      y: 0
    };
    /**
     * Size of scrollable PhotoSwipe viewport
     *
     * @type {Point}
     */

    _this20.viewportSize = {
      x: 0,
      y: 0
    };
    /**
     * background (backdrop) opacity
     */

    _this20.bgOpacity = 1;
    _this20.currIndex = 0;
    _this20.potentialIndex = 0;
    _this20.isOpen = false;
    _this20.isDestroying = false;
    _this20.hasMouse = false;
    /**
     * @private
     * @type {SlideData}
     */

    _this20._initialItemData = {};
    /** @type {Bounds | undefined} */

    _this20._initialThumbBounds = undefined;
    /** @type {HTMLDivElement | undefined} */

    _this20.topBar = undefined;
    /** @type {HTMLDivElement | undefined} */

    _this20.element = undefined;
    /** @type {HTMLDivElement | undefined} */

    _this20.template = undefined;
    /** @type {HTMLDivElement | undefined} */

    _this20.container = undefined;
    /** @type {HTMLElement | undefined} */

    _this20.scrollWrap = undefined;
    /** @type {Slide | undefined} */

    _this20.currSlide = undefined;
    _this20.events = new DOMEvents();
    _this20.animations = new Animations();
    _this20.mainScroll = new MainScroll(_this20);
    _this20.gestures = new Gestures(_this20);
    _this20.opener = new Opener(_this20);
    _this20.keyboard = new Keyboard(_this20);
    _this20.contentLoader = new ContentLoader(_this20);
    return _this20;
  }
  /** @returns {boolean} */
  _inherits(PhotoSwipe, _PhotoSwipeBase);
  return _createClass(PhotoSwipe, [{
    key: "init",
    value: function init() {
      var _this21 = this;
      if (this.isOpen || this.isDestroying) {
        return false;
      }
      this.isOpen = true;
      this.dispatch('init'); // legacy

      this.dispatch('beforeOpen');
      this._createMainStructure(); // add classes to the root element of PhotoSwipe

      var rootClasses = 'pswp--open';
      if (this.gestures.supportsTouch) {
        rootClasses += ' pswp--touch';
      }
      if (this.options.mainClass) {
        rootClasses += ' ' + this.options.mainClass;
      }
      if (this.element) {
        this.element.className += ' ' + rootClasses;
      }
      this.currIndex = this.options.index || 0;
      this.potentialIndex = this.currIndex;
      this.dispatch('firstUpdate'); // starting index can be modified here
      // initialize scroll wheel handler to block the scroll

      this.scrollWheel = new ScrollWheel(this); // sanitize index

      if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
        this.currIndex = 0;
      }
      if (!this.gestures.supportsTouch) {
        // enable mouse features if no touch support detected
        this.mouseDetected();
      } // causes forced synchronous layout

      this.updateSize();
      this.offset.y = window.pageYOffset;
      this._initialItemData = this.getItemData(this.currIndex);
      this.dispatch('gettingData', {
        index: this.currIndex,
        data: this._initialItemData,
        slide: undefined
      }); // *Layout* - calculate size and position of elements here

      this._initialThumbBounds = this.getThumbBounds();
      this.dispatch('initialLayout');
      this.on('openingAnimationEnd', function () {
        var itemHolders = _this21.mainScroll.itemHolders; // Add content to the previous and next slide

        if (itemHolders[0]) {
          itemHolders[0].el.style.display = 'block';
          _this21.setContent(itemHolders[0], _this21.currIndex - 1);
        }
        if (itemHolders[2]) {
          itemHolders[2].el.style.display = 'block';
          _this21.setContent(itemHolders[2], _this21.currIndex + 1);
        }
        _this21.appendHeavy();
        _this21.contentLoader.updateLazy();
        _this21.events.add(window, 'resize', _this21._handlePageResize.bind(_this21));
        _this21.events.add(window, 'scroll', _this21._updatePageScrollOffset.bind(_this21));
        _this21.dispatch('bindEvents');
      }); // set content for center slide (first time)

      if (this.mainScroll.itemHolders[1]) {
        this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
      }
      this.dispatch('change');
      this.opener.open();
      this.dispatch('afterInit');
      return true;
    }
    /**
     * Get looped slide index
     * (for example, -1 will return the last slide)
     *
     * @param {number} index
     * @returns {number}
     */
  }, {
    key: "getLoopedIndex",
    value: function getLoopedIndex(index) {
      var numSlides = this.getNumItems();
      if (this.options.loop) {
        if (index > numSlides - 1) {
          index -= numSlides;
        }
        if (index < 0) {
          index += numSlides;
        }
      }
      return clamp(index, 0, numSlides - 1);
    }
  }, {
    key: "appendHeavy",
    value: function appendHeavy() {
      this.mainScroll.itemHolders.forEach(function (itemHolder) {
        var _itemHolder$slide;
        (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.appendHeavy();
      });
    }
    /**
     * Change the slide
     * @param {number} index New index
     */
  }, {
    key: "goTo",
    value: function goTo(index) {
      this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
    }
    /**
     * Go to the next slide.
     */
  }, {
    key: "next",
    value: function next() {
      this.goTo(this.potentialIndex + 1);
    }
    /**
     * Go to the previous slide.
     */
  }, {
    key: "prev",
    value: function prev() {
      this.goTo(this.potentialIndex - 1);
    }
    /**
     * @see slide/slide.js zoomTo
     *
     * @param {Parameters<Slide['zoomTo']>} args
     */
  }, {
    key: "zoomTo",
    value: function zoomTo() {
      var _this$currSlide4;
      var _this$currSlide;
      (_this$currSlide = this.currSlide) === null || _this$currSlide === void 0 || (_this$currSlide4 = _this$currSlide).zoomTo.apply(_this$currSlide4, arguments);
    }
    /**
     * @see slide/slide.js toggleZoom
     */
  }, {
    key: "toggleZoom",
    value: function toggleZoom() {
      var _this$currSlide2;
      (_this$currSlide2 = this.currSlide) === null || _this$currSlide2 === void 0 || _this$currSlide2.toggleZoom();
    }
    /**
     * Close the gallery.
     * After closing transition ends - destroy it
     */
  }, {
    key: "close",
    value: function close() {
      if (!this.opener.isOpen || this.isDestroying) {
        return;
      }
      this.isDestroying = true;
      this.dispatch('close');
      this.events.removeAll();
      this.opener.close();
    }
    /**
     * Destroys the gallery:
     * - instantly closes the gallery
     * - unbinds events,
     * - cleans intervals and timeouts
     * - removes elements from DOM
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$element;
      if (!this.isDestroying) {
        this.options.showHideAnimationType = 'none';
        this.close();
        return;
      }
      this.dispatch('destroy');
      this._listeners = {};
      if (this.scrollWrap) {
        this.scrollWrap.ontouchmove = null;
        this.scrollWrap.ontouchend = null;
      }
      (_this$element = this.element) === null || _this$element === void 0 || _this$element.remove();
      this.mainScroll.itemHolders.forEach(function (itemHolder) {
        var _itemHolder$slide2;
        (_itemHolder$slide2 = itemHolder.slide) === null || _itemHolder$slide2 === void 0 || _itemHolder$slide2.destroy();
      });
      this.contentLoader.destroy();
      this.events.removeAll();
    }
    /**
     * Refresh/reload content of a slide by its index
     *
     * @param {number} slideIndex
     */
  }, {
    key: "refreshSlideContent",
    value: function refreshSlideContent(slideIndex) {
      var _this22 = this;
      this.contentLoader.removeByIndex(slideIndex);
      this.mainScroll.itemHolders.forEach(function (itemHolder, i) {
        var _this$currSlide$index, _this$currSlide3;
        var potentialHolderIndex = ((_this$currSlide$index = (_this$currSlide3 = _this22.currSlide) === null || _this$currSlide3 === void 0 ? void 0 : _this$currSlide3.index) !== null && _this$currSlide$index !== void 0 ? _this$currSlide$index : 0) - 1 + i;
        if (_this22.canLoop()) {
          potentialHolderIndex = _this22.getLoopedIndex(potentialHolderIndex);
        }
        if (potentialHolderIndex === slideIndex) {
          // set the new slide content
          _this22.setContent(itemHolder, slideIndex, true); // activate the new slide if it's current

          if (i === 1) {
            var _itemHolder$slide3;
            _this22.currSlide = itemHolder.slide;
            (_itemHolder$slide3 = itemHolder.slide) === null || _itemHolder$slide3 === void 0 || _itemHolder$slide3.setIsActive(true);
          }
        }
      });
      this.dispatch('change');
    }
    /**
     * Set slide content
     *
     * @param {ItemHolder} holder mainScroll.itemHolders array item
     * @param {number} index Slide index
     * @param {boolean} [force] If content should be set even if index wasn't changed
     */
  }, {
    key: "setContent",
    value: function setContent(holder, index, force) {
      if (this.canLoop()) {
        index = this.getLoopedIndex(index);
      }
      if (holder.slide) {
        if (holder.slide.index === index && !force) {
          // exit if holder already contains this slide
          // this could be common when just three slides are used
          return;
        } // destroy previous slide

        holder.slide.destroy();
        holder.slide = undefined;
      } // exit if no loop and index is out of bounds

      if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
        return;
      }
      var itemData = this.getItemData(index);
      holder.slide = new Slide(itemData, index, this); // set current slide

      if (index === this.currIndex) {
        this.currSlide = holder.slide;
      }
      holder.slide.append(holder.el);
    }
    /** @returns {Point} */
  }, {
    key: "getViewportCenterPoint",
    value: function getViewportCenterPoint() {
      return {
        x: this.viewportSize.x / 2,
        y: this.viewportSize.y / 2
      };
    }
    /**
     * Update size of all elements.
     * Executed on init and on page resize.
     *
     * @param {boolean} [force] Update size even if size of viewport was not changed.
     */
  }, {
    key: "updateSize",
    value: function updateSize(force) {
      // let item;
      // let itemIndex;
      if (this.isDestroying) {
        // exit if PhotoSwipe is closed or closing
        // (to avoid errors, as resize event might be delayed)
        return;
      } //const newWidth = this.scrollWrap.clientWidth;
      //const newHeight = this.scrollWrap.clientHeight;

      var newViewportSize = getViewportSize(this.options, this);
      if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
        // Exit if dimensions were not changed
        return;
      } //this._prevViewportSize.x = newWidth;
      //this._prevViewportSize.y = newHeight;

      equalizePoints(this._prevViewportSize, newViewportSize);
      this.dispatch('beforeResize');
      equalizePoints(this.viewportSize, this._prevViewportSize);
      this._updatePageScrollOffset();
      this.dispatch('viewportSize'); // Resize slides only after opener animation is finished
      // and don't re-calculate size on inital size update

      this.mainScroll.resize(this.opener.isOpen);
      if (!this.hasMouse && window.matchMedia('(any-hover: hover)').matches) {
        this.mouseDetected();
      }
      this.dispatch('resize');
    }
    /**
     * @param {number} opacity
     */
  }, {
    key: "applyBgOpacity",
    value: function applyBgOpacity(opacity) {
      this.bgOpacity = Math.max(opacity, 0);
      if (this.bg) {
        this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
      }
    }
    /**
     * Whether mouse is detected
     */
  }, {
    key: "mouseDetected",
    value: function mouseDetected() {
      if (!this.hasMouse) {
        var _this$element2;
        this.hasMouse = true;
        (_this$element2 = this.element) === null || _this$element2 === void 0 || _this$element2.classList.add('pswp--has_mouse');
      }
    }
    /**
     * Page resize event handler
     *
     * @private
     */
  }, {
    key: "_handlePageResize",
    value: function _handlePageResize() {
      var _this23 = this;
      this.updateSize(); // In iOS webview, if element size depends on document size,
      // it'll be measured incorrectly in resize event
      //
      // https://bugs.webkit.org/show_bug.cgi?id=170595
      // https://hackernoon.com/onresize-event-broken-in-mobile-safari-d8469027bf4d

      if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
        setTimeout(function () {
          _this23.updateSize();
        }, 500);
      }
    }
    /**
     * Page scroll offset is used
     * to get correct coordinates
     * relative to PhotoSwipe viewport.
     *
     * @private
     */
  }, {
    key: "_updatePageScrollOffset",
    value: function _updatePageScrollOffset() {
      this.setScrollOffset(0, window.pageYOffset);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "setScrollOffset",
    value: function setScrollOffset(x, y) {
      this.offset.x = x;
      this.offset.y = y;
      this.dispatch('updateScrollOffset');
    }
    /**
     * Create main HTML structure of PhotoSwipe,
     * and add it to DOM
     *
     * @private
     */
  }, {
    key: "_createMainStructure",
    value: function _createMainStructure() {
      // root DOM element of PhotoSwipe (.pswp)
      this.element = createElement('pswp', 'div');
      this.element.setAttribute('tabindex', '-1');
      this.element.setAttribute('role', 'dialog'); // template is legacy prop

      this.template = this.element; // Background is added as a separate element,
      // as animating opacity is faster than animating rgba()

      this.bg = createElement('pswp__bg', 'div', this.element);
      this.scrollWrap = createElement('pswp__scroll-wrap', 'section', this.element);
      this.container = createElement('pswp__container', 'div', this.scrollWrap); // aria pattern: carousel

      this.scrollWrap.setAttribute('aria-roledescription', 'carousel');
      this.container.setAttribute('aria-live', 'off');
      this.container.setAttribute('id', 'pswp__items');
      this.mainScroll.appendHolders();
      this.ui = new UI(this);
      this.ui.init(); // append to DOM

      (this.options.appendToEl || document.body).appendChild(this.element);
    }
    /**
     * Get position and dimensions of small thumbnail
     *   {x:,y:,w:}
     *
     * Height is optional (calculated based on the large image)
     *
     * @returns {Bounds | undefined}
     */
  }, {
    key: "getThumbBounds",
    value: function getThumbBounds() {
      return _getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
    }
    /**
     * If the PhotoSwipe can have continuous loop
     * @returns Boolean
     */
  }, {
    key: "canLoop",
    value: function canLoop() {
      return this.options.loop && this.getNumItems() > 2;
    }
    /**
     * @private
     * @param {PhotoSwipeOptions} options
     * @returns {PreparedPhotoSwipeOptions}
     */
  }, {
    key: "_prepareOptions",
    value: function _prepareOptions(options) {
      if (window.matchMedia('(prefers-reduced-motion), (update: slow)').matches) {
        options.showHideAnimationType = 'none';
        options.zoomAnimationDuration = 0;
      }
      /** @type {PreparedPhotoSwipeOptions} */

      return _objectSpread(_objectSpread({}, defaultOptions), options);
    }
  }]);
}(PhotoSwipeBase);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZlbmRvcl9waG90b3N3aXBlX2Rpc3RfcGhvdG9zd2lwZV9lc21fanMuMzMyZTNiY2NmNGVkM2IwZGI1NmIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxhQUFUQSxDQUF1QkMsU0FBdkIsRUFBa0NDLE9BQWxDLEVBQTJDQyxVQUEzQyxFQUF1RDtFQUM1RCxJQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0wsYUFBVCxDQUF1QkUsT0FBdkIsQ0FBWDtFQUNBLElBQUlELFNBQUosRUFBZTtJQUNiRyxFQUFFLENBQUNILFNBQUgsR0FBZUEsU0FBZjtFQUNEO0VBQ0QsSUFBSUUsVUFBSixFQUFnQjtJQUNkQSxVQUFVLENBQUNHLFdBQVgsQ0FBdUJGLEVBQXZCO0VBQ0Q7RUFDRCxPQUFPQSxFQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNHLGNBQVRBLENBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0M7RUFDckNELEVBQUUsQ0FBQ0UsQ0FBSCxHQUFPRCxFQUFFLENBQUNDLENBQVY7RUFDQUYsRUFBRSxDQUFDRyxDQUFILEdBQU9GLEVBQUUsQ0FBQ0UsQ0FBVjtFQUNBLElBQUlGLEVBQUUsQ0FBQ0csRUFBSCxLQUFVQyxTQUFkLEVBQXlCO0lBQ3ZCTCxFQUFFLENBQUNJLEVBQUgsR0FBUUgsRUFBRSxDQUFDRyxFQUFYO0VBQ0Q7RUFDRCxPQUFPSixFQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU00sVUFBVEEsQ0FBb0JDLENBQXBCLEVBQXVCO0VBQzVCQSxDQUFDLENBQUNMLENBQUYsR0FBTU0sSUFBSSxDQUFDQyxLQUFMLENBQVdGLENBQUMsQ0FBQ0wsQ0FBYixDQUFOO0VBQ0FLLENBQUMsQ0FBQ0osQ0FBRixHQUFNSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxDQUFD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QUNGO0VBRUQsT0FBTyttQixRQUFRLENBQUMxTyxZQUFULENBQXNCLGFBQXRCLEVBQXFDMk8sV0FBckMsRUFBa0QxaEIsUUFBbEQsRUFBNERDLEtBQTVELENBQVA7QUFDRDs7QUM5R0Q7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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d2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdXRpbC9kb20tZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdXRpbC92aWV3cG9ydC1zaXplLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvc2xpZGUvcGFuLWJvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3NsaWRlL3pvb20tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zbGlkZS9zbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL2dlc3R1cmVzL2RyYWctaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL2dlc3R1cmVzL3pvb20taGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL2dlc3R1cmVzL3RhcC1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvZ2VzdHVyZXMvZ2VzdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9tYWluLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdXRpbC9jc3MtYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdXRpbC9zcHJpbmctZWFzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy91dGlsL3NwcmluZy1hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy91dGlsL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zY3JvbGwtd2hlZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy91aS91aS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdWkvYnV0dG9uLWFycm93LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdWkvYnV0dG9uLWNsb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdWkvYnV0dG9uLXpvb20uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy91aS9sb2FkaW5nLWluZGljYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3VpL2NvdW50ZXItaW5kaWNhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvdWkvdWkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zbGlkZS9nZXQtdGh1bWItYm91bmRzLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvanMvY29yZS9ldmVudGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zbGlkZS9wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2pzL3NsaWRlL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9zbGlkZS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9jb3JlL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9vcGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9qcy9waG90b3N3aXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9IFRcclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxyXG4gKiBAcGFyYW0ge1R9IHRhZ05hbWVcclxuICogQHBhcmFtIHtOb2RlfSBbYXBwZW5kVG9FbF1cclxuICogQHJldHVybnMge0hUTUxFbGVtZW50VGFnTmFtZU1hcFtUXX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNsYXNzTmFtZSwgdGFnTmFtZSwgYXBwZW5kVG9FbCkge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgfVxyXG4gIGlmIChhcHBlbmRUb0VsKSB7XHJcbiAgICBhcHBlbmRUb0VsLmFwcGVuZENoaWxkKGVsKTtcclxuICB9XHJcbiAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQb2ludH0gcDFcclxuICogQHBhcmFtIHtQb2ludH0gcDJcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXplUG9pbnRzKHAxLCBwMikge1xyXG4gIHAxLnggPSBwMi54O1xyXG4gIHAxLnkgPSBwMi55O1xyXG4gIGlmIChwMi5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwMS5pZCA9IHAyLmlkO1xyXG4gIH1cclxuICByZXR1cm4gcDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRQb2ludChwKSB7XHJcbiAgcC54ID0gTWF0aC5yb3VuZChwLngpO1xyXG4gIHAueSA9IE1hdGgucm91bmQocC55KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlbihwMSwgcDIpIHtcclxuICBjb25zdCB4ID0gTWF0aC5hYnMocDEueCAtIHAyLngpO1xyXG4gIGNvbnN0IHkgPSBNYXRoLmFicyhwMS55IC0gcDIueSk7XHJcbiAgcmV0dXJuIE1hdGguc3FydCgoeCAqIHgpICsgKHkgKiB5KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIFggYW5kIFkgcG9zaXRpb25zIG9mIHBvaW50cyBhcmUgZXF1YWxcclxuICpcclxuICogQHBhcmFtIHtQb2ludH0gcDFcclxuICogQHBhcmFtIHtQb2ludH0gcDJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRzRXF1YWwocDEsIHAyKSB7XHJcbiAgcmV0dXJuIHAxLnggPT09IHAyLnggJiYgcDEueSA9PT0gcDIueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBmbG9hdCByZXN1bHQgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRyYW5zZm9ybSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IFt5XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlXVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVHJhbnNmb3JtU3RyaW5nKHgsIHksIHNjYWxlKSB7XHJcbiAgbGV0IHByb3BWYWx1ZSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsJHt5IHx8IDB9cHgsMClgO1xyXG5cclxuICBpZiAoc2NhbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcHJvcFZhbHVlICs9IGAgc2NhbGUzZCgke3NjYWxlfSwke3NjYWxlfSwxKWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcFZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgdHJhbnNmb3JtOnRyYW5zbGF0ZSh4LCB5KSBzY2FsZShzY2FsZSkgdG8gZWxlbWVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3ldXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGVdXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsLCB4LCB5LCBzY2FsZSkge1xyXG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtU3RyaW5nKHgsIHksIHNjYWxlKTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENTU0Vhc2luZyA9ICdjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSknO1xyXG5cclxuLyoqXHJcbiAqIEFwcGx5IENTUyB0cmFuc2l0aW9uIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wXSBDU1MgcHJvcGVydHkgdG8gYW5pbWF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uXSBpbiBtc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Vhc2VdIENTUyBlYXNpbmcgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uU3R5bGUoZWwsIHByb3AsIGR1cmF0aW9uLCBlYXNlKSB7XHJcbiAgLy8gaW5PdXQ6ICdjdWJpYy1iZXppZXIoLjQsIDAsIC4yMiwgMSknLCAvLyBmb3IgXCJ0b2dnbGUgc3RhdGVcIiB0cmFuc2l0aW9uc1xyXG4gIC8vIG91dDogJ2N1YmljLWJlemllcigwLCAwLCAuMjIsIDEpJywgLy8gZm9yIFwic2hvd1wiIHRyYW5zaXRpb25zXHJcbiAgLy8gaW46ICdjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpJy8vIGZvciBcImhpZGVcIiB0cmFuc2l0aW9uc1xyXG4gIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9wXHJcbiAgICA/IGAke3Byb3B9ICR7ZHVyYXRpb259bXMgJHtlYXNlIHx8IGRlZmF1bHRDU1NFYXNpbmd9YFxyXG4gICAgOiAnbm9uZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBseSB3aWR0aCBhbmQgaGVpZ2h0IENTUyBwcm9wZXJ0aWVzIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHdcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXaWR0aEhlaWdodChlbCwgdywgaCkge1xyXG4gIGVsLnN0eWxlLndpZHRoID0gKHR5cGVvZiB3ID09PSAnbnVtYmVyJykgPyBgJHt3fXB4YCA6IHc7XHJcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gKHR5cGVvZiBoID09PSAnbnVtYmVyJykgPyBgJHtofXB4YCA6IGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25TdHlsZShlbCkge1xyXG4gIHNldFRyYW5zaXRpb25TdHlsZShlbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZ1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgdm9pZD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSW1hZ2UoaW1nKSB7XHJcbiAgaWYgKCdkZWNvZGUnIGluIGltZykge1xyXG4gICAgcmV0dXJuIGltZy5kZWNvZGUoKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1nLmNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGltZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge0xPQURfU1RBVEVba2V5b2YgTE9BRF9TVEFURV19IExvYWRTdGF0ZSAqL1xyXG4vKiogQHR5cGUge3sgSURMRTogJ2lkbGUnOyBMT0FESU5HOiAnbG9hZGluZyc7IExPQURFRDogJ2xvYWRlZCc7IEVSUk9SOiAnZXJyb3InIH19ICovXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NUQVRFID0ge1xyXG4gIElETEU6ICdpZGxlJyxcclxuICBMT0FESU5HOiAnbG9hZGluZycsXHJcbiAgTE9BREVEOiAnbG9hZGVkJyxcclxuICBFUlJPUjogJ2Vycm9yJyxcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgY2xpY2sgb3Iga2V5ZG93biBldmVudCB3YXMgZGlzcGF0Y2hlZFxyXG4gKiB3aXRoIGEgc3BlY2lhbCBrZXkgb3IgdmlhIG1vdXNlIHdoZWVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge01vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50fSBlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwZWNpYWxLZXlVc2VkKGUpIHtcclxuICByZXR1cm4gKCdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPT09IDEpIHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGBnYWxsZXJ5YCBvciBgY2hpbGRyZW5gIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRWxlbWVudFByb3ZpZGVyfSBbb3B0aW9uXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2xlZ2FjeVNlbGVjdG9yXVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgRG9jdW1lbnR9IFtwYXJlbnRdXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50W11cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0Zyb21PcHRpb24ob3B0aW9uLCBsZWdhY3lTZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQpIHtcclxuICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXHJcbiAgbGV0IGVsZW1lbnRzID0gW107XHJcblxyXG4gIGlmIChvcHRpb24gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICBlbGVtZW50cyA9IFtvcHRpb25dO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9uIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShvcHRpb24pKSB7XHJcbiAgICBlbGVtZW50cyA9IEFycmF5LmZyb20ob3B0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdGlvbiA6IGxlZ2FjeVNlbGVjdG9yO1xyXG4gICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdmFyaWFibGUgaXMgUGhvdG9Td2lwZSBjbGFzc1xyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gZm5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQc3dwQ2xhc3MoZm4pIHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXHJcbiAgICAmJiBmbi5wcm90b3R5cGVcclxuICAgICYmIGZuLnByb3RvdHlwZS5nb1RvO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYnJvd3NlciBpcyBTYWZhcmlcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XHJcbiAgcmV0dXJuICEhKG5hdmlnYXRvci52ZW5kb3IgJiYgbmF2aWdhdG9yLnZlbmRvci5tYXRjaCgvYXBwbGUvaSkpO1xyXG59XHJcblxyXG4iLCIvLyBEZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0XHJcbmxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxudHJ5IHtcclxuICAvKiBAdHMtaWdub3JlICovXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgZ2V0OiAoKSA9PiB7XHJcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSkpO1xyXG59IGNhdGNoIChlKSB7fVxyXG4vKiBlc2xpbnQtZW5hYmxlICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUG9vbEl0ZW1cclxuICogQHByb3Age0hUTUxFbGVtZW50IHwgV2luZG93IHwgRG9jdW1lbnQgfCB1bmRlZmluZWQgfCBudWxsfSB0YXJnZXRcclxuICogQHByb3Age3N0cmluZ30gdHlwZVxyXG4gKiBAcHJvcCB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gbGlzdGVuZXJcclxuICogQHByb3Age2Jvb2xlYW59IFtwYXNzaXZlXVxyXG4gKi9cclxuXHJcbmNsYXNzIERPTUV2ZW50cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQb29sSXRlbVtdfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fcG9vbCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3RhcmdldCddfSB0YXJnZXRcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0eXBlJ119IHR5cGUgQ2FuIGJlIG11bHRpcGxlLCBzZXBhcmF0ZWQgYnkgc3BhY2UuXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsnbGlzdGVuZXInXX0gbGlzdGVuZXJcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydwYXNzaXZlJ119IFtwYXNzaXZlXVxyXG4gICAqL1xyXG4gIGFkZCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlKSB7XHJcbiAgICB0aGlzLl90b2dnbGVMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0YXJnZXQnXX0gdGFyZ2V0XHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsndHlwZSddfSB0eXBlXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsnbGlzdGVuZXInXX0gbGlzdGVuZXJcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydwYXNzaXZlJ119IFtwYXNzaXZlXVxyXG4gICAqL1xyXG4gIHJlbW92ZSh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlKSB7XHJcbiAgICB0aGlzLl90b2dnbGVMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGJvdW5kIGV2ZW50c1xyXG4gICAqL1xyXG4gIHJlbW92ZUFsbCgpIHtcclxuICAgIHRoaXMuX3Bvb2wuZm9yRWFjaCgocG9vbEl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5fdG9nZ2xlTGlzdGVuZXIoXHJcbiAgICAgICAgcG9vbEl0ZW0udGFyZ2V0LFxyXG4gICAgICAgIHBvb2xJdGVtLnR5cGUsXHJcbiAgICAgICAgcG9vbEl0ZW0ubGlzdGVuZXIsXHJcbiAgICAgICAgcG9vbEl0ZW0ucGFzc2l2ZSxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcG9vbCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBvciByZW1vdmVzIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3RhcmdldCddfSB0YXJnZXRcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0eXBlJ119IHR5cGVcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydsaXN0ZW5lciddfSBsaXN0ZW5lclxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3Bhc3NpdmUnXX0gW3Bhc3NpdmVdXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbdW5iaW5kXSBXaGV0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBQb29sXSBXaGV0aGVyIGV2ZW50cyBwb29sIHNob3VsZCBiZSBza2lwcGVkXHJcbiAgICovXHJcbiAgX3RvZ2dsZUxpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHBhc3NpdmUsIHVuYmluZCwgc2tpcFBvb2wpIHtcclxuICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRob2ROYW1lID0gdW5iaW5kID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2FkZEV2ZW50TGlzdGVuZXInO1xyXG4gICAgY29uc3QgdHlwZXMgPSB0eXBlLnNwbGl0KCcgJyk7XHJcbiAgICB0eXBlcy5mb3JFYWNoKChlVHlwZSkgPT4ge1xyXG4gICAgICBpZiAoZVR5cGUpIHtcclxuICAgICAgICAvLyBFdmVudHMgcG9vbCBpcyB1c2VkIHRvIGVhc2lseSB1bmJpbmQgYWxsIGV2ZW50cyB3aGVuIFBob3RvU3dpcGUgaXMgY2xvc2VkLFxyXG4gICAgICAgIC8vIHNvIGRldmVsb3BlciBkb2Vzbid0IG5lZWQgdG8gZG8gdGhpcyBtYW51YWxseVxyXG4gICAgICAgIGlmICghc2tpcFBvb2wpIHtcclxuICAgICAgICAgIGlmICh1bmJpbmQpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGhlIGV2ZW50cyBwb29sXHJcbiAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSB0aGlzLl9wb29sLmZpbHRlcigocG9vbEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gcG9vbEl0ZW0udHlwZSAhPT0gZVR5cGVcclxuICAgICAgICAgICAgICAgIHx8IHBvb2xJdGVtLmxpc3RlbmVyICE9PSBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgfHwgcG9vbEl0ZW0udGFyZ2V0ICE9PSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBldmVudHMgcG9vbFxyXG4gICAgICAgICAgICB0aGlzLl9wb29sLnB1c2goe1xyXG4gICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgICB0eXBlOiBlVHlwZSxcclxuICAgICAgICAgICAgICBsaXN0ZW5lcixcclxuICAgICAgICAgICAgICBwYXNzaXZlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbW9zdCBQaG90b1N3aXBlIGV2ZW50cyBjYWxsIHByZXZlbnREZWZhdWx0LFxyXG4gICAgICAgIC8vIGFuZCB3ZSBkbyBub3QgbmVlZCBicm93c2VyIHRvIHNjcm9sbCB0aGUgcGFnZVxyXG4gICAgICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogKHBhc3NpdmUgfHwgZmFsc2UpIH0gOiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGFyZ2V0W21ldGhvZE5hbWVdKFxyXG4gICAgICAgICAgZVR5cGUsXHJcbiAgICAgICAgICBsaXN0ZW5lcixcclxuICAgICAgICAgIGV2ZW50T3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE9NRXZlbnRzO1xyXG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBob3RvU3dpcGVPcHRpb25zfSBQaG90b1N3aXBlT3B0aW9ucyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9iYXNlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUJhc2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IHBzd3BcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBwc3dwKSB7XHJcbiAgaWYgKG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4pIHtcclxuICAgIGNvbnN0IG5ld1ZpZXdwb3J0U2l6ZSA9IG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4ob3B0aW9ucywgcHN3cCk7XHJcbiAgICBpZiAobmV3Vmlld3BvcnRTaXplKSB7XHJcbiAgICAgIHJldHVybiBuZXdWaWV3cG9ydFNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG5cclxuICAgIC8vIFRPRE86IGhlaWdodCBvbiBtb2JpbGUgaXMgdmVyeSBpbmNvc2lzdGVudCBkdWUgdG8gdG9vbGJhclxyXG4gICAgLy8gZmluZCBhIHdheSB0byBpbXByb3ZlIHRoaXNcclxuICAgIC8vXHJcbiAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gZG9lc24ndCBzZWVtIHRvIHdvcmsgd2VsbFxyXG4gICAgeTogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBwYWRkaW5nIG9wdGlvbi5cclxuICogU3VwcG9ydGVkIGZvcm1hdHM6XHJcbiAqXHJcbiAqIC8vIE9iamVjdFxyXG4gKiBwYWRkaW5nOiB7XHJcbiAqICB0b3A6IDAsXHJcbiAqICBib3R0b206IDAsXHJcbiAqICBsZWZ0OiAwLFxyXG4gKiAgcmlnaHQ6IDBcclxuICogfVxyXG4gKlxyXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgb2JqZWN0XHJcbiAqIHBhZGRpbmdGbjogKHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSA9PiB7XHJcbiAqICByZXR1cm4ge1xyXG4gKiAgICB0b3A6IDAsXHJcbiAqICAgIGJvdHRvbTogMCxcclxuICogICAgbGVmdDogMCxcclxuICogICAgcmlnaHQ6IDBcclxuICogIH07XHJcbiAqIH1cclxuICpcclxuICogLy8gTGVnYWN5IHZhcmlhbnRcclxuICogcGFkZGluZ0xlZnQ6IDAsXHJcbiAqIHBhZGRpbmdSaWdodDogMCxcclxuICogcGFkZGluZ1RvcDogMCxcclxuICogcGFkZGluZ0JvdHRvbTogMCxcclxuICpcclxuICogQHBhcmFtIHsnbGVmdCcgfCAndG9wJyB8ICdib3R0b20nIHwgJ3JpZ2h0J30gcHJvcFxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zIFBob3RvU3dpcGUgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1BvaW50fSB2aWV3cG9ydFNpemUgUGhvdG9Td2lwZSB2aWV3cG9ydCBzaXplLCBmb3IgZXhhbXBsZTogeyB4OjgwMCwgeTo2MDAgfVxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYWRkaW5nT3B0aW9uKHByb3AsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgbGV0IHBhZGRpbmdWYWx1ZSA9IDA7XHJcblxyXG4gIGlmIChvcHRpb25zLnBhZGRpbmdGbikge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nRm4odmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpW3Byb3BdO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XHJcbiAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zLnBhZGRpbmdbcHJvcF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGxlZ2FjeVByb3BOYW1lID0gJ3BhZGRpbmcnICsgcHJvcFswXS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGlmIChvcHRpb25zW2xlZ2FjeVByb3BOYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnNbbGVnYWN5UHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE51bWJlcihwYWRkaW5nVmFsdWUpIHx8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHZpZXdwb3J0U2l6ZVxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGFcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB2aWV3cG9ydFNpemUueFxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbignbGVmdCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigncmlnaHQnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCksXHJcbiAgICB5OiB2aWV3cG9ydFNpemUueVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigndG9wJywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdib3R0b20nLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vdXRpbC91dGlsLmpzJztcclxuaW1wb3J0IHsgcGFyc2VQYWRkaW5nT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC92aWV3cG9ydC1zaXplLmpzJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtSZWNvcmQ8QXhpcywgbnVtYmVyPn0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHsneCcgfCAneSd9IEF4aXMgKi9cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIG1pbmltdW0sIG1heGltdW0gYW5kIGluaXRpYWwgKGNlbnRlcikgYm91bmRzIG9mIGEgc2xpZGVcclxuICovXHJcbmNsYXNzIFBhbkJvdW5kcyB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gc2xpZGVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihzbGlkZSkge1xyXG4gICAgdGhpcy5zbGlkZSA9IHNsaWRlO1xyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gMTtcclxuICAgIHRoaXMuY2VudGVyID0gLyoqIEB0eXBlIHtQb2ludH0gKi8geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLm1heCA9IC8qKiBAdHlwZSB7UG9pbnR9ICovIHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5taW4gPSAvKiogQHR5cGUge1BvaW50fSAqLyB7IHg6IDAsIHk6IDAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9nZXRJdGVtQm91bmRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3Vyclpvb21MZXZlbFxyXG4gICAqL1xyXG4gIHVwZGF0ZShjdXJyWm9vbUxldmVsKSB7XHJcbiAgICB0aGlzLmN1cnJab29tTGV2ZWwgPSBjdXJyWm9vbUxldmVsO1xyXG5cclxuICAgIGlmICghdGhpcy5zbGlkZS53aWR0aCkge1xyXG4gICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl91cGRhdGVBeGlzKCd4Jyk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUF4aXMoJ3knKTtcclxuICAgICAgdGhpcy5zbGlkZS5wc3dwLmRpc3BhdGNoKCdjYWxjQm91bmRzJywgeyBzbGlkZTogdGhpcy5zbGlkZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9jYWxjdWxhdGVJdGVtQm91bmRzRm9yQXhpc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBeGlzfSBheGlzXHJcbiAgICovXHJcbiAgX3VwZGF0ZUF4aXMoYXhpcykge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzLnNsaWRlO1xyXG4gICAgY29uc3QgZWxTaXplID0gdGhpcy5zbGlkZVtheGlzID09PSAneCcgPyAnd2lkdGgnIDogJ2hlaWdodCddICogdGhpcy5jdXJyWm9vbUxldmVsO1xyXG4gICAgY29uc3QgcGFkZGluZ1Byb3AgPSBheGlzID09PSAneCcgPyAnbGVmdCcgOiAndG9wJztcclxuICAgIGNvbnN0IHBhZGRpbmcgPSBwYXJzZVBhZGRpbmdPcHRpb24oXHJcbiAgICAgIHBhZGRpbmdQcm9wLFxyXG4gICAgICBwc3dwLm9wdGlvbnMsXHJcbiAgICAgIHBzd3Audmlld3BvcnRTaXplLFxyXG4gICAgICB0aGlzLnNsaWRlLmRhdGEsXHJcbiAgICAgIHRoaXMuc2xpZGUuaW5kZXhcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGFuQXJlYVNpemUgPSB0aGlzLnNsaWRlLnBhbkFyZWFTaXplW2F4aXNdO1xyXG5cclxuICAgIC8vIERlZmF1bHQgcG9zaXRpb24gb2YgZWxlbWVudC5cclxuICAgIC8vIEJ5IGRlZmF1bHQsIGl0IGlzIGNlbnRlciBvZiB2aWV3cG9ydDpcclxuICAgIHRoaXMuY2VudGVyW2F4aXNdID0gTWF0aC5yb3VuZCgocGFuQXJlYVNpemUgLSBlbFNpemUpIC8gMikgKyBwYWRkaW5nO1xyXG5cclxuICAgIC8vIG1heGltdW0gcGFuIHBvc2l0aW9uXHJcbiAgICB0aGlzLm1heFtheGlzXSA9IChlbFNpemUgPiBwYW5BcmVhU2l6ZSlcclxuICAgICAgPyBNYXRoLnJvdW5kKHBhbkFyZWFTaXplIC0gZWxTaXplKSArIHBhZGRpbmdcclxuICAgICAgOiB0aGlzLmNlbnRlcltheGlzXTtcclxuXHJcbiAgICAvLyBtaW5pbXVtIHBhbiBwb3NpdGlvblxyXG4gICAgdGhpcy5taW5bYXhpc10gPSAoZWxTaXplID4gcGFuQXJlYVNpemUpXHJcbiAgICAgID8gcGFkZGluZ1xyXG4gICAgICA6IHRoaXMuY2VudGVyW2F4aXNdO1xyXG4gIH1cclxuXHJcbiAgLy8gX2dldFplcm9Cb3VuZHNcclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuY2VudGVyLnggPSAwO1xyXG4gICAgdGhpcy5jZW50ZXIueSA9IDA7XHJcbiAgICB0aGlzLm1heC54ID0gMDtcclxuICAgIHRoaXMubWF4LnkgPSAwO1xyXG4gICAgdGhpcy5taW4ueCA9IDA7XHJcbiAgICB0aGlzLm1pbi55ID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgcGFuIHBvc2l0aW9uIGlmIGl0J3MgYmV5b25kIHRoZSBib3VuZHNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXhpc30gYXhpcyB4IG9yIHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFuT2Zmc2V0XHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBjb3JyZWN0UGFuKGF4aXMsIHBhbk9mZnNldCkgeyAvLyBjaGVja1BhbkJvdW5kc1xyXG4gICAgcmV0dXJuIGNsYW1wKHBhbk9mZnNldCwgdGhpcy5tYXhbYXhpc10sIHRoaXMubWluW2F4aXNdKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhbkJvdW5kcztcclxuIiwiY29uc3QgTUFYX0lNQUdFX1dJRFRIID0gNDAwMDtcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBob3RvU3dpcGVPcHRpb25zfSBQaG90b1N3aXBlT3B0aW9ucyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHsnZml0JyB8ICdmaWxsJyB8IG51bWJlciB8ICgoem9vbUxldmVsT2JqZWN0OiBab29tTGV2ZWwpID0+IG51bWJlcil9IFpvb21MZXZlbE9wdGlvbiAqL1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgem9vbSBsZXZlbHMgZm9yIHNwZWNpZmljIHNsaWRlLlxyXG4gKiBEZXBlbmRzIG9uIHZpZXdwb3J0IHNpemUgYW5kIGltYWdlIHNpemUuXHJcbiAqL1xyXG5jbGFzcyBab29tTGV2ZWwge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IG9wdGlvbnMgUGhvdG9Td2lwZSBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIFNsaWRlIGRhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IFtwc3dwXSBQaG90b1N3aXBlIGluc3RhbmNlLCBjYW4gYmUgdW5kZWZpbmVkIGlmIG5vdCBpbml0aWFsaXplZCB5ZXRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpdGVtRGF0YSwgaW5kZXgsIHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5pdGVtRGF0YSA9IGl0ZW1EYXRhO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgLyoqIEB0eXBlIHsgUG9pbnQgfCBudWxsIH0gKi9cclxuICAgIHRoaXMucGFuQXJlYVNpemUgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHsgUG9pbnQgfCBudWxsIH0gKi9cclxuICAgIHRoaXMuZWxlbWVudFNpemUgPSBudWxsO1xyXG4gICAgdGhpcy5maXQgPSAxO1xyXG4gICAgdGhpcy5maWxsID0gMTtcclxuICAgIHRoaXMudkZpbGwgPSAxO1xyXG4gICAgdGhpcy5pbml0aWFsID0gMTtcclxuICAgIHRoaXMuc2Vjb25kYXJ5ID0gMTtcclxuICAgIHRoaXMubWF4ID0gMTtcclxuICAgIHRoaXMubWluID0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSBpbml0aWFsLCBzZWNvbmRhcnkgYW5kIG1heGltdW0gem9vbSBsZXZlbCBmb3IgdGhlIHNwZWNpZmllZCBzbGlkZS5cclxuICAgKlxyXG4gICAqIEl0IHNob3VsZCBiZSBjYWxsZWQgd2hlbiBlaXRoZXIgaW1hZ2Ugb3Igdmlld3BvcnQgc2l6ZSBjaGFuZ2VzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heEhlaWdodFxyXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBhbkFyZWFTaXplXHJcbiAgICovXHJcbiAgdXBkYXRlKG1heFdpZHRoLCBtYXhIZWlnaHQsIHBhbkFyZWFTaXplKSB7XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgY29uc3QgZWxlbWVudFNpemUgPSB7IHg6IG1heFdpZHRoLCB5OiBtYXhIZWlnaHQgfTtcclxuICAgIHRoaXMuZWxlbWVudFNpemUgPSBlbGVtZW50U2l6ZTtcclxuICAgIHRoaXMucGFuQXJlYVNpemUgPSBwYW5BcmVhU2l6ZTtcclxuXHJcbiAgICBjb25zdCBoUmF0aW8gPSBwYW5BcmVhU2l6ZS54IC8gZWxlbWVudFNpemUueDtcclxuICAgIGNvbnN0IHZSYXRpbyA9IHBhbkFyZWFTaXplLnkgLyBlbGVtZW50U2l6ZS55O1xyXG5cclxuICAgIHRoaXMuZml0ID0gTWF0aC5taW4oMSwgaFJhdGlvIDwgdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvKTtcclxuICAgIHRoaXMuZmlsbCA9IE1hdGgubWluKDEsIGhSYXRpbyA+IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbyk7XHJcblxyXG4gICAgLy8gem9vbS52RmlsbCBkZWZpbmVzIHpvb20gbGV2ZWwgb2YgdGhlIGltYWdlXHJcbiAgICAvLyB3aGVuIGl0IGhhcyAxMDAlIG9mIHZpZXdwb3J0IHZlcnRpY2FsIHNwYWNlIChoZWlnaHQpXHJcbiAgICB0aGlzLnZGaWxsID0gTWF0aC5taW4oMSwgdlJhdGlvKTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWwgPSB0aGlzLl9nZXRJbml0aWFsKCk7XHJcbiAgICB0aGlzLnNlY29uZGFyeSA9IHRoaXMuX2dldFNlY29uZGFyeSgpO1xyXG4gICAgdGhpcy5tYXggPSBNYXRoLm1heChcclxuICAgICAgdGhpcy5pbml0aWFsLFxyXG4gICAgICB0aGlzLnNlY29uZGFyeSxcclxuICAgICAgdGhpcy5fZ2V0TWF4KClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5taW4gPSBNYXRoLm1pbihcclxuICAgICAgdGhpcy5maXQsXHJcbiAgICAgIHRoaXMuaW5pdGlhbCxcclxuICAgICAgdGhpcy5zZWNvbmRhcnlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cCkge1xyXG4gICAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ3pvb21MZXZlbHNVcGRhdGUnLCB7IHpvb21MZXZlbHM6IHRoaXMsIHNsaWRlRGF0YTogdGhpcy5pdGVtRGF0YSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyB1c2VyLWRlZmluZWQgem9vbSBvcHRpb24uXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J2luaXRpYWwnIHwgJ3NlY29uZGFyeScgfCAnbWF4J30gb3B0aW9uUHJlZml4IFpvb20gbGV2ZWwgb3B0aW9uIHByZWZpeCAoaW5pdGlhbCwgc2Vjb25kYXJ5LCBtYXgpXHJcbiAgICogQHJldHVybnMgeyBudW1iZXIgfCB1bmRlZmluZWQgfVxyXG4gICAqL1xyXG4gIF9wYXJzZVpvb21MZXZlbE9wdGlvbihvcHRpb25QcmVmaXgpIHtcclxuICAgIGNvbnN0IG9wdGlvbk5hbWUgPSAvKiogQHR5cGUgeydpbml0aWFsWm9vbUxldmVsJyB8ICdzZWNvbmRhcnlab29tTGV2ZWwnIHwgJ21heFpvb21MZXZlbCd9ICovIChcclxuICAgICAgb3B0aW9uUHJlZml4ICsgJ1pvb21MZXZlbCdcclxuICAgICk7XHJcbiAgICBjb25zdCBvcHRpb25WYWx1ZSA9IHRoaXMub3B0aW9uc1tvcHRpb25OYW1lXTtcclxuXHJcbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25WYWx1ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uVmFsdWUgPT09ICdmaWxsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gJ2ZpdCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZml0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOdW1iZXIob3B0aW9uVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHpvb20gbGV2ZWwgdG8gd2hpY2ggaW1hZ2Ugd2lsbCBiZSB6b29tZWQgYWZ0ZXIgZG91YmxlLXRhcCBnZXN0dXJlLFxyXG4gICAqIG9yIHdoZW4gdXNlciBjbGlja3Mgb24gem9vbSBpY29uLFxyXG4gICAqIG9yIG1vdXNlLWNsaWNrIG9uIGltYWdlIGl0c2VsZi5cclxuICAgKiBJZiB5b3UgcmV0dXJuIDEgaW1hZ2Ugd2lsbCBiZSB6b29tZWQgdG8gaXRzIG9yaWdpbmFsIHNpemUuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0U2Vjb25kYXJ5KCkge1xyXG4gICAgbGV0IGN1cnJab29tTGV2ZWwgPSB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignc2Vjb25kYXJ5Jyk7XHJcblxyXG4gICAgaWYgKGN1cnJab29tTGV2ZWwpIHtcclxuICAgICAgcmV0dXJuIGN1cnJab29tTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gM3ggb2YgXCJmaXRcIiBzdGF0ZSwgYnV0IG5vdCBsYXJnZXIgdGhhbiBvcmlnaW5hbFxyXG4gICAgY3Vyclpvb21MZXZlbCA9IE1hdGgubWluKDEsIHRoaXMuZml0ICogMyk7XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudFNpemUgJiYgY3Vyclpvb21MZXZlbCAqIHRoaXMuZWxlbWVudFNpemUueCA+IE1BWF9JTUFHRV9XSURUSCkge1xyXG4gICAgICBjdXJyWm9vbUxldmVsID0gTUFYX0lNQUdFX1dJRFRIIC8gdGhpcy5lbGVtZW50U2l6ZS54O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyWm9vbUxldmVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGluaXRpYWwgaW1hZ2Ugem9vbSBsZXZlbC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRJbml0aWFsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdpbml0aWFsJykgfHwgdGhpcy5maXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXhpbXVtIHpvb20gbGV2ZWwgd2hlbiB1c2VyIHpvb21zXHJcbiAgICogdmlhIHpvb20vcGluY2ggZ2VzdHVyZSxcclxuICAgKiB2aWEgY21kL2N0cmwtd2hlZWwgb3IgdmlhIHRyYWNrcGFkLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldE1heCgpIHtcclxuICAgIC8vIG1heCB6b29tIGxldmVsIGlzIHg0IGZyb20gXCJmaXQgc3RhdGVcIixcclxuICAgIC8vIHVzZWQgZm9yIHpvb20gZ2VzdHVyZSBhbmQgY3RybC90cmFja3BhZCB6b29tXHJcbiAgICByZXR1cm4gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ21heCcpIHx8IE1hdGgubWF4KDEsIHRoaXMuZml0ICogNCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBab29tTGV2ZWw7XHJcbiIsIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtfU2xpZGVEYXRhICYgUmVjb3JkPHN0cmluZywgYW55Pn0gU2xpZGVEYXRhXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IF9TbGlkZURhdGFcclxuICogQHByb3Age0hUTUxFbGVtZW50fSBbZWxlbWVudF0gdGh1bWJuYWlsIGVsZW1lbnRcclxuICogQHByb3Age3N0cmluZ30gW3NyY10gaW1hZ2UgVVJMXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtzcmNzZXRdIGltYWdlIHNyY3NldFxyXG4gKiBAcHJvcCB7bnVtYmVyfSBbd10gaW1hZ2Ugd2lkdGggKGRlcHJlY2F0ZWQpXHJcbiAqIEBwcm9wIHtudW1iZXJ9IFtoXSBpbWFnZSBoZWlnaHQgKGRlcHJlY2F0ZWQpXHJcbiAqIEBwcm9wIHtudW1iZXJ9IFt3aWR0aF0gaW1hZ2Ugd2lkdGhcclxuICogQHByb3Age251bWJlcn0gW2hlaWdodF0gaW1hZ2UgaGVpZ2h0XHJcbiAqIEBwcm9wIHtzdHJpbmd9IFttc3JjXSBwbGFjZWhvbGRlciBpbWFnZSBVUkwgdGhhdCdzIGRpc3BsYXllZCBiZWZvcmUgbGFyZ2UgaW1hZ2UgaXMgbG9hZGVkXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthbHRdIGltYWdlIGFsdCB0ZXh0XHJcbiAqIEBwcm9wIHtib29sZWFufSBbdGh1bWJDcm9wcGVkXSB3aGV0aGVyIHRodW1ibmFpbCBpcyBjcm9wcGVkIGNsaWVudC1zaWRlIG9yIG5vdFxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbaHRtbF0gaHRtbCBjb250ZW50IG9mIGEgc2xpZGVcclxuICogQHByb3AgeydpbWFnZScgfCAnaHRtbCcgfCBzdHJpbmd9IFt0eXBlXSBzbGlkZSB0eXBlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIHNldFRyYW5zZm9ybSxcclxuICBlcXVhbGl6ZVBvaW50cyxcclxuICByb3VuZFBvaW50LFxyXG4gIHRvVHJhbnNmb3JtU3RyaW5nLFxyXG4gIGNsYW1wLFxyXG59IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcblxyXG5pbXBvcnQgUGFuQm91bmRzIGZyb20gJy4vcGFuLWJvdW5kcy5qcyc7XHJcbmltcG9ydCBab29tTGV2ZWwgZnJvbSAnLi96b29tLWxldmVsLmpzJztcclxuaW1wb3J0IHsgZ2V0UGFuQXJlYVNpemUgfSBmcm9tICcuLi91dGlsL3ZpZXdwb3J0LXNpemUuanMnO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgYW5kIGFsbG93cyB0byBjb250cm9sIGEgc2luZ2xlIHNsaWRlXHJcbiAqL1xyXG5jbGFzcyBTbGlkZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGRhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhLCBpbmRleCwgcHN3cCkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gKGluZGV4ID09PSBwc3dwLmN1cnJJbmRleCk7XHJcbiAgICB0aGlzLmN1cnJlbnRSZXNvbHV0aW9uID0gMDtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5wYW4gPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICB0aGlzLmlzRmlyc3RTbGlkZSA9ICh0aGlzLmlzQWN0aXZlICYmICFwc3dwLm9wZW5lci5pc09wZW4pO1xyXG5cclxuICAgIHRoaXMuem9vbUxldmVscyA9IG5ldyBab29tTGV2ZWwocHN3cC5vcHRpb25zLCBkYXRhLCBpbmRleCwgcHN3cCk7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdnZXR0aW5nRGF0YScsIHtcclxuICAgICAgc2xpZGU6IHRoaXMsXHJcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgaW5kZXhcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMucHN3cC5jb250ZW50TG9hZGVyLmdldENvbnRlbnRCeVNsaWRlKHRoaXMpO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdwc3dwX196b29tLXdyYXAnLCAnZGl2Jyk7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi9cclxuICAgIHRoaXMuaG9sZGVyRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gMTtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuY29udGVudC53aWR0aDtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy5oZWF2eUFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmJvdW5kcyA9IG5ldyBQYW5Cb3VuZHModGhpcyk7XHJcblxyXG4gICAgdGhpcy5wcmV2RGlzcGxheWVkV2lkdGggPSAtMTtcclxuICAgIHRoaXMucHJldkRpc3BsYXllZEhlaWdodCA9IC0xO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVJbml0JywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgc2xpZGUgaXMgYWN0aXZlL2N1cnJlbnQvdmlzaWJsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0FjdGl2ZVxyXG4gICAqL1xyXG4gIHNldElzQWN0aXZlKGlzQWN0aXZlKSB7XHJcbiAgICBpZiAoaXNBY3RpdmUgJiYgIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgLy8gc2xpZGUganVzdCBiZWNhbWUgYWN0aXZlXHJcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH0gZWxzZSBpZiAoIWlzQWN0aXZlICYmIHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgLy8gc2xpZGUganVzdCBiZWNhbWUgbm9uLWFjdGl2ZVxyXG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgc2xpZGUgY29udGVudCB0byBET01cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhvbGRlckVsZW1lbnRcclxuICAgKi9cclxuICBhcHBlbmQoaG9sZGVyRWxlbWVudCkge1xyXG4gICAgdGhpcy5ob2xkZXJFbGVtZW50ID0gaG9sZGVyRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMCAwJztcclxuXHJcbiAgICAvLyBTbGlkZSBhcHBlbmRlZCB0byBET01cclxuICAgIGlmICghdGhpcy5kYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcclxuXHJcbiAgICB0aGlzLmxvYWQoKTtcclxuICAgIHRoaXMudXBkYXRlQ29udGVudFNpemUoKTtcclxuICAgIHRoaXMuYXBwZW5kSGVhdnkoKTtcclxuXHJcbiAgICB0aGlzLmhvbGRlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuem9vbUFuZFBhblRvSW5pdGlhbCgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnZmlyc3Rab29tUGFuJywgeyBzbGlkZTogdGhpcyB9KTtcclxuXHJcbiAgICB0aGlzLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ2FmdGVyU2V0Q29udGVudCcsIHsgc2xpZGU6IHRoaXMgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHRoaXMuY29udGVudC5sb2FkKGZhbHNlKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVMb2FkJywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCBcImhlYXZ5XCIgRE9NIGVsZW1lbnRzXHJcbiAgICpcclxuICAgKiBUaGlzIG1heSBkZXBlbmQgb24gYSB0eXBlIG9mIHNsaWRlLFxyXG4gICAqIGJ1dCBnZW5lcmFsbHkgdGhlc2UgYXJlIGxhcmdlIGltYWdlcy5cclxuICAgKi9cclxuICBhcHBlbmRIZWF2eSgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IGFwcGVuZEhlYXZ5TmVhcmJ5ID0gdHJ1ZTsgLy8gdG9kb1xyXG5cclxuICAgIC8vIEF2b2lkIGFwcGVuZGluZyBoZWF2eSBlbGVtZW50cyBkdXJpbmcgYW5pbWF0aW9uc1xyXG4gICAgaWYgKHRoaXMuaGVhdnlBcHBlbmRlZFxyXG4gICAgICAgIHx8ICFwc3dwLm9wZW5lci5pc09wZW5cclxuICAgICAgICB8fCBwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKClcclxuICAgICAgICB8fCAoIXRoaXMuaXNBY3RpdmUgJiYgIWFwcGVuZEhlYXZ5TmVhcmJ5KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5kaXNwYXRjaCgnYXBwZW5kSGVhdnknLCB7IHNsaWRlOiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGVhdnlBcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jb250ZW50LmFwcGVuZCgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnYXBwZW5kSGVhdnlDb250ZW50JywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXJlZCB3aGVuIHRoaXMgc2xpZGUgaXMgYWN0aXZlIChzZWxlY3RlZCkuXHJcbiAgICpcclxuICAgKiBJZiBpdCdzIHBhcnQgb2Ygb3BlbmluZy9jbG9zaW5nIHRyYW5zaXRpb24gLVxyXG4gICAqIGFjdGl2YXRlKCkgd2lsbCB0cmlnZ2VyIGFmdGVyIHRoZSB0cmFuc2l0aW9uIGlzIGVuZGVkLlxyXG4gICAqL1xyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmFwcGVuZEhlYXZ5KCk7XHJcbiAgICB0aGlzLmNvbnRlbnQuYWN0aXZhdGUoKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVBY3RpdmF0ZScsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGlzIHNsaWRlIGJlY29tZXMgaW5hY3RpdmUuXHJcbiAgICpcclxuICAgKiBTbGlkZSBjYW4gYmVjb21lIGluYWN0aXZlIG9ubHkgYWZ0ZXIgaXQgd2FzIGFjdGl2ZS5cclxuICAgKi9cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb250ZW50LmRlYWN0aXZhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyWm9vbUxldmVsICE9PSB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbCkge1xyXG4gICAgICAvLyBhbGxvdyBmaWx0ZXJpbmdcclxuICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXQgem9vbSBsZXZlbFxyXG4gICAgdGhpcy5jdXJyZW50UmVzb2x1dGlvbiA9IDA7XHJcbiAgICB0aGlzLnpvb21BbmRQYW5Ub0luaXRpYWwoKTtcclxuICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgdGhpcy51cGRhdGVDb250ZW50U2l6ZSgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVEZWFjdGl2YXRlJywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzbGlkZSBzaG91bGQgZGVzdHJveSBpdHNlbGYsIGl0IHdpbGwgbmV2ZXIgYmUgdXNlZCBhZ2Fpbi5cclxuICAgKiAodW5iaW5kIGFsbCBldmVudHMgYW5kIGRlc3Ryb3kgaW50ZXJuYWwgY29tcG9uZW50cylcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb250ZW50Lmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVEZXN0cm95JywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJab29tTGV2ZWwgPT09IHRoaXMuem9vbUxldmVscy5pbml0aWFsIHx8ICF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgIC8vIEtlZXAgaW5pdGlhbCB6b29tIGxldmVsIGlmIGl0IHdhcyBiZWZvcmUgdGhlIHJlc2l6ZSxcclxuICAgICAgLy8gYXMgd2VsbCBhcyB3aGVuIHRoaXMgc2xpZGUgaXMgbm90IGFjdGl2ZVxyXG5cclxuICAgICAgLy8gUmVzZXQgcG9zaXRpb24gYW5kIHNjYWxlIHRvIG9yaWdpbmFsIHN0YXRlXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRSZXNvbHV0aW9uID0gMDtcclxuICAgICAgdGhpcy56b29tQW5kUGFuVG9Jbml0aWFsKCk7XHJcbiAgICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnRTaXplKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyByZWFkanVzdCBwYW4gcG9zaXRpb24gaWYgaXQncyBiZXlvbmQgdGhlIGJvdW5kc1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcclxuICAgICAgdGhpcy5ib3VuZHMudXBkYXRlKHRoaXMuY3Vyclpvb21MZXZlbCk7XHJcbiAgICAgIHRoaXMucGFuVG8odGhpcy5wYW4ueCwgdGhpcy5wYW4ueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgc2l6ZSB0byBjdXJyZW50IHNsaWRlIGNvbnRlbnQsXHJcbiAgICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVzb2x1dGlvbiBhbmQgc2NhbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gaWYgc2l6ZSBzaG91bGQgYmUgdXBkYXRlZCBldmVuIGlmIGRpbWVuc2lvbnMgd2VyZW4ndCBjaGFuZ2VkXHJcbiAgICovXHJcbiAgdXBkYXRlQ29udGVudFNpemUoZm9yY2UpIHtcclxuICAgIC8vIFVzZSBpbml0aWFsIHpvb20gbGV2ZWxcclxuICAgIC8vIGlmIHJlc29sdXRpb24gaXMgbm90IGRlZmluZWQgKHVzZXIgZGlkbid0IHpvb20geWV0KVxyXG4gICAgY29uc3Qgc2NhbGVNdWx0aXBsaWVyID0gdGhpcy5jdXJyZW50UmVzb2x1dGlvbiB8fCB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuXHJcbiAgICBpZiAoIXNjYWxlTXVsdGlwbGllcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLnJvdW5kKHRoaXMud2lkdGggKiBzY2FsZU11bHRpcGxpZXIpIHx8IHRoaXMucHN3cC52aWV3cG9ydFNpemUueDtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgucm91bmQodGhpcy5oZWlnaHQgKiBzY2FsZU11bHRpcGxpZXIpIHx8IHRoaXMucHN3cC52aWV3cG9ydFNpemUueTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2l6ZUNoYW5nZWQod2lkdGgsIGhlaWdodCkgJiYgIWZvcmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudC5zZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNpemVDaGFuZ2VkKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh3aWR0aCAhPT0gdGhpcy5wcmV2RGlzcGxheWVkV2lkdGhcclxuICAgICAgICB8fCBoZWlnaHQgIT09IHRoaXMucHJldkRpc3BsYXllZEhlaWdodCkge1xyXG4gICAgICB0aGlzLnByZXZEaXNwbGF5ZWRXaWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLnByZXZEaXNwbGF5ZWRIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAcmV0dXJucyB7SFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cclxuICBnZXRQbGFjZWhvbGRlckVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50LnBsYWNlaG9sZGVyPy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWm9vbSBjdXJyZW50IHNsaWRlIGltYWdlIHRvLi4uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdFpvb21MZXZlbCBEZXN0aW5hdGlvbiB6b29tIGxldmVsLlxyXG4gICAqIEBwYXJhbSB7UG9pbnR9IFtjZW50ZXJQb2ludF1cclxuICAgKiBUcmFuc2Zvcm0gb3JpZ2luIGNlbnRlciBwb2ludCwgb3IgZmFsc2UgaWYgdmlld3BvcnQgY2VudGVyIHNob3VsZCBiZSB1c2VkLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyIHwgZmFsc2V9IFt0cmFuc2l0aW9uRHVyYXRpb25dIFRyYW5zaXRpb24gZHVyYXRpb24sIG1heSBiZSBzZXQgdG8gMC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVCb3VuZHNdIE1pbmltdW0gYW5kIG1heGltdW0gem9vbSBsZXZlbHMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIHpvb21UbyhkZXN0Wm9vbUxldmVsLCBjZW50ZXJQb2ludCwgdHJhbnNpdGlvbkR1cmF0aW9uLCBpZ25vcmVCb3VuZHMpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGlmICghdGhpcy5pc1pvb21hYmxlKClcclxuICAgICAgICB8fCBwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuZGlzcGF0Y2goJ2JlZm9yZVpvb21UbycsIHtcclxuICAgICAgZGVzdFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIHRyYW5zaXRpb25EdXJhdGlvblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3RvcCBhbGwgcGFuIGFuZCB6b29tIHRyYW5zaXRpb25zXHJcbiAgICBwc3dwLmFuaW1hdGlvbnMuc3RvcEFsbFBhbigpO1xyXG5cclxuICAgIC8vIGlmICghY2VudGVyUG9pbnQpIHtcclxuICAgIC8vICAgY2VudGVyUG9pbnQgPSBwc3dwLmdldFZpZXdwb3J0Q2VudGVyUG9pbnQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBwcmV2Wm9vbUxldmVsID0gdGhpcy5jdXJyWm9vbUxldmVsO1xyXG5cclxuICAgIGlmICghaWdub3JlQm91bmRzKSB7XHJcbiAgICAgIGRlc3Rab29tTGV2ZWwgPSBjbGFtcChkZXN0Wm9vbUxldmVsLCB0aGlzLnpvb21MZXZlbHMubWluLCB0aGlzLnpvb21MZXZlbHMubWF4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAodHJhbnNpdGlvbkR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5wc3dwLm9wdGlvbnMuem9vbUFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMuc2V0Wm9vbUxldmVsKGRlc3Rab29tTGV2ZWwpO1xyXG4gICAgdGhpcy5wYW4ueCA9IHRoaXMuY2FsY3VsYXRlWm9vbVRvUGFuT2Zmc2V0KCd4JywgY2VudGVyUG9pbnQsIHByZXZab29tTGV2ZWwpO1xyXG4gICAgdGhpcy5wYW4ueSA9IHRoaXMuY2FsY3VsYXRlWm9vbVRvUGFuT2Zmc2V0KCd5JywgY2VudGVyUG9pbnQsIHByZXZab29tTGV2ZWwpO1xyXG4gICAgcm91bmRQb2ludCh0aGlzLnBhbik7XHJcblxyXG4gICAgY29uc3QgZmluaXNoVHJhbnNpdGlvbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fc2V0UmVzb2x1dGlvbihkZXN0Wm9vbUxldmVsKTtcclxuICAgICAgdGhpcy5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdHJhbnNpdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgIGZpbmlzaFRyYW5zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBzd3AuYW5pbWF0aW9ucy5zdGFydFRyYW5zaXRpb24oe1xyXG4gICAgICAgIGlzUGFuOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6ICd6b29tVG8nLFxyXG4gICAgICAgIHRhcmdldDogdGhpcy5jb250YWluZXIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmdldEN1cnJlbnRUcmFuc2Zvcm0oKSxcclxuICAgICAgICBvbkNvbXBsZXRlOiBmaW5pc2hUcmFuc2l0aW9uLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb24sXHJcbiAgICAgICAgZWFzaW5nOiBwc3dwLm9wdGlvbnMuZWFzaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludH0gW2NlbnRlclBvaW50XVxyXG4gICAqL1xyXG4gIHRvZ2dsZVpvb20oY2VudGVyUG9pbnQpIHtcclxuICAgIHRoaXMuem9vbVRvKFxyXG4gICAgICB0aGlzLmN1cnJab29tTGV2ZWwgPT09IHRoaXMuem9vbUxldmVscy5pbml0aWFsXHJcbiAgICAgICAgPyB0aGlzLnpvb21MZXZlbHMuc2Vjb25kYXJ5IDogdGhpcy56b29tTGV2ZWxzLmluaXRpYWwsXHJcbiAgICAgIGNlbnRlclBvaW50LFxyXG4gICAgICB0aGlzLnBzd3Aub3B0aW9ucy56b29tQW5pbWF0aW9uRHVyYXRpb25cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHpvb20gbGV2ZWwgcHJvcGVydHkgYW5kIHJlY2FsY3VsYXRlcyBuZXcgcGFuIGJvdW5kcyxcclxuICAgKiB1bmxpa2Ugem9vbVRvIGl0IGRvZXMgbm90IGFwcGx5IHRyYW5zZm9ybSAodXNlIGFwcGx5Q3VycmVudFpvb21QYW4pXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3Vyclpvb21MZXZlbFxyXG4gICAqL1xyXG4gIHNldFpvb21MZXZlbChjdXJyWm9vbUxldmVsKSB7XHJcbiAgICB0aGlzLmN1cnJab29tTGV2ZWwgPSBjdXJyWm9vbUxldmVsO1xyXG4gICAgdGhpcy5ib3VuZHMudXBkYXRlKHRoaXMuY3Vyclpvb21MZXZlbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgcGFuIHBvc2l0aW9uIGFmdGVyIHpvb20gYXQgYSBnaXZlbiBgcG9pbnRgLlxyXG4gICAqXHJcbiAgICogQWx3YXlzIGNhbGwgc2V0Wm9vbUxldmVsKG5ld1pvb21MZXZlbCkgYmVmb3JlaGFuZCB0byByZWNhbGN1bGF0ZVxyXG4gICAqIHBhbiBib3VuZHMgYWNjb3JkaW5nIHRvIHRoZSBuZXcgem9vbSBsZXZlbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtQb2ludH0gW3BvaW50XVxyXG4gICAqIHBvaW50IGJhc2VkIG9uIHdoaWNoIHpvb20gaXMgcGVyZm9ybWVkLCB1c3VhbGx5IHJlZmVycyB0byB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbixcclxuICAgKiBpZiBmYWxzZSAtIHZpZXdwb3J0IGNlbnRlciB3aWxsIGJlIHVzZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwcmV2Wm9vbUxldmVsXSBab29tIGxldmVsIGJlZm9yZSBuZXcgem9vbSB3YXMgYXBwbGllZC5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGNhbGN1bGF0ZVpvb21Ub1Bhbk9mZnNldChheGlzLCBwb2ludCwgcHJldlpvb21MZXZlbCkge1xyXG4gICAgY29uc3QgdG90YWxQYW5EaXN0YW5jZSA9IHRoaXMuYm91bmRzLm1heFtheGlzXSAtIHRoaXMuYm91bmRzLm1pbltheGlzXTtcclxuICAgIGlmICh0b3RhbFBhbkRpc3RhbmNlID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJvdW5kcy5jZW50ZXJbYXhpc107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb2ludCkge1xyXG4gICAgICBwb2ludCA9IHRoaXMucHN3cC5nZXRWaWV3cG9ydENlbnRlclBvaW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwcmV2Wm9vbUxldmVsKSB7XHJcbiAgICAgIHByZXZab29tTGV2ZWwgPSB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5jdXJyWm9vbUxldmVsIC8gcHJldlpvb21MZXZlbDtcclxuICAgIHJldHVybiB0aGlzLmJvdW5kcy5jb3JyZWN0UGFuKFxyXG4gICAgICBheGlzLFxyXG4gICAgICAodGhpcy5wYW5bYXhpc10gLSBwb2ludFtheGlzXSkgKiB6b29tRmFjdG9yICsgcG9pbnRbYXhpc11cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBseSBwYW4gYW5kIGtlZXAgaXQgd2l0aGluIGJvdW5kcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYW5YXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhbllcclxuICAgKi9cclxuICBwYW5UbyhwYW5YLCBwYW5ZKSB7XHJcbiAgICB0aGlzLnBhbi54ID0gdGhpcy5ib3VuZHMuY29ycmVjdFBhbigneCcsIHBhblgpO1xyXG4gICAgdGhpcy5wYW4ueSA9IHRoaXMuYm91bmRzLmNvcnJlY3RQYW4oJ3knLCBwYW5ZKTtcclxuICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHNsaWRlIGluIHRoZSBjdXJyZW50IHN0YXRlIGNhbiBiZSBwYW5uZWQgYnkgdGhlIHVzZXJcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1Bhbm5hYmxlKCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy53aWR0aCkgJiYgKHRoaXMuY3Vyclpvb21MZXZlbCA+IHRoaXMuem9vbUxldmVscy5maXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHNsaWRlIGNhbiBiZSB6b29tZWRcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1pvb21hYmxlKCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy53aWR0aCkgJiYgdGhpcy5jb250ZW50LmlzWm9vbWFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRyYW5zZm9ybSBhbmQgc2NhbGUgYmFzZWQgb25cclxuICAgKiB0aGUgY3VycmVudCBwYW4gcG9zaXRpb24gKHRoaXMucGFuKSBhbmQgem9vbSBsZXZlbCAodGhpcy5jdXJyWm9vbUxldmVsKVxyXG4gICAqL1xyXG4gIGFwcGx5Q3VycmVudFpvb21QYW4oKSB7XHJcbiAgICB0aGlzLl9hcHBseVpvb21UcmFuc2Zvcm0odGhpcy5wYW4ueCwgdGhpcy5wYW4ueSwgdGhpcy5jdXJyWm9vbUxldmVsKTtcclxuICAgIGlmICh0aGlzID09PSB0aGlzLnBzd3AuY3VyclNsaWRlKSB7XHJcbiAgICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnem9vbVBhblVwZGF0ZScsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB6b29tQW5kUGFuVG9Jbml0aWFsKCkge1xyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gdGhpcy56b29tTGV2ZWxzLmluaXRpYWw7XHJcblxyXG4gICAgLy8gcGFuIGFjY29yZGluZyB0byB0aGUgem9vbSBsZXZlbFxyXG4gICAgdGhpcy5ib3VuZHMudXBkYXRlKHRoaXMuY3Vyclpvb21MZXZlbCk7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnBhbiwgdGhpcy5ib3VuZHMuY2VudGVyKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnaW5pdGlhbFpvb21QYW4nLCB7IHNsaWRlOiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRyYW5zbGF0ZSBhbmQgc2NhbGUgYmFzZWQgb24gY3VycmVudCByZXNvbHV0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpvb21cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9hcHBseVpvb21UcmFuc2Zvcm0oeCwgeSwgem9vbSkge1xyXG4gICAgem9vbSAvPSB0aGlzLmN1cnJlbnRSZXNvbHV0aW9uIHx8IHRoaXMuem9vbUxldmVscy5pbml0aWFsO1xyXG4gICAgc2V0VHJhbnNmb3JtKHRoaXMuY29udGFpbmVyLCB4LCB5LCB6b29tKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVNpemUoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcblxyXG4gICAgZXF1YWxpemVQb2ludHMoXHJcbiAgICAgIHRoaXMucGFuQXJlYVNpemUsXHJcbiAgICAgIGdldFBhbkFyZWFTaXplKHBzd3Aub3B0aW9ucywgcHN3cC52aWV3cG9ydFNpemUsIHRoaXMuZGF0YSwgdGhpcy5pbmRleClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy56b29tTGV2ZWxzLnVwZGF0ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5wYW5BcmVhU2l6ZSk7XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgnY2FsY1NsaWRlU2l6ZScsIHtcclxuICAgICAgc2xpZGU6IHRoaXNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXHJcbiAgZ2V0Q3VycmVudFRyYW5zZm9ybSgpIHtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5jdXJyWm9vbUxldmVsIC8gKHRoaXMuY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy56b29tTGV2ZWxzLmluaXRpYWwpO1xyXG4gICAgcmV0dXJuIHRvVHJhbnNmb3JtU3RyaW5nKHRoaXMucGFuLngsIHRoaXMucGFuLnksIHNjYWxlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCByZXNvbHV0aW9uIGFuZCByZS1yZW5kZXIgdGhlIGltYWdlLlxyXG4gICAqXHJcbiAgICogRm9yIGV4YW1wbGUsIGlmIHRoZSByZWFsIGltYWdlIHNpemUgaXMgMjAwMHgxNTAwLFxyXG4gICAqIGFuZCByZXNvbHV0aW9uIGlzIDAuNSAtIGl0IHdpbGwgYmUgcmVuZGVyZWQgYXMgMTAwMHg3NTAuXHJcbiAgICpcclxuICAgKiBJbWFnZSB3aXRoIHpvb20gbGV2ZWwgMiBhbmQgcmVzb2x1dGlvbiAwLjUgaXNcclxuICAgKiB0aGUgc2FtZSBhcyBpbWFnZSB3aXRoIHpvb20gbGV2ZWwgMSBhbmQgcmVzb2x1dGlvbiAxLlxyXG4gICAqXHJcbiAgICogVXNlZCB0byBvcHRpbWl6ZSBhbmltYXRpb25zIGFuZCBtYWtlXHJcbiAgICogc3VyZSB0aGF0IGJyb3dzZXIgcmVuZGVycyBpbWFnZSBpbiB0aGUgaGlnaGVzdCBxdWFsaXR5LlxyXG4gICAqIEFsc28gdXNlZCBieSByZXNwb25zaXZlIGltYWdlcyB0byBsb2FkIHRoZSBjb3JyZWN0IG9uZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdSZXNvbHV0aW9uXHJcbiAgICovXHJcbiAgX3NldFJlc29sdXRpb24obmV3UmVzb2x1dGlvbikge1xyXG4gICAgaWYgKG5ld1Jlc29sdXRpb24gPT09IHRoaXMuY3VycmVudFJlc29sdXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFJlc29sdXRpb24gPSBuZXdSZXNvbHV0aW9uO1xyXG4gICAgdGhpcy51cGRhdGVDb250ZW50U2l6ZSgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgncmVzb2x1dGlvbkNoYW5nZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlO1xyXG4iLCJpbXBvcnQge1xyXG4gIGVxdWFsaXplUG9pbnRzLCByb3VuZFBvaW50LCBjbGFtcFxyXG59IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9nZXN0dXJlcy5qcycpLmRlZmF1bHR9IEdlc3R1cmVzICovXHJcblxyXG5jb25zdCBQQU5fRU5EX0ZSSUNUSU9OID0gMC4zNTtcclxuY29uc3QgVkVSVElDQUxfRFJBR19GUklDVElPTiA9IDAuNjtcclxuXHJcbi8vIDEgY29ycmVzcG9uZHMgdG8gdGhlIHRoaXJkIG9mIHZpZXdwb3J0IGhlaWdodFxyXG5jb25zdCBNSU5fUkFUSU9fVE9fQ0xPU0UgPSAwLjQ7XHJcblxyXG4vLyBNaW5pbXVtIHNwZWVkIHJlcXVpcmVkIHRvIG5hdmlnYXRlXHJcbi8vIHRvIG5leHQgb3IgcHJldmlvdXMgc2xpZGVcclxuY29uc3QgTUlOX05FWFRfU0xJREVfU1BFRUQgPSAwLjU7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IGluaXRpYWxWZWxvY2l0eVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVjZWxlcmF0aW9uUmF0ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gcHJvamVjdChpbml0aWFsVmVsb2NpdHksIGRlY2VsZXJhdGlvblJhdGUpIHtcclxuICByZXR1cm4gaW5pdGlhbFZlbG9jaXR5ICogZGVjZWxlcmF0aW9uUmF0ZSAvICgxIC0gZGVjZWxlcmF0aW9uUmF0ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIHNpbmdsZSBwb2ludGVyIGRyYWdnaW5nXHJcbiAqL1xyXG5jbGFzcyBEcmFnSGFuZGxlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtHZXN0dXJlc30gZ2VzdHVyZXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnZXN0dXJlcykge1xyXG4gICAgdGhpcy5nZXN0dXJlcyA9IGdlc3R1cmVzO1xyXG4gICAgdGhpcy5wc3dwID0gZ2VzdHVyZXMucHN3cDtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnN0YXJ0UGFuID0geyB4OiAwLCB5OiAwIH07XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGlmICh0aGlzLnBzd3AuY3VyclNsaWRlKSB7XHJcbiAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuc3RhcnRQYW4sIHRoaXMucHN3cC5jdXJyU2xpZGUucGFuKTtcclxuICAgIH1cclxuICAgIHRoaXMucHN3cC5hbmltYXRpb25zLnN0b3BBbGwoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHsgcDEsIHByZXZQMSwgZHJhZ0F4aXMgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gdGhpcy5wc3dwO1xyXG5cclxuICAgIGlmIChkcmFnQXhpcyA9PT0gJ3knXHJcbiAgICAgICAgJiYgdGhpcy5wc3dwLm9wdGlvbnMuY2xvc2VPblZlcnRpY2FsRHJhZ1xyXG4gICAgICAgICYmIChjdXJyU2xpZGUgJiYgY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgPD0gY3VyclNsaWRlLnpvb21MZXZlbHMuZml0KVxyXG4gICAgICAgICYmICF0aGlzLmdlc3R1cmVzLmlzTXVsdGl0b3VjaCkge1xyXG4gICAgICAvLyBIYW5kbGUgdmVydGljYWwgZHJhZyB0byBjbG9zZVxyXG4gICAgICBjb25zdCBwYW5ZID0gY3VyclNsaWRlLnBhbi55ICsgKHAxLnkgLSBwcmV2UDEueSk7XHJcbiAgICAgIGlmICghdGhpcy5wc3dwLmRpc3BhdGNoKCd2ZXJ0aWNhbERyYWcnLCB7IHBhblkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbigneScsIHBhblksIFZFUlRJQ0FMX0RSQUdfRlJJQ1RJT04pO1xyXG4gICAgICAgIGNvbnN0IGJnT3BhY2l0eSA9IDEgLSBNYXRoLmFicyh0aGlzLl9nZXRWZXJ0aWNhbERyYWdSYXRpbyhjdXJyU2xpZGUucGFuLnkpKTtcclxuICAgICAgICB0aGlzLnBzd3AuYXBwbHlCZ09wYWNpdHkoYmdPcGFjaXR5KTtcclxuICAgICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtYWluU2Nyb2xsQ2hhbmdlZCA9IHRoaXMuX3Bhbk9yTW92ZU1haW5TY3JvbGwoJ3gnKTtcclxuICAgICAgaWYgKCFtYWluU2Nyb2xsQ2hhbmdlZCkge1xyXG4gICAgICAgIHRoaXMuX3Bhbk9yTW92ZU1haW5TY3JvbGwoJ3knKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJTbGlkZSkge1xyXG4gICAgICAgICAgcm91bmRQb2ludChjdXJyU2xpZGUucGFuKTtcclxuICAgICAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmQoKSB7XHJcbiAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSB0aGlzLmdlc3R1cmVzO1xyXG4gICAgY29uc3QgeyBtYWluU2Nyb2xsLCBjdXJyU2xpZGUgfSA9IHRoaXMucHN3cDtcclxuICAgIGxldCBpbmRleERpZmYgPSAwO1xyXG5cclxuICAgIHRoaXMucHN3cC5hbmltYXRpb25zLnN0b3BBbGwoKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgbWFpbiBzY3JvbGwgaWYgaXQncyBzaGlmdGVkXHJcbiAgICBpZiAobWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSkge1xyXG4gICAgICAvLyBQb3NpdGlvbiBvZiB0aGUgbWFpbiBzY3JvbGwgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XHJcbiAgICAgIGNvbnN0IG1haW5TY3JvbGxTaGlmdERpZmYgPSBtYWluU2Nyb2xsLnggLSBtYWluU2Nyb2xsLmdldEN1cnJTbGlkZVgoKTtcclxuXHJcbiAgICAgIC8vIFJhdGlvIGJldHdlZW4gMCBhbmQgMTpcclxuICAgICAgLy8gMCAtIHNsaWRlIGlzIG5vdCB2aXNpYmxlIGF0IGFsbCxcclxuICAgICAgLy8gMC41IC0gaGFsZiBvZiB0aGUgc2xpZGUgaXMgdmlzaWJsZVxyXG4gICAgICAvLyAxIC0gc2xpZGUgaXMgZnVsbHkgdmlzaWJsZVxyXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8gPSAobWFpblNjcm9sbFNoaWZ0RGlmZiAvIHRoaXMucHN3cC52aWV3cG9ydFNpemUueCk7XHJcblxyXG4gICAgICAvLyBHbyBuZXh0IHNsaWRlLlxyXG4gICAgICAvL1xyXG4gICAgICAvLyAtIGlmIHZlbG9jaXR5IGFuZCBpdHMgZGlyZWN0aW9uIGlzIG1hdGNoZWQsXHJcbiAgICAgIC8vICAgYW5kIHdlIHNlZSBhdCBsZWFzdCB0aW55IHBhcnQgb2YgdGhlIG5leHQgc2xpZGVcclxuICAgICAgLy9cclxuICAgICAgLy8gLSBvciBpZiB3ZSBzZWUgbGVzcyB0aGFuIDUwJSBvZiB0aGUgY3VycmVudCBzbGlkZVxyXG4gICAgICAvLyAgIGFuZCB2ZWxvY2l0eSBpcyBjbG9zZSB0byAwXHJcbiAgICAgIC8vXHJcbiAgICAgIGlmICgodmVsb2NpdHkueCA8IC1NSU5fTkVYVF9TTElERV9TUEVFRCAmJiBjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8gPCAwKVxyXG4gICAgICAgICAgfHwgKHZlbG9jaXR5LnggPCAwLjEgJiYgY3VycmVudFNsaWRlVmlzaWJpbGl0eVJhdGlvIDwgLTAuNSkpIHtcclxuICAgICAgICAvLyBHbyB0byBuZXh0IHNsaWRlXHJcbiAgICAgICAgaW5kZXhEaWZmID0gMTtcclxuICAgICAgICB2ZWxvY2l0eS54ID0gTWF0aC5taW4odmVsb2NpdHkueCwgMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoKHZlbG9jaXR5LnggPiBNSU5fTkVYVF9TTElERV9TUEVFRCAmJiBjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8gPiAwKVxyXG4gICAgICAgICAgfHwgKHZlbG9jaXR5LnggPiAtMC4xICYmIGN1cnJlbnRTbGlkZVZpc2liaWxpdHlSYXRpbyA+IDAuNSkpIHtcclxuICAgICAgICAvLyBHbyB0byBwcmV2IHNsaWRlXHJcbiAgICAgICAgaW5kZXhEaWZmID0gLTE7XHJcbiAgICAgICAgdmVsb2NpdHkueCA9IE1hdGgubWF4KHZlbG9jaXR5LngsIDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYWluU2Nyb2xsLm1vdmVJbmRleEJ5KGluZGV4RGlmZiwgdHJ1ZSwgdmVsb2NpdHkueCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzdG9yZSB6b29tIGxldmVsXHJcbiAgICBpZiAoKGN1cnJTbGlkZSAmJiBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbCA+IGN1cnJTbGlkZS56b29tTGV2ZWxzLm1heClcclxuICAgICAgICB8fCB0aGlzLmdlc3R1cmVzLmlzTXVsdGl0b3VjaCkge1xyXG4gICAgICB0aGlzLmdlc3R1cmVzLnpvb21MZXZlbHMuY29ycmVjdFpvb21QYW4odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB3ZSBydW4gdHdvIGFuaW1hdGlvbnMgaW5zdGVhZCBvZiBvbmUsXHJcbiAgICAgIC8vIGFzIGVhY2ggYXhpcyBoYXMgb3duIHBhbiBib3VuZGFyaWVzIGFuZCB0aHVzIGRpZmZlcmVudCBzcHJpbmcgZnVuY3Rpb25cclxuICAgICAgLy8gKGNvcnJlY3Rab29tUGFuIGRvZXMgbm90IGhhdmUgdGhpcyBmdW5jdGlvbmFsaXR5LFxyXG4gICAgICAvLyAgaXQgYW5pbWF0ZXMgYWxsIHByb3BlcnRpZXMgd2l0aCBzaW5nbGUgdGltaW5nIGZ1bmN0aW9uKVxyXG4gICAgICB0aGlzLl9maW5pc2hQYW5HZXN0dXJlRm9yQXhpcygneCcpO1xyXG4gICAgICB0aGlzLl9maW5pc2hQYW5HZXN0dXJlRm9yQXhpcygneScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geyd4JyB8ICd5J30gYXhpc1xyXG4gICAqL1xyXG4gIF9maW5pc2hQYW5HZXN0dXJlRm9yQXhpcyhheGlzKSB7XHJcbiAgICBjb25zdCB7IHZlbG9jaXR5IH0gPSB0aGlzLmdlc3R1cmVzO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBwYW4sIGJvdW5kcyB9ID0gY3VyclNsaWRlO1xyXG4gICAgY29uc3QgcGFuUG9zID0gcGFuW2F4aXNdO1xyXG4gICAgY29uc3QgcmVzdG9yZUJnT3BhY2l0eSA9ICh0aGlzLnBzd3AuYmdPcGFjaXR5IDwgMSAmJiBheGlzID09PSAneScpO1xyXG5cclxuICAgIC8vIDAuOTk1IG1lYW5zIC0gc2Nyb2xsIHZpZXcgbG9zZXMgMC41JSBvZiBpdHMgdmVsb2NpdHkgcGVyIG1pbGxpc2Vjb25kXHJcbiAgICAvLyBJbmNyZWFzaW5nIHRoaXMgbnVtYmVyIHdpbGwgcmVkdWNlIHRyYXZlbCBkaXN0YW5jZVxyXG4gICAgY29uc3QgZGVjZWxlcmF0aW9uUmF0ZSA9IDAuOTk1OyAvLyAwLjk5XHJcblxyXG4gICAgLy8gUGFuIHBvc2l0aW9uIGlmIHRoZXJlIGlzIG5vIGJvdW5kc1xyXG4gICAgY29uc3QgcHJvamVjdGVkUG9zaXRpb24gPSBwYW5Qb3MgKyBwcm9qZWN0KHZlbG9jaXR5W2F4aXNdLCBkZWNlbGVyYXRpb25SYXRlKTtcclxuXHJcbiAgICBpZiAocmVzdG9yZUJnT3BhY2l0eSkge1xyXG4gICAgICBjb25zdCB2RHJhZ1JhdGlvID0gdGhpcy5fZ2V0VmVydGljYWxEcmFnUmF0aW8ocGFuUG9zKTtcclxuICAgICAgY29uc3QgcHJvamVjdGVkVkRyYWdSYXRpbyA9IHRoaXMuX2dldFZlcnRpY2FsRHJhZ1JhdGlvKHByb2plY3RlZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgIC8vIElmIHdlIGFyZSBhYm92ZSBhbmQgbW92aW5nIHVwd2FyZHMsXHJcbiAgICAgIC8vIG9yIGlmIHdlIGFyZSBiZWxvdyBhbmQgbW92aW5nIGRvd253YXJkc1xyXG4gICAgICBpZiAoKHZEcmFnUmF0aW8gPCAwICYmIHByb2plY3RlZFZEcmFnUmF0aW8gPCAtTUlOX1JBVElPX1RPX0NMT1NFKVxyXG4gICAgICAgICAgfHwgKHZEcmFnUmF0aW8gPiAwICYmIHByb2plY3RlZFZEcmFnUmF0aW8gPiBNSU5fUkFUSU9fVE9fQ0xPU0UpKSB7XHJcbiAgICAgICAgdGhpcy5wc3dwLmNsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFuIHBvc2l0aW9uIHdpdGggY29ycmVjdGVkIGJvdW5kc1xyXG4gICAgY29uc3QgY29ycmVjdGVkUGFuUG9zaXRpb24gPSBib3VuZHMuY29ycmVjdFBhbihheGlzLCBwcm9qZWN0ZWRQb3NpdGlvbik7XHJcblxyXG4gICAgLy8gRXhpdCBpZiBwYW4gcG9zaXRpb24gc2hvdWxkIG5vdCBiZSBjaGFuZ2VkXHJcbiAgICAvLyBvciBpZiBzcGVlZCBpdCB0b28gbG93XHJcbiAgICBpZiAocGFuUG9zID09PSBjb3JyZWN0ZWRQYW5Qb3NpdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnNob290IGlmIHRoZSBmaW5hbCBwb3NpdGlvbiBpcyBvdXQgb2YgcGFuIGJvdW5kc1xyXG4gICAgY29uc3QgZGFtcGluZ1JhdGlvID0gKGNvcnJlY3RlZFBhblBvc2l0aW9uID09PSBwcm9qZWN0ZWRQb3NpdGlvbikgPyAxIDogMC44MjtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmdPcGFjaXR5ID0gdGhpcy5wc3dwLmJnT3BhY2l0eTtcclxuICAgIGNvbnN0IHRvdGFsUGFuRGlzdCA9IGNvcnJlY3RlZFBhblBvc2l0aW9uIC0gcGFuUG9zO1xyXG5cclxuICAgIHRoaXMucHN3cC5hbmltYXRpb25zLnN0YXJ0U3ByaW5nKHtcclxuICAgICAgbmFtZTogJ3Bhbkdlc3R1cmUnICsgYXhpcyxcclxuICAgICAgaXNQYW46IHRydWUsXHJcbiAgICAgIHN0YXJ0OiBwYW5Qb3MsXHJcbiAgICAgIGVuZDogY29ycmVjdGVkUGFuUG9zaXRpb24sXHJcbiAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVtheGlzXSxcclxuICAgICAgZGFtcGluZ1JhdGlvLFxyXG4gICAgICBvblVwZGF0ZTogKHBvcykgPT4ge1xyXG4gICAgICAgIC8vIEFuaW1hdGUgb3BhY2l0eSBvZiBiYWNrZ3JvdW5kIHJlbGF0aXZlIHRvIFkgcGFuIHBvc2l0aW9uIG9mIGFuIGltYWdlXHJcbiAgICAgICAgaWYgKHJlc3RvcmVCZ09wYWNpdHkgJiYgdGhpcy5wc3dwLmJnT3BhY2l0eSA8IDEpIHtcclxuICAgICAgICAgIC8vIDAgLSBzdGFydCBvZiBhbmltYXRpb24sIDEgLSBlbmQgb2YgYW5pbWF0aW9uXHJcbiAgICAgICAgICBjb25zdCBhbmltYXRpb25Qcm9ncmVzc1JhdGlvID0gMSAtIChjb3JyZWN0ZWRQYW5Qb3NpdGlvbiAtIHBvcykgLyB0b3RhbFBhbkRpc3Q7XHJcblxyXG4gICAgICAgICAgLy8gV2UgY2xhbXAgb3BhY2l0eSB0byBrZWVwIGl0IGJldHdlZW4gMCBhbmQgMS5cclxuICAgICAgICAgIC8vIEFzIHByb2dyZXNzIHJhdGlvIGNhbiBiZSBsYXJnZXIgdGhhbiAxIGR1ZSB0byBvdmVyc2hvb3QsXHJcbiAgICAgICAgICAvLyBhbmQgd2UgZG8gbm90IHdhbnQgdG8gYm91bmNlIG9wYWNpdHkuXHJcbiAgICAgICAgICB0aGlzLnBzd3AuYXBwbHlCZ09wYWNpdHkoY2xhbXAoXHJcbiAgICAgICAgICAgIGluaXRpYWxCZ09wYWNpdHkgKyAoMSAtIGluaXRpYWxCZ09wYWNpdHkpICogYW5pbWF0aW9uUHJvZ3Jlc3NSYXRpbyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYW5bYXhpc10gPSBNYXRoLmZsb29yKHBvcyk7XHJcbiAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCxcclxuICAgKiBvci9hbmQgdXBkYXRlIHBhbiBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBzbGlkZS5cclxuICAgKlxyXG4gICAqIFNob3VsZCByZXR1cm4gdHJ1ZSBpZiBpdCBjaGFuZ2VzIChvciBjYW4gY2hhbmdlKSBtYWluIHNjcm9sbC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBfcGFuT3JNb3ZlTWFpblNjcm9sbChheGlzKSB7XHJcbiAgICBjb25zdCB7IHAxLCBkcmFnQXhpcywgcHJldlAxLCBpc011bHRpdG91Y2ggfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSwgbWFpblNjcm9sbCB9ID0gdGhpcy5wc3dwO1xyXG4gICAgY29uc3QgZGVsdGEgPSAocDFbYXhpc10gLSBwcmV2UDFbYXhpc10pO1xyXG4gICAgY29uc3QgbmV3TWFpblNjcm9sbFggPSBtYWluU2Nyb2xsLnggKyBkZWx0YTtcclxuXHJcbiAgICBpZiAoIWRlbHRhIHx8ICFjdXJyU2xpZGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsd2F5cyBtb3ZlIG1haW4gc2Nyb2xsIGlmIGltYWdlIGNhbiBub3QgYmUgcGFubmVkXHJcbiAgICBpZiAoYXhpcyA9PT0gJ3gnICYmICFjdXJyU2xpZGUuaXNQYW5uYWJsZSgpICYmICFpc011bHRpdG91Y2gpIHtcclxuICAgICAgbWFpblNjcm9sbC5tb3ZlVG8obmV3TWFpblNjcm9sbFgsIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gY2hhbmdlZCBtYWluIHNjcm9sbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYm91bmRzIH0gPSBjdXJyU2xpZGU7XHJcbiAgICBjb25zdCBuZXdQYW4gPSBjdXJyU2xpZGUucGFuW2F4aXNdICsgZGVsdGE7XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5vcHRpb25zLmFsbG93UGFuVG9OZXh0XHJcbiAgICAgICAgJiYgZHJhZ0F4aXMgPT09ICd4J1xyXG4gICAgICAgICYmIGF4aXMgPT09ICd4J1xyXG4gICAgICAgICYmICFpc011bHRpdG91Y2gpIHtcclxuICAgICAgY29uc3QgY3VyclNsaWRlTWFpblNjcm9sbFggPSBtYWluU2Nyb2xsLmdldEN1cnJTbGlkZVgoKTtcclxuXHJcbiAgICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcclxuICAgICAgY29uc3QgbWFpblNjcm9sbFNoaWZ0RGlmZiA9IG1haW5TY3JvbGwueCAtIGN1cnJTbGlkZU1haW5TY3JvbGxYO1xyXG5cclxuICAgICAgY29uc3QgaXNMZWZ0VG9SaWdodCA9IGRlbHRhID4gMDtcclxuICAgICAgY29uc3QgaXNSaWdodFRvTGVmdCA9ICFpc0xlZnRUb1JpZ2h0O1xyXG5cclxuICAgICAgaWYgKG5ld1BhbiA+IGJvdW5kcy5taW5bYXhpc10gJiYgaXNMZWZ0VG9SaWdodCkge1xyXG4gICAgICAgIC8vIFBhbm5pbmcgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBiZXlvbmQgdGhlIGxlZnQgZWRnZVxyXG5cclxuICAgICAgICAvLyBXZXRoZXIgdGhlIGltYWdlIHdhcyBhdCBtaW5pbXVtIHBhbiBwb3NpdGlvbiAob3IgbGVzcylcclxuICAgICAgICAvLyB3aGVuIHRoaXMgZHJhZyBnZXN0dXJlIHN0YXJ0ZWQuXHJcbiAgICAgICAgLy8gTWluaW11bSBwYW4gcG9zaXRpb24gcmVmZXJzIHRvIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGltYWdlLlxyXG4gICAgICAgIGNvbnN0IHdhc0F0TWluUGFuUG9zaXRpb24gPSAoYm91bmRzLm1pbltheGlzXSA8PSB0aGlzLnN0YXJ0UGFuW2F4aXNdKTtcclxuXHJcbiAgICAgICAgaWYgKHdhc0F0TWluUGFuUG9zaXRpb24pIHtcclxuICAgICAgICAgIG1haW5TY3JvbGwubW92ZVRvKG5ld01haW5TY3JvbGxYLCB0cnVlKTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9zZXRQYW5XaXRoRnJpY3Rpb24oYXhpcywgbmV3UGFuKTtcclxuICAgICAgICAgIC8vY3VyclNsaWRlLnBhbltheGlzXSA9IG5ld1BhbjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UGFuIDwgYm91bmRzLm1heFtheGlzXSAmJiBpc1JpZ2h0VG9MZWZ0KSB7XHJcbiAgICAgICAgLy8gUGFuaW5nIGZyb20gcmlnaHQgdG8gbGVmdCwgYmV5b25kIHRoZSByaWdodCBlZGdlXHJcblxyXG4gICAgICAgIC8vIE1heGltdW0gcGFuIHBvc2l0aW9uIHJlZmVycyB0byB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgaW1hZ2UuXHJcbiAgICAgICAgY29uc3Qgd2FzQXRNYXhQYW5Qb3NpdGlvbiA9ICh0aGlzLnN0YXJ0UGFuW2F4aXNdIDw9IGJvdW5kcy5tYXhbYXhpc10pO1xyXG5cclxuICAgICAgICBpZiAod2FzQXRNYXhQYW5Qb3NpdGlvbikge1xyXG4gICAgICAgICAgbWFpblNjcm9sbC5tb3ZlVG8obmV3TWFpblNjcm9sbFgsIHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgICAgLy9jdXJyU2xpZGUucGFuW2F4aXNdID0gbmV3UGFuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBtYWluIHNjcm9sbCBpcyBzaGlmdGVkXHJcbiAgICAgICAgaWYgKG1haW5TY3JvbGxTaGlmdERpZmYgIT09IDApIHtcclxuICAgICAgICAgIC8vIElmIG1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWQgcmlnaHRcclxuICAgICAgICAgIGlmIChtYWluU2Nyb2xsU2hpZnREaWZmID4gMCAvKiYmIGlzUmlnaHRUb0xlZnQqLykge1xyXG4gICAgICAgICAgICBtYWluU2Nyb2xsLm1vdmVUbyhNYXRoLm1heChuZXdNYWluU2Nyb2xsWCwgY3VyclNsaWRlTWFpblNjcm9sbFgpLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG1haW5TY3JvbGxTaGlmdERpZmYgPCAwIC8qJiYgaXNMZWZ0VG9SaWdodCovKSB7XHJcbiAgICAgICAgICAgIC8vIE1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWQgbGVmdCAoUG9zaXRpb24gaXMgbGVzcyB0aGFuIDAgY29tcGFyaW5nIHRvIHRoZSB2aWV3cG9ydCAwKVxyXG4gICAgICAgICAgICBtYWluU2Nyb2xsLm1vdmVUbyhNYXRoLm1pbihuZXdNYWluU2Nyb2xsWCwgY3VyclNsaWRlTWFpblNjcm9sbFgpLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFdlIGFyZSB3aXRoaW4gcGFuIGJvdW5kcywgc28ganVzdCBwYW5cclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGF4aXMgPT09ICd5Jykge1xyXG4gICAgICAgIC8vIERvIG5vdCBwYW4gdmVydGljYWxseSBpZiBtYWluIHNjcm9sbCBpcyBzaGlmdGVkIG9cclxuICAgICAgICBpZiAoIW1haW5TY3JvbGwuaXNTaGlmdGVkKCkgJiYgYm91bmRzLm1pbi55ICE9PSBib3VuZHMubWF4LnkpIHtcclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9zZXRQYW5XaXRoRnJpY3Rpb24oYXhpcywgbmV3UGFuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIElmIHdlIG1vdmUgYWJvdmUgLSB0aGUgcmF0aW8gaXMgbmVnYXRpdmVcclxuICAvLyBJZiB3ZSBtb3ZlIGJlbG93IHRoZSByYXRpbyBpcyBwb3NpdGl2ZVxyXG5cclxuICAvKipcclxuICAgKiBSZWxhdGlvbiBiZXR3ZWVuIHBhbiBZIHBvc2l0aW9uIGFuZCB0aGlyZCBvZiB2aWV3cG9ydCBoZWlnaHQuXHJcbiAgICpcclxuICAgKiBXaGVuIHdlIGFyZSBhdCBpbml0aWFsIHBvc2l0aW9uIChjZW50ZXIgYm91bmRzKSAtIHRoZSByYXRpbyBpcyAwLFxyXG4gICAqIGlmIHBvc2l0aW9uIGlzIHNoaWZ0ZWQgdXB3YXJkcyAtIHRoZSByYXRpbyBpcyBuZWdhdGl2ZSxcclxuICAgKiBpZiBwb3NpdGlvbiBpcyBzaGlmdGVkIGRvd253YXJkcyAtIHRoZSByYXRpbyBpcyBwb3NpdGl2ZS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhblkgVGhlIGN1cnJlbnQgcGFuIFkgcG9zaXRpb24uXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0VmVydGljYWxEcmFnUmF0aW8ocGFuWSkge1xyXG4gICAgcmV0dXJuIChwYW5ZIC0gKHRoaXMucHN3cC5jdXJyU2xpZGU/LmJvdW5kcy5jZW50ZXIueSA/PyAwKSkgLyAodGhpcy5wc3dwLnZpZXdwb3J0U2l6ZS55IC8gMyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgcGFuIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHNsaWRlLlxyXG4gICAqIEFwcGx5IGZyaWN0aW9uIGlmIHRoZSBwb3NpdGlvbiBpcyBiZXlvbmQgdGhlIHBhbiBib3VuZHMsXHJcbiAgICogb3IgaWYgY3VzdG9tIGZyaWN0aW9uIGlzIGRlZmluZWQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvdGVudGlhbFBhblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY3VzdG9tRnJpY3Rpb25dICgwLjEgLSAxKVxyXG4gICAqL1xyXG4gIF9zZXRQYW5XaXRoRnJpY3Rpb24oYXhpcywgcG90ZW50aWFsUGFuLCBjdXN0b21GcmljdGlvbikge1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBwYW4sIGJvdW5kcyB9ID0gY3VyclNsaWRlO1xyXG4gICAgY29uc3QgY29ycmVjdGVkUGFuID0gYm91bmRzLmNvcnJlY3RQYW4oYXhpcywgcG90ZW50aWFsUGFuKTtcclxuICAgIC8vIElmIHdlIGFyZSBvdXQgb2YgcGFuIGJvdW5kc1xyXG4gICAgaWYgKGNvcnJlY3RlZFBhbiAhPT0gcG90ZW50aWFsUGFuIHx8IGN1c3RvbUZyaWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5yb3VuZChwb3RlbnRpYWxQYW4gLSBwYW5bYXhpc10pO1xyXG4gICAgICBwYW5bYXhpc10gKz0gZGVsdGEgKiAoY3VzdG9tRnJpY3Rpb24gfHwgUEFOX0VORF9GUklDVElPTik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYW5bYXhpc10gPSBwb3RlbnRpYWxQYW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFnSGFuZGxlcjtcclxuIiwiaW1wb3J0IHtcclxuICBlcXVhbGl6ZVBvaW50cywgZ2V0RGlzdGFuY2VCZXR3ZWVuLCBjbGFtcCwgcG9pbnRzRXF1YWxcclxufSBmcm9tICcuLi91dGlsL3V0aWwuanMnO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZ2VzdHVyZXMuanMnKS5kZWZhdWx0fSBHZXN0dXJlcyAqL1xyXG5cclxuY29uc3QgVVBQRVJfWk9PTV9GUklDVElPTiA9IDAuMDU7XHJcbmNvbnN0IExPV0VSX1pPT01fRlJJQ1RJT04gPSAwLjE1O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHZXQgY2VudGVyIHBvaW50IGJldHdlZW4gdHdvIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFpvb21Qb2ludHNDZW50ZXIocCwgcDEsIHAyKSB7XHJcbiAgcC54ID0gKHAxLnggKyBwMi54KSAvIDI7XHJcbiAgcC55ID0gKHAxLnkgKyBwMi55KSAvIDI7XHJcbiAgcmV0dXJuIHA7XHJcbn1cclxuXHJcbmNsYXNzIFpvb21IYW5kbGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dlc3R1cmVzfSBnZXN0dXJlc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGdlc3R1cmVzKSB7XHJcbiAgICB0aGlzLmdlc3R1cmVzID0gZ2VzdHVyZXM7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3N0YXJ0UGFuID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3N0YXJ0Wm9vbVBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3pvb21Qb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl93YXNPdmVyRml0Wm9vbUxldmVsID0gZmFsc2U7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3N0YXJ0Wm9vbUxldmVsID0gMTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHRoaXMuZ2VzdHVyZXMucHN3cDtcclxuICAgIGlmIChjdXJyU2xpZGUpIHtcclxuICAgICAgdGhpcy5fc3RhcnRab29tTGV2ZWwgPSBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbDtcclxuICAgICAgZXF1YWxpemVQb2ludHModGhpcy5fc3RhcnRQYW4sIGN1cnJTbGlkZS5wYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2VzdHVyZXMucHN3cC5hbmltYXRpb25zLnN0b3BBbGxQYW4oKTtcclxuICAgIHRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWwgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZSgpIHtcclxuICAgIGNvbnN0IHsgcDEsIHN0YXJ0UDEsIHAyLCBzdGFydFAyLCBwc3dwIH0gPSB0aGlzLmdlc3R1cmVzO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHBzd3A7XHJcblxyXG4gICAgaWYgKCFjdXJyU2xpZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1pblpvb21MZXZlbCA9IGN1cnJTbGlkZS56b29tTGV2ZWxzLm1pbjtcclxuICAgIGNvbnN0IG1heFpvb21MZXZlbCA9IGN1cnJTbGlkZS56b29tTGV2ZWxzLm1heDtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZS5pc1pvb21hYmxlKCkgfHwgcHN3cC5tYWluU2Nyb2xsLmlzU2hpZnRlZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRab29tUG9pbnRzQ2VudGVyKHRoaXMuX3N0YXJ0Wm9vbVBvaW50LCBzdGFydFAxLCBzdGFydFAyKTtcclxuICAgIGdldFpvb21Qb2ludHNDZW50ZXIodGhpcy5fem9vbVBvaW50LCBwMSwgcDIpO1xyXG5cclxuICAgIGxldCBjdXJyWm9vbUxldmVsID0gKDEgLyBnZXREaXN0YW5jZUJldHdlZW4oc3RhcnRQMSwgc3RhcnRQMikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAqIGdldERpc3RhbmNlQmV0d2VlbihwMSwgcDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAqIHRoaXMuX3N0YXJ0Wm9vbUxldmVsO1xyXG5cclxuICAgIC8vIHNsaWdodGx5IG92ZXIgdGhlIHpvb20uZml0XHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCA+IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwgKyAoY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCAvIDE1KSkge1xyXG4gICAgICB0aGlzLl93YXNPdmVyRml0Wm9vbUxldmVsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCA8IG1pblpvb21MZXZlbCkge1xyXG4gICAgICBpZiAocHN3cC5vcHRpb25zLnBpbmNoVG9DbG9zZVxyXG4gICAgICAgICAgJiYgIXRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWxcclxuICAgICAgICAgICYmIHRoaXMuX3N0YXJ0Wm9vbUxldmVsIDw9IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwpIHtcclxuICAgICAgICAvLyBmYWRlIG91dCBiYWNrZ3JvdW5kIGlmIHpvb21pbmcgb3V0XHJcbiAgICAgICAgY29uc3QgYmdPcGFjaXR5ID0gMSAtICgobWluWm9vbUxldmVsIC0gY3Vyclpvb21MZXZlbCkgLyAobWluWm9vbUxldmVsIC8gMS4yKSk7XHJcbiAgICAgICAgaWYgKCFwc3dwLmRpc3BhdGNoKCdwaW5jaENsb3NlJywgeyBiZ09wYWNpdHkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICAgICAgcHN3cC5hcHBseUJnT3BhY2l0eShiZ09wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBcHBseSB0aGUgZnJpY3Rpb24gaWYgem9vbSBsZXZlbCBpcyBiZWxvdyB0aGUgbWluXHJcbiAgICAgICAgY3Vyclpvb21MZXZlbCA9IG1pblpvb21MZXZlbCAtIChtaW5ab29tTGV2ZWwgLSBjdXJyWm9vbUxldmVsKSAqIExPV0VSX1pPT01fRlJJQ1RJT047XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY3Vyclpvb21MZXZlbCA+IG1heFpvb21MZXZlbCkge1xyXG4gICAgICAvLyBBcHBseSB0aGUgZnJpY3Rpb24gaWYgem9vbSBsZXZlbCBpcyBhYm92ZSB0aGUgbWF4XHJcbiAgICAgIGN1cnJab29tTGV2ZWwgPSBtYXhab29tTGV2ZWwgKyAoY3Vyclpvb21MZXZlbCAtIG1heFpvb21MZXZlbCkgKiBVUFBFUl9aT09NX0ZSSUNUSU9OO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJTbGlkZS5wYW4ueCA9IHRoaXMuX2NhbGN1bGF0ZVBhbkZvclpvb21MZXZlbCgneCcsIGN1cnJab29tTGV2ZWwpO1xyXG4gICAgY3VyclNsaWRlLnBhbi55ID0gdGhpcy5fY2FsY3VsYXRlUGFuRm9yWm9vbUxldmVsKCd5JywgY3Vyclpvb21MZXZlbCk7XHJcblxyXG4gICAgY3VyclNsaWRlLnNldFpvb21MZXZlbChjdXJyWm9vbUxldmVsKTtcclxuICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgfVxyXG5cclxuICBlbmQoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gcHN3cDtcclxuICAgIGlmICgoIWN1cnJTbGlkZSB8fCBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbCA8IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwpXHJcbiAgICAgICAgJiYgIXRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWxcclxuICAgICAgICAmJiBwc3dwLm9wdGlvbnMucGluY2hUb0Nsb3NlKSB7XHJcbiAgICAgIHBzd3AuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29ycmVjdFpvb21QYW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3Vyclpvb21MZXZlbFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2NhbGN1bGF0ZVBhbkZvclpvb21MZXZlbChheGlzLCBjdXJyWm9vbUxldmVsKSB7XHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gY3Vyclpvb21MZXZlbCAvIHRoaXMuX3N0YXJ0Wm9vbUxldmVsO1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb21Qb2ludFtheGlzXVxyXG4gICAgICAgICAgICAtICgodGhpcy5fc3RhcnRab29tUG9pbnRbYXhpc10gLSB0aGlzLl9zdGFydFBhbltheGlzXSkgKiB6b29tRmFjdG9yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgY3Vyclpvb21MZXZlbCBhbmQgcGFuIGlmIHRoZXkgYXJlXHJcbiAgICogYmV5b25kIG1pbmltdW0gb3IgbWF4aW11bSB2YWx1ZXMuXHJcbiAgICogV2l0aCBhbmltYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVHZXN0dXJlXVxyXG4gICAqIFdldGhlciBnZXN0dXJlIGNvb3JkaW5hdGVzIHNob3VsZCBiZSBpZ25vcmVkIHdoZW4gY2FsY3VsYXRpbmcgZGVzdGluYXRpb24gcGFuIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIGNvcnJlY3Rab29tUGFuKGlnbm9yZUdlc3R1cmUpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSBwc3dwO1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlPy5pc1pvb21hYmxlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl96b29tUG9pbnQueCA9PT0gMCkge1xyXG4gICAgICBpZ25vcmVHZXN0dXJlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2Wm9vbUxldmVsID0gY3VyclNsaWRlLmN1cnJab29tTGV2ZWw7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICBsZXQgZGVzdGluYXRpb25ab29tTGV2ZWw7XHJcbiAgICBsZXQgY3Vyclpvb21MZXZlbE5lZWRzQ2hhbmdlID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAocHJldlpvb21MZXZlbCA8IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwpIHtcclxuICAgICAgZGVzdGluYXRpb25ab29tTGV2ZWwgPSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsO1xyXG4gICAgICAvLyB6b29tIHRvIG1pblxyXG4gICAgfSBlbHNlIGlmIChwcmV2Wm9vbUxldmVsID4gY3VyclNsaWRlLnpvb21MZXZlbHMubWF4KSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uWm9vbUxldmVsID0gY3VyclNsaWRlLnpvb21MZXZlbHMubWF4O1xyXG4gICAgICAvLyB6b29tIHRvIG1heFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3Vyclpvb21MZXZlbE5lZWRzQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgIGRlc3RpbmF0aW9uWm9vbUxldmVsID0gcHJldlpvb21MZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmdPcGFjaXR5ID0gcHN3cC5iZ09wYWNpdHk7XHJcbiAgICBjb25zdCByZXN0b3JlQmdPcGFjaXR5ID0gcHN3cC5iZ09wYWNpdHkgPCAxO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxQYW4gPSBlcXVhbGl6ZVBvaW50cyh7IHg6IDAsIHk6IDAgfSwgY3VyclNsaWRlLnBhbik7XHJcbiAgICBsZXQgZGVzdGluYXRpb25QYW4gPSBlcXVhbGl6ZVBvaW50cyh7IHg6IDAsIHk6IDAgfSwgaW5pdGlhbFBhbik7XHJcblxyXG4gICAgaWYgKGlnbm9yZUdlc3R1cmUpIHtcclxuICAgICAgdGhpcy5fem9vbVBvaW50LnggPSAwO1xyXG4gICAgICB0aGlzLl96b29tUG9pbnQueSA9IDA7XHJcbiAgICAgIHRoaXMuX3N0YXJ0Wm9vbVBvaW50LnggPSAwO1xyXG4gICAgICB0aGlzLl9zdGFydFpvb21Qb2ludC55ID0gMDtcclxuICAgICAgdGhpcy5fc3RhcnRab29tTGV2ZWwgPSBwcmV2Wm9vbUxldmVsO1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9zdGFydFBhbiwgaW5pdGlhbFBhbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSkge1xyXG4gICAgICBkZXN0aW5hdGlvblBhbiA9IHtcclxuICAgICAgICB4OiB0aGlzLl9jYWxjdWxhdGVQYW5Gb3Jab29tTGV2ZWwoJ3gnLCBkZXN0aW5hdGlvblpvb21MZXZlbCksXHJcbiAgICAgICAgeTogdGhpcy5fY2FsY3VsYXRlUGFuRm9yWm9vbUxldmVsKCd5JywgZGVzdGluYXRpb25ab29tTGV2ZWwpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHpvb20gbGV2ZWwsIHNvIHBhbiBib3VuZHMgYXJlIHVwZGF0ZWQgYWNjb3JkaW5nIHRvIGl0XHJcbiAgICBjdXJyU2xpZGUuc2V0Wm9vbUxldmVsKGRlc3RpbmF0aW9uWm9vbUxldmVsKTtcclxuXHJcbiAgICBkZXN0aW5hdGlvblBhbiA9IHtcclxuICAgICAgeDogY3VyclNsaWRlLmJvdW5kcy5jb3JyZWN0UGFuKCd4JywgZGVzdGluYXRpb25QYW4ueCksXHJcbiAgICAgIHk6IGN1cnJTbGlkZS5ib3VuZHMuY29ycmVjdFBhbigneScsIGRlc3RpbmF0aW9uUGFuLnkpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHJldHVybiB6b29tIGxldmVsIGFuZCBpdHMgYm91bmRzIHRvIGluaXRpYWxcclxuICAgIGN1cnJTbGlkZS5zZXRab29tTGV2ZWwocHJldlpvb21MZXZlbCk7XHJcblxyXG4gICAgY29uc3QgcGFuTmVlZHNDaGFuZ2UgPSAhcG9pbnRzRXF1YWwoZGVzdGluYXRpb25QYW4sIGluaXRpYWxQYW4pO1xyXG5cclxuICAgIGlmICghcGFuTmVlZHNDaGFuZ2UgJiYgIWN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSAmJiAhcmVzdG9yZUJnT3BhY2l0eSkge1xyXG4gICAgICAvLyB1cGRhdGUgcmVzb2x1dGlvbiBhZnRlciBnZXN0dXJlXHJcbiAgICAgIGN1cnJTbGlkZS5fc2V0UmVzb2x1dGlvbihkZXN0aW5hdGlvblpvb21MZXZlbCk7XHJcbiAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcblxyXG4gICAgICAvLyBub3RoaW5nIHRvIGFuaW1hdGVcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsUGFuKCk7XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0YXJ0U3ByaW5nKHtcclxuICAgICAgaXNQYW46IHRydWUsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBlbmQ6IDEwMDAsXHJcbiAgICAgIHZlbG9jaXR5OiAwLFxyXG4gICAgICBkYW1waW5nUmF0aW86IDEsXHJcbiAgICAgIG5hdHVyYWxGcmVxdWVuY3k6IDQwLFxyXG4gICAgICBvblVwZGF0ZTogKG5vdykgPT4ge1xyXG4gICAgICAgIG5vdyAvPSAxMDAwOyAvLyAwIC0gc3RhcnQsIDEgLSBlbmRcclxuXHJcbiAgICAgICAgaWYgKHBhbk5lZWRzQ2hhbmdlIHx8IGN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSkge1xyXG4gICAgICAgICAgaWYgKHBhbk5lZWRzQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGN1cnJTbGlkZS5wYW4ueCA9IGluaXRpYWxQYW4ueCArIChkZXN0aW5hdGlvblBhbi54IC0gaW5pdGlhbFBhbi54KSAqIG5vdztcclxuICAgICAgICAgICAgY3VyclNsaWRlLnBhbi55ID0gaW5pdGlhbFBhbi55ICsgKGRlc3RpbmF0aW9uUGFuLnkgLSBpbml0aWFsUGFuLnkpICogbm93O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjdXJyWm9vbUxldmVsTmVlZHNDaGFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Wm9vbUxldmVsID0gcHJldlpvb21MZXZlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIChkZXN0aW5hdGlvblpvb21MZXZlbCAtIHByZXZab29tTGV2ZWwpICogbm93O1xyXG4gICAgICAgICAgICBjdXJyU2xpZGUuc2V0Wm9vbUxldmVsKG5ld1pvb21MZXZlbCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgYmFja2dyb3VuZCBvcGFjaXR5XHJcbiAgICAgICAgaWYgKHJlc3RvcmVCZ09wYWNpdHkgJiYgcHN3cC5iZ09wYWNpdHkgPCAxKSB7XHJcbiAgICAgICAgICAvLyBXZSBjbGFtcCBvcGFjaXR5IHRvIGtlZXAgaXQgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgICAgICAgLy8gQXMgcHJvZ3Jlc3MgcmF0aW8gY2FuIGJlIGxhcmdlciB0aGFuIDEgZHVlIHRvIG92ZXJzaG9vdCxcclxuICAgICAgICAgIC8vIGFuZCB3ZSBkbyBub3Qgd2FudCB0byBib3VuY2Ugb3BhY2l0eS5cclxuICAgICAgICAgIHBzd3AuYXBwbHlCZ09wYWNpdHkoY2xhbXAoXHJcbiAgICAgICAgICAgIGluaXRpYWxCZ09wYWNpdHkgKyAoMSAtIGluaXRpYWxCZ09wYWNpdHkpICogbm93LCAwLCAxXHJcbiAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAvLyB1cGRhdGUgcmVzb2x1dGlvbiBhZnRlciB0cmFuc2l0aW9uIGVuZHNcclxuICAgICAgICBjdXJyU2xpZGUuX3NldFJlc29sdXRpb24oZGVzdGluYXRpb25ab29tTGV2ZWwpO1xyXG4gICAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgWm9vbUhhbmRsZXI7XHJcbiIsIi8qKlxyXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gVFxyXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gUFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi90eXBlcy5qcycpLkFkZFBvc3RmaXg8VCwgUD59IEFkZFBvc3RmaXg8VCwgUD5cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9nZXN0dXJlcy5qcycpLmRlZmF1bHR9IEdlc3R1cmVzICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcblxyXG4vKiogQHR5cGVkZWYgeydpbWFnZUNsaWNrJyB8ICdiZ0NsaWNrJyB8ICd0YXAnIHwgJ2RvdWJsZVRhcCd9IEFjdGlvbnMgKi9cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRoZSB0YXAgd2FzIHBlcmZvcm1lZCBvbiB0aGUgbWFpbiBzbGlkZVxyXG4gKiAocmF0aGVyIHRoYW4gY29udHJvbHMgb3IgY2FwdGlvbikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBldmVudFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGRpZFRhcE9uTWFpbkNvbnRlbnQoZXZlbnQpIHtcclxuICByZXR1cm4gISEoLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnBzd3BfX2NvbnRhaW5lcicpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRhcCwgZG91YmxlLXRhcCBoYW5kbGVyLlxyXG4gKi9cclxuY2xhc3MgVGFwSGFuZGxlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtHZXN0dXJlc30gZ2VzdHVyZXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnZXN0dXJlcykge1xyXG4gICAgdGhpcy5nZXN0dXJlcyA9IGdlc3R1cmVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludH0gcG9pbnRcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gb3JpZ2luYWxFdmVudFxyXG4gICAqL1xyXG4gIGNsaWNrKHBvaW50LCBvcmlnaW5hbEV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXRDbGFzc0xpc3QgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAob3JpZ2luYWxFdmVudC50YXJnZXQpLmNsYXNzTGlzdDtcclxuICAgIGNvbnN0IGlzSW1hZ2VDbGljayA9IHRhcmdldENsYXNzTGlzdC5jb250YWlucygncHN3cF9faW1nJyk7XHJcbiAgICBjb25zdCBpc0JhY2tncm91bmRDbGljayA9IHRhcmdldENsYXNzTGlzdC5jb250YWlucygncHN3cF9faXRlbScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRhcmdldENsYXNzTGlzdC5jb250YWlucygncHN3cF9fem9vbS13cmFwJyk7XHJcblxyXG4gICAgaWYgKGlzSW1hZ2VDbGljaykge1xyXG4gICAgICB0aGlzLl9kb0NsaWNrT3JUYXBBY3Rpb24oJ2ltYWdlQ2xpY2snLCBwb2ludCwgb3JpZ2luYWxFdmVudCk7XHJcbiAgICB9IGVsc2UgaWYgKGlzQmFja2dyb3VuZENsaWNrKSB7XHJcbiAgICAgIHRoaXMuX2RvQ2xpY2tPclRhcEFjdGlvbignYmdDbGljaycsIHBvaW50LCBvcmlnaW5hbEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBvaW50XHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IG9yaWdpbmFsRXZlbnRcclxuICAgKi9cclxuICB0YXAocG9pbnQsIG9yaWdpbmFsRXZlbnQpIHtcclxuICAgIGlmIChkaWRUYXBPbk1haW5Db250ZW50KG9yaWdpbmFsRXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuX2RvQ2xpY2tPclRhcEFjdGlvbigndGFwJywgcG9pbnQsIG9yaWdpbmFsRXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludH0gcG9pbnRcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gb3JpZ2luYWxFdmVudFxyXG4gICAqL1xyXG4gIGRvdWJsZVRhcChwb2ludCwgb3JpZ2luYWxFdmVudCkge1xyXG4gICAgaWYgKGRpZFRhcE9uTWFpbkNvbnRlbnQob3JpZ2luYWxFdmVudCkpIHtcclxuICAgICAgdGhpcy5fZG9DbGlja09yVGFwQWN0aW9uKCdkb3VibGVUYXAnLCBwb2ludCwgb3JpZ2luYWxFdmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7QWN0aW9uc30gYWN0aW9uTmFtZVxyXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBvaW50XHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IG9yaWdpbmFsRXZlbnRcclxuICAgKi9cclxuICBfZG9DbGlja09yVGFwQWN0aW9uKGFjdGlvbk5hbWUsIHBvaW50LCBvcmlnaW5hbEV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gcHN3cDtcclxuICAgIGNvbnN0IGFjdGlvbkZ1bGxOYW1lID0gLyoqIEB0eXBlIHtBZGRQb3N0Zml4PEFjdGlvbnMsICdBY3Rpb24nPn0gKi8gKGFjdGlvbk5hbWUgKyAnQWN0aW9uJyk7XHJcbiAgICBjb25zdCBvcHRpb25WYWx1ZSA9IHBzd3Aub3B0aW9uc1thY3Rpb25GdWxsTmFtZV07XHJcblxyXG4gICAgaWYgKHBzd3AuZGlzcGF0Y2goYWN0aW9uRnVsbE5hbWUsIHsgcG9pbnQsIG9yaWdpbmFsRXZlbnQgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBvcHRpb25WYWx1ZS5jYWxsKHBzd3AsIHBvaW50LCBvcmlnaW5hbEV2ZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAob3B0aW9uVmFsdWUpIHtcclxuICAgICAgY2FzZSAnY2xvc2UnOlxyXG4gICAgICBjYXNlICduZXh0JzpcclxuICAgICAgICBwc3dwW29wdGlvblZhbHVlXSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd6b29tJzpcclxuICAgICAgICBjdXJyU2xpZGU/LnRvZ2dsZVpvb20ocG9pbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd6b29tLW9yLWNsb3NlJzpcclxuICAgICAgICAvLyBieSBkZWZhdWx0IGNsaWNrIHpvb21zIGN1cnJlbnQgaW1hZ2UsXHJcbiAgICAgICAgLy8gaWYgaXQgY2FuIG5vdCBiZSB6b29tZWQgLSBnYWxsZXJ5IHdpbGwgYmUgY2xvc2VkXHJcbiAgICAgICAgaWYgKGN1cnJTbGlkZT8uaXNab29tYWJsZSgpXHJcbiAgICAgICAgICAgICYmIGN1cnJTbGlkZS56b29tTGV2ZWxzLnNlY29uZGFyeSAhPT0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgY3VyclNsaWRlLnRvZ2dsZVpvb20ocG9pbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHN3cC5vcHRpb25zLmNsaWNrVG9DbG9zZU5vblpvb21hYmxlKSB7XHJcbiAgICAgICAgICBwc3dwLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b2dnbGUtY29udHJvbHMnOlxyXG4gICAgICAgIHRoaXMuZ2VzdHVyZXMucHN3cC5lbGVtZW50Py5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwLS11aS12aXNpYmxlJyk7XHJcbiAgICAgICAgLy8gaWYgKF9jb250cm9sc1Zpc2libGUpIHtcclxuICAgICAgICAvLyAgIF91aS5oaWRlQ29udHJvbHMoKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgX3VpLnNob3dDb250cm9scygpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhcEhhbmRsZXI7XHJcbiIsImltcG9ydCB7XHJcbiAgZXF1YWxpemVQb2ludHMsIHBvaW50c0VxdWFsLCBnZXREaXN0YW5jZUJldHdlZW5cclxufSBmcm9tICcuLi91dGlsL3V0aWwuanMnO1xyXG5cclxuaW1wb3J0IERyYWdIYW5kbGVyIGZyb20gJy4vZHJhZy1oYW5kbGVyLmpzJztcclxuaW1wb3J0IFpvb21IYW5kbGVyIGZyb20gJy4vem9vbS1oYW5kbGVyLmpzJztcclxuaW1wb3J0IFRhcEhhbmRsZXIgZnJvbSAnLi90YXAtaGFuZGxlci5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuXHJcbi8vIEhvdyBmYXIgc2hvdWxkIHVzZXIgc2hvdWxkIGRyYWdcclxuLy8gdW50aWwgd2UgY2FuIGRldGVybWluZSB0aGF0IHRoZSBnZXN0dXJlIGlzIHN3aXBlIGFuZCBpdHMgZGlyZWN0aW9uXHJcbmNvbnN0IEFYSVNfU1dJUEVfSFlTVEVSSVNJUyA9IDEwO1xyXG4vL2NvbnN0IFBBTl9FTkRfRlJJQ1RJT04gPSAwLjM1O1xyXG5cclxuY29uc3QgRE9VQkxFX1RBUF9ERUxBWSA9IDMwMDsgLy8gbXNcclxuY29uc3QgTUlOX1RBUF9ESVNUQU5DRSA9IDI1OyAvLyBweFxyXG5cclxuLyoqXHJcbiAqIEdlc3R1cmVzIGNsYXNzIGJpbmQgdG91Y2gsIHBvaW50ZXIgb3IgbW91c2UgZXZlbnRzXHJcbiAqIGFuZCBlbWl0cyBkcmFnIHRvIGRyYWctaGFuZGxlciBhbmQgem9vbSBldmVudHMgem9vbS1oYW5kbGVyLlxyXG4gKlxyXG4gKiBEcmFnIGFuZCB6b29tIGV2ZW50cyBhcmUgZW1pdGVkIGluIHJlcXVlc3RBbmltYXRpb25GcmFtZSxcclxuICogYW5kIG9ubHkgd2hlbiBvbmUgb2YgcG9pbnRlcnMgd2FzIGFjdHVhbGx5IGNoYW5nZWQuXHJcbiAqL1xyXG5jbGFzcyBHZXN0dXJlcyB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuXHJcbiAgICAvKiogQHR5cGUgeyd4JyB8ICd5JyB8IG51bGx9ICovXHJcbiAgICB0aGlzLmRyYWdBeGlzID0gbnVsbDtcclxuXHJcbiAgICAvLyBwb2ludCBvYmplY3RzIGFyZSBkZWZpbmVkIG9uY2UgYW5kIHJldXNlZFxyXG4gICAgLy8gUGhvdG9Td2lwZSBrZWVwcyB0cmFjayBvbmx5IG9mIHR3byBwb2ludGVycywgb3RoZXJzIGFyZSBpZ25vcmVkXHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5wMSA9IHsgeDogMCwgeTogMCB9OyAvLyB0aGUgZmlyc3QgcHJlc3NlZCBwb2ludGVyXHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5wMiA9IHsgeDogMCwgeTogMCB9OyAvLyB0aGUgc2Vjb25kIHByZXNzZWQgcG9pbnRlclxyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMucHJldlAxID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5wcmV2UDIgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnN0YXJ0UDEgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnN0YXJ0UDIgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgLyoqIEB0eXBlIHtQb2ludH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xhc3RTdGFydFAxID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5faW50ZXJ2YWxQMSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMgPSAwO1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludFtdfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fb25nb2luZ1BvaW50ZXJzID0gW107XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3RvdWNoRXZlbnRFbmFibGVkID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9wb2ludGVyRXZlbnRFbmFibGVkID0gISEod2luZG93LlBvaW50ZXJFdmVudCk7XHJcbiAgICB0aGlzLnN1cHBvcnRzVG91Y2ggPSB0aGlzLl90b3VjaEV2ZW50RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLl9wb2ludGVyRXZlbnRFbmFibGVkICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMgPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9pbnRlcnZhbFRpbWUgPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNNdWx0aXRvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNab29taW5nID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge251bWJlciB8IG51bGx9ICovXHJcbiAgICB0aGlzLnJhZiA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge05vZGVKUy5UaW1lb3V0IHwgbnVsbH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3RhcFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNUb3VjaCkge1xyXG4gICAgICAvLyBkaXNhYmxlIHBhbiB0byBuZXh0IHNsaWRlIGZvciBub24tdG91Y2ggZGV2aWNlc1xyXG4gICAgICBwc3dwLm9wdGlvbnMuYWxsb3dQYW5Ub05leHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyYWcgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcyk7XHJcbiAgICB0aGlzLnpvb21MZXZlbHMgPSBuZXcgWm9vbUhhbmRsZXIodGhpcyk7XHJcbiAgICB0aGlzLnRhcEhhbmRsZXIgPSBuZXcgVGFwSGFuZGxlcih0aGlzKTtcclxuXHJcbiAgICBwc3dwLm9uKCdiaW5kRXZlbnRzJywgKCkgPT4ge1xyXG4gICAgICBwc3dwLmV2ZW50cy5hZGQoXHJcbiAgICAgICAgcHN3cC5zY3JvbGxXcmFwLFxyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5fb25DbGljay5iaW5kKHRoaXMpKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCdwb2ludGVyJywgJ2Rvd24nLCAndXAnLCAnY2FuY2VsJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdG91Y2hFdmVudEVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCd0b3VjaCcsICdzdGFydCcsICdlbmQnLCAnY2FuY2VsJyk7XHJcblxyXG4gICAgICAgIC8vIEluIHByZXZpb3VzIHZlcnNpb25zIHdlIGFsc28gYm91bmQgbW91c2UgZXZlbnQgaGVyZSxcclxuICAgICAgICAvLyBpbiBjYXNlIGRldmljZSBzdXBwb3J0cyBib3RoIHRvdWNoIGFuZCBtb3VzZSBldmVudHMsXHJcbiAgICAgICAgLy8gYnV0IG5ld2VyIHZlcnNpb25zIG9mIGJyb3dzZXJzIG5vdyBzdXBwb3J0IFBvaW50ZXJFdmVudC5cclxuXHJcbiAgICAgICAgLy8gb24gaU9TMTAgaWYgeW91IGJpbmQgdG91Y2htb3ZlL2VuZCBhZnRlciB0b3VjaHN0YXJ0LFxyXG4gICAgICAgIC8vIGFuZCB5b3UgZG9uJ3QgcHJldmVudERlZmF1bHQgdG91Y2hzdGFydCAod2hpY2ggUGhvdG9Td2lwZSBkb2VzKSxcclxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHRvdWNobW92ZSBhbmQgdG91Y2hlbmQuXHJcbiAgICAgICAgLy8gVW5sZXNzIHlvdSBiaW5kIGl0IHByZXZpb3VzbHkuXHJcbiAgICAgICAgaWYgKHBzd3Auc2Nyb2xsV3JhcCkge1xyXG4gICAgICAgICAgcHN3cC5zY3JvbGxXcmFwLm9udG91Y2htb3ZlID0gKCkgPT4ge307XHJcbiAgICAgICAgICBwc3dwLnNjcm9sbFdyYXAub250b3VjaGVuZCA9ICgpID0+IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCdtb3VzZScsICdkb3duJywgJ3VwJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geydtb3VzZScgfCAndG91Y2gnIHwgJ3BvaW50ZXInfSBwcmVmXHJcbiAgICogQHBhcmFtIHsnZG93bicgfCAnc3RhcnQnfSBkb3duXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2VuZCd9IHVwXHJcbiAgICogQHBhcmFtIHsnY2FuY2VsJ30gW2NhbmNlbF1cclxuICAgKi9cclxuICBfYmluZEV2ZW50cyhwcmVmLCBkb3duLCB1cCwgY2FuY2VsKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gcHN3cDtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxFdmVudCA9IGNhbmNlbCA/IHByZWYgKyBjYW5jZWwgOiAnJztcclxuXHJcbiAgICBldmVudHMuYWRkKFxyXG4gICAgICBwc3dwLnNjcm9sbFdyYXAsXHJcbiAgICAgIHByZWYgKyBkb3duLFxyXG4gICAgICAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSlcclxuICAgICk7XHJcbiAgICBldmVudHMuYWRkKHdpbmRvdywgcHJlZiArICdtb3ZlJywgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpKTtcclxuICAgIGV2ZW50cy5hZGQod2luZG93LCBwcmVmICsgdXAsIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMub25Qb2ludGVyVXAuYmluZCh0aGlzKSkpO1xyXG4gICAgaWYgKGNhbmNlbEV2ZW50KSB7XHJcbiAgICAgIGV2ZW50cy5hZGQoXHJcbiAgICAgICAgcHN3cC5zY3JvbGxXcmFwLFxyXG4gICAgICAgIGNhbmNlbEV2ZW50LFxyXG4gICAgICAgIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMub25Qb2ludGVyVXAuYmluZCh0aGlzKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgb25Qb2ludGVyRG93bihlKSB7XHJcbiAgICAvLyBXZSBkbyBub3QgY2FsbCBwcmV2ZW50RGVmYXVsdCBmb3IgdG91Y2ggZXZlbnRzXHJcbiAgICAvLyB0byBhbGxvdyBicm93c2VyIHRvIHNob3cgbmF0aXZlIGRpYWxvZyBvbiBsb25ncHJlc3NcclxuICAgIC8vICh0aGUgb25lIHRoYXQgYWxsb3dzIHRvIHNhdmUgaW1hZ2Ugb3Igb3BlbiBpdCBpbiBuZXcgdGFiKS5cclxuICAgIC8vXHJcbiAgICAvLyBEZXNrdG9wIFNhZmFyaSBhbGxvd3MgdG8gZHJhZyBpbWFnZXMgd2hlbiBwcmV2ZW50RGVmYXVsdCBpc24ndCBjYWxsZWQgb24gbW91c2Vkb3duLFxyXG4gICAgLy8gZXZlbiB0aG91Z2ggcHJldmVudERlZmF1bHQgSVMgY2FsbGVkIG9uIG1vdXNlbW92ZS4gVGhhdCdzIHdoeSB3ZSBwcmV2ZW50RGVmYXVsdCBtb3VzZWRvd24uXHJcbiAgICBjb25zdCBpc01vdXNlUG9pbnRlciA9IGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJztcclxuXHJcbiAgICAvLyBBbGxvdyBkcmFnZ2luZyBvbmx5IHZpYSBsZWZ0IG1vdXNlIGJ1dHRvbi5cclxuICAgIC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvZXZlbnRzX3Byb3BlcnRpZXMuaHRtbFxyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2V2ZW50LmJ1dHRvblxyXG4gICAgaWYgKGlzTW91c2VQb2ludGVyICYmIGUuYnV0dG9uID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG5cclxuICAgIC8vIGlmIFBob3RvU3dpcGUgaXMgb3BlbmluZyBvciBjbG9zaW5nXHJcbiAgICBpZiAoIXBzd3Aub3BlbmVyLmlzT3Blbikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHN3cC5kaXNwYXRjaCgncG9pbnRlckRvd24nLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTW91c2VQb2ludGVyKSB7XHJcbiAgICAgIHBzd3AubW91c2VEZXRlY3RlZCgpO1xyXG5cclxuICAgICAgLy8gcHJldmVudERlZmF1bHQgbW91c2UgZXZlbnQgdG8gcHJldmVudFxyXG4gICAgICAvLyBicm93c2VyIGltYWdlIGRyYWcgZmVhdHVyZVxyXG4gICAgICB0aGlzLl9wcmV2ZW50UG9pbnRlckV2ZW50QmVoYXZpb3VyKGUsICdkb3duJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0b3BBbGwoKTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVQb2ludHMoZSwgJ2Rvd24nKTtcclxuXHJcbiAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0F4aXMgPSBudWxsO1xyXG4gICAgICAvLyB3ZSBuZWVkIHRvIHN0b3JlIGluaXRpYWwgcG9pbnQgdG8gZGV0ZXJtaW5lIHRoZSBtYWluIGF4aXMsXHJcbiAgICAgIC8vIGRyYWcgaXMgYWN0aXZhdGVkIG9ubHkgYWZ0ZXIgdGhlIGF4aXMgaXMgZGV0ZXJtaW5lZFxyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnN0YXJ0UDEsIHRoaXMucDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9udW1BY3RpdmVQb2ludHMgPiAxKSB7XHJcbiAgICAgIC8vIFRhcCBvciBkb3VibGUgdGFwIHNob3VsZCBub3QgdHJpZ2dlciBpZiBtb3JlIHRoYW4gb25lIHBvaW50ZXJcclxuICAgICAgdGhpcy5fY2xlYXJUYXBUaW1lcigpO1xyXG4gICAgICB0aGlzLmlzTXVsdGl0b3VjaCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTXVsdGl0b3VjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKi9cclxuICBvblBvaW50ZXJNb3ZlKGUpIHtcclxuICAgIHRoaXMuX3ByZXZlbnRQb2ludGVyRXZlbnRCZWhhdmlvdXIoZSwgJ21vdmUnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX251bUFjdGl2ZVBvaW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlUG9pbnRzKGUsICdtb3ZlJyk7XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5kaXNwYXRjaCgncG9pbnRlck1vdmUnLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA9PT0gMSAmJiAhdGhpcy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIGlmICghdGhpcy5kcmFnQXhpcykge1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZURyYWdEaXJlY3Rpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRHJhZyBheGlzIHdhcyBkZXRlY3RlZCwgZW1pdCBkcmFnLnN0YXJ0XHJcbiAgICAgIGlmICh0aGlzLmRyYWdBeGlzICYmICF0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1pvb21pbmcpIHtcclxuICAgICAgICAgIHRoaXMuaXNab29taW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnpvb21MZXZlbHMuZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NsZWFyVGFwVGltZXIoKTsgLy8gVGFwIGNhbiBub3QgdHJpZ2dlciBhZnRlciBkcmFnXHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBzdGFydGluZyBwb2ludFxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXJ0UG9pbnRzKCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL3RoaXMuX3N0YXJ0VGltZSA9IHRoaXMuX2ludGVydmFsVGltZTtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9pbnRlcnZhbFAxLCB0aGlzLnAxKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmFnLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhZlN0b3BMb29wKCk7XHJcbiAgICAgICAgdGhpcy5fcmFmUmVuZGVyTG9vcCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA+IDEgJiYgIXRoaXMuaXNab29taW5nKSB7XHJcbiAgICAgIHRoaXMuX2ZpbmlzaERyYWcoKTtcclxuXHJcbiAgICAgIHRoaXMuaXNab29taW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIEFkanVzdCBzdGFydGluZyBwb2ludHNcclxuICAgICAgdGhpcy5fdXBkYXRlU3RhcnRQb2ludHMoKTtcclxuXHJcbiAgICAgIHRoaXMuem9vbUxldmVscy5zdGFydCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFmU3RvcExvb3AoKTtcclxuICAgICAgdGhpcy5fcmFmUmVuZGVyTG9vcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfZmluaXNoRHJhZygpIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBUcnkgdG8gY2FsY3VsYXRlIHZlbG9jaXR5LFxyXG4gICAgICAvLyBpZiBpdCB3YXNuJ3QgY2FsY3VsYXRlZCB5ZXQgaW4gZHJhZy5jaGFuZ2VcclxuICAgICAgaWYgKCF0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVWZWxvY2l0eSh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kcmFnLmVuZCgpO1xyXG4gICAgICB0aGlzLmRyYWdBeGlzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgb25Qb2ludGVyVXAoZSkge1xyXG4gICAgaWYgKCF0aGlzLl9udW1BY3RpdmVQb2ludHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVBvaW50cyhlLCAndXAnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLmRpc3BhdGNoKCdwb2ludGVyVXAnLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9yYWZTdG9wTG9vcCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgIHRoaXMuX2ZpbmlzaERyYWcoKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1pvb21pbmcgJiYgIXRoaXMuaXNNdWx0aXRvdWNoKSB7XHJcbiAgICAgICAgLy90aGlzLnpvb21MZXZlbHMuY29ycmVjdFpvb21QYW4oKTtcclxuICAgICAgICB0aGlzLl9maW5pc2hUYXAoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzIDwgMiAmJiB0aGlzLmlzWm9vbWluZykge1xyXG4gICAgICB0aGlzLmlzWm9vbWluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnpvb21MZXZlbHMuZW5kKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID09PSAxKSB7XHJcbiAgICAgICAgLy8gU2luY2Ugd2UgaGF2ZSAxIHBvaW50IGxlZnQsIHdlIG5lZWQgdG8gcmVpbml0aWF0ZSBkcmFnXHJcbiAgICAgICAgdGhpcy5kcmFnQXhpcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhcnRQb2ludHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfcmFmUmVuZGVyTG9vcCgpIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcgfHwgdGhpcy5pc1pvb21pbmcpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlVmVsb2NpdHkoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBwb2ludGVyIG1vdmVkIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZVxyXG4gICAgICAgIGlmICghcG9pbnRzRXF1YWwodGhpcy5wMSwgdGhpcy5wcmV2UDEpKSB7XHJcbiAgICAgICAgICB0aGlzLmRyYWcuY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgLyogaWYgKHRoaXMuaXNab29taW5nKSAqLyB7XHJcbiAgICAgICAgaWYgKCFwb2ludHNFcXVhbCh0aGlzLnAxLCB0aGlzLnByZXZQMSlcclxuICAgICAgICAgICAgfHwgIXBvaW50c0VxdWFsKHRoaXMucDIsIHRoaXMucHJldlAyKSkge1xyXG4gICAgICAgICAgdGhpcy56b29tTGV2ZWxzLmNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlUHJldlBvaW50cygpO1xyXG4gICAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yYWZSZW5kZXJMb29wLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHZlbG9jaXR5IGF0IDUwbXMgaW50ZXJ2YWxcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXHJcbiAgICovXHJcbiAgX3VwZGF0ZVZlbG9jaXR5KGZvcmNlKSB7XHJcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGltZSAtIHRoaXMuX2ludGVydmFsVGltZTtcclxuXHJcbiAgICBpZiAoZHVyYXRpb24gPCA1MCAmJiAhZm9yY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLl9nZXRWZWxvY2l0eSgneCcsIGR1cmF0aW9uKTtcclxuICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMuX2dldFZlbG9jaXR5KCd5JywgZHVyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuX2ludGVydmFsVGltZSA9IHRpbWU7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9pbnRlcnZhbFAxLCB0aGlzLnAxKTtcclxuICAgIHRoaXMuX3ZlbG9jaXR5Q2FsY3VsYXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgX2ZpbmlzaFRhcChlKSB7XHJcbiAgICBjb25zdCB7IG1haW5TY3JvbGwgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0YXAgZXZlbnRzIGlmIG1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWRcclxuICAgIGlmIChtYWluU2Nyb2xsLmlzU2hpZnRlZCgpKSB7XHJcbiAgICAgIC8vIHJlc3RvcmUgbWFpbiBzY3JvbGwgcG9zaXRpb25cclxuICAgICAgLy8gKHVzdWFsbHkgaGFwcGVucyBpZiBzdG9wcGVkIGluIHRoZSBtaWRkbGUgb2YgYW5pbWF0aW9uKVxyXG4gICAgICBtYWluU2Nyb2xsLm1vdmVJbmRleEJ5KDAsIHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGFwIGZvciB0b3VjaGNhbmNlbCBvciBwb2ludGVyY2FuY2VsXHJcbiAgICBpZiAoZS50eXBlLmluZGV4T2YoJ2NhbmNlbCcpID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJpZ2dlciBjbGljayBpbnN0ZWFkIG9mIHRhcCBmb3IgbW91c2UgZXZlbnRzXHJcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2V1cCcgfHwgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xyXG4gICAgICB0aGlzLnRhcEhhbmRsZXIuY2xpY2sodGhpcy5zdGFydFAxLCBlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc2FibGUgZGVsYXkgaWYgdGhlcmUgaXMgbm8gZG91YmxlVGFwQWN0aW9uXHJcbiAgICBjb25zdCB0YXBEZWxheSA9IHRoaXMucHN3cC5vcHRpb25zLmRvdWJsZVRhcEFjdGlvbiA/IERPVUJMRV9UQVBfREVMQVkgOiAwO1xyXG5cclxuICAgIC8vIElmIHRhcFRpbWVyIGlzIGRlZmluZWQgLSB3ZSB0YXBwZWQgcmVjZW50bHksXHJcbiAgICAvLyBjaGVjayBpZiB0aGUgY3VycmVudCB0YXAgaXMgY2xvc2UgdG8gdGhlIHByZXZpb3VzIG9uZSxcclxuICAgIC8vIGlmIHllcyAtIHRyaWdnZXIgZG91YmxlIHRhcFxyXG4gICAgaWYgKHRoaXMuX3RhcFRpbWVyKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyVGFwVGltZXIoKTtcclxuICAgICAgLy8gQ2hlY2sgaWYgdHdvIHRhcHMgd2VyZSBtb3JlIG9yIGxlc3Mgb24gdGhlIHNhbWUgcGxhY2VcclxuICAgICAgaWYgKGdldERpc3RhbmNlQmV0d2Vlbih0aGlzLl9sYXN0U3RhcnRQMSwgdGhpcy5zdGFydFAxKSA8IE1JTl9UQVBfRElTVEFOQ0UpIHtcclxuICAgICAgICB0aGlzLnRhcEhhbmRsZXIuZG91YmxlVGFwKHRoaXMuc3RhcnRQMSwgZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuX2xhc3RTdGFydFAxLCB0aGlzLnN0YXJ0UDEpO1xyXG4gICAgICB0aGlzLl90YXBUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFwSGFuZGxlci50YXAodGhpcy5zdGFydFAxLCBlKTtcclxuICAgICAgICB0aGlzLl9jbGVhclRhcFRpbWVyKCk7XHJcbiAgICAgIH0sIHRhcERlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NsZWFyVGFwVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fdGFwVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RhcFRpbWVyKTtcclxuICAgICAgdGhpcy5fdGFwVGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHZlbG9jaXR5IGZvciBheGlzXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0VmVsb2NpdHkoYXhpcywgZHVyYXRpb24pIHtcclxuICAgIC8vIGRpc3BsYWNlbWVudCBpcyBsaWtlIGRpc3RhbmNlLCBidXQgY2FuIGJlIG5lZ2F0aXZlLlxyXG4gICAgY29uc3QgZGlzcGxhY2VtZW50ID0gdGhpcy5wMVtheGlzXSAtIHRoaXMuX2ludGVydmFsUDFbYXhpc107XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKGRpc3BsYWNlbWVudCkgPiAxICYmIGR1cmF0aW9uID4gNSkge1xyXG4gICAgICByZXR1cm4gZGlzcGxhY2VtZW50IC8gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9yYWZTdG9wTG9vcCgpIHtcclxuICAgIGlmICh0aGlzLnJhZikge1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZik7XHJcbiAgICAgIHRoaXMucmFmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZG93bicgfCAnbW92ZSd9IHBvaW50ZXJUeXBlIE5vcm1hbGl6ZWQgcG9pbnRlciB0eXBlXHJcbiAgICovXHJcbiAgX3ByZXZlbnRQb2ludGVyRXZlbnRCZWhhdmlvdXIoZSwgcG9pbnRlclR5cGUpIHtcclxuICAgIGNvbnN0IHByZXZlbnRQb2ludGVyRXZlbnQgPSB0aGlzLnBzd3AuYXBwbHlGaWx0ZXJzKCdwcmV2ZW50UG9pbnRlckV2ZW50JywgdHJ1ZSwgZSwgcG9pbnRlclR5cGUpO1xyXG4gICAgaWYgKHByZXZlbnRQb2ludGVyRXZlbnQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGFuZCBub3JtYWxpemVzIHBvaW50cyBmcm9tIHRoZSB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlciBldmVudC5cclxuICAgKiBVcGRhdGVzIHAxIGFuZCBwMi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnQgfCBUb3VjaEV2ZW50fSBlXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ21vdmUnfSBwb2ludGVyVHlwZSBOb3JtYWxpemVkIHBvaW50ZXIgdHlwZVxyXG4gICAqL1xyXG4gIF91cGRhdGVQb2ludHMoZSwgcG9pbnRlclR5cGUpIHtcclxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnRFbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IHBvaW50ZXJFdmVudCA9IC8qKiBAdHlwZSB7UG9pbnRlckV2ZW50fSAqLyAoZSk7XHJcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjdXJyZW50IHBvaW50ZXIgaW4gb25nb2luZyBwb2ludGVycyBieSBpdHMgSURcclxuICAgICAgY29uc3QgcG9pbnRlckluZGV4ID0gdGhpcy5fb25nb2luZ1BvaW50ZXJzLmZpbmRJbmRleCgob25nb2luZ1BvaW50ZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gb25nb2luZ1BvaW50ZXIuaWQgPT09IHBvaW50ZXJFdmVudC5wb2ludGVySWQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHBvaW50ZXJUeXBlID09PSAndXAnICYmIHBvaW50ZXJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgLy8gcmVsZWFzZSB0aGUgcG9pbnRlciAtIHJlbW92ZSBpdCBmcm9tIG9uZ29pbmdcclxuICAgICAgICB0aGlzLl9vbmdvaW5nUG9pbnRlcnMuc3BsaWNlKHBvaW50ZXJJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9pbnRlclR5cGUgPT09ICdkb3duJyAmJiBwb2ludGVySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgLy8gYWRkIG5ldyBwb2ludGVyXHJcbiAgICAgICAgdGhpcy5fb25nb2luZ1BvaW50ZXJzLnB1c2godGhpcy5fY29udmVydEV2ZW50UG9zVG9Qb2ludChwb2ludGVyRXZlbnQsIHsgeDogMCwgeTogMCB9KSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9pbnRlckluZGV4ID4gLTEpIHtcclxuICAgICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcG9pbnRlclxyXG4gICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQocG9pbnRlckV2ZW50LCB0aGlzLl9vbmdvaW5nUG9pbnRlcnNbcG9pbnRlckluZGV4XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cyA9IHRoaXMuX29uZ29pbmdQb2ludGVycy5sZW5ndGg7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgcG9pbnRzIHRoYXQgUGhvdG9Td2lwZSB1c2VzXHJcbiAgICAgIC8vIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBhbmQgc2NhbGVcclxuICAgICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA+IDApIHtcclxuICAgICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnAxLCB0aGlzLl9vbmdvaW5nUG9pbnRlcnNbMF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID4gMSkge1xyXG4gICAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMucDIsIHRoaXMuX29uZ29pbmdQb2ludGVyc1sxXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRvdWNoRXZlbnQgPSAvKiogQHR5cGUge1RvdWNoRXZlbnR9ICovIChlKTtcclxuXHJcbiAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cyA9IDA7XHJcbiAgICAgIGlmICh0b3VjaEV2ZW50LnR5cGUuaW5kZXhPZigndG91Y2gnKSA+IC0xKSB7XHJcbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVG91Y2hFdmVudFxyXG4gICAgICAgIGlmICh0b3VjaEV2ZW50LnRvdWNoZXMgJiYgdG91Y2hFdmVudC50b3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQodG91Y2hFdmVudC50b3VjaGVzWzBdLCB0aGlzLnAxKTtcclxuICAgICAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cysrO1xyXG4gICAgICAgICAgaWYgKHRvdWNoRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQodG91Y2hFdmVudC50b3VjaGVzWzFdLCB0aGlzLnAyKTtcclxuICAgICAgICAgICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE1vdXNlIEV2ZW50XHJcbiAgICAgICAgdGhpcy5fY29udmVydEV2ZW50UG9zVG9Qb2ludCgvKiogQHR5cGUge1BvaW50ZXJFdmVudH0gKi8gKGUpLCB0aGlzLnAxKTtcclxuICAgICAgICBpZiAocG9pbnRlclR5cGUgPT09ICd1cCcpIHtcclxuICAgICAgICAgIC8vIGNsZWFyIGFsbCBwb2ludHMgb24gbW91c2V1cFxyXG4gICAgICAgICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdXBkYXRlIHBvaW50cyB0aGF0IHdlcmUgdXNlZCBkdXJpbmcgcHJldmlvdXMgckFGIHRpY2tcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVQcmV2UG9pbnRzKCkge1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5wcmV2UDEsIHRoaXMucDEpO1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5wcmV2UDIsIHRoaXMucDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHVwZGF0ZSBwb2ludHMgYXQgdGhlIHN0YXJ0IG9mIGdlc3R1cmVcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGFydFBvaW50cygpIHtcclxuICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuc3RhcnRQMSwgdGhpcy5wMSk7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnN0YXJ0UDIsIHRoaXMucDIpO1xyXG4gICAgdGhpcy5fdXBkYXRlUHJldlBvaW50cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2NhbGN1bGF0ZURyYWdEaXJlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5wc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgLy8gaWYgbWFpbiBzY3JvbGwgcG9zaXRpb24gaXMgc2hpZnRlZCDigJMgZGlyZWN0aW9uIGlzIGFsd2F5cyBob3Jpem9udGFsXHJcbiAgICAgIHRoaXMuZHJhZ0F4aXMgPSAneCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjYWxjdWxhdGUgZGVsdGEgb2YgdGhlIGxhc3QgdG91Y2htb3ZlIHRpY2tcclxuICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRoaXMucDEueCAtIHRoaXMuc3RhcnRQMS54KSAtIE1hdGguYWJzKHRoaXMucDEueSAtIHRoaXMuc3RhcnRQMS55KTtcclxuXHJcbiAgICAgIGlmIChkaWZmICE9PSAwKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgcG9pbnRlciB3YXMgc2hpZnRlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICAgIGNvbnN0IGF4aXNUb0NoZWNrID0gZGlmZiA+IDAgPyAneCcgOiAneSc7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnAxW2F4aXNUb0NoZWNrXSAtIHRoaXMuc3RhcnRQMVtheGlzVG9DaGVja10pID49IEFYSVNfU1dJUEVfSFlTVEVSSVNJUykge1xyXG4gICAgICAgICAgdGhpcy5kcmFnQXhpcyA9IGF4aXNUb0NoZWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgdG91Y2gsIHBvaW50ZXIgb3IgbW91c2UgZXZlbnRcclxuICAgKiB0byBQaG90b1N3aXBlIHBvaW50LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1RvdWNoIHwgUG9pbnRlckV2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtQb2ludH0gcFxyXG4gICAqIEByZXR1cm5zIHtQb2ludH1cclxuICAgKi9cclxuICBfY29udmVydEV2ZW50UG9zVG9Qb2ludChlLCBwKSB7XHJcbiAgICBwLnggPSBlLnBhZ2VYIC0gdGhpcy5wc3dwLm9mZnNldC54O1xyXG4gICAgcC55ID0gZS5wYWdlWSAtIHRoaXMucHN3cC5vZmZzZXQueTtcclxuXHJcbiAgICBpZiAoJ3BvaW50ZXJJZCcgaW4gZSkge1xyXG4gICAgICBwLmlkID0gZS5wb2ludGVySWQ7XHJcbiAgICB9IGVsc2UgaWYgKGUuaWRlbnRpZmllciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHAuaWQgPSBlLmlkZW50aWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgX29uQ2xpY2soZSkge1xyXG4gICAgLy8gRG8gbm90IGFsbG93IGNsaWNrIGV2ZW50IHRvIHBhc3MgdGhyb3VnaCBhZnRlciBkcmFnXHJcbiAgICBpZiAodGhpcy5wc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2VzdHVyZXM7XHJcbiIsImltcG9ydCB7XHJcbiAgc2V0VHJhbnNmb3JtLFxyXG4gIGNyZWF0ZUVsZW1lbnQsXHJcbn0gZnJvbSAnLi91dGlsL3V0aWwuanMnO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUvc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHt7IGVsOiBIVE1MRGl2RWxlbWVudDsgc2xpZGU/OiBTbGlkZSB9fSBJdGVtSG9sZGVyICovXHJcblxyXG5jb25zdCBNQUlOX1NDUk9MTF9FTkRfRlJJQ1RJT04gPSAwLjM1O1xyXG5cclxuXHJcbi8vIGNvbnN0IE1JTl9TV0lQRV9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMjUwO1xyXG4vLyBjb25zdCBNQVhfU1dJUEVfVFJBQlNJVElPTl9EVVJBVElPTiA9IDUwMDtcclxuLy8gY29uc3QgREVGQVVMVF9TV0lQRV9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMzMzO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgbW92ZW1lbnQgb2YgdGhlIG1haW4gc2Nyb2xsaW5nIGNvbnRhaW5lclxyXG4gKiAoZm9yIGV4YW1wbGUsIGl0IHJlcG9zaXRpb25zIHdoZW4gdXNlciBzd2lwZXMgbGVmdCBvciByaWdodCkuXHJcbiAqXHJcbiAqIEFsc28gc3RvcmVzIGl0cyBzdGF0ZS5cclxuICovXHJcbmNsYXNzIE1haW5TY3JvbGwge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy5zbGlkZVdpZHRoID0gMDtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fY3VyclBvc2l0aW9uSW5kZXggPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9wcmV2UG9zaXRpb25JbmRleCA9IDA7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXggPSAtMTtcclxuXHJcbiAgICAvKiogQHR5cGUge0l0ZW1Ib2xkZXJbXX0gKi9cclxuICAgIHRoaXMuaXRlbUhvbGRlcnMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uIHRoZSBzY3JvbGxlciBhbmQgc2xpZGUgY29udGFpbmVyc1xyXG4gICAqIGFjY29yZGluZyB0byB2aWV3cG9ydCBzaXplLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVzaXplU2xpZGVzXSBXaGV0aGVyIHNsaWRlcyBjb250ZW50IHNob3VsZCByZXNpemVkXHJcbiAgICovXHJcbiAgcmVzaXplKHJlc2l6ZVNsaWRlcykge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbmV3U2xpZGVXaWR0aCA9IE1hdGgucm91bmQoXHJcbiAgICAgIHBzd3Audmlld3BvcnRTaXplLnggKyBwc3dwLnZpZXdwb3J0U2l6ZS54ICogcHN3cC5vcHRpb25zLnNwYWNpbmdcclxuICAgICk7XHJcbiAgICAvLyBNb2JpbGUgYnJvd3NlcnMgbWlnaHQgdHJpZ2dlciBhIHJlc2l6ZSBldmVudCBkdXJpbmcgYSBnZXN0dXJlLlxyXG4gICAgLy8gKGR1ZSB0byB0b29sYmFyIGFwcGVhcmluZyBvciBoaWRpbmcpLlxyXG4gICAgLy8gQXZvaWQgcmUtYWRqdXN0aW5nIG1haW4gc2Nyb2xsIHBvc2l0aW9uIGlmIHdpZHRoIHdhc24ndCBjaGFuZ2VkXHJcbiAgICBjb25zdCBzbGlkZVdpZHRoQ2hhbmdlZCA9IChuZXdTbGlkZVdpZHRoICE9PSB0aGlzLnNsaWRlV2lkdGgpO1xyXG5cclxuICAgIGlmIChzbGlkZVdpZHRoQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNsaWRlV2lkdGggPSBuZXdTbGlkZVdpZHRoO1xyXG4gICAgICB0aGlzLm1vdmVUbyh0aGlzLmdldEN1cnJTbGlkZVgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoc2xpZGVXaWR0aENoYW5nZWQpIHtcclxuICAgICAgICBzZXRUcmFuc2Zvcm0oaXRlbUhvbGRlci5lbCwgKGluZGV4ICsgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGlzLnNsaWRlV2lkdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVzaXplU2xpZGVzICYmIGl0ZW1Ib2xkZXIuc2xpZGUpIHtcclxuICAgICAgICBpdGVtSG9sZGVyLnNsaWRlLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IFggcG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsZXIgdG8gemVyb1xyXG4gICAqL1xyXG4gIHJlc2V0UG9zaXRpb24oKSB7XHJcbiAgICAvLyBQb3NpdGlvbiBvbiB0aGUgbWFpbiBzY3JvbGxlciAob2Zmc2V0KVxyXG4gICAgLy8gaXQgaXMgaW5kZXBlbmRlbnQgZnJvbSBzbGlkZSBpbmRleFxyXG4gICAgdGhpcy5fY3VyclBvc2l0aW9uSW5kZXggPSAwO1xyXG4gICAgdGhpcy5fcHJldlBvc2l0aW9uSW5kZXggPSAwO1xyXG5cclxuICAgIC8vIFRoaXMgd2lsbCBmb3JjZSByZWNhbGN1bGF0aW9uIG9mIHNpemUgb24gbmV4dCByZXNpemUoKVxyXG4gICAgdGhpcy5zbGlkZVdpZHRoID0gMDtcclxuXHJcbiAgICAvLyBfY29udGFpbmVyU2hpZnRJbmRleCp2aWV3cG9ydFNpemUgd2lsbCBnaXZlIHlvdSBhbW91bnQgb2YgdHJhbnNmb3JtIG9mIHRoZSBjdXJyZW50IHNsaWRlXHJcbiAgICB0aGlzLl9jb250YWluZXJTaGlmdEluZGV4ID0gLTE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFwcGVuZCBhcnJheSBvZiB0aHJlZSBpdGVtc1xyXG4gICAqIHRoYXQgaG9sZCBkYXRhIGFib3V0IHNsaWRlcyBpbiBET01cclxuICAgKi9cclxuICBhcHBlbmRIb2xkZXJzKCkge1xyXG4gICAgdGhpcy5pdGVtSG9sZGVycyA9IFtdO1xyXG5cclxuICAgIC8vIGFwcGVuZCBvdXIgdGhyZWUgc2xpZGUgaG9sZGVycyAtXHJcbiAgICAvLyBwcmV2aW91cywgY3VycmVudCwgYW5kIG5leHRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudCgncHN3cF9faXRlbScsICdkaXYnLCB0aGlzLnBzd3AuY29udGFpbmVyKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1yb2xlZGVzY3JpcHRpb24nLCAnc2xpZGUnKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAvLyBoaWRlIG5lYXJieSBpdGVtIGhvbGRlcnMgdW50aWwgaW5pdGlhbCB6b29tIGFuaW1hdGlvbiBmaW5pc2hlcyAodG8gYXZvaWQgZXh0cmEgUGFpbnRzKVxyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gKGkgPT09IDEpID8gJ2Jsb2NrJyA6ICdub25lJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbUhvbGRlcnMucHVzaCh7XHJcbiAgICAgICAgZWwsXHJcbiAgICAgICAgLy9pbmRleDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBtYWluIHNjcm9sbCBjYW4gYmUgaG9yaXpvbnRhbGx5IHN3aXBlZCB0byB0aGUgbmV4dCBvciBwcmV2aW91cyBzbGlkZS5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjYW5CZVN3aXBlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBzd3AuZ2V0TnVtSXRlbXMoKSA+IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIG1haW4gc2Nyb2xsIGJ5IFggYW1vdW50IG9mIHNsaWRlcy5cclxuICAgKiBGb3IgZXhhbXBsZTpcclxuICAgKiAgIGAtMWAgd2lsbCBtb3ZlIHRvIHRoZSBwcmV2aW91cyBzbGlkZSxcclxuICAgKiAgICBgMGAgd2lsbCByZXNldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHNsaWRlLFxyXG4gICAqICAgIGAzYCB3aWxsIG1vdmUgdGhyZWUgc2xpZGVzIGZvcndhcmRcclxuICAgKlxyXG4gICAqIElmIGxvb3Agb3B0aW9uIGlzIGVuYWJsZWQgLSBpbmRleCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgbG9vcGVkIHRvbyxcclxuICAgKiAoZm9yIGV4YW1wbGUgYC0xYCB3aWxsIG1vdmUgdG8gdGhlIGxhc3Qgc2xpZGUgb2YgdGhlIGdhbGxlcnkpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpZmZcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlXVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHlYXVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIGluZGV4IHdhcyBjaGFuZ2VkIG9yIG5vdFxyXG4gICAqL1xyXG4gIG1vdmVJbmRleEJ5KGRpZmYsIGFuaW1hdGUsIHZlbG9jaXR5WCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgbGV0IG5ld0luZGV4ID0gcHN3cC5wb3RlbnRpYWxJbmRleCArIGRpZmY7XHJcbiAgICBjb25zdCBudW1TbGlkZXMgPSBwc3dwLmdldE51bUl0ZW1zKCk7XHJcblxyXG4gICAgaWYgKHBzd3AuY2FuTG9vcCgpKSB7XHJcbiAgICAgIG5ld0luZGV4ID0gcHN3cC5nZXRMb29wZWRJbmRleChuZXdJbmRleCk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGRpZmYgKyBudW1TbGlkZXMpICUgbnVtU2xpZGVzO1xyXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gbnVtU2xpZGVzIC8gMikge1xyXG4gICAgICAgIC8vIGdvIGZvcndhcmRcclxuICAgICAgICBkaWZmID0gZGlzdGFuY2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZ28gYmFja3dhcmRzXHJcbiAgICAgICAgZGlmZiA9IGRpc3RhbmNlIC0gbnVtU2xpZGVzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobmV3SW5kZXggPCAwKSB7XHJcbiAgICAgICAgbmV3SW5kZXggPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID49IG51bVNsaWRlcykge1xyXG4gICAgICAgIG5ld0luZGV4ID0gbnVtU2xpZGVzIC0gMTtcclxuICAgICAgfVxyXG4gICAgICBkaWZmID0gbmV3SW5kZXggLSBwc3dwLnBvdGVudGlhbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AucG90ZW50aWFsSW5kZXggPSBuZXdJbmRleDtcclxuICAgIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4IC09IGRpZmY7XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0b3BNYWluU2Nyb2xsKCk7XHJcblxyXG4gICAgY29uc3QgZGVzdGluYXRpb25YID0gdGhpcy5nZXRDdXJyU2xpZGVYKCk7XHJcbiAgICBpZiAoIWFuaW1hdGUpIHtcclxuICAgICAgdGhpcy5tb3ZlVG8oZGVzdGluYXRpb25YKTtcclxuICAgICAgdGhpcy51cGRhdGVDdXJySXRlbSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHN3cC5hbmltYXRpb25zLnN0YXJ0U3ByaW5nKHtcclxuICAgICAgICBpc01haW5TY3JvbGw6IHRydWUsXHJcbiAgICAgICAgc3RhcnQ6IHRoaXMueCxcclxuICAgICAgICBlbmQ6IGRlc3RpbmF0aW9uWCxcclxuICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHlYIHx8IDAsXHJcbiAgICAgICAgbmF0dXJhbEZyZXF1ZW5jeTogMzAsXHJcbiAgICAgICAgZGFtcGluZ1JhdGlvOiAxLCAvLzAuNyxcclxuICAgICAgICBvblVwZGF0ZTogKHgpID0+IHtcclxuICAgICAgICAgIHRoaXMubW92ZVRvKHgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJySXRlbSgpO1xyXG4gICAgICAgICAgcHN3cC5hcHBlbmRIZWF2eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgY3VyckRpZmYgPSBwc3dwLnBvdGVudGlhbEluZGV4IC0gcHN3cC5jdXJySW5kZXg7XHJcbiAgICAgIGlmIChwc3dwLmNhbkxvb3AoKSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJEaXN0YW5jZSA9IChjdXJyRGlmZiArIG51bVNsaWRlcykgJSBudW1TbGlkZXM7XHJcbiAgICAgICAgaWYgKGN1cnJEaXN0YW5jZSA8PSBudW1TbGlkZXMgLyAyKSB7XHJcbiAgICAgICAgICAvLyBnbyBmb3J3YXJkXHJcbiAgICAgICAgICBjdXJyRGlmZiA9IGN1cnJEaXN0YW5jZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZ28gYmFja3dhcmRzXHJcbiAgICAgICAgICBjdXJyRGlmZiA9IGN1cnJEaXN0YW5jZSAtIG51bVNsaWRlcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvcmNlLWFwcGVuZCBuZXcgc2xpZGVzIGR1cmluZyB0cmFuc2l0aW9uXHJcbiAgICAgIC8vIGlmIGRpZmZlcmVuY2UgYmV0d2VlbiBzbGlkZXMgaXMgbW9yZSB0aGFuIDFcclxuICAgICAgaWYgKE1hdGguYWJzKGN1cnJEaWZmKSA+IDEpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQm9vbGVhbihkaWZmKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFggcG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsIGZvciB0aGUgY3VycmVudCBzbGlkZVxyXG4gICAqIChpZ25vcmVzIHBvc2l0aW9uIGR1cmluZyBkcmFnZ2luZylcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldEN1cnJTbGlkZVgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zbGlkZVdpZHRoICogdGhpcy5fY3VyclBvc2l0aW9uSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHNjcm9sbCBwb3NpdGlvbiBpcyBzaGlmdGVkLlxyXG4gICAqIEZvciBleGFtcGxlLCBpdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSBzY3JvbGwgaXMgYmVpbmcgZHJhZ2dlZCBvciBhbmltYXRlZC5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1NoaWZ0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy54ICE9PSB0aGlzLmdldEN1cnJTbGlkZVgoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzbGlkZXMgWCBwb3NpdGlvbnMgYW5kIHNldCB0aGVpciBjb250ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlQ3Vyckl0ZW0oKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBwb3NpdGlvbkRpZmZlcmVuY2UgPSB0aGlzLl9wcmV2UG9zaXRpb25JbmRleCAtIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4O1xyXG5cclxuICAgIGlmICghcG9zaXRpb25EaWZmZXJlbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9wcmV2UG9zaXRpb25JbmRleCA9IHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4O1xyXG5cclxuICAgIHBzd3AuY3VyckluZGV4ID0gcHN3cC5wb3RlbnRpYWxJbmRleDtcclxuXHJcbiAgICBsZXQgZGlmZkFicyA9IE1hdGguYWJzKHBvc2l0aW9uRGlmZmVyZW5jZSk7XHJcbiAgICAvKiogQHR5cGUge0l0ZW1Ib2xkZXIgfCB1bmRlZmluZWR9ICovXHJcbiAgICBsZXQgdGVtcEhvbGRlcjtcclxuXHJcbiAgICBpZiAoZGlmZkFicyA+PSAzKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXggKz0gcG9zaXRpb25EaWZmZXJlbmNlICsgKHBvc2l0aW9uRGlmZmVyZW5jZSA+IDAgPyAtMyA6IDMpO1xyXG4gICAgICBkaWZmQWJzID0gMztcclxuXHJcbiAgICAgIC8vIElmIHNsaWRlcyBhcmUgY2hhbmdlZCBieSAzIHNjcmVlbnMgb3IgbW9yZSAtIGNsZWFuIHVwIHByZXZpb3VzIHNsaWRlc1xyXG4gICAgICB0aGlzLml0ZW1Ib2xkZXJzLmZvckVhY2goKGl0ZW1Ib2xkZXIpID0+IHtcclxuICAgICAgICBpdGVtSG9sZGVyLnNsaWRlPy5kZXN0cm95KCk7XHJcbiAgICAgICAgaXRlbUhvbGRlci5zbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmQWJzOyBpKyspIHtcclxuICAgICAgaWYgKHBvc2l0aW9uRGlmZmVyZW5jZSA+IDApIHtcclxuICAgICAgICB0ZW1wSG9sZGVyID0gdGhpcy5pdGVtSG9sZGVycy5zaGlmdCgpO1xyXG4gICAgICAgIGlmICh0ZW1wSG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLml0ZW1Ib2xkZXJzWzJdID0gdGVtcEhvbGRlcjsgLy8gbW92ZSBmaXJzdCB0byBsYXN0XHJcblxyXG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCsrO1xyXG5cclxuICAgICAgICAgIHNldFRyYW5zZm9ybSh0ZW1wSG9sZGVyLmVsLCAodGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCArIDIpICogdGhpcy5zbGlkZVdpZHRoKTtcclxuXHJcbiAgICAgICAgICBwc3dwLnNldENvbnRlbnQodGVtcEhvbGRlciwgKHBzd3AuY3VyckluZGV4IC0gZGlmZkFicykgKyBpICsgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlbXBIb2xkZXIgPSB0aGlzLml0ZW1Ib2xkZXJzLnBvcCgpO1xyXG4gICAgICAgIGlmICh0ZW1wSG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLml0ZW1Ib2xkZXJzLnVuc2hpZnQodGVtcEhvbGRlcik7IC8vIG1vdmUgbGFzdCB0byBmaXJzdFxyXG5cclxuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXgtLTtcclxuXHJcbiAgICAgICAgICBzZXRUcmFuc2Zvcm0odGVtcEhvbGRlci5lbCwgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCAqIHRoaXMuc2xpZGVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgcHN3cC5zZXRDb250ZW50KHRlbXBIb2xkZXIsIChwc3dwLmN1cnJJbmRleCArIGRpZmZBYnMpIC0gaSAtIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHRyYW5zZnJvbSBldmVyeSA1MGlzaCBuYXZpZ2F0aW9ucyBpbiBvbmUgZGlyZWN0aW9uLlxyXG4gICAgLy9cclxuICAgIC8vIE90aGVyd2lzZSB0cmFuc2Zvcm0gd2lsbCBrZWVwIGdyb3dpbmcgaW5kZWZpbml0ZWx5LFxyXG4gICAgLy8gd2hpY2ggbWlnaHQgY2F1c2UgaXNzdWVzIGFzIGJyb3dzZXJzIGhhdmUgYSBtYXhpbXVtIHRyYW5zZm9ybSBsaW1pdC5cclxuICAgIC8vIEkgd2Fzbid0IGFibGUgdG8gcmVhY2ggaXQsIGJ1dCBqdXN0IHRvIGJlIHNhZmUuXHJcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgY2F1c2Ugbm90aWNhYmxlIGxhZy5cclxuICAgIGlmIChNYXRoLmFicyh0aGlzLl9jb250YWluZXJTaGlmdEluZGV4KSA+IDUwICYmICF0aGlzLmlzU2hpZnRlZCgpKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhbiB0cmFuc2l0aW9uIG1pZ2h0IGJlIHJ1bm5pbmcgKGFuZCBjb25zbnRhbnRseSB1cGRhdGluZyBwYW4gcG9zaXRpb24pXHJcbiAgICBwc3dwLmFuaW1hdGlvbnMuc3RvcEFsbFBhbigpO1xyXG5cclxuICAgIHRoaXMuaXRlbUhvbGRlcnMuZm9yRWFjaCgoaXRlbUhvbGRlciwgaSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbUhvbGRlci5zbGlkZSkge1xyXG4gICAgICAgIC8vIFNsaWRlIGluIHRoZSAybmQgaG9sZGVyIGlzIGFsd2F5cyBhY3RpdmVcclxuICAgICAgICBpdGVtSG9sZGVyLnNsaWRlLnNldElzQWN0aXZlKGkgPT09IDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwc3dwLmN1cnJTbGlkZSA9IHRoaXMuaXRlbUhvbGRlcnNbMV0/LnNsaWRlO1xyXG4gICAgcHN3cC5jb250ZW50TG9hZGVyLnVwZGF0ZUxhenkocG9zaXRpb25EaWZmZXJlbmNlKTtcclxuXHJcbiAgICBpZiAocHN3cC5jdXJyU2xpZGUpIHtcclxuICAgICAgcHN3cC5jdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuZGlzcGF0Y2goJ2NoYW5nZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgWCBwb3NpdGlvbiBvZiB0aGUgbWFpbiBzY3JvbGwgY29udGFpbmVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RyYWdnaW5nXVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCBkcmFnZ2luZykge1xyXG4gICAgaWYgKCF0aGlzLnBzd3AuY2FuTG9vcCgpICYmIGRyYWdnaW5nKSB7XHJcbiAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXHJcbiAgICAgIGxldCBuZXdTbGlkZUluZGV4T2Zmc2V0ID0gKCh0aGlzLnNsaWRlV2lkdGggKiB0aGlzLl9jdXJyUG9zaXRpb25JbmRleCkgLSB4KSAvIHRoaXMuc2xpZGVXaWR0aDtcclxuICAgICAgbmV3U2xpZGVJbmRleE9mZnNldCArPSB0aGlzLnBzd3AuY3VyckluZGV4O1xyXG4gICAgICBjb25zdCBkZWx0YSA9IE1hdGgucm91bmQoeCAtIHRoaXMueCk7XHJcblxyXG4gICAgICBpZiAoKG5ld1NsaWRlSW5kZXhPZmZzZXQgPCAwICYmIGRlbHRhID4gMClcclxuICAgICAgICAgIHx8IChuZXdTbGlkZUluZGV4T2Zmc2V0ID49IHRoaXMucHN3cC5nZXROdW1JdGVtcygpIC0gMSAmJiBkZWx0YSA8IDApKSB7XHJcbiAgICAgICAgeCA9IHRoaXMueCArIChkZWx0YSAqIE1BSU5fU0NST0xMX0VORF9GUklDVElPTik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3AuY29udGFpbmVyKSB7XHJcbiAgICAgIHNldFRyYW5zZm9ybSh0aGlzLnBzd3AuY29udGFpbmVyLCB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ21vdmVNYWluU2Nyb2xsJywgeyB4LCBkcmFnZ2luZzogZHJhZ2dpbmcgPz8gZmFsc2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluU2Nyb2xsO1xyXG4iLCJpbXBvcnQgeyBzcGVjaWFsS2V5VXNlZCB9IGZyb20gJy4vdXRpbC91dGlsLmpzJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi90eXBlcy5qcycpLk1ldGhvZHM8VD59IE1ldGhvZHM8VD5cclxuICovXHJcblxyXG5jb25zdCBLZXlib2FyZEtleUNvZGVzTWFwID0ge1xyXG4gIEVzY2FwZTogMjcsXHJcbiAgejogOTAsXHJcbiAgQXJyb3dMZWZ0OiAzNyxcclxuICBBcnJvd1VwOiAzOCxcclxuICBBcnJvd1JpZ2h0OiAzOSxcclxuICBBcnJvd0Rvd246IDQwLFxyXG4gIFRhYjogOSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIEtleWJvYXJkS2V5Q29kZXNNYXB9IFRcclxuICogQHBhcmFtIHtUfSBrZXlcclxuICogQHBhcmFtIHtib29sZWFufSBpc0tleVN1cHBvcnRlZFxyXG4gKiBAcmV0dXJucyB7VCB8IG51bWJlciB8IHVuZGVmaW5lZH1cclxuICovXHJcbmNvbnN0IGdldEtleWJvYXJkRXZlbnRLZXkgPSAoa2V5LCBpc0tleVN1cHBvcnRlZCkgPT4ge1xyXG4gIHJldHVybiBpc0tleVN1cHBvcnRlZCA/IGtleSA6IEtleWJvYXJkS2V5Q29kZXNNYXBba2V5XTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiAtIE1hbmFnZXMga2V5Ym9hcmQgc2hvcnRjdXRzLlxyXG4gKiAtIEhlbHBzIHRyYXAgZm9jdXMgd2l0aGluIHBob3Rvc3dpcGUuXHJcbiAqL1xyXG5jbGFzcyBLZXlib2FyZCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fd2FzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHBzd3Aub24oJ2JpbmRFdmVudHMnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChwc3dwLm9wdGlvbnMudHJhcEZvY3VzKSB7XHJcbiAgICAgICAgLy8gRGlhbG9nIHdhcyBsaWtlbHkgb3BlbmVkIGJ5IGtleWJvYXJkIGlmIGluaXRpYWwgcG9pbnQgaXMgbm90IGRlZmluZWRcclxuICAgICAgICBpZiAoIXBzd3Aub3B0aW9ucy5pbml0aWFsUG9pbnRlclBvcykge1xyXG4gICAgICAgICAgLy8gZm9jdXMgY2F1c2VzIGxheW91dCxcclxuICAgICAgICAgIC8vIHdoaWNoIGNhdXNlcyBsYWcgZHVyaW5nIHRoZSBhbmltYXRpb24sXHJcbiAgICAgICAgICAvLyB0aGF0J3Mgd2h5IHdlIGRlbGF5IGl0IHVudGlsIHRoZSBvcGVuZXIgdHJhbnNpdGlvbiBlbmRzXHJcbiAgICAgICAgICB0aGlzLl9mb2N1c1Jvb3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBzd3AuZXZlbnRzLmFkZChcclxuICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgJ2ZvY3VzaW4nLFxyXG4gICAgICAgICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5fb25Gb2N1c0luLmJpbmQodGhpcykpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHN3cC5ldmVudHMuYWRkKGRvY3VtZW50LCAna2V5ZG93bicsIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsYXN0QWN0aXZlRWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIHBzd3Aub24oJ2Rlc3Ryb3knLCAoKSA9PiB7XHJcbiAgICAgIGlmIChwc3dwLm9wdGlvbnMucmV0dXJuRm9jdXNcclxuICAgICAgICAgICYmIGxhc3RBY3RpdmVFbGVtZW50XHJcbiAgICAgICAgICAmJiB0aGlzLl93YXNGb2N1c2VkKSB7XHJcbiAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfZm9jdXNSb290KCkge1xyXG4gICAgaWYgKCF0aGlzLl93YXNGb2N1c2VkICYmIHRoaXMucHN3cC5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucHN3cC5lbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHRoaXMuX3dhc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25LZXlEb3duKGUpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAocHN3cC5kaXNwYXRjaCgna2V5ZG93bicsIHsgb3JpZ2luYWxFdmVudDogZSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3BlY2lhbEtleVVzZWQoZSkpIHtcclxuICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc3BlY2lhbCBrZXkgcHJlc3NlZFxyXG4gICAgICAvLyB0byBwcmV2ZW50IGZyb20gb3ZlcnJpZGluZyBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uc1xyXG4gICAgICAvLyBmb3IgZXhhbXBsZSwgaW4gQ2hyb21lIG9uIE1hYyBjbWQrYXJyb3ctbGVmdCByZXR1cm5zIHRvIHByZXZpb3VzIHBhZ2VcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAdHlwZSB7TWV0aG9kczxQaG90b1N3aXBlPiB8IHVuZGVmaW5lZH0gKi9cclxuICAgIGxldCBrZXlkb3duQWN0aW9uO1xyXG4gICAgLyoqIEB0eXBlIHsneCcgfCAneScgfCB1bmRlZmluZWR9ICovXHJcbiAgICBsZXQgYXhpcztcclxuICAgIGxldCBpc0ZvcndhcmQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzS2V5U3VwcG9ydGVkID0gJ2tleScgaW4gZTtcclxuXHJcbiAgICBzd2l0Y2ggKGlzS2V5U3VwcG9ydGVkID8gZS5rZXkgOiBlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCdFc2NhcGUnLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAgaWYgKHBzd3Aub3B0aW9ucy5lc2NLZXkpIHtcclxuICAgICAgICAgIGtleWRvd25BY3Rpb24gPSAnY2xvc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCd6JywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIGtleWRvd25BY3Rpb24gPSAndG9nZ2xlWm9vbSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgnQXJyb3dMZWZ0JywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIGF4aXMgPSAneCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgnQXJyb3dVcCcsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICBheGlzID0gJ3knO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ0Fycm93UmlnaHQnLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAgYXhpcyA9ICd4JztcclxuICAgICAgICBpc0ZvcndhcmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ0Fycm93RG93bicsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICBpc0ZvcndhcmQgPSB0cnVlO1xyXG4gICAgICAgIGF4aXMgPSAneSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgnVGFiJywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIHRoaXMuX2ZvY3VzUm9vdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGxlZnQvcmlnaHQvdG9wL2JvdHRvbSBrZXlcclxuICAgIGlmIChheGlzKSB7XHJcbiAgICAgIC8vIHByZXZlbnQgcGFnZSBzY3JvbGxcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHBzd3A7XHJcblxyXG4gICAgICBpZiAocHN3cC5vcHRpb25zLmFycm93S2V5c1xyXG4gICAgICAgICAgJiYgYXhpcyA9PT0gJ3gnXHJcbiAgICAgICAgICAmJiBwc3dwLmdldE51bUl0ZW1zKCkgPiAxKSB7XHJcbiAgICAgICAga2V5ZG93bkFjdGlvbiA9IGlzRm9yd2FyZCA/ICduZXh0JyA6ICdwcmV2JztcclxuICAgICAgfSBlbHNlIGlmIChjdXJyU2xpZGUgJiYgY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgPiBjdXJyU2xpZGUuem9vbUxldmVscy5maXQpIHtcclxuICAgICAgICAvLyB1cC9kb3duIGFycm93IGtleXMgcGFuIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgLy8gbGVmdC9yaWdodCBhcnJvdyBrZXlzIHBhbiBob3Jpem9udGFsbHkuXHJcbiAgICAgICAgLy8gVW5sZXNzIHRoZXJlIGlzIG9ubHkgb25lIGltYWdlLFxyXG4gICAgICAgIC8vIG9yIGFycm93S2V5cyBvcHRpb24gaXMgZGlzYWJsZWRcclxuICAgICAgICBjdXJyU2xpZGUucGFuW2F4aXNdICs9IGlzRm9yd2FyZCA/IC04MCA6IDgwO1xyXG4gICAgICAgIGN1cnJTbGlkZS5wYW5UbyhjdXJyU2xpZGUucGFuLngsIGN1cnJTbGlkZS5wYW4ueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoa2V5ZG93bkFjdGlvbikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcHN3cFtrZXlkb3duQWN0aW9uXSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhcCBmb2N1cyBpbnNpZGUgcGhvdG9zd2lwZVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25Gb2N1c0luKGUpIHtcclxuICAgIGNvbnN0IHsgdGVtcGxhdGUgfSA9IHRoaXMucHN3cDtcclxuICAgIGlmICh0ZW1wbGF0ZVxyXG4gICAgICAgICYmIGRvY3VtZW50ICE9PSBlLnRhcmdldFxyXG4gICAgICAgICYmIHRlbXBsYXRlICE9PSBlLnRhcmdldFxyXG4gICAgICAgICYmICF0ZW1wbGF0ZS5jb250YWlucygvKiogQHR5cGUge05vZGV9ICovIChlLnRhcmdldCkpKSB7XHJcbiAgICAgIC8vIGZvY3VzIHJvb3QgZWxlbWVudFxyXG4gICAgICB0ZW1wbGF0ZS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmQ7XHJcbiIsImltcG9ydCB7IHNldFRyYW5zaXRpb25TdHlsZSwgcmVtb3ZlVHJhbnNpdGlvblN0eWxlIH0gZnJvbSAnLi91dGlsLmpzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfRUFTSU5HID0gJ2N1YmljLWJlemllciguNCwwLC4yMiwxKSc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9hbmltYXRpb25zLmpzJykuU2hhcmVkQW5pbWF0aW9uUHJvcHN9IFNoYXJlZEFuaW1hdGlvblByb3BzICovXHJcblxyXG4vKiogQHR5cGVkZWYge09iamVjdH0gRGVmYXVsdENzc0FuaW1hdGlvblByb3BzXHJcbiAqXHJcbiAqIEBwcm9wIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAqIEBwcm9wIHtudW1iZXJ9IFtkdXJhdGlvbl1cclxuICogQHByb3Age3N0cmluZ30gW2Vhc2luZ11cclxuICogQHByb3Age3N0cmluZ30gW3RyYW5zZm9ybV1cclxuICogQHByb3Age3N0cmluZ30gW29wYWNpdHldXHJcbiAqICovXHJcblxyXG4vKiogQHR5cGVkZWYge1NoYXJlZEFuaW1hdGlvblByb3BzICYgRGVmYXVsdENzc0FuaW1hdGlvblByb3BzfSBDc3NBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLyoqXHJcbiAqIFJ1bnMgQ1NTIHRyYW5zaXRpb24uXHJcbiAqL1xyXG5jbGFzcyBDU1NBbmltYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIG9uQ29tcGxldGUgY2FuIGJlIHVucHJlZGljdGFibGUsIGJlIGNhcmVmdWwgYWJvdXQgY3VycmVudCBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDc3NBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIG9uQ29tcGxldGUsXHJcbiAgICAgIHRyYW5zZm9ybSxcclxuICAgICAgb25GaW5pc2ggPSAoKSA9PiB7fSxcclxuICAgICAgZHVyYXRpb24gPSAzMzMsXHJcbiAgICAgIGVhc2luZyA9IERFRkFVTFRfRUFTSU5HLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHRoaXMub25GaW5pc2ggPSBvbkZpbmlzaDtcclxuXHJcbiAgICAvLyBzdXBwb3J0IG9ubHkgdHJhbnNmb3JtIGFuZCBvcGFjaXR5XHJcbiAgICBjb25zdCBwcm9wID0gdHJhbnNmb3JtID8gJ3RyYW5zZm9ybScgOiAnb3BhY2l0eSc7XHJcbiAgICBjb25zdCBwcm9wVmFsdWUgPSBwcm9wc1twcm9wXSA/PyAnJztcclxuXHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fb25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9vblRyYW5zaXRpb25FbmQgPSB0aGlzLl9vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAvLyBVc2luZyB0aW1lb3V0IGhhY2sgdG8gbWFrZSBzdXJlIHRoYXQgYW5pbWF0aW9uXHJcbiAgICAvLyBzdGFydHMgZXZlbiBpZiB0aGUgYW5pbWF0ZWQgcHJvcGVydHkgd2FzIGNoYW5nZWQgcmVjZW50bHksXHJcbiAgICAvLyBvdGhlcndpc2UgdHJhbnNpdGlvbmVuZCBtaWdodCBub3QgZmlyZSBvciB0cmFuc2l0aW9uIHdvbid0IHN0YXJ0LlxyXG4gICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy10cmFuc2l0aW9ucy8jc3RhcnRpbmdcclxuICAgIC8vXHJcbiAgICAvLyDCr1xcXyjjg4QpXy/Cr1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9oZWxwZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFRyYW5zaXRpb25TdHlsZSh0YXJnZXQsIHByb3AsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gICAgICB0aGlzLl9oZWxwZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmNhbmNlbCcsIHRoaXMuX29uVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBTYWZhcmkgb2NjYXNpb25hbGx5IGRvZXMgbm90IGVtaXQgdHJhbnNpdGlvbmVuZCBldmVudFxyXG4gICAgICAgIC8vIGlmIGVsZW1lbnQgcHJvcGVydHkgd2FzIG1vZGlmaWVkIGR1cmluZyB0aGUgdHJhbnNpdGlvbixcclxuICAgICAgICAvLyB3aGljaCBtYXkgYmUgY2F1c2VkIGJ5IHJlc2l6ZSBvciB0aGlyZCBwYXJ0eSBjb21wb25lbnQsXHJcbiAgICAgICAgLy8gdXNpbmcgdGltZW91dCBhcyBhIHNhZmV0eSBmYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2hlbHBlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2ZpbmFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSwgZHVyYXRpb24gKyA1MDApO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IHByb3BWYWx1ZTtcclxuICAgICAgfSwgMzApOyAvLyBEbyBub3QgcmVkdWNlIHRoaXMgbnVtYmVyXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25UcmFuc2l0aW9uRW5kKGUpIHtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5fdGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuX2ZpbmFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9maW5hbGl6ZUFuaW1hdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5fZmluaXNoZWQpIHtcclxuICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZXN0cm95IGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IG9uRmluaXNoXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9oZWxwZXJUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oZWxwZXJUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIHJlbW92ZVRyYW5zaXRpb25TdHlsZSh0aGlzLl90YXJnZXQpO1xyXG4gICAgdGhpcy5fdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgIHRoaXMuX3RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uY2FuY2VsJywgdGhpcy5fb25UcmFuc2l0aW9uRW5kLCBmYWxzZSk7XHJcbiAgICBpZiAoIXRoaXMuX2ZpbmlzaGVkKSB7XHJcbiAgICAgIHRoaXMuX2ZpbmFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDU1NBbmltYXRpb247XHJcbiIsImNvbnN0IERFRkFVTFRfTkFUVVJBTF9GUkVRVUVOQ1kgPSAxMjtcclxuY29uc3QgREVGQVVMVF9EQU1QSU5HX1JBVElPID0gMC43NTtcclxuXHJcbi8qKlxyXG4gKiBTcHJpbmcgZWFzaW5nIGhlbHBlclxyXG4gKi9cclxuY2xhc3MgU3ByaW5nRWFzZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbml0aWFsVmVsb2NpdHkgSW5pdGlhbCB2ZWxvY2l0eSwgcHggcGVyIG1zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYW1waW5nUmF0aW9dXHJcbiAgICogRGV0ZXJtaW5lcyBob3cgYm91bmN5IGFuaW1hdGlvbiB3aWxsIGJlLlxyXG4gICAqIEZyb20gMCB0byAxLCAwIC0gYWx3YXlzIG92ZXJzaG9vdCwgMSAtIGRvIG5vdCBvdmVyc2hvb3QuXHJcbiAgICogXCJvdmVyc2hvb3RcIiByZWZlcnMgdG8gcGFydCBvZiBhbmltYXRpb24gdGhhdFxyXG4gICAqIGdvZXMgYmV5b25kIHRoZSBmaW5hbCB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbmF0dXJhbEZyZXF1ZW5jeV1cclxuICAgKiBEZXRlcm1pbmVzIGhvdyBmYXN0IGFuaW1hdGlvbiB3aWxsIHNsb3cgZG93bi5cclxuICAgKiBUaGUgaGlnaGVyIHZhbHVlIC0gdGhlIHN0aWZmZXIgdGhlIHRyYW5zaXRpb24gd2lsbCBiZSxcclxuICAgKiBhbmQgdGhlIGZhc3RlciBpdCB3aWxsIHNsb3cgZG93bi5cclxuICAgKiBSZWNvbW1lbmRlZCB2YWx1ZSBmcm9tIDEwIHRvIDUwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZlbG9jaXR5LCBkYW1waW5nUmF0aW8sIG5hdHVyYWxGcmVxdWVuY3kpIHtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBpbml0aWFsVmVsb2NpdHkgKiAxMDAwOyAvLyBjb252ZXJ0IHRvIFwicGl4ZWxzIHBlciBzZWNvbmRcIlxyXG5cclxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RhbXBpbmdfcmF0aW9cclxuICAgIHRoaXMuX2RhbXBpbmdSYXRpbyA9IGRhbXBpbmdSYXRpbyB8fCBERUZBVUxUX0RBTVBJTkdfUkFUSU87XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmF0dXJhbF9mcmVxdWVuY3lcclxuICAgIHRoaXMuX25hdHVyYWxGcmVxdWVuY3kgPSBuYXR1cmFsRnJlcXVlbmN5IHx8IERFRkFVTFRfTkFUVVJBTF9GUkVRVUVOQ1k7XHJcblxyXG4gICAgdGhpcy5fZGFtcGVkRnJlcXVlbmN5ID0gdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGFtcGluZ1JhdGlvIDwgMSkge1xyXG4gICAgICB0aGlzLl9kYW1wZWRGcmVxdWVuY3kgKj0gTWF0aC5zcXJ0KDEgLSB0aGlzLl9kYW1waW5nUmF0aW8gKiB0aGlzLl9kYW1waW5nUmF0aW8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhUG9zaXRpb24gRGlmZmVyZW5jZSBiZXR3ZWVuIGN1cnJlbnQgYW5kIGVuZCBwb3NpdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhVGltZSBGcmFtZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IERpc3BsYWNlbWVudCwgcmVsYXRpdmUgdG8gdGhlIGVuZCBwb3NpdGlvbi5cclxuICAgKi9cclxuICBlYXNlRnJhbWUoZGVsdGFQb3NpdGlvbiwgZGVsdGFUaW1lKSB7XHJcbiAgICAvLyBJbnNwaXJlZCBieSBBcHBsZSBXZWJraXQgYW5kIEFuZHJvaWQgc3ByaW5nIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uXHJcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Pc2NpbGxhdGlvblxyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGFtcGluZ19yYXRpb1xyXG4gICAgLy8gd2UgaWdub3JlIG1hc3MgKGFzc3VtZSB0aGF0IGl0J3MgMWtnKVxyXG5cclxuICAgIGxldCBkaXNwbGFjZW1lbnQgPSAwO1xyXG4gICAgbGV0IGNvZWZmO1xyXG5cclxuICAgIGRlbHRhVGltZSAvPSAxMDAwO1xyXG5cclxuICAgIGNvbnN0IG5hdHVyYWxEdW1waW5nUG93ID0gTWF0aC5FICoqICgtdGhpcy5fZGFtcGluZ1JhdGlvICogdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeSAqIGRlbHRhVGltZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhbXBpbmdSYXRpbyA9PT0gMSkge1xyXG4gICAgICBjb2VmZiA9IHRoaXMudmVsb2NpdHkgKyB0aGlzLl9uYXR1cmFsRnJlcXVlbmN5ICogZGVsdGFQb3NpdGlvbjtcclxuXHJcbiAgICAgIGRpc3BsYWNlbWVudCA9IChkZWx0YVBvc2l0aW9uICsgY29lZmYgKiBkZWx0YVRpbWUpICogbmF0dXJhbER1bXBpbmdQb3c7XHJcblxyXG4gICAgICB0aGlzLnZlbG9jaXR5ID0gZGlzcGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogKC10aGlzLl9uYXR1cmFsRnJlcXVlbmN5KSArIGNvZWZmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogbmF0dXJhbER1bXBpbmdQb3c7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RhbXBpbmdSYXRpbyA8IDEpIHtcclxuICAgICAgY29lZmYgPSAoMSAvIHRoaXMuX2RhbXBlZEZyZXF1ZW5jeSlcclxuICAgICAgICAgICAgICAgICogKHRoaXMuX2RhbXBpbmdSYXRpbyAqIHRoaXMuX25hdHVyYWxGcmVxdWVuY3kgKiBkZWx0YVBvc2l0aW9uICsgdGhpcy52ZWxvY2l0eSk7XHJcblxyXG4gICAgICBjb25zdCBkdW1wZWRGQ29zID0gTWF0aC5jb3ModGhpcy5fZGFtcGVkRnJlcXVlbmN5ICogZGVsdGFUaW1lKTtcclxuICAgICAgY29uc3QgZHVtcGVkRlNpbiA9IE1hdGguc2luKHRoaXMuX2RhbXBlZEZyZXF1ZW5jeSAqIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICBkaXNwbGFjZW1lbnQgPSBuYXR1cmFsRHVtcGluZ1Bvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICogKGRlbHRhUG9zaXRpb24gKiBkdW1wZWRGQ29zICsgY29lZmYgKiBkdW1wZWRGU2luKTtcclxuXHJcbiAgICAgIHRoaXMudmVsb2NpdHkgPSBkaXNwbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKiAoLXRoaXMuX25hdHVyYWxGcmVxdWVuY3kpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogdGhpcy5fZGFtcGluZ1JhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgbmF0dXJhbER1bXBpbmdQb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgKiAoLXRoaXMuX2RhbXBlZEZyZXF1ZW5jeSAqIGRlbHRhUG9zaXRpb24gKiBkdW1wZWRGU2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgdGhpcy5fZGFtcGVkRnJlcXVlbmN5ICogY29lZmYgKiBkdW1wZWRGQ29zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVyZGFtcGVkICg+MSkgZGFtcGluZyByYXRpbyBpcyBub3Qgc3VwcG9ydGVkXHJcblxyXG4gICAgcmV0dXJuIGRpc3BsYWNlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcmluZ0Vhc2VyO1xyXG4iLCJpbXBvcnQgU3ByaW5nRWFzZXIgZnJvbSAnLi9zcHJpbmctZWFzZXIuanMnO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vYW5pbWF0aW9ucy5qcycpLlNoYXJlZEFuaW1hdGlvblByb3BzfSBTaGFyZWRBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRTcHJpbmdBbmltYXRpb25Qcm9wc1xyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyfSBzdGFydFxyXG4gKiBAcHJvcCB7bnVtYmVyfSBlbmRcclxuICogQHByb3Age251bWJlcn0gdmVsb2NpdHlcclxuICogQHByb3Age251bWJlcn0gW2RhbXBpbmdSYXRpb11cclxuICogQHByb3Age251bWJlcn0gW25hdHVyYWxGcmVxdWVuY3ldXHJcbiAqIEBwcm9wIHsoZW5kOiBudW1iZXIpID0+IHZvaWR9IG9uVXBkYXRlXHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtTaGFyZWRBbmltYXRpb25Qcm9wcyAmIERlZmF1bHRTcHJpbmdBbmltYXRpb25Qcm9wc30gU3ByaW5nQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbmNsYXNzIFNwcmluZ0FuaW1hdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTcHJpbmdBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5fcmFmID0gMDtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHN0YXJ0LFxyXG4gICAgICBlbmQsXHJcbiAgICAgIHZlbG9jaXR5LFxyXG4gICAgICBvblVwZGF0ZSxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgb25GaW5pc2ggPSAoKSA9PiB7fSxcclxuICAgICAgZGFtcGluZ1JhdGlvLFxyXG4gICAgICBuYXR1cmFsRnJlcXVlbmN5XHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgdGhpcy5vbkZpbmlzaCA9IG9uRmluaXNoO1xyXG5cclxuICAgIGNvbnN0IGVhc2VyID0gbmV3IFNwcmluZ0Vhc2VyKHZlbG9jaXR5LCBkYW1waW5nUmF0aW8sIG5hdHVyYWxGcmVxdWVuY3kpO1xyXG4gICAgbGV0IHByZXZUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBkZWx0YVBvc2l0aW9uID0gc3RhcnQgLSBlbmQ7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0aW9uTG9vcCA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3JhZikge1xyXG4gICAgICAgIGRlbHRhUG9zaXRpb24gPSBlYXNlci5lYXNlRnJhbWUoZGVsdGFQb3NpdGlvbiwgRGF0ZS5ub3coKSAtIHByZXZUaW1lKTtcclxuXHJcbiAgICAgICAgLy8gU3RvcCB0aGUgYW5pbWF0aW9uIGlmIHZlbG9jaXR5IGlzIGxvdyBhbmQgcG9zaXRpb24gaXMgY2xvc2UgdG8gZW5kXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhUG9zaXRpb24pIDwgMSAmJiBNYXRoLmFicyhlYXNlci52ZWxvY2l0eSkgPCA1MCkge1xyXG4gICAgICAgICAgLy8gRmluYWxpemUgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgb25VcGRhdGUoZW5kKTtcclxuICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJldlRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgb25VcGRhdGUoZGVsdGFQb3NpdGlvbiArIGVuZCk7XHJcbiAgICAgICAgICB0aGlzLl9yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcclxuICB9XHJcblxyXG4gIC8vIERlc3Ryb3kgaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgb25GaW5pc2hcclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX3JhZiA+PSAwKSB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JhZik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yYWYgPSAwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaW5nQW5pbWF0aW9uO1xyXG4iLCJpbXBvcnQgQ1NTQW5pbWF0aW9uIGZyb20gJy4vY3NzLWFuaW1hdGlvbi5qcyc7XHJcbmltcG9ydCBTcHJpbmdBbmltYXRpb24gZnJvbSAnLi9zcHJpbmctYW5pbWF0aW9uLmpzJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Nzcy1hbmltYXRpb24uanMnKS5Dc3NBbmltYXRpb25Qcm9wc30gQ3NzQW5pbWF0aW9uUHJvcHMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc3ByaW5nLWFuaW1hdGlvbi5qcycpLlNwcmluZ0FuaW1hdGlvblByb3BzfSBTcHJpbmdBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtPYmplY3R9IFNoYXJlZEFuaW1hdGlvblByb3BzXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtuYW1lXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2lzUGFuXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2lzTWFpblNjcm9sbF1cclxuICogQHByb3Age1ZvaWRGdW5jdGlvbn0gW29uQ29tcGxldGVdXHJcbiAqIEBwcm9wIHtWb2lkRnVuY3Rpb259IFtvbkZpbmlzaF1cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge1NwcmluZ0FuaW1hdGlvbiB8IENTU0FuaW1hdGlvbn0gQW5pbWF0aW9uICovXHJcbi8qKiBAdHlwZWRlZiB7U3ByaW5nQW5pbWF0aW9uUHJvcHMgfCBDc3NBbmltYXRpb25Qcm9wc30gQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGFuaW1hdGlvbnNcclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEB0eXBlIHtBbmltYXRpb25bXX0gKi9cclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTcHJpbmdBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBzdGFydFNwcmluZyhwcm9wcykge1xyXG4gICAgdGhpcy5fc3RhcnQocHJvcHMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDc3NBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBzdGFydFRyYW5zaXRpb24ocHJvcHMpIHtcclxuICAgIHRoaXMuX3N0YXJ0KHByb3BzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1NwcmluZ11cclxuICAgKiBAcmV0dXJucyB7QW5pbWF0aW9ufVxyXG4gICAqL1xyXG4gIF9zdGFydChwcm9wcywgaXNTcHJpbmcpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGlzU3ByaW5nXHJcbiAgICAgID8gbmV3IFNwcmluZ0FuaW1hdGlvbigvKiogQHR5cGUgU3ByaW5nQW5pbWF0aW9uUHJvcHMgKi8gKHByb3BzKSlcclxuICAgICAgOiBuZXcgQ1NTQW5pbWF0aW9uKC8qKiBAdHlwZSBDc3NBbmltYXRpb25Qcm9wcyAqLyAocHJvcHMpKTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xyXG4gICAgYW5pbWF0aW9uLm9uRmluaXNoID0gKCkgPT4gdGhpcy5zdG9wKGFuaW1hdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGFuaW1hdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9ufSBhbmltYXRpb25cclxuICAgKi9cclxuICBzdG9wKGFuaW1hdGlvbikge1xyXG4gICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hY3RpdmVBbmltYXRpb25zLmluZGV4T2YoYW5pbWF0aW9uKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEFsbCgpIHsgLy8gX3N0b3BBbGxBbmltYXRpb25zXHJcbiAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhbGwgcGFuIG9yIHpvb20gdHJhbnNpdGlvbnNcclxuICAgKi9cclxuICBzdG9wQWxsUGFuKCkge1xyXG4gICAgdGhpcy5hY3RpdmVBbmltYXRpb25zID0gdGhpcy5hY3RpdmVBbmltYXRpb25zLmZpbHRlcigoYW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChhbmltYXRpb24ucHJvcHMuaXNQYW4pIHtcclxuICAgICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0b3BNYWluU2Nyb2xsKCkge1xyXG4gICAgdGhpcy5hY3RpdmVBbmltYXRpb25zID0gdGhpcy5hY3RpdmVBbmltYXRpb25zLmZpbHRlcigoYW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChhbmltYXRpb24ucHJvcHMuaXNNYWluU2Nyb2xsKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgbWFpbiBzY3JvbGwgdHJhbnNpdGlvbiBpcyBydW5uaW5nXHJcbiAgICovXHJcbiAgLy8gaXNNYWluU2Nyb2xsUnVubmluZygpIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuc29tZSgoYW5pbWF0aW9uKSA9PiB7XHJcbiAgLy8gICAgIHJldHVybiBhbmltYXRpb24ucHJvcHMuaXNNYWluU2Nyb2xsO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IHBhbiBvciB6b29tIHRyYW5zaXRpb24gaXMgcnVubmluZ1xyXG4gICAqL1xyXG4gIGlzUGFuUnVubmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuc29tZSgoYW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiBhbmltYXRpb24ucHJvcHMuaXNQYW47XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnM7XHJcbiIsIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG4vKipcclxuICogSGFuZGxlcyBzY3JvbGwgd2hlZWwuXHJcbiAqIENhbiBwYW4gYW5kIHpvb20gY3VycmVudCBzbGlkZSBpbWFnZS5cclxuICovXHJcbmNsYXNzIFNjcm9sbFdoZWVsIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgcHN3cC5ldmVudHMuYWRkKHBzd3AuZWxlbWVudCwgJ3doZWVsJywgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5fb25XaGVlbC5iaW5kKHRoaXMpKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7V2hlZWxFdmVudH0gZVxyXG4gICAqL1xyXG4gIF9vbldoZWVsKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSB0aGlzLnBzd3A7XHJcbiAgICBsZXQgeyBkZWx0YVgsIGRlbHRhWSB9ID0gZTtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5kaXNwYXRjaCgnd2hlZWwnLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY3RybEtleSB8fCB0aGlzLnBzd3Aub3B0aW9ucy53aGVlbFRvWm9vbSkge1xyXG4gICAgICAvLyB6b29tXHJcbiAgICAgIGlmIChjdXJyU2xpZGUuaXNab29tYWJsZSgpKSB7XHJcbiAgICAgICAgbGV0IHpvb21GYWN0b3IgPSAtZGVsdGFZO1xyXG4gICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSAvKiBET01fREVMVEFfTElORSAqLykge1xyXG4gICAgICAgICAgem9vbUZhY3RvciAqPSAwLjA1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB6b29tRmFjdG9yICo9IGUuZGVsdGFNb2RlID8gMSA6IDAuMDAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB6b29tRmFjdG9yID0gMiAqKiB6b29tRmFjdG9yO1xyXG5cclxuICAgICAgICBjb25zdCBkZXN0Wm9vbUxldmVsID0gY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgKiB6b29tRmFjdG9yO1xyXG4gICAgICAgIGN1cnJTbGlkZS56b29tVG8oZGVzdFpvb21MZXZlbCwge1xyXG4gICAgICAgICAgeDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgeTogZS5jbGllbnRZXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHBhblxyXG4gICAgICBpZiAoY3VyclNsaWRlLmlzUGFubmFibGUoKSkge1xyXG4gICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSAvKiBET01fREVMVEFfTElORSAqLykge1xyXG4gICAgICAgICAgLy8gMTggLSBhdmVyYWdlIGxpbmUgaGVpZ2h0XHJcbiAgICAgICAgICBkZWx0YVggKj0gMTg7XHJcbiAgICAgICAgICBkZWx0YVkgKj0gMTg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyU2xpZGUucGFuVG8oXHJcbiAgICAgICAgICBjdXJyU2xpZGUucGFuLnggLSBkZWx0YVgsXHJcbiAgICAgICAgICBjdXJyU2xpZGUucGFuLnkgLSBkZWx0YVlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxXaGVlbDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi90eXBlcy5qcycpLk1ldGhvZHM8VD59IE1ldGhvZHM8VD5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gVUlFbGVtZW50TWFya3VwUHJvcHNcclxuICogQHByb3Age2Jvb2xlYW59IFtpc0N1c3RvbVNWR11cclxuICogQHByb3Age3N0cmluZ30gaW5uZXJcclxuICogQHByb3Age3N0cmluZ30gW291dGxpbmVJRF1cclxuICogQHByb3Age251bWJlciB8IHN0cmluZ30gW3NpemVdXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVJRWxlbWVudERhdGFcclxuICogQHByb3Age0RlZmF1bHRVSUVsZW1lbnRzIHwgc3RyaW5nfSBbbmFtZV1cclxuICogQHByb3Age3N0cmluZ30gW2NsYXNzTmFtZV1cclxuICogQHByb3Age1VJRWxlbWVudE1hcmt1cH0gW2h0bWxdXHJcbiAqIEBwcm9wIHtib29sZWFufSBbaXNCdXR0b25dXHJcbiAqIEBwcm9wIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9IFt0YWdOYW1lXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbdGl0bGVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcmlhTGFiZWxdXHJcbiAqIEBwcm9wIHsoZWxlbWVudDogSFRNTEVsZW1lbnQsIHBzd3A6IFBob3RvU3dpcGUpID0+IHZvaWR9IFtvbkluaXRdXHJcbiAqIEBwcm9wIHtNZXRob2RzPFBob3RvU3dpcGU+IHwgKChlOiBNb3VzZUV2ZW50LCBlbGVtZW50OiBIVE1MRWxlbWVudCwgcHN3cDogUGhvdG9Td2lwZSkgPT4gdm9pZCl9IFtvbkNsaWNrXVxyXG4gKiBAcHJvcCB7J2JhcicgfCAnd3JhcHBlcicgfCAncm9vdCd9IFthcHBlbmRUb11cclxuICogQHByb3Age251bWJlcn0gW29yZGVyXVxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7J2Fycm93UHJldicgfCAnYXJyb3dOZXh0JyB8ICdjbG9zZScgfCAnem9vbScgfCAnY291bnRlcid9IERlZmF1bHRVSUVsZW1lbnRzICovXHJcblxyXG4vKiogQHR5cGVkZWYge3N0cmluZyB8IFVJRWxlbWVudE1hcmt1cFByb3BzfSBVSUVsZW1lbnRNYXJrdXAgKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1VJRWxlbWVudE1hcmt1cH0gW2h0bWxEYXRhXVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkRWxlbWVudEhUTUwoaHRtbERhdGEpIHtcclxuICBpZiAodHlwZW9mIGh0bWxEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgLy8gQWxsb3cgZGV2ZWxvcGVycyB0byBwcm92aWRlIGZ1bGwgc3ZnLFxyXG4gICAgLy8gRm9yIGV4YW1wbGU6XHJcbiAgICAvLyA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInBzd3BfX2ljblwiPlxyXG4gICAgLy8gICA8cGF0aCBkPVwiLi4uXCIgLz5cclxuICAgIC8vICAgPGNpcmNsZSAuLi4gLz5cclxuICAgIC8vIDwvc3ZnPlxyXG4gICAgLy8gQ2FuIGFsc28gYmUgYW55IEhUTUwgc3RyaW5nLlxyXG4gICAgcmV0dXJuIGh0bWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFodG1sRGF0YSB8fCAhaHRtbERhdGEuaXNDdXN0b21TVkcpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0IHN2Z0RhdGEgPSBodG1sRGF0YTtcclxuICBsZXQgb3V0ID0gJzxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJwc3dwX19pY25cIiB2aWV3Qm94PVwiMCAwICVkICVkXCIgd2lkdGg9XCIlZFwiIGhlaWdodD1cIiVkXCI+JztcclxuICAvLyByZXBsYWNlIGFsbCAlZCB3aXRoIHNpemVcclxuICBvdXQgPSBvdXQuc3BsaXQoJyVkJykuam9pbigvKiogQHR5cGUge3N0cmluZ30gKi8gKHN2Z0RhdGEuc2l6ZSB8fCAzMikpO1xyXG5cclxuICAvLyBJY29ucyBtYXkgY29udGFpbiBvdXRsaW5lL3NoYWRvdyxcclxuICAvLyB0byBtYWtlIGl0IHdlIFwiY2xvbmVcIiBiYXNlIGljb24gc2hhcGUgYW5kIGFkZCBib3JkZXIgdG8gaXQuXHJcbiAgLy8gSWNvbiBpdHNlbGYgYW5kIGJvcmRlciBhcmUgc3R5bGVkIHZpYSBDU1MuXHJcbiAgLy9cclxuICAvLyBQcm9wZXJ0eSBzaGFkb3dJRCBkZWZpbmVzIElEIG9mIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgY2xvbmVkLlxyXG4gIGlmIChzdmdEYXRhLm91dGxpbmVJRCkge1xyXG4gICAgb3V0ICs9ICc8dXNlIGNsYXNzPVwicHN3cF9faWNuLXNoYWRvd1wiIHhsaW5rOmhyZWY9XCIjJyArIHN2Z0RhdGEub3V0bGluZUlEICsgJ1wiLz4nO1xyXG4gIH1cclxuXHJcbiAgb3V0ICs9IHN2Z0RhdGEuaW5uZXI7XHJcblxyXG4gIG91dCArPSAnPC9zdmc+JztcclxuXHJcbiAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuY2xhc3MgVUlFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKiBAcGFyYW0ge1VJRWxlbWVudERhdGF9IGRhdGFcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwLCBkYXRhKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZGF0YS5uYW1lIHx8IGRhdGEuY2xhc3NOYW1lO1xyXG4gICAgbGV0IGVsZW1lbnRIVE1MID0gZGF0YS5odG1sO1xyXG5cclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3VwIG9ubHkgYnkgYGRhdGEubmFtZWAgbWF5YmU/XHJcbiAgICBpZiAocHN3cC5vcHRpb25zW25hbWVdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBleGl0IGlmIGVsZW1lbnQgaXMgZGlzYWJsZWQgZnJvbSBvcHRpb25zXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGxvdyB0byBvdmVycmlkZSBTVkcgaWNvbnMgZnJvbSBvcHRpb25zXHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgaWYgKHR5cGVvZiBwc3dwLm9wdGlvbnNbbmFtZSArICdTVkcnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gYXJyb3dQcmV2U1ZHXHJcbiAgICAgIC8vIGFycm93TmV4dFNWR1xyXG4gICAgICAvLyBjbG9zZVNWR1xyXG4gICAgICAvLyB6b29tU1ZHXHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3VwIG9ubHkgYnkgYGRhdGEubmFtZWAgbWF5YmU/XHJcbiAgICAgIGVsZW1lbnRIVE1MID0gcHN3cC5vcHRpb25zW25hbWUgKyAnU1ZHJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgndWlFbGVtZW50Q3JlYXRlJywgeyBkYXRhIH0pO1xyXG5cclxuICAgIGxldCBjbGFzc05hbWUgPSAnJztcclxuICAgIGlmIChkYXRhLmlzQnV0dG9uKSB7XHJcbiAgICAgIGNsYXNzTmFtZSArPSAncHN3cF9fYnV0dG9uICc7XHJcbiAgICAgIGNsYXNzTmFtZSArPSAoZGF0YS5jbGFzc05hbWUgfHwgYHBzd3BfX2J1dHRvbi0tJHtkYXRhLm5hbWV9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGFzc05hbWUgKz0gKGRhdGEuY2xhc3NOYW1lIHx8IGBwc3dwX18ke2RhdGEubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFnTmFtZSA9IGRhdGEuaXNCdXR0b24gPyAoZGF0YS50YWdOYW1lIHx8ICdidXR0b24nKSA6IChkYXRhLnRhZ05hbWUgfHwgJ2RpdicpO1xyXG4gICAgdGFnTmFtZSA9IC8qKiBAdHlwZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSAqLyAodGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXHJcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChjbGFzc05hbWUsIHRhZ05hbWUpO1xyXG5cclxuICAgIGlmIChkYXRhLmlzQnV0dG9uKSB7XHJcbiAgICAgIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovIChlbGVtZW50KS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB7IHRpdGxlIH0gPSBkYXRhO1xyXG4gICAgICBjb25zdCB7IGFyaWFMYWJlbCB9ID0gZGF0YTtcclxuXHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3VwIG9ubHkgYnkgYGRhdGEubmFtZWAgbWF5YmU/XHJcbiAgICAgIGlmICh0eXBlb2YgcHN3cC5vcHRpb25zW25hbWUgKyAnVGl0bGUnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgICAgIHRpdGxlID0gcHN3cC5vcHRpb25zW25hbWUgKyAnVGl0bGUnXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgZWxlbWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhcmlhVGV4dCA9IGFyaWFMYWJlbCB8fCB0aXRsZTtcclxuICAgICAgaWYgKGFyaWFUZXh0KSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBhcmlhVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGFkZEVsZW1lbnRIVE1MKGVsZW1lbnRIVE1MKTtcclxuXHJcbiAgICBpZiAoZGF0YS5vbkluaXQpIHtcclxuICAgICAgZGF0YS5vbkluaXQoZWxlbWVudCwgcHN3cCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEub25DbGljaykge1xyXG4gICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5vbkNsaWNrID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgcHN3cFtkYXRhLm9uQ2xpY2tdKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBkYXRhLm9uQ2xpY2soZSwgZWxlbWVudCwgcHN3cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvcCBiYXIgaXMgZGVmYXVsdCBwb3NpdGlvblxyXG4gICAgY29uc3QgYXBwZW5kVG8gPSBkYXRhLmFwcGVuZFRvIHx8ICdiYXInO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH0gcm9vdCBlbGVtZW50IGJ5IGRlZmF1bHQgKi9cclxuICAgIGxldCBjb250YWluZXIgPSBwc3dwLmVsZW1lbnQ7XHJcbiAgICBpZiAoYXBwZW5kVG8gPT09ICdiYXInKSB7XHJcbiAgICAgIGlmICghcHN3cC50b3BCYXIpIHtcclxuICAgICAgICBwc3dwLnRvcEJhciA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX3RvcC1iYXIgcHN3cF9faGlkZS1vbi1jbG9zZScsICdkaXYnLCBwc3dwLnNjcm9sbFdyYXApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRhaW5lciA9IHBzd3AudG9wQmFyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZWxlbWVudCBvdXRzaWRlIG9mIHRvcCBiYXIgZ2V0cyBhIHNlY29uZGFyeSBjbGFzc1xyXG4gICAgICAvLyB0aGF0IG1ha2VzIGVsZW1lbnQgZmFkZSBvdXQgb24gY2xvc2VcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwc3dwX19oaWRlLW9uLWNsb3NlJyk7XHJcblxyXG4gICAgICBpZiAoYXBwZW5kVG8gPT09ICd3cmFwcGVyJykge1xyXG4gICAgICAgIGNvbnRhaW5lciA9IHBzd3Auc2Nyb2xsV3JhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQocHN3cC5hcHBseUZpbHRlcnMoJ3VpRWxlbWVudCcsIGVsZW1lbnQsIGRhdGEpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVJRWxlbWVudDtcclxuIiwiLypcclxuICBCYWNrd2FyZCBhbmQgZm9yd2FyZCBhcnJvdyBidXR0b25zXHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICogQHBhcmFtIHtib29sZWFufSBbaXNOZXh0QnV0dG9uXVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdEFycm93QnV0dG9uKGVsZW1lbnQsIHBzd3AsIGlzTmV4dEJ1dHRvbikge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHN3cF9fYnV0dG9uLS1hcnJvdycpO1xyXG4gIC8vIFRPRE86IHRoaXMgc2hvdWxkIHBvaW50IHRvIGEgdW5pcXVlIGlkIGZvciB0aGlzIGluc3RhbmNlXHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCAncHN3cF9faXRlbXMnKTtcclxuICBwc3dwLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBpZiAoIXBzd3Aub3B0aW9ucy5sb29wKSB7XHJcbiAgICAgIGlmIChpc05leHRCdXR0b24pIHtcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL1xyXG4gICAgICAgIChlbGVtZW50KS5kaXNhYmxlZCA9ICEocHN3cC5jdXJySW5kZXggPCBwc3dwLmdldE51bUl0ZW1zKCkgLSAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL1xyXG4gICAgICAgIChlbGVtZW50KS5kaXNhYmxlZCA9ICEocHN3cC5jdXJySW5kZXggPiAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKiogQHR5cGUge1VJRWxlbWVudERhdGF9ICovXHJcbmV4cG9ydCBjb25zdCBhcnJvd1ByZXYgPSB7XHJcbiAgbmFtZTogJ2Fycm93UHJldicsXHJcbiAgY2xhc3NOYW1lOiAncHN3cF9fYnV0dG9uLS1hcnJvdy0tcHJldicsXHJcbiAgdGl0bGU6ICdQcmV2aW91cycsXHJcbiAgb3JkZXI6IDEwLFxyXG4gIGlzQnV0dG9uOiB0cnVlLFxyXG4gIGFwcGVuZFRvOiAnd3JhcHBlcicsXHJcbiAgaHRtbDoge1xyXG4gICAgaXNDdXN0b21TVkc6IHRydWUsXHJcbiAgICBzaXplOiA2MCxcclxuICAgIGlubmVyOiAnPHBhdGggZD1cIk0yOSA0M2wtMyAzLTE2LTE2IDE2LTE2IDMgMy0xMyAxMyAxMyAxM3pcIiBpZD1cInBzd3BfX2ljbi1hcnJvd1wiLz4nLFxyXG4gICAgb3V0bGluZUlEOiAncHN3cF9faWNuLWFycm93J1xyXG4gIH0sXHJcbiAgb25DbGljazogJ3ByZXYnLFxyXG4gIG9uSW5pdDogaW5pdEFycm93QnV0dG9uXHJcbn07XHJcblxyXG4vKiogQHR5cGUge1VJRWxlbWVudERhdGF9ICovXHJcbmV4cG9ydCBjb25zdCBhcnJvd05leHQgPSB7XHJcbiAgbmFtZTogJ2Fycm93TmV4dCcsXHJcbiAgY2xhc3NOYW1lOiAncHN3cF9fYnV0dG9uLS1hcnJvdy0tbmV4dCcsXHJcbiAgdGl0bGU6ICdOZXh0JyxcclxuICBvcmRlcjogMTEsXHJcbiAgaXNCdXR0b246IHRydWUsXHJcbiAgYXBwZW5kVG86ICd3cmFwcGVyJyxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIHNpemU6IDYwLFxyXG4gICAgaW5uZXI6ICc8dXNlIHhsaW5rOmhyZWY9XCIjcHN3cF9faWNuLWFycm93XCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tYXJyb3cnXHJcbiAgfSxcclxuICBvbkNsaWNrOiAnbmV4dCcsXHJcbiAgb25Jbml0OiAoZWwsIHBzd3ApID0+IHtcclxuICAgIGluaXRBcnJvd0J1dHRvbihlbCwgcHN3cCwgdHJ1ZSk7XHJcbiAgfVxyXG59O1xyXG4iLCIvKiogQHR5cGUge2ltcG9ydCgnLi91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG5jb25zdCBjbG9zZUJ1dHRvbiA9IHtcclxuICBuYW1lOiAnY2xvc2UnLFxyXG4gIHRpdGxlOiAnQ2xvc2UnLFxyXG4gIG9yZGVyOiAyMCxcclxuICBpc0J1dHRvbjogdHJ1ZSxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIGlubmVyOiAnPHBhdGggZD1cIk0yNCAxMGwtMi0yLTYgNi02LTYtMiAyIDYgNi02IDYgMiAyIDYtNiA2IDYgMi0yLTYtNnpcIiBpZD1cInBzd3BfX2ljbi1jbG9zZVwiLz4nLFxyXG4gICAgb3V0bGluZUlEOiAncHN3cF9faWNuLWNsb3NlJ1xyXG4gIH0sXHJcbiAgb25DbGljazogJ2Nsb3NlJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xvc2VCdXR0b247XHJcbiIsIi8qKiBAdHlwZSB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbmNvbnN0IHpvb21CdXR0b24gPSB7XHJcbiAgbmFtZTogJ3pvb20nLFxyXG4gIHRpdGxlOiAnWm9vbScsXHJcbiAgb3JkZXI6IDEwLFxyXG4gIGlzQnV0dG9uOiB0cnVlLFxyXG4gIGh0bWw6IHtcclxuICAgIGlzQ3VzdG9tU1ZHOiB0cnVlLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgIGlubmVyOiAnPHBhdGggZD1cIk0xNy40MjYgMTkuOTI2YTYgNiAwIDEgMSAxLjUtMS41TDIzIDIyLjUgMjEuNSAyNGwtNC4wNzQtNC4wNzR6XCIgaWQ9XCJwc3dwX19pY24tem9vbVwiLz4nXHJcbiAgICAgICAgICArICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJwc3dwX196b29tLWljbi1iYXItaFwiIGQ9XCJNMTEgMTZ2LTJoNnYyelwiLz4nXHJcbiAgICAgICAgICArICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJwc3dwX196b29tLWljbi1iYXItdlwiIGQ9XCJNMTMgMTJoMnY2aC0yelwiLz4nLFxyXG4gICAgb3V0bGluZUlEOiAncHN3cF9faWNuLXpvb20nXHJcbiAgfSxcclxuICBvbkNsaWNrOiAndG9nZ2xlWm9vbSdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHpvb21CdXR0b247XHJcbiIsIi8qKiBAdHlwZSB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yID0ge1xyXG4gIG5hbWU6ICdwcmVsb2FkZXInLFxyXG4gIGFwcGVuZFRvOiAnYmFyJyxcclxuICBvcmRlcjogNyxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICBpbm5lcjogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMS4yIDE2YTUuMiA1LjIgMCAxIDEtNS4yLTUuMlY4YTggOCAwIDEgMCA4IDhoLTIuOFpcIiBpZD1cInBzd3BfX2ljbi1sb2FkaW5nXCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tbG9hZGluZydcclxuICB9LFxyXG4gIG9uSW5pdDogKGluZGljYXRvckVsZW1lbnQsIHBzd3ApID0+IHtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gKi9cclxuICAgIGxldCBpc1Zpc2libGU7XHJcbiAgICAvKiogQHR5cGUge05vZGVKUy5UaW1lb3V0IHwgbnVsbH0gKi9cclxuICAgIGxldCBkZWxheVRpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhZGRcclxuICAgICAqL1xyXG4gICAgY29uc3QgdG9nZ2xlSW5kaWNhdG9yQ2xhc3MgPSAoY2xhc3NOYW1lLCBhZGQpID0+IHtcclxuICAgICAgaW5kaWNhdG9yRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwX19wcmVsb2FkZXItLScgKyBjbGFzc05hbWUsIGFkZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2aXNpYmxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHNldEluZGljYXRvclZpc2liaWxpdHkgPSAodmlzaWJsZSkgPT4ge1xyXG4gICAgICBpZiAoaXNWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgaXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0b2dnbGVJbmRpY2F0b3JDbGFzcygnYWN0aXZlJywgdmlzaWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgaWYgKCFwc3dwLmN1cnJTbGlkZT8uY29udGVudC5pc0xvYWRpbmcoKSkge1xyXG4gICAgICAgIHNldEluZGljYXRvclZpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgICAgIGlmIChkZWxheVRpbWVvdXQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVvdXQpO1xyXG4gICAgICAgICAgZGVsYXlUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWRlbGF5VGltZW91dCkge1xyXG4gICAgICAgIC8vIGRpc3BsYXkgbG9hZGluZyBpbmRpY2F0b3Igd2l0aCBkZWxheVxyXG4gICAgICAgIGRlbGF5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SW5kaWNhdG9yVmlzaWJpbGl0eShCb29sZWFuKHBzd3AuY3VyclNsaWRlPy5jb250ZW50LmlzTG9hZGluZygpKSk7XHJcbiAgICAgICAgICBkZWxheVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH0sIHBzd3Aub3B0aW9ucy5wcmVsb2FkZXJEZWxheSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHN3cC5vbignY2hhbmdlJywgdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSk7XHJcblxyXG4gICAgcHN3cC5vbignbG9hZENvbXBsZXRlJywgKGUpID0+IHtcclxuICAgICAgaWYgKHBzd3AuY3VyclNsaWRlID09PSBlLnNsaWRlKSB7XHJcbiAgICAgICAgdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBleHBvc2UgdGhlIG1ldGhvZFxyXG4gICAgaWYgKHBzd3AudWkpIHtcclxuICAgICAgcHN3cC51aS51cGRhdGVQcmVsb2FkZXJWaXNpYmlsaXR5ID0gdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIi8qKiBAdHlwZSB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbmV4cG9ydCBjb25zdCBjb3VudGVySW5kaWNhdG9yID0ge1xyXG4gIG5hbWU6ICdjb3VudGVyJyxcclxuICBvcmRlcjogNSxcclxuICBvbkluaXQ6IChjb3VudGVyRWxlbWVudCwgcHN3cCkgPT4ge1xyXG4gICAgcHN3cC5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb3VudGVyRWxlbWVudC5pbm5lclRleHQgPSAocHN3cC5jdXJySW5kZXggKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwc3dwLm9wdGlvbnMuaW5kZXhJbmRpY2F0b3JTZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgcHN3cC5nZXROdW1JdGVtcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgVUlFbGVtZW50IGZyb20gJy4vdWktZWxlbWVudC5qcyc7XHJcbmltcG9ydCB7IGFycm93UHJldiwgYXJyb3dOZXh0IH0gZnJvbSAnLi9idXR0b24tYXJyb3cuanMnO1xyXG5pbXBvcnQgY2xvc2VCdXR0b24gZnJvbSAnLi9idXR0b24tY2xvc2UuanMnO1xyXG5pbXBvcnQgem9vbUJ1dHRvbiBmcm9tICcuL2J1dHRvbi16b29tLmpzJztcclxuaW1wb3J0IHsgbG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4vbG9hZGluZy1pbmRpY2F0b3IuanMnO1xyXG5pbXBvcnQgeyBjb3VudGVySW5kaWNhdG9yIH0gZnJvbSAnLi9jb3VudGVyLWluZGljYXRvci5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuXHJcbi8qKlxyXG4gKiBTZXQgc3BlY2lhbCBjbGFzcyBvbiBlbGVtZW50IHdoZW4gaW1hZ2UgaXMgem9vbWVkLlxyXG4gKlxyXG4gKiBCeSBkZWZhdWx0LCBpdCBpcyB1c2VkIHRvIGFkanVzdFxyXG4gKiB6b29tIGljb24gYW5kIHpvb20gY3Vyc29yIHZpYSBDU1MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNab29tZWRJblxyXG4gKi9cclxuZnVuY3Rpb24gc2V0Wm9vbWVkSW4oZWwsIGlzWm9vbWVkSW4pIHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwLS16b29tZWQtaW4nLCBpc1pvb21lZEluKTtcclxufVxyXG5cclxuY2xhc3MgVUkge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLmlzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtVSUVsZW1lbnREYXRhW119ICovXHJcbiAgICB0aGlzLnVpRWxlbWVudHNEYXRhID0gW107XHJcbiAgICAvKiogQHR5cGUgeyhVSUVsZW1lbnQgfCBVSUVsZW1lbnREYXRhKVtdfSAqL1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHsoKSA9PiB2b2lkfSAqL1xyXG4gICAgdGhpcy51cGRhdGVQcmVsb2FkZXJWaXNpYmlsaXR5ID0gKCkgPT4ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fbGFzdFVwZGF0ZWRab29tTGV2ZWwgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgdGhpcy5pc1JlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudWlFbGVtZW50c0RhdGEgPSBbXHJcbiAgICAgIGNsb3NlQnV0dG9uLFxyXG4gICAgICBhcnJvd1ByZXYsXHJcbiAgICAgIGFycm93TmV4dCxcclxuICAgICAgem9vbUJ1dHRvbixcclxuICAgICAgbG9hZGluZ0luZGljYXRvcixcclxuICAgICAgY291bnRlckluZGljYXRvclxyXG4gICAgXTtcclxuXHJcbiAgICBwc3dwLmRpc3BhdGNoKCd1aVJlZ2lzdGVyJyk7XHJcblxyXG4gICAgLy8gc29ydCBieSBvcmRlclxyXG4gICAgdGhpcy51aUVsZW1lbnRzRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIC8vIGRlZmF1bHQgb3JkZXIgaXMgMFxyXG4gICAgICByZXR1cm4gKGEub3JkZXIgfHwgMCkgLSAoYi5vcmRlciB8fCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmlzUmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICB0aGlzLnVpRWxlbWVudHNEYXRhLmZvckVhY2goKHVpRWxlbWVudERhdGEpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckVsZW1lbnQodWlFbGVtZW50RGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwc3dwLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHBzd3AuZWxlbWVudD8uY2xhc3NMaXN0LnRvZ2dsZSgncHN3cC0tb25lLXNsaWRlJywgcHN3cC5nZXROdW1JdGVtcygpID09PSAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBzd3Aub24oJ3pvb21QYW5VcGRhdGUnLCAoKSA9PiB0aGlzLl9vblpvb21QYW5VcGRhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1VJRWxlbWVudERhdGF9IGVsZW1lbnREYXRhXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnREYXRhKSB7XHJcbiAgICBpZiAodGhpcy5pc1JlZ2lzdGVyZWQpIHtcclxuICAgICAgdGhpcy5pdGVtcy5wdXNoKFxyXG4gICAgICAgIG5ldyBVSUVsZW1lbnQodGhpcy5wc3dwLCBlbGVtZW50RGF0YSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudWlFbGVtZW50c0RhdGEucHVzaChlbGVtZW50RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlZCBlYWNoIHRpbWUgem9vbSBvciBwYW4gcG9zaXRpb24gaXMgY2hhbmdlZC5cclxuICAgKiBVcGRhdGUgY2xhc3NlcyB0aGF0IGNvbnRyb2wgdmlzaWJpbGl0eSBvZiB6b29tIGJ1dHRvbiBhbmQgY3Vyc29yIGljb24uXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9vblpvb21QYW5VcGRhdGUoKSB7XHJcbiAgICBjb25zdCB7IHRlbXBsYXRlLCBjdXJyU2xpZGUsIG9wdGlvbnMgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLm9wZW5lci5pc0Nsb3NpbmcgfHwgIXRlbXBsYXRlIHx8ICFjdXJyU2xpZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB7IGN1cnJab29tTGV2ZWwgfSA9IGN1cnJTbGlkZTtcclxuXHJcbiAgICAvLyBpZiBub3Qgb3BlbiB5ZXQgLSBjaGVjayBhZ2FpbnN0IGluaXRpYWwgem9vbSBsZXZlbFxyXG4gICAgaWYgKCF0aGlzLnBzd3Aub3BlbmVyLmlzT3Blbikge1xyXG4gICAgICBjdXJyWm9vbUxldmVsID0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCA9PT0gdGhpcy5fbGFzdFVwZGF0ZWRab29tTGV2ZWwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGFzdFVwZGF0ZWRab29tTGV2ZWwgPSBjdXJyWm9vbUxldmVsO1xyXG5cclxuICAgIGNvbnN0IGN1cnJab29tTGV2ZWxEaWZmID0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCAtIGN1cnJTbGlkZS56b29tTGV2ZWxzLnNlY29uZGFyeTtcclxuXHJcbiAgICAvLyBJbml0aWFsIGFuZCBzZWNvbmRhcnkgem9vbSBsZXZlbHMgYXJlIGFsbW9zdCBlcXVhbFxyXG4gICAgaWYgKE1hdGguYWJzKGN1cnJab29tTGV2ZWxEaWZmKSA8IDAuMDEgfHwgIWN1cnJTbGlkZS5pc1pvb21hYmxlKCkpIHtcclxuICAgICAgLy8gZGlzYWJsZSB6b29tXHJcbiAgICAgIHNldFpvb21lZEluKHRlbXBsYXRlLCBmYWxzZSk7XHJcbiAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Bzd3AtLXpvb20tYWxsb3dlZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCgncHN3cC0tem9vbS1hbGxvd2VkJyk7XHJcblxyXG4gICAgY29uc3QgcG90ZW50aWFsWm9vbUxldmVsID0gY3Vyclpvb21MZXZlbCA9PT0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbFxyXG4gICAgICA/IGN1cnJTbGlkZS56b29tTGV2ZWxzLnNlY29uZGFyeSA6IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWw7XHJcblxyXG4gICAgc2V0Wm9vbWVkSW4odGVtcGxhdGUsIHBvdGVudGlhbFpvb21MZXZlbCA8PSBjdXJyWm9vbUxldmVsKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5pbWFnZUNsaWNrQWN0aW9uID09PSAnem9vbSdcclxuICAgICAgICB8fCBvcHRpb25zLmltYWdlQ2xpY2tBY3Rpb24gPT09ICd6b29tLW9yLWNsb3NlJykge1xyXG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwc3dwLS1jbGljay10by16b29tJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVSTtcclxuIiwiLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBpbm5lclJlY3Q/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9IH19IEJvdW5kcyAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEByZXR1cm5zIEJvdW5kc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Qm91bmRzQnlFbGVtZW50KGVsKSB7XHJcbiAgY29uc3QgdGh1bWJBcmVhUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB0aHVtYkFyZWFSZWN0LmxlZnQsXHJcbiAgICB5OiB0aHVtYkFyZWFSZWN0LnRvcCxcclxuICAgIHc6IHRodW1iQXJlYVJlY3Qud2lkdGhcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtudW1iZXJ9IGltYWdlV2lkdGhcclxuICogQHBhcmFtIHtudW1iZXJ9IGltYWdlSGVpZ2h0XHJcbiAqIEByZXR1cm5zIEJvdW5kc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q3JvcHBlZEJvdW5kc0J5RWxlbWVudChlbCwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQpIHtcclxuICBjb25zdCB0aHVtYkFyZWFSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gIC8vIGZpbGwgaW1hZ2UgaW50byB0aGUgYXJlYVxyXG4gIC8vIChkbyB0aGV5IHNhbWUgYXMgb2JqZWN0LWZpdDpjb3ZlciBkb2VzIHRvIHJldHJpZXZlIGNvb3JkaW5hdGVzKVxyXG4gIGNvbnN0IGhSYXRpbyA9IHRodW1iQXJlYVJlY3Qud2lkdGggLyBpbWFnZVdpZHRoO1xyXG4gIGNvbnN0IHZSYXRpbyA9IHRodW1iQXJlYVJlY3QuaGVpZ2h0IC8gaW1hZ2VIZWlnaHQ7XHJcbiAgY29uc3QgZmlsbFpvb21MZXZlbCA9IGhSYXRpbyA+IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcclxuXHJcbiAgY29uc3Qgb2Zmc2V0WCA9ICh0aHVtYkFyZWFSZWN0LndpZHRoIC0gaW1hZ2VXaWR0aCAqIGZpbGxab29tTGV2ZWwpIC8gMjtcclxuICBjb25zdCBvZmZzZXRZID0gKHRodW1iQXJlYVJlY3QuaGVpZ2h0IC0gaW1hZ2VIZWlnaHQgKiBmaWxsWm9vbUxldmVsKSAvIDI7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSxcclxuICAgKiBhcyBpZiBpdCB3YXMgbm90IGNyb3BwZWQsXHJcbiAgICogaGVpZ2h0IGlzIGNhbGN1bGF0ZWQgYXV0b21hdGljYWxseVxyXG4gICAqXHJcbiAgICogQHR5cGUge0JvdW5kc31cclxuICAgKi9cclxuICBjb25zdCBib3VuZHMgPSB7XHJcbiAgICB4OiB0aHVtYkFyZWFSZWN0LmxlZnQgKyBvZmZzZXRYLFxyXG4gICAgeTogdGh1bWJBcmVhUmVjdC50b3AgKyBvZmZzZXRZLFxyXG4gICAgdzogaW1hZ2VXaWR0aCAqIGZpbGxab29tTGV2ZWxcclxuICB9O1xyXG5cclxuICAvLyBDb29yZGluYXRlcyBvZiBpbm5lciBjcm9wIGFyZWFcclxuICAvLyByZWxhdGl2ZSB0byB0aGUgaW1hZ2VcclxuICBib3VuZHMuaW5uZXJSZWN0ID0ge1xyXG4gICAgdzogdGh1bWJBcmVhUmVjdC53aWR0aCxcclxuICAgIGg6IHRodW1iQXJlYVJlY3QuaGVpZ2h0LFxyXG4gICAgeDogb2Zmc2V0WCxcclxuICAgIHk6IG9mZnNldFlcclxuICB9O1xyXG5cclxuICByZXR1cm4gYm91bmRzO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRpbWVuc2lvbnMgb2YgdGh1bWJuYWlsIGltYWdlXHJcbiAqIChjbGljayBvbiB3aGljaCBvcGVucyBwaG90b3N3aXBlIG9yIGNsb3NlcyBwaG90b3N3aXBlIHRvKVxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBpbnN0YW5jZVxyXG4gKiBAcmV0dXJucyB7Qm91bmRzIHwgdW5kZWZpbmVkfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRodW1iQm91bmRzKGluZGV4LCBpdGVtRGF0YSwgaW5zdGFuY2UpIHtcclxuICAvLyBsZWdhY3kgZXZlbnQsIGJlZm9yZSBmaWx0ZXJzIHdlcmUgaW50cm9kdWNlZFxyXG4gIGNvbnN0IGV2ZW50ID0gaW5zdGFuY2UuZGlzcGF0Y2goJ3RodW1iQm91bmRzJywge1xyXG4gICAgaW5kZXgsXHJcbiAgICBpdGVtRGF0YSxcclxuICAgIGluc3RhbmNlXHJcbiAgfSk7XHJcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gIGlmIChldmVudC50aHVtYkJvdW5kcykge1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcmV0dXJuIGV2ZW50LnRodW1iQm91bmRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbGVtZW50IH0gPSBpdGVtRGF0YTtcclxuICAvKiogQHR5cGUge0JvdW5kcyB8IHVuZGVmaW5lZH0gKi9cclxuICBsZXQgdGh1bWJCb3VuZHM7XHJcbiAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXHJcbiAgbGV0IHRodW1ibmFpbDtcclxuXHJcbiAgaWYgKGVsZW1lbnQgJiYgaW5zdGFuY2Uub3B0aW9ucy50aHVtYlNlbGVjdG9yICE9PSBmYWxzZSkge1xyXG4gICAgY29uc3QgdGh1bWJTZWxlY3RvciA9IGluc3RhbmNlLm9wdGlvbnMudGh1bWJTZWxlY3RvciB8fCAnaW1nJztcclxuICAgIHRodW1ibmFpbCA9IGVsZW1lbnQubWF0Y2hlcyh0aHVtYlNlbGVjdG9yKVxyXG4gICAgICA/IGVsZW1lbnQgOiAvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi8gKGVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aHVtYlNlbGVjdG9yKSk7XHJcbiAgfVxyXG5cclxuICB0aHVtYm5haWwgPSBpbnN0YW5jZS5hcHBseUZpbHRlcnMoJ3RodW1iRWwnLCB0aHVtYm5haWwsIGl0ZW1EYXRhLCBpbmRleCk7XHJcblxyXG4gIGlmICh0aHVtYm5haWwpIHtcclxuICAgIGlmICghaXRlbURhdGEudGh1bWJDcm9wcGVkKSB7XHJcbiAgICAgIHRodW1iQm91bmRzID0gZ2V0Qm91bmRzQnlFbGVtZW50KHRodW1ibmFpbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHVtYkJvdW5kcyA9IGdldENyb3BwZWRCb3VuZHNCeUVsZW1lbnQoXHJcbiAgICAgICAgdGh1bWJuYWlsLFxyXG4gICAgICAgIGl0ZW1EYXRhLndpZHRoIHx8IGl0ZW1EYXRhLncgfHwgMCxcclxuICAgICAgICBpdGVtRGF0YS5oZWlnaHQgfHwgaXRlbURhdGEuaCB8fCAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKCd0aHVtYkJvdW5kcycsIHRodW1iQm91bmRzLCBpdGVtRGF0YSwgaW5kZXgpO1xyXG59XHJcbiIsIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9saWdodGJveC9saWdodGJveC5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVMaWdodGJveCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5EYXRhU291cmNlfSBEYXRhU291cmNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi91aS91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvY29udGVudC5qcycpLmRlZmF1bHR9IENvbnRlbnREZWZhdWx0ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS96b29tLWxldmVsLmpzJykuZGVmYXVsdH0gWm9vbUxldmVsICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9nZXQtdGh1bWItYm91bmRzLmpzJykuQm91bmRzfSBCb3VuZHMgKi9cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyBhZGRpbmcgYW4gYXJiaXRyYXJ5IHByb3BzIHRvIHRoZSBDb250ZW50XHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vY3VzdG9tLWNvbnRlbnQvI3VzaW5nLXdlYnAtaW1hZ2UtZm9ybWF0XHJcbiAqIEB0eXBlZGVmIHtDb250ZW50RGVmYXVsdCAmIFJlY29yZDxzdHJpbmcsIGFueT59IENvbnRlbnRcclxuICovXHJcbi8qKiBAdHlwZWRlZiB7eyB4PzogbnVtYmVyOyB5PzogbnVtYmVyIH19IFBvaW50ICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUGhvdG9Td2lwZUV2ZW50c01hcCBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy9cclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9hZGRpbmctdWktZWxlbWVudHMvXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHVpUmVnaXN0ZXJcclxuICogQHByb3Age3sgZGF0YTogVUlFbGVtZW50RGF0YSB9fSB1aUVsZW1lbnRDcmVhdGVcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI2luaXRpYWxpemF0aW9uLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBiZWZvcmVPcGVuXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGZpcnN0VXBkYXRlXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxMYXlvdXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2hhbmdlXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGFmdGVySW5pdFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBiaW5kRXZlbnRzXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNvcGVuaW5nLW9yLWNsb3NpbmctdHJhbnNpdGlvbi1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gb3BlbmluZ0FuaW1hdGlvblN0YXJ0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IG9wZW5pbmdBbmltYXRpb25FbmRcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2xvc2luZ0FuaW1hdGlvblN0YXJ0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NpbmdBbmltYXRpb25FbmRcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI2Nsb3NpbmctZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NlXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGRlc3Ryb3lcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI3BvaW50ZXItYW5kLWdlc3R1cmUtZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyRG93blxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlck1vdmVcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJVcFxyXG4gKiBAcHJvcCB7eyBiZ09wYWNpdHk6IG51bWJlciB9fSBwaW5jaENsb3NlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwYW5ZOiBudW1iZXIgfX0gdmVydGljYWxEcmFnIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jc2xpZGUtY29udGVudC1ldmVudHNcclxuICpcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50SW5pdFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBpc0xhenk6IGJvb2xlYW4gfX0gY29udGVudExvYWQgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IGlzTGF6eTogYm9vbGVhbiB9fSBjb250ZW50TG9hZEltYWdlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBzbGlkZTogU2xpZGU7IGlzRXJyb3I/OiBib29sZWFuIH19IGxvYWRDb21wbGV0ZVxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBzbGlkZTogU2xpZGUgfX0gbG9hZEVycm9yXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH19IGNvbnRlbnRSZXNpemUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBzbGlkZTogU2xpZGUgfX0gaW1hZ2VTaXplQ2hhbmdlXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudExhenlMb2FkIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBcHBlbmQgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEFjdGl2YXRlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnREZWFjdGl2YXRlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRSZW1vdmUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudERlc3Ryb3kgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqXHJcbiAqIHVuZG9jdW1lbnRlZFxyXG4gKlxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBpbWFnZUNsaWNrQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBiZ0NsaWNrQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSB0YXBBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IGRvdWJsZVRhcEFjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogS2V5Ym9hcmRFdmVudCB9fSBrZXlkb3duIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyB4OiBudW1iZXI7IGRyYWdnaW5nOiBib29sZWFuIH19IG1vdmVNYWluU2Nyb2xsXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBmaXJzdFpvb21QYW5cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIHwgdW5kZWZpbmVkLCBkYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIgfX0gZ2V0dGluZ0RhdGFcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmVmb3JlUmVzaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHJlc2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB2aWV3cG9ydFNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gdXBkYXRlU2Nyb2xsT2Zmc2V0XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZUluaXRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGFmdGVyU2V0Q29udGVudFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVMb2FkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhcHBlbmRIZWF2eSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGFwcGVuZEhlYXZ5Q29udGVudFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVBY3RpdmF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVEZWFjdGl2YXRlXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZURlc3Ryb3lcclxuICogQHByb3Age3sgZGVzdFpvb21MZXZlbDogbnVtYmVyLCBjZW50ZXJQb2ludDogUG9pbnQgfCB1bmRlZmluZWQsIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyIHwgZmFsc2UgfCB1bmRlZmluZWQgfX0gYmVmb3JlWm9vbVRvXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSB6b29tUGFuVXBkYXRlXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBpbml0aWFsWm9vbVBhblxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gY2FsY1NsaWRlU2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSByZXNvbHV0aW9uQ2hhbmdlZFxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBXaGVlbEV2ZW50IH19IHdoZWVsIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBcHBlbmRJbWFnZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgaW5kZXg6IG51bWJlcjsgaXRlbURhdGE6IFNsaWRlRGF0YSB9fSBsYXp5TG9hZFNsaWRlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBsYXp5TG9hZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gY2FsY0JvdW5kc1xyXG4gKiBAcHJvcCB7eyB6b29tTGV2ZWxzOiBab29tTGV2ZWwsIHNsaWRlRGF0YTogU2xpZGVEYXRhIH19IHpvb21MZXZlbHNVcGRhdGVcclxuICpcclxuICpcclxuICogbGVnYWN5XHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21JblxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbU91dFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbUluRW5kXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tT3V0RW5kXHJcbiAqIEBwcm9wIHt7IGRhdGFTb3VyY2U6IERhdGFTb3VyY2UgfCB1bmRlZmluZWQsIG51bUl0ZW1zOiBudW1iZXIgfX0gbnVtSXRlbXNcclxuICogQHByb3Age3sgaXRlbURhdGE6IFNsaWRlRGF0YTsgaW5kZXg6IG51bWJlciB9fSBpdGVtRGF0YVxyXG4gKiBAcHJvcCB7eyBpbmRleDogbnVtYmVyLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbnN0YW5jZTogUGhvdG9Td2lwZSB9fSB0aHVtYkJvdW5kc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQaG90b1N3aXBlRmlsdGVyc01hcCBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvXHJcbiAqXHJcbiAqIEBwcm9wIHsobnVtSXRlbXM6IG51bWJlciwgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCkgPT4gbnVtYmVyfSBudW1JdGVtc1xyXG4gKiBNb2RpZnkgdGhlIHRvdGFsIGFtb3VudCBvZiBzbGlkZXMuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jbnVtaXRlbXNcclxuICpcclxuICogQHByb3AgeyhpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBTbGlkZURhdGF9IGl0ZW1EYXRhXHJcbiAqIE1vZGlmeSBzbGlkZSBpdGVtIGRhdGEuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXRlbWRhdGFcclxuICpcclxuICogQHByb3AgeyhpdGVtRGF0YTogU2xpZGVEYXRhLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgbGlua0VsOiBIVE1MQW5jaG9yRWxlbWVudCkgPT4gU2xpZGVEYXRhfSBkb21JdGVtRGF0YVxyXG4gKiBNb2RpZnkgaXRlbSBkYXRhIHdoZW4gaXQncyBwYXJzZWQgZnJvbSBET00gZWxlbWVudC4gRXhhbXBsZSBvbiBEYXRhIHNvdXJjZXMgcGFnZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNkb21pdGVtZGF0YVxyXG4gKlxyXG4gKiBAcHJvcCB7KGNsaWNrZWRJbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50LCBpbnN0YW5jZTogUGhvdG9Td2lwZUxpZ2h0Ym94KSA9PiBudW1iZXJ9IGNsaWNrZWRJbmRleFxyXG4gKiBNb2RpZnkgY2xpY2tlZCBnYWxsZXJ5IGl0ZW0gaW5kZXguXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jY2xpY2tlZGluZGV4XHJcbiAqXHJcbiAqIEBwcm9wIHsocGxhY2Vob2xkZXJTcmM6IHN0cmluZyB8IGZhbHNlLCBjb250ZW50OiBDb250ZW50KSA9PiBzdHJpbmcgfCBmYWxzZX0gcGxhY2Vob2xkZXJTcmNcclxuICogTW9kaWZ5IHBsYWNlaG9sZGVyIGltYWdlIHNvdXJjZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNwbGFjZWhvbGRlcnNyY1xyXG4gKlxyXG4gKiBAcHJvcCB7KGlzQ29udGVudExvYWRpbmc6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzQ29udGVudExvYWRpbmdcclxuICogTW9kaWZ5IGlmIHRoZSBjb250ZW50IGlzIGN1cnJlbnRseSBsb2FkaW5nLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lzY29udGVudGxvYWRpbmdcclxuICpcclxuICogQHByb3Ageyhpc0NvbnRlbnRab29tYWJsZTogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gaXNDb250ZW50Wm9vbWFibGVcclxuICogTW9kaWZ5IGlmIHRoZSBjb250ZW50IGNhbiBiZSB6b29tZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXNjb250ZW50em9vbWFibGVcclxuICpcclxuICogQHByb3Ageyh1c2VDb250ZW50UGxhY2Vob2xkZXI6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IHVzZUNvbnRlbnRQbGFjZWhvbGRlclxyXG4gKiBNb2RpZnkgaWYgdGhlIHBsYWNlaG9sZGVyIHNob3VsZCBiZSB1c2VkIGZvciB0aGUgY29udGVudC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN1c2Vjb250ZW50cGxhY2Vob2xkZXJcclxuICpcclxuICogQHByb3Ageyhpc0tlZXBpbmdQbGFjZWhvbGRlcjogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gaXNLZWVwaW5nUGxhY2Vob2xkZXJcclxuICogTW9kaWZ5IGlmIHRoZSBwbGFjZWhvbGRlciBzaG91bGQgYmUga2VwdCBhZnRlciB0aGUgY29udGVudCBpcyBsb2FkZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXNrZWVwaW5ncGxhY2Vob2xkZXJcclxuICpcclxuICpcclxuICogQHByb3Ageyhjb250ZW50RXJyb3JFbGVtZW50OiBIVE1MRWxlbWVudCwgY29udGVudDogQ29udGVudCkgPT4gSFRNTEVsZW1lbnR9IGNvbnRlbnRFcnJvckVsZW1lbnRcclxuICogTW9kaWZ5IGFuIGVsZW1lbnQgd2hlbiB0aGUgY29udGVudCBoYXMgZXJyb3Igc3RhdGUgKGZvciBleGFtcGxlLCBpZiBpbWFnZSBjYW5ub3QgYmUgbG9hZGVkKS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNjb250ZW50ZXJyb3JlbGVtZW50XHJcbiAqXHJcbiAqIEBwcm9wIHsoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRhdGE6IFVJRWxlbWVudERhdGEpID0+IEhUTUxFbGVtZW50fSB1aUVsZW1lbnRcclxuICogTW9kaWZ5IGEgVUkgZWxlbWVudCB0aGF0J3MgYmVpbmcgY3JlYXRlZC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN1aWVsZW1lbnRcclxuICpcclxuICogQHByb3Ageyh0aHVtYm5haWw6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gSFRNTEVsZW1lbnR9IHRodW1iRWxcclxuICogTW9kaWZ5IHRoZSB0aHVtYm5haWwgZWxlbWVudCBmcm9tIHdoaWNoIG9wZW5pbmcgem9vbSBhbmltYXRpb24gc3RhcnRzIG9yIGVuZHMuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdGh1bWJlbFxyXG4gKlxyXG4gKiBAcHJvcCB7KHRodW1iQm91bmRzOiBCb3VuZHMgfCB1bmRlZmluZWQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IEJvdW5kc30gdGh1bWJCb3VuZHNcclxuICogTW9kaWZ5IHRoZSB0aHVtYm5haWwgYm91bmRzIGZyb20gd2hpY2ggb3BlbmluZyB6b29tIGFuaW1hdGlvbiBzdGFydHMgb3IgZW5kcy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN0aHVtYmJvdW5kc1xyXG4gKlxyXG4gKiBAcHJvcCB7KHNyY3NldFNpemVzV2lkdGg6IG51bWJlciwgY29udGVudDogQ29udGVudCkgPT4gbnVtYmVyfSBzcmNzZXRTaXplc1dpZHRoXHJcbiAqXHJcbiAqIEBwcm9wIHsocHJldmVudFBvaW50ZXJFdmVudDogYm9vbGVhbiwgZXZlbnQ6IFBvaW50ZXJFdmVudCwgcG9pbnRlclR5cGU6IHN0cmluZykgPT4gYm9vbGVhbn0gcHJldmVudFBvaW50ZXJFdmVudFxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHt7IGZuOiBQaG90b1N3aXBlRmlsdGVyc01hcFtUXSwgcHJpb3JpdHk6IG51bWJlciB9fSBGaWx0ZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdIGV4dGVuZHMgdW5kZWZpbmVkID8gUGhvdG9Td2lwZUV2ZW50PFQ+IDogUGhvdG9Td2lwZUV2ZW50PFQ+ICYgUGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gQXVnbWVudGVkRXZlbnRcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHsoZXZlbnQ6IEF1Z21lbnRlZEV2ZW50PFQ+KSA9PiB2b2lkfSBFdmVudENhbGxiYWNrXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgUGhvdG9Td2lwZSBldmVudCBvYmplY3RcclxuICpcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqL1xyXG5jbGFzcyBQaG90b1N3aXBlRXZlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7VH0gdHlwZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gW2RldGFpbHNdXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodHlwZSwgZGV0YWlscykge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xyXG4gICAgaWYgKGRldGFpbHMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZXRhaWxzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCkge1xyXG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIGJhc2UgY2xhc3MgdGhhdCBjYW4gbGlzdGVuIGFuZCBkaXNwYXRjaCBmb3IgZXZlbnRzLlxyXG4gKiBTaGFyZWQgYnkgUGhvdG9Td2lwZSBDb3JlIGFuZCBQaG90b1N3aXBlIExpZ2h0Ym94LCBleHRlbmRlZCBieSBiYXNlLmpzXHJcbiAqL1xyXG5jbGFzcyBFdmVudGFibGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7eyBbVCBpbiBrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwXT86ICgoZXZlbnQ6IEF1Z21lbnRlZEV2ZW50PFQ+KSA9PiB2b2lkKVtdIH19XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3sgW1QgaW4ga2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXBdPzogRmlsdGVyPFQ+W10gfX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7UGhvdG9Td2lwZSB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMucHN3cCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGVPcHRpb25zIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5vcHRpb25zID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF19IGZuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByaW9yaXR5XHJcbiAgICovXHJcbiAgYWRkRmlsdGVyKG5hbWUsIGZuLCBwcmlvcml0eSA9IDEwMCkge1xyXG4gICAgaWYgKCF0aGlzLl9maWx0ZXJzW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5wdXNoKHsgZm4sIHByaW9yaXR5IH0pO1xyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8uc29ydCgoZjEsIGYyKSA9PiBmMS5wcmlvcml0eSAtIGYyLnByaW9yaXR5KTtcclxuXHJcbiAgICB0aGlzLnBzd3A/LmFkZEZpbHRlcihuYW1lLCBmbiwgcHJpb3JpdHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF19IGZuXHJcbiAgICovXHJcbiAgcmVtb3ZlRmlsdGVyKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyc1tuYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0gPSB0aGlzLl9maWx0ZXJzW25hbWVdLmZpbHRlcihmaWx0ZXIgPT4gKGZpbHRlci5mbiAhPT0gZm4pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHRoaXMucHN3cC5yZW1vdmVGaWx0ZXIobmFtZSwgZm4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGFyYW1ldGVyczxQaG90b1N3aXBlRmlsdGVyc01hcFtUXT59IGFyZ3NcclxuICAgKiBAcmV0dXJucyB7UGFyYW1ldGVyczxQaG90b1N3aXBlRmlsdGVyc01hcFtUXT5bMF19XHJcbiAgICovXHJcbiAgYXBwbHlGaWx0ZXJzKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIGFyZ3NbMF0gPSBmaWx0ZXIuZm4uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcmdzWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrPFQ+fSBmblxyXG4gICAqL1xyXG4gIG9uKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8ucHVzaChmbik7XHJcblxyXG4gICAgLy8gV2hlbiBiaW5kaW5nIGV2ZW50cyB0byBsaWdodGJveCxcclxuICAgIC8vIGFsc28gYmluZCBldmVudHMgdG8gUGhvdG9Td2lwZSBDb3JlLFxyXG4gICAgLy8gaWYgaXQncyBvcGVuLlxyXG4gICAgdGhpcy5wc3dwPy5vbihuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2s8VD59IGZuXHJcbiAgICovXHJcbiAgb2ZmKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdLmZpbHRlcihsaXN0ZW5lciA9PiAoZm4gIT09IGxpc3RlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wc3dwPy5vZmYobmFtZSwgZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBbZGV0YWlsc11cclxuICAgKiBAcmV0dXJucyB7QXVnbWVudGVkRXZlbnQ8VD59XHJcbiAgICovXHJcbiAgZGlzcGF0Y2gobmFtZSwgZGV0YWlscykge1xyXG4gICAgaWYgKHRoaXMucHN3cCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wc3dwLmRpc3BhdGNoKG5hbWUsIGRldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gLyoqIEB0eXBlIHtBdWdtZW50ZWRFdmVudDxUPn0gKi8gKG5ldyBQaG90b1N3aXBlRXZlbnQobmFtZSwgZGV0YWlscykpO1xyXG5cclxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudGFibGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHNldFdpZHRoSGVpZ2h0LCB0b1RyYW5zZm9ybVN0cmluZyB9IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcblxyXG5jbGFzcyBQbGFjZWhvbGRlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBmYWxzZX0gaW1hZ2VTcmNcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbWFnZVNyYywgY29udGFpbmVyKSB7XHJcbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXJcclxuICAgIC8vIChzdHJldGNoZWQgdGh1bWJuYWlsIG9yIHNpbXBsZSBkaXYgYmVoaW5kIHRoZSBtYWluIGltYWdlKVxyXG4gICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCBudWxsfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgJ3Bzd3BfX2ltZyBwc3dwX19pbWctLXBsYWNlaG9sZGVyJyxcclxuICAgICAgaW1hZ2VTcmMgPyAnaW1nJyA6ICdkaXYnLFxyXG4gICAgICBjb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltZ0VsID0gLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqLyAodGhpcy5lbGVtZW50KTtcclxuICAgICAgaW1nRWwuZGVjb2RpbmcgPSAnYXN5bmMnO1xyXG4gICAgICBpbWdFbC5hbHQgPSAnJztcclxuICAgICAgaW1nRWwuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAgIGltZ0VsLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnSU1HJykge1xyXG4gICAgICAvLyBVc2UgdHJhbnNmb3JtIHNjYWxlKCkgdG8gbW9kaWZ5IGltZyBwbGFjZWhvbGRlciBzaXplXHJcbiAgICAgIC8vIChpbnN0ZWFkIG9mIGNoYW5naW5nIHdpZHRoL2hlaWdodCBkaXJlY3RseSkuXHJcbiAgICAgIC8vIFRoaXMgaGVscHMgd2l0aCBwZXJmb3JtYW5jZSwgc3BlY2lmaWNhbGx5IGluIGlPUzE1IFNhZmFyaS5cclxuICAgICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCAyNTAsICdhdXRvJyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMCAwJztcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtU3RyaW5nKDAsIDAsIHdpZHRoIC8gMjUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudD8ucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGlzU2FmYXJpLCBMT0FEX1NUQVRFLCBzZXRXaWR0aEhlaWdodCB9IGZyb20gJy4uL3V0aWwvdXRpbC5qcyc7XHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuL3BsYWNlaG9sZGVyLmpzJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9iYXNlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUJhc2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3V0aWwvdXRpbC5qcycpLkxvYWRTdGF0ZX0gTG9hZFN0YXRlICovXHJcblxyXG5jbGFzcyBDb250ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgU2xpZGUgZGF0YVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IGluc3RhbmNlIFBob3RvU3dpcGUgb3IgUGhvdG9Td2lwZUxpZ2h0Ym94IGluc3RhbmNlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgdGhpcy5kYXRhID0gaXRlbURhdGE7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHR5cGUge1BsYWNlaG9sZGVyIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGUgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnNsaWRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmRpc3BsYXllZEltYWdlSGVpZ2h0ID0gMDtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gTnVtYmVyKHRoaXMuZGF0YS53KSB8fCBOdW1iZXIodGhpcy5kYXRhLndpZHRoKSB8fCAwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBOdW1iZXIodGhpcy5kYXRhLmgpIHx8IE51bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSB8fCAwO1xyXG5cclxuICAgIHRoaXMuaXNBdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0RlY29kaW5nID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge0xvYWRTdGF0ZX0gKi9cclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLklETEU7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS50eXBlKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuZGF0YS50eXBlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuc3JjKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9ICdpbWFnZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnR5cGUgPSAnaHRtbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEluaXQnLCB7IGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQbGFjZWhvbGRlcigpIHtcclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLmtlZXBQbGFjZWhvbGRlcigpKSB7XHJcbiAgICAgIC8vIFdpdGggZGVsYXksIGFzIGltYWdlIG1pZ2h0IGJlIGxvYWRlZCwgYnV0IG5vdCByZW5kZXJlZFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkIGNvbnRlbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXp5XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVsb2FkXVxyXG4gICAqL1xyXG4gIGxvYWQoaXNMYXp5LCByZWxvYWQpIHtcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMudXNlUGxhY2Vob2xkZXIoKSkge1xyXG4gICAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlclNyYyA9IHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyU3JjJyxcclxuICAgICAgICAgIC8vIHVzZSAgaW1hZ2UtYmFzZWQgcGxhY2Vob2xkZXIgb25seSBmb3IgdGhlIGZpcnN0IHNsaWRlLFxyXG4gICAgICAgICAgLy8gYXMgcmVuZGVyaW5nIChldmVuIHNtYWxsIHN0cmV0Y2hlZCB0aHVtYm5haWwpIGlzIGFuIGV4cGVuc2l2ZSBvcGVyYXRpb25cclxuICAgICAgICAgICh0aGlzLmRhdGEubXNyYyAmJiB0aGlzLnNsaWRlLmlzRmlyc3RTbGlkZSkgPyB0aGlzLmRhdGEubXNyYyA6IGZhbHNlLFxyXG4gICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IG5ldyBQbGFjZWhvbGRlcihcclxuICAgICAgICAgIHBsYWNlaG9sZGVyU3JjLFxyXG4gICAgICAgICAgdGhpcy5zbGlkZS5jb250YWluZXJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyRWwgPSB0aGlzLnBsYWNlaG9sZGVyLmVsZW1lbnQ7XHJcbiAgICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIHRvIERPTSBpZiBpdCB3YXMgYWxyZWFkeSBjcmVhdGVkXHJcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyRWwgJiYgIXBsYWNlaG9sZGVyRWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIucHJlcGVuZChwbGFjZWhvbGRlckVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50ICYmICFyZWxvYWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TG9hZCcsIHsgY29udGVudDogdGhpcywgaXNMYXp5IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cF9faW1nJywgJ2ltZycpO1xyXG4gICAgICAvLyBTdGFydCBsb2FkaW5nIG9ubHkgYWZ0ZXIgd2lkdGggaXMgZGVmaW5lZCwgYXMgc2l6ZXMgbWlnaHQgZGVwZW5kIG9uIGl0LlxyXG4gICAgICAvLyBEdWUgdG8gU2FmYXJpIGZlYXR1cmUsIHdlIG11c3QgZGVmaW5lIHNpemVzIGJlZm9yZSBzcmNzZXQuXHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZEltYWdlV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShpc0xhenkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19jb250ZW50JywgJ2RpdicpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5kYXRhLmh0bWwgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbG9hZCAmJiB0aGlzLnNsaWRlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGF6eVxyXG4gICAqL1xyXG4gIGxvYWRJbWFnZShpc0xhenkpIHtcclxuICAgIGlmICghdGhpcy5pc0ltYWdlQ29udGVudCgpXHJcbiAgICAgIHx8ICF0aGlzLmVsZW1lbnRcclxuICAgICAgfHwgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExvYWRJbWFnZScsIHsgY29udGVudDogdGhpcywgaXNMYXp5IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IC8qKiBAdHlwZSBIVE1MSW1hZ2VFbGVtZW50ICovICh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3Jjc2V0U2l6ZXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnNyY3NldCkge1xyXG4gICAgICBpbWFnZUVsZW1lbnQuc3Jjc2V0ID0gdGhpcy5kYXRhLnNyY3NldDtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5kYXRhLnNyYyA/PyAnJztcclxuICAgIGltYWdlRWxlbWVudC5hbHQgPSB0aGlzLmRhdGEuYWx0ID8/ICcnO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkxPQURJTkc7XHJcblxyXG4gICAgaWYgKGltYWdlRWxlbWVudC5jb21wbGV0ZSkge1xyXG4gICAgICB0aGlzLm9uTG9hZGVkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbWFnZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25Mb2FkZWQoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGltYWdlRWxlbWVudC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FcnJvcigpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNzaWduIHNsaWRlIHRvIGNvbnRlbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U2xpZGV9IHNsaWRlXHJcbiAgICovXHJcbiAgc2V0U2xpZGUoc2xpZGUpIHtcclxuICAgIHRoaXMuc2xpZGUgPSBzbGlkZTtcclxuICAgIHRoaXMuaGFzU2xpZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IHNsaWRlLnBzd3A7XHJcblxyXG4gICAgLy8gdG9kbzogZG8gd2UgbmVlZCB0byB1bnNldCBzbGlkZT9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgbG9hZCBzdWNjZXNzIGhhbmRsZXJcclxuICAgKi9cclxuICBvbkxvYWRlZCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkxPQURFRDtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZENvbXBsZXRlJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgY29udGVudDogdGhpcyB9KTtcclxuXHJcbiAgICAgIC8vIGlmIGNvbnRlbnQgaXMgcmVsb2FkZWRcclxuICAgICAgaWYgKHRoaXMuc2xpZGUuaXNBY3RpdmVcclxuICAgICAgICAgICYmIHRoaXMuc2xpZGUuaGVhdnlBcHBlbmRlZFxyXG4gICAgICAgICAgJiYgIXRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQoKTtcclxuICAgICAgICB0aGlzLnNsaWRlLnVwZGF0ZUNvbnRlbnRTaXplKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5MT0FERUQgfHwgdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGVudCBsb2FkIGVycm9yIGhhbmRsZXJcclxuICAgKi9cclxuICBvbkVycm9yKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuRVJST1I7XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKTtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZENvbXBsZXRlJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgaXNFcnJvcjogdHJ1ZSwgY29udGVudDogdGhpcyB9KTtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZEVycm9yJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgY29udGVudDogdGhpcyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgY29udGVudCBpcyBjdXJyZW50bHkgbG9hZGluZ1xyXG4gICAqL1xyXG4gIGlzTG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzQ29udGVudExvYWRpbmcnLFxyXG4gICAgICB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURJTkcsXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgaXMgaW4gZXJyb3Igc3RhdGVcclxuICAgKi9cclxuICBpc0Vycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1I7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgaXMgaW1hZ2VcclxuICAgKi9cclxuICBpc0ltYWdlQ29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdpbWFnZSc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgY29udGVudCBzaXplXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKFxyXG4gICAgICAnY29udGVudFJlc2l6ZScsXHJcbiAgICAgIHsgY29udGVudDogdGhpcywgd2lkdGgsIGhlaWdodCB9KS5kZWZhdWx0UHJldmVudGVkXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiAhdGhpcy5pc0Vycm9yKCkpIHtcclxuICAgICAgY29uc3QgaXNJbml0aWFsU2l6ZVVwZGF0ZSA9ICghdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoICYmIHdpZHRoKTtcclxuXHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmRpc3BsYXllZEltYWdlSGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGlzSW5pdGlhbFNpemVVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTcmNzZXRTaXplcygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goXHJcbiAgICAgICAgICAnaW1hZ2VTaXplQ2hhbmdlJyxcclxuICAgICAgICAgIHsgc2xpZGU6IHRoaXMuc2xpZGUsIHdpZHRoLCBoZWlnaHQsIGNvbnRlbnQ6IHRoaXMgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiB0aGUgY29udGVudCBjYW4gYmUgem9vbWVkXHJcbiAgICovXHJcbiAgaXNab29tYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzQ29udGVudFpvb21hYmxlJyxcclxuICAgICAgdGhpcy5pc0ltYWdlQ29udGVudCgpICYmICh0aGlzLnN0YXRlICE9PSBMT0FEX1NUQVRFLkVSUk9SKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBpbWFnZSBzcmNzZXQgc2l6ZXMgYXR0cmlidXRlIGJhc2VkIG9uIHdpZHRoIGFuZCBoZWlnaHRcclxuICAgKi9cclxuICB1cGRhdGVTcmNzZXRTaXplcygpIHtcclxuICAgIC8vIEhhbmRsZSBzcmNzZXQgc2l6ZXMgYXR0cmlidXRlLlxyXG4gICAgLy9cclxuICAgIC8vIE5ldmVyIGxvd2VyIHF1YWxpdHksIGlmIGl0IHdhcyBpbmNyZWFzZWQgcHJldmlvdXNseS5cclxuICAgIC8vIENocm9tZSBkb2VzIHRoaXMgYXV0b21hdGljYWxseSwgRmlyZWZveCBhbmQgU2FmYXJpIGRvIG5vdCxcclxuICAgIC8vIHNvIHdlIHN0b3JlIGxhcmdlc3QgdXNlZCBzaXplIGluIGRhdGFzZXQuXHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZUNvbnRlbnQoKSB8fCAhdGhpcy5lbGVtZW50IHx8ICF0aGlzLmRhdGEuc3Jjc2V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IC8qKiBAdHlwZSBIVE1MSW1hZ2VFbGVtZW50ICovICh0aGlzLmVsZW1lbnQpO1xyXG4gICAgY29uc3Qgc2l6ZXNXaWR0aCA9IHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnc3Jjc2V0U2l6ZXNXaWR0aCcsXHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZVxyXG4gICAgICB8fCBzaXplc1dpZHRoID4gcGFyc2VJbnQoaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemUsIDEwKVxyXG4gICAgKSB7XHJcbiAgICAgIGltYWdlLnNpemVzID0gc2l6ZXNXaWR0aCArICdweCc7XHJcbiAgICAgIGltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplID0gU3RyaW5nKHNpemVzV2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIGNvbnRlbnQgc2hvdWxkIHVzZSBhIHBsYWNlaG9sZGVyIChmcm9tIG1zcmMgYnkgZGVmYXVsdClcclxuICAgKi9cclxuICB1c2VQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ3VzZUNvbnRlbnRQbGFjZWhvbGRlcicsXHJcbiAgICAgIHRoaXMuaXNJbWFnZUNvbnRlbnQoKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgY29udGVudCB3aXRoIGxhenktbG9hZGluZyBwYXJhbVxyXG4gICAqL1xyXG4gIGxhenlMb2FkKCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMYXp5TG9hZCcsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIGtlcHQgYWZ0ZXIgY29udGVudCBpcyBsb2FkZWRcclxuICAgKi9cclxuICBrZWVwUGxhY2Vob2xkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdpc0tlZXBpbmdQbGFjZWhvbGRlcicsXHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nKCksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuaGFzU2xpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2xpZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnREZXN0cm95JywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm9ubG9hZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5vbmVycm9yID0gbnVsbDtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgZGlzcGxheUVycm9yKCkge1xyXG4gICAgaWYgKHRoaXMuc2xpZGUpIHtcclxuICAgICAgbGV0IGVycm9yTXNnRWwgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19lcnJvci1tc2cnLCAnZGl2Jyk7XHJcbiAgICAgIGVycm9yTXNnRWwuaW5uZXJUZXh0ID0gdGhpcy5pbnN0YW5jZS5vcHRpb25zPy5lcnJvck1zZyA/PyAnJztcclxuICAgICAgZXJyb3JNc2dFbCA9IC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovICh0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgICAnY29udGVudEVycm9yRWxlbWVudCcsXHJcbiAgICAgICAgZXJyb3JNc2dFbCxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICkpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19jb250ZW50IHBzd3BfX2Vycm9yLW1zZy1jb250YWluZXInLCAnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlcnJvck1zZ0VsKTtcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGFwcGVuZCgpIHtcclxuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQgfHwgIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUikge1xyXG4gICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRBcHBlbmQnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwcG9ydHNEZWNvZGUgPSAoJ2RlY29kZScgaW4gdGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpKSB7XHJcbiAgICAgIC8vIFVzZSBkZWNvZGUoKSBvbiBuZWFyYnkgc2xpZGVzXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIE5lYXJieSBzbGlkZSBpbWFnZXMgYXJlIGluIERPTSBhbmQgbm90IGhpZGRlbiB2aWEgZGlzcGxheTpub25lLlxyXG4gICAgICAvLyBIb3dldmVyLCB0aGV5IGFyZSBwbGFjZWQgb2Zmc2NyZWVuICh0byB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSkuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIFNvbWUgYnJvd3NlcnMgZG8gbm90IGNvbXBvc2l0ZSB0aGUgaW1hZ2UgdW50aWwgaXQncyBhY3R1YWxseSB2aXNpYmxlLFxyXG4gICAgICAvLyB1c2luZyBkZWNvZGUoKSBoZWxwcy5cclxuICAgICAgLy9cclxuICAgICAgLy8gWW91IG1pZ2h0IGFzayBcIndoeSBkb250IHlvdSBqdXN0IGRlY29kZSgpIGFuZCB0aGVuIGFwcGVuZCBhbGwgaW1hZ2VzXCIsXHJcbiAgICAgIC8vIHRoYXQncyBiZWNhdXNlIEkgd2FudCB0byBzaG93IGltYWdlIGJlZm9yZSBpdCdzIGZ1bGx5IGxvYWRlZCxcclxuICAgICAgLy8gYXMgYnJvd3NlciBjYW4gcmVuZGVyIHBhcnRzIG9mIGltYWdlIHdoaWxlIGl0IGlzIGxvYWRpbmcuXHJcbiAgICAgIC8vIFdlIGRvIG5vdCBkbyB0aGlzIGluIFNhZmFyaSBkdWUgdG8gcGFydGlhbCBsb2FkaW5nIGJ1Zy5cclxuICAgICAgaWYgKHN1cHBvcnRzRGVjb2RlICYmIHRoaXMuc2xpZGUgJiYgKCF0aGlzLnNsaWRlLmlzQWN0aXZlIHx8IGlzU2FmYXJpKCkpKSB7XHJcbiAgICAgICAgdGhpcy5pc0RlY29kaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyBwdXJwb3NlZnVsbHkgdXNpbmcgZmluYWxseSBpbnN0ZWFkIG9mIHRoZW4sXHJcbiAgICAgICAgLy8gYXMgaWYgc3Jjc2V0IHNpemVzIGNoYW5nZXMgZHluYW1pY2FsbHkgLSBpdCBtYXkgY2F1c2UgZGVjb2RlIGVycm9yXHJcbiAgICAgICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqL1xyXG4gICAgICAgICh0aGlzLmVsZW1lbnQpLmRlY29kZSgpLmNhdGNoKCgpID0+IHt9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNEZWNvZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aXZhdGUgdGhlIHNsaWRlLFxyXG4gICAqIGFjdGl2ZSBzbGlkZSBpcyBnZW5lcmFsbHkgdGhlIGN1cnJlbnQgb25lLFxyXG4gICAqIG1lYW5pbmcgdGhlIHVzZXIgY2FuIHNlZSBpdC5cclxuICAgKi9cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QWN0aXZhdGUnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZFxyXG4gICAgICB8fCAhdGhpcy5zbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiB0aGlzLmlzRGVjb2RpbmcgJiYgIWlzU2FmYXJpKCkpIHtcclxuICAgICAgLy8gYWRkIGltYWdlIHRvIHNsaWRlIHdoZW4gaXQgYmVjb21lcyBhY3RpdmUsXHJcbiAgICAgIC8vIGV2ZW4gaWYgaXQncyBub3QgZmluaXNoZWQgZGVjb2RpbmdcclxuICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXJyb3IoKSkge1xyXG4gICAgICB0aGlzLmxvYWQoZmFsc2UsIHRydWUpOyAvLyB0cnkgdG8gcmVsb2FkXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVhY3RpdmF0ZSB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50RGVhY3RpdmF0ZScsIHsgY29udGVudDogdGhpcyB9KTtcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBjb250ZW50IGZyb20gRE9NXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRSZW1vdmUnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCB0aGUgaW1hZ2UgY29udGVudCB0byBzbGlkZSBjb250YWluZXJcclxuICAgKi9cclxuICBhcHBlbmRJbWFnZSgpIHtcclxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFwcGVuZEltYWdlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVuc3VyZSB0aGF0IGVsZW1lbnQgZXhpc3RzIGFuZCBpcyBub3QgYWxyZWFkeSBhcHBlbmRlZFxyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5lbGVtZW50ICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURFRCB8fCB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiIsImltcG9ydCB7IGdldFZpZXdwb3J0U2l6ZSwgZ2V0UGFuQXJlYVNpemUgfSBmcm9tICcuLi91dGlsL3ZpZXdwb3J0LXNpemUuanMnO1xyXG5pbXBvcnQgWm9vbUxldmVsIGZyb20gJy4vem9vbS1sZXZlbC5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb250ZW50LmpzJykuZGVmYXVsdH0gQ29udGVudCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuY29uc3QgTUlOX1NMSURFU19UT19DQUNIRSA9IDU7XHJcblxyXG4vKipcclxuICogTGF6eS1sb2FkIGFuIGltYWdlXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBib3RoIGJ5IExpZ2h0Ym94IGFuZCBQaG90b1N3aXBlIGNvcmUsXHJcbiAqIHRodXMgaXQgY2FuIGJlIGNhbGxlZCBiZWZvcmUgZGlhbG9nIGlzIG9wZW5lZC5cclxuICpcclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IGluc3RhbmNlIFBob3RvU3dpcGUgb3IgUGhvdG9Td2lwZUxpZ2h0Ym94IGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKiBAcmV0dXJucyB7Q29udGVudH0gSW1hZ2UgdGhhdCBpcyBiZWluZyBkZWNvZGVkIG9yIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KSB7XHJcbiAgY29uc3QgY29udGVudCA9IGluc3RhbmNlLmNyZWF0ZUNvbnRlbnRGcm9tRGF0YShpdGVtRGF0YSwgaW5kZXgpO1xyXG4gIC8qKiBAdHlwZSB7Wm9vbUxldmVsIHwgdW5kZWZpbmVkfSAqL1xyXG4gIGxldCB6b29tTGV2ZWw7XHJcblxyXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gaW5zdGFuY2U7XHJcblxyXG4gIC8vIFdlIG5lZWQgdG8ga25vdyBkaW1lbnNpb25zIG9mIHRoZSBpbWFnZSB0byBwcmVsb2FkIGl0LFxyXG4gIC8vIGFzIGl0IG1pZ2h0IHVzZSBzcmNzZXQsIGFuZCB3ZSBuZWVkIHRvIGRlZmluZSBzaXplc1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICB6b29tTGV2ZWwgPSBuZXcgWm9vbUxldmVsKG9wdGlvbnMsIGl0ZW1EYXRhLCAtMSk7XHJcblxyXG4gICAgbGV0IHZpZXdwb3J0U2l6ZTtcclxuICAgIGlmIChpbnN0YW5jZS5wc3dwKSB7XHJcbiAgICAgIHZpZXdwb3J0U2l6ZSA9IGluc3RhbmNlLnBzd3Audmlld3BvcnRTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlld3BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKG9wdGlvbnMsIGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYW5BcmVhU2l6ZSA9IGdldFBhbkFyZWFTaXplKG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KTtcclxuICAgIHpvb21MZXZlbC51cGRhdGUoY29udGVudC53aWR0aCwgY29udGVudC5oZWlnaHQsIHBhbkFyZWFTaXplKTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQubGF6eUxvYWQoKTtcclxuXHJcbiAgaWYgKHpvb21MZXZlbCkge1xyXG4gICAgY29udGVudC5zZXREaXNwbGF5ZWRTaXplKFxyXG4gICAgICBNYXRoLmNlaWwoY29udGVudC53aWR0aCAqIHpvb21MZXZlbC5pbml0aWFsKSxcclxuICAgICAgTWF0aC5jZWlsKGNvbnRlbnQuaGVpZ2h0ICogem9vbUxldmVsLmluaXRpYWwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogTGF6eS1sb2FkcyBzcGVjaWZpYyBzbGlkZS5cclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJvdGggYnkgTGlnaHRib3ggYW5kIFBob3RvU3dpcGUgY29yZSxcclxuICogdGh1cyBpdCBjYW4gYmUgY2FsbGVkIGJlZm9yZSBkaWFsb2cgaXMgb3BlbmVkLlxyXG4gKlxyXG4gKiBCeSBkZWZhdWx0LCBpdCBsb2FkcyBpbWFnZSBiYXNlZCBvbiB2aWV3cG9ydCBzaXplIGFuZCBpbml0aWFsIHpvb20gbGV2ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBpbnN0YW5jZSBQaG90b1N3aXBlIG9yIFBob3RvU3dpcGVMaWdodGJveCBldmVudGFibGUgaW5zdGFuY2VcclxuICogQHJldHVybnMge0NvbnRlbnQgfCB1bmRlZmluZWR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF6eUxvYWRTbGlkZShpbmRleCwgaW5zdGFuY2UpIHtcclxuICBjb25zdCBpdGVtRGF0YSA9IGluc3RhbmNlLmdldEl0ZW1EYXRhKGluZGV4KTtcclxuXHJcbiAgaWYgKGluc3RhbmNlLmRpc3BhdGNoKCdsYXp5TG9hZFNsaWRlJywgeyBpbmRleCwgaXRlbURhdGEgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KTtcclxufVxyXG5cclxuY2xhc3MgQ29udGVudExvYWRlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIC8vIFRvdGFsIGFtb3VudCBvZiBjYWNoZWQgaW1hZ2VzXHJcbiAgICB0aGlzLmxpbWl0ID0gTWF0aC5tYXgoXHJcbiAgICAgIHBzd3Aub3B0aW9ucy5wcmVsb2FkWzBdICsgcHN3cC5vcHRpb25zLnByZWxvYWRbMV0gKyAxLFxyXG4gICAgICBNSU5fU0xJREVTX1RPX0NBQ0hFXHJcbiAgICApO1xyXG4gICAgLyoqIEB0eXBlIHtDb250ZW50W119ICovXHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6eSBsb2FkIG5lYXJieSBzbGlkZXMgYmFzZWQgb24gYHByZWxvYWRgIG9wdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGlmZl0gRGlmZmVyZW5jZSBiZXR3ZWVuIHNsaWRlIGluZGV4ZXMgdGhhdCB3YXMgY2hhbmdlZCByZWNlbnRseSwgb3IgMC5cclxuICAgKi9cclxuICB1cGRhdGVMYXp5KGRpZmYpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAocHN3cC5kaXNwYXRjaCgnbGF6eUxvYWQnKS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHByZWxvYWQgfSA9IHBzd3Aub3B0aW9ucztcclxuICAgIGNvbnN0IGlzRm9yd2FyZCA9IGRpZmYgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAoZGlmZiA+PSAwKTtcclxuICAgIGxldCBpO1xyXG5cclxuICAgIC8vIHByZWxvYWRbMV0gLSBudW0gaXRlbXMgdG8gcHJlbG9hZCBpbiBmb3J3YXJkIGRpcmVjdGlvblxyXG4gICAgZm9yIChpID0gMDsgaSA8PSBwcmVsb2FkWzFdOyBpKyspIHtcclxuICAgICAgdGhpcy5sb2FkU2xpZGVCeUluZGV4KHBzd3AuY3VyckluZGV4ICsgKGlzRm9yd2FyZCA/IGkgOiAoLWkpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJlbG9hZFswXSAtIG51bSBpdGVtcyB0byBwcmVsb2FkIGluIGJhY2t3YXJkIGRpcmVjdGlvblxyXG4gICAgZm9yIChpID0gMTsgaSA8PSBwcmVsb2FkWzBdOyBpKyspIHtcclxuICAgICAgdGhpcy5sb2FkU2xpZGVCeUluZGV4KHBzd3AuY3VyckluZGV4ICsgKGlzRm9yd2FyZCA/ICgtaSkgOiBpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdGlhbEluZGV4XHJcbiAgICovXHJcbiAgbG9hZFNsaWRlQnlJbmRleChpbml0aWFsSW5kZXgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wc3dwLmdldExvb3BlZEluZGV4KGluaXRpYWxJbmRleCk7XHJcbiAgICAvLyB0cnkgdG8gZ2V0IGNhY2hlZCBjb250ZW50XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudEJ5SW5kZXgoaW5kZXgpO1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIC8vIG5vIGNhY2hlZCBjb250ZW50LCBzbyB0cnkgdG8gbG9hZCBmcm9tIHNjcmF0Y2g6XHJcbiAgICAgIGNvbnRlbnQgPSBsYXp5TG9hZFNsaWRlKGluZGV4LCB0aGlzLnBzd3ApO1xyXG4gICAgICAvLyBpZiBjb250ZW50IGNhbiBiZSBsb2FkZWQsIGFkZCBpdCB0byBjYWNoZTpcclxuICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZFRvQ2FjaGUoY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGV9IHNsaWRlXHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9XHJcbiAgICovXHJcbiAgZ2V0Q29udGVudEJ5U2xpZGUoc2xpZGUpIHtcclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50QnlJbmRleChzbGlkZS5pbmRleCk7XHJcbiAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgLy8gY3JlYXRlIGNvbnRlbnQgaWYgbm90IGZvdW5kIGluIGNhY2hlXHJcbiAgICAgIGNvbnRlbnQgPSB0aGlzLnBzd3AuY3JlYXRlQ29udGVudEZyb21EYXRhKHNsaWRlLmRhdGEsIHNsaWRlLmluZGV4KTtcclxuICAgICAgdGhpcy5hZGRUb0NhY2hlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFzc2lnbiBzbGlkZSB0byBjb250ZW50XHJcbiAgICBjb250ZW50LnNldFNsaWRlKHNsaWRlKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q29udGVudH0gY29udGVudFxyXG4gICAqL1xyXG4gIGFkZFRvQ2FjaGUoY29udGVudCkge1xyXG4gICAgLy8gbW92ZSB0byB0aGUgZW5kIG9mIGFycmF5XHJcbiAgICB0aGlzLnJlbW92ZUJ5SW5kZXgoY29udGVudC5pbmRleCk7XHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jYWNoZWRJdGVtcy5sZW5ndGggPiB0aGlzLmxpbWl0KSB7XHJcbiAgICAgIC8vIERlc3Ryb3kgdGhlIGZpcnN0IGNvbnRlbnQgdGhhdCdzIG5vdCBhdHRhY2hlZFxyXG4gICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5fY2FjaGVkSXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICFpdGVtLmlzQXR0YWNoZWQgJiYgIWl0ZW0uaGFzU2xpZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoaW5kZXhUb1JlbW92ZSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVkSXRlbSA9IHRoaXMuX2NhY2hlZEl0ZW1zLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKVswXTtcclxuICAgICAgICByZW1vdmVkSXRlbS5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYW4gaW1hZ2UgZnJvbSBjYWNoZSwgZG9lcyBub3QgZGVzdHJveSgpIGl0LCBqdXN0IHJlbW92ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICByZW1vdmVCeUluZGV4KGluZGV4KSB7XHJcbiAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5fY2FjaGVkSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pbmRleCA9PT0gaW5kZXgpO1xyXG4gICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuX2NhY2hlZEl0ZW1zLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gICAqL1xyXG4gIGdldENvbnRlbnRCeUluZGV4KGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkSXRlbXMuZmluZChjb250ZW50ID0+IGNvbnRlbnQuaW5kZXggPT09IGluZGV4KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcy5mb3JFYWNoKGNvbnRlbnQgPT4gY29udGVudC5kZXN0cm95KCkpO1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMgPSBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRMb2FkZXI7XHJcbiIsImltcG9ydCBFdmVudGFibGUgZnJvbSAnLi9ldmVudGFibGUuanMnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50c0Zyb21PcHRpb24gfSBmcm9tICcuLi91dGlsL3V0aWwuanMnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9zbGlkZS9jb250ZW50LmpzJztcclxuaW1wb3J0IHsgbGF6eUxvYWREYXRhIH0gZnJvbSAnLi4vc2xpZGUvbG9hZGVyLmpzJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vcGhvdG9zd2lwZS5qc1wiKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vc2xpZGUvc2xpZGUuanNcIikuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIGJhc2UgY2xhc3MgdGhhdCBjYW4gcmV0cmlldmUgZGF0YSBhYm91dCBldmVyeSBzbGlkZS5cclxuICogU2hhcmVkIGJ5IFBob3RvU3dpcGUgQ29yZSBhbmQgUGhvdG9Td2lwZSBMaWdodGJveFxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZUJhc2UgZXh0ZW5kcyBFdmVudGFibGUge1xyXG4gIC8qKlxyXG4gICAqIEdldCB0b3RhbCBudW1iZXIgb2Ygc2xpZGVzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldE51bUl0ZW1zKCkge1xyXG4gICAgbGV0IG51bUl0ZW1zID0gMDtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLm9wdGlvbnM/LmRhdGFTb3VyY2U7XHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2UgJiYgJ2xlbmd0aCcgaW4gZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBtYXkgYmUgYW4gYXJyYXkgb3IganVzdCBvYmplY3Qgd2l0aCBsZW5ndGggcHJvcGVydHlcclxuICAgICAgbnVtSXRlbXMgPSBkYXRhU291cmNlLmxlbmd0aDtcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZSAmJiAnZ2FsbGVyeScgaW4gZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBxdWVyeSBET00gZWxlbWVudHNcclxuICAgICAgaWYgKCFkYXRhU291cmNlLml0ZW1zKSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5pdGVtcyA9IHRoaXMuX2dldEdhbGxlcnlET01FbGVtZW50cyhkYXRhU291cmNlLmdhbGxlcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIG51bUl0ZW1zID0gZGF0YVNvdXJjZS5pdGVtcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsZWdhY3kgZXZlbnQsIGJlZm9yZSBmaWx0ZXJzIHdlcmUgaW50cm9kdWNlZFxyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmRpc3BhdGNoKCdudW1JdGVtcycsIHtcclxuICAgICAgZGF0YVNvdXJjZSxcclxuICAgICAgbnVtSXRlbXNcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdudW1JdGVtcycsIGV2ZW50Lm51bUl0ZW1zLCBkYXRhU291cmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBzbGlkZURhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7Q29udGVudH1cclxuICAgKi9cclxuICBjcmVhdGVDb250ZW50RnJvbURhdGEoc2xpZGVEYXRhLCBpbmRleCkge1xyXG4gICAgcmV0dXJuIG5ldyBDb250ZW50KHNsaWRlRGF0YSwgdGhpcywgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGl0ZW0gZGF0YSBieSBpbmRleC5cclxuICAgKlxyXG4gICAqIFwiaXRlbSBkYXRhXCIgc2hvdWxkIGNvbnRhaW4gbm9ybWFsaXplZCBpbmZvcm1hdGlvbiB0aGF0IFBob3RvU3dpcGUgbmVlZHMgdG8gZ2VuZXJhdGUgYSBzbGlkZS5cclxuICAgKiBGb3IgZXhhbXBsZSwgaXQgbWF5IGNvbnRhaW4gcHJvcGVydGllcyBsaWtlXHJcbiAgICogYHNyY2AsIGBzcmNzZXRgLCBgd2AsIGBoYCwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGdlbmVyYXRlIGEgc2xpZGUgd2l0aCBpbWFnZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtTbGlkZURhdGF9XHJcbiAgICovXHJcbiAgZ2V0SXRlbURhdGEoaW5kZXgpIHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLm9wdGlvbnM/LmRhdGFTb3VyY2U7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlRGF0YSB8IEhUTUxFbGVtZW50fSAqL1xyXG4gICAgbGV0IGRhdGFTb3VyY2VJdGVtID0ge307XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhU291cmNlKSkge1xyXG4gICAgICAvLyBEYXRhc291cmNlIGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzXHJcbiAgICAgIGRhdGFTb3VyY2VJdGVtID0gZGF0YVNvdXJjZVtpbmRleF07XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UgJiYgJ2dhbGxlcnknIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gZGF0YVNvdXJjZSBoYXMgZ2FsbGVyeSBwcm9wZXJ0eSxcclxuICAgICAgLy8gdGh1cyBpdCB3YXMgY3JlYXRlZCBieSBMaWdodGJveCwgYmFzZWQgb25cclxuICAgICAgLy8gZ2FsbGVyeSBhbmQgY2hpbGRyZW4gb3B0aW9uc1xyXG5cclxuICAgICAgLy8gcXVlcnkgRE9NIGVsZW1lbnRzXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIGRhdGFTb3VyY2UuaXRlbXMgPSB0aGlzLl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZGF0YVNvdXJjZS5nYWxsZXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YVNvdXJjZUl0ZW0gPSBkYXRhU291cmNlLml0ZW1zW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbURhdGEgPSBkYXRhU291cmNlSXRlbTtcclxuXHJcbiAgICBpZiAoaXRlbURhdGEgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgIGl0ZW1EYXRhID0gdGhpcy5fZG9tRWxlbWVudFRvSXRlbURhdGEoaXRlbURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BhdGNoaW5nIHRoZSBpdGVtRGF0YSBldmVudCxcclxuICAgIC8vIGl0J3MgYSBsZWdhY3kgdmVyaW9uIGJlZm9yZSBmaWx0ZXJzIHdlcmUgaW50cm9kdWNlZFxyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmRpc3BhdGNoKCdpdGVtRGF0YScsIHtcclxuICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhIHx8IHt9LFxyXG4gICAgICBpbmRleFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdpdGVtRGF0YScsIGV2ZW50Lml0ZW1EYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYXJyYXkgb2YgZ2FsbGVyeSBET00gZWxlbWVudHMsXHJcbiAgICogYmFzZWQgb24gY2hpbGRTZWxlY3RvciBhbmQgZ2FsbGVyeSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZ2FsbGVyeUVsZW1lbnRcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX1cclxuICAgKi9cclxuICBfZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGdhbGxlcnlFbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zPy5jaGlsZHJlbiB8fCB0aGlzLm9wdGlvbnM/LmNoaWxkU2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGdldEVsZW1lbnRzRnJvbU9wdGlvbihcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4sXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkU2VsZWN0b3IsXHJcbiAgICAgICAgZ2FsbGVyeUVsZW1lbnRcclxuICAgICAgKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW2dhbGxlcnlFbGVtZW50XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIERPTSBlbGVtZW50IHRvIGl0ZW0gZGF0YSBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50XHJcbiAgICogQHJldHVybnMge1NsaWRlRGF0YX1cclxuICAgKi9cclxuICBfZG9tRWxlbWVudFRvSXRlbURhdGEoZWxlbWVudCkge1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZURhdGF9ICovXHJcbiAgICBjb25zdCBpdGVtRGF0YSA9IHtcclxuICAgICAgZWxlbWVudFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5rRWwgPSAvKiogQHR5cGUge0hUTUxBbmNob3JFbGVtZW50fSAqLyAoXHJcbiAgICAgIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnXHJcbiAgICAgICAgPyBlbGVtZW50XHJcbiAgICAgICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGlua0VsKSB7XHJcbiAgICAgIC8vIHNyYyBjb21lcyBmcm9tIGRhdGEtcHN3cC1zcmMgYXR0cmlidXRlLFxyXG4gICAgICAvLyBpZiBpdCdzIGVtcHR5IGxpbmsgaHJlZiBpcyB1c2VkXHJcbiAgICAgIGl0ZW1EYXRhLnNyYyA9IGxpbmtFbC5kYXRhc2V0LnBzd3BTcmMgfHwgbGlua0VsLmhyZWY7XHJcblxyXG4gICAgICBpZiAobGlua0VsLmRhdGFzZXQucHN3cFNyY3NldCkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnNyY3NldCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BTcmNzZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGl0ZW1EYXRhLndpZHRoID0gbGlua0VsLmRhdGFzZXQucHN3cFdpZHRoID8gcGFyc2VJbnQobGlua0VsLmRhdGFzZXQucHN3cFdpZHRoLCAxMCkgOiAwO1xyXG4gICAgICBpdGVtRGF0YS5oZWlnaHQgPSBsaW5rRWwuZGF0YXNldC5wc3dwSGVpZ2h0ID8gcGFyc2VJbnQobGlua0VsLmRhdGFzZXQucHN3cEhlaWdodCwgMTApIDogMDtcclxuXHJcbiAgICAgIC8vIHN1cHBvcnQgbGVnYWN5IHcgJiBoIHByb3BlcnRpZXNcclxuICAgICAgaXRlbURhdGEudyA9IGl0ZW1EYXRhLndpZHRoO1xyXG4gICAgICBpdGVtRGF0YS5oID0gaXRlbURhdGEuaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BUeXBlKSB7XHJcbiAgICAgICAgaXRlbURhdGEudHlwZSA9IGxpbmtFbC5kYXRhc2V0LnBzd3BUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0aHVtYm5haWxFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgICBpZiAodGh1bWJuYWlsRWwpIHtcclxuICAgICAgICAvLyBtc3JjIGlzIFVSTCB0byBwbGFjZWhvbGRlciBpbWFnZSB0aGF0J3MgZGlzcGxheWVkIGJlZm9yZSBsYXJnZSBpbWFnZSBpcyBsb2FkZWRcclxuICAgICAgICAvLyBieSBkZWZhdWx0IGl0J3MgZGlzcGxheWVkIG9ubHkgZm9yIHRoZSBmaXJzdCBzbGlkZVxyXG4gICAgICAgIGl0ZW1EYXRhLm1zcmMgPSB0aHVtYm5haWxFbC5jdXJyZW50U3JjIHx8IHRodW1ibmFpbEVsLnNyYztcclxuICAgICAgICBpdGVtRGF0YS5hbHQgPSB0aHVtYm5haWxFbC5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGlua0VsLmRhdGFzZXQucHN3cENyb3BwZWQgfHwgbGlua0VsLmRhdGFzZXQuY3JvcHBlZCkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnRodW1iQ3JvcHBlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hcHBseUZpbHRlcnMoJ2RvbUl0ZW1EYXRhJywgaXRlbURhdGEsIGVsZW1lbnQsIGxpbmtFbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXp5LWxvYWQgYnkgc2xpZGUgZGF0YVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9IEltYWdlIHRoYXQgaXMgYmVpbmcgZGVjb2RlZCBvciBmYWxzZS5cclxuICAgKi9cclxuICBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCB0aGlzLCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1N3aXBlQmFzZTtcclxuIiwiaW1wb3J0IHtcclxuICBzZXRUcmFuc2Zvcm0sXHJcbiAgZXF1YWxpemVQb2ludHMsXHJcbiAgZGVjb2RlSW1hZ2UsXHJcbiAgdG9UcmFuc2Zvcm1TdHJpbmdcclxufSBmcm9tICcuL3V0aWwvdXRpbC5qcyc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS9nZXQtdGh1bWItYm91bmRzLmpzJykuQm91bmRzfSBCb3VuZHMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdXRpbC9hbmltYXRpb25zLmpzJykuQW5pbWF0aW9uUHJvcHN9IEFuaW1hdGlvblByb3BzICovXHJcblxyXG4vLyBzb21lIGJyb3dzZXJzIGRvIG5vdCBwYWludFxyXG4vLyBlbGVtZW50cyB3aGljaCBvcGFjaXR5IGlzIHNldCB0byAwLFxyXG4vLyBzaW5jZSB3ZSBuZWVkIHRvIHByZS1yZW5kZXIgZWxlbWVudHMgZm9yIHRoZSBhbmltYXRpb24gLVxyXG4vLyB3ZSBzZXQgaXQgdG8gdGhlIG1pbmltdW0gYW1vdW50XHJcbmNvbnN0IE1JTl9PUEFDSVRZID0gMC4wMDM7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBvcGVuaW5nIGFuZCBjbG9zaW5nIHRyYW5zaXRpb25zIG9mIHRoZSBQaG90b1N3aXBlLlxyXG4gKlxyXG4gKiBJdCBjYW4gcGVyZm9ybSB6b29tLCBmYWRlIG9yIG5vIHRyYW5zaXRpb24uXHJcbiAqL1xyXG5jbGFzcyBPcGVuZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtudW1iZXIgfCBmYWxzZSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZHVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3VzZUFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9jcm9wcGVkWm9vbSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fYW5pbWF0ZUJnT3BhY2l0eSA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgeyBIVE1MRGl2RWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkIH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkIH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fb3BhY2l0eUVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkIH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fY3JvcENvbnRhaW5lcjEgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCB9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2Nyb3BDb250YWluZXIyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtCb3VuZHMgfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3RodW1iQm91bmRzID0gdW5kZWZpbmVkO1xyXG5cclxuXHJcbiAgICB0aGlzLl9wcmVwYXJlT3BlbiA9IHRoaXMuX3ByZXBhcmVPcGVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgLy8gT3ZlcnJpZGUgaW5pdGlhbCB6b29tIGFuZCBwYW4gcG9zaXRpb25cclxuICAgIHBzd3Aub24oJ2ZpcnN0Wm9vbVBhbicsIHRoaXMuX3ByZXBhcmVPcGVuKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wcmVwYXJlT3BlbigpO1xyXG4gICAgdGhpcy5fc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNDbG9zZWQgfHwgdGhpcy5pc0Nsb3NpbmcgfHwgdGhpcy5pc09wZW5pbmcpIHtcclxuICAgICAgLy8gaWYgd2UgY2xvc2UgZHVyaW5nIG9wZW5pbmcgYW5pbWF0aW9uXHJcbiAgICAgIC8vIGZvciBub3cgZG8gbm90aGluZyxcclxuICAgICAgLy8gYnJvd3NlcnMgYXJlbid0IGdvb2QgYXQgY2hhbmdpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgQ1NTIHRyYW5zaXRpb25cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5wc3dwLmN1cnJTbGlkZTtcclxuXHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDbG9zaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2R1cmF0aW9uID0gdGhpcy5wc3dwLm9wdGlvbnMuaGlkZUFuaW1hdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgIGlmIChzbGlkZSAmJiBzbGlkZS5jdXJyWm9vbUxldmVsICogc2xpZGUud2lkdGggPj0gdGhpcy5wc3dwLm9wdGlvbnMubWF4V2lkdGhUb0FuaW1hdGUpIHtcclxuICAgICAgdGhpcy5fZHVyYXRpb24gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FwcGx5U3RhcnRQcm9wcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3N0YXJ0KCk7XHJcbiAgICB9LCB0aGlzLl9jcm9wcGVkWm9vbSA/IDMwIDogMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfcHJlcGFyZU9wZW4oKSB7XHJcbiAgICB0aGlzLnBzd3Aub2ZmKCdmaXJzdFpvb21QYW4nLCB0aGlzLl9wcmVwYXJlT3Blbik7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuaW5nKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5wc3dwLmN1cnJTbGlkZTtcclxuICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMucHN3cC5vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbjtcclxuICAgICAgaWYgKHNsaWRlICYmIHNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCAqIHNsaWRlLndpZHRoID49IHRoaXMucHN3cC5vcHRpb25zLm1heFdpZHRoVG9BbmltYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2FwcGx5U3RhcnRQcm9wcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2FwcGx5U3RhcnRQcm9wcygpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5wc3dwLmN1cnJTbGlkZTtcclxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcHN3cDtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zaG93SGlkZUFuaW1hdGlvblR5cGUgPT09ICdmYWRlJykge1xyXG4gICAgICBvcHRpb25zLnNob3dIaWRlT3BhY2l0eSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3RodW1iQm91bmRzID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNob3dIaWRlQW5pbWF0aW9uVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIG9wdGlvbnMuc2hvd0hpZGVPcGFjaXR5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2R1cmF0aW9uID0gMDtcclxuICAgICAgdGhpcy5fdGh1bWJCb3VuZHMgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuaW5nICYmIHBzd3AuX2luaXRpYWxUaHVtYkJvdW5kcykge1xyXG4gICAgICAvLyBVc2UgaW5pdGlhbCBib3VuZHMgaWYgZGVmaW5lZFxyXG4gICAgICB0aGlzLl90aHVtYkJvdW5kcyA9IHBzd3AuX2luaXRpYWxUaHVtYkJvdW5kcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RodW1iQm91bmRzID0gdGhpcy5wc3dwLmdldFRodW1iQm91bmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBzbGlkZT8uZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCk7XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0b3BBbGwoKTtcclxuXHJcbiAgICAvLyBEaXNjYXJkIGFuaW1hdGlvbnMgd2hlbiBkdXJhdGlvbiBpcyBsZXNzIHRoYW4gNTBtc1xyXG4gICAgdGhpcy5fdXNlQW5pbWF0aW9uID0gQm9vbGVhbih0aGlzLl9kdXJhdGlvbiAmJiB0aGlzLl9kdXJhdGlvbiA+IDUwKTtcclxuICAgIHRoaXMuX2FuaW1hdGVab29tID0gQm9vbGVhbih0aGlzLl90aHVtYkJvdW5kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgc2xpZGU/LmNvbnRlbnQudXNlUGxhY2Vob2xkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoIXRoaXMuaXNDbG9zaW5nIHx8ICFwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpO1xyXG4gICAgaWYgKCF0aGlzLl9hbmltYXRlWm9vbSkge1xyXG4gICAgICB0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNPcGVuaW5nICYmIHNsaWRlKSB7XHJcbiAgICAgICAgc2xpZGUuem9vbUFuZFBhblRvSW5pdGlhbCgpO1xyXG4gICAgICAgIHNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID0gb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkgPz8gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9hbmltYXRlQmdPcGFjaXR5ID0gIXRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSAmJiB0aGlzLnBzd3Aub3B0aW9ucy5iZ09wYWNpdHkgPiBNSU5fT1BBQ0lUWTtcclxuICAgIHRoaXMuX29wYWNpdHlFbGVtZW50ID0gdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID8gcHN3cC5lbGVtZW50IDogcHN3cC5iZztcclxuXHJcbiAgICBpZiAoIXRoaXMuX3VzZUFuaW1hdGlvbikge1xyXG4gICAgICB0aGlzLl9kdXJhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVab29tID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVCZ09wYWNpdHkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuaW5nKSB7XHJcbiAgICAgICAgaWYgKHBzd3AuZWxlbWVudCkge1xyXG4gICAgICAgICAgcHN3cC5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBTdHJpbmcoTUlOX09QQUNJVFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwc3dwLmFwcGx5QmdPcGFjaXR5KDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZVpvb20gJiYgdGhpcy5fdGh1bWJCb3VuZHMgJiYgdGhpcy5fdGh1bWJCb3VuZHMuaW5uZXJSZWN0KSB7XHJcbiAgICAgIC8vIFByb3BlcnRpZXMgYXJlIHVzZWQgd2hlbiBhbmltYXRpb24gZnJvbSBjcm9wcGVkIHRodW1ibmFpbFxyXG4gICAgICB0aGlzLl9jcm9wcGVkWm9vbSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIxID0gdGhpcy5wc3dwLmNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5fY3JvcENvbnRhaW5lcjIgPSB0aGlzLnBzd3AuY3VyclNsaWRlPy5ob2xkZXJFbGVtZW50O1xyXG5cclxuICAgICAgaWYgKHBzd3AuY29udGFpbmVyKSB7XHJcbiAgICAgICAgcHN3cC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICBwc3dwLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBzd3Audmlld3BvcnRTaXplLnggKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jcm9wcGVkWm9vbSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzT3BlbmluZykge1xyXG4gICAgICAvLyBBcHBseSBzdHlsZXMgYmVmb3JlIG9wZW5pbmcgdHJhbnNpdGlvblxyXG4gICAgICBpZiAodGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5KSB7XHJcbiAgICAgICAgaWYgKHBzd3AuZWxlbWVudCkge1xyXG4gICAgICAgICAgcHN3cC5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBTdHJpbmcoTUlOX09QQUNJVFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwc3dwLmFwcGx5QmdPcGFjaXR5KDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRlQmdPcGFjaXR5ICYmIHBzd3AuYmcpIHtcclxuICAgICAgICAgIHBzd3AuYmcuc3R5bGUub3BhY2l0eSA9IFN0cmluZyhNSU5fT1BBQ0lUWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgICAgIHBzd3AuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGVab29tKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Q2xvc2VkU3RhdGVab29tUGFuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAvLyB0ZWxsIGJyb3dzZXIgdGhhdCB3ZSBwbGFuIHRvIGFuaW1hdGUgdGhlIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XHJcblxyXG4gICAgICAgICAgLy8gaGlkZSBwbGFjZWhvbGRlciB0byBhbGxvdyBoaWRpbmcgb2ZcclxuICAgICAgICAgIC8vIGVsZW1lbnRzIHRoYXQgb3ZlcmxhcCBpdCAoc3VjaCBhcyBpY29ucyBvdmVyIHRoZSB0aHVtYm5haWwpXHJcbiAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKE1JTl9PUEFDSVRZKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Nsb3NpbmcpIHtcclxuICAgICAgLy8gaGlkZSBuZWFyYnkgc2xpZGVzIHRvIG1ha2Ugc3VyZSB0aGF0XHJcbiAgICAgIC8vIHRoZXkgYXJlIG5vdCBwYWludGVkIGR1cmluZyB0aGUgdHJhbnNpdGlvblxyXG4gICAgICBpZiAocHN3cC5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzBdKSB7XHJcbiAgICAgICAgcHN3cC5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzBdLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBzd3AubWFpblNjcm9sbC5pdGVtSG9sZGVyc1syXSkge1xyXG4gICAgICAgIHBzd3AubWFpblNjcm9sbC5pdGVtSG9sZGVyc1syXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fY3JvcHBlZFpvb20pIHtcclxuICAgICAgICBpZiAocHN3cC5tYWluU2Nyb2xsLnggIT09IDApIHtcclxuICAgICAgICAgIC8vIHNoaWZ0IHRoZSBtYWluIHNjcm9sbGVyIHRvIHplcm8gcG9zaXRpb25cclxuICAgICAgICAgIHBzd3AubWFpblNjcm9sbC5yZXNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICBwc3dwLm1haW5TY3JvbGwucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5pc09wZW5pbmdcclxuICAgICAgICAmJiB0aGlzLl91c2VBbmltYXRpb25cclxuICAgICAgICAmJiB0aGlzLl9wbGFjZWhvbGRlclxyXG4gICAgICAgICYmIHRoaXMuX3BsYWNlaG9sZGVyLnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICAgIC8vIFRvIGVuc3VyZSBzbW9vdGggYW5pbWF0aW9uXHJcbiAgICAgIC8vIHdlIHdhaXQgdGlsbCB0aGUgY3VycmVudCBzbGlkZSBpbWFnZSBwbGFjZWhvbGRlciBpcyBkZWNvZGVkLFxyXG4gICAgICAvLyBidXQgbm8gbG9uZ2VyIHRoYW4gMjUwbXMsXHJcbiAgICAgIC8vIGFuZCBubyBzaG9ydGVyIHRoYW4gNTBtc1xyXG4gICAgICAvLyAoanVzdCB1c2luZyByZXF1ZXN0YW5pbWF0aW9uZnJhbWUgaXMgbm90IGVub3VnaCBpbiBGaXJlZm94LFxyXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24pXHJcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgbGV0IGRlY29kZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNEZWxheWluZyA9IHRydWU7XHJcbiAgICAgICAgZGVjb2RlSW1hZ2UoLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqLyAodGhpcy5fcGxhY2Vob2xkZXIpKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIGRlY29kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKCFpc0RlbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpc0RlbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoZGVjb2RlZCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDI1MCk7XHJcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4gdGhpcy5faW5pdGlhdGUoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9pbml0aWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2luaXRpYXRlKCkge1xyXG4gICAgdGhpcy5wc3dwLmVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KCctLXBzd3AtdHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMuX2R1cmF0aW9uICsgJ21zJyk7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKFxyXG4gICAgICB0aGlzLmlzT3BlbmluZyA/ICdvcGVuaW5nQW5pbWF0aW9uU3RhcnQnIDogJ2Nsb3NpbmdBbmltYXRpb25TdGFydCdcclxuICAgICk7XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50XHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goXHJcbiAgICAgIC8qKiBAdHlwZSB7J2luaXRpYWxab29tSW4nIHwgJ2luaXRpYWxab29tT3V0J30gKi9cclxuICAgICAgKCdpbml0aWFsWm9vbScgKyAodGhpcy5pc09wZW5pbmcgPyAnSW4nIDogJ091dCcpKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZWxlbWVudD8uY2xhc3NMaXN0LnRvZ2dsZSgncHN3cC0tdWktdmlzaWJsZScsIHRoaXMuaXNPcGVuaW5nKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc09wZW5pbmcpIHtcclxuICAgICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgLy8gdW5oaWRlIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvT3BlblN0YXRlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDbG9zaW5nKSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUb0Nsb3NlZFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl91c2VBbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5fb25BbmltYXRpb25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX29uQW5pbWF0aW9uQ29tcGxldGUoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRoaXMuaXNPcGVuaW5nO1xyXG4gICAgdGhpcy5pc0Nsb3NlZCA9IHRoaXMuaXNDbG9zaW5nO1xyXG4gICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDbG9zaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaChcclxuICAgICAgdGhpcy5pc09wZW4gPyAnb3BlbmluZ0FuaW1hdGlvbkVuZCcgOiAnY2xvc2luZ0FuaW1hdGlvbkVuZCdcclxuICAgICk7XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50XHJcbiAgICBwc3dwLmRpc3BhdGNoKFxyXG4gICAgICAvKiogQHR5cGUgeydpbml0aWFsWm9vbUluRW5kJyB8ICdpbml0aWFsWm9vbU91dEVuZCd9ICovXHJcbiAgICAgICgnaW5pdGlhbFpvb20nICsgKHRoaXMuaXNPcGVuID8gJ0luRW5kJyA6ICdPdXRFbmQnKSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDbG9zZWQpIHtcclxuICAgICAgcHN3cC5kZXN0cm95KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIGlmICh0aGlzLl9hbmltYXRlWm9vbSAmJiBwc3dwLmNvbnRhaW5lcikge1xyXG4gICAgICAgIHBzd3AuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIHBzd3AuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICB9XHJcbiAgICAgIHBzd3AuY3VyclNsaWRlPy5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfYW5pbWF0ZVRvT3BlblN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVab29tKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jcm9wcGVkWm9vbSAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMSAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyh0aGlzLl9jcm9wQ29udGFpbmVyMSwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcclxuICAgICAgICB0aGlzLl9hbmltYXRlVG8odGhpcy5fY3JvcENvbnRhaW5lcjIsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHN3cC5jdXJyU2xpZGUpIHtcclxuICAgICAgICBwc3dwLmN1cnJTbGlkZS56b29tQW5kUGFuVG9Jbml0aWFsKCk7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKFxyXG4gICAgICAgICAgcHN3cC5jdXJyU2xpZGUuY29udGFpbmVyLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICBwc3dwLmN1cnJTbGlkZS5nZXRDdXJyZW50VHJhbnNmb3JtKClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVCZ09wYWNpdHkgJiYgcHN3cC5iZykge1xyXG4gICAgICB0aGlzLl9hbmltYXRlVG8ocHN3cC5iZywgJ29wYWNpdHknLCBTdHJpbmcocHN3cC5vcHRpb25zLmJnT3BhY2l0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgJiYgcHN3cC5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUbyhwc3dwLmVsZW1lbnQsICdvcGFjaXR5JywgJzEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIF9hbmltYXRlVG9DbG9zZWRTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZVpvb20pIHtcclxuICAgICAgdGhpcy5fc2V0Q2xvc2VkU3RhdGVab29tUGFuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRvIG5vdCBhbmltYXRlIG9wYWNpdHkgaWYgaXQncyBhbHJlYWR5IGF0IDBcclxuICAgIGlmICh0aGlzLl9hbmltYXRlQmdPcGFjaXR5ICYmIHBzd3AuYmdPcGFjaXR5ID4gMC4wMSAmJiBwc3dwLmJnKSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUbyhwc3dwLmJnLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSAmJiBwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvKHBzd3AuZWxlbWVudCwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlXVxyXG4gICAqL1xyXG4gIF9zZXRDbG9zZWRTdGF0ZVpvb21QYW4oYW5pbWF0ZSkge1xyXG4gICAgaWYgKCF0aGlzLl90aHVtYkJvdW5kcykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IHsgaW5uZXJSZWN0IH0gPSB0aGlzLl90aHVtYkJvdW5kcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlLCB2aWV3cG9ydFNpemUgfSA9IHBzd3A7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Nyb3BwZWRab29tICYmIGlubmVyUmVjdCAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMSAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMikge1xyXG4gICAgICBjb25zdCBjb250YWluZXJPbmVQYW5YID0gLXZpZXdwb3J0U2l6ZS54ICsgKHRoaXMuX3RodW1iQm91bmRzLnggLSBpbm5lclJlY3QueCkgKyBpbm5lclJlY3QudztcclxuICAgICAgY29uc3QgY29udGFpbmVyT25lUGFuWSA9IC12aWV3cG9ydFNpemUueSArICh0aGlzLl90aHVtYkJvdW5kcy55IC0gaW5uZXJSZWN0LnkpICsgaW5uZXJSZWN0Lmg7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclR3b1BhblggPSB2aWV3cG9ydFNpemUueCAtIGlubmVyUmVjdC53O1xyXG4gICAgICBjb25zdCBjb250YWluZXJUd29QYW5ZID0gdmlld3BvcnRTaXplLnkgLSBpbm5lclJlY3QuaDtcclxuXHJcblxyXG4gICAgICBpZiAoYW5pbWF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyhcclxuICAgICAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIxLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICB0b1RyYW5zZm9ybVN0cmluZyhjb250YWluZXJPbmVQYW5YLCBjb250YWluZXJPbmVQYW5ZKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyhcclxuICAgICAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIyLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICB0b1RyYW5zZm9ybVN0cmluZyhjb250YWluZXJUd29QYW5YLCBjb250YWluZXJUd29QYW5ZKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VHJhbnNmb3JtKHRoaXMuX2Nyb3BDb250YWluZXIxLCBjb250YWluZXJPbmVQYW5YLCBjb250YWluZXJPbmVQYW5ZKTtcclxuICAgICAgICBzZXRUcmFuc2Zvcm0odGhpcy5fY3JvcENvbnRhaW5lcjIsIGNvbnRhaW5lclR3b1BhblgsIGNvbnRhaW5lclR3b1BhblkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJTbGlkZSkge1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyhjdXJyU2xpZGUucGFuLCBpbm5lclJlY3QgfHwgdGhpcy5fdGh1bWJCb3VuZHMpO1xyXG4gICAgICBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbCA9IHRoaXMuX3RodW1iQm91bmRzLncgLyBjdXJyU2xpZGUud2lkdGg7XHJcbiAgICAgIGlmIChhbmltYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKGN1cnJTbGlkZS5jb250YWluZXIsICd0cmFuc2Zvcm0nLCBjdXJyU2xpZGUuZ2V0Q3VycmVudFRyYW5zZm9ybSgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gICAqIEBwYXJhbSB7J3RyYW5zZm9ybScgfCAnb3BhY2l0eSd9IHByb3BcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcFZhbHVlXHJcbiAgICovXHJcbiAgX2FuaW1hdGVUbyh0YXJnZXQsIHByb3AsIHByb3BWYWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLl9kdXJhdGlvbikge1xyXG4gICAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBwcm9wVmFsdWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGFuaW1hdGlvbnMgfSA9IHRoaXMucHN3cDtcclxuICAgIC8qKiBAdHlwZSB7QW5pbWF0aW9uUHJvcHN9ICovXHJcbiAgICBjb25zdCBhbmltUHJvcHMgPSB7XHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLl9kdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiB0aGlzLnBzd3Aub3B0aW9ucy5lYXNpbmcsXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICBpZiAoIWFuaW1hdGlvbnMuYWN0aXZlQW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuX29uQW5pbWF0aW9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRhcmdldCxcclxuICAgIH07XHJcbiAgICBhbmltUHJvcHNbcHJvcF0gPSBwcm9wVmFsdWU7XHJcbiAgICBhbmltYXRpb25zLnN0YXJ0VHJhbnNpdGlvbihhbmltUHJvcHMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlbmVyO1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUVsZW1lbnQsXHJcbiAgZXF1YWxpemVQb2ludHMsXHJcbiAgcG9pbnRzRXF1YWwsXHJcbiAgY2xhbXAsXHJcbn0gZnJvbSAnLi91dGlsL3V0aWwuanMnO1xyXG5cclxuaW1wb3J0IERPTUV2ZW50cyBmcm9tICcuL3V0aWwvZG9tLWV2ZW50cy5qcyc7XHJcbmltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlL3NsaWRlLmpzJztcclxuaW1wb3J0IEdlc3R1cmVzIGZyb20gJy4vZ2VzdHVyZXMvZ2VzdHVyZXMuanMnO1xyXG5pbXBvcnQgTWFpblNjcm9sbCBmcm9tICcuL21haW4tc2Nyb2xsLmpzJztcclxuXHJcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL2tleWJvYXJkLmpzJztcclxuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi91dGlsL2FuaW1hdGlvbnMuanMnO1xyXG5pbXBvcnQgU2Nyb2xsV2hlZWwgZnJvbSAnLi9zY3JvbGwtd2hlZWwuanMnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi91aS91aS5qcyc7XHJcbmltcG9ydCB7IGdldFZpZXdwb3J0U2l6ZSB9IGZyb20gJy4vdXRpbC92aWV3cG9ydC1zaXplLmpzJztcclxuaW1wb3J0IHsgZ2V0VGh1bWJCb3VuZHMgfSBmcm9tICcuL3NsaWRlL2dldC10aHVtYi1ib3VuZHMuanMnO1xyXG5pbXBvcnQgUGhvdG9Td2lwZUJhc2UgZnJvbSAnLi9jb3JlL2Jhc2UuanMnO1xyXG5pbXBvcnQgT3BlbmVyIGZyb20gJy4vb3BlbmVyLmpzJztcclxuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAnLi9zbGlkZS9sb2FkZXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdHlwZXMuanMnKS5UeXBlPFQ+fSBUeXBlPFQ+XHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS96b29tLWxldmVsLmpzJykuWm9vbUxldmVsT3B0aW9ufSBab29tTGV2ZWxPcHRpb24gKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdWkvdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbWFpbi1zY3JvbGwuanMnKS5JdGVtSG9sZGVyfSBJdGVtSG9sZGVyICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvZXZlbnRhYmxlLmpzJykuUGhvdG9Td2lwZUV2ZW50c01hcH0gUGhvdG9Td2lwZUV2ZW50c01hcCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL2V2ZW50YWJsZS5qcycpLlBob3RvU3dpcGVGaWx0ZXJzTWFwfSBQaG90b1N3aXBlRmlsdGVyc01hcCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS9nZXQtdGh1bWItYm91bmRzJykuQm91bmRzfSBCb3VuZHMgKi9cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvZXZlbnRhYmxlLmpzJykuRXZlbnRDYWxsYmFjazxUPn0gRXZlbnRDYWxsYmFjazxUPlxyXG4gKi9cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvZXZlbnRhYmxlLmpzJykuQXVnbWVudGVkRXZlbnQ8VD59IEF1Z21lbnRlZEV2ZW50PFQ+XHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHt7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZD86IHN0cmluZyB8IG51bWJlciB9fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge3sgdG9wOiBudW1iZXI7IGJvdHRvbTogbnVtYmVyOyBsZWZ0OiBudW1iZXI7IHJpZ2h0OiBudW1iZXIgfX0gUGFkZGluZyAqL1xyXG4vKiogQHR5cGVkZWYge1NsaWRlRGF0YVtdfSBEYXRhU291cmNlQXJyYXkgKi9cclxuLyoqIEB0eXBlZGVmIHt7IGdhbGxlcnk6IEhUTUxFbGVtZW50OyBpdGVtcz86IEhUTUxFbGVtZW50W10gfX0gRGF0YVNvdXJjZU9iamVjdCAqL1xyXG4vKiogQHR5cGVkZWYge0RhdGFTb3VyY2VBcnJheSB8IERhdGFTb3VyY2VPYmplY3R9IERhdGFTb3VyY2UgKi9cclxuLyoqIEB0eXBlZGVmIHsocG9pbnQ6IFBvaW50LCBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHZvaWR9IEFjdGlvbkZuICovXHJcbi8qKiBAdHlwZWRlZiB7J2Nsb3NlJyB8ICduZXh0JyB8ICd6b29tJyB8ICd6b29tLW9yLWNsb3NlJyB8ICd0b2dnbGUtY29udHJvbHMnfSBBY3Rpb25UeXBlICovXHJcbi8qKiBAdHlwZWRlZiB7VHlwZTxQaG90b1N3aXBlPiB8IHsgZGVmYXVsdDogVHlwZTxQaG90b1N3aXBlPiB9fSBQaG90b1N3aXBlTW9kdWxlICovXHJcbi8qKiBAdHlwZWRlZiB7UGhvdG9Td2lwZU1vZHVsZSB8IFByb21pc2U8UGhvdG9Td2lwZU1vZHVsZT4gfCAoKCkgPT4gUHJvbWlzZTxQaG90b1N3aXBlTW9kdWxlPil9IFBob3RvU3dpcGVNb2R1bGVPcHRpb24gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7c3RyaW5nIHwgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudFtdIHwgSFRNTEVsZW1lbnR9IEVsZW1lbnRQcm92aWRlclxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7UGFydGlhbDxQcmVwYXJlZFBob3RvU3dpcGVPcHRpb25zPn0gUGhvdG9Td2lwZU9wdGlvbnMgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9vcHRpb25zLyAqL1xyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUHJlcGFyZWRQaG90b1N3aXBlT3B0aW9uc1xyXG4gKlxyXG4gKiBAcHJvcCB7RGF0YVNvdXJjZX0gW2RhdGFTb3VyY2VdXHJcbiAqIFBhc3MgYW4gYXJyYXkgb2YgYW55IGl0ZW1zIHZpYSBkYXRhU291cmNlIG9wdGlvbi4gSXRzIGxlbmd0aCB3aWxsIGRldGVybWluZSBhbW91bnQgb2Ygc2xpZGVzXHJcbiAqICh3aGljaCBtYXkgYmUgbW9kaWZpZWQgZnVydGhlciBmcm9tIG51bUl0ZW1zIGV2ZW50KS5cclxuICpcclxuICogRWFjaCBpdGVtIHNob3VsZCBjb250YWluIGRhdGEgdGhhdCB5b3UgbmVlZCB0byBnZW5lcmF0ZSBzbGlkZVxyXG4gKiAoZm9yIGltYWdlIHNsaWRlIGl0IHdvdWxkIGJlIHNyYyAoaW1hZ2UgVVJMKSwgd2lkdGggKGltYWdlIHdpZHRoKSwgaGVpZ2h0LCBzcmNzZXQsIGFsdCkuXHJcbiAqXHJcbiAqIElmIHRoZXNlIHByb3BlcnRpZXMgYXJlIG5vdCBwcmVzZW50IGluIHlvdXIgaW5pdGlhbCBhcnJheSwgeW91IG1heSBcInByZS1wYXJzZVwiIGVhY2ggaXRlbSBmcm9tIGl0ZW1EYXRhIGZpbHRlci5cclxuICpcclxuICogQHByb3Age251bWJlcn0gYmdPcGFjaXR5XHJcbiAqIEJhY2tncm91bmQgYmFja2Ryb3Agb3BhY2l0eSwgYWx3YXlzIGRlZmluZSBpdCB2aWEgdGhpcyBvcHRpb24gYW5kIG5vdCB2aWEgQ1NTIHJnYmEgY29sb3IuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXJ9IHNwYWNpbmdcclxuICogU3BhY2luZyBiZXR3ZWVuIHNsaWRlcy4gRGVmaW5lZCBhcyByYXRpbyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQgd2lkdGggKDAuMSA9IDEwJSBvZiB2aWV3cG9ydCkuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBhbGxvd1BhblRvTmV4dFxyXG4gKiBBbGxvdyBzd2lwZSBuYXZpZ2F0aW9uIHRvIHRoZSBuZXh0IHNsaWRlIHdoZW4gdGhlIGN1cnJlbnQgc2xpZGUgaXMgem9vbWVkLiBEb2VzIG5vdCBhcHBseSB0byBtb3VzZSBldmVudHMuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBsb29wXHJcbiAqIElmIHNldCB0byB0cnVlIHlvdSdsbCBiZSBhYmxlIHRvIHN3aXBlIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IGltYWdlLlxyXG4gKiBPcHRpb24gaXMgYWx3YXlzIGZhbHNlIHdoZW4gdGhlcmUgYXJlIGxlc3MgdGhhbiAzIHNsaWRlcy5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IFt3aGVlbFRvWm9vbV1cclxuICogQnkgZGVmYXVsdCBQaG90b1N3aXBlIHpvb21zIGltYWdlIHdpdGggY3RybC13aGVlbCwgaWYgeW91IGVuYWJsZSB0aGlzIG9wdGlvbiAtIGltYWdlIHdpbGwgem9vbSBqdXN0IHZpYSB3aGVlbC5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IHBpbmNoVG9DbG9zZVxyXG4gKiBQaW5jaCB0b3VjaCBnZXN0dXJlIHRvIGNsb3NlIHRoZSBnYWxsZXJ5LlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2xvc2VPblZlcnRpY2FsRHJhZ1xyXG4gKiBWZXJ0aWNhbCBkcmFnIGdlc3R1cmUgdG8gY2xvc2UgdGhlIFBob3RvU3dpcGUuXHJcbiAqXHJcbiAqIEBwcm9wIHtQYWRkaW5nfSBbcGFkZGluZ11cclxuICogU2xpZGUgYXJlYSBwYWRkaW5nIChpbiBwaXhlbHMpLlxyXG4gKlxyXG4gKiBAcHJvcCB7KHZpZXdwb3J0U2l6ZTogUG9pbnQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IFBhZGRpbmd9IFtwYWRkaW5nRm5dXHJcbiAqIFRoZSBvcHRpb24gaXMgY2hlY2tlZCBmcmVxdWVudGx5LCBzbyBtYWtlIHN1cmUgaXQncyBwZXJmb3JtYW50LiBPdmVycmlkZXMgcGFkZGluZyBvcHRpb24gaWYgZGVmaW5lZC4gRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXIgfCBmYWxzZX0gaGlkZUFuaW1hdGlvbkR1cmF0aW9uXHJcbiAqIFRyYW5zaXRpb24gZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLCBjYW4gYmUgMC5cclxuICpcclxuICogQHByb3Age251bWJlciB8IGZhbHNlfSBzaG93QW5pbWF0aW9uRHVyYXRpb25cclxuICogVHJhbnNpdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMsIGNhbiBiZSAwLlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyIHwgZmFsc2V9IHpvb21BbmltYXRpb25EdXJhdGlvblxyXG4gKiBUcmFuc2l0aW9uIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcywgY2FuIGJlIDAuXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IGVhc2luZ1xyXG4gKiBTdHJpbmcsICdjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSknLiBDU1MgZWFzaW5nIGZ1bmN0aW9uIGZvciBvcGVuL2Nsb3NlL3pvb20gdHJhbnNpdGlvbnMuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBlc2NLZXlcclxuICogRXNjIGtleSB0byBjbG9zZS5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IGFycm93S2V5c1xyXG4gKiBMZWZ0L3JpZ2h0IGFycm93IGtleXMgZm9yIG5hdmlnYXRpb24uXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSB0cmFwRm9jdXNcclxuICogVHJhcCBmb2N1cyB3aXRoaW4gUGhvdG9Td2lwZSBlbGVtZW50IHdoaWxlIGl0J3Mgb3Blbi5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IHJldHVybkZvY3VzXHJcbiAqIFJlc3RvcmUgZm9jdXMgdGhlIGxhc3QgYWN0aXZlIGVsZW1lbnQgYWZ0ZXIgUGhvdG9Td2lwZSBpcyBjbG9zZWQuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBjbGlja1RvQ2xvc2VOb25ab29tYWJsZVxyXG4gKiBJZiBpbWFnZSBpcyBub3Qgem9vbWFibGUgKGZvciBleGFtcGxlLCBzbWFsbGVyIHRoYW4gdmlld3BvcnQpIGl0IGNhbiBiZSBjbG9zZWQgYnkgY2xpY2tpbmcgb24gaXQuXHJcbiAqXHJcbiAqIEBwcm9wIHtBY3Rpb25UeXBlIHwgQWN0aW9uRm4gfCBmYWxzZX0gaW1hZ2VDbGlja0FjdGlvblxyXG4gKiBSZWZlciB0byBjbGljayBhbmQgdGFwIGFjdGlvbnMgcGFnZS5cclxuICpcclxuICogQHByb3Age0FjdGlvblR5cGUgfCBBY3Rpb25GbiB8IGZhbHNlfSBiZ0NsaWNrQWN0aW9uXHJcbiAqIFJlZmVyIHRvIGNsaWNrIGFuZCB0YXAgYWN0aW9ucyBwYWdlLlxyXG4gKlxyXG4gKiBAcHJvcCB7QWN0aW9uVHlwZSB8IEFjdGlvbkZuIHwgZmFsc2V9IHRhcEFjdGlvblxyXG4gKiBSZWZlciB0byBjbGljayBhbmQgdGFwIGFjdGlvbnMgcGFnZS5cclxuICpcclxuICogQHByb3Age0FjdGlvblR5cGUgfCBBY3Rpb25GbiB8IGZhbHNlfSBkb3VibGVUYXBBY3Rpb25cclxuICogUmVmZXIgdG8gY2xpY2sgYW5kIHRhcCBhY3Rpb25zIHBhZ2UuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXJ9IHByZWxvYWRlckRlbGF5XHJcbiAqIERlbGF5IGJlZm9yZSB0aGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbCBiZSBkaXNwbGF5ZWQsXHJcbiAqIGlmIGltYWdlIGlzIGxvYWRlZCBkdXJpbmcgaXQgLSB0aGUgaW5kaWNhdG9yIHdpbGwgbm90IGJlIGRpc3BsYXllZCBhdCBhbGwuIENhbiBiZSB6ZXJvLlxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBpbmRleEluZGljYXRvclNlcFxyXG4gKiBVc2VkIGZvciBzbGlkZSBjb3VudCBpbmRpY2F0b3IgKFwiMSBvZiAxMCBcIikuXHJcbiAqXHJcbiAqIEBwcm9wIHsob3B0aW9uczogUGhvdG9Td2lwZU9wdGlvbnMsIHBzd3A6IFBob3RvU3dpcGVCYXNlKSA9PiBQb2ludH0gW2dldFZpZXdwb3J0U2l6ZUZuXVxyXG4gKiBBIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiBzbGlkZSB2aWV3cG9ydCB3aWR0aCBhbmQgaGVpZ2h0LCBpbiBmb3JtYXQge3g6IDEwMCwgeTogMTAwfS5cclxuICpcclxuICogQHByb3Age3N0cmluZ30gZXJyb3JNc2dcclxuICogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGltYWdlIHdhc24ndCBhYmxlIHRvIGxvYWQuIElmIHlvdSBuZWVkIHRvIGRpc3BsYXkgSFRNTCAtIHVzZSBjb250ZW50RXJyb3JFbGVtZW50IGZpbHRlci5cclxuICpcclxuICogQHByb3Age1tudW1iZXIsIG51bWJlcl19IHByZWxvYWRcclxuICogTGF6eSBsb2FkaW5nIG9mIG5lYXJieSBzbGlkZXMgYmFzZWQgb24gZGlyZWN0aW9uIG9mIG1vdmVtZW50LiBTaG91bGQgYmUgYW4gYXJyYXkgd2l0aCB0d28gaW50ZWdlcnMsXHJcbiAqIGZpcnN0IG9uZSAtIG51bWJlciBvZiBpdGVtcyB0byBwcmVsb2FkIGJlZm9yZSB0aGUgY3VycmVudCBpbWFnZSwgc2Vjb25kIG9uZSAtIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlLlxyXG4gKiBUd28gbmVhcmJ5IGltYWdlcyBhcmUgYWx3YXlzIGxvYWRlZC5cclxuICpcclxuICogQHByb3Age3N0cmluZ30gW21haW5DbGFzc11cclxuICogQ2xhc3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSByb290IGVsZW1lbnQgb2YgUGhvdG9Td2lwZSwgbWF5IGNvbnRhaW4gbXVsdGlwbGUgc2VwYXJhdGVkIGJ5IHNwYWNlLlxyXG4gKiBFeGFtcGxlIG9uIFN0eWxpbmcgcGFnZS5cclxuICpcclxuICogQHByb3Age0hUTUxFbGVtZW50fSBbYXBwZW5kVG9FbF1cclxuICogRWxlbWVudCB0byB3aGljaCBQaG90b1N3aXBlIGRpYWxvZyB3aWxsIGJlIGFwcGVuZGVkIHdoZW4gaXQgb3BlbnMuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXJ9IG1heFdpZHRoVG9BbmltYXRlXHJcbiAqIE1heGltdW0gd2lkdGggb2YgaW1hZ2UgdG8gYW5pbWF0ZSwgaWYgaW5pdGlhbCByZW5kZXJlZCBpbWFnZSB3aWR0aFxyXG4gKiBpcyBsYXJnZXIgdGhhbiB0aGlzIHZhbHVlIC0gdGhlIG9wZW5pbmcvY2xvc2luZyB0cmFuc2l0aW9uIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNhYmxlZC5cclxuICpcclxuICogQHByb3Age3N0cmluZ30gW2Nsb3NlVGl0bGVdXHJcbiAqIFRyYW5zbGF0aW5nXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFt6b29tVGl0bGVdXHJcbiAqIFRyYW5zbGF0aW5nXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcnJvd1ByZXZUaXRsZV1cclxuICogVHJhbnNsYXRpbmdcclxuICpcclxuICogQHByb3Age3N0cmluZ30gW2Fycm93TmV4dFRpdGxlXVxyXG4gKiBUcmFuc2xhdGluZ1xyXG4gKlxyXG4gKiBAcHJvcCB7J3pvb20nIHwgJ2ZhZGUnIHwgJ25vbmUnfSBbc2hvd0hpZGVBbmltYXRpb25UeXBlXVxyXG4gKiBUbyBhZGp1c3Qgb3BlbmluZyBvciBjbG9zaW5nIHRyYW5zaXRpb24gdHlwZSB1c2UgbGlnaHRib3ggb3B0aW9uIGBzaG93SGlkZUFuaW1hdGlvblR5cGVgIChgU3RyaW5nYCkuXHJcbiAqIEl0IHN1cHBvcnRzIHRocmVlIHZhbHVlcyAtIGB6b29tYCAoZGVmYXVsdCksIGBmYWRlYCAoZGVmYXVsdCBpZiB0aGVyZSBpcyBubyB0aHVtYm5haWwpIGFuZCBgbm9uZWAuXHJcbiAqXHJcbiAqIEFuaW1hdGlvbnMgYXJlIGF1dG9tYXRpY2FsbHkgZGlzYWJsZWQgaWYgdXNlciBgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlgLlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyfSBpbmRleFxyXG4gKiBEZWZpbmVzIHN0YXJ0IHNsaWRlIGluZGV4LlxyXG4gKlxyXG4gKiBAcHJvcCB7KGU6IE1vdXNlRXZlbnQpID0+IG51bWJlcn0gW2dldENsaWNrZWRJbmRleEZuXVxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2Fycm93UHJldl1cclxuICogQHByb3Age2Jvb2xlYW59IFthcnJvd05leHRdXHJcbiAqIEBwcm9wIHtib29sZWFufSBbem9vbV1cclxuICogQHByb3Age2Jvb2xlYW59IFtjbG9zZV1cclxuICogQHByb3Age2Jvb2xlYW59IFtjb3VudGVyXVxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJyb3dQcmV2U1ZHXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJyb3dOZXh0U1ZHXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbem9vbVNWR11cclxuICogQHByb3Age3N0cmluZ30gW2Nsb3NlU1ZHXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY291bnRlclNWR11cclxuICpcclxuICogQHByb3Age3N0cmluZ30gW2Fycm93UHJldlRpdGxlXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJyb3dOZXh0VGl0bGVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFt6b29tVGl0bGVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjbG9zZVRpdGxlXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY291bnRlclRpdGxlXVxyXG4gKlxyXG4gKiBAcHJvcCB7Wm9vbUxldmVsT3B0aW9ufSBbaW5pdGlhbFpvb21MZXZlbF1cclxuICogQHByb3Age1pvb21MZXZlbE9wdGlvbn0gW3NlY29uZGFyeVpvb21MZXZlbF1cclxuICogQHByb3Age1pvb21MZXZlbE9wdGlvbn0gW21heFpvb21MZXZlbF1cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IFttb3VzZU1vdmVQYW5dXHJcbiAqIEBwcm9wIHtQb2ludCB8IG51bGx9IFtpbml0aWFsUG9pbnRlclBvc11cclxuICogQHByb3Age2Jvb2xlYW59IFtzaG93SGlkZU9wYWNpdHldXHJcbiAqXHJcbiAqIEBwcm9wIHtQaG90b1N3aXBlTW9kdWxlT3B0aW9ufSBbcHN3cE1vZHVsZV1cclxuICogQHByb3AgeygpID0+IFByb21pc2U8YW55Pn0gW29wZW5Qcm9taXNlXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW3ByZWxvYWRGaXJzdFNsaWRlXVxyXG4gKiBAcHJvcCB7RWxlbWVudFByb3ZpZGVyfSBbZ2FsbGVyeV1cclxuICogQHByb3Age3N0cmluZ30gW2dhbGxlcnlTZWxlY3Rvcl1cclxuICogQHByb3Age0VsZW1lbnRQcm92aWRlcn0gW2NoaWxkcmVuXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY2hpbGRTZWxlY3Rvcl1cclxuICogQHByb3Age3N0cmluZyB8IGZhbHNlfSBbdGh1bWJTZWxlY3Rvcl1cclxuICovXHJcblxyXG4vKiogQHR5cGUge1ByZXBhcmVkUGhvdG9Td2lwZU9wdGlvbnN9ICovXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGFsbG93UGFuVG9OZXh0OiB0cnVlLFxyXG4gIHNwYWNpbmc6IDAuMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBpbmNoVG9DbG9zZTogdHJ1ZSxcclxuICBjbG9zZU9uVmVydGljYWxEcmFnOiB0cnVlLFxyXG4gIGhpZGVBbmltYXRpb25EdXJhdGlvbjogMzMzLFxyXG4gIHNob3dBbmltYXRpb25EdXJhdGlvbjogMzMzLFxyXG4gIHpvb21BbmltYXRpb25EdXJhdGlvbjogMzMzLFxyXG4gIGVzY0tleTogdHJ1ZSxcclxuICBhcnJvd0tleXM6IHRydWUsXHJcbiAgdHJhcEZvY3VzOiB0cnVlLFxyXG4gIHJldHVybkZvY3VzOiB0cnVlLFxyXG4gIG1heFdpZHRoVG9BbmltYXRlOiA0MDAwLFxyXG4gIGNsaWNrVG9DbG9zZU5vblpvb21hYmxlOiB0cnVlLFxyXG4gIGltYWdlQ2xpY2tBY3Rpb246ICd6b29tLW9yLWNsb3NlJyxcclxuICBiZ0NsaWNrQWN0aW9uOiAnY2xvc2UnLFxyXG4gIHRhcEFjdGlvbjogJ3RvZ2dsZS1jb250cm9scycsXHJcbiAgZG91YmxlVGFwQWN0aW9uOiAnem9vbScsXHJcbiAgaW5kZXhJbmRpY2F0b3JTZXA6ICcgLyAnLFxyXG4gIHByZWxvYWRlckRlbGF5OiAyMDAwLFxyXG4gIGJnT3BhY2l0eTogMC44LFxyXG5cclxuICBpbmRleDogMCxcclxuICBlcnJvck1zZzogJ1RoZSBpbWFnZSBjYW5ub3QgYmUgbG9hZGVkJyxcclxuICBwcmVsb2FkOiBbMSwgMl0sXHJcbiAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgQ29yZVxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZSBleHRlbmRzIFBob3RvU3dpcGVCYXNlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBbb3B0aW9uc11cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX3ByZXBhcmVPcHRpb25zKG9wdGlvbnMgfHwge30pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogb2Zmc2V0IG9mIHZpZXdwb3J0IHJlbGF0aXZlIHRvIGRvY3VtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fcHJldlZpZXdwb3J0U2l6ZSA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2l6ZSBvZiBzY3JvbGxhYmxlIFBob3RvU3dpcGUgdmlld3BvcnRcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudmlld3BvcnRTaXplID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBiYWNrZ3JvdW5kIChiYWNrZHJvcCkgb3BhY2l0eVxyXG4gICAgICovXHJcbiAgICB0aGlzLmJnT3BhY2l0eSA9IDE7XHJcbiAgICB0aGlzLmN1cnJJbmRleCA9IDA7XHJcbiAgICB0aGlzLnBvdGVudGlhbEluZGV4ID0gMDtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGVzdHJveWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNNb3VzZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtTbGlkZURhdGF9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2luaXRpYWxJdGVtRGF0YSA9IHt9O1xyXG4gICAgLyoqIEB0eXBlIHtCb3VuZHMgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLl9pbml0aWFsVGh1bWJCb3VuZHMgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMudG9wQmFyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuY29udGFpbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuc2Nyb2xsV3JhcCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGUgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmN1cnJTbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBET01FdmVudHMoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IG5ldyBBbmltYXRpb25zKCk7XHJcbiAgICB0aGlzLm1haW5TY3JvbGwgPSBuZXcgTWFpblNjcm9sbCh0aGlzKTtcclxuICAgIHRoaXMuZ2VzdHVyZXMgPSBuZXcgR2VzdHVyZXModGhpcyk7XHJcbiAgICB0aGlzLm9wZW5lciA9IG5ldyBPcGVuZXIodGhpcyk7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHRoaXMpO1xyXG4gICAgdGhpcy5jb250ZW50TG9hZGVyID0gbmV3IENvbnRlbnRMb2FkZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogQHJldHVybnMge2Jvb2xlYW59ICovXHJcbiAgaW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnaW5pdCcpOyAvLyBsZWdhY3lcclxuICAgIHRoaXMuZGlzcGF0Y2goJ2JlZm9yZU9wZW4nKTtcclxuXHJcbiAgICB0aGlzLl9jcmVhdGVNYWluU3RydWN0dXJlKCk7XHJcblxyXG4gICAgLy8gYWRkIGNsYXNzZXMgdG8gdGhlIHJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlXHJcbiAgICBsZXQgcm9vdENsYXNzZXMgPSAncHN3cC0tb3Blbic7XHJcbiAgICBpZiAodGhpcy5nZXN0dXJlcy5zdXBwb3J0c1RvdWNoKSB7XHJcbiAgICAgIHJvb3RDbGFzc2VzICs9ICcgcHN3cC0tdG91Y2gnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYWluQ2xhc3MpIHtcclxuICAgICAgcm9vdENsYXNzZXMgKz0gJyAnICsgdGhpcy5vcHRpb25zLm1haW5DbGFzcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyByb290Q2xhc3NlcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJJbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleCB8fCAwO1xyXG4gICAgdGhpcy5wb3RlbnRpYWxJbmRleCA9IHRoaXMuY3VyckluZGV4O1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnZmlyc3RVcGRhdGUnKTsgLy8gc3RhcnRpbmcgaW5kZXggY2FuIGJlIG1vZGlmaWVkIGhlcmVcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIHNjcm9sbCB3aGVlbCBoYW5kbGVyIHRvIGJsb2NrIHRoZSBzY3JvbGxcclxuICAgIHRoaXMuc2Nyb2xsV2hlZWwgPSBuZXcgU2Nyb2xsV2hlZWwodGhpcyk7XHJcblxyXG4gICAgLy8gc2FuaXRpemUgaW5kZXhcclxuICAgIGlmIChOdW1iZXIuaXNOYU4odGhpcy5jdXJySW5kZXgpXHJcbiAgICAgICAgfHwgdGhpcy5jdXJySW5kZXggPCAwXHJcbiAgICAgICAgfHwgdGhpcy5jdXJySW5kZXggPj0gdGhpcy5nZXROdW1JdGVtcygpKSB7XHJcbiAgICAgIHRoaXMuY3VyckluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZ2VzdHVyZXMuc3VwcG9ydHNUb3VjaCkge1xyXG4gICAgICAvLyBlbmFibGUgbW91c2UgZmVhdHVyZXMgaWYgbm8gdG91Y2ggc3VwcG9ydCBkZXRlY3RlZFxyXG4gICAgICB0aGlzLm1vdXNlRGV0ZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYXVzZXMgZm9yY2VkIHN5bmNocm9ub3VzIGxheW91dFxyXG4gICAgdGhpcy51cGRhdGVTaXplKCk7XHJcblxyXG4gICAgdGhpcy5vZmZzZXQueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsSXRlbURhdGEgPSB0aGlzLmdldEl0ZW1EYXRhKHRoaXMuY3VyckluZGV4KTtcclxuICAgIHRoaXMuZGlzcGF0Y2goJ2dldHRpbmdEYXRhJywge1xyXG4gICAgICBpbmRleDogdGhpcy5jdXJySW5kZXgsXHJcbiAgICAgIGRhdGE6IHRoaXMuX2luaXRpYWxJdGVtRGF0YSxcclxuICAgICAgc2xpZGU6IHVuZGVmaW5lZFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gKkxheW91dCogLSBjYWxjdWxhdGUgc2l6ZSBhbmQgcG9zaXRpb24gb2YgZWxlbWVudHMgaGVyZVxyXG4gICAgdGhpcy5faW5pdGlhbFRodW1iQm91bmRzID0gdGhpcy5nZXRUaHVtYkJvdW5kcygpO1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnaW5pdGlhbExheW91dCcpO1xyXG5cclxuICAgIHRoaXMub24oJ29wZW5pbmdBbmltYXRpb25FbmQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaXRlbUhvbGRlcnMgfSA9IHRoaXMubWFpblNjcm9sbDtcclxuXHJcbiAgICAgIC8vIEFkZCBjb250ZW50IHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBzbGlkZVxyXG4gICAgICBpZiAoaXRlbUhvbGRlcnNbMF0pIHtcclxuICAgICAgICBpdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnNldENvbnRlbnQoaXRlbUhvbGRlcnNbMF0sIHRoaXMuY3VyckluZGV4IC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1Ib2xkZXJzWzJdKSB7XHJcbiAgICAgICAgaXRlbUhvbGRlcnNbMl0uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KGl0ZW1Ib2xkZXJzWzJdLCB0aGlzLmN1cnJJbmRleCArIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEhlYXZ5KCk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZXIudXBkYXRlTGF6eSgpO1xyXG5cclxuICAgICAgdGhpcy5ldmVudHMuYWRkKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVBhZ2VSZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZXZlbnRzLmFkZCh3aW5kb3csICdzY3JvbGwnLCB0aGlzLl91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0LmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoKCdiaW5kRXZlbnRzJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgY29udGVudCBmb3IgY2VudGVyIHNsaWRlIChmaXJzdCB0aW1lKVxyXG4gICAgaWYgKHRoaXMubWFpblNjcm9sbC5pdGVtSG9sZGVyc1sxXSkge1xyXG4gICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzFdLCB0aGlzLmN1cnJJbmRleCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BhdGNoKCdjaGFuZ2UnKTtcclxuXHJcbiAgICB0aGlzLm9wZW5lci5vcGVuKCk7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaCgnYWZ0ZXJJbml0Jyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbG9vcGVkIHNsaWRlIGluZGV4XHJcbiAgICogKGZvciBleGFtcGxlLCAtMSB3aWxsIHJldHVybiB0aGUgbGFzdCBzbGlkZSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0TG9vcGVkSW5kZXgoaW5kZXgpIHtcclxuICAgIGNvbnN0IG51bVNsaWRlcyA9IHRoaXMuZ2V0TnVtSXRlbXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmxvb3ApIHtcclxuICAgICAgaWYgKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xyXG4gICAgICAgIGluZGV4IC09IG51bVNsaWRlcztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgIGluZGV4ICs9IG51bVNsaWRlcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbGFtcChpbmRleCwgMCwgbnVtU2xpZGVzIC0gMSk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRIZWF2eSgpIHtcclxuICAgIHRoaXMubWFpblNjcm9sbC5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyKSA9PiB7XHJcbiAgICAgIGl0ZW1Ib2xkZXIuc2xpZGU/LmFwcGVuZEhlYXZ5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgc2xpZGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggTmV3IGluZGV4XHJcbiAgICovXHJcbiAgZ29UbyhpbmRleCkge1xyXG4gICAgdGhpcy5tYWluU2Nyb2xsLm1vdmVJbmRleEJ5KFxyXG4gICAgICB0aGlzLmdldExvb3BlZEluZGV4KGluZGV4KSAtIHRoaXMucG90ZW50aWFsSW5kZXhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHbyB0byB0aGUgbmV4dCBzbGlkZS5cclxuICAgKi9cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMucG90ZW50aWFsSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdvIHRvIHRoZSBwcmV2aW91cyBzbGlkZS5cclxuICAgKi9cclxuICBwcmV2KCkge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMucG90ZW50aWFsSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgc2xpZGUvc2xpZGUuanMgem9vbVRvXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BhcmFtZXRlcnM8U2xpZGVbJ3pvb21UbyddPn0gYXJnc1xyXG4gICAqL1xyXG4gIHpvb21UbyguLi5hcmdzKSB7XHJcbiAgICB0aGlzLmN1cnJTbGlkZT8uem9vbVRvKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHNlZSBzbGlkZS9zbGlkZS5qcyB0b2dnbGVab29tXHJcbiAgICovXHJcbiAgdG9nZ2xlWm9vbSgpIHtcclxuICAgIHRoaXMuY3VyclNsaWRlPy50b2dnbGVab29tKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZSB0aGUgZ2FsbGVyeS5cclxuICAgKiBBZnRlciBjbG9zaW5nIHRyYW5zaXRpb24gZW5kcyAtIGRlc3Ryb3kgaXRcclxuICAgKi9cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICghdGhpcy5vcGVuZXIuaXNPcGVuIHx8IHRoaXMuaXNEZXN0cm95aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzRGVzdHJveWluZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaCgnY2xvc2UnKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50cy5yZW1vdmVBbGwoKTtcclxuICAgIHRoaXMub3BlbmVyLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95cyB0aGUgZ2FsbGVyeTpcclxuICAgKiAtIGluc3RhbnRseSBjbG9zZXMgdGhlIGdhbGxlcnlcclxuICAgKiAtIHVuYmluZHMgZXZlbnRzLFxyXG4gICAqIC0gY2xlYW5zIGludGVydmFscyBhbmQgdGltZW91dHNcclxuICAgKiAtIHJlbW92ZXMgZWxlbWVudHMgZnJvbSBET01cclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuc2hvd0hpZGVBbmltYXRpb25UeXBlID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdkZXN0cm95Jyk7XHJcblxyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsV3JhcCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFdyYXAub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICB0aGlzLnNjcm9sbFdyYXAub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Py5yZW1vdmUoKTtcclxuXHJcbiAgICB0aGlzLm1haW5TY3JvbGwuaXRlbUhvbGRlcnMuZm9yRWFjaCgoaXRlbUhvbGRlcikgPT4ge1xyXG4gICAgICBpdGVtSG9sZGVyLnNsaWRlPy5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRlbnRMb2FkZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5ldmVudHMucmVtb3ZlQWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoL3JlbG9hZCBjb250ZW50IG9mIGEgc2xpZGUgYnkgaXRzIGluZGV4XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2xpZGVJbmRleFxyXG4gICAqL1xyXG4gIHJlZnJlc2hTbGlkZUNvbnRlbnQoc2xpZGVJbmRleCkge1xyXG4gICAgdGhpcy5jb250ZW50TG9hZGVyLnJlbW92ZUJ5SW5kZXgoc2xpZGVJbmRleCk7XHJcbiAgICB0aGlzLm1haW5TY3JvbGwuaXRlbUhvbGRlcnMuZm9yRWFjaCgoaXRlbUhvbGRlciwgaSkgPT4ge1xyXG4gICAgICBsZXQgcG90ZW50aWFsSG9sZGVySW5kZXggPSAodGhpcy5jdXJyU2xpZGU/LmluZGV4ID8/IDApIC0gMSArIGk7XHJcbiAgICAgIGlmICh0aGlzLmNhbkxvb3AoKSkge1xyXG4gICAgICAgIHBvdGVudGlhbEhvbGRlckluZGV4ID0gdGhpcy5nZXRMb29wZWRJbmRleChwb3RlbnRpYWxIb2xkZXJJbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvdGVudGlhbEhvbGRlckluZGV4ID09PSBzbGlkZUluZGV4KSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBuZXcgc2xpZGUgY29udGVudFxyXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChpdGVtSG9sZGVyLCBzbGlkZUluZGV4LCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgdGhlIG5ldyBzbGlkZSBpZiBpdCdzIGN1cnJlbnRcclxuICAgICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyU2xpZGUgPSBpdGVtSG9sZGVyLnNsaWRlO1xyXG4gICAgICAgICAgaXRlbUhvbGRlci5zbGlkZT8uc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdjaGFuZ2UnKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXQgc2xpZGUgY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtJdGVtSG9sZGVyfSBob2xkZXIgbWFpblNjcm9sbC5pdGVtSG9sZGVycyBhcnJheSBpdGVtXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIElmIGNvbnRlbnQgc2hvdWxkIGJlIHNldCBldmVuIGlmIGluZGV4IHdhc24ndCBjaGFuZ2VkXHJcbiAgICovXHJcbiAgc2V0Q29udGVudChob2xkZXIsIGluZGV4LCBmb3JjZSkge1xyXG4gICAgaWYgKHRoaXMuY2FuTG9vcCgpKSB7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5nZXRMb29wZWRJbmRleChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvbGRlci5zbGlkZSkge1xyXG4gICAgICBpZiAoaG9sZGVyLnNsaWRlLmluZGV4ID09PSBpbmRleCAmJiAhZm9yY2UpIHtcclxuICAgICAgICAvLyBleGl0IGlmIGhvbGRlciBhbHJlYWR5IGNvbnRhaW5zIHRoaXMgc2xpZGVcclxuICAgICAgICAvLyB0aGlzIGNvdWxkIGJlIGNvbW1vbiB3aGVuIGp1c3QgdGhyZWUgc2xpZGVzIGFyZSB1c2VkXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBkZXN0cm95IHByZXZpb3VzIHNsaWRlXHJcbiAgICAgIGhvbGRlci5zbGlkZS5kZXN0cm95KCk7XHJcbiAgICAgIGhvbGRlci5zbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleGl0IGlmIG5vIGxvb3AgYW5kIGluZGV4IGlzIG91dCBvZiBib3VuZHNcclxuICAgIGlmICghdGhpcy5jYW5Mb29wKCkgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmdldE51bUl0ZW1zKCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtRGF0YSA9IHRoaXMuZ2V0SXRlbURhdGEoaW5kZXgpO1xyXG4gICAgaG9sZGVyLnNsaWRlID0gbmV3IFNsaWRlKGl0ZW1EYXRhLCBpbmRleCwgdGhpcyk7XHJcblxyXG4gICAgLy8gc2V0IGN1cnJlbnQgc2xpZGVcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5jdXJySW5kZXgpIHtcclxuICAgICAgdGhpcy5jdXJyU2xpZGUgPSBob2xkZXIuc2xpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaG9sZGVyLnNsaWRlLmFwcGVuZChob2xkZXIuZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm5zIHtQb2ludH0gKi9cclxuICBnZXRWaWV3cG9ydENlbnRlclBvaW50KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogdGhpcy52aWV3cG9ydFNpemUueCAvIDIsXHJcbiAgICAgIHk6IHRoaXMudmlld3BvcnRTaXplLnkgLyAyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNpemUgb2YgYWxsIGVsZW1lbnRzLlxyXG4gICAqIEV4ZWN1dGVkIG9uIGluaXQgYW5kIG9uIHBhZ2UgcmVzaXplLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIFVwZGF0ZSBzaXplIGV2ZW4gaWYgc2l6ZSBvZiB2aWV3cG9ydCB3YXMgbm90IGNoYW5nZWQuXHJcbiAgICovXHJcbiAgdXBkYXRlU2l6ZShmb3JjZSkge1xyXG4gICAgLy8gbGV0IGl0ZW07XHJcbiAgICAvLyBsZXQgaXRlbUluZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICAvLyBleGl0IGlmIFBob3RvU3dpcGUgaXMgY2xvc2VkIG9yIGNsb3NpbmdcclxuICAgICAgLy8gKHRvIGF2b2lkIGVycm9ycywgYXMgcmVzaXplIGV2ZW50IG1pZ2h0IGJlIGRlbGF5ZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnN0IG5ld1dpZHRoID0gdGhpcy5zY3JvbGxXcmFwLmNsaWVudFdpZHRoO1xyXG4gICAgLy9jb25zdCBuZXdIZWlnaHQgPSB0aGlzLnNjcm9sbFdyYXAuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IG5ld1ZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSh0aGlzLm9wdGlvbnMsIHRoaXMpO1xyXG5cclxuICAgIGlmICghZm9yY2UgJiYgcG9pbnRzRXF1YWwobmV3Vmlld3BvcnRTaXplLCB0aGlzLl9wcmV2Vmlld3BvcnRTaXplKSkge1xyXG4gICAgICAvLyBFeGl0IGlmIGRpbWVuc2lvbnMgd2VyZSBub3QgY2hhbmdlZFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzLl9wcmV2Vmlld3BvcnRTaXplLnggPSBuZXdXaWR0aDtcclxuICAgIC8vdGhpcy5fcHJldlZpZXdwb3J0U2l6ZS55ID0gbmV3SGVpZ2h0O1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5fcHJldlZpZXdwb3J0U2l6ZSwgbmV3Vmlld3BvcnRTaXplKTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdiZWZvcmVSZXNpemUnKTtcclxuXHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnZpZXdwb3J0U2l6ZSwgdGhpcy5fcHJldlZpZXdwb3J0U2l6ZSk7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlUGFnZVNjcm9sbE9mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ3ZpZXdwb3J0U2l6ZScpO1xyXG5cclxuICAgIC8vIFJlc2l6ZSBzbGlkZXMgb25seSBhZnRlciBvcGVuZXIgYW5pbWF0aW9uIGlzIGZpbmlzaGVkXHJcbiAgICAvLyBhbmQgZG9uJ3QgcmUtY2FsY3VsYXRlIHNpemUgb24gaW5pdGFsIHNpemUgdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TY3JvbGwucmVzaXplKHRoaXMub3BlbmVyLmlzT3Blbik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmhhc01vdXNlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcoYW55LWhvdmVyOiBob3ZlciknKS5tYXRjaGVzKSB7XHJcbiAgICAgIHRoaXMubW91c2VEZXRlY3RlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ3Jlc2l6ZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wYWNpdHlcclxuICAgKi9cclxuICBhcHBseUJnT3BhY2l0eShvcGFjaXR5KSB7XHJcbiAgICB0aGlzLmJnT3BhY2l0eSA9IE1hdGgubWF4KG9wYWNpdHksIDApO1xyXG4gICAgaWYgKHRoaXMuYmcpIHtcclxuICAgICAgdGhpcy5iZy5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKHRoaXMuYmdPcGFjaXR5ICogdGhpcy5vcHRpb25zLmJnT3BhY2l0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIG1vdXNlIGlzIGRldGVjdGVkXHJcbiAgICovXHJcbiAgbW91c2VEZXRlY3RlZCgpIHtcclxuICAgIGlmICghdGhpcy5oYXNNb3VzZSkge1xyXG4gICAgICB0aGlzLmhhc01vdXNlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdwc3dwLS1oYXNfbW91c2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhZ2UgcmVzaXplIGV2ZW50IGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2hhbmRsZVBhZ2VSZXNpemUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAvLyBJbiBpT1Mgd2VidmlldywgaWYgZWxlbWVudCBzaXplIGRlcGVuZHMgb24gZG9jdW1lbnQgc2l6ZSxcclxuICAgIC8vIGl0J2xsIGJlIG1lYXN1cmVkIGluY29ycmVjdGx5IGluIHJlc2l6ZSBldmVudFxyXG4gICAgLy9cclxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzA1OTVcclxuICAgIC8vIGh0dHBzOi8vaGFja2Vybm9vbi5jb20vb25yZXNpemUtZXZlbnQtYnJva2VuLWluLW1vYmlsZS1zYWZhcmktZDg0NjkwMjdiZjRkXHJcbiAgICBpZiAoL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhZ2Ugc2Nyb2xsIG9mZnNldCBpcyB1c2VkXHJcbiAgICogdG8gZ2V0IGNvcnJlY3QgY29vcmRpbmF0ZXNcclxuICAgKiByZWxhdGl2ZSB0byBQaG90b1N3aXBlIHZpZXdwb3J0LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCgpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsT2Zmc2V0KDAsIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0U2Nyb2xsT2Zmc2V0KHgsIHkpIHtcclxuICAgIHRoaXMub2Zmc2V0LnggPSB4O1xyXG4gICAgdGhpcy5vZmZzZXQueSA9IHk7XHJcbiAgICB0aGlzLmRpc3BhdGNoKCd1cGRhdGVTY3JvbGxPZmZzZXQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBtYWluIEhUTUwgc3RydWN0dXJlIG9mIFBob3RvU3dpcGUsXHJcbiAgICogYW5kIGFkZCBpdCB0byBET01cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NyZWF0ZU1haW5TdHJ1Y3R1cmUoKSB7XHJcbiAgICAvLyByb290IERPTSBlbGVtZW50IG9mIFBob3RvU3dpcGUgKC5wc3dwKVxyXG4gICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cCcsICdkaXYnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xyXG5cclxuICAgIC8vIHRlbXBsYXRlIGlzIGxlZ2FjeSBwcm9wXHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5lbGVtZW50O1xyXG5cclxuICAgIC8vIEJhY2tncm91bmQgaXMgYWRkZWQgYXMgYSBzZXBhcmF0ZSBlbGVtZW50LFxyXG4gICAgLy8gYXMgYW5pbWF0aW5nIG9wYWNpdHkgaXMgZmFzdGVyIHRoYW4gYW5pbWF0aW5nIHJnYmEoKVxyXG4gICAgdGhpcy5iZyA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2JnJywgJ2RpdicsIHRoaXMuZWxlbWVudCk7XHJcbiAgICB0aGlzLnNjcm9sbFdyYXAgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19zY3JvbGwtd3JhcCcsICdzZWN0aW9uJywgdGhpcy5lbGVtZW50KTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgncHN3cF9fY29udGFpbmVyJywgJ2RpdicsIHRoaXMuc2Nyb2xsV3JhcCk7XHJcblxyXG4gICAgLy8gYXJpYSBwYXR0ZXJuOiBjYXJvdXNlbFxyXG4gICAgdGhpcy5zY3JvbGxXcmFwLnNldEF0dHJpYnV0ZSgnYXJpYS1yb2xlZGVzY3JpcHRpb24nLCAnY2Fyb3VzZWwnKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ29mZicpO1xyXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwc3dwX19pdGVtcycpO1xyXG5cclxuICAgIHRoaXMubWFpblNjcm9sbC5hcHBlbmRIb2xkZXJzKCk7XHJcblxyXG4gICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcclxuICAgIHRoaXMudWkuaW5pdCgpO1xyXG5cclxuICAgIC8vIGFwcGVuZCB0byBET01cclxuICAgICh0aGlzLm9wdGlvbnMuYXBwZW5kVG9FbCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBwb3NpdGlvbiBhbmQgZGltZW5zaW9ucyBvZiBzbWFsbCB0aHVtYm5haWxcclxuICAgKiAgIHt4Oix5Oix3On1cclxuICAgKlxyXG4gICAqIEhlaWdodCBpcyBvcHRpb25hbCAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgbGFyZ2UgaW1hZ2UpXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Qm91bmRzIHwgdW5kZWZpbmVkfVxyXG4gICAqL1xyXG4gIGdldFRodW1iQm91bmRzKCkge1xyXG4gICAgcmV0dXJuIGdldFRodW1iQm91bmRzKFxyXG4gICAgICB0aGlzLmN1cnJJbmRleCxcclxuICAgICAgdGhpcy5jdXJyU2xpZGUgPyB0aGlzLmN1cnJTbGlkZS5kYXRhIDogdGhpcy5faW5pdGlhbEl0ZW1EYXRhLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIFBob3RvU3dpcGUgY2FuIGhhdmUgY29udGludW91cyBsb29wXHJcbiAgICogQHJldHVybnMgQm9vbGVhblxyXG4gICAqL1xyXG4gIGNhbkxvb3AoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5sb29wICYmIHRoaXMuZ2V0TnVtSXRlbXMoKSA+IDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1ByZXBhcmVkUGhvdG9Td2lwZU9wdGlvbnN9XHJcbiAgICovXHJcbiAgX3ByZXBhcmVPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pLCAodXBkYXRlOiBzbG93KScpLm1hdGNoZXMpIHtcclxuICAgICAgb3B0aW9ucy5zaG93SGlkZUFuaW1hdGlvblR5cGUgPSAnbm9uZSc7XHJcbiAgICAgIG9wdGlvbnMuem9vbUFuaW1hdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQHR5cGUge1ByZXBhcmVkUGhvdG9Td2lwZU9wdGlvbnN9ICovXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvU3dpcGU7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGFnTmFtZSIsImFwcGVuZFRvRWwiLCJlbCIsImRvY3VtZW50IiwiYXBwZW5kQ2hpbGQiLCJlcXVhbGl6ZVBvaW50cyIsInAxIiwicDIiLCJ4IiwieSIsImlkIiwidW5kZWZpbmVkIiwicm91bmRQb2ludCIsInAiLCJNYXRoIiwicm91bmQiLCJnZXREaXN0YW5jZUJldHdlZW4iLCJhYnMiLCJzcXJ0IiwicG9pbnRzRXF1YWwiLCJjbGFtcCIsInZhbCIsIm1pbiIsIm1heCIsInRvVHJhbnNmb3JtU3RyaW5nIiwic2NhbGUiLCJwcm9wVmFsdWUiLCJjb25jYXQiLCJzZXRUcmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zZm9ybSIsImRlZmF1bHRDU1NFYXNpbmciLCJzZXRUcmFuc2l0aW9uU3R5bGUiLCJwcm9wIiwiZHVyYXRpb24iLCJlYXNlIiwidHJhbnNpdGlvbiIsInNldFdpZHRoSGVpZ2h0IiwidyIsImgiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZVRyYW5zaXRpb25TdHlsZSIsImRlY29kZUltYWdlIiwiaW1nIiwiZGVjb2RlIiwiY29tcGxldGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJMT0FEX1NUQVRFIiwiSURMRSIsIkxPQURJTkciLCJMT0FERUQiLCJFUlJPUiIsInNwZWNpYWxLZXlVc2VkIiwiZSIsImJ1dHRvbiIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJnZXRFbGVtZW50c0Zyb21PcHRpb24iLCJvcHRpb24iLCJsZWdhY3lTZWxlY3RvciIsInBhcmVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImVsZW1lbnRzIiwiRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImlzU2FmYXJpIiwibmF2aWdhdG9yIiwidmVuZG9yIiwibWF0Y2giLCJzdXBwb3J0c1Bhc3NpdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJET01FdmVudHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfcG9vbCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkIiwidGFyZ2V0IiwidHlwZSIsImxpc3RlbmVyIiwicGFzc2l2ZSIsIl90b2dnbGVMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUFsbCIsIl90aGlzIiwiZm9yRWFjaCIsInBvb2xJdGVtIiwidW5iaW5kIiwic2tpcFBvb2wiLCJfdGhpczIiLCJtZXRob2ROYW1lIiwidHlwZXMiLCJzcGxpdCIsImVUeXBlIiwiZmlsdGVyIiwicHVzaCIsImV2ZW50T3B0aW9ucyIsImdldFZpZXdwb3J0U2l6ZSIsIm9wdGlvbnMiLCJwc3dwIiwiZ2V0Vmlld3BvcnRTaXplRm4iLCJuZXdWaWV3cG9ydFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVySGVpZ2h0IiwicGFyc2VQYWRkaW5nT3B0aW9uIiwidmlld3BvcnRTaXplIiwiaXRlbURhdGEiLCJpbmRleCIsInBhZGRpbmdWYWx1ZSIsInBhZGRpbmdGbiIsInBhZGRpbmciLCJsZWdhY3lQcm9wTmFtZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJOdW1iZXIiLCJnZXRQYW5BcmVhU2l6ZSIsIlBhbkJvdW5kcyIsInNsaWRlIiwiY3Vyclpvb21MZXZlbCIsImNlbnRlciIsInVwZGF0ZSIsInJlc2V0IiwiX3VwZGF0ZUF4aXMiLCJkaXNwYXRjaCIsImF4aXMiLCJlbFNpemUiLCJwYWRkaW5nUHJvcCIsImRhdGEiLCJwYW5BcmVhU2l6ZSIsImNvcnJlY3RQYW4iLCJwYW5PZmZzZXQiLCJNQVhfSU1BR0VfV0lEVEgiLCJab29tTGV2ZWwiLCJlbGVtZW50U2l6ZSIsImZpdCIsImZpbGwiLCJ2RmlsbCIsImluaXRpYWwiLCJzZWNvbmRhcnkiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImhSYXRpbyIsInZSYXRpbyIsIl9nZXRJbml0aWFsIiwiX2dldFNlY29uZGFyeSIsIl9nZXRNYXgiLCJ6b29tTGV2ZWxzIiwic2xpZGVEYXRhIiwiX3BhcnNlWm9vbUxldmVsT3B0aW9uIiwib3B0aW9uUHJlZml4Iiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwiU2xpZGUiLCJpc0FjdGl2ZSIsImN1cnJJbmRleCIsImN1cnJlbnRSZXNvbHV0aW9uIiwicGFuIiwiaXNGaXJzdFNsaWRlIiwib3BlbmVyIiwiaXNPcGVuIiwiY29udGVudCIsImNvbnRlbnRMb2FkZXIiLCJnZXRDb250ZW50QnlTbGlkZSIsImNvbnRhaW5lciIsImhvbGRlckVsZW1lbnQiLCJoZWF2eUFwcGVuZGVkIiwiYm91bmRzIiwicHJldkRpc3BsYXllZFdpZHRoIiwicHJldkRpc3BsYXllZEhlaWdodCIsInNldElzQWN0aXZlIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYXBwZW5kIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsY3VsYXRlU2l6ZSIsImxvYWQiLCJ1cGRhdGVDb250ZW50U2l6ZSIsImFwcGVuZEhlYXZ5Iiwiem9vbUFuZFBhblRvSW5pdGlhbCIsImFwcGx5Q3VycmVudFpvb21QYW4iLCJhcHBlbmRIZWF2eU5lYXJieSIsIm1haW5TY3JvbGwiLCJpc1NoaWZ0ZWQiLCJkZWZhdWx0UHJldmVudGVkIiwiZGVzdHJveSIsImhhc1NsaWRlIiwicmVzaXplIiwicGFuVG8iLCJmb3JjZSIsInNjYWxlTXVsdGlwbGllciIsInNpemVDaGFuZ2VkIiwic2V0RGlzcGxheWVkU2l6ZSIsImdldFBsYWNlaG9sZGVyRWxlbWVudCIsIl90aGlzJGNvbnRlbnQkcGxhY2VobyIsInBsYWNlaG9sZGVyIiwiZWxlbWVudCIsInpvb21UbyIsImRlc3Rab29tTGV2ZWwiLCJjZW50ZXJQb2ludCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImlnbm9yZUJvdW5kcyIsIl90aGlzMyIsImlzWm9vbWFibGUiLCJhbmltYXRpb25zIiwic3RvcEFsbFBhbiIsInByZXZab29tTGV2ZWwiLCJzZXRab29tTGV2ZWwiLCJjYWxjdWxhdGVab29tVG9QYW5PZmZzZXQiLCJmaW5pc2hUcmFuc2l0aW9uIiwiX3NldFJlc29sdXRpb24iLCJzdGFydFRyYW5zaXRpb24iLCJpc1BhbiIsIm5hbWUiLCJnZXRDdXJyZW50VHJhbnNmb3JtIiwib25Db21wbGV0ZSIsImVhc2luZyIsInRvZ2dsZVpvb20iLCJ6b29tQW5pbWF0aW9uRHVyYXRpb24iLCJwb2ludCIsInRvdGFsUGFuRGlzdGFuY2UiLCJnZXRWaWV3cG9ydENlbnRlclBvaW50Iiwiem9vbUZhY3RvciIsInBhblgiLCJwYW5ZIiwiaXNQYW5uYWJsZSIsIkJvb2xlYW4iLCJfYXBwbHlab29tVHJhbnNmb3JtIiwiY3VyclNsaWRlIiwiem9vbSIsIm5ld1Jlc29sdXRpb24iLCJQQU5fRU5EX0ZSSUNUSU9OIiwiVkVSVElDQUxfRFJBR19GUklDVElPTiIsIk1JTl9SQVRJT19UT19DTE9TRSIsIk1JTl9ORVhUX1NMSURFX1NQRUVEIiwicHJvamVjdCIsImluaXRpYWxWZWxvY2l0eSIsImRlY2VsZXJhdGlvblJhdGUiLCJEcmFnSGFuZGxlciIsImdlc3R1cmVzIiwic3RhcnRQYW4iLCJzdGFydCIsInN0b3BBbGwiLCJjaGFuZ2UiLCJfdGhpcyRnZXN0dXJlcyIsInByZXZQMSIsImRyYWdBeGlzIiwiY2xvc2VPblZlcnRpY2FsRHJhZyIsImlzTXVsdGl0b3VjaCIsIl9zZXRQYW5XaXRoRnJpY3Rpb24iLCJiZ09wYWNpdHkiLCJfZ2V0VmVydGljYWxEcmFnUmF0aW8iLCJhcHBseUJnT3BhY2l0eSIsIm1haW5TY3JvbGxDaGFuZ2VkIiwiX3Bhbk9yTW92ZU1haW5TY3JvbGwiLCJlbmQiLCJ2ZWxvY2l0eSIsIl90aGlzJHBzd3A0IiwiaW5kZXhEaWZmIiwibWFpblNjcm9sbFNoaWZ0RGlmZiIsImdldEN1cnJTbGlkZVgiLCJjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8iLCJtb3ZlSW5kZXhCeSIsImNvcnJlY3Rab29tUGFuIiwiX2ZpbmlzaFBhbkdlc3R1cmVGb3JBeGlzIiwiX3RoaXM0IiwicGFuUG9zIiwicmVzdG9yZUJnT3BhY2l0eSIsInByb2plY3RlZFBvc2l0aW9uIiwidkRyYWdSYXRpbyIsInByb2plY3RlZFZEcmFnUmF0aW8iLCJjbG9zZSIsImNvcnJlY3RlZFBhblBvc2l0aW9uIiwiZGFtcGluZ1JhdGlvIiwiaW5pdGlhbEJnT3BhY2l0eSIsInRvdGFsUGFuRGlzdCIsInN0YXJ0U3ByaW5nIiwib25VcGRhdGUiLCJwb3MiLCJhbmltYXRpb25Qcm9ncmVzc1JhdGlvIiwiZmxvb3IiLCJfdGhpcyRnZXN0dXJlczIiLCJfdGhpcyRwc3dwNSIsImRlbHRhIiwibmV3TWFpblNjcm9sbFgiLCJtb3ZlVG8iLCJuZXdQYW4iLCJhbGxvd1BhblRvTmV4dCIsImN1cnJTbGlkZU1haW5TY3JvbGxYIiwiaXNMZWZ0VG9SaWdodCIsImlzUmlnaHRUb0xlZnQiLCJ3YXNBdE1pblBhblBvc2l0aW9uIiwid2FzQXRNYXhQYW5Qb3NpdGlvbiIsIl90aGlzJHBzd3AkY3VyclNsaWRlJCIsIl90aGlzJHBzd3AkY3VyclNsaWRlIiwicG90ZW50aWFsUGFuIiwiY3VzdG9tRnJpY3Rpb24iLCJjb3JyZWN0ZWRQYW4iLCJVUFBFUl9aT09NX0ZSSUNUSU9OIiwiTE9XRVJfWk9PTV9GUklDVElPTiIsImdldFpvb21Qb2ludHNDZW50ZXIiLCJab29tSGFuZGxlciIsIl9zdGFydFBhbiIsIl9zdGFydFpvb21Qb2ludCIsIl96b29tUG9pbnQiLCJfd2FzT3ZlckZpdFpvb21MZXZlbCIsIl9zdGFydFpvb21MZXZlbCIsIl90aGlzJGdlc3R1cmVzMyIsInN0YXJ0UDEiLCJzdGFydFAyIiwibWluWm9vbUxldmVsIiwibWF4Wm9vbUxldmVsIiwicGluY2hUb0Nsb3NlIiwiX2NhbGN1bGF0ZVBhbkZvclpvb21MZXZlbCIsImlnbm9yZUdlc3R1cmUiLCJkZXN0aW5hdGlvblpvb21MZXZlbCIsImN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSIsImluaXRpYWxQYW4iLCJkZXN0aW5hdGlvblBhbiIsInBhbk5lZWRzQ2hhbmdlIiwibmF0dXJhbEZyZXF1ZW5jeSIsIm5vdyIsIm5ld1pvb21MZXZlbCIsImRpZFRhcE9uTWFpbkNvbnRlbnQiLCJldmVudCIsImNsb3Nlc3QiLCJUYXBIYW5kbGVyIiwiY2xpY2siLCJvcmlnaW5hbEV2ZW50IiwidGFyZ2V0Q2xhc3NMaXN0IiwiY2xhc3NMaXN0IiwiaXNJbWFnZUNsaWNrIiwiY29udGFpbnMiLCJpc0JhY2tncm91bmRDbGljayIsIl9kb0NsaWNrT3JUYXBBY3Rpb24iLCJ0YXAiLCJkb3VibGVUYXAiLCJhY3Rpb25OYW1lIiwiX3RoaXMkZ2VzdHVyZXMkcHN3cCRlIiwiYWN0aW9uRnVsbE5hbWUiLCJjYWxsIiwiY2xpY2tUb0Nsb3NlTm9uWm9vbWFibGUiLCJ0b2dnbGUiLCJBWElTX1NXSVBFX0hZU1RFUklTSVMiLCJET1VCTEVfVEFQX0RFTEFZIiwiTUlOX1RBUF9ESVNUQU5DRSIsIkdlc3R1cmVzIiwiX3RoaXM1IiwicHJldlAyIiwiX2xhc3RTdGFydFAxIiwiX2ludGVydmFsUDEiLCJfbnVtQWN0aXZlUG9pbnRzIiwiX29uZ29pbmdQb2ludGVycyIsIl90b3VjaEV2ZW50RW5hYmxlZCIsIl9wb2ludGVyRXZlbnRFbmFibGVkIiwiUG9pbnRlckV2ZW50Iiwic3VwcG9ydHNUb3VjaCIsIm1heFRvdWNoUG9pbnRzIiwiX2ludGVydmFsVGltZSIsIl92ZWxvY2l0eUNhbGN1bGF0ZWQiLCJpc0RyYWdnaW5nIiwiaXNab29taW5nIiwicmFmIiwiX3RhcFRpbWVyIiwiZHJhZyIsInRhcEhhbmRsZXIiLCJvbiIsImV2ZW50cyIsInNjcm9sbFdyYXAiLCJfb25DbGljayIsImJpbmQiLCJfYmluZEV2ZW50cyIsIm9udG91Y2htb3ZlIiwib250b3VjaGVuZCIsInByZWYiLCJkb3duIiwidXAiLCJjYW5jZWwiLCJjYW5jZWxFdmVudCIsIm9uUG9pbnRlckRvd24iLCJvblBvaW50ZXJNb3ZlIiwib25Qb2ludGVyVXAiLCJpc01vdXNlUG9pbnRlciIsInBvaW50ZXJUeXBlIiwicHJldmVudERlZmF1bHQiLCJtb3VzZURldGVjdGVkIiwiX3ByZXZlbnRQb2ludGVyRXZlbnRCZWhhdmlvdXIiLCJfdXBkYXRlUG9pbnRzIiwiX2NsZWFyVGFwVGltZXIiLCJfY2FsY3VsYXRlRHJhZ0RpcmVjdGlvbiIsIl91cGRhdGVTdGFydFBvaW50cyIsIkRhdGUiLCJfcmFmU3RvcExvb3AiLCJfcmFmUmVuZGVyTG9vcCIsIl9maW5pc2hEcmFnIiwiX3VwZGF0ZVZlbG9jaXR5IiwiX2ZpbmlzaFRhcCIsIl91cGRhdGVQcmV2UG9pbnRzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsIl9nZXRWZWxvY2l0eSIsIl90aGlzNiIsImluZGV4T2YiLCJ0YXBEZWxheSIsImRvdWJsZVRhcEFjdGlvbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGFjZW1lbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInByZXZlbnRQb2ludGVyRXZlbnQiLCJhcHBseUZpbHRlcnMiLCJwb2ludGVyRXZlbnQiLCJwb2ludGVySW5kZXgiLCJmaW5kSW5kZXgiLCJvbmdvaW5nUG9pbnRlciIsInBvaW50ZXJJZCIsInNwbGljZSIsIl9jb252ZXJ0RXZlbnRQb3NUb1BvaW50IiwidG91Y2hFdmVudCIsInRvdWNoZXMiLCJkaWZmIiwiYXhpc1RvQ2hlY2siLCJwYWdlWCIsIm9mZnNldCIsInBhZ2VZIiwiaWRlbnRpZmllciIsInN0b3BQcm9wYWdhdGlvbiIsIk1BSU5fU0NST0xMX0VORF9GUklDVElPTiIsIk1haW5TY3JvbGwiLCJzbGlkZVdpZHRoIiwiX2N1cnJQb3NpdGlvbkluZGV4IiwiX3ByZXZQb3NpdGlvbkluZGV4IiwiX2NvbnRhaW5lclNoaWZ0SW5kZXgiLCJpdGVtSG9sZGVycyIsInJlc2l6ZVNsaWRlcyIsIl90aGlzNyIsIm5ld1NsaWRlV2lkdGgiLCJzcGFjaW5nIiwic2xpZGVXaWR0aENoYW5nZWQiLCJpdGVtSG9sZGVyIiwicmVzZXRQb3NpdGlvbiIsImFwcGVuZEhvbGRlcnMiLCJpIiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImNhbkJlU3dpcGVkIiwiZ2V0TnVtSXRlbXMiLCJhbmltYXRlIiwidmVsb2NpdHlYIiwiX3RoaXM4IiwibmV3SW5kZXgiLCJwb3RlbnRpYWxJbmRleCIsIm51bVNsaWRlcyIsImNhbkxvb3AiLCJnZXRMb29wZWRJbmRleCIsImRpc3RhbmNlIiwic3RvcE1haW5TY3JvbGwiLCJkZXN0aW5hdGlvblgiLCJ1cGRhdGVDdXJySXRlbSIsImlzTWFpblNjcm9sbCIsImN1cnJEaWZmIiwiY3VyckRpc3RhbmNlIiwiX3RoaXMkaXRlbUhvbGRlcnMkIiwicG9zaXRpb25EaWZmZXJlbmNlIiwiZGlmZkFicyIsInRlbXBIb2xkZXIiLCJfaXRlbUhvbGRlciRzbGlkZSIsInNoaWZ0Iiwic2V0Q29udGVudCIsInBvcCIsInVuc2hpZnQiLCJ1cGRhdGVMYXp5IiwiZHJhZ2dpbmciLCJuZXdTbGlkZUluZGV4T2Zmc2V0IiwiS2V5Ym9hcmRLZXlDb2Rlc01hcCIsIkVzY2FwZSIsInoiLCJBcnJvd0xlZnQiLCJBcnJvd1VwIiwiQXJyb3dSaWdodCIsIkFycm93RG93biIsIlRhYiIsImdldEtleWJvYXJkRXZlbnRLZXkiLCJpc0tleVN1cHBvcnRlZCIsIktleWJvYXJkIiwiX3RoaXM5IiwiX3dhc0ZvY3VzZWQiLCJ0cmFwRm9jdXMiLCJpbml0aWFsUG9pbnRlclBvcyIsIl9mb2N1c1Jvb3QiLCJfb25Gb2N1c0luIiwiX29uS2V5RG93biIsImxhc3RBY3RpdmVFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInJldHVybkZvY3VzIiwiZm9jdXMiLCJrZXlkb3duQWN0aW9uIiwiaXNGb3J3YXJkIiwia2V5Q29kZSIsImVzY0tleSIsImFycm93S2V5cyIsInRlbXBsYXRlIiwiREVGQVVMVF9FQVNJTkciLCJDU1NBbmltYXRpb24iLCJwcm9wcyIsIl90aGlzMCIsIl9wcm9wcyRwcm9wIiwiX3Byb3BzJG9uRmluaXNoIiwib25GaW5pc2giLCJfcHJvcHMkZHVyYXRpb24iLCJfcHJvcHMkZWFzaW5nIiwiX3RhcmdldCIsIl9vbkNvbXBsZXRlIiwiX2ZpbmlzaGVkIiwiX29uVHJhbnNpdGlvbkVuZCIsIl9oZWxwZXJUaW1lb3V0IiwiX2ZpbmFsaXplQW5pbWF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkRFRkFVTFRfTkFUVVJBTF9GUkVRVUVOQ1kiLCJERUZBVUxUX0RBTVBJTkdfUkFUSU8iLCJTcHJpbmdFYXNlciIsIl9kYW1waW5nUmF0aW8iLCJfbmF0dXJhbEZyZXF1ZW5jeSIsIl9kYW1wZWRGcmVxdWVuY3kiLCJlYXNlRnJhbWUiLCJkZWx0YVBvc2l0aW9uIiwiZGVsdGFUaW1lIiwiY29lZmYiLCJuYXR1cmFsRHVtcGluZ1BvdyIsInBvdyIsIkUiLCJkdW1wZWRGQ29zIiwiY29zIiwiZHVtcGVkRlNpbiIsInNpbiIsIlNwcmluZ0FuaW1hdGlvbiIsIl90aGlzMSIsIl9yYWYiLCJfcHJvcHMkb25GaW5pc2gyIiwiZWFzZXIiLCJwcmV2VGltZSIsImFuaW1hdGlvbkxvb3AiLCJBbmltYXRpb25zIiwiYWN0aXZlQW5pbWF0aW9ucyIsIl9zdGFydCIsImlzU3ByaW5nIiwiX3RoaXMxMCIsImFuaW1hdGlvbiIsInN0b3AiLCJpc1BhblJ1bm5pbmciLCJzb21lIiwiU2Nyb2xsV2hlZWwiLCJfb25XaGVlbCIsImRlbHRhWCIsImRlbHRhWSIsIndoZWVsVG9ab29tIiwiZGVsdGFNb2RlIiwiY2xpZW50WCIsImNsaWVudFkiLCJhZGRFbGVtZW50SFRNTCIsImh0bWxEYXRhIiwiaXNDdXN0b21TVkciLCJzdmdEYXRhIiwib3V0Iiwiam9pbiIsInNpemUiLCJvdXRsaW5lSUQiLCJpbm5lciIsIlVJRWxlbWVudCIsIl9jb250YWluZXIiLCJlbGVtZW50SFRNTCIsImh0bWwiLCJpc0J1dHRvbiIsInRvTG93ZXJDYXNlIiwidGl0bGUiLCJhcmlhTGFiZWwiLCJhcmlhVGV4dCIsImlubmVySFRNTCIsIm9uSW5pdCIsIm9uQ2xpY2siLCJvbmNsaWNrIiwiYXBwZW5kVG8iLCJ0b3BCYXIiLCJpbml0QXJyb3dCdXR0b24iLCJpc05leHRCdXR0b24iLCJsb29wIiwiZGlzYWJsZWQiLCJhcnJvd1ByZXYiLCJvcmRlciIsImFycm93TmV4dCIsImNsb3NlQnV0dG9uIiwiem9vbUJ1dHRvbiIsImxvYWRpbmdJbmRpY2F0b3IiLCJpbmRpY2F0b3JFbGVtZW50IiwiaXNWaXNpYmxlIiwiZGVsYXlUaW1lb3V0IiwidG9nZ2xlSW5kaWNhdG9yQ2xhc3MiLCJzZXRJbmRpY2F0b3JWaXNpYmlsaXR5IiwidmlzaWJsZSIsInVwZGF0ZVByZWxvYWRlclZpc2liaWxpdHkiLCJfcHN3cCRjdXJyU2xpZGUiLCJpc0xvYWRpbmciLCJfcHN3cCRjdXJyU2xpZGUyIiwicHJlbG9hZGVyRGVsYXkiLCJ1aSIsImNvdW50ZXJJbmRpY2F0b3IiLCJjb3VudGVyRWxlbWVudCIsImlubmVyVGV4dCIsImluZGV4SW5kaWNhdG9yU2VwIiwic2V0Wm9vbWVkSW4iLCJpc1pvb21lZEluIiwiVUkiLCJpc1JlZ2lzdGVyZWQiLCJ1aUVsZW1lbnRzRGF0YSIsIml0ZW1zIiwiX2xhc3RVcGRhdGVkWm9vbUxldmVsIiwiaW5pdCIsIl90aGlzMTEiLCJzb3J0IiwiYSIsImIiLCJ1aUVsZW1lbnREYXRhIiwicmVnaXN0ZXJFbGVtZW50IiwiX3Bzd3AkZWxlbWVudCIsIl9vblpvb21QYW5VcGRhdGUiLCJlbGVtZW50RGF0YSIsIl90aGlzJHBzd3A2IiwiaXNDbG9zaW5nIiwiY3Vyclpvb21MZXZlbERpZmYiLCJwb3RlbnRpYWxab29tTGV2ZWwiLCJpbWFnZUNsaWNrQWN0aW9uIiwiZ2V0Qm91bmRzQnlFbGVtZW50IiwidGh1bWJBcmVhUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJnZXRDcm9wcGVkQm91bmRzQnlFbGVtZW50IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiZmlsbFpvb21MZXZlbCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaW5uZXJSZWN0IiwiZ2V0VGh1bWJCb3VuZHMiLCJpbnN0YW5jZSIsInRodW1iQm91bmRzIiwidGh1bWJuYWlsIiwidGh1bWJTZWxlY3RvciIsIm1hdGNoZXMiLCJxdWVyeVNlbGVjdG9yIiwidGh1bWJDcm9wcGVkIiwiUGhvdG9Td2lwZUV2ZW50IiwiZGV0YWlscyIsImFzc2lnbiIsIkV2ZW50YWJsZSIsIl9saXN0ZW5lcnMiLCJfZmlsdGVycyIsImFkZEZpbHRlciIsImZuIiwicHJpb3JpdHkiLCJfdGhpcyRfZmlsdGVycyRuYW1lIiwiX3RoaXMkX2ZpbHRlcnMkbmFtZTIiLCJfdGhpcyRwc3dwIiwiZjEiLCJmMiIsInJlbW92ZUZpbHRlciIsIl90aGlzMTIiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJfdGhpcyRfZmlsdGVycyRuYW1lMyIsImFwcGx5IiwiX3RoaXMkX2xpc3RlbmVycyRuYW1lIiwiX3RoaXMkcHN3cDIiLCJvZmYiLCJfdGhpcyRwc3dwMyIsIl90aGlzMTMiLCJfdGhpcyRfbGlzdGVuZXJzJG5hbWUyIiwiUGxhY2Vob2xkZXIiLCJpbWFnZVNyYyIsImltZ0VsIiwiZGVjb2RpbmciLCJhbHQiLCJzcmMiLCJfdGhpcyRlbGVtZW50IiwicGFyZW50Tm9kZSIsIkNvbnRlbnQiLCJkaXNwbGF5ZWRJbWFnZVdpZHRoIiwiZGlzcGxheWVkSW1hZ2VIZWlnaHQiLCJpc0F0dGFjaGVkIiwiaXNEZWNvZGluZyIsInN0YXRlIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJfdGhpczE0Iiwia2VlcFBsYWNlaG9sZGVyIiwiaXNMYXp5IiwicmVsb2FkIiwidXNlUGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclNyYyIsIm1zcmMiLCJwbGFjZWhvbGRlckVsIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJpc0ltYWdlQ29udGVudCIsImxvYWRJbWFnZSIsIl90aGlzMTUiLCJfdGhpcyRkYXRhJHNyYyIsIl90aGlzJGRhdGEkYWx0IiwiaW1hZ2VFbGVtZW50IiwidXBkYXRlU3Jjc2V0U2l6ZXMiLCJzcmNzZXQiLCJvbkxvYWRlZCIsIm9uRXJyb3IiLCJzZXRTbGlkZSIsImRpc3BsYXlFcnJvciIsImlzRXJyb3IiLCJpc0luaXRpYWxTaXplVXBkYXRlIiwiaW1hZ2UiLCJzaXplc1dpZHRoIiwiZGF0YXNldCIsImxhcmdlc3RVc2VkU2l6ZSIsInBhcnNlSW50Iiwic2l6ZXMiLCJTdHJpbmciLCJsYXp5TG9hZCIsIl90aGlzJGluc3RhbmNlJG9wdGlvbiIsIl90aGlzJGluc3RhbmNlJG9wdGlvbjIiLCJlcnJvck1zZ0VsIiwiZXJyb3JNc2ciLCJfdGhpczE2Iiwic3VwcG9ydHNEZWNvZGUiLCJhcHBlbmRJbWFnZSIsIk1JTl9TTElERVNfVE9fQ0FDSEUiLCJsYXp5TG9hZERhdGEiLCJjcmVhdGVDb250ZW50RnJvbURhdGEiLCJ6b29tTGV2ZWwiLCJjZWlsIiwibGF6eUxvYWRTbGlkZSIsImdldEl0ZW1EYXRhIiwiQ29udGVudExvYWRlciIsImxpbWl0IiwicHJlbG9hZCIsIl9jYWNoZWRJdGVtcyIsImxvYWRTbGlkZUJ5SW5kZXgiLCJpbml0aWFsSW5kZXgiLCJnZXRDb250ZW50QnlJbmRleCIsImFkZFRvQ2FjaGUiLCJyZW1vdmVCeUluZGV4IiwiaW5kZXhUb1JlbW92ZSIsIml0ZW0iLCJyZW1vdmVkSXRlbSIsImZpbmQiLCJQaG90b1N3aXBlQmFzZSIsIl9FdmVudGFibGUiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiX3RoaXMkb3B0aW9ucyIsIm51bUl0ZW1zIiwiZGF0YVNvdXJjZSIsIl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMiLCJnYWxsZXJ5IiwiX3RoaXMkb3B0aW9uczIiLCJkYXRhU291cmNlSXRlbSIsIl9kb21FbGVtZW50VG9JdGVtRGF0YSIsImdhbGxlcnlFbGVtZW50IiwiX3RoaXMkb3B0aW9uczMiLCJfdGhpcyRvcHRpb25zNCIsImNoaWxkcmVuIiwiY2hpbGRTZWxlY3RvciIsImxpbmtFbCIsInBzd3BTcmMiLCJocmVmIiwicHN3cFNyY3NldCIsInBzd3BXaWR0aCIsInBzd3BIZWlnaHQiLCJwc3dwVHlwZSIsInRodW1ibmFpbEVsIiwiX3RodW1ibmFpbEVsJGdldEF0dHJpIiwiY3VycmVudFNyYyIsImdldEF0dHJpYnV0ZSIsInBzd3BDcm9wcGVkIiwiY3JvcHBlZCIsIk1JTl9PUEFDSVRZIiwiT3BlbmVyIiwiaXNDbG9zZWQiLCJpc09wZW5pbmciLCJfZHVyYXRpb24iLCJfdXNlQW5pbWF0aW9uIiwiX2Nyb3BwZWRab29tIiwiX2FuaW1hdGVSb290T3BhY2l0eSIsIl9hbmltYXRlQmdPcGFjaXR5IiwiX3BsYWNlaG9sZGVyIiwiX29wYWNpdHlFbGVtZW50IiwiX2Nyb3BDb250YWluZXIxIiwiX2Nyb3BDb250YWluZXIyIiwiX3RodW1iQm91bmRzIiwiX3ByZXBhcmVPcGVuIiwib3BlbiIsIl90aGlzMTciLCJoaWRlQW5pbWF0aW9uRHVyYXRpb24iLCJtYXhXaWR0aFRvQW5pbWF0ZSIsIl9hcHBseVN0YXJ0UHJvcHMiLCJzaG93QW5pbWF0aW9uRHVyYXRpb24iLCJzaG93SGlkZUFuaW1hdGlvblR5cGUiLCJzaG93SGlkZU9wYWNpdHkiLCJfaW5pdGlhbFRodW1iQm91bmRzIiwiX2FuaW1hdGVab29tIiwiX29wdGlvbnMkc2hvd0hpZGVPcGFjIiwiYmciLCJvcGFjaXR5Iiwib3ZlcmZsb3ciLCJfc2V0Q2xvc2VkU3RhdGVab29tUGFuIiwid2lsbENoYW5nZSIsIl90aGlzMTgiLCJkZWNvZGVkIiwiaXNEZWxheWluZyIsIl9pbml0aWF0ZSIsIl90aGlzJHBzd3AkZWxlbWVudCIsIl90aGlzJHBzd3AkZWxlbWVudDIiLCJzZXRQcm9wZXJ0eSIsIl9hbmltYXRlVG9PcGVuU3RhdGUiLCJfYW5pbWF0ZVRvQ2xvc2VkU3RhdGUiLCJfb25BbmltYXRpb25Db21wbGV0ZSIsIl9hbmltYXRlVG8iLCJjb250YWluZXJPbmVQYW5YIiwiY29udGFpbmVyT25lUGFuWSIsImNvbnRhaW5lclR3b1BhblgiLCJjb250YWluZXJUd29QYW5ZIiwiX3RoaXMxOSIsImFuaW1Qcm9wcyIsImRlZmF1bHRPcHRpb25zIiwiYmdDbGlja0FjdGlvbiIsInRhcEFjdGlvbiIsIlBob3RvU3dpcGUiLCJfUGhvdG9Td2lwZUJhc2UiLCJfdGhpczIwIiwiX3ByZXBhcmVPcHRpb25zIiwiX3ByZXZWaWV3cG9ydFNpemUiLCJpc0Rlc3Ryb3lpbmciLCJoYXNNb3VzZSIsIl9pbml0aWFsSXRlbURhdGEiLCJrZXlib2FyZCIsIl90aGlzMjEiLCJfY3JlYXRlTWFpblN0cnVjdHVyZSIsInJvb3RDbGFzc2VzIiwibWFpbkNsYXNzIiwic2Nyb2xsV2hlZWwiLCJpc05hTiIsInVwZGF0ZVNpemUiLCJwYWdlWU9mZnNldCIsIl9oYW5kbGVQYWdlUmVzaXplIiwiX3VwZGF0ZVBhZ2VTY3JvbGxPZmZzZXQiLCJnb1RvIiwibmV4dCIsInByZXYiLCJfdGhpcyRjdXJyU2xpZGU0IiwiX3RoaXMkY3VyclNsaWRlIiwiX3RoaXMkY3VyclNsaWRlMiIsIl9pdGVtSG9sZGVyJHNsaWRlMiIsInJlZnJlc2hTbGlkZUNvbnRlbnQiLCJzbGlkZUluZGV4IiwiX3RoaXMyMiIsIl90aGlzJGN1cnJTbGlkZSRpbmRleCIsIl90aGlzJGN1cnJTbGlkZTMiLCJwb3RlbnRpYWxIb2xkZXJJbmRleCIsIl9pdGVtSG9sZGVyJHNsaWRlMyIsImhvbGRlciIsIm1hdGNoTWVkaWEiLCJfdGhpcyRlbGVtZW50MiIsIl90aGlzMjMiLCJ0ZXN0IiwidXNlckFnZW50Iiwic2V0U2Nyb2xsT2Zmc2V0IiwiYm9keSIsIl9vYmplY3RTcHJlYWQiXSwic291cmNlUm9vdCI6IiJ9