"use strict";
(self["webpackChunkpersonal_vanilla"] = self["webpackChunkpersonal_vanilla"] || []).push([["index"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  top: 0px;\r\n  right: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  height: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: inherit;\r\n  color: inherit;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n/* ---------------- COLOR PALETTE ---------------- */\r\n:root {\r\n  --cream: #dcc9b6;\r\n  --light-brown: #a39171;\r\n  --brown: #6d4c3d;\r\n  --green: #abc4ab;\r\n  --greyeen: #727d71;\r\n}\r\n\r\n/* ---------------- MAIN STYLES ---------------- */\r\n\r\nmain {\r\n  display: flex;\r\n  min-height: calc(100vh - 3rem);\r\n  position: relative;\r\n  padding-top: 3rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.main-article {\r\n  width: max(75%, calc(100vw - 13rem));\r\n}\r\n\r\nmain article section:first-child {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\nmain aside {\r\n  width: min(25%, 13rem);\r\n}\r\n\r\n/* ---------------- ASSIDE COFFEE STYLES ---------------- */\r\n\r\n#aside-coffee {\r\n  margin: 1.7rem 1.5rem;\r\n}\r\n\r\n#aside-coffee h3 {\r\n  text-align: center;\r\n}\r\n\r\n#aside-coffee p {\r\n  margin: 0.6rem 0;\r\n}\r\n\r\n#aside-coffee section {\r\n  margin: 1rem 0;\r\n}\r\n\r\n#aside-coffee article button {\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: var(--greyeen);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#aside-coffee article button:hover {\r\n  cursor: pointer;\r\n  background-color: var(--green);\r\n  color: black;\r\n}\r\n\r\n/* ---------------- HEADER STYLES ---------------- */\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--brown);\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.header-nav {\r\n  display: flex;\r\n  height: 3rem;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.header-nav ul {\r\n  display: flex;\r\n}\r\n\r\n.header-nav a {\r\n  color: var(--cream);\r\n  font-size: 1.4rem;\r\n  padding: 1rem;\r\n  margin: auto 1rem;\r\n}\r\n\r\n.header-nav a:hover {\r\n  color: var(--brown);\r\n  background-color: var(--cream);\r\n}\r\n\r\n/* ---------------- FOOTER STYLES ---------------- */\r\n\r\nfooter {\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 3rem;\r\n  background: var(--brown);\r\n}\r\n\r\nfooter h3 {\r\n  color: var(--cream);\r\n}\r\n\r\n/* ---------------- COFFEE CARD STYLES ---------------- */\r\n\r\n.coffee-card {\r\n  width: max(22rem, 45%);\r\n  height: 13.1rem;\r\n  display: flex;\r\n  border: solid 1px green;\r\n  margin: 1rem 0;\r\n  overflow: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 1040px) {\r\n  .coffee-card {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n.coffee-card section {\r\n  max-width: 60%;\r\n  margin: 1rem;\r\n}\r\n\r\n.coffee-card section h3 {\r\n  margin-bottom: 0.5rem;\r\n  font-size: clamp(1.2rem, 1.5vw, 1.4rem);\r\n}\r\n\r\n.coffee-card section p {\r\n  font-size: clamp(0.9rem, 1.5vw, 1.05rem);\r\n}\r\n\r\n.coffee-card img {\r\n  width: 13rem;\r\n  height: 13rem;\r\n  object-fit: cover;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,SAAS;EACT,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,oDAAoD;AACpD;EACE,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,kDAAkD;;AAElD;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;AACxB;;AAEA,2DAA2D;;AAE3D;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,YAAY;AACd;;AAEA,oDAAoD;;AAEpD;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,eAAe;EACf,WAAW;EACX,MAAM;EACN,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA,oDAAoD;;AAEpD;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA,yDAAyD;;AAEzD;EACE,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  top: 0px;\r\n  right: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  height: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: inherit;\r\n  color: inherit;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n/* ---------------- COLOR PALETTE ---------------- */\r\n:root {\r\n  --cream: #dcc9b6;\r\n  --light-brown: #a39171;\r\n  --brown: #6d4c3d;\r\n  --green: #abc4ab;\r\n  --greyeen: #727d71;\r\n}\r\n\r\n/* ---------------- MAIN STYLES ---------------- */\r\n\r\nmain {\r\n  display: flex;\r\n  min-height: calc(100vh - 3rem);\r\n  position: relative;\r\n  padding-top: 3rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.main-article {\r\n  width: max(75%, calc(100vw - 13rem));\r\n}\r\n\r\nmain article section:first-child {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\nmain aside {\r\n  width: min(25%, 13rem);\r\n}\r\n\r\n/* ---------------- ASSIDE COFFEE STYLES ---------------- */\r\n\r\n#aside-coffee {\r\n  margin: 1.7rem 1.5rem;\r\n}\r\n\r\n#aside-coffee h3 {\r\n  text-align: center;\r\n}\r\n\r\n#aside-coffee p {\r\n  margin: 0.6rem 0;\r\n}\r\n\r\n#aside-coffee section {\r\n  margin: 1rem 0;\r\n}\r\n\r\n#aside-coffee article button {\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: var(--greyeen);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#aside-coffee article button:hover {\r\n  cursor: pointer;\r\n  background-color: var(--green);\r\n  color: black;\r\n}\r\n\r\n/* ---------------- HEADER STYLES ---------------- */\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--brown);\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.header-nav {\r\n  display: flex;\r\n  height: 3rem;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.header-nav ul {\r\n  display: flex;\r\n}\r\n\r\n.header-nav a {\r\n  color: var(--cream);\r\n  font-size: 1.4rem;\r\n  padding: 1rem;\r\n  margin: auto 1rem;\r\n}\r\n\r\n.header-nav a:hover {\r\n  color: var(--brown);\r\n  background-color: var(--cream);\r\n}\r\n\r\n/* ---------------- FOOTER STYLES ---------------- */\r\n\r\nfooter {\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 3rem;\r\n  background: var(--brown);\r\n}\r\n\r\nfooter h3 {\r\n  color: var(--cream);\r\n}\r\n\r\n/* ---------------- COFFEE CARD STYLES ---------------- */\r\n\r\n.coffee-card {\r\n  width: max(22rem, 45%);\r\n  height: 13.1rem;\r\n  display: flex;\r\n  border: solid 1px green;\r\n  margin: 1rem 0;\r\n  overflow: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 1040px) {\r\n  .coffee-card {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n.coffee-card section {\r\n  max-width: 60%;\r\n  margin: 1rem;\r\n}\r\n\r\n.coffee-card section h3 {\r\n  margin-bottom: 0.5rem;\r\n  font-size: clamp(1.2rem, 1.5vw, 1.4rem);\r\n}\r\n\r\n.coffee-card section p {\r\n  font-size: clamp(0.9rem, 1.5vw, 1.05rem);\r\n}\r\n\r\n.coffee-card img {\r\n  width: 13rem;\r\n  height: 13rem;\r\n  object-fit: cover;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/components/asideCoffee.ts":
/*!***************************************!*\
  !*** ./src/components/asideCoffee.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideCoffee": () => (/* binding */ AsideCoffee)
/* harmony export */ });
/* harmony import */ var _chuckJokeArticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chuckJokeArticle */ "./src/components/chuckJokeArticle.ts");

var AsideCoffee = function () {
    var aside = document.createElement('aside');
    var title = document.createElement('h3');
    var section = document.createElement('section');
    var chuckJokeArticle = (0,_chuckJokeArticle__WEBPACK_IMPORTED_MODULE_0__.ChuckJokeArticle)();
    aside.id = 'aside-coffee';
    section.classList.add('entertainment-section');
    title.textContent = 'Something to enjoy by your coffee :}';
    aside.appendChild(title);
    aside.appendChild(section);
    section.appendChild(chuckJokeArticle);
    return aside;
};


/***/ }),

/***/ "./src/components/chuckJokeArticle.ts":
/*!********************************************!*\
  !*** ./src/components/chuckJokeArticle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChuckJokeArticle": () => (/* binding */ ChuckJokeArticle)
/* harmony export */ });
/* harmony import */ var _dataFillers_coffeeFillers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataFillers/coffeeFillers */ "./src/dataFillers/coffeeFillers.ts");

var ChuckJokeArticle = function () {
    var article = document.createElement('article');
    var articleTitle = document.createElement('h4');
    var joke = document.createElement('p');
    var button = document.createElement('button');
    joke.id = 'chuck-joke';
    button.id = 'joke-button';
    button.type = 'button';
    button.onclick = function () {
        (0,_dataFillers_coffeeFillers__WEBPACK_IMPORTED_MODULE_0__.fillChuckJokeData)();
        changeButtonTextAfter1stClick();
    };
    button.textContent = 'Get a joke';
    articleTitle.textContent = 'Enjoy a Chuck Norris joke!';
    article.appendChild(articleTitle);
    article.appendChild(joke);
    article.appendChild(button);
    return article;
};
var changeBtnText = function () {
    var timesClicked = 0;
    return function () {
        if (timesClicked !== 0)
            return;
        var btn = document.getElementById('joke-button');
        if (btn) {
            timesClicked++;
            btn.textContent = 'Get another joke';
            console.log('Closure - timesClicked: ', timesClicked);
        }
        ;
    };
};
var changeButtonTextAfter1stClick = changeBtnText();


/***/ }),

/***/ "./src/components/coffeeCard.ts":
/*!**************************************!*\
  !*** ./src/components/coffeeCard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoffeeCard": () => (/* binding */ CoffeeCard)
/* harmony export */ });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ "./src/models/product.ts");

var CoffeeCard = function (coffeeItem) {
    var article = document.createElement('article');
    var img = document.createElement('img');
    var textSection = document.createElement('section');
    var title = document.createElement('h3');
    var p = document.createElement('p');
    article.classList.add('coffee-card');
    var coffeeWithInfo = (0,_models_product__WEBPACK_IMPORTED_MODULE_0__.CoffeeProduct)(coffeeItem.title, coffeeItem.id, coffeeItem.image, coffeeItem.description, coffeeItem.ingredients);
    img.src = coffeeWithInfo.image;
    img.alt = coffeeWithInfo.title;
    title.textContent = coffeeWithInfo.title;
    p.textContent = coffeeWithInfo.description;
    article.addEventListener('click', function () {
        // logging compositionally added functions one thru assigning a new method to the prototype itself
        coffeeWithInfo.logCoffee();
        coffeeWithInfo.prototypicallyInherited();
    });
    article.appendChild(img);
    textSection.appendChild(title);
    textSection.appendChild(p);
    article.appendChild(textSection);
    return article;
};


/***/ }),

/***/ "./src/components/footer.ts":
/*!**********************************!*\
  !*** ./src/components/footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
var Footer = function () {
    var footer = document.createElement('footer');
    var copyright = document.createElement('h3');
    copyright.textContent = 'Copyright something something 2022.';
    footer.appendChild(copyright);
    return footer;
};


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./src/router.ts");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/components/nav.ts");


var headerNavItems = [
    { title: "Home", href: "/", onClick: _router__WEBPACK_IMPORTED_MODULE_0__.route },
    { title: "Form", href: "/form", onClick: _router__WEBPACK_IMPORTED_MODULE_0__.route },
    {
        title: "Not found test",
        href: "/404",
        onClick: _router__WEBPACK_IMPORTED_MODULE_0__.route,
    },
    { title: "Link 4", href: "link4", onClick: _router__WEBPACK_IMPORTED_MODULE_0__.route },
];
var Header = function () {
    var header = document.createElement("header");
    header.classList.add("header");
    header.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__.Nav)(headerNavItems, "header-nav"));
    return header;
};


/***/ }),

/***/ "./src/components/nav.ts":
/*!*******************************!*\
  !*** ./src/components/nav.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": () => (/* binding */ Nav)
/* harmony export */ });
var Nav = function (navContent, className) {
    var nav = document.createElement("nav");
    nav.classList.add(className);
    var linkList = document.createElement("ul");
    navContent.forEach(function (item) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        li.appendChild(link);
        link.innerHTML = item.title;
        link.href = item.href;
        if (item.onClick)
            link.onclick = item.onClick;
        linkList.appendChild(li);
    });
    nav.appendChild(linkList);
    return nav;
};


/***/ }),

/***/ "./src/dataFillers/coffeeFillers.ts":
/*!******************************************!*\
  !*** ./src/dataFillers/coffeeFillers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillChuckJokeData": () => (/* binding */ fillChuckJokeData),
/* harmony export */   "fillCoffeeData": () => (/* binding */ fillCoffeeData)
/* harmony export */ });
/* harmony import */ var _components_coffeeCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/coffeeCard */ "./src/components/coffeeCard.ts");
/* harmony import */ var _services_coffeeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/coffeeService */ "./src/services/coffeeService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var fillCoffeeData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var mainArticle, data, filtered, section;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mainArticle = document.querySelector('.main-article');
                if (!mainArticle)
                    return [2 /*return*/];
                mainArticle.textContent = 'Loading...';
                return [4 /*yield*/, (0,_services_coffeeService__WEBPACK_IMPORTED_MODULE_1__.getData)('https://api.sampleapis.com/coffee/hot')];
            case 1:
                data = _a.sent();
                filtered = data.filter(function (item) { return item.image && item.image.includes('https'); });
                section = document.createElement('section');
                filtered.forEach(function (e) { return section.appendChild((0,_components_coffeeCard__WEBPACK_IMPORTED_MODULE_0__.CoffeeCard)(e)); });
                if (filtered.length > 0) {
                    mainArticle.textContent = '';
                    mainArticle.appendChild(section);
                }
                else {
                    mainArticle.textContent = 'No data found...';
                }
                return [2 /*return*/];
        }
    });
}); };
var fillChuckJokeData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var chuckJoke, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chuckJoke = document.getElementById('chuck-joke');
                if (!chuckJoke)
                    return [2 /*return*/];
                chuckJoke.textContent = 'Loading...';
                return [4 /*yield*/, (0,_services_coffeeService__WEBPACK_IMPORTED_MODULE_1__.getData)('https://api.chucknorris.io/jokes/random')];
            case 1:
                data = _a.sent();
                if (!data.value) {
                    chuckJoke.textContent = 'Sorry error occured, try again :(';
                    return [2 /*return*/];
                }
                else {
                    chuckJoke.textContent = data.value;
                }
                ;
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.ts");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.ts");
/* harmony import */ var _dataFillers_coffeeFillers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataFillers/coffeeFillers */ "./src/dataFillers/coffeeFillers.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/router.ts");





var start = function () {
    document.body.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());
    // document.body.appendChild(Main());
    document.body.appendChild((0,_router__WEBPACK_IMPORTED_MODULE_4__.Router)());
    document.body.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_2__.Footer)());
};
start();
(0,_router__WEBPACK_IMPORTED_MODULE_4__.initRouter)();
(0,_dataFillers_coffeeFillers__WEBPACK_IMPORTED_MODULE_3__.fillCoffeeData)();


/***/ }),

/***/ "./src/models/product.ts":
/*!*******************************!*\
  !*** ./src/models/product.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoffeeProduct": () => (/* binding */ CoffeeProduct),
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nameLogger = function (state) { return ({
    log: function () { return console.log(state.title); }
}); };
var coffeeLogger = function (state) { return ({
    logCoffee: function () { return console.log("Coffee name: ".concat(state.title, ". \n        Description: ").concat(state.description, ".\n        ").concat(state.ingredients && state.ingredients.length > 0 ? "Ingredients: ".concat(state.ingredients) : '')); }
}); };
// factory functions for Object types
var Product = function (productName, productId) {
    var state = {
        id: productId !== null && productId !== void 0 ? productId : Math.floor(Math.random() * 1000000 + Math.random() * 1000000),
        title: productName
    };
    return Object.assign(state, nameLogger(state));
};
// Add a function to prototype
Product.prototype.__proto__.prototypicallyInherited = function () {
    console.log("Prototypically inherited: Hey this is ".concat(this.title));
};
var CoffeeProduct = function (productName, productId, image, description, ingredients) {
    var state = __assign(__assign({}, Product(productName, productId)), { image: image, description: description, ingredients: ingredients });
    return Object.assign(state, coffeeLogger(state));
};


/***/ }),

/***/ "./src/pages/Home.ts":
/*!***************************!*\
  !*** ./src/pages/Home.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _components_asideCoffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/asideCoffee */ "./src/components/asideCoffee.ts");

var Home = function () {
    var main = document.createElement("main");
    var article = document.createElement("article");
    var aside = (0,_components_asideCoffee__WEBPACK_IMPORTED_MODULE_0__.AsideCoffee)();
    article.classList.add("main-article");
    article.setAttribute("id", "main-article");
    aside.classList.add("main-aside");
    main.appendChild(article);
    main.appendChild(document.createElement("hr"));
    main.appendChild(aside);
    return main;
};


/***/ }),

/***/ "./src/pages/PageNotFound.ts":
/*!***********************************!*\
  !*** ./src/pages/PageNotFound.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFound": () => (/* binding */ PageNotFound)
/* harmony export */ });
var PageNotFound = function () {
    var main = document.createElement("main");
    var article = document.createElement("article");
    var notFoundH3 = document.createElement("h3");
    article.classList.add("main-article");
    article.setAttribute("id", "main-article");
    notFoundH3.textContent = "404 page not found!";
    article.appendChild(notFoundH3);
    main.appendChild(article);
    return main;
};


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "handleLocation": () => (/* binding */ handleLocation),
/* harmony export */   "initRouter": () => (/* binding */ initRouter),
/* harmony export */   "route": () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.ts");
/* harmony import */ var _pages_PageNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/PageNotFound */ "./src/pages/PageNotFound.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var routes = {
    "404": (0,_pages_PageNotFound__WEBPACK_IMPORTED_MODULE_1__.PageNotFound)(),
    "/": (0,_pages_Home__WEBPACK_IMPORTED_MODULE_0__.Home)(),
    //   "/form": "/pages/form.html",
};
var route = function (eventParam) {
    var event = eventParam || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};
var handleLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var path, elementByRoute, mainElement;
    return __generator(this, function (_a) {
        path = window.location.pathname;
        elementByRoute = routes[path] || routes["404"];
        mainElement = document.getElementById("my-router");
        if (mainElement) {
            mainElement.replaceChildren(elementByRoute);
        }
        return [2 /*return*/];
    });
}); };
var Router = function () {
    var router = document.createElement("div");
    router.setAttribute("id", "my-router");
    return router;
};
var initRouter = function () {
    window.onpopstate = handleLocation;
    //   window.route = route;
    handleLocation();
};


/***/ }),

/***/ "./src/services/coffeeService.ts":
/*!***************************************!*\
  !*** ./src/services/coffeeService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (!response.ok)
                    throw Error("Couldn't get data error code: ".concat(response.status));
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsY0FBYyxDQUFDLENBQUM7U0FDN0M7OztLQUNGLENBQUM7QUFFSyxJQUFNLE1BQU0sR0FBRztJQUNwQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXZDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVLLElBQU0sVUFBVSxHQUFHO0lBQ3hCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO0lBQ25DLDBCQUEwQjtJQUUxQixjQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDSyxJQUFNLE9BQU8sR0FBRyxVQUFPLEdBQVc7Ozs7b0JBQ3BCLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUM7O2dCQUEzQixRQUFRLEdBQUcsU0FBZ0I7Z0JBRWpDLElBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFBRSxNQUFNLEtBQUssQ0FBQyx3Q0FBaUMsUUFBUSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUM7Z0JBRXBFLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7O2dCQUE1QixJQUFJLEdBQUcsU0FBcUI7Z0JBQ2xDLHNCQUFPLElBQUksRUFBQzs7O0tBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC12YW5pbGxhLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtdmFuaWxsYS8uL3NyYy9jb21wb25lbnRzL2FzaWRlQ29mZmVlLnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvY29tcG9uZW50cy9jaHVja0pva2VBcnRpY2xlLnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvY29tcG9uZW50cy9jb2ZmZWVDYXJkLnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtdmFuaWxsYS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9wZXJzb25hbC12YW5pbGxhLy4vc3JjL2NvbXBvbmVudHMvbmF2LnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvZGF0YUZpbGxlcnMvY29mZmVlRmlsbGVycy50cyIsIndlYnBhY2s6Ly9wZXJzb25hbC12YW5pbGxhLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvbW9kZWxzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtdmFuaWxsYS8uL3NyYy9wYWdlcy9Ib21lLnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvcGFnZXMvUGFnZU5vdEZvdW5kLnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3BlcnNvbmFsLXZhbmlsbGEvLi9zcmMvc2VydmljZXMvY29mZmVlU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSBDT0xPUiBQQUxFVFRFIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNyZWFtOiAjZGNjOWI2O1xcclxcbiAgLS1saWdodC1icm93bjogI2EzOTE3MTtcXHJcXG4gIC0tYnJvd246ICM2ZDRjM2Q7XFxyXFxuICAtLWdyZWVuOiAjYWJjNGFiO1xcclxcbiAgLS1ncmV5ZWVuOiAjNzI3ZDcxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tIE1BSU4gU1RZTEVTIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLWFydGljbGUge1xcclxcbiAgd2lkdGg6IG1heCg3NSUsIGNhbGMoMTAwdncgLSAxM3JlbSkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIGFydGljbGUgc2VjdGlvbjpmaXJzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIGFzaWRlIHtcXHJcXG4gIHdpZHRoOiBtaW4oMjUlLCAxM3JlbSk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gQVNTSURFIENPRkZFRSBTVFlMRVMgLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNhc2lkZS1jb2ZmZWUge1xcclxcbiAgbWFyZ2luOiAxLjdyZW0gMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYXNpZGUtY29mZmVlIGgzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FzaWRlLWNvZmZlZSBwIHtcXHJcXG4gIG1hcmdpbjogMC42cmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNhc2lkZS1jb2ZmZWUgc2VjdGlvbiB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FzaWRlLWNvZmZlZSBhcnRpY2xlIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleWVlbik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYXNpZGUtY29mZmVlIGFydGljbGUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSBIRUFERVIgU1RZTEVTIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLW5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLW5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLW5hdiBhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IGF1dG8gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1uYXYgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnJvd24pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tIEZPT1RFUiBTVFlMRVMgLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMyB7XFxyXFxuICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tIENPRkZFRSBDQVJEIFNUWUxFUyAtLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmNvZmZlZS1jYXJkIHtcXHJcXG4gIHdpZHRoOiBtYXgoMjJyZW0sIDQ1JSk7XFxyXFxuICBoZWlnaHQ6IDEzLjFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0MHB4KSB7XFxyXFxuICAuY29mZmVlLWNhcmQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWNhcmQgc2VjdGlvbiB7XFxyXFxuICBtYXgtd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1jYXJkIHNlY3Rpb24gaDMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWNhcmQgc2VjdGlvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAxLjV2dywgMS4wNXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY2FyZCBpbWcge1xcclxcbiAgd2lkdGg6IDEzcmVtO1xcclxcbiAgaGVpZ2h0OiAxM3JlbTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsa0RBQWtEOztBQUVsRDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsMkRBQTJEOztBQUUzRDtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUEsb0RBQW9EOztBQUVwRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUEsb0RBQW9EOztBQUVwRDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEseURBQXlEOztBQUV6RDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tIENPTE9SIFBBTEVUVEUgLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tY3JlYW06ICNkY2M5YjY7XFxyXFxuICAtLWxpZ2h0LWJyb3duOiAjYTM5MTcxO1xcclxcbiAgLS1icm93bjogIzZkNGMzZDtcXHJcXG4gIC0tZ3JlZW46ICNhYmM0YWI7XFxyXFxuICAtLWdyZXllZW46ICM3MjdkNzE7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gTUFJTiBTVFlMRVMgLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tYXJ0aWNsZSB7XFxyXFxuICB3aWR0aDogbWF4KDc1JSwgY2FsYygxMDB2dyAtIDEzcmVtKSk7XFxyXFxufVxcclxcblxcclxcbm1haW4gYXJ0aWNsZSBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbm1haW4gYXNpZGUge1xcclxcbiAgd2lkdGg6IG1pbigyNSUsIDEzcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSBBU1NJREUgQ09GRkVFIFNUWUxFUyAtLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuI2FzaWRlLWNvZmZlZSB7XFxyXFxuICBtYXJnaW46IDEuN3JlbSAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhc2lkZS1jb2ZmZWUgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYXNpZGUtY29mZmVlIHAge1xcclxcbiAgbWFyZ2luOiAwLjZyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FzaWRlLWNvZmZlZSBzZWN0aW9uIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYXNpZGUtY29mZmVlIGFydGljbGUgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5ZWVuKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhc2lkZS1jb2ZmZWUgYXJ0aWNsZSBidXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tIEhFQURFUiBTVFlMRVMgLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bik7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbmF2IGEge1xcclxcbiAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogYXV0byAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLW5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1icm93bik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gRk9PVEVSIFNUWUxFUyAtLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gQ09GRkVFIENBUkQgU1RZTEVTIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uY29mZmVlLWNhcmQge1xcclxcbiAgd2lkdGg6IG1heCgyMnJlbSwgNDUlKTtcXHJcXG4gIGhlaWdodDogMTMuMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQwcHgpIHtcXHJcXG4gIC5jb2ZmZWUtY2FyZCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY2FyZCBzZWN0aW9uIHtcXHJcXG4gIG1heC13aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlLWNhcmQgc2VjdGlvbiBoMyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMS41dncsIDEuNHJlbSk7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUtY2FyZCBzZWN0aW9uIHAge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDEuNXZ3LCAxLjA1cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZS1jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTNyZW07XFxyXFxuICBoZWlnaHQ6IDEzcmVtO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZmlsbENodWNrSm9rZURhdGEgfSBmcm9tIFwiLi4vZGF0YUZpbGxlcnMvY29mZmVlRmlsbGVyc1wiO1xyXG5pbXBvcnQgeyBDaHVja0pva2VBcnRpY2xlIH0gZnJvbSBcIi4vY2h1Y2tKb2tlQXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFzaWRlQ29mZmVlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IGNodWNrSm9rZUFydGljbGUgPSBDaHVja0pva2VBcnRpY2xlKCk7XHJcbiAgICBcclxuICAgIGFzaWRlLmlkID0gJ2FzaWRlLWNvZmZlZSc7XHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2VudGVydGFpbm1lbnQtc2VjdGlvbicpXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTb21ldGhpbmcgdG8gZW5qb3kgYnkgeW91ciBjb2ZmZWUgOn0nO1xyXG5cclxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjaHVja0pva2VBcnRpY2xlKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGFzaWRlO1xyXG59OyIsImltcG9ydCB7IGZpbGxDaHVja0pva2VEYXRhIH0gZnJvbSBcIi4uL2RhdGFGaWxsZXJzL2NvZmZlZUZpbGxlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaHVja0pva2VBcnRpY2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGNvbnN0IGFydGljbGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCBqb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgIGpva2UuaWQgPSAnY2h1Y2stam9rZSc7XHJcblxyXG4gICAgYnV0dG9uLmlkID0gJ2pva2UtYnV0dG9uJztcclxuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBmaWxsQ2h1Y2tKb2tlRGF0YSgpO1xyXG4gICAgICAgIGNoYW5nZUJ1dHRvblRleHRBZnRlcjFzdENsaWNrKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnR2V0IGEgam9rZSc7XHJcbiAgICBhcnRpY2xlVGl0bGUudGV4dENvbnRlbnQgPSAnRW5qb3kgYSBDaHVjayBOb3JyaXMgam9rZSEnO1xyXG4gICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChhcnRpY2xlVGl0bGUpO1xyXG4gICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChqb2tlKTtcclxuICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gYXJ0aWNsZTtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUJ0blRleHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGltZXNDbGlja2VkID0gMDtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRpbWVzQ2xpY2tlZCAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2tlLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmIChidG4pIHtcclxuICAgICAgICAgICAgdGltZXNDbGlja2VkKys7XHJcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdHZXQgYW5vdGhlciBqb2tlJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nsb3N1cmUgLSB0aW1lc0NsaWNrZWQ6ICcsIHRpbWVzQ2xpY2tlZCk7XHJcbiAgICAgICAgfTsgXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQnV0dG9uVGV4dEFmdGVyMXN0Q2xpY2sgPSBjaGFuZ2VCdG5UZXh0KCk7IiwiaW1wb3J0IHsgSUNvZmZlZUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2NvZmZlZVwiO1xyXG5pbXBvcnQgeyBDb2ZmZWVQcm9kdWN0IH0gZnJvbSBcIi4uL21vZGVscy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29mZmVlQ2FyZCA9IChjb2ZmZWVJdGVtOiBJQ29mZmVlSXRlbSkgPT4ge1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgdGV4dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWNhcmQnKTtcclxuXHJcbiAgICBjb25zdCBjb2ZmZWVXaXRoSW5mbyA9IENvZmZlZVByb2R1Y3QoXHJcbiAgICAgICAgY29mZmVlSXRlbS50aXRsZSwgXHJcbiAgICAgICAgY29mZmVlSXRlbS5pZCwgXHJcbiAgICAgICAgY29mZmVlSXRlbS5pbWFnZSxcclxuICAgICAgICBjb2ZmZWVJdGVtLmRlc2NyaXB0aW9uLCBcclxuICAgICAgICBjb2ZmZWVJdGVtLmluZ3JlZGllbnRzXHJcbiAgICApO1xyXG5cclxuICAgIGltZy5zcmMgPSBjb2ZmZWVXaXRoSW5mby5pbWFnZTtcclxuICAgIGltZy5hbHQgPSBjb2ZmZWVXaXRoSW5mby50aXRsZTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29mZmVlV2l0aEluZm8udGl0bGU7XHJcbiAgICBwLnRleHRDb250ZW50ID0gY29mZmVlV2l0aEluZm8uZGVzY3JpcHRpb247XHJcblxyXG4gICAgYXJ0aWNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyBsb2dnaW5nIGNvbXBvc2l0aW9uYWxseSBhZGRlZCBmdW5jdGlvbnMgb25lIHRocnUgYXNzaWduaW5nIGEgbmV3IG1ldGhvZCB0byB0aGUgcHJvdG90eXBlIGl0c2VsZlxyXG4gICAgICAgIGNvZmZlZVdpdGhJbmZvLmxvZ0NvZmZlZSgpO1xyXG4gICAgICAgIGNvZmZlZVdpdGhJbmZvLnByb3RvdHlwaWNhbGx5SW5oZXJpdGVkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB0ZXh0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB0ZXh0U2VjdGlvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGFydGljbGUuYXBwZW5kQ2hpbGQodGV4dFNlY3Rpb24pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gYXJ0aWNsZTtcclxufTsiLCJleHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCBzb21ldGhpbmcgc29tZXRoaW5nIDIwMjIuJztcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59OyIsImltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIi4uL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJTmF2SXRlbSB9IGZyb20gXCIuL25hdlwiO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9uYXZcIjtcclxuXHJcbmNvbnN0IGhlYWRlck5hdkl0ZW1zOiBJTmF2SXRlbVtdID0gW1xyXG4gIHsgdGl0bGU6IFwiSG9tZVwiLCBocmVmOiBcIi9cIiwgb25DbGljazogcm91dGUgfSxcclxuICB7IHRpdGxlOiBcIkZvcm1cIiwgaHJlZjogXCIvZm9ybVwiLCBvbkNsaWNrOiByb3V0ZSB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5vdCBmb3VuZCB0ZXN0XCIsXHJcbiAgICBocmVmOiBcIi80MDRcIixcclxuICAgIG9uQ2xpY2s6IHJvdXRlLFxyXG4gIH0sXHJcbiAgeyB0aXRsZTogXCJMaW5rIDRcIiwgaHJlZjogXCJsaW5rNFwiLCBvbkNsaWNrOiByb3V0ZSB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoTmF2KGhlYWRlck5hdkl0ZW1zLCBcImhlYWRlci1uYXZcIikpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElOYXZJdGVtIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBvbkNsaWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gKG5hdkNvbnRlbnQ6IElOYXZJdGVtW10sIGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBuYXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGNvbnN0IGxpbmtMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICBuYXZDb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICBsaW5rLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XHJcbiAgICBsaW5rLmhyZWYgPSBpdGVtLmhyZWY7XHJcbiAgICBpZiAoaXRlbS5vbkNsaWNrKSBsaW5rLm9uY2xpY2sgPSBpdGVtLm9uQ2xpY2s7XHJcblxyXG4gICAgbGlua0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG5cclxuICBuYXYuYXBwZW5kQ2hpbGQobGlua0xpc3QpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDb2ZmZWVDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29mZmVlQ2FyZFwiO1xyXG5pbXBvcnQgeyBJQ2h1Y2tKb2tlIH0gZnJvbSBcIi4uL21vZGVscy9jaHVja0pva2VcIjtcclxuaW1wb3J0IHsgSUNvZmZlZUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2NvZmZlZVwiO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvZmZlZVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWxsQ29mZmVlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG1haW5BcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJ0aWNsZScpO1xyXG4gICAgaWYoIW1haW5BcnRpY2xlKSByZXR1cm47XHJcblxyXG4gICAgbWFpbkFydGljbGUudGV4dENvbnRlbnQgPSAnTG9hZGluZy4uLic7XHJcblxyXG4gICAgY29uc3QgZGF0YTogSUNvZmZlZUl0ZW1bXSA9IGF3YWl0IGdldERhdGEoJ2h0dHBzOi8vYXBpLnNhbXBsZWFwaXMuY29tL2NvZmZlZS9ob3QnKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmltYWdlICYmIGl0ZW0uaW1hZ2UuaW5jbHVkZXMoJ2h0dHBzJykpO1xyXG5cclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBmaWx0ZXJlZC5mb3JFYWNoKGUgPT4gc2VjdGlvbi5hcHBlbmRDaGlsZChDb2ZmZWVDYXJkKGUpKSk7XHJcblxyXG4gICAgaWYoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG1haW5BcnRpY2xlLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbWFpbkFydGljbGUuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1haW5BcnRpY2xlLnRleHRDb250ZW50ID0gJ05vIGRhdGEgZm91bmQuLi4nO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmaWxsQ2h1Y2tKb2tlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNodWNrSm9rZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaHVjay1qb2tlJyk7XHJcbiAgICBpZiAoIWNodWNrSm9rZSkgcmV0dXJuO1xyXG5cclxuICAgIGNodWNrSm9rZS50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJztcclxuXHJcbiAgICBjb25zdCBkYXRhOiBJQ2h1Y2tKb2tlID0gYXdhaXQgZ2V0RGF0YSgnaHR0cHM6Ly9hcGkuY2h1Y2tub3JyaXMuaW8vam9rZXMvcmFuZG9tJyk7XHJcblxyXG4gICAgaWYgKCFkYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgY2h1Y2tKb2tlLnRleHRDb250ZW50ID0gJ1NvcnJ5IGVycm9yIG9jY3VyZWQsIHRyeSBhZ2FpbiA6KCc7IFxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2h1Y2tKb2tlLnRleHRDb250ZW50ID0gZGF0YS52YWx1ZTtcclxuICAgIH07XHJcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCB7IEhvbWUgYXMgSG9tZSB9IGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcclxuaW1wb3J0IHsgRm9vdGVyIGFzIEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCB7IGZpbGxDb2ZmZWVEYXRhIH0gZnJvbSBcIi4vZGF0YUZpbGxlcnMvY29mZmVlRmlsbGVyc1wiO1xyXG5pbXBvcnQgeyBpbml0Um91dGVyLCBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xyXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTWFpbigpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFJvdXRlcigpKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChGb290ZXIoKSk7XHJcbn07XHJcblxyXG5zdGFydCgpO1xyXG5pbml0Um91dGVyKCk7XHJcbmZpbGxDb2ZmZWVEYXRhKCk7XHJcbiIsImltcG9ydCB7IElDb2ZmZWVJdGVtV2l0aEluZm8gfSBmcm9tIFwiLi9jb2ZmZWVcIjtcclxuXHJcbi8vIGNvbXBvc2l0aW9uYWwgZnVuY3Rpb25hbGl0aWVzIGZvciBPYmplY3QgdHlwZXM6XHJcbi8vIHdoZW4gdXNpbmcgY29tcG9zaXRpb24gaW5zdGVhZCBvZiBpbmhlcml0YW5jZSB3ZSBhdm9pZCB0eXBlcyBoYXZpbmcgdW5uZWNlc3NhcnkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xyXG5cclxuaW50ZXJmYWNlIElQcm9kdWN0IHtcclxuICAgIGlkOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBuYW1lTG9nZ2VyID0gKHN0YXRlOiB7dGl0bGU6IHN0cmluZ30pID0+ICh7XHJcbiAgICBsb2c6ICgpID0+IGNvbnNvbGUubG9nKHN0YXRlLnRpdGxlKVxyXG59KTtcclxuXHJcbmNvbnN0IGNvZmZlZUxvZ2dlciA9IChzdGF0ZTogeyB0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZywgaW5ncmVkaWVudHM/OiBzdHJpbmdbXX0pID0+ICh7IFxyXG4gICAgbG9nQ29mZmVlOiAoKSA9PiBjb25zb2xlLmxvZyhcclxuICAgICAgICBgQ29mZmVlIG5hbWU6ICR7c3RhdGUudGl0bGV9LiBcclxuICAgICAgICBEZXNjcmlwdGlvbjogJHtzdGF0ZS5kZXNjcmlwdGlvbn0uXHJcbiAgICAgICAgJHtzdGF0ZS5pbmdyZWRpZW50cyAmJiBzdGF0ZS5pbmdyZWRpZW50cy5sZW5ndGggPiAwID8gYEluZ3JlZGllbnRzOiAke3N0YXRlLmluZ3JlZGllbnRzfWAgOiAnJ31gXHJcbiAgICApIFxyXG59KTtcclxuXHJcbi8vIGZhY3RvcnkgZnVuY3Rpb25zIGZvciBPYmplY3QgdHlwZXNcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gKHByb2R1Y3ROYW1lOiBzdHJpbmcsIHByb2R1Y3RJZD86IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IHN0YXRlOiBJUHJvZHVjdCA9IHtcclxuICAgICAgICBpZDogcHJvZHVjdElkID8/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogMTAwMDAwMCksXHJcbiAgICAgICAgdGl0bGU6IHByb2R1Y3ROYW1lXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHN0YXRlLFxyXG4gICAgICAgIG5hbWVMb2dnZXIoc3RhdGUpXHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gQWRkIGEgZnVuY3Rpb24gdG8gcHJvdG90eXBlXHJcblByb2R1Y3QucHJvdG90eXBlLl9fcHJvdG9fXy5wcm90b3R5cGljYWxseUluaGVyaXRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coYFByb3RvdHlwaWNhbGx5IGluaGVyaXRlZDogSGV5IHRoaXMgaXMgJHt0aGlzLnRpdGxlfWApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvZmZlZVByb2R1Y3QgPSAocHJvZHVjdE5hbWU6IHN0cmluZywgcHJvZHVjdElkPzogc3RyaW5nIHwgbnVtYmVyLCBpbWFnZT86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGluZ3JlZGllbnRzPzogc3RyaW5nW10pID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIC4uLlByb2R1Y3QocHJvZHVjdE5hbWUsIHByb2R1Y3RJZCksXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW5ncmVkaWVudHNcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgIGNvZmZlZUxvZ2dlcihzdGF0ZSlcclxuICAgICkgYXMgSUNvZmZlZUl0ZW1XaXRoSW5mbztcclxufTsiLCJpbXBvcnQgeyBBc2lkZUNvZmZlZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FzaWRlQ29mZmVlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gIGNvbnN0IGFzaWRlID0gQXNpZGVDb2ZmZWUoKTtcclxuXHJcbiAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hcnRpY2xlXCIpO1xyXG4gIGFydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWFydGljbGVcIik7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LmFkZChcIm1haW4tYXNpZGVcIik7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoYXNpZGUpO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFBhZ2VOb3RGb3VuZCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gIGNvbnN0IG5vdEZvdW5kSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gIGFydGljbGUuY2xhc3NMaXN0LmFkZChcIm1haW4tYXJ0aWNsZVwiKTtcclxuICBhcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1hcnRpY2xlXCIpO1xyXG4gIG5vdEZvdW5kSDMudGV4dENvbnRlbnQgPSBcIjQwNCBwYWdlIG5vdCBmb3VuZCFcIjtcclxuXHJcbiAgYXJ0aWNsZS5hcHBlbmRDaGlsZChub3RGb3VuZEgzKTtcclxuICBtYWluLmFwcGVuZENoaWxkKGFydGljbGUpO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufTtcclxuIiwiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSBcIi4vcGFnZXMvUGFnZU5vdEZvdW5kXCI7XHJcblxyXG50eXBlIFJvdXRlcyA9IHtcclxuICBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0ge1xyXG4gIFwiNDA0XCI6IFBhZ2VOb3RGb3VuZCgpLFxyXG4gIFwiL1wiOiBIb21lKCksXHJcbiAgLy8gICBcIi9mb3JtXCI6IFwiL3BhZ2VzL2Zvcm0uaHRtbFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlID0gKGV2ZW50UGFyYW06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRQYXJhbSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGV2ZW50LnRhcmdldC5ocmVmKTtcclxuICBoYW5kbGVMb2NhdGlvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgY29uc3QgZWxlbWVudEJ5Um91dGUgPSByb3V0ZXNbcGF0aF0gfHwgcm91dGVzW1wiNDA0XCJdO1xyXG5cclxuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktcm91dGVyXCIpO1xyXG4gIGlmIChtYWluRWxlbWVudCkge1xyXG4gICAgbWFpbkVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKGVsZW1lbnRCeVJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm91dGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXktcm91dGVyXCIpO1xyXG5cclxuICByZXR1cm4gcm91dGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRSb3V0ZXIgPSAoKSA9PiB7XHJcbiAgd2luZG93Lm9ucG9wc3RhdGUgPSBoYW5kbGVMb2NhdGlvbjtcclxuICAvLyAgIHdpbmRvdy5yb3V0ZSA9IHJvdXRlO1xyXG5cclxuICBoYW5kbGVMb2NhdGlvbigpO1xyXG59O1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuXHJcbiAgICBpZighcmVzcG9uc2Uub2spIHRocm93IEVycm9yKGBDb3VsZG4ndCBnZXQgZGF0YSBlcnJvciBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9