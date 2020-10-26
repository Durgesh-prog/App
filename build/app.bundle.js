/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,::before,::after{\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tbox-sizing:border-box;\r\n}\r\n\r\n.navlink{\r\n\tmargin-left:auto;\r\n}\r\n\r\n.navlink a{\r\n\tcolor:white;\r\n\tmargin-right:15px;\r\n}\r\n\r\n\r\n\r\n.form{\r\n\twidth:80%;\r\n\tmargin:auto;\r\n}\r\n\r\n.dashboard{\r\n\tdisplay:grid;\r\n\tgrid-template-columns:1fr 4fr;\r\n\tmargin-top:2rem;\r\n}\r\n\r\n.dashboard .sidebar{\r\n\tdisplay:flex;\r\n\tborder-right:3px solid black;\r\n\tjustify-content:center;\r\n}\r\n\r\n.dashboard .main{\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\n.taskList li{\r\n\tdisplay:grid;\r\n\tgrid-template-columns:1fr 1fr 1fr 1fr;\r\n\tgrid-gap:1rem;\r\n}\r\n\r\n.taskList li button{\r\n\tbackground-color:blue;\r\n\tcolor:white;\r\n}\r\n\r\n\r\n@media screen and (max-width:450px){\r\n\t.navlink{\r\n\t\tdisplay:flex;\r\n\t}\r\n\t\r\n\t.dashboard .sidebar{\r\n\t\tdisplay:none;\r\n\t}\r\n\t\r\n}\r\n\r\n.task-items{\r\n  display:grid;\r\n grid-template-columns:1fr 1fr 1fr;\r\ngrid-gap:2rem;\r\n  margin-bottom:1rem;\r\nalign-items:first baseline\r\n}\r\n\r\n.task-items h4{\r\n\ttext-transform:capitalize;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,QAAQ;CACR,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,iBAAiB;AAClB;;;;AAIA;CACC,SAAS;CACT,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,6BAA6B;CAC7B,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,4BAA4B;CAC5B,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,qCAAqC;CACrC,aAAa;AACd;;AAEA;CACC,qBAAqB;CACrB,WAAW;AACZ;;;AAGA;CACC;EACC,YAAY;CACb;;CAEA;EACC,YAAY;CACb;;AAED;;AAEA;EACE,YAAY;CACb,iCAAiC;AAClC,aAAa;EACX,kBAAkB;AACpB;AACA;;AAEA;CACC,yBAAyB;AAC1B","sourcesContent":["*,::before,::after{\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tbox-sizing:border-box;\r\n}\r\n\r\n.navlink{\r\n\tmargin-left:auto;\r\n}\r\n\r\n.navlink a{\r\n\tcolor:white;\r\n\tmargin-right:15px;\r\n}\r\n\r\n\r\n\r\n.form{\r\n\twidth:80%;\r\n\tmargin:auto;\r\n}\r\n\r\n.dashboard{\r\n\tdisplay:grid;\r\n\tgrid-template-columns:1fr 4fr;\r\n\tmargin-top:2rem;\r\n}\r\n\r\n.dashboard .sidebar{\r\n\tdisplay:flex;\r\n\tborder-right:3px solid black;\r\n\tjustify-content:center;\r\n}\r\n\r\n.dashboard .main{\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\n.taskList li{\r\n\tdisplay:grid;\r\n\tgrid-template-columns:1fr 1fr 1fr 1fr;\r\n\tgrid-gap:1rem;\r\n}\r\n\r\n.taskList li button{\r\n\tbackground-color:blue;\r\n\tcolor:white;\r\n}\r\n\r\n\r\n@media screen and (max-width:450px){\r\n\t.navlink{\r\n\t\tdisplay:flex;\r\n\t}\r\n\t\r\n\t.dashboard .sidebar{\r\n\t\tdisplay:none;\r\n\t}\r\n\t\r\n}\r\n\r\n.task-items{\r\n  display:grid;\r\n grid-template-columns:1fr 1fr 1fr;\r\ngrid-gap:2rem;\r\n  margin-bottom:1rem;\r\nalign-items:first baseline\r\n}\r\n\r\n.task-items h4{\r\n\ttext-transform:capitalize;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/ADDFORM.js":
/*!***********************************!*\
  !*** ./src/components/ADDFORM.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ADDFORM; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function ADDFORM(_ref) {
  var Form = _ref.Form,
      setForm = _ref.setForm,
      setSection = _ref.setSection,
      setTask = _ref.setTask,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      position: 'absolute',
      backgroundColor: 'orange',
      padding: '1rem',
      bottom: '0',
      right: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    style: {
      position: 'absolute',
      left: '0',
      top: '0',
      backgroundColor: 'blue',
      color: 'white'
    },
    onClick: function onClick() {
      return setForm(_objectSpread(_objectSpread({}, Form), {}, {
        'ADD': false
      }));
    }
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      marginTop: '2rem'
    }
  }, "Enter Todo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "task"
  }, "Task Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "task",
    type: "text",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "section"
  }, "Section Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "section",
    type: "text",
    onChange: function onChange(e) {
      return setSection(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    onClick: handleClick
  }, "Create new Task"))));
}

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Button(_ref) {
  var name = _ref.name,
      handleClick = _ref.handleClick,
      styles = _ref.styles;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: styles || {},
    onClick: handleClick || null
  }, name);
}

/***/ }),

/***/ "./src/components/CustomForm.js":
/*!**************************************!*\
  !*** ./src/components/CustomForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function CustomForm(_ref) {
  var type = _ref.type,
      Form = _ref.Form,
      setForm = _ref.setForm,
      setSection = _ref.setSection,
      setTask = _ref.setTask,
      handleMe = _ref.handleMe;
  var toggle = {};
  if (type === 'Create') toggle = {
    'ADD': false
  };
  if (type === 'Update') toggle = {
    'EDIT': false
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      position: 'absolute',
      backgroundColor: 'orange',
      padding: '1rem',
      bottom: '0',
      right: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    style: {
      position: 'absolute',
      left: '0',
      top: '0',
      backgroundColor: 'blue',
      color: 'white'
    },
    onClick: function onClick() {
      return setForm(_objectSpread(_objectSpread({}, Form), toggle));
    }
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      marginTop: '2rem'
    }
  }, type, " Todo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "task"
  }, "Task Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "task",
    type: "text",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "section"
  }, "Section Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "section",
    type: "text",
    onChange: function onChange(e) {
      return setSection(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick(e) {
      return handleMe(e);
    }
  }, type, " new Task"))));
}

/***/ }),

/***/ "./src/components/Dashboard.js":
/*!*************************************!*\
  !*** ./src/components/Dashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./src/components/SideBar.js");
/* harmony import */ var _MainScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainScreen */ "./src/components/MainScreen.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All'),
      _useState4 = _slicedToArray(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('/user/dashboard').then(function (res) {
      if (res.ok) {
        res.json().then(function (Rdata) {
          console.log('Dashboard Get  Recieved Data');
          console.log(Rdata);
          if (Rdata && Rdata.data.length > 0) setData(Rdata.data);
        });
      } else {
        console.log('Dashboard Get  Recieved Error');
      }
    })["catch"](function () {
      alert('Error');
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    setFilter: setFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    setData: setData,
    filter: filter
  }));
}

/***/ }),

/***/ "./src/components/EDITFORM.js":
/*!************************************!*\
  !*** ./src/components/EDITFORM.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EDITFORM; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function EDITFORM(_ref) {
  var Form = _ref.Form,
      setForm = _ref.setForm,
      setSection = _ref.setSection,
      setTask = _ref.setTask,
      handleEdit = _ref.handleEdit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      position: 'absolute',
      backgroundColor: 'orange',
      padding: '1rem',
      bottom: '0',
      right: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    style: {
      position: 'absolute',
      left: '0',
      top: '0',
      backgroundColor: 'blue',
      color: 'white'
    },
    onClick: function onClick() {
      return setForm(_objectSpread(_objectSpread({}, Form), {}, {
        'EDIT': false
      }));
    }
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      marginTop: '1rem'
    }
  }, "Edit Todo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "task"
  }, "Task Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "task",
    type: "text",
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "section"
  }, "Section Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "section",
    type: "text",
    onChange: function onChange(e) {
      return setSection(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    onClick: handleEdit
  }, "Create new Task"))));
}

/***/ }),

/***/ "./src/components/GuestDashboard.js":
/*!******************************************!*\
  !*** ./src/components/GuestDashboard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./src/components/SideBar.js");
/* harmony import */ var _GuestMainScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuestMainScreen */ "./src/components/GuestMainScreen.js");
/* harmony import */ var _useIndexDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIndexDB */ "./src/components/useIndexDB.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function GuestDashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      db = _useState2[0],
      setDB = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_useIndexDB__WEBPACK_IMPORTED_MODULE_3__["default"])({
      name: 'todo_app',
      setDB: setDB
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuestMainScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    db: db
  }));
}

/***/ }),

/***/ "./src/components/GuestMainScreen.js":
/*!*******************************************!*\
  !*** ./src/components/GuestMainScreen.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestMainScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Test */ "./src/components/Test.js");
/* harmony import */ var _useIDBDisplayData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIDBDisplayData */ "./src/components/useIDBDisplayData.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function GuestMainScreen(_ref) {
  var db = _ref.db;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    'ADD': false,
    'EDIT': false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      Form = _useState4[0],
      setForm = _useState4[1];

  function handleDate() {
    var Today = new Date();
    return Today.toLocaleDateString();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_typeof(db) === 'object') {
      console.log('Main screen');
      console.log(_typeof(db));
      Object(_useIDBDisplayData__WEBPACK_IMPORTED_MODULE_3__["default"])({
        db: db,
        setResult: setResult
      });
    }
  }, [db]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    style: {
      width: '90vw',
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Today : ", handleDate()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: '+',
    handleClick: function handleClick() {
      return setForm({
        'ADD': true,
        'EDIT': false
      });
    },
    styles: {
      borderRadius: '50%',
      fontSize: '1rem'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Test__WEBPACK_IMPORTED_MODULE_2__["default"], {
    db: db,
    result: result,
    Form: Form,
    setForm: setForm,
    setResult: setResult
  }));
}

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm */ "./src/components/LoginForm.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UserContext */ "./src/context/UserContext.js");



function Login() {
  var LoginContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "form mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    LoginContext: LoginContext
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      fontWeight: '800',
      marginTop: '1rem'
    }
  }, "OR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Btn",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return LoginContext.dispatch({
        type: 'LOGIN',
        payload: {
          username: 'Guest'
        }
      });
    }
  }, "Try as Guest")));
}

/***/ }),

/***/ "./src/components/LoginForm.js":
/*!*************************************!*\
  !*** ./src/components/LoginForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function LoginForm(_ref) {
  var LoginContext = _ref.LoginContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      password: '',
      email: ''
    },
    onSubmit: function onSubmit(values, actions) {
      fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_objectSpread({}, values))
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (data) {
            console.log('Login Form Succesfully Recieved Data');
            console.log(data);
            LoginContext.dispatch({
              type: 'LOGIN',
              payload: {
                'username': data.username
              }
            });
          });
        } else {
          console.log('Login Form Recieved Error');
          res.json().then(function (err) {
            return alert(err.msg);
          });
        }
      })["catch"](function () {
        alert('Error');
      })["finally"](function () {
        actions.setSubmitting(false);
      });
    },
    validate: function validate(values) {
      var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      var errors = {};

      if (!values.password) {
        errors.password = 'Please Enter Password';
      }

      if (!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Please Enter a Valid Email';
      }

      return errors;
    }
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      name: "loginForm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Email : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "email",
      className: "form-control"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "email"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password"
    }, "Password : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "password",
      type: "password",
      className: "form-control"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "password"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Btn",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Submit")));
  });
}

/***/ }),

/***/ "./src/components/MainScreen.js":
/*!**************************************!*\
  !*** ./src/components/MainScreen.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _CustomForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomForm */ "./src/components/CustomForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function MainScreen(_ref) {
  var db = _ref.db,
      data = _ref.data,
      filter = _ref.filter,
      setData = _ref.setData;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var FilterResult;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    'ADD': false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      Form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      task = _useState4[0],
      setTask = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      section = _useState6[0],
      setSection = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState8 = _slicedToArray(_useState7, 2),
      id = _useState8[0],
      setId = _useState8[1];

  function handleDate() {
    var Today = new Date();
    return Today.toLocaleDateString();
  }

  function handleAdd(e) {
    e.preventDefault();
    alert('Request for adding');
    fetch('/user/dashboard/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'task': task,
        'section': section
      })
    }).then(function (res) {
      if (res.ok) {
        res.json().then(function (newdata) {
          console.log('On creating  Recieved Data');
          console.log(newdata.task);
          setData([].concat(_toConsumableArray(data), [newdata.task]));
        });
      } else {
        console.log('Dashboard Get  Recieved Error');
        alert('Error in data');
      }
    })["catch"](function () {
      alert('Error');
    });
  }

  function handleUpdate(e) {
    e.preventDefault();
    alert('Request for updating');
    fetch('/user/dashboard/update', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'id': e.target.id
      })
    }).then(function (res) {
      if (res.ok) {
        res.json().then(function (recievedata) {
          console.log('Update Get  Recieved Data');
          console.log(recievedata);
          console.log(recievedata.id);
          var newData;
          newData = data.map(function (t) {
            if (t._id === recievedata.id) {
              console.log('found');
              t['completed'] = true;
            }

            return t;
          });
          console.log(newData);
          setData(newData);
        });
      } else {
        console.log('Dashboard Get  Recieved Error');
        alert('Error in data');
      }
    })["catch"](function () {
      alert('Error');
    });
  }

  function handleDelete(e) {
    var requiredId = e.target.id;
    e.preventDefault();
    alert('Request for deleting');
    fetch('/user/dashboard/delete', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'id': e.target.id
      })
    }).then(function (res) {
      if (res.ok) {
        console.log('Delete Get  Recieved Data');
        console.log(requiredId);
        var newData = data.filter(function (task) {
          return task._id != requiredId;
        });
        console.log(newData);
        setData(newData);
      } else {
        console.log('Dashboard Get  Recieved Error');
      }
    })["catch"](function () {
      alert('Error');
    });
  }

  var DataResult = data.map(function (taskObj) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: taskObj._id,
      className: "task-items"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, taskObj.task), !taskObj.completed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-primary",
      id: taskObj._id,
      onClick: function onClick(e) {
        return handleUpdate(e);
      }
    }, "Complete") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "btn btn-success"
    }, "Done!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-danger",
      id: taskObj._id,
      onClick: function onClick(e) {
        return handleDelete(e);
      }
    }, "Delete"));
  });

  if (filter !== 'All') {
    console.log('Main Screen');
    var myFilter = data.filter(function (taskObj) {
      return taskObj.section === filter;
    });
    console.log(myFilter);
    FilterResult = myFilter.map(function (taskObj) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: taskObj._id,
        className: "task-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, taskObj.task), !taskObj.completed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        id: taskObj._id,
        onClick: function onClick(e) {
          return handleUpdate(e);
        }
      }, "Complete") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "btn btn-success my-auto"
      }, "Done!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-danger",
        id: taskObj._id,
        onClick: function onClick(e) {
          return handleDelete(e);
        }
      }, "Delete"));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Today : ", handleDate()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: '+',
    handleClick: function handleClick() {
      return setForm({
        'ADD': true
      });
    },
    styles: {
      borderRadius: '50%',
      fontSize: '1rem'
    }
  })), Form.ADD ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'Create',
    Form: Form,
    setForm: setForm,
    setTask: setTask,
    setSection: setSection,
    handleMe: handleAdd
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '90%',
      marginTop: '2rem'
    }
  }, filter === 'All' ? DataResult : FilterResult || null));
}

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





function NavigationBar(_ref) {
  var _ref$state = _ref.state,
      Login = _ref$state.Login,
      userName = _ref$state.userName,
      dispatch = _ref.dispatch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    expand: "lg",
    bg: "primary",
    variant: "dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"].Brand, {
    href: "#"
  }, "Hi ", userName || 'User', "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "navlink"
  }, Login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard"
  }, "Dashboard") : null, !Login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/signup"
  }, "Signup") : null, !Login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/login"
  }, "Login") : null, Login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/logout",
    onClick: function onClick() {
      return dispatch({
        'type': 'LOGOUT',
        userName: ''
      });
    }
  }, "Logout") : null)));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NavigationBar));

/***/ }),

/***/ "./src/components/NotFound.js":
/*!************************************!*\
  !*** ./src/components/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Btn",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "btn btn-primary"
  }, "Back to Home Page"));
}

/***/ }),

/***/ "./src/components/SideBar.js":
/*!***********************************!*\
  !*** ./src/components/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SideBar(_ref) {
  var data = _ref.data,
      setFilter = _ref.setFilter;
  var sectionList = [];
  data.forEach(function (taskObj) {
    console.log(taskObj);

    if (taskObj.section) {
      if (!sectionList.includes(taskObj.section)) {
        sectionList.push(taskObj.section);
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick(e) {
      return setFilter(e.target.id);
    },
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    id: 'All',
    style: {
      marginBottom: '0.5rem'
    }
  }, "All"), sectionList.map(function (sec) {
    console.log(sec);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: sec,
      className: "btn btn-primary",
      id: sec,
      style: {
        marginBottom: '0.5rem'
      }
    }, sec);
  })));
}

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupForm */ "./src/components/SignupForm.js");


function Signup() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "form mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignupForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/components/SignupForm.js":
/*!**************************************!*\
  !*** ./src/components/SignupForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function SignupForm() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: function onSubmit(values, actions) {
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_objectSpread({}, values))
      }).then(function (res) {
        if (res.ok) {
          history.replace('login');
        } else {
          alert('Failed');
        }
      })["catch"](function () {
        alert('Error');
      })["finally"](function () {
        actions.setSubmitting(false);
      });
    },
    validate: function validate(values) {
      var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      var errors = {};

      if (!values.username) {
        errors.username = 'Please Enter a Username';
      }

      if (!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Please Enter a Valid Email';
      }

      if (!values.password) {
        errors.password = 'Please Enter a Password';
      }

      return errors;
    }
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      name: "signupForm mt3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-sm "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username"
    }, "Username : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "username",
      className: "form-control"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "username"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-sm "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Email : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "email",
      className: "form-control"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "email"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-sm "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password"
    }, "Password: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "password",
      className: "form-control"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "password"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Btn",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Submit")));
  });
}

/***/ }),

/***/ "./src/components/Test.js":
/*!********************************!*\
  !*** ./src/components/Test.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIDBTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIDBTransaction */ "./src/components/useIDBTransaction.js");
/* harmony import */ var _useIDBDelteData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIDBDelteData */ "./src/components/useIDBDelteData.js");
/* harmony import */ var _useIDBUpdateData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIDBUpdateData */ "./src/components/useIDBUpdateData.js");
/* harmony import */ var _ADDFORM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ADDFORM */ "./src/components/ADDFORM.js");
/* harmony import */ var _EDITFORM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EDITFORM */ "./src/components/EDITFORM.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Test(_ref) {
  var db = _ref.db,
      result = _ref.result,
      Form = _ref.Form,
      setResult = _ref.setResult,
      setForm = _ref.setForm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      task = _useState2[0],
      setTask = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      section = _useState4[0],
      setSection = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      id = _useState6[0],
      setId = _useState6[1];

  function handleClick(e) {
    e.preventDefault();
    console.log('Going to run DB transcation');
    Object(_useIDBTransaction__WEBPACK_IMPORTED_MODULE_1__["default"])({
      db: db,
      task: task,
      section: section,
      setResult: setResult
    });
  }

  function handleEdit(e) {
    e.preventDefault();
    console.log('Going to run edit transcation');
    console.log(id);
    Object(_useIDBUpdateData__WEBPACK_IMPORTED_MODULE_3__["default"])({
      db: db,
      id: id,
      task: task,
      section: section,
      setResult: setResult
    });
  }

  function showEditForm(e) {
    setId(e.target.id);
    setForm({
      'ADD': false,
      'EDIT': true
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log('Going to run delete transactions');
    Object(_useIDBDelteData__WEBPACK_IMPORTED_MODULE_2__["default"])({
      db: db,
      e: e,
      setResult: setResult
    });
  }

  var allResults = result && result.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textTransform: 'Capitalize',
        color: 'Black',
        fontWeight: '900'
      }
    }, item.section), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textTransform: 'Capitalize'
      }
    }, item.task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      id: item.id,
      onClick: function onClick(e) {
        return showEditForm(e);
      }
    }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      id: item.id,
      onClick: function onClick(e) {
        return handleDelete(e);
      }
    }, "Delete"));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      marginBottom: '2rem'
    }
  }, "Added Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taskList"
  }, allResults ? allResults : 'No Task Created')), Form.ADD ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ADDFORM__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Form: Form,
    setForm: setForm,
    setTask: setTask,
    setSection: setSection,
    handleClick: handleClick
  }) : null, Form.EDIT ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EDITFORM__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Form: Form,
    setForm: setForm,
    setTask: setTask,
    setSection: setSection,
    handleEdit: handleEdit
  }) : null);
}

/***/ }),

/***/ "./src/components/useIDBDelteData.js":
/*!*******************************************!*\
  !*** ./src/components/useIDBDelteData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIDBDelteData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIDBDisplayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIDBDisplayData */ "./src/components/useIDBDisplayData.js");


function useIDBDelteData(_ref) {
  var db = _ref.db,
      e = _ref.e,
      setResult = _ref.setResult;
  console.log('Inside useIDBDelteData');
  var noteId = Number(e.target.id); // open a database transaction and delete the task, finding it using the id we retrieved above

  var transaction = db.transaction(['todo_app'], 'readwrite');
  var objectStore = transaction.objectStore('todo_app');
  var request = objectStore["delete"](noteId); // report that the data item has been deleted

  transaction.oncomplete = function () {
    Object(_useIDBDisplayData__WEBPACK_IMPORTED_MODULE_1__["default"])({
      db: db,
      setResult: setResult
    });
  };
}

/***/ }),

/***/ "./src/components/useIDBDisplayData.js":
/*!*********************************************!*\
  !*** ./src/components/useIDBDisplayData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIDBDisplayData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIDBDisplayData(_ref) {
  var db = _ref.db,
      setResult = _ref.setResult;
  var AllTasks = []; // Here we empty the contents of the list element each time the display is updated
  // If you didn't do this, you'd get duplicates listed each time a new note is added

  /*  while(list.firstChild) {
       list.removeChild(list.firstChild);
   } */
  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store

  var objectStore = db.transaction('todo_app').objectStore('todo_app');

  objectStore.openCursor().onsuccess = function (e) {
    // Get a reference to the cursor
    var cursor = e.target.result; // If there is still another data item to iterate through, keep running this code

    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list

      /* const listItem = document.createElement('li');
      const h3 = document.createElement('h3');
      const para = document.createElement('p');
        listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);
      */
      // Put the data from the cursor inside the h3 and para

      /*  h3.textContent = cursor.value.title;
       para.textContent = cursor.value.body;
      */
      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items

      /* listItem.setAttribute('data-note-id', cursor.value.id);
      */
      // Create a button and place it inside each listItem

      /*  const deleteBtn = document.createElement('button');
       listItem.appendChild(deleteBtn);
       deleteBtn.textContent = 'Delete';
      */
      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      //deleteBtn.onclick = deleteItem;
      // Iterate to the next item in the cursor
      //My way
      var obj = {
        'task': cursor.value.task,
        'section': cursor.value.section,
        'id': cursor.value.id
      };
      AllTasks.push(obj);
      cursor["continue"]();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message

      /*  if (!list.firstChild) {
           const listItem = document.createElement('li');
           listItem.textContent = 'No notes stored.';
           list.appendChild(listItem);
       } */
      // if there are no more cursor items to iterate through, say so
      console.log('Notes all displayed');
      setResult(AllTasks);
    }
  };
}

/***/ }),

/***/ "./src/components/useIDBTransaction.js":
/*!*********************************************!*\
  !*** ./src/components/useIDBTransaction.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIDBTransaction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIDBDisplayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIDBDisplayData */ "./src/components/useIDBDisplayData.js");


function useIDBTransaction(_ref) {
  var db = _ref.db,
      task = _ref.task,
      section = _ref.section,
      setResult = _ref.setResult;
  console.log('Entered useIDBTransaction');

  if (task.length < 1 || section.length < 1 || !db) {
    console.log('REcieved Empty VALUES');
  } // grab the values entered into the form fields and store them in an object ready for being inserted into the DB


  var newItem = {
    task: task,
    section: section
  }; // open a read/write db transaction, ready for adding the data

  var transaction = db.transaction(['todo_app'], 'readwrite'); // call an object store that's already been added to the database

  var objectStore = transaction.objectStore('todo_app'); // Make a request to add our newItem object to the object store

  var request = objectStore.add(newItem);

  request.onsuccess = function () {
    console.log('Success');
  }; // Report on the success of the transaction completing, when everything is done


  transaction.oncomplete = function () {
    console.log('Transaction completed: database modification finished.'); // update the display of data to show the newly added item, by running displayData() again.

    Object(_useIDBDisplayData__WEBPACK_IMPORTED_MODULE_1__["default"])({
      db: db,
      setResult: setResult
    });
  };

  transaction.onerror = function () {
    console.log('Transaction not opened due to error');
  };

  return 1;
}

/***/ }),

/***/ "./src/components/useIDBUpdateData.js":
/*!********************************************!*\
  !*** ./src/components/useIDBUpdateData.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIDBUpdateData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIDBDisplayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIDBDisplayData */ "./src/components/useIDBDisplayData.js");


function useIDBUpdateData(_ref) {
  var db = _ref.db,
      id = _ref.id,
      task = _ref.task,
      section = _ref.section,
      setResult = _ref.setResult;

  if (task.length < 1 || section.length < 1 || !db || !id) {
    console.log('Recieved Empty VALUES');
  } // grab the new values entered into the form fields and store them in an object ready for being inserted into the DB


  var newItem = {
    id: parseInt(id),
    task: task,
    section: section
  }; // open a read/write db transaction, ready for adding the data

  var transaction = db.transaction(['todo_app'], 'readwrite'); // call an object store that's already been added to the database

  var objectStore = transaction.objectStore('todo_app'); // Make a request to add our newItem object to the object store

  var request = objectStore.put(newItem);

  request.onsuccess = function () {
    console.log('Success editing');
  }; // Report on the success of the transaction completing, when everything is done


  transaction.oncomplete = function () {
    console.log('Transaction completed: databaseis updated finished.'); // update the display of data to show the newly added item, by running displayData() again.

    Object(_useIDBDisplayData__WEBPACK_IMPORTED_MODULE_1__["default"])({
      db: db,
      setResult: setResult
    });
  };

  transaction.onerror = function () {
    console.log('Transaction not opened due to error');
  };

  return 1;
}

/***/ }),

/***/ "./src/components/useIndexDB.js":
/*!**************************************!*\
  !*** ./src/components/useIndexDB.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIndexDB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function useIndexDB(_ref) {
  var name = _ref.name,
      setDB = _ref.setDB;
  var db;
  console.log('I am from useIndexDB ');
  var request = window.indexedDB.open(name, 1); // onerror

  request.onerror = function () {
    console.log("Database ".concat(name, " failed to open"));
  }; // onsuccess 


  request.onsuccess = function () {
    console.log("Database ".concat(name, " opened successfully"));
    db = request.result;
    console.log(_typeof(db));
    console.log(db);
    console.log(_typeof(setDB));
    setDB(db); // Run the displayData() function to display the notes already in the IDB
    //displayData();
  }; // Setup the database tables if this has not already been done


  request.onupgradeneeded = function (e) {
    // Grab a reference to the opened database
    var db = e.target.result; // Create an objectStore to store our notes in (basically like a single table)
    // including a auto-incrementing key

    var objectStore = db.createObjectStore(name, {
      keyPath: 'id',
      autoIncrement: true
    }); // Define what data items the objectStore will contain

    objectStore.createIndex('task', 'task', {
      unique: false
    });
    objectStore.createIndex('section', 'section', {
      unique: false
    });
    console.log('Database setup complete');
  };
}

/***/ }),

/***/ "./src/context/UserContext.js":
/*!************************************!*\
  !*** ./src/context/UserContext.js ***!
  \************************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/UserContext */ "./src/context/UserContext.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.js");
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Signup */ "./src/components/Signup.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Dashboard */ "./src/components/Dashboard.js");
/* harmony import */ var _components_GuestDashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/GuestDashboard */ "./src/components/GuestDashboard.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* Importing Css Files */



/* Importing Display Components */






var initialState = {
  'Login': false,
  'userId': 1,
  'userName': ''
};

var reducer = function reducer(state, action) {
  if (action.type === 'LOGIN') {
    var newState = {
      'Login': true
    };
    if (action.payload && action.payload.username) newState['userName'] = action.payload.username;
    return _objectSpread(_objectSpread({}, state), newState);
  }

  if (action.type === 'LOGOUT') {
    return _objectSpread(_objectSpread({}, state), {}, {
      'Login': false
    });
  }

  return state;
};

var App = function App() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"].Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, state.Login ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    from: "/",
    to: "/dashboard"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    from: "/",
    to: "/login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    state: state,
    dispatch: dispatch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/login",
    component: _components_Login__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/dashboard",
    component: state.userName !== 'Guest' ? _components_Dashboard__WEBPACK_IMPORTED_MODULE_9__["default"] : _components_GuestDashboard__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/signup",
    component: _components_Signup__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "*",
    component: _components_NotFound__WEBPACK_IMPORTED_MODULE_11__["default"]
  }))));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map