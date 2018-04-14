webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --header-size: 50px; }\n:root {\n  --logo-font-family: 'Pacifico', cursive;\n  --heading-font-family: 'Volkhov', serif;\n  --content-font-family: 'Merienda One', cursive;\n  --btn-font-family: 'Sofia', cursive; }\n:root {\n  --light-theme-background-color: #fff;\n  --light-theme-text-color: black;\n  --dark-theme-background-color: #21252d;\n  --dark-theme-text-color: #fff;\n  --card-highlight-color: tomato;\n  --color-primary: DodgerBlue;\n  --color-accent: #FF4081;\n  --color-shadow: rgba(0, 0, 0, 0.2); }\n/* Styling for header*/\n.header {\n  background-color: #0077ea;\n  height: var(--header-size);\n  width: 100%;\n  padding: 20px 20px 10px 20px;\n  color: white;\n  font-size: 30px;\n  font-family: var(--logo-font-family);\n  z-index: 999;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 200px;\n      grid-template-columns: 1fr 200px;\n  -webkit-box-shadow: 0px 5px 5px 1px var(--color-shadow);\n          box-shadow: 0px 5px 5px 1px var(--color-shadow); }\n.header-fixed {\n  top: 0;\n  position: fixed; }\n@media screen and (max-width: 768px) {\n  .header .btn {\n    display: none; } }\n/* Container that takes 70% of the width */\nbody {\n  margin: 0 0 0 0;\n  background-color: var(--light-theme-background-color);\n  color: var(--light-theme-text-color); }\n.container {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: calc(var(--header-size) + 50px);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  grid-gap: 20px; }\n@media screen and (max-width: 768px) {\n  .container {\n    margin-left: 5%;\n    margin-right: 5%;\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr; } }\n/*helpers*/\n/* Float helpers */\n.pull-left {\n  float: left; }\n.pull-right {\n  float: right; }\n.clear-fix {\n  clear: both; }\n/* Button and helpers */\n.btn {\n  text-decoration: none;\n  font-family: var(--btn-font-family);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border: none;\n  font-size: 16px;\n  -webkit-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);\n          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);\n  padding: 10px 15px 10px 15px; }\n.btn:active {\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n.btn:disabled {\n  background-color: grey !important;\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);\n  cursor: not-allowed;\n  -webkit-transform: none !important;\n          transform: none !important; }\n/* Buttons with rounded corners*/\n.btn-round-corners {\n  border-radius: 50px; }\n/*Button colors */\n.btn-primary {\n  background: var(--color-primary);\n  color: white; }\n.btn-primary:hover {\n  background: #0077ea; }\n.btn-accent {\n  background: var(--color-accent);\n  color: white; }\n.btn-accent:hover {\n  background: #ff0d5f; }\n/* Round buttons*/\n.btn-round {\n  border-radius: 50%; }\n/*fab-icon: round buttons with icons*/\n.fab-icon {\n  border-radius: 50%;\n  border: none;\n  padding: 10px 10px 10px 10px;\n  -webkit-box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2);\n  background-color: #FF4081;\n  color: white; }\n.fab-icon:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n.fab-icon-fixed {\n  position: fixed;\n  right: 2%;\n  bottom: 5%;\n  z-index: 500; }\n/* Changing Font-awesome icon on hover, in template both the icons should be specified*/\n.change-icon:hover.fa {\n  -webkit-transition: 1s;\n  transition: 1s; }\n.change-icon > .fa + .fa,\n.change-icon:hover > .fa {\n  display: none; }\n.change-icon:hover > .fa + .fa {\n  display: inherit; }\n/*Styling for cards*/\n.card {\n  background-color: #fff;\n  color: black;\n  -webkit-box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 50px 1fr 85px;\n      grid-template-rows: 50px 1fr 85px; }\n.card-round-corners {\n  border-radius: 3%; }\n.card:hover {\n  -webkit-box-shadow: 8px 8px 16px 4px rgba(0, 0, 0, 0.2);\n          box-shadow: 8px 8px 16px 4px rgba(0, 0, 0, 0.2); }\n/*Card hover styles*/\n.card-hover-style-top {\n  border-top: var(--card-higlight-width) solid transparent; }\n.card-hover-style-top:hover {\n  border-top: 5px solid var(--card-highlight-color); }\n.card-hover-style-bottom {\n  border-bottom: var(--card-higlight-width) solid transparent; }\n.card-hover-style-bottom:hover {\n  border-bottom: 5px solid var(--card-highlight-color); }\n.card-hover-style-left, .card-hover-style-lr, .card-hover-style-lr:hover {\n  border-left: var(--card-higlight-width) solid transparent; }\n.card-hover-style-left:hover, .card-hover-style-lr:hover {\n  border-left: 5px solid var(--card-highlight-color); }\n.card-hover-style-right, .card-hover-style-lr, .card-hover-style-lr:hover {\n  border-right: var(--card-higlight-width) solid transparent; }\n.card-hover-style-right:hover, .card-hover-style-lr:hover {\n  border-right: 5px solid var(--card-highlight-color); }\n/*card header style*/\n.card-header {\n  display: -ms-grid;\n  display: grid;\n  padding: 10px 10px 10px 10px;\n  -ms-grid-columns: 1fr 40px 40px 40px;\n      grid-template-columns: 1fr 40px 40px 40px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: center; }\n/*card close button*/\n/*Todo: seperate circular icon to circular button*/\n.card-close {\n  color: #ff4747;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n.card-close:hover {\n  border-radius: 50%;\n  background-color: #ff4747;\n  color: white;\n  padding: 10px 10px 10px 10px;\n  -webkit-box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2); }\n.card-close:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n/*initially the buton will be hidden*/\n.card-close > .fa {\n  display: none; }\n.card:hover .card-close .fa {\n  display: block; }\n/*copy fab button*/\n.copy-password {\n  color: #00c700;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n.copy-password:hover {\n  border-radius: 50%;\n  background-color: #00c700;\n  color: white;\n  padding: 10px 10px 10px 10px;\n  -webkit-box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2); }\n.copy-password:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n/*initially the buton will be hidden*/\n.copy-password > .fa {\n  display: none; }\n.card:hover .copy-password .fa {\n  display: block; }\n/*edit fab button*/\n.edit-password {\n  color: #4747ff;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n.edit-password:hover {\n  border-radius: 50%;\n  background-color: #4747ff;\n  color: white;\n  padding: 10px 10px 10px 10px;\n  -webkit-box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 4px 5px 5px 1px rgba(0, 0, 0, 0.2); }\n.edit-password:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n/*initially the buton will be hidden*/\n.edit-password > .fa {\n  display: none; }\n.card:hover .edit-password .fa {\n  display: block; }\n/* card title style */\n.card .title {\n  text-align: center;\n  font-size: 24px;\n  padding: 10px 0px 10px 0px;\n  font-family: var(--heading-font-family); }\n/* card content style*/\n.card .content {\n  font-size: 20px;\n  height: auto;\n  padding: 20px 20px 20px 20px;\n  font-family: var(--content-font-family);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr 1fr;\n      grid-template-rows: 1fr 1fr; }\n.card .actions {\n  clear: both;\n  padding: 20px 20px 20px 20px;\n  text-align: center;\n  font-size: 18px; }\n.card-content-plaintext-password {\n  text-align: center;\n  word-break: break-all; }\n.mobile-only {\n  display: none; }\n@media screen and (max-width: 768px) {\n  .mobile-only {\n    display: block; } }\n.slide-down {\n  -webkit-animation: slidedown 2s;\n          animation: slidedown 2s; }\n@-webkit-keyframes slidedown {\n  0% {\n    margin: -100px;\n    opacity: 0; }\n  50% {\n    margin: 0;\n    opacity: 1; } }\n@keyframes slidedown {\n  0% {\n    margin: -100px;\n    opacity: 0; }\n  50% {\n    margin: 0;\n    opacity: 1; } }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map