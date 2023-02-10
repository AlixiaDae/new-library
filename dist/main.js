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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --base-color: rgb(161, 207, 220);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Library';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Baskerville';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\nbody {\r\n    margin: auto 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    background-color: var(--base-color);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 10px 40px 15px 40px;\r\n}\r\n\r\n.logo {\r\n    height: 130px;\r\n    width: 130px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Library';\r\n    font-size: 40px;\r\n    margin: 0;\r\n    margin-top: 15px;\r\n}\r\n\r\n.nav-bar {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 120px) 1fr 200px;\r\n    grid-template-rows: 50px;\r\n    padding: 5px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    justify-items: center;\r\n    align-items: center;\r\n    box-shadow: 0px -3px 4px rgb(65, 65, 65) inset;\r\n}\r\n\r\n.home-button, \r\n#add-button {\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-family: 'Library';\r\n    margin: 0;\r\n    font-size: 25px;\r\n}\r\n\r\n.home-button {\r\n    grid-area: 1/1;\r\n}\r\n\r\n#add-button {\r\n    grid-area: 1/4;\r\n    height: 90px;\r\n    width: 300px;\r\n    letter-spacing: -2px;\r\n}\r\n\r\n/* Form */\r\n\r\n.form-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: height 1s;\r\n}\r\n\r\nfieldset {\r\n    height: 250px;\r\n    width: 400px;\r\n    padding: 10px 30px 10px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\nlegend {\r\n    font-family: 'Library';\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\nfieldset > :nth-child(4) {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 100px);\r\n    grid-template-rows: repeat(2,1fr); \r\n    height: 50px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfieldset > :nth-child(4) > div {\r\n    grid-column: 1/ span 2;\r\n    text-align: center;\r\n    font-family: 'Baskerville';\r\n    font-size: 14px;\r\n}\r\n\r\n.read-wrapper, \r\n.unread-wrapper {\r\n    font-family: 'Baskerville';\r\n    font-size: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.unread-wrapper {\r\n    grid-area: 2/1;\r\n    margin: 0;\r\n}\r\n\r\n.read-wrapper {\r\n    grid-area: 2/2;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=radio] {\r\n    width: 20px;\r\n    height: 15px;\r\n    margin: 0;\r\n}\r\n\r\n#submit-book {\r\n    padding: 15px;\r\n    width: 150px;\r\n    font-family: 'Baskerville';\r\n    font-size: 15px;\r\n    color: whitesmoke;\r\n    background-color: #d50303;\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: -3px -3px #6e0101 inset;\r\n}\r\n\r\n.sub-header {\r\n    height: 490px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.shelf {\r\n    width: 85%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: repeat(11, 1fr);\r\n    row-gap: 50px;\r\n    padding: 5px;\r\n}\r\n\r\n.book-card {\r\n    background-color: #AA5656;\r\n    padding: 10px;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-shadow: -10px 0px 8px 2px #6b3737 inset;\r\n    align-items: center;\r\n    justify-items: center;\r\n    display: grid;\r\n    grid-template-rows: 1fr 30px 20px;\r\n    font-family: 'Baskerville';\r\n    color: whitesmoke;\r\n}\r\n\r\n.book-card > :first-child {\r\n    font-size: 13px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.book-card > :nth-child(2) {\r\n    font-size: 10px;\r\n}\r\n\r\n#remove-button {\r\n    background-color: rgb(160, 18, 18);\r\n    border-radius: 10px;\r\n    color: whitesmoke;\r\n    border: none;\r\n    width: 20px;\r\n}\r\n\r\n.footer {\r\n    background-color: var(--base-color);\r\n    height: 100px;\r\n}\r\n\r\n.home-button:hover,\r\n#add-button:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n#submit-book:hover {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #b80303;\r\n    box-shadow: -3px -3px #900000 inset;\r\n    text-decoration: underline;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,4CAAgC;AACpC;;AAEA;IACI,0BAA0B;IAC1B,4CAA0C;AAC9C;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,iDAAiD;IACjD,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;;IAEI,eAAe;IACf,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,iCAAiC;IACjC,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;;IAEI,0BAA0B;IAC1B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,SAAS;AACb;;AAEA;IACI,cAAc;IACd,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0BAA0B;IAC1B,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,yDAAgD;IAChD,sBAAsB;IACtB,2BAA2B;IAC3B,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,sCAAsC;IACtC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,2CAA2C;IAC3C,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,iCAAiC;IACjC,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,aAAa;AACjB;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,mCAAmC;IACnC,0BAA0B;AAC9B","sourcesContent":[":root {\r\n    --base-color: rgb(161, 207, 220);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Library';\r\n    src: url('./Library\\ 3\\ am.otf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Baskerville';\r\n    src: url('./LibreBaskerville-Regular.ttf');\r\n}\r\n\r\nbody {\r\n    margin: auto 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    background-color: var(--base-color);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 10px 40px 15px 40px;\r\n}\r\n\r\n.logo {\r\n    height: 130px;\r\n    width: 130px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Library';\r\n    font-size: 40px;\r\n    margin: 0;\r\n    margin-top: 15px;\r\n}\r\n\r\n.nav-bar {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 120px) 1fr 200px;\r\n    grid-template-rows: 50px;\r\n    padding: 5px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    justify-items: center;\r\n    align-items: center;\r\n    box-shadow: 0px -3px 4px rgb(65, 65, 65) inset;\r\n}\r\n\r\n.home-button, \r\n#add-button {\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-family: 'Library';\r\n    margin: 0;\r\n    font-size: 25px;\r\n}\r\n\r\n.home-button {\r\n    grid-area: 1/1;\r\n}\r\n\r\n#add-button {\r\n    grid-area: 1/4;\r\n    height: 90px;\r\n    width: 300px;\r\n    letter-spacing: -2px;\r\n}\r\n\r\n/* Form */\r\n\r\n.form-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: height 1s;\r\n}\r\n\r\nfieldset {\r\n    height: 250px;\r\n    width: 400px;\r\n    padding: 10px 30px 10px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\nlegend {\r\n    font-family: 'Library';\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n}\r\n\r\nfieldset > :not(:nth-child(4)) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\nfieldset > :nth-child(4) {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 100px);\r\n    grid-template-rows: repeat(2,1fr); \r\n    height: 50px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfieldset > :nth-child(4) > div {\r\n    grid-column: 1/ span 2;\r\n    text-align: center;\r\n    font-family: 'Baskerville';\r\n    font-size: 14px;\r\n}\r\n\r\n.read-wrapper, \r\n.unread-wrapper {\r\n    font-family: 'Baskerville';\r\n    font-size: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.unread-wrapper {\r\n    grid-area: 2/1;\r\n    margin: 0;\r\n}\r\n\r\n.read-wrapper {\r\n    grid-area: 2/2;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=radio] {\r\n    width: 20px;\r\n    height: 15px;\r\n    margin: 0;\r\n}\r\n\r\n#submit-book {\r\n    padding: 15px;\r\n    width: 150px;\r\n    font-family: 'Baskerville';\r\n    font-size: 15px;\r\n    color: whitesmoke;\r\n    background-color: #d50303;\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: -3px -3px #6e0101 inset;\r\n}\r\n\r\n.sub-header {\r\n    height: 490px;\r\n    background-image: url('./imgs//empty-shelf.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.shelf {\r\n    width: 85%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: repeat(11, 1fr);\r\n    row-gap: 50px;\r\n    padding: 5px;\r\n}\r\n\r\n.book-card {\r\n    background-color: #AA5656;\r\n    padding: 10px;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-shadow: -10px 0px 8px 2px #6b3737 inset;\r\n    align-items: center;\r\n    justify-items: center;\r\n    display: grid;\r\n    grid-template-rows: 1fr 30px 20px;\r\n    font-family: 'Baskerville';\r\n    color: whitesmoke;\r\n}\r\n\r\n.book-card > :first-child {\r\n    font-size: 13px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.book-card > :nth-child(2) {\r\n    font-size: 10px;\r\n}\r\n\r\n#remove-button {\r\n    background-color: rgb(160, 18, 18);\r\n    border-radius: 10px;\r\n    color: whitesmoke;\r\n    border: none;\r\n    width: 20px;\r\n}\r\n\r\n.footer {\r\n    background-color: var(--base-color);\r\n    height: 100px;\r\n}\r\n\r\n.home-button:hover,\r\n#add-button:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n#submit-book:hover {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    background-color: #b80303;\r\n    box-shadow: -3px -3px #900000 inset;\r\n    text-decoration: underline;\r\n}"],"sourceRoot":""}]);
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
        saveToLocal()
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

    function populateLibrary() {
        let bookOne = new _book__WEBPACK_IMPORTED_MODULE_3__.Book("The Lion, The Witch, and the Wardrobe", "C.S. Lewis", true)
        let bookTwo = new _book__WEBPACK_IMPORTED_MODULE_3__.Book("Percy Jackson", "Rick Riordan", true)
        let bookThree = new _book__WEBPACK_IMPORTED_MODULE_3__.Book("Book of Human Skin", "Michelle Lovric", true)
        library.addBook(bookOne)
        library.addBook(bookTwo)
        library.addBook(bookThree)
        saveToLocal()
    }

    function showBooks() {
        shelf.innerHTML = ''
        for(let book of JSON.parse(localStorage.getItem("myLibrary"))) {
            createBookCard(shelf, book)
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
            saveToLocal()
        })

        /* Book api not currently in use for covers
        let titleArray = bookId.split(" ")
        let titleString = ''
        for(let i = 0; i < titleArray.length; i++){
            titleString += titleArray[i] + "+"
        }
        let bookSearchIndex = Array.from(titleString).slice(0, titleString.length - 1).join("").toLowerCase()
        console.log(bookSearchIndex) 
        */
    }

    // Local Storage

    const saveToLocal = () => {
        localStorage.setItem("myLibrary", JSON.stringify(library.shelf))
    }

    populateLibrary()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQzdCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCb0I7QUFDa0I7QUFDRztBQUNaO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQ0FBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFPO0FBQzdCO0FBQ0E7QUFDQSwwQkFBMEIsdUNBQUk7QUFDOUIsMEJBQTBCLHVDQUFJO0FBQzlCLDRCQUE0Qix1Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqUGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBa0M7QUFDbEM7QUFDQSxpREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9ib29rLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbGlicmFyeU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL21haW5wYWdlLmpzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9MaWJyYXJ5IDMgYW0ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWdzLy9lbXB0eS1zaGVsZi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1iYXNlLWNvbG9yOiByZ2IoMTYxLCAyMDcsIDIyMCk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpYnJhcnknO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTVweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgIHdpZHRoOiAxMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xpYnJhcnknO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMjBweCkgMWZyIDIwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggLTNweCA0cHggcmdiKDY1LCA2NSwgNjUpIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1idXR0b24sIFxcclxcbiNhZGQtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyYXJ5JztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogMS8xO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogMS80O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyYXJ5JztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bm90KDpudGgtY2hpbGQoNCkpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCA+IDpudGgtY2hpbGQoNCkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTsgXFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpID4gZGl2IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvIHNwYW4gMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZC13cmFwcGVyLCBcXHJcXG4udW5yZWFkLXdyYXBwZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVucmVhZC13cmFwcGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWQtd3JhcHBlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8yO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJvb2sge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmFza2VydmlsbGUnO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUwMzAzO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCAjNmUwMTAxIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNDkwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoZWxmIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gICAgcm93LWdhcDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBNTY1NjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAtMTBweCAwcHggOHB4IDJweCAjNmIzNzM3IGluc2V0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDMwcHggMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1jYXJkID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWNhcmQgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVtb3ZlLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE4LCAxOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJ1dHRvbjpob3ZlcixcXHJcXG4jYWRkLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJvb2s6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgwMzAzO1xcclxcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggIzkwMDAwMCBpbnNldDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7O0lBRUksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlEQUFnRDtJQUNoRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQywwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJhc2UtY29sb3I6IHJnYigxNjEsIDIwNywgMjIwKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmFyeSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL0xpYnJhcnlcXFxcIDNcXFxcIGFtLm90ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogYXV0byAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDE1cHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyYXJ5JztcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTIwcHgpIDFmciAyMDBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggNHB4IHJnYig2NSwgNjUsIDY1KSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtYnV0dG9uLCBcXHJcXG4jYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmFyeSc7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IDEvMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IDEvNDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtICovXFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcztcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmFyeSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOm5vdCg6bnRoLWNoaWxkKDQpKSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQgPiA6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTAwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7IFxcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0ID4gOm50aC1jaGlsZCg0KSA+IGRpdiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWQtd3JhcHBlciwgXFxyXFxuLnVucmVhZC13cmFwcGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bnJlYWQtd3JhcHBlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWFkLXdyYXBwZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDIvMjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1ib29rIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhc2tlcnZpbGxlJztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDMwMztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggIzZlMDEwMSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDQ5MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy8vZW1wdHktc2hlbGYuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoZWxmIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gICAgcm93LWdhcDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBNTY1NjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAtMTBweCAwcHggOHB4IDJweCAjNmIzNzM3IGluc2V0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDMwcHggMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2aWxsZSc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1jYXJkID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWNhcmQgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVtb3ZlLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE4LCAxOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJ1dHRvbjpob3ZlcixcXHJcXG4jYWRkLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJvb2s6aG92ZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgwMzAzO1xcclxcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggIzkwMDAwMCBpbnNldDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgQm9vayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCBpc1JlYWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvclxyXG4gICAgICAgIHRoaXMuaXNSZWFkID0gaXNSZWFkXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vYm9va1wiXHJcblxyXG5leHBvcnQgY2xhc3MgTGlicmFyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNoZWxmID0gW11cclxuICAgIH1cclxuXHJcbiAgICBzaG93Qm9va3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGVsZi5tYXAoYm9vayA9PiBib29rLnRpdGxlKSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRCb29rKG5ld0Jvb2spIHtcclxuICAgICAgICBpZih0aGlzLnNoZWxmLnNvbWUoYm9vayA9PiBib29rLnRpdGxlID09PSBuZXdCb29rLnRpdGxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaGVsZi5wdXNoKG5ld0Jvb2spXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJvb2soYm9va0lkKSB7XHJcbiAgICAgICAgbGV0IGJvb2tUb0JlUmVtb3ZlZCA9IHRoaXMuc2hlbGYuZmluZChib29rID0+IGJvb2sudGl0bGUgPT0gYm9va0lkKVxyXG4gICAgICAgIGxldCBib29rSW5kZXggPSB0aGlzLnNoZWxmLmluZGV4T2YoYm9va1RvQmVSZW1vdmVkKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNoZWxmLnNwbGljZShib29rSW5kZXgsIDEpXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IGJvb2tJY29uIGZyb20gJy4vaW1ncy9ib29rLnBuZydcclxuaW1wb3J0IHsgTGlicmFyeSB9IGZyb20gJy4vbGlicmFyeU1vZHVsZSdcclxuaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vaydcclxuXHJcbmNvbnN0IG1haW5QYWdlID0gKCgpID0+IHtcclxuICAgIC8vaGVhZGVyXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpXHJcbiAgICBsb2dvLnNyYyA9IGJvb2tJY29uXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcclxuXHJcbiAgICBjb25zdCBsaWJyYXJ5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgbGlicmFyeU5hbWUuY2xhc3NMaXN0LmFkZChcImxpYnJhcnktbmFtZVwiKVxyXG4gICAgbGlicmFyeU5hbWUudGV4dENvbnRlbnQgPSBcIkFsZXhhbmRyaWFcIlxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpYnJhcnlOYW1lKVxyXG5cclxuICAgIC8vTmF2IGJhclxyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdkJhcilcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiXHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJob21lLWJ1dHRvblwiKVxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pXHJcblxyXG4gICAgY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGFkZEJvb2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBCb29rXCJcclxuICAgIGFkZEJvb2tCdG4uaWQgPSBcImFkZC1idXR0b25cIlxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGFkZEJvb2tCdG4pXHJcblxyXG4gICAgLy9BZGQgYm9vayBmb3JtXHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpXHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjBweFwiXHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0Jvb2tGb3JtKCkge1xyXG4gICAgICAgIGlmKGZvcm1Db250YWluZXIuc3R5bGUuaGVpZ2h0ID09IFwiMHB4XCIpIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjI4NXB4XCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Jvb2tGb3JtKVxyXG4gXHJcbiAgICBjb25zdCBib29rRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBib29rRm9ybS5jbGFzc0xpc3QuYWRkKFwiYm9vay1mb3JtXCIpXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvb2tGb3JtKVxyXG4gXHJcbiAgICBjb25zdCBib29rRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcclxuICAgIGJvb2tGb3JtLmFwcGVuZENoaWxkKGJvb2tGaWVsZClcclxuIFxyXG4gICAgY29uc3QgYWRkQm9va0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIilcclxuICAgIGFkZEJvb2tMZWdlbmQudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBib29rXCJcclxuICAgIGJvb2tGaWVsZC5hcHBlbmRDaGlsZChhZGRCb29rTGVnZW5kKVxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYm9va0ZpZWxkLmFwcGVuZENoaWxkKGFkZEJvb2tUaXRsZVdyYXBwZXIpXHJcbiBcclxuICAgIGNvbnN0IGFkZEJvb2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBhZGRCb29rVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQm9vayBUaXRsZTpcIlxyXG4gICAgYWRkQm9va1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYlRpdGxlXCIpXHJcbiAgICBhZGRCb29rVGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJvb2tUaXRsZUxhYmVsKVxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgYWRkQm9va1RpdGxlSW5wdXQuaWQgPSBcImJUaXRsZVwiXHJcbiAgICBhZGRCb29rVGl0bGVJbnB1dC5uYW1lID0gXCJiVGl0bGVcIlxyXG4gICAgYWRkQm9va1RpdGxlV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCb29rVGl0bGVJbnB1dClcclxuIFxyXG4gICAgY29uc3QgYWRkQm9va0F1dGhvcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBib29rRmllbGQuYXBwZW5kQ2hpbGQoYWRkQm9va0F1dGhvcldyYXBwZXIpXHJcbiBcclxuICAgIGNvbnN0IGFkZEJvb2tBdXRob3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgYWRkQm9va0F1dGhvckxhYmVsLnRleHRDb250ZW50ID0gXCJCb29rIEF1dGhvcjpcIlxyXG4gICAgYWRkQm9va0F1dGhvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImJBdXRob3JcIilcclxuICAgIGFkZEJvb2tBdXRob3JXcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJvb2tBdXRob3JMYWJlbClcclxuIFxyXG4gICAgY29uc3QgYWRkQm9va0F1dGhvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBhZGRCb29rQXV0aG9ySW5wdXQuaWQgPSBcImJBdXRob3JcIlxyXG4gICAgYWRkQm9va0F1dGhvcklucHV0Lm5hbWUgPSBcImJBdXRob3JcIlxyXG4gICAgYWRkQm9va0F1dGhvcldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQm9va0F1dGhvcklucHV0KVxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYm9va0ZpZWxkLmFwcGVuZENoaWxkKGFkZEJvb2tQcm9ncmVzc1dyYXBwZXIpXHJcbiBcclxuICAgIGNvbnN0IGFkZEJvb2tQcm9ncmVzc1dyYXBwZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGFkZEJvb2tQcm9ncmVzc1dyYXBwZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiUmVhZC9VbnJlYWRcIlxyXG4gICAgYWRkQm9va1Byb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyTGFiZWwpXHJcbiBcclxuICAgIGNvbnN0IGJvb2tSZWFkUmFkaW9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGJvb2tSZWFkUmFkaW9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWFkLXdyYXBwZXJcIilcclxuICAgIGFkZEJvb2tQcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQoYm9va1JlYWRSYWRpb1dyYXBwZXIpXHJcbiBcclxuICAgIGNvbnN0IGJvb2tSZWFkUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGJvb2tSZWFkUmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgYm9va1JlYWRSYWRpby5pZCA9IFwicmVhZFwiXHJcbiAgICBib29rUmVhZFJhZGlvLm5hbWUgPSBcImJJc1JlYWRcIlxyXG4gICAgYm9va1JlYWRSYWRpby52YWx1ZSA9IHRydWVcclxuICAgIGJvb2tSZWFkUmFkaW9XcmFwcGVyLmFwcGVuZENoaWxkKGJvb2tSZWFkUmFkaW8pXHJcbiAgICAgXHJcbiAgICBjb25zdCBib29rUmVhZFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGJvb2tSZWFkUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJiSXNSZWFkXCIpXHJcbiAgICBib29rUmVhZFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlJlYWRcIlxyXG4gICAgYm9va1JlYWRSYWRpb1dyYXBwZXIuYXBwZW5kQ2hpbGQoYm9va1JlYWRSYWRpb0xhYmVsKVxyXG4gXHJcbiAgICBjb25zdCBib29rVW5yZWFkUmFkaW9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIGJvb2tVbnJlYWRSYWRpb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInVucmVhZC13cmFwcGVyXCIpXHJcbiAgICBhZGRCb29rUHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKGJvb2tVbnJlYWRSYWRpb1dyYXBwZXIpXHJcbiBcclxuICAgY29uc3QgYm9va1VucmVhZFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBib29rVW5yZWFkUmFkaW8udHlwZSA9IFwicmFkaW9cIlxyXG4gICAgYm9va1VucmVhZFJhZGlvLmlkID0gXCJ1bnJlYWRcIlxyXG4gICAgYm9va1VucmVhZFJhZGlvLm5hbWUgPSBcImJJc1JlYWRcIlxyXG4gICAgYm9va1VucmVhZFJhZGlvLnZhbHVlID0gZmFsc2VcclxuICAgIGJvb2tVbnJlYWRSYWRpb1dyYXBwZXIuYXBwZW5kQ2hpbGQoYm9va1VucmVhZFJhZGlvKVxyXG4gICAgIFxyXG4gICAgY29uc3QgYm9va1VucmVhZFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIGJvb2tVbnJlYWRSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImJJc1JlYWRcIilcclxuICAgIGJvb2tVbnJlYWRSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJVbnJlYWRcIlxyXG4gICAgYm9va1VucmVhZFJhZGlvV3JhcHBlci5hcHBlbmRDaGlsZChib29rVW5yZWFkUmFkaW9MYWJlbClcclxuIFxyXG4gICAvL2Jvb2sgc3VibWl0IGJ1dHRvblxyXG4gXHJcbiAgICBjb25zdCBhZGRCb29rU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBhZGRCb29rU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICAgIGFkZEJvb2tTdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdC1ib29rXCJcclxuICAgIGFkZEJvb2tTdWJtaXRCdXR0b24udmFsdWUgPSBcIkFkZCB0byBMaWJyYXJ5XCJcclxuICAgIGJvb2tGaWVsZC5hcHBlbmRDaGlsZChhZGRCb29rU3VibWl0QnV0dG9uKVxyXG4gXHJcbiAgICBhZGRCb29rU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYlRpdGxlXCIpXHJcbiAgICAgICAgY29uc3QgbmV3Qm9va0F1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYkF1dGhvclwiKVxyXG4gICAgICAgIGNvbnN0IHJlYWRCb29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkXCIpXHJcbiAgICAgICAgY29uc3QgdW5yZWFkQm9vayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5yZWFkXCIpXHJcbiAgICAgICAgbGV0IGJvb2tQcm9ncmVzcyA9IFwiXCJcclxuICAgICAgICBpZihyZWFkQm9vay5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGJvb2tQcm9ncmVzcyA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib29rUHJvZ3Jlc3MgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdCb29rID0gbmV3IEJvb2sobmV3Qm9va1RpdGxlLnZhbHVlLCBuZXdCb29rQXV0aG9yLnZhbHVlLCBib29rUHJvZ3Jlc3MpXHJcbiAgICAgICAgaWYoIW5ld0Jvb2tUaXRsZS52YWx1ZSkgcmV0dXJuXHJcbiAgICAgICAgbGlicmFyeS5hZGRCb29rKG5ld0Jvb2spXHJcbiAgICAgICAgc2F2ZVRvTG9jYWwoKVxyXG4gICAgICAgIGxpYnJhcnkuc2hvd0Jvb2tzKClcclxuICAgICAgICBzaG93Qm9va3MoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvL1N1YiBoZWFkZXJcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHN1YkhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3ViLWhlYWRlclwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWJIZWFkZXIpXHJcblxyXG4gICAgLy9mb290ZXIgXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXHJcblxyXG4gICAgLy9TaGVsZiBhbmQgQm9va0NhcmRzXHJcblxyXG4gICAgbGV0IHNoZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc2hlbGYuY2xhc3NMaXN0LmFkZChcInNoZWxmXCIpXHJcbiAgICBzdWJIZWFkZXIuYXBwZW5kQ2hpbGQoc2hlbGYpXHJcblxyXG4gICAgbGV0IGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpXHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVMaWJyYXJ5KCkge1xyXG4gICAgICAgIGxldCBib29rT25lID0gbmV3IEJvb2soXCJUaGUgTGlvbiwgVGhlIFdpdGNoLCBhbmQgdGhlIFdhcmRyb2JlXCIsIFwiQy5TLiBMZXdpc1wiLCB0cnVlKVxyXG4gICAgICAgIGxldCBib29rVHdvID0gbmV3IEJvb2soXCJQZXJjeSBKYWNrc29uXCIsIFwiUmljayBSaW9yZGFuXCIsIHRydWUpXHJcbiAgICAgICAgbGV0IGJvb2tUaHJlZSA9IG5ldyBCb29rKFwiQm9vayBvZiBIdW1hbiBTa2luXCIsIFwiTWljaGVsbGUgTG92cmljXCIsIHRydWUpXHJcbiAgICAgICAgbGlicmFyeS5hZGRCb29rKGJvb2tPbmUpXHJcbiAgICAgICAgbGlicmFyeS5hZGRCb29rKGJvb2tUd28pXHJcbiAgICAgICAgbGlicmFyeS5hZGRCb29rKGJvb2tUaHJlZSlcclxuICAgICAgICBzYXZlVG9Mb2NhbCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0Jvb2tzKCkge1xyXG4gICAgICAgIHNoZWxmLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgZm9yKGxldCBib29rIG9mIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUxpYnJhcnlcIikpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUJvb2tDYXJkKHNoZWxmLCBib29rKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCb29rQ2FyZChjb250YWluZXIsIGJvb2spIHtcclxuICAgICAgICBjb25zdCBib29rQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBib29rQ2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkXCIpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvb2tDYXJkKVxyXG5cclxuICAgICAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIGJvb2tUaXRsZS50ZXh0Q29udGVudCA9IGJvb2sudGl0bGVcclxuICAgICAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rVGl0bGUpXHJcbiAgICAgICAgbGV0IGJvb2tJZCA9IGJvb2sudGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgYm9va0F1dGhvci50ZXh0Q29udGVudCA9IGJvb2suYXV0aG9yIFxyXG4gICAgICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tBdXRob3IpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAneCdcclxuICAgICAgICByZW1vdmVCdG4uaWQgPSAncmVtb3ZlLWJ1dHRvbidcclxuICAgICAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXHJcblxyXG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBib29rQ2FyZC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBsaWJyYXJ5LnJlbW92ZUJvb2soYm9va0lkKVxyXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogQm9vayBhcGkgbm90IGN1cnJlbnRseSBpbiB1c2UgZm9yIGNvdmVyc1xyXG4gICAgICAgIGxldCB0aXRsZUFycmF5ID0gYm9va0lkLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgIGxldCB0aXRsZVN0cmluZyA9ICcnXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpdGxlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aXRsZVN0cmluZyArPSB0aXRsZUFycmF5W2ldICsgXCIrXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJvb2tTZWFyY2hJbmRleCA9IEFycmF5LmZyb20odGl0bGVTdHJpbmcpLnNsaWNlKDAsIHRpdGxlU3RyaW5nLmxlbmd0aCAtIDEpLmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvb2tTZWFyY2hJbmRleCkgXHJcbiAgICAgICAgKi9cclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2NhbCBTdG9yYWdlXHJcblxyXG4gICAgY29uc3Qgc2F2ZVRvTG9jYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteUxpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkobGlicmFyeS5zaGVsZikpXHJcbiAgICB9XHJcblxyXG4gICAgcG9wdWxhdGVMaWJyYXJ5KClcclxuICAgIHNob3dCb29rcygpXHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluUGFnZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbWFpblBhZ2UgZnJvbSBcIi4vbWFpbnBhZ2VcIjtcclxuXHJcbm1haW5QYWdlXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==