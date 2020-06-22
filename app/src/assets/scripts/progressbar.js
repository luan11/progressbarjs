var ProgressBar =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/js/app/ProgressBar.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/js/app/ProgressBar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ProgressBar = /*#__PURE__*/function () {\n  function ProgressBar() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, ProgressBar);\n\n    this.options = Object.assign({\n      el: document.querySelector('.progress-bar'),\n      beforeChangeCB: null,\n      afterChangeCB: null\n    }, options);\n    this.barEl = this.options.el.querySelector('.bar');\n    this.percentage = 0;\n    this.setPercentage(this.options.el.getAttribute('data-progress-bar-percentage'));\n  }\n\n  _createClass(ProgressBar, [{\n    key: \"_parsePercentage\",\n    value: function _parsePercentage(percentage) {\n      var p = parseFloat(percentage);\n\n      if (p < 0) {\n        p = 0;\n      } else if (p > 100) {\n        p = 100;\n      }\n\n      return Number(p.toFixed(2));\n    }\n  }, {\n    key: \"_animate\",\n    value: function _animate() {\n      var translate = Number(((100 - this.percentage) * -1).toFixed(2));\n      this.barEl.style.transform = \"translateX(\".concat(translate, \"%)\");\n    }\n  }, {\n    key: \"setPercentage\",\n    value: function setPercentage(percentage) {\n      percentage = this._parsePercentage(percentage);\n\n      if (typeof this.options.beforeChangeCB === 'function') {\n        this.options.beforeChangeCB(this.percentage, percentage, this.options.el);\n      }\n\n      this.percentage = percentage;\n      this.options.el.setAttribute('data-progress-bar-percentage', this.percentage);\n\n      this._animate();\n\n      if (typeof this.options.afterChangeCB === 'function') {\n        this.options.afterChangeCB(this.percentage, this.options.el);\n      }\n    }\n  }]);\n\n  return ProgressBar;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressBar);\n\n//# sourceURL=webpack://ProgressBar/./src/assets/scripts/js/app/ProgressBar.js?");

/***/ }),

/***/ "./src/assets/scripts/js/main.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/js/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/ProgressBar */ \"./src/assets/scripts/js/app/ProgressBar.js\").default;\n\n//# sourceURL=webpack://ProgressBar/./src/assets/scripts/js/main.js?");

/***/ })

/******/ });
//# sourceMappingURL=maps/progressbar.js.map