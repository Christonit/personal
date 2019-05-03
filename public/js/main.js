/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/anime.es.js":
/*!**********************************!*\
  !*** ./resources/js/anime.es.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * anime.js v3.0.1
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/


function elastic(amplitude, period) {
  if (amplitude === void 0) amplitude = 1;
  if (period === void 0) period = .5;
  var a = minMax(amplitude, 1, 10);
  var p = minMax(period, .1, 2);
  return function (t) {
    return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
  };
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.round(t * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic']; // Approximated Penner equations http://matthewlein.com/ceaser/

  var curves = {
    In: [[0.550, 0.085, 0.680, 0.530],
    /* inQuad */
    [0.550, 0.055, 0.675, 0.190],
    /* inCubic */
    [0.895, 0.030, 0.685, 0.220],
    /* inQuart */
    [0.755, 0.050, 0.855, 0.060],
    /* inQuint */
    [0.470, 0.000, 0.745, 0.715],
    /* inSine */
    [0.950, 0.050, 0.795, 0.035],
    /* inExpo */
    [0.600, 0.040, 0.980, 0.335],
    /* inCirc */
    [0.600, -0.280, 0.735, 0.045],
    /* inBack */
    elastic
    /* inElastic */
    ],
    Out: [[0.250, 0.460, 0.450, 0.940],
    /* outQuad */
    [0.215, 0.610, 0.355, 1.000],
    /* outCubic */
    [0.165, 0.840, 0.440, 1.000],
    /* outQuart */
    [0.230, 1.000, 0.320, 1.000],
    /* outQuint */
    [0.390, 0.575, 0.565, 1.000],
    /* outSine */
    [0.190, 1.000, 0.220, 1.000],
    /* outExpo */
    [0.075, 0.820, 0.165, 1.000],
    /* outCirc */
    [0.175, 0.885, 0.320, 1.275],
    /* outBack */
    function (a, p) {
      return function (t) {
        return 1 - elastic(a, p)(1 - t);
      };
    }
    /* outElastic */
    ],
    InOut: [[0.455, 0.030, 0.515, 0.955],
    /* inOutQuad */
    [0.645, 0.045, 0.355, 1.000],
    /* inOutCubic */
    [0.770, 0.000, 0.175, 1.000],
    /* inOutQuart */
    [0.860, 0.000, 0.070, 1.000],
    /* inOutQuint */
    [0.445, 0.050, 0.550, 0.950],
    /* inOutSine */
    [1.000, 0.000, 0.000, 1.000],
    /* inOutExpo */
    [0.785, 0.135, 0.150, 0.860],
    /* inOutCirc */
    [0.680, -0.550, 0.265, 1.550],
    /* inOutBack */
    function (a, p) {
      return function (t) {
        return t < .5 ? elastic(a, p)(t * 2) / 2 : 1 - elastic(a, p)(t * -2 + 2) / 2;
      };
    }
    /* inOutElastic */
    ]
  };
  var eases = {
    linear: [0.250, 0.250, 0.750, 0.750]
  };

  var loop = function loop(coords) {
    curves[coords].forEach(function (ease, i) {
      eases['ease' + coords + names[i]] = ease;
    });
  };

  for (var coords in curves) {
    loop(coords);
  }

  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return is.fnc(ease) ? applyArguments(ease, args) : applyArguments(bezier, ease);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[2];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  return unit && !/\s/g.test(val) ? unitLess + unit : unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    parentEl = parentEl.parentNode;

    if (!is.svg(parentEl.parentNode)) {
      break;
    }
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * svg.w;

    case 'y':
      return (p.y - svg.y) * svg.h;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  var rgx = /-?\d*\.?\d+/g;
  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = function () {
  function play() {
    raf = requestAnimationFrame(step);
  }

  function step(t) {
    var activeInstancesLength = activeInstances.length;

    if (activeInstancesLength) {
      var i = 0;

      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];

        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);

          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }

        i++;
      }

      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }

  return play;
}();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) {
      return ins.pause();
    });
    pausedInstances = activeInstances.slice(0);
    activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) {
      return ins.play();
    });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekCild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekCild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekCild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (instance.remaining) {
        startTime = now;
        setCallback('loopComplete');
        setCallback('loopBegin');

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      } else {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(0);
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();

    if (!raf) {
      engine();
    }
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);

    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);

      if (!childAnimations.length && !child.children.length) {
        children.splice(c, 1);
      }
    }

    if (!animations.length && !children.length) {
      instance.pause();
    }
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.0.1';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* harmony default export */ __webpack_exports__["default"] = (anime);

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime.es.js */ "./resources/js/anime.es.js");
/* harmony import */ var _progressbar_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.min.js */ "./resources/js/progressbar.min.js");
/* harmony import */ var _progressbar_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_progressbar_min_js__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;



'use strict';

var windowSize = screen.width;
var xs = 512;
var sm = 768;
var md = 896;
var lg = 1152;
var xl = 1280;
var xxxl = 1441;
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    var isActive = $('.navbar-burger').hasClass('is-active');
    var el = document.querySelector('.navbar-menu');
    $(".navbar-burger").toggleClass("is-active");

    if (isActive == false) {
      $(".navbar-menu").toggleClass("is-active");
      Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: el,
        duration: 400,
        translateY: 0,
        opacity: 1
      });
    } else {
      Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: el,
        duration: 400,
        translateY: 800,
        opacity: 0.3
      });
      setTimeout(function () {
        $(".navbar-menu").toggleClass("is-active");
      }, 700);
    }
  });
});
var slideProgressBar = document.querySelector('#slide-progress-bar');
var slideContainer = document.querySelector('[data-glide-el="track"]');
var slideList = document.querySelectorAll('.glide__slides li');
var arrows = document.querySelector('[data-glide-el="controls"]');
var next = document.querySelector('[data-glide-dir=">"]');
var previews = document.querySelector('[data-glide-dir="<"]');
var currentEl = document.querySelector("[data-slide-count='current']");
currentEl.innerHTML = 1;
var slideCounterTotal = document.querySelector("[data-slide-count='total']");
slideCounterTotal.innerHTML = slideList.length;
var slideCounter = document.querySelector("#slide-counter");
var activeSlide = $('.glide__slide--active');
next.addEventListener('click', function () {
  console.log($('.glide__slide--active').index() + ' = Pre interval');
  new Promise(function (resolve, reject) {
    var z = setInterval(function () {
      if ($('.glide__slide--active').index() > 0) {
        clearInterval(z);
        resolve();
      }
    }, 100);
  }).then(function (result) {
    console.log($('.glide__slide--active').index() + ' = Post interval');
    return previews.classList.remove('is-disabled');
  });
  new Promise(function (resolve, reject) {
    var z = setInterval(function () {
      if ($('.glide__slide--active').index() == slideList.length - 1) {
        clearInterval(z);
        resolve();
      }
    }, 100);
  }).then(function (result) {
    console.log(slideList.length - 1);
    return next.classList.add('is-disabled');
  });

  if ($('.glide__slide--active').index() == slideList.length - 1) {
    var z = setInterval(function () {
      if ($('.glide__slide--active').index() == 0) {
        next.classList.remove('is-disabled');
        previews.classList.add('is-disabled');
        console.log($('.glide__slide--active').index() + ' = End.');
        clearInterval(z);
      }

      ;
    }, 200);
  }
});
previews.addEventListener('click', function () {
  new Promise(function (resolve, reject) {
    var z = setInterval(function () {
      if ($('.glide__slide--active').index() == slideList.length - 1) {
        clearInterval(z);
        resolve();
      }
    }, 100);
  }).then(function (result) {
    previews.classList.remove('is-disabled');
    return next.classList.add('is-disabled');
  });
  new Promise(function (resolve, reject) {
    var z = setInterval(function () {
      if ($('.glide__slide--active').index() == 0) {
        clearInterval(z);
        resolve();
      }
    }, 100);
  }).then(function (result) {
    return previews.classList.add('is-disabled');
  });
  var z = setInterval(function () {
    if ($('.glide__slide--active').index() < slideList.length - 1) {
      next.classList.remove('is-disabled');
      clearInterval(z);
    }
  }, 200);
});
var glide = new Glide('.glide', {
  type: 'slider',
  focusAt: 'center',
  gap: 200,
  width: 300,
  perView: 2.2,
  breakpoints: {
    1441: {
      width: 560,
      gap: 100
    },
    1024: {
      perView: 2
    },
    600: {
      width: 300,
      perView: 1,
      gap: 50
    }
  }
});
glide.on('run', function (e) {
  /*
    if(glide.index == 1){
      previews.classList.add('is-disabled');
      console.log(slideList.length);
    }
  
    if (glide.index == slideList.length) {
      next.classList.add('is-disabled');
    }
  
    if ( glide.index < slideList.length  ){
  
      next.classList.remove('is-disabled');
  
    }
  
    if ( glide.index == 2 ) {
      console.log(glide.index);
      previews.classList.remove('is-disabled');
  
    }
  
  */
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: currentEl,
    duration: 250,
    translateX: 30,
    easing: 'linear',
    opacity: 0
  });
  setTimeout(function () {
    currentEl.innerHTML = glide.index + 1;
    currentEl.style.transform = "translateX(-30px)";
    Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: currentEl,
      duration: 250,
      translateX: 0,
      easing: 'linear',
      opacity: 1
    });
  }, 250);
  var slideWidth = 0;

  if (glide.index < slideList.length) {
    slideWidth += glide.index / slideList.length * 100;
  } else {
    slideWidth = 0;
  }

  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: slideProgressBar,
    duration: 500,
    left: slideWidth + '%',
    easing: 'easeInOutCirc'
  });
});
/*
glide.on('update', (e) =>{

  if(glide.index == 1){
    previews.classList.add('is-disabled');
    console.log(slideList.length);
  }

  if (glide.index == slideList.length) {
    next.classList.add('is-disabled');
  }

  if ( glide.index < slideList.length  ){

    next.classList.remove('is-disabled');

  }

  if ( glide.index == 2 ) {
    console.log(glide.index);
    previews.classList.remove('is-disabled');

  }


});
*/

glide.mount();

var hideShowArrows = function hideShowArrows(x) {
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: arrows,
    duration: 200,
    easing: 'linear',
    opacity: x
  });
};

var hideShowClose = function hideShowClose(x) {
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: closeBtn,
    duration: 200,
    opacity: x,
    easing: 'linear'
  });
};

var portfolioEl = $(".glide__slide");
var closeBtn = document.querySelector('span[data-action="close"]');
var portfolioPrevLing = $('portfolio-el-img a');

if (windowSize <= sm) {
  $(slideCounter).insertBefore(slideContainer);
  portfolioEl.on('touchstart', function (e) {
    hideShowClose(1);
    hideShowArrows(0);
    setTimeout(function () {
      arrows.style.display = 'none';
    }, 200);
    e.preventDefault;
  });
  portfolioEl.on('touchcancel', function (e) {
    hideShowClose(1);
    hideShowArrows(0);
    setTimeout(function () {
      arrows.style.display = 'none';
    }, 200);
    portfolioPrevLing.preventDefault;
  });
  closeBtn.addEventListener('click', function () {
    hideShowClose(0);
    arrows.style.display = 'inherit';
    hideShowArrows(1);
  });
}

slideProgressBar.style.width = 100 / slideList.length + '%';
var topAnchor = window.document.scrollingElement || window.document.body || window.document.documentElement;
var cursorShadow = document.querySelector('#cursor--shadow');
var cursor = document.querySelector('#cursor');
var red = '#F32424';
var scrollTop = $('#scrollToTop');
$(document).bind('mousemove', function (e) {
  $('#cursor').css({
    left: e.pageX,
    top: e.pageY + 8
  });
  setTimeout(function () {
    $('#cursor--shadow').css({
      left: e.pageX - 12,
      top: e.pageY + 2
    });
  }, 10);
});

var cursorAnimations = function cursorAnimations() {
  var cursorAnimation = _anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
  var cursorHalo = document.querySelector('.cursor--halo');
  cursorAnimation.add({
    targets: cursorHalo,
    opacity: 1,
    borderColor: 'rgba(255,255,255,1)',
    height: 56,
    width: 56,
    duration: 400,
    easing: 'linear'
  }).add({
    targets: cursorHalo,
    opacity: 0,
    borderColor: 'rgba(255,255,255,0)',
    duration: 300,
    easing: 'linear'
  }).add({
    targets: cursorHalo,
    height: 0,
    width: 0,
    duration: 100
  });
}; //Currently have issue of event bubbling and multiple firings.
// One posible solution is generate a new canvas on click on te same event.page position, chain it with a promise and then delete it when animation finished.


$(document).click(function (e) {
  $('.cursor--halo').css({
    'width': 0,
    'height': 0,
    'left': e.pageX - 24,
    'top': e.pageY - 4
  });
  cursorAnimations();
});
$('a, .navbar-item, .portfolio-el-img, .button, button,  #scrollToTop').on('mouseover', function (e) {
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: cursorShadow,
    height: 56,
    opacity: 1,
    width: 56,
    duration: 1000
  });
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: cursor,
    opacity: 0,
    duration: 1000
  });
});
$('a, .navbar-item, .portfolio-el-img, .button, button, #scrollToTop').on('mouseleave', function (e) {
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: cursorShadow,
    height: 0,
    width: 0,
    opacity: 0,
    duration: 1000
  });
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: cursor,
    opacity: 1,
    duration: 1000
  });
});
var bar = new _progressbar_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.Circle(scrollToTop, {
  strokeWidth: 1,
  easing: 'easeIn',
  duration: 200,
  color: 'rgba(255,255,255,1)',
  trailColor: 'rgba(255,255,255,0.24)',
  trailWidth: 1,
  svgStyle: null
});
scrollTop.on('click', function () {
  Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    targets: topAnchor,
    scrollTop: 0,
    duration: 800,
    easing: 'easeInOutQuad'
  });
});
$(document).on('scroll', function () {
  var scrollPosition = window.pageYOffset / document.body.clientHeight;
  var scrollCount = parseFloat(scrollPosition.toFixed(2)) + 0.25;
  var x;
  windowSize > sm ? x = '144px' : x = '64px'; // console.log(scrollCount + 0.25);

  if (scrollPosition * 100 > 10) {
    $(_this).one('scroll', function () {
      Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: document.querySelector('#scrollToTop'),
        bottom: x,
        delay: 300,
        opacity: 1,
        duration: 700,
        easing: 'easeInOutQuad'
      });
    });
  } else {
    $(_this).one('scroll', function () {
      Object(_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: document.querySelector('#scrollToTop'),
        bottom: '-' + x,
        delay: 300,
        opacity: 0,
        duration: 700,
        easing: 'easeInOutQuad'
      });
    });
  }

  bar.animate(scrollCount <= 1 ? scrollCount : scrollCount = 1);
}); // bar.set(30);

/***/ }),

/***/ "./resources/js/progressbar.min.js":
/*!*****************************************!*\
  !*** ./resources/js/progressbar.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (a) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = a();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var b; }
}(function () {
  var a;
  return function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return require(g, !0);
          if (f) return f(g, !0);
          var j = new Error("Cannot find module '" + g + "'");
          throw j.code = "MODULE_NOT_FOUND", j;
        }

        var k = c[g] = {
          exports: {}
        };
        b[g][0].call(k.exports, function (a) {
          var c = b[g][1][a];
          return e(c ? c : a);
        }, k, k.exports, a, b, c, d);
      }

      return c[g].exports;
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
      e(d[g]);
    }

    return e;
  }({
    1: [function (b, c, d) {
      (function () {
        var b = this || Function("return this")(),
            e = function () {
          "use strict";

          function e() {}

          function f(a, b) {
            var c;

            for (c in a) {
              Object.hasOwnProperty.call(a, c) && b(c);
            }
          }

          function g(a, b) {
            return f(b, function (c) {
              a[c] = b[c];
            }), a;
          }

          function h(a, b) {
            f(b, function (c) {
              "undefined" == typeof a[c] && (a[c] = b[c]);
            });
          }

          function i(a, b, c, d, e, f, g) {
            var h,
                i,
                k,
                l = a < f ? 0 : (a - f) / e;

            for (h in b) {
              b.hasOwnProperty(h) && (i = g[h], k = "function" == typeof i ? i : o[i], b[h] = j(c[h], d[h], k, l));
            }

            return b;
          }

          function j(a, b, c, d) {
            return a + (b - a) * c(d);
          }

          function k(a, b) {
            var c = n.prototype.filter,
                d = a._filterArgs;
            f(c, function (e) {
              "undefined" != typeof c[e][b] && c[e][b].apply(a, d);
            });
          }

          function l(a, b, c, d, e, f, g, h, j, l, m) {
            v = b + c + d, w = Math.min(m || u(), v), x = w >= v, y = d - (v - w), a.isPlaying() && (x ? (j(g, a._attachment, y), a.stop(!0)) : (a._scheduleId = l(a._timeoutHandler, s), k(a, "beforeTween"), w < b + c ? i(1, e, f, g, 1, 1, h) : i(w, e, f, g, d, b + c, h), k(a, "afterTween"), j(e, a._attachment, y)));
          }

          function m(a, b) {
            var c = {},
                d = _typeof(b);

            return "string" === d || "function" === d ? f(a, function (a) {
              c[a] = b;
            }) : f(a, function (a) {
              c[a] || (c[a] = b[a] || q);
            }), c;
          }

          function n(a, b) {
            this._currentState = a || {}, this._configured = !1, this._scheduleFunction = p, "undefined" != typeof b && this.setConfig(b);
          }

          var o,
              p,
              q = "linear",
              r = 500,
              s = 1e3 / 60,
              t = Date.now ? Date.now : function () {
            return +new Date();
          },
              u = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;
          p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
          var v, w, x, y;
          return n.prototype.tween = function (a) {
            return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = u(), this._start(this.get(), this._attachment), this.resume());
          }, n.prototype.setConfig = function (a) {
            a = a || {}, this._configured = !0, this._attachment = a.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = a.delay || 0, this._start = a.start || e, this._step = a.step || e, this._finish = a.finish || e, this._duration = a.duration || r, this._currentState = g({}, a.from || this.get()), this._originalState = this.get(), this._targetState = g({}, a.to || this.get());
            var b = this;

            this._timeoutHandler = function () {
              l(b, b._timestamp, b._delay, b._duration, b._currentState, b._originalState, b._targetState, b._easing, b._step, b._scheduleFunction);
            };

            var c = this._currentState,
                d = this._targetState;
            return h(d, c), this._easing = m(c, a.easing || q), this._filterArgs = [c, this._originalState, d, this._easing], k(this, "tweenCreated"), this;
          }, n.prototype.get = function () {
            return g({}, this._currentState);
          }, n.prototype.set = function (a) {
            this._currentState = a;
          }, n.prototype.pause = function () {
            return this._pausedAtTime = u(), this._isPaused = !0, this;
          }, n.prototype.resume = function () {
            return this._isPaused && (this._timestamp += u() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this;
          }, n.prototype.seek = function (a) {
            a = Math.max(a, 0);
            var b = u();
            return this._timestamp + a === 0 ? this : (this._timestamp = b - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b), this.pause()), this);
          }, n.prototype.stop = function (a) {
            return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = e, (b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.mozCancelRequestAnimationFrame || b.clearTimeout)(this._scheduleId), a && (k(this, "beforeTween"), i(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), k(this, "afterTween"), k(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this;
          }, n.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          }, n.prototype.setScheduleFunction = function (a) {
            this._scheduleFunction = a;
          }, n.prototype.dispose = function () {
            var a;

            for (a in this) {
              this.hasOwnProperty(a) && delete this[a];
            }
          }, n.prototype.filter = {}, n.prototype.formula = {
            linear: function linear(a) {
              return a;
            }
          }, o = n.prototype.formula, g(n, {
            now: u,
            each: f,
            tweenProps: i,
            tweenProp: j,
            applyFilter: k,
            shallowCopy: g,
            defaults: h,
            composeEasingObject: m
          }), "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l), "object" == _typeof(d) ? c.exports = n : "function" == typeof a && a.amd ? a(function () {
            return n;
          }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n), n;
        }();

        !function () {
          e.shallowCopy(e.prototype.formula, {
            easeInQuad: function easeInQuad(a) {
              return Math.pow(a, 2);
            },
            easeOutQuad: function easeOutQuad(a) {
              return -(Math.pow(a - 1, 2) - 1);
            },
            easeInOutQuad: function easeInOutQuad(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2);
            },
            easeInCubic: function easeInCubic(a) {
              return Math.pow(a, 3);
            },
            easeOutCubic: function easeOutCubic(a) {
              return Math.pow(a - 1, 3) + 1;
            },
            easeInOutCubic: function easeInOutCubic(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2);
            },
            easeInQuart: function easeInQuart(a) {
              return Math.pow(a, 4);
            },
            easeOutQuart: function easeOutQuart(a) {
              return -(Math.pow(a - 1, 4) - 1);
            },
            easeInOutQuart: function easeInOutQuart(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2);
            },
            easeInQuint: function easeInQuint(a) {
              return Math.pow(a, 5);
            },
            easeOutQuint: function easeOutQuint(a) {
              return Math.pow(a - 1, 5) + 1;
            },
            easeInOutQuint: function easeInOutQuint(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2);
            },
            easeInSine: function easeInSine(a) {
              return -Math.cos(a * (Math.PI / 2)) + 1;
            },
            easeOutSine: function easeOutSine(a) {
              return Math.sin(a * (Math.PI / 2));
            },
            easeInOutSine: function easeInOutSine(a) {
              return -.5 * (Math.cos(Math.PI * a) - 1);
            },
            easeInExpo: function easeInExpo(a) {
              return 0 === a ? 0 : Math.pow(2, 10 * (a - 1));
            },
            easeOutExpo: function easeOutExpo(a) {
              return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1;
            },
            easeInOutExpo: function easeInOutExpo(a) {
              return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2);
            },
            easeInCirc: function easeInCirc(a) {
              return -(Math.sqrt(1 - a * a) - 1);
            },
            easeOutCirc: function easeOutCirc(a) {
              return Math.sqrt(1 - Math.pow(a - 1, 2));
            },
            easeInOutCirc: function easeInOutCirc(a) {
              return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            },
            easeOutBounce: function easeOutBounce(a) {
              return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
            },
            easeInBack: function easeInBack(a) {
              var b = 1.70158;
              return a * a * ((b + 1) * a - b);
            },
            easeOutBack: function easeOutBack(a) {
              var b = 1.70158;
              return (a -= 1) * a * ((b + 1) * a + b) + 1;
            },
            easeInOutBack: function easeInOutBack(a) {
              var b = 1.70158;
              return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
            },
            elastic: function elastic(a) {
              return -1 * Math.pow(4, -8 * a) * Math.sin((6 * a - 1) * (2 * Math.PI) / 2) + 1;
            },
            swingFromTo: function swingFromTo(a) {
              var b = 1.70158;
              return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
            },
            swingFrom: function swingFrom(a) {
              var b = 1.70158;
              return a * a * ((b + 1) * a - b);
            },
            swingTo: function swingTo(a) {
              var b = 1.70158;
              return (a -= 1) * a * ((b + 1) * a + b) + 1;
            },
            bounce: function bounce(a) {
              return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
            },
            bouncePast: function bouncePast(a) {
              return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : a < 2.5 / 2.75 ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
            },
            easeFromTo: function easeFromTo(a) {
              return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2);
            },
            easeFrom: function easeFrom(a) {
              return Math.pow(a, 4);
            },
            easeTo: function easeTo(a) {
              return Math.pow(a, .25);
            }
          });
        }(), function () {
          function a(a, b, c, d, e, f) {
            function g(a) {
              return ((n * a + o) * a + p) * a;
            }

            function h(a) {
              return ((q * a + r) * a + s) * a;
            }

            function i(a) {
              return (3 * n * a + 2 * o) * a + p;
            }

            function j(a) {
              return 1 / (200 * a);
            }

            function k(a, b) {
              return h(m(a, b));
            }

            function l(a) {
              return a >= 0 ? a : 0 - a;
            }

            function m(a, b) {
              var c, d, e, f, h, j;

              for (e = a, j = 0; j < 8; j++) {
                if (f = g(e) - a, l(f) < b) return e;
                if (h = i(e), l(h) < 1e-6) break;
                e -= f / h;
              }

              if (c = 0, d = 1, e = a, e < c) return c;
              if (e > d) return d;

              for (; c < d;) {
                if (f = g(e), l(f - a) < b) return e;
                a > f ? c = e : d = e, e = .5 * (d - c) + c;
              }

              return e;
            }

            var n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 0,
                s = 0;
            return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f));
          }

          function b(b, c, d, e) {
            return function (f) {
              return a(f, b, c, d, e, 1);
            };
          }

          e.setBezierFunction = function (a, c, d, f, g) {
            var h = b(c, d, f, g);
            return h.displayName = a, h.x1 = c, h.y1 = d, h.x2 = f, h.y2 = g, e.prototype.formula[a] = h;
          }, e.unsetBezierFunction = function (a) {
            delete e.prototype.formula[a];
          };
        }(), function () {
          function a(a, b, c, d, f, g) {
            return e.tweenProps(d, b, a, c, 1, g, f);
          }

          var b = new e();
          b._filterArgs = [], e.interpolate = function (c, d, f, g, h) {
            var i = e.shallowCopy({}, c),
                j = h || 0,
                k = e.composeEasingObject(c, g || "linear");
            b.set({});
            var l = b._filterArgs;
            l.length = 0, l[0] = i, l[1] = c, l[2] = d, l[3] = k, e.applyFilter(b, "tweenCreated"), e.applyFilter(b, "beforeTween");
            var m = a(c, i, d, f, k, j);
            return e.applyFilter(b, "afterTween"), m;
          };
        }(), function (a) {
          function b(a, b) {
            var c,
                d = [],
                e = a.length;

            for (c = 0; c < e; c++) {
              d.push("_" + b + "_" + c);
            }

            return d;
          }

          function c(a) {
            var b = a.match(v);
            return b ? (1 === b.length || a.charAt(0).match(u)) && b.unshift("") : b = ["", ""], b.join(A);
          }

          function d(b) {
            a.each(b, function (a) {
              var c = b[a];
              "string" == typeof c && c.match(z) && (b[a] = e(c));
            });
          }

          function e(a) {
            return i(z, a, f);
          }

          function f(a) {
            var b = g(a);
            return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")";
          }

          function g(a) {
            return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), B[0] = h(a.substr(0, 2)), B[1] = h(a.substr(2, 2)), B[2] = h(a.substr(4, 2)), B;
          }

          function h(a) {
            return parseInt(a, 16);
          }

          function i(a, b, c) {
            var d = b.match(a),
                e = b.replace(a, A);
            if (d) for (var f, g = d.length, h = 0; h < g; h++) {
              f = d.shift(), e = e.replace(A, c(f));
            }
            return e;
          }

          function j(a) {
            return i(x, a, k);
          }

          function k(a) {
            for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; e < c; e++) {
              d += parseInt(b[e], 10) + ",";
            }

            return d = d.slice(0, -1) + ")";
          }

          function l(d) {
            var e = {};
            return a.each(d, function (a) {
              var f = d[a];

              if ("string" == typeof f) {
                var g = r(f);
                e[a] = {
                  formatString: c(f),
                  chunkNames: b(g, a)
                };
              }
            }), e;
          }

          function m(b, c) {
            a.each(c, function (a) {
              for (var d = b[a], e = r(d), f = e.length, g = 0; g < f; g++) {
                b[c[a].chunkNames[g]] = +e[g];
              }

              delete b[a];
            });
          }

          function n(b, c) {
            a.each(c, function (a) {
              var d = b[a],
                  e = o(b, c[a].chunkNames),
                  f = p(e, c[a].chunkNames);
              d = q(c[a].formatString, f), b[a] = j(d);
            });
          }

          function o(a, b) {
            for (var c, d = {}, e = b.length, f = 0; f < e; f++) {
              c = b[f], d[c] = a[c], delete a[c];
            }

            return d;
          }

          function p(a, b) {
            C.length = 0;

            for (var c = b.length, d = 0; d < c; d++) {
              C.push(a[b[d]]);
            }

            return C;
          }

          function q(a, b) {
            for (var c = a, d = b.length, e = 0; e < d; e++) {
              c = c.replace(A, +b[e].toFixed(4));
            }

            return c;
          }

          function r(a) {
            return a.match(w);
          }

          function s(b, c) {
            a.each(c, function (a) {
              var d,
                  e = c[a],
                  f = e.chunkNames,
                  g = f.length,
                  h = b[a];

              if ("string" == typeof h) {
                var i = h.split(" "),
                    j = i[i.length - 1];

                for (d = 0; d < g; d++) {
                  b[f[d]] = i[d] || j;
                }
              } else for (d = 0; d < g; d++) {
                b[f[d]] = h;
              }

              delete b[a];
            });
          }

          function t(b, c) {
            a.each(c, function (a) {
              var d = c[a],
                  e = d.chunkNames,
                  f = e.length,
                  g = b[e[0]],
                  h = _typeof(g);

              if ("string" === h) {
                for (var i = "", j = 0; j < f; j++) {
                  i += " " + b[e[j]], delete b[e[j]];
                }

                b[a] = i.substr(1);
              } else b[a] = g;
            });
          }

          var u = /(\d|\-|\.)/,
              v = /([^\-0-9\.]+)/g,
              w = /[0-9.\-]+/g,
              x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
              y = /^.*\(/,
              z = /#([0-9]|[a-f]){3,6}/gi,
              A = "VAL",
              B = [],
              C = [];
          a.prototype.filter.token = {
            tweenCreated: function tweenCreated(a, b, c, e) {
              d(a), d(b), d(c), this._tokenData = l(a);
            },
            beforeTween: function beforeTween(a, b, c, d) {
              s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData);
            },
            afterTween: function afterTween(a, b, c, d) {
              n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData);
            }
          };
        }(e);
      }).call(null);
    }, {}],
    2: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./utils"),
          f = function f(a, b) {
        this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, d.apply(this, arguments);
      };

      f.prototype = new d(), f.prototype.constructor = f, f.prototype._pathString = function (a) {
        var b = a.strokeWidth;
        a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);
        var c = 50 - b / 2;
        return e.render(this._pathTemplate, {
          radius: c,
          "2radius": 2 * c
        });
      }, f.prototype._trailString = function (a) {
        return this._pathString(a);
      }, b.exports = f;
    }, {
      "./shape": 7,
      "./utils": 9
    }],
    3: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./utils"),
          f = function f(a, b) {
        this._pathTemplate = "M 0,{center} L 100,{center}", d.apply(this, arguments);
      };

      f.prototype = new d(), f.prototype.constructor = f, f.prototype._initializeSvg = function (a, b) {
        a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth), a.setAttribute("preserveAspectRatio", "none");
      }, f.prototype._pathString = function (a) {
        return e.render(this._pathTemplate, {
          center: a.strokeWidth / 2
        });
      }, f.prototype._trailString = function (a) {
        return this._pathString(a);
      }, b.exports = f;
    }, {
      "./shape": 7,
      "./utils": 9
    }],
    4: [function (a, b, c) {
      b.exports = {
        Line: a("./line"),
        Circle: a("./circle"),
        SemiCircle: a("./semicircle"),
        Square: a("./square"),
        Path: a("./path"),
        Shape: a("./shape"),
        utils: a("./utils")
      };
    }, {
      "./circle": 2,
      "./line": 3,
      "./path": 5,
      "./semicircle": 6,
      "./shape": 7,
      "./square": 8,
      "./utils": 9
    }],
    5: [function (a, b, c) {
      var d = a("shifty"),
          e = a("./utils"),
          f = {
        easeIn: "easeInCubic",
        easeOut: "easeOutCubic",
        easeInOut: "easeInOutCubic"
      },
          g = function a(b, c) {
        if (!(this instanceof a)) throw new Error("Constructor was called without new keyword");
        c = e.extend({
          duration: 800,
          easing: "linear",
          from: {},
          to: {},
          step: function step() {}
        }, c);
        var d;
        d = e.isString(b) ? document.querySelector(b) : b, this.path = d, this._opts = c, this._tweenable = null;
        var f = this.path.getTotalLength();
        this.path.style.strokeDasharray = f + " " + f, this.set(0);
      };

      g.prototype.value = function () {
        var a = this._getComputedDashOffset(),
            b = this.path.getTotalLength(),
            c = 1 - a / b;

        return parseFloat(c.toFixed(6), 10);
      }, g.prototype.set = function (a) {
        this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(a);
        var b = this._opts.step;

        if (e.isFunction(b)) {
          var c = this._easing(this._opts.easing),
              d = this._calculateTo(a, c),
              f = this._opts.shape || this;

          b(d, f, this._opts.attachment);
        }
      }, g.prototype.stop = function () {
        this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset();
      }, g.prototype.animate = function (a, b, c) {
        b = b || {}, e.isFunction(b) && (c = b, b = {});
        var f = e.extend({}, b),
            g = e.extend({}, this._opts);
        b = e.extend(g, b);

        var h = this._easing(b.easing),
            i = this._resolveFromAndTo(a, h, f);

        this.stop(), this.path.getBoundingClientRect();

        var j = this._getComputedDashOffset(),
            k = this._progressToOffset(a),
            l = this;

        this._tweenable = new d(), this._tweenable.tween({
          from: e.extend({
            offset: j
          }, i.from),
          to: e.extend({
            offset: k
          }, i.to),
          duration: b.duration,
          easing: h,
          step: function step(a) {
            l.path.style.strokeDashoffset = a.offset;
            var c = b.shape || l;
            b.step(a, c, b.attachment);
          },
          finish: function finish(a) {
            e.isFunction(c) && c();
          }
        });
      }, g.prototype._getComputedDashOffset = function () {
        var a = window.getComputedStyle(this.path, null);
        return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10);
      }, g.prototype._progressToOffset = function (a) {
        var b = this.path.getTotalLength();
        return b - a * b;
      }, g.prototype._resolveFromAndTo = function (a, b, c) {
        return c.from && c.to ? {
          from: c.from,
          to: c.to
        } : {
          from: this._calculateFrom(b),
          to: this._calculateTo(a, b)
        };
      }, g.prototype._calculateFrom = function (a) {
        return d.interpolate(this._opts.from, this._opts.to, this.value(), a);
      }, g.prototype._calculateTo = function (a, b) {
        return d.interpolate(this._opts.from, this._opts.to, a, b);
      }, g.prototype._stopTween = function () {
        null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null);
      }, g.prototype._easing = function (a) {
        return f.hasOwnProperty(a) ? f[a] : a;
      }, b.exports = g;
    }, {
      "./utils": 9,
      shifty: 1
    }],
    6: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./circle"),
          f = a("./utils"),
          g = function g(a, b) {
        this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, d.apply(this, arguments);
      };

      g.prototype = new d(), g.prototype.constructor = g, g.prototype._initializeSvg = function (a, b) {
        a.setAttribute("viewBox", "0 0 100 50");
      }, g.prototype._initializeTextContainer = function (a, b, c) {
        a.text.style && (c.style.top = "auto", c.style.bottom = "0", a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)"));
      }, g.prototype._pathString = e.prototype._pathString, g.prototype._trailString = e.prototype._trailString, b.exports = g;
    }, {
      "./circle": 2,
      "./shape": 7,
      "./utils": 9
    }],
    7: [function (a, b, c) {
      var d = a("./path"),
          e = a("./utils"),
          f = "Object is destroyed",
          g = function a(b, c) {
        if (!(this instanceof a)) throw new Error("Constructor was called without new keyword");

        if (0 !== arguments.length) {
          this._opts = e.extend({
            color: "#555",
            strokeWidth: 1,
            trailColor: null,
            trailWidth: null,
            fill: null,
            text: {
              style: {
                color: null,
                position: "absolute",
                left: "50%",
                top: "50%",
                padding: 0,
                margin: 0,
                transform: {
                  prefix: !0,
                  value: "translate(-50%, -50%)"
                }
              },
              autoStyleContainer: !0,
              alignToBottom: !0,
              value: null,
              className: "progressbar-text"
            },
            svgStyle: {
              display: "block",
              width: "100%"
            },
            warnings: !1
          }, c, !0), e.isObject(c) && void 0 !== c.svgStyle && (this._opts.svgStyle = c.svgStyle), e.isObject(c) && e.isObject(c.text) && void 0 !== c.text.style && (this._opts.text.style = c.text.style);

          var f,
              g = this._createSvgView(this._opts);

          if (f = e.isString(b) ? document.querySelector(b) : b, !f) throw new Error("Container does not exist: " + b);
          this._container = f, this._container.appendChild(g.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && e.setStyles(g.svg, this._opts.svgStyle), this.svg = g.svg, this.path = g.path, this.trail = g.trail, this.text = null;
          var h = e.extend({
            attachment: void 0,
            shape: this
          }, this._opts);
          this._progressPath = new d(g.path, h), e.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value);
        }
      };

      g.prototype.animate = function (a, b, c) {
        if (null === this._progressPath) throw new Error(f);

        this._progressPath.animate(a, b, c);
      }, g.prototype.stop = function () {
        if (null === this._progressPath) throw new Error(f);
        void 0 !== this._progressPath && this._progressPath.stop();
      }, g.prototype.destroy = function () {
        if (null === this._progressPath) throw new Error(f);
        this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null);
      }, g.prototype.set = function (a) {
        if (null === this._progressPath) throw new Error(f);

        this._progressPath.set(a);
      }, g.prototype.value = function () {
        if (null === this._progressPath) throw new Error(f);
        return void 0 === this._progressPath ? 0 : this._progressPath.value();
      }, g.prototype.setText = function (a) {
        if (null === this._progressPath) throw new Error(f);
        null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), e.isObject(a) ? (e.removeChildren(this.text), this.text.appendChild(a)) : this.text.innerHTML = a;
      }, g.prototype._createSvgView = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        this._initializeSvg(b, a);

        var c = null;
        (a.trailColor || a.trailWidth) && (c = this._createTrail(a), b.appendChild(c));

        var d = this._createPath(a);

        return b.appendChild(d), {
          svg: b,
          path: d,
          trail: c
        };
      }, g.prototype._initializeSvg = function (a, b) {
        a.setAttribute("viewBox", "0 0 100 100");
      }, g.prototype._createPath = function (a) {
        var b = this._pathString(a);

        return this._createPathElement(b, a);
      }, g.prototype._createTrail = function (a) {
        var b = this._trailString(a),
            c = e.extend({}, a);

        return c.trailColor || (c.trailColor = "#eee"), c.trailWidth || (c.trailWidth = c.strokeWidth), c.color = c.trailColor, c.strokeWidth = c.trailWidth, c.fill = null, this._createPathElement(b, c);
      }, g.prototype._createPathElement = function (a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return c.setAttribute("d", a), c.setAttribute("stroke", b.color), c.setAttribute("stroke-width", b.strokeWidth), b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"), c;
      }, g.prototype._createTextContainer = function (a, b) {
        var c = document.createElement("div");
        c.className = a.text.className;
        var d = a.text.style;
        return d && (a.text.autoStyleContainer && (b.style.position = "relative"), e.setStyles(c, d), d.color || (c.style.color = a.color)), this._initializeTextContainer(a, b, c), c;
      }, g.prototype._initializeTextContainer = function (a, b, c) {}, g.prototype._pathString = function (a) {
        throw new Error("Override this function for each progress bar");
      }, g.prototype._trailString = function (a) {
        throw new Error("Override this function for each progress bar");
      }, g.prototype._warnContainerAspectRatio = function (a) {
        if (this.containerAspectRatio) {
          var b = window.getComputedStyle(a, null),
              c = parseFloat(b.getPropertyValue("width"), 10),
              d = parseFloat(b.getPropertyValue("height"), 10);
          e.floatEquals(this.containerAspectRatio, c / d) || (console.warn("Incorrect aspect ratio of container", "#" + a.id, "detected:", b.getPropertyValue("width") + "(width)", "/", b.getPropertyValue("height") + "(height)", "=", c / d), console.warn("Aspect ratio of should be", this.containerAspectRatio));
        }
      }, b.exports = g;
    }, {
      "./path": 5,
      "./utils": 9
    }],
    8: [function (a, b, c) {
      var d = a("./shape"),
          e = a("./utils"),
          f = function f(a, b) {
        this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}", this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}", d.apply(this, arguments);
      };

      f.prototype = new d(), f.prototype.constructor = f, f.prototype._pathString = function (a) {
        var b = 100 - a.strokeWidth / 2;
        return e.render(this._pathTemplate, {
          width: b,
          strokeWidth: a.strokeWidth,
          halfOfStrokeWidth: a.strokeWidth / 2
        });
      }, f.prototype._trailString = function (a) {
        var b = 100 - a.strokeWidth / 2;
        return e.render(this._trailTemplate, {
          width: b,
          strokeWidth: a.strokeWidth,
          halfOfStrokeWidth: a.strokeWidth / 2,
          startMargin: a.strokeWidth / 2 - a.trailWidth / 2
        });
      }, b.exports = f;
    }, {
      "./shape": 7,
      "./utils": 9
    }],
    9: [function (a, b, c) {
      function d(a, b, c) {
        a = a || {}, b = b || {}, c = c || !1;

        for (var e in b) {
          if (b.hasOwnProperty(e)) {
            var f = a[e],
                g = b[e];
            c && l(f) && l(g) ? a[e] = d(f, g, c) : a[e] = g;
          }
        }

        return a;
      }

      function e(a, b) {
        var c = a;

        for (var d in b) {
          if (b.hasOwnProperty(d)) {
            var e = b[d],
                f = "\\{" + d + "\\}",
                g = new RegExp(f, "g");
            c = c.replace(g, e);
          }
        }

        return c;
      }

      function f(a, b, c) {
        for (var d = a.style, e = 0; e < p.length; ++e) {
          var f = p[e];
          d[f + h(b)] = c;
        }

        d[b] = c;
      }

      function g(a, b) {
        m(b, function (b, c) {
          null !== b && void 0 !== b && (l(b) && b.prefix === !0 ? f(a, c, b.value) : a.style[c] = b);
        });
      }

      function h(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      }

      function i(a) {
        return "string" == typeof a || a instanceof String;
      }

      function j(a) {
        return "function" == typeof a;
      }

      function k(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }

      function l(a) {
        if (k(a)) return !1;

        var b = _typeof(a);

        return "object" === b && !!a;
      }

      function m(a, b) {
        for (var c in a) {
          if (a.hasOwnProperty(c)) {
            var d = a[c];
            b(d, c);
          }
        }
      }

      function n(a, b) {
        return Math.abs(a - b) < q;
      }

      function o(a) {
        for (; a.firstChild;) {
          a.removeChild(a.firstChild);
        }
      }

      var p = "Webkit Moz O ms".split(" "),
          q = .001;
      b.exports = {
        extend: d,
        render: e,
        setStyle: f,
        setStyles: g,
        capitalize: h,
        isString: i,
        isFunction: j,
        isObject: l,
        forEachObject: m,
        floatEquals: n,
        removeChildren: o
      };
    }, {}]
  }, {}, [4])(4);
});

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/christonit/Documents/personal projects/personal/resources/js/main.js */"./resources/js/main.js");


/***/ })

/******/ });