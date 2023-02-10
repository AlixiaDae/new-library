/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Library 3 am.otf */ "./src/Library 3 am.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./LibreBaskerville-Regular.ttf */ "./src/LibreBaskerville-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs//empty-shelf.jpg */ "./src/imgs/empty-shelf.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --base-color: rgb(136, 192, 209);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Library';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Baskerville';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\nbody {\r\n    margin: auto 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    background-color: var(--base-color);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 10px 40px 15px 40px;\r\n}\r\n\r\n.logo {\r\n    height: 130px;\r\n    width: 130px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Library';\r\n    font-size: 40px;\r\n    margin: 0;\r\n    margin-top: 15px;\r\n}\r\n\r\n.nav-bar {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 120px) 1fr 200px;\r\n    grid-template-rows: 50px;\r\n    padding: 5px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    justify-items: center;\r\n    align-items: center;\r\n    box-shadow: 0px -3px 4px rgb(65, 65, 65) inset;\r\n}\r\n\r\n.home-button, \r\n#add-button {\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-family: 'Library';\r\n    margin: 0;\r\n    font-size: 25px;\r\n}\r\n\r\n.home-button {\r\n    grid-area: 1/1;\r\n}\r\n\r\n#add-button {\r\n    grid-area: 1/4;\r\n    height: 90px;\r\n    width: 300px;\r\n    letter-spacing: -2px;\r\n}\r\n\r\n/* Form */\r\n\r\n.form-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: height 1s;\r\n}\r\n\r\nfieldset {\r\n    height: 250px;\r\n    width: 400px;\r\n    padding: 10px 30px 10px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\nlegend {\r\n    font-family: 'Library';\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\nfieldset > :nth-child(4) {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 100px);\r\n    grid-template-rows: repeat(2,1fr); \r\n    height: 50px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfieldset > :nth-child(4) > div {\r\n    grid-column: 1/ span 2;\r\n    text-align: center;\r\n    font-family: 'Baskerville';\r\n    font-size: 14px;\r\n}\r\n\r\n.read-wrapper, \r\n.unread-wrapper {\r\n    font-family: 'Baskerville';\r\n    font-size: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.unread-wrapper {\r\n    grid-area: 2/1;\r\n    margin: 0;\r\n}\r\n\r\n.read-wrapper {\r\n    grid-area: 2/2;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=radio] {\r\n    width: 20px;\r\n    height: 15px;\r\n    margin: 0;\r\n}\r\n\r\n#submit-book {\r\n    padding: 15px;\r\n    width: 150px;\r\n    font-family: 'Baskerville';\r\n    font-size: 15px;\r\n    color: whitesmoke;\r\n    background-color: #d50303;\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: -3px -3px #6e0101 inset;\r\n}\r\n\r\n.sub-header {\r\n    height: 490px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.shelf {\r\n    width: 85%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: repeat(11, 1fr);\r\n    row-gap: 50px;\r\n    padding: 5px;\r\n}\r\n\r\n.book-card {\r\n    background-color: antiquewhite;\r\n    padding: 10px;\r\n    font-family: 'Baskerville';\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-shadow: -5px 0px 15px rgb(142, 122, 97) inset;\r\n    position: relative;\r\n    align-items: center;\r\n}\r\n\r\n.book-card > :first-child {\r\n    font-size: 13px;\r\n}\r\n\r\n.book-card > :nth-child(2) {\r\n    font-size: 10px;\r\n}\r\n\r\n#remove-button {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 45px;\r\n    background-color: rgb(160, 18, 18);\r\n    border-radius: 10px;\r\n    color: whitesmoke;\r\n    border: none;\r\n}\r\n\r\n.footer {\r\n    background-color: var(--base-color);\r\n    height: 100px;\r\n}\r\n\r\n.home-button:hover,\r\n#add-button:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n#submit-book:hover {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #b80303;\r\n    box-shadow: -3px -3px #900000 inset;\r\n    text-decoration: underline;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,4CAAgC;AACpC;;AAEA;IACI,0BAA0B;IAC1B,4CAA0C;AAC9C;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,iDAAiD;IACjD,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;;IAEI,eAAe;IACf,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,iCAAiC;IACjC,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;;IAEI,0BAA0B;IAC1B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,SAAS;AACb;;AAEA;IACI,cAAc;IACd,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0BAA0B;IAC1B,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,yDAAgD;IAChD,sBAAsB;IACtB,2BAA2B;IAC3B,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,sCAAsC;IACtC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,iDAAiD;IACjD,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,kCAAkC;IAClC,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,aAAa;AACjB;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,mCAAmC;IACnC,0BAA0B;AAC9B","sourcesContent":[":root {\r\n    --base-color: rgb(136, 192, 209);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Library';\r\n    src: url('./Library\\ 3\\ am.otf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Baskerville';\r\n    src: url('./LibreBaskerville-Regular.ttf');\r\n}\r\n\r\nbody {\r\n    margin: auto 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    background-color: var(--base-color);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 10px 40px 15px 40px;\r\n}\r\n\r\n.logo {\r\n    height: 130px;\r\n    width: 130px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Library';\r\n    font-size: 40px;\r\n    margin: 0;\r\n    margin-top: 15px;\r\n}\r\n\r\n.nav-bar {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 120px) 1fr 200px;\r\n    grid-template-rows: 50px;\r\n    padding: 5px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    justify-items: center;\r\n    align-items: center;\r\n    box-shadow: 0px -3px 4px rgb(65, 65, 65) inset;\r\n}\r\n\r\n.home-button, \r\n#add-button {\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-family: 'Library';\r\n    margin: 0;\r\n    font-size: 25px;\r\n}\r\n\r\n.home-button {\r\n    grid-area: 1/1;\r\n}\r\n\r\n#add-button {\r\n    grid-area: 1/4;\r\n    height: 90px;\r\n    width: 300px;\r\n    letter-spacing: -2px;\r\n}\r\n\r\n/* Form */\r\n\r\n.form-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: height 1s;\r\n}\r\n\r\nfieldset {\r\n    height: 250px;\r\n    width: 400px;\r\n    padding: 10px 30px 10px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\nlegend {\r\n    font-family: 'Library';\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\nfieldset > :nth-child(4) {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 100px);\r\n    grid-template-rows: repeat(2,1fr); \r\n    height: 50px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfieldset > :nth-child(4) > div {\r\n    grid-column: 1/ span 2;\r\n    text-align: center;\r\n    font-family: 'Baskerville';\r\n    font-size: 14px;\r\n}\r\n\r\n.read-wrapper, \r\n.unread-wrapper {\r\n    font-family: 'Baskerville';\r\n    font-size: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.unread-wrapper {\r\n    grid-area: 2/1;\r\n    margin: 0;\r\n}\r\n\r\n.read-wrapper {\r\n    grid-area: 2/2;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=radio] {\r\n    width: 20px;\r\n    height: 15px;\r\n    margin: 0;\r\n}\r\n\r\n#submit-book {\r\n    padding: 15px;\r\n    width: 150px;\r\n    font-family: 'Baskerville';\r\n    font-size: 15px;\r\n    color: whitesmoke;\r\n    background-color: #d50303;\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: -3px -3px #6e0101 inset;\r\n}\r\n\r\n.sub-header {\r\n    height: 490px;\r\n    background-image: url('./imgs//empty-shelf.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.shelf {\r\n    width: 85%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: repeat(11, 1fr);\r\n    row-gap: 50px;\r\n    padding: 5px;\r\n}\r\n\r\n.book-card {\r\n    background-color: antiquewhite;\r\n    padding: 10px;\r\n    font-family: 'Baskerville';\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-shadow: -5px 0px 15px rgb(142, 122, 97) inset;\r\n    position: relative;\r\n    align-items: center;\r\n}\r\n\r\n.book-card > :first-child {\r\n    font-size: 13px;\r\n}\r\n\r\n.book-card > :nth-child(2) {\r\n    font-size: 10px;\r\n}\r\n\r\n#remove-button {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 45px;\r\n    background-color: rgb(160, 18, 18);\r\n    border-radius: 10px;\r\n    color: whitesmoke;\r\n    border: none;\r\n}\r\n\r\n.footer {\r\n    background-color: var(--base-color);\r\n    height: 100px;\r\n}\r\n\r\n.home-button:hover,\r\n#add-button:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n#submit-book:hover {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #b80303;\r\n    box-shadow: -3px -3px #900000 inset;\r\n    text-decoration: underline;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
class Book {
    constructor(title, author, isRead) {
        this.title = title
        this.author = author
        this.isRead = isRead
    }
}

/***/ }),

/***/ "./src/libraryModule.js":
/*!******************************!*\
  !*** ./src/libraryModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Library": () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/book.js");


class Library {
    constructor() {
        this.shelf = []
    }

    showBooks() {
        console.log(this.shelf.map(book => book.title))
    }

    addBook(newBook) {
        if(this.shelf.some(book => book.title === newBook.title)) {
            return 
        } else {
            this.shelf.push(newBook)
        }
    }

    removeBook(bookId) {
        let bookToBeRemoved = this.shelf.find(book => book.title == bookId)
        let bookIndex = this.shelf.indexOf(bookToBeRemoved)
        return this.shelf.splice(bookIndex, 1)
    }

}

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _imgs_book_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/book.png */ "./src/imgs/book.png");
/* harmony import */ var _libraryModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libraryModule */ "./src/libraryModule.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book */ "./src/book.js");





const mainPage = (() => {
    //header

    const header = document.createElement("div")
    header.classList.add("header")
    document.body.appendChild(header)

    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src = _imgs_book_png__WEBPACK_IMPORTED_MODULE_1__
    header.appendChild(logo)

    const libraryName = document.createElement("h1")
    libraryName.classList.add("library-name")
    libraryName.textContent = "Alexandria"
    header.appendChild(libraryName)

    //Nav bar
    const navBar = document.createElement("nav")
    navBar.classList.add("nav-bar")
    document.body.appendChild(navBar)

    const homeBtn = document.createElement("div")
    homeBtn.textContent = "Home"
    homeBtn.classList.add("home-button")
    navBar.appendChild(homeBtn)

    const addBookBtn = document.createElement("button")
    addBookBtn.textContent = "Add Book"
    addBookBtn.id = "add-button"
    navBar.appendChild(addBookBtn)

    //Add book form

    const formContainer = document.createElement("div")
    formContainer.classList.add("form-container")
    document.body.appendChild(formContainer)

    formContainer.style.height = "0px"

    function showBookForm() {
        if(formContainer.style.height == "0px") {
            formContainer.style.height = "285px"
        } else {
            formContainer.style.height = "0px"
        }
    }

    addBookBtn.addEventListener("click", showBookForm)
 
    const bookForm = document.createElement("form")
    bookForm.classList.add("book-form")
    formContainer.appendChild(bookForm)
 
    const bookField = document.createElement("fieldset")
    bookForm.appendChild(bookField)
 
    const addBookLegend = document.createElement("legend")
    addBookLegend.textContent = "Add a new book"
    bookField.appendChild(addBookLegend)
 
    const addBookTitleWrapper = document.createElement("div")
    bookField.appendChild(addBookTitleWrapper)
 
    const addBookTitleLabel = document.createElement("label")
    addBookTitleLabel.textContent = "Book Title:"
    addBookTitleLabel.setAttribute("for", "bTitle")
    addBookTitleWrapper.appendChild(addBookTitleLabel)
 
    const addBookTitleInput = document.createElement("input")
    addBookTitleInput.id = "bTitle"
    addBookTitleInput.name = "bTitle"
    addBookTitleWrapper.appendChild(addBookTitleInput)
 
    const addBookAuthorWrapper = document.createElement("div")
    bookField.appendChild(addBookAuthorWrapper)
 
    const addBookAuthorLabel = document.createElement("label")
    addBookAuthorLabel.textContent = "Book Author:"
    addBookAuthorLabel.setAttribute("for", "bAuthor")
    addBookAuthorWrapper.appendChild(addBookAuthorLabel)
 
    const addBookAuthorInput = document.createElement("input")
    addBookAuthorInput.id = "bAuthor"
    addBookAuthorInput.name = "bAuthor"
    addBookAuthorWrapper.appendChild(addBookAuthorInput)
 
    const addBookProgressWrapper = document.createElement("div")
    bookField.appendChild(addBookProgressWrapper)
 
    const addBookProgressWrapperLabel = document.createElement("div")
    addBookProgressWrapperLabel.textContent = "Read/Unread"
    addBookProgressWrapper.appendChild(addBookProgressWrapperLabel)
 
    const bookReadRadioWrapper = document.createElement("p")
    bookReadRadioWrapper.classList.add("read-wrapper")
    addBookProgressWrapper.appendChild(bookReadRadioWrapper)
 
    const bookReadRadio = document.createElement("input")
    bookReadRadio.type = "radio"
    bookReadRadio.id = "read"
    bookReadRadio.name = "bIsRead"
    bookReadRadio.value = true
    bookReadRadioWrapper.appendChild(bookReadRadio)
     
    const bookReadRadioLabel = document.createElement("label")
    bookReadRadioLabel.setAttribute("for", "bIsRead")
    bookReadRadioLabel.textContent = "Read"
    bookReadRadioWrapper.appendChild(bookReadRadioLabel)
 
    const bookUnreadRadioWrapper = document.createElement("p")
    bookUnreadRadioWrapper.classList.add("unread-wrapper")
    addBookProgressWrapper.appendChild(bookUnreadRadioWrapper)
 
   const bookUnreadRadio = document.createElement("input")
    bookUnreadRadio.type = "radio"
    bookUnreadRadio.id = "unread"
    bookUnreadRadio.name = "bIsRead"
    bookUnreadRadio.value = false
    bookUnreadRadioWrapper.appendChild(bookUnreadRadio)
     
    const bookUnreadRadioLabel = document.createElement("label")
    bookUnreadRadioLabel.setAttribute("for", "bIsRead")
    bookUnreadRadioLabel.textContent = "Unread"
    bookUnreadRadioWrapper.appendChild(bookUnreadRadioLabel)
 
   //book submit button
 
    const addBookSubmitButton = document.createElement("input")
    addBookSubmitButton.setAttribute("type", "submit")
    addBookSubmitButton.id = "submit-book"
    addBookSubmitButton.value = "Add to Library"
    bookField.appendChild(addBookSubmitButton)
 
    addBookSubmitButton.addEventListener("click", (e) => {
        e.preventDefault()
        const newBookTitle = document.getElementById("bTitle")
        const newBookAuthor = document.getElementById("bAuthor")
        const readBook = document.getElementById("read")
        const unreadBook = document.getElementById("unread")
        let bookProgress = ""
        if(readBook.checked) {
            bookProgress = true
        } else {
            bookProgress = false
        }
        const newBook = new _book__WEBPACK_IMPORTED_MODULE_3__.Book(newBookTitle.value, newBookAuthor.value, bookProgress)
        if(!newBookTitle.value) return
        library.addBook(newBook)
        library.showBooks()
        showBooks()
    })

    //Sub header
    const subHeader = document.createElement("div")
    subHeader.classList.add("sub-header")
    document.body.appendChild(subHeader)

    //footer 
    const footer = document.createElement("div")
    footer.classList.add("footer")
    document.body.appendChild(footer)

    //Shelf and BookCards

    let shelf = document.createElement("div")
    shelf.classList.add("shelf")
    subHeader.appendChild(shelf)

    let library = new _libraryModule__WEBPACK_IMPORTED_MODULE_2__.Library()
    let bookOne = new _book__WEBPACK_IMPORTED_MODULE_3__.Book("The Lion, The Witch, and the Wardrobe", "C.S. Lewis", true)
    let bookTwo = new _book__WEBPACK_IMPORTED_MODULE_3__.Book("Percy Jackson", "Rick Riordan", true)
    let bookThree = new _book__WEBPACK_IMPORTED_MODULE_3__.Book("Book of Human Skin", "Michelle Lovric", true)
    library.addBook(bookOne)
    library.addBook(bookTwo)
    library.addBook(bookThree)

    function showBooks() {
        shelf.innerHTML = ''
        for(let book of library.shelf) {
            createBookCard(shelf,book)
        }
    }

    function createBookCard(container, book) {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card")
        container.appendChild(bookCard)

        const bookTitle = document.createElement("p")
        bookTitle.textContent = book.title
        bookCard.appendChild(bookTitle)
        let bookId = book.title

        const bookAuthor = document.createElement("p")
        bookAuthor.textContent = book.author 
        bookCard.appendChild(bookAuthor)

        const removeBtn = document.createElement("button")
        removeBtn.textContent = 'x'
        removeBtn.id = 'remove-button'
        bookCard.appendChild(removeBtn)

        removeBtn.addEventListener("click", () => {
            bookCard.remove()
            library.removeBook(bookId)
        })
    }

    showBooks()

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);

/***/ }),

/***/ "./src/Library 3 am.otf":
/*!******************************!*\
  !*** ./src/Library 3 am.otf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11c2aa99e9602fab845a.otf";

/***/ }),

/***/ "./src/LibreBaskerville-Regular.ttf":
/*!******************************************!*\
  !*** ./src/LibreBaskerville-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "715e9cea90f54d5a4093.ttf";

/***/ }),

/***/ "./src/imgs/book.png":
/*!***************************!*\
  !*** ./src/imgs/book.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b195dc9ed025af924502.png";

/***/ }),

/***/ "./src/imgs/empty-shelf.jpg":
/*!**********************************!*\
  !*** ./src/imgs/empty-shelf.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26a5ea2f27c1dc23195e.jpg";

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
/******/ 			id: moduleId,
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage */ "./src/mainpage.js");


_mainpage__WEBPACK_IMPORTED_MODULE_0__["default"]
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm9CO0FBQ2tCO0FBQ0c7QUFDWjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkNBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsNEJBQTRCLHVDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0Isc0JBQXNCLHVDQUFJO0FBQzFCLHNCQUFzQix1Q0FBSTtBQUMxQix3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxTmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBa0M7QUFDbEM7QUFDQSxpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9ib29rLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbGlicmFyeU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL21haW5wYWdlLmpzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9MaWJyYXJ5IDMgYW0ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWdzLy9lbXB0eS1zaGVsZi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1iYXNlLWNvbG9yOiByZ2IoMTM2LCAxOTIsIDIwOSk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpYnJhcnknO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTVweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgIHdpZHRoOiAxMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpYnJhcnknO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMjBweCkgMWZyIDIwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggLTNweCA0cHggcmdiKDY1LCA2NSwgNjUpIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1idXR0b24sIFxcclxcbiNhZGQtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyYXJ5JztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogMS80O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyYXJ5JztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bm90KDpudGgtY2hpbGQoNCkpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCA+IDpudGgtY2hpbGQoNCkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTsgXFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpID4gZGl2IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvIHNwYW4gMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZC13cmFwcGVyLCBcXHJcXG4udW5yZWFkLXdyYXBwZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVucmVhZC13cmFwcGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWQtd3JhcHBlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8yO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJvb2sge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmFza2VydmlsbGUnO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUwMzAzO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCAjNmUwMTAxIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNDkwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoZWxmIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gICAgcm93LWdhcDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxNXB4IHJnYigxNDIsIDEyMiwgOTcpIGluc2V0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWNhcmQgPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWNhcmQgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVtb3ZlLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTgsIDE4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1idXR0b246aG92ZXIsXFxyXFxuI2FkZC1idXR0b246aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1ib29rOmhvdmVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4MDMwMztcXHJcXG4gICAgYm94LXNoYWRvdzogLTNweCAtM3B4ICM5MDAwMDAgaW5zZXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdz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QUNoQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQywwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJhc2UtY29sb3I6IHJnYigxMzYsIDE5MiwgMjA5KTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmFyeSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL0xpYnJhcnlcXFxcIDNcXFxcIGFtLm90ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogYXV0byAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDE1cHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyYXJ5JztcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTIwcHgpIDFmciAyMDBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggNHB4IHJnYig2NSwgNjUsIDY1KSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtYnV0dG9uLCBcXHJcXG4jYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmFyeSc7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IDEvMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IDEvNDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtICovXFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcztcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmFyeSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOm5vdCg6bnRoLWNoaWxkKDQpKSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTAwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7IFxcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOm50aC1jaGlsZCg0KSA+IGRpdiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWQtd3JhcHBlciwgXFxyXFxuLnVucmVhZC13cmFwcGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bnJlYWQtd3JhcHBlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWFkLXdyYXBwZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDIvMjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1ib29rIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDMwMztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggIzZlMDEwMSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDQ5MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy8vZW1wdHktc2hlbGYuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoZWxmIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gICAgcm93LWdhcDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxNXB4IHJnYigxNDIsIDEyMiwgOTcpIGluc2V0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWNhcmQgPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWNhcmQgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVtb3ZlLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTgsIDE4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1idXR0b246aG92ZXIsXFxyXFxuI2FkZC1idXR0b246aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1ib29rOmhvdmVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4MDMwMztcXHJcXG4gICAgYm94LXNoYWRvdzogLTNweCAtM3B4ICM5MDAwMDAgaW5zZXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIEJvb2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgaXNSZWFkKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3JcclxuICAgICAgICB0aGlzLmlzUmVhZCA9IGlzUmVhZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuL2Jvb2tcIlxyXG5cclxuZXhwb3J0IGNsYXNzIExpYnJhcnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zaGVsZiA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Jvb2tzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hlbGYubWFwKGJvb2sgPT4gYm9vay50aXRsZSkpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQm9vayhuZXdCb29rKSB7XHJcbiAgICAgICAgaWYodGhpcy5zaGVsZi5zb21lKGJvb2sgPT4gYm9vay50aXRsZSA9PT0gbmV3Qm9vay50aXRsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hlbGYucHVzaChuZXdCb29rKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVCb29rKGJvb2tJZCkge1xyXG4gICAgICAgIGxldCBib29rVG9CZVJlbW92ZWQgPSB0aGlzLnNoZWxmLmZpbmQoYm9vayA9PiBib29rLnRpdGxlID09IGJvb2tJZClcclxuICAgICAgICBsZXQgYm9va0luZGV4ID0gdGhpcy5zaGVsZi5pbmRleE9mKGJvb2tUb0JlUmVtb3ZlZClcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGVsZi5zcGxpY2UoYm9va0luZGV4LCAxKVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBib29rSWNvbiBmcm9tICcuL2ltZ3MvYm9vay5wbmcnXHJcbmltcG9ydCB7IExpYnJhcnkgfSBmcm9tICcuL2xpYnJhcnlNb2R1bGUnXHJcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2snXHJcblxyXG5jb25zdCBtYWluUGFnZSA9ICgoKSA9PiB7XHJcbiAgICAvL2hlYWRlclxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxyXG4gICAgbG9nby5zcmMgPSBib29rSWNvblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG4gICAgY29uc3QgbGlicmFyeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICAgIGxpYnJhcnlOYW1lLmNsYXNzTGlzdC5hZGQoXCJsaWJyYXJ5LW5hbWVcIilcclxuICAgIGxpYnJhcnlOYW1lLnRleHRDb250ZW50ID0gXCJBbGV4YW5kcmlhXCJcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaWJyYXJ5TmFtZSlcclxuXHJcbiAgICAvL05hdiBiYXJcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIilcclxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpXHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIlxyXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idXR0b25cIilcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnRuKVxyXG5cclxuICAgIGNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBhZGRCb29rQnRuLnRleHRDb250ZW50ID0gXCJBZGQgQm9va1wiXHJcbiAgICBhZGRCb29rQnRuLmlkID0gXCJhZGQtYnV0dG9uXCJcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChhZGRCb29rQnRuKVxyXG5cclxuICAgIC8vQWRkIGJvb2sgZm9ybVxyXG5cclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxyXG5cclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIlxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dCb29rRm9ybSgpIHtcclxuICAgICAgICBpZihmb3JtQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9PSBcIjBweFwiKSB7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIyODVweFwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dCb29rRm9ybSlcclxuIFxyXG4gICAgY29uc3QgYm9va0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gICAgYm9va0Zvcm0uY2xhc3NMaXN0LmFkZChcImJvb2stZm9ybVwiKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChib29rRm9ybSlcclxuIFxyXG4gICAgY29uc3QgYm9va0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXHJcbiAgICBib29rRm9ybS5hcHBlbmRDaGlsZChib29rRmllbGQpXHJcbiBcclxuICAgIGNvbnN0IGFkZEJvb2tMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpXHJcbiAgICBhZGRCb29rTGVnZW5kLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgYm9va1wiXHJcbiAgICBib29rRmllbGQuYXBwZW5kQ2hpbGQoYWRkQm9va0xlZ2VuZClcclxuIFxyXG4gICAgY29uc3QgYWRkQm9va1RpdGxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGJvb2tGaWVsZC5hcHBlbmRDaGlsZChhZGRCb29rVGl0bGVXcmFwcGVyKVxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgYWRkQm9va1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkJvb2sgVGl0bGU6XCJcclxuICAgIGFkZEJvb2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImJUaXRsZVwiKVxyXG4gICAgYWRkQm9va1RpdGxlV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCb29rVGl0bGVMYWJlbClcclxuIFxyXG4gICAgY29uc3QgYWRkQm9va1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGFkZEJvb2tUaXRsZUlucHV0LmlkID0gXCJiVGl0bGVcIlxyXG4gICAgYWRkQm9va1RpdGxlSW5wdXQubmFtZSA9IFwiYlRpdGxlXCJcclxuICAgIGFkZEJvb2tUaXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQm9va1RpdGxlSW5wdXQpXHJcbiBcclxuICAgIGNvbnN0IGFkZEJvb2tBdXRob3JXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYm9va0ZpZWxkLmFwcGVuZENoaWxkKGFkZEJvb2tBdXRob3JXcmFwcGVyKVxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rQXV0aG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGFkZEJvb2tBdXRob3JMYWJlbC50ZXh0Q29udGVudCA9IFwiQm9vayBBdXRob3I6XCJcclxuICAgIGFkZEJvb2tBdXRob3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJiQXV0aG9yXCIpXHJcbiAgICBhZGRCb29rQXV0aG9yV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCb29rQXV0aG9yTGFiZWwpXHJcbiBcclxuICAgIGNvbnN0IGFkZEJvb2tBdXRob3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgYWRkQm9va0F1dGhvcklucHV0LmlkID0gXCJiQXV0aG9yXCJcclxuICAgIGFkZEJvb2tBdXRob3JJbnB1dC5uYW1lID0gXCJiQXV0aG9yXCJcclxuICAgIGFkZEJvb2tBdXRob3JXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJvb2tBdXRob3JJbnB1dClcclxuIFxyXG4gICAgY29uc3QgYWRkQm9va1Byb2dyZXNzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGJvb2tGaWVsZC5hcHBlbmRDaGlsZChhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyKVxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyTGFiZWwudGV4dENvbnRlbnQgPSBcIlJlYWQvVW5yZWFkXCJcclxuICAgIGFkZEJvb2tQcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQm9va1Byb2dyZXNzV3JhcHBlckxhYmVsKVxyXG4gXHJcbiAgICBjb25zdCBib29rUmVhZFJhZGlvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBib29rUmVhZFJhZGlvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVhZC13cmFwcGVyXCIpXHJcbiAgICBhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKGJvb2tSZWFkUmFkaW9XcmFwcGVyKVxyXG4gXHJcbiAgICBjb25zdCBib29rUmVhZFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBib29rUmVhZFJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIGJvb2tSZWFkUmFkaW8uaWQgPSBcInJlYWRcIlxyXG4gICAgYm9va1JlYWRSYWRpby5uYW1lID0gXCJiSXNSZWFkXCJcclxuICAgIGJvb2tSZWFkUmFkaW8udmFsdWUgPSB0cnVlXHJcbiAgICBib29rUmVhZFJhZGlvV3JhcHBlci5hcHBlbmRDaGlsZChib29rUmVhZFJhZGlvKVxyXG4gICAgIFxyXG4gICAgY29uc3QgYm9va1JlYWRSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBib29rUmVhZFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYklzUmVhZFwiKVxyXG4gICAgYm9va1JlYWRSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJSZWFkXCJcclxuICAgIGJvb2tSZWFkUmFkaW9XcmFwcGVyLmFwcGVuZENoaWxkKGJvb2tSZWFkUmFkaW9MYWJlbClcclxuIFxyXG4gICAgY29uc3QgYm9va1VucmVhZFJhZGlvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBib29rVW5yZWFkUmFkaW9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ1bnJlYWQtd3JhcHBlclwiKVxyXG4gICAgYWRkQm9va1Byb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChib29rVW5yZWFkUmFkaW9XcmFwcGVyKVxyXG4gXHJcbiAgIGNvbnN0IGJvb2tVbnJlYWRSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgYm9va1VucmVhZFJhZGlvLnR5cGUgPSBcInJhZGlvXCJcclxuICAgIGJvb2tVbnJlYWRSYWRpby5pZCA9IFwidW5yZWFkXCJcclxuICAgIGJvb2tVbnJlYWRSYWRpby5uYW1lID0gXCJiSXNSZWFkXCJcclxuICAgIGJvb2tVbnJlYWRSYWRpby52YWx1ZSA9IGZhbHNlXHJcbiAgICBib29rVW5yZWFkUmFkaW9XcmFwcGVyLmFwcGVuZENoaWxkKGJvb2tVbnJlYWRSYWRpbylcclxuICAgICBcclxuICAgIGNvbnN0IGJvb2tVbnJlYWRSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBib29rVW5yZWFkUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJiSXNSZWFkXCIpXHJcbiAgICBib29rVW5yZWFkUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiVW5yZWFkXCJcclxuICAgIGJvb2tVbnJlYWRSYWRpb1dyYXBwZXIuYXBwZW5kQ2hpbGQoYm9va1VucmVhZFJhZGlvTGFiZWwpXHJcbiBcclxuICAgLy9ib29rIHN1Ym1pdCBidXR0b25cclxuIFxyXG4gICAgY29uc3QgYWRkQm9va1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgYWRkQm9va1N1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbiAgICBhZGRCb29rU3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXQtYm9va1wiXHJcbiAgICBhZGRCb29rU3VibWl0QnV0dG9uLnZhbHVlID0gXCJBZGQgdG8gTGlicmFyeVwiXHJcbiAgICBib29rRmllbGQuYXBwZW5kQ2hpbGQoYWRkQm9va1N1Ym1pdEJ1dHRvbilcclxuIFxyXG4gICAgYWRkQm9va1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCBuZXdCb29rVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJUaXRsZVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2tBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJBdXRob3JcIilcclxuICAgICAgICBjb25zdCByZWFkQm9vayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZFwiKVxyXG4gICAgICAgIGNvbnN0IHVucmVhZEJvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVucmVhZFwiKVxyXG4gICAgICAgIGxldCBib29rUHJvZ3Jlc3MgPSBcIlwiXHJcbiAgICAgICAgaWYocmVhZEJvb2suY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBib29rUHJvZ3Jlc3MgPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm9va1Byb2dyZXNzID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3Qm9vayA9IG5ldyBCb29rKG5ld0Jvb2tUaXRsZS52YWx1ZSwgbmV3Qm9va0F1dGhvci52YWx1ZSwgYm9va1Byb2dyZXNzKVxyXG4gICAgICAgIGlmKCFuZXdCb29rVGl0bGUudmFsdWUpIHJldHVyblxyXG4gICAgICAgIGxpYnJhcnkuYWRkQm9vayhuZXdCb29rKVxyXG4gICAgICAgIGxpYnJhcnkuc2hvd0Jvb2tzKClcclxuICAgICAgICBzaG93Qm9va3MoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvL1N1YiBoZWFkZXJcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHN1YkhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3ViLWhlYWRlclwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWJIZWFkZXIpXHJcblxyXG4gICAgLy9mb290ZXIgXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXHJcblxyXG4gICAgLy9TaGVsZiBhbmQgQm9va0NhcmRzXHJcblxyXG4gICAgbGV0IHNoZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc2hlbGYuY2xhc3NMaXN0LmFkZChcInNoZWxmXCIpXHJcbiAgICBzdWJIZWFkZXIuYXBwZW5kQ2hpbGQoc2hlbGYpXHJcblxyXG4gICAgbGV0IGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpXHJcbiAgICBsZXQgYm9va09uZSA9IG5ldyBCb29rKFwiVGhlIExpb24sIFRoZSBXaXRjaCwgYW5kIHRoZSBXYXJkcm9iZVwiLCBcIkMuUy4gTGV3aXNcIiwgdHJ1ZSlcclxuICAgIGxldCBib29rVHdvID0gbmV3IEJvb2soXCJQZXJjeSBKYWNrc29uXCIsIFwiUmljayBSaW9yZGFuXCIsIHRydWUpXHJcbiAgICBsZXQgYm9va1RocmVlID0gbmV3IEJvb2soXCJCb29rIG9mIEh1bWFuIFNraW5cIiwgXCJNaWNoZWxsZSBMb3ZyaWNcIiwgdHJ1ZSlcclxuICAgIGxpYnJhcnkuYWRkQm9vayhib29rT25lKVxyXG4gICAgbGlicmFyeS5hZGRCb29rKGJvb2tUd28pXHJcbiAgICBsaWJyYXJ5LmFkZEJvb2soYm9va1RocmVlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dCb29rcygpIHtcclxuICAgICAgICBzaGVsZi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGZvcihsZXQgYm9vayBvZiBsaWJyYXJ5LnNoZWxmKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUJvb2tDYXJkKHNoZWxmLGJvb2spXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvb2tDYXJkKGNvbnRhaW5lciwgYm9vaykge1xyXG4gICAgICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGJvb2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmRcIilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9va0NhcmQpXHJcblxyXG4gICAgICAgIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgYm9va1RpdGxlLnRleHRDb250ZW50ID0gYm9vay50aXRsZVxyXG4gICAgICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tUaXRsZSlcclxuICAgICAgICBsZXQgYm9va0lkID0gYm9vay50aXRsZVxyXG5cclxuICAgICAgICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBib29rQXV0aG9yLnRleHRDb250ZW50ID0gYm9vay5hdXRob3IgXHJcbiAgICAgICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0F1dGhvcilcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICd4J1xyXG4gICAgICAgIHJlbW92ZUJ0bi5pZCA9ICdyZW1vdmUtYnV0dG9uJ1xyXG4gICAgICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcclxuXHJcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvb2tDYXJkLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGxpYnJhcnkucmVtb3ZlQm9vayhib29rSWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9va3MoKVxyXG5cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpblBhZ2UiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuL21haW5wYWdlXCI7XHJcblxyXG5tYWluUGFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==