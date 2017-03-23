require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-regenerator-runtime");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cmmn = __webpack_require__(3);
	
	var _path = __webpack_require__(72);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _fs = __webpack_require__(73);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _mkdirp = __webpack_require__(74);
	
	var _mkdirp2 = _interopRequireDefault(_mkdirp);
	
	var _routes = __webpack_require__(75);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log('Writing files...');
	
	_routes2.default.forEach(function (route) {
	  var parts = route.split('/').filter(function (item) {
	    return item.trim() !== '';
	  });
	  var filename = _path2.default.join('build/public', parts.join('/'), 'index.html');
	  console.log('Writing ' + filename + '...');
	  (0, _mkdirp2.default)(_path2.default.dirname(filename), function (err) {
	    if (err) console.error(err);else {
	      var ws = _fs2.default.createWriteStream(filename);
	      (0, _cmmn.renderPage)({ route: parts }, ws);
	    }
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createElement = __webpack_require__(4);
	
	Object.defineProperty(exports, 'createElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createElement).default;
	  }
	});
	
	var _renderToHtml = __webpack_require__(5);
	
	Object.defineProperty(exports, 'renderToHtml', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_renderToHtml).default;
	  }
	});
	
	var _mount = __webpack_require__(6);
	
	Object.defineProperty(exports, 'mount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_mount).default;
	  }
	});
	
	var _renderPage = __webpack_require__(7);
	
	Object.defineProperty(exports, 'renderPage', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_renderPage).default;
	  }
	});
	exports.getPublicDir = getPublicDir;
	exports.isClient = isClient;
	exports.isServer = isServer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getPublicDir() {
	  return CMMN_PUBLIC_DIR;
	}
	
	function isClient() {
	  return typeof window !== 'undefined';
	}
	
	function isServer() {
	  return !isClient();
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = createElement;
	function normaliseChildren(children) {
	  var normChildren = [];
	  children.forEach(function (child) {
	    if (child == null) return;
	    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.hasOwnProperty('type')) {
	      normChildren.push(child);
	      return;
	    }
	    if (typeof child === 'string') {
	      if (normChildren.length > 0 && normChildren[normChildren.length - 1].type === 'text') {
	        normChildren[normChildren.length - 1].value += child;
	        return;
	      }
	      normChildren.push({
	        type: 'text',
	        value: child
	      });
	      return;
	    }
	    if (Array.isArray(child)) {
	      normChildren = normChildren.concat(normaliseChildren(child));
	      return;
	    }
	  });
	  return normChildren;
	}
	
	function createElement(tag, attribs) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }
	
	  if (typeof tag === 'string') {
	    return {
	      type: tag === 'wrapper' ? 'wrapper' : 'element',
	      tag: tag,
	      attribs: attribs || {},
	      children: normaliseChildren(children)
	    };
	  }
	  if (typeof tag === 'function') {
	    if (tag.prototype && tag.prototype.render instanceof Function) {
	      return {
	        type: 'view',
	        view: tag,
	        attribs: attribs || {},
	        children: normaliseChildren(children)
	      };
	    } else {
	      return {
	        type: 'pureview',
	        view: tag,
	        attribs: attribs || {},
	        children: normaliseChildren(children)
	      };
	    }
	  }
	  throw new TypeError('JSX Element is not a string, class or function');
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var renderChildren = function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(children, data, options) {
	    var renderedChildren;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return Promise.all(children.map(function (child) {
	              return renderToHtml(child, data, options);
	            }));
	
	          case 2:
	            renderedChildren = _context.sent;
	            return _context.abrupt('return', {
	              html: renderedChildren.map(function (obj) {
	                return obj.html;
	              }).join(''),
	              mountData: renderedChildren.map(function (obj) {
	                return obj.mountData;
	              })
	            });
	
	          case 4:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));
	
	  return function renderChildren(_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();
	
	var renderToHtml = function () {
	  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(element, data) {
	    var _this = this;
	
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    var publicPath, type, _ret, view, attribs, children, props, rendered, mountData, viewObj;
	
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            publicPath = options.publicPath || '/';
	            type = element.type;
	
	            if (!(type === 'wrapper')) {
	              _context3.next = 4;
	              break;
	            }
	
	            return _context3.abrupt('return', renderChildren(element.children, data, options));
	
	          case 4:
	            if (!(type === 'element')) {
	              _context3.next = 9;
	              break;
	            }
	
	            return _context3.delegateYield(regeneratorRuntime.mark(function _callee2() {
	              var tag, attribs, children, attribsStr, renderedChildren;
	              return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                while (1) {
	                  switch (_context2.prev = _context2.next) {
	                    case 0:
	                      tag = element.tag, attribs = element.attribs, children = element.children;
	                      attribsStr = Object.keys(attribs).map(function (key) {
	                        if (attribs[key] == null) return;
	                        if (key === 'className') {
	                          if (Array.isArray(attribs.className)) {
	                            return ' class="' + attribs.className.join(' ') + '"';
	                          }
	                          return ' class="' + attribs.className + '"';
	                        }
	                        if (key === 'src' || key === 'href') {
	                          if (attribs[key].substr(0, 2) === '*/') {
	                            return ' ' + key + '="' + publicPath + attribs[key].substr(2) + '"';
	                          }
	                        }
	                        return ' ' + key + '="' + attribs[key] + '"';
	                      }).join('');
	
	                      if (!isElementSelfClosing(tag)) {
	                        _context2.next = 6;
	                        break;
	                      }
	
	                      return _context2.abrupt('return', {
	                        v: {
	                          html: '<' + tag + attribsStr + '/>',
	                          mountData: null
	                        }
	                      });
	
	                    case 6:
	                      _context2.next = 8;
	                      return renderChildren(element.children, data, options);
	
	                    case 8:
	                      renderedChildren = _context2.sent;
	                      return _context2.abrupt('return', {
	                        v: {
	                          html: '<' + tag + attribsStr + '>' + renderedChildren.html + '</' + tag + '>',
	                          mountData: renderedChildren.mountData
	                        }
	                      });
	
	                    case 10:
	                    case 'end':
	                      return _context2.stop();
	                  }
	                }
	              }, _callee2, _this);
	            })(), 't0', 6);
	
	          case 6:
	            _ret = _context3.t0;
	
	            if (!((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object")) {
	              _context3.next = 9;
	              break;
	            }
	
	            return _context3.abrupt('return', _ret.v);
	
	          case 9:
	            if (!(type === 'pureview' || type === 'view')) {
	              _context3.next = 28;
	              break;
	            }
	
	            view = element.view, attribs = element.attribs, children = element.children;
	            props = Object.assign({}, attribs, { children: children });
	            rendered = { html: '', mountData: null }, mountData = null;
	
	            if (!(type === 'view')) {
	              _context3.next = 24;
	              break;
	            }
	
	            viewObj = new view();
	
	            if (!(typeof viewObj.fetchProps === 'function')) {
	              _context3.next = 19;
	              break;
	            }
	
	            _context3.next = 18;
	            return viewObj.fetchProps(props, data);
	
	          case 18:
	            mountData = _context3.sent;
	
	          case 19:
	            _context3.next = 21;
	            return renderToHtml(viewObj.render(mountData ? mountData : props), data, options);
	
	          case 21:
	            rendered = _context3.sent;
	            _context3.next = 27;
	            break;
	
	          case 24:
	            _context3.next = 26;
	            return renderToHtml(view(props), data, options);
	
	          case 26:
	            rendered = _context3.sent;
	
	          case 27:
	            return _context3.abrupt('return', {
	              html: rendered.html,
	              mountData: [mountData, rendered.mountData]
	            });
	
	          case 28:
	            if (!(type === 'text')) {
	              _context3.next = 30;
	              break;
	            }
	
	            return _context3.abrupt('return', {
	              html: element.value,
	              mountData: null
	            });
	
	          case 30:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, this);
	  }));
	
	  return function renderToHtml(_x4, _x5) {
	    return _ref2.apply(this, arguments);
	  };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function isElementSelfClosing(tag) {
	  var selfClosingTags = ['br', 'img', 'link', 'meta', 'hr'];
	  return selfClosingTags.indexOf(tag) !== -1;
	}
	
	exports.default = renderToHtml;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mount;
	function mount(node, element) {
	  var mountData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var type = element.type;
	
	  if (type === 'wrapper') {
	    var currNode = node;
	    for (var i = 0; i < element.children.length; i++) {
	      mount(currNode, element.children[i], mountData[i]);
	      currNode = currNode.nextSibling;
	    }
	  }
	  if (type === 'element') {
	    for (var _i = 0; _i < element.children.length; _i++) {
	      mount(node.childNodes[_i], element.children[_i], mountData[_i]);
	    }
	  }
	  if (type === 'view' || type === 'pureview') {
	    var view = element.view,
	        attribs = element.attribs,
	        children = element.children;
	
	    var props = Object.assign({}, attribs, { children: children });
	    if (type === 'view') {
	      var viewObj = new view();
	      if (typeof viewObj.mount === 'function') viewObj.mount(node, mountData[0]);
	      mount(node, viewObj.render(props), mountData[1]);
	      if (typeof viewObj.postmount === 'function') viewObj.postmount(node, mountData[0]);
	    } else {
	      mount(node, view(props), mountData[1]);
	    }
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cmmnRouter = __webpack_require__(8);
	
	var _cmmnRouter2 = _interopRequireDefault(_cmmnRouter);
	
	var _cmmnDatasource = __webpack_require__(71);
	
	var _cmmnDatasource2 = _interopRequireDefault(_cmmnDatasource);
	
	var _cmmn = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var placeholder = 'console.error(\'Mount data not attached\');';
	
	exports.default = function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(props, res) {
	    var page, renderedPage;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            page = (0, _cmmnRouter2.default)(props);
	
	            page.children[0].children.unshift({
	              type: 'element',
	              tag: 'link',
	              attribs: {
	                href: ('/dpl-motors/') + 'styles.css',
	                rel: 'stylesheet',
	                type: 'text/css'
	              },
	              children: []
	            });
	            page.children[1].children.push({
	              type: 'element',
	              tag: 'script',
	              attribs: {},
	              children: [{
	                type: 'text',
	                value: placeholder
	              }]
	            });
	            page.children[1].children.push({
	              type: 'element',
	              tag: 'script',
	              attribs: {
	                src: ('/dpl-motors/') + 'scripts.js'
	              },
	              children: []
	            });
	            _context.next = 6;
	            return (0, _cmmn.renderToHtml)(page, (0, _cmmnDatasource2.default)(props), {
	              publicPath: ('/dpl-motors/')
	            });
	
	          case 6:
	            renderedPage = _context.sent;
	
	            renderedPage.html = renderedPage.html.replace(placeholder, ['window.__PROPS__ = ' + JSON.stringify(props) + ';', 'window.__MOUNT__DATA__ = ' + JSON.stringify(renderedPage.mountData[1]) + ';'].join('\n'));
	            res.end(renderedPage.html);
	
	          case 9:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));
	
	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cmmn = __webpack_require__(3);
	
	var _homePage = __webpack_require__(9);
	
	var home = _interopRequireWildcard(_homePage);
	
	var _services = __webpack_require__(45);
	
	var services = _interopRequireWildcard(_services);
	
	var _servicing = __webpack_require__(49);
	
	var servicing = _interopRequireWildcard(_servicing);
	
	var _airConditioning = __webpack_require__(50);
	
	var airConditioning = _interopRequireWildcard(_airConditioning);
	
	var _performanceTuning = __webpack_require__(51);
	
	var performanceTuning = _interopRequireWildcard(_performanceTuning);
	
	var _ecuTuning = __webpack_require__(52);
	
	var ecuTuning = _interopRequireWildcard(_ecuTuning);
	
	var _dpfSolution = __webpack_require__(53);
	
	var dpfSolution = _interopRequireWildcard(_dpfSolution);
	
	var _egrSolution = __webpack_require__(54);
	
	var egrSolution = _interopRequireWildcard(_egrSolution);
	
	var _truckTuning = __webpack_require__(55);
	
	var truckTuning = _interopRequireWildcard(_truckTuning);
	
	var _reconditioning = __webpack_require__(56);
	
	var reconditioning = _interopRequireWildcard(_reconditioning);
	
	var _motorRebuilds = __webpack_require__(57);
	
	var motorRebuilds = _interopRequireWildcard(_motorRebuilds);
	
	var _cylinderHeadRepair = __webpack_require__(58);
	
	var cylinderHeadRepair = _interopRequireWildcard(_cylinderHeadRepair);
	
	var _headGasketRepair = __webpack_require__(59);
	
	var headGasketRepair = _interopRequireWildcard(_headGasketRepair);
	
	var _parts = __webpack_require__(60);
	
	var parts = _interopRequireWildcard(_parts);
	
	var _booking = __webpack_require__(65);
	
	var book = _interopRequireWildcard(_booking);
	
	var _trade = __webpack_require__(67);
	
	var trade = _interopRequireWildcard(_trade);
	
	var _contact = __webpack_require__(68);
	
	var contact = _interopRequireWildcard(_contact);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function route(props) {
	  var page = home;
	  var viewProps = {};
	  if (props.route.length > 0) {
	    switch (props.route[0]) {
	      case 'services':
	        page = services;
	        if (props.route.length > 1) {
	          switch (props.route[1]) {
	            case 'air-conditioning':
	              page = airConditioning;break;
	            case 'scheduled-servicing':
	              page = servicing;break;
	          }
	        }
	        break;
	      case 'performance-tuning':
	        page = performanceTuning;
	        if (props.route.length > 1) {
	          switch (props.route[1]) {
	            case 'ecu-tuning':
	              page = ecuTuning;break;
	            case 'dpf-solution':
	              page = dpfSolution;break;
	            case 'egr-solution':
	              page = egrSolution;break;
	            case 'truck-tuning':
	              page = truckTuning;break;
	          }
	        }
	        break;
	      case 'reconditioning':
	        page = reconditioning;
	        if (props.route.length > 1) {
	          switch (props.route[1]) {
	            case 'motor-rebuilds':
	              page = motorRebuilds;break;
	            case 'cylinder-head-repair':
	              page = cylinderHeadRepair;break;
	            case 'head-gasket-repair':
	              page = headGasketRepair;break;
	          }
	        }
	        break;
	      case 'parts':
	        page = parts;
	        break;
	      case 'book':
	        page = book;
	        break;
	      case 'trade':
	        page = trade;
	        break;
	      case 'contact-us':
	        page = contact;
	        break;
	    }
	  }
	  return { page: page, viewProps: viewProps };
	}
	
	exports.default = function (props) {
	  var _route = route(props),
	      page = _route.page,
	      viewProps = _route.viewProps;
	
	  var meta = page.getMeta ? page.getMeta(viewProps) : {};
	  var View = page.default;
	  var title = (meta.title || 'Untitled') + (props.route.length == 0 ? '' : ' | DPL Motors');
	  return (0, _cmmn.createElement)(
	    'html',
	    null,
	    (0, _cmmn.createElement)(
	      'head',
	      null,
	      (0, _cmmn.createElement)(
	        'script',
	        null,
	        '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n        new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n        \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,\'script\',\'dataLayer\',\'GTM-TD3SK9D\');'
	      ),
	      (0, _cmmn.createElement)('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: __webpack_require__(70) }),
	      (0, _cmmn.createElement)('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: __webpack_require__(70) }),
	      (0, _cmmn.createElement)('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }),
	      (0, _cmmn.createElement)('meta', { charset: 'utf-8' }),
	      (0, _cmmn.createElement)(
	        'title',
	        null,
	        title
	      )
	    ),
	    (0, _cmmn.createElement)(
	      'body',
	      { className: meta.bodyClass },
	      (0, _cmmn.createElement)(
	        'noscript',
	        null,
	        (0, _cmmn.createElement)('iframe', { src: 'https://www.googletagmanager.com/ns.html?id=GTM-TD3SK9D',
	          height: '0', width: '0', style: 'display:none;visibility:hidden' })
	      ),
	      (0, _cmmn.createElement)(View, viewProps)
	    )
	  );
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	__webpack_require__(10);
	
	var _styles = __webpack_require__(23);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _header = __webpack_require__(25);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(31);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _sidemenu = __webpack_require__(42);
	
	var _sidemenu2 = _interopRequireDefault(_sidemenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'DPL Motors'
	  };
	};
	
	exports.default = function (props) {
	  return (0, _cmmn.createElement)(
	    'div',
	    null,
	    (0, _cmmn.createElement)(_header2.default, null),
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles2.default.video },
	      (0, _cmmn.createElement)(_sidemenu2.default, null)
	    ),
	    (0, _cmmn.createElement)(_footer2.default, null)
	  );
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(11);
	
	__webpack_require__(20);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(13) + ");\n  src: url(" + __webpack_require__(14) + "?#iefix&v=4.7.0) format(\"embedded-opentype\"), url(" + __webpack_require__(15) + ") format(\"woff2\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\"), url(" + __webpack_require__(18) + "#fontawesomeregular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n {\n  /* makes the font 33% larger relative to the icon container */\n  /* Deprecated as of 4.4.0 */\n  /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */ }\n  .fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .fa-lg {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -15%; }\n  .fa-2x {\n    font-size: 2em; }\n  .fa-3x {\n    font-size: 3em; }\n  .fa-4x {\n    font-size: 4em; }\n  .fa-5x {\n    font-size: 5em; }\n  .fa-fw {\n    width: 1.28571em;\n    text-align: center; }\n  .fa-ul {\n    padding-left: 0;\n    margin-left: 2.14286em;\n    list-style-type: none; }\n    .fa-ul > li {\n      position: relative; }\n  .fa-li {\n    position: absolute;\n    left: -2.14286em;\n    width: 2.14286em;\n    top: 0.14286em;\n    text-align: center; }\n    .fa-li.fa-lg {\n      left: -1.85714em; }\n  .fa-border {\n    padding: .2em .25em .15em;\n    border: solid 0.08em #eee;\n    border-radius: .1em; }\n  .fa-pull-left {\n    float: left; }\n  .fa-pull-right {\n    float: right; }\n  .fa.fa-pull-left {\n    margin-right: .3em; }\n  .fa.fa-pull-right {\n    margin-left: .3em; }\n  .pull-right {\n    float: right; }\n  .pull-left {\n    float: left; }\n  .fa.pull-left {\n    margin-right: .3em; }\n  .fa.pull-right {\n    margin-left: .3em; }\n  .fa-spin {\n    -webkit-animation: fa-spin 2s infinite linear;\n    animation: fa-spin 2s infinite linear; }\n  .fa-pulse {\n    -webkit-animation: fa-spin 1s infinite steps(8);\n    animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes src-views-theme-font-awesome-scss-font-awesome---fa-spin---w5Ogd {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes src-views-theme-font-awesome-scss-font-awesome---fa-spin---w5Ogd {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n  .fa-rotate-90 {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  .fa-rotate-180 {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg); }\n  .fa-rotate-270 {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n    -webkit-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  .fa-flip-horizontal {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n    -webkit-transform: scale(-1, 1);\n    -ms-transform: scale(-1, 1);\n    transform: scale(-1, 1); }\n  .fa-flip-vertical {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n    -webkit-transform: scale(1, -1);\n    -ms-transform: scale(1, -1);\n    transform: scale(1, -1); }\n  :root .fa-rotate-90,\n  :root .fa-rotate-180,\n  :root .fa-rotate-270,\n  :root .fa-flip-horizontal,\n  :root .fa-flip-vertical {\n    filter: none; }\n  .fa-stack {\n    position: relative;\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle; }\n  .fa-stack-1x, .fa-stack-2x {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    text-align: center; }\n  .fa-stack-1x {\n    line-height: inherit; }\n  .fa-stack-2x {\n    font-size: 2em; }\n  .fa-inverse {\n    color: #fff; }\n  .fa-glass:before {\n    content: \"\\F000\"; }\n  .fa-music:before {\n    content: \"\\F001\"; }\n  .fa-search:before {\n    content: \"\\F002\"; }\n  .fa-envelope-o:before {\n    content: \"\\F003\"; }\n  .fa-heart:before {\n    content: \"\\F004\"; }\n  .fa-star:before {\n    content: \"\\F005\"; }\n  .fa-star-o:before {\n    content: \"\\F006\"; }\n  .fa-user:before {\n    content: \"\\F007\"; }\n  .fa-film:before {\n    content: \"\\F008\"; }\n  .fa-th-large:before {\n    content: \"\\F009\"; }\n  .fa-th:before {\n    content: \"\\F00A\"; }\n  .fa-th-list:before {\n    content: \"\\F00B\"; }\n  .fa-check:before {\n    content: \"\\F00C\"; }\n  .fa-remove:before,\n  .fa-close:before,\n  .fa-times:before {\n    content: \"\\F00D\"; }\n  .fa-search-plus:before {\n    content: \"\\F00E\"; }\n  .fa-search-minus:before {\n    content: \"\\F010\"; }\n  .fa-power-off:before {\n    content: \"\\F011\"; }\n  .fa-signal:before {\n    content: \"\\F012\"; }\n  .fa-gear:before,\n  .fa-cog:before {\n    content: \"\\F013\"; }\n  .fa-trash-o:before {\n    content: \"\\F014\"; }\n  .fa-home:before {\n    content: \"\\F015\"; }\n  .fa-file-o:before {\n    content: \"\\F016\"; }\n  .fa-clock-o:before {\n    content: \"\\F017\"; }\n  .fa-road:before {\n    content: \"\\F018\"; }\n  .fa-download:before {\n    content: \"\\F019\"; }\n  .fa-arrow-circle-o-down:before {\n    content: \"\\F01A\"; }\n  .fa-arrow-circle-o-up:before {\n    content: \"\\F01B\"; }\n  .fa-inbox:before {\n    content: \"\\F01C\"; }\n  .fa-play-circle-o:before {\n    content: \"\\F01D\"; }\n  .fa-rotate-right:before,\n  .fa-repeat:before {\n    content: \"\\F01E\"; }\n  .fa-refresh:before {\n    content: \"\\F021\"; }\n  .fa-list-alt:before {\n    content: \"\\F022\"; }\n  .fa-lock:before {\n    content: \"\\F023\"; }\n  .fa-flag:before {\n    content: \"\\F024\"; }\n  .fa-headphones:before {\n    content: \"\\F025\"; }\n  .fa-volume-off:before {\n    content: \"\\F026\"; }\n  .fa-volume-down:before {\n    content: \"\\F027\"; }\n  .fa-volume-up:before {\n    content: \"\\F028\"; }\n  .fa-qrcode:before {\n    content: \"\\F029\"; }\n  .fa-barcode:before {\n    content: \"\\F02A\"; }\n  .fa-tag:before {\n    content: \"\\F02B\"; }\n  .fa-tags:before {\n    content: \"\\F02C\"; }\n  .fa-book:before {\n    content: \"\\F02D\"; }\n  .fa-bookmark:before {\n    content: \"\\F02E\"; }\n  .fa-print:before {\n    content: \"\\F02F\"; }\n  .fa-camera:before {\n    content: \"\\F030\"; }\n  .fa-font:before {\n    content: \"\\F031\"; }\n  .fa-bold:before {\n    content: \"\\F032\"; }\n  .fa-italic:before {\n    content: \"\\F033\"; }\n  .fa-text-height:before {\n    content: \"\\F034\"; }\n  .fa-text-width:before {\n    content: \"\\F035\"; }\n  .fa-align-left:before {\n    content: \"\\F036\"; }\n  .fa-align-center:before {\n    content: \"\\F037\"; }\n  .fa-align-right:before {\n    content: \"\\F038\"; }\n  .fa-align-justify:before {\n    content: \"\\F039\"; }\n  .fa-list:before {\n    content: \"\\F03A\"; }\n  .fa-dedent:before,\n  .fa-outdent:before {\n    content: \"\\F03B\"; }\n  .fa-indent:before {\n    content: \"\\F03C\"; }\n  .fa-video-camera:before {\n    content: \"\\F03D\"; }\n  .fa-photo:before,\n  .fa-image:before,\n  .fa-picture-o:before {\n    content: \"\\F03E\"; }\n  .fa-pencil:before {\n    content: \"\\F040\"; }\n  .fa-map-marker:before {\n    content: \"\\F041\"; }\n  .fa-adjust:before {\n    content: \"\\F042\"; }\n  .fa-tint:before {\n    content: \"\\F043\"; }\n  .fa-edit:before,\n  .fa-pencil-square-o:before {\n    content: \"\\F044\"; }\n  .fa-share-square-o:before {\n    content: \"\\F045\"; }\n  .fa-check-square-o:before {\n    content: \"\\F046\"; }\n  .fa-arrows:before {\n    content: \"\\F047\"; }\n  .fa-step-backward:before {\n    content: \"\\F048\"; }\n  .fa-fast-backward:before {\n    content: \"\\F049\"; }\n  .fa-backward:before {\n    content: \"\\F04A\"; }\n  .fa-play:before {\n    content: \"\\F04B\"; }\n  .fa-pause:before {\n    content: \"\\F04C\"; }\n  .fa-stop:before {\n    content: \"\\F04D\"; }\n  .fa-forward:before {\n    content: \"\\F04E\"; }\n  .fa-fast-forward:before {\n    content: \"\\F050\"; }\n  .fa-step-forward:before {\n    content: \"\\F051\"; }\n  .fa-eject:before {\n    content: \"\\F052\"; }\n  .fa-chevron-left:before {\n    content: \"\\F053\"; }\n  .fa-chevron-right:before {\n    content: \"\\F054\"; }\n  .fa-plus-circle:before {\n    content: \"\\F055\"; }\n  .fa-minus-circle:before {\n    content: \"\\F056\"; }\n  .fa-times-circle:before {\n    content: \"\\F057\"; }\n  .fa-check-circle:before {\n    content: \"\\F058\"; }\n  .fa-question-circle:before {\n    content: \"\\F059\"; }\n  .fa-info-circle:before {\n    content: \"\\F05A\"; }\n  .fa-crosshairs:before {\n    content: \"\\F05B\"; }\n  .fa-times-circle-o:before {\n    content: \"\\F05C\"; }\n  .fa-check-circle-o:before {\n    content: \"\\F05D\"; }\n  .fa-ban:before {\n    content: \"\\F05E\"; }\n  .fa-arrow-left:before {\n    content: \"\\F060\"; }\n  .fa-arrow-right:before {\n    content: \"\\F061\"; }\n  .fa-arrow-up:before {\n    content: \"\\F062\"; }\n  .fa-arrow-down:before {\n    content: \"\\F063\"; }\n  .fa-mail-forward:before,\n  .fa-share:before {\n    content: \"\\F064\"; }\n  .fa-expand:before {\n    content: \"\\F065\"; }\n  .fa-compress:before {\n    content: \"\\F066\"; }\n  .fa-plus:before {\n    content: \"\\F067\"; }\n  .fa-minus:before {\n    content: \"\\F068\"; }\n  .fa-asterisk:before {\n    content: \"\\F069\"; }\n  .fa-exclamation-circle:before {\n    content: \"\\F06A\"; }\n  .fa-gift:before {\n    content: \"\\F06B\"; }\n  .fa-leaf:before {\n    content: \"\\F06C\"; }\n  .fa-fire:before {\n    content: \"\\F06D\"; }\n  .fa-eye:before {\n    content: \"\\F06E\"; }\n  .fa-eye-slash:before {\n    content: \"\\F070\"; }\n  .fa-warning:before,\n  .fa-exclamation-triangle:before {\n    content: \"\\F071\"; }\n  .fa-plane:before {\n    content: \"\\F072\"; }\n  .fa-calendar:before {\n    content: \"\\F073\"; }\n  .fa-random:before {\n    content: \"\\F074\"; }\n  .fa-comment:before {\n    content: \"\\F075\"; }\n  .fa-magnet:before {\n    content: \"\\F076\"; }\n  .fa-chevron-up:before {\n    content: \"\\F077\"; }\n  .fa-chevron-down:before {\n    content: \"\\F078\"; }\n  .fa-retweet:before {\n    content: \"\\F079\"; }\n  .fa-shopping-cart:before {\n    content: \"\\F07A\"; }\n  .fa-folder:before {\n    content: \"\\F07B\"; }\n  .fa-folder-open:before {\n    content: \"\\F07C\"; }\n  .fa-arrows-v:before {\n    content: \"\\F07D\"; }\n  .fa-arrows-h:before {\n    content: \"\\F07E\"; }\n  .fa-bar-chart-o:before,\n  .fa-bar-chart:before {\n    content: \"\\F080\"; }\n  .fa-twitter-square:before {\n    content: \"\\F081\"; }\n  .fa-facebook-square:before {\n    content: \"\\F082\"; }\n  .fa-camera-retro:before {\n    content: \"\\F083\"; }\n  .fa-key:before {\n    content: \"\\F084\"; }\n  .fa-gears:before,\n  .fa-cogs:before {\n    content: \"\\F085\"; }\n  .fa-comments:before {\n    content: \"\\F086\"; }\n  .fa-thumbs-o-up:before {\n    content: \"\\F087\"; }\n  .fa-thumbs-o-down:before {\n    content: \"\\F088\"; }\n  .fa-star-half:before {\n    content: \"\\F089\"; }\n  .fa-heart-o:before {\n    content: \"\\F08A\"; }\n  .fa-sign-out:before {\n    content: \"\\F08B\"; }\n  .fa-linkedin-square:before {\n    content: \"\\F08C\"; }\n  .fa-thumb-tack:before {\n    content: \"\\F08D\"; }\n  .fa-external-link:before {\n    content: \"\\F08E\"; }\n  .fa-sign-in:before {\n    content: \"\\F090\"; }\n  .fa-trophy:before {\n    content: \"\\F091\"; }\n  .fa-github-square:before {\n    content: \"\\F092\"; }\n  .fa-upload:before {\n    content: \"\\F093\"; }\n  .fa-lemon-o:before {\n    content: \"\\F094\"; }\n  .fa-phone:before {\n    content: \"\\F095\"; }\n  .fa-square-o:before {\n    content: \"\\F096\"; }\n  .fa-bookmark-o:before {\n    content: \"\\F097\"; }\n  .fa-phone-square:before {\n    content: \"\\F098\"; }\n  .fa-twitter:before {\n    content: \"\\F099\"; }\n  .fa-facebook-f:before,\n  .fa-facebook:before {\n    content: \"\\F09A\"; }\n  .fa-github:before {\n    content: \"\\F09B\"; }\n  .fa-unlock:before {\n    content: \"\\F09C\"; }\n  .fa-credit-card:before {\n    content: \"\\F09D\"; }\n  .fa-feed:before,\n  .fa-rss:before {\n    content: \"\\F09E\"; }\n  .fa-hdd-o:before {\n    content: \"\\F0A0\"; }\n  .fa-bullhorn:before {\n    content: \"\\F0A1\"; }\n  .fa-bell:before {\n    content: \"\\F0F3\"; }\n  .fa-certificate:before {\n    content: \"\\F0A3\"; }\n  .fa-hand-o-right:before {\n    content: \"\\F0A4\"; }\n  .fa-hand-o-left:before {\n    content: \"\\F0A5\"; }\n  .fa-hand-o-up:before {\n    content: \"\\F0A6\"; }\n  .fa-hand-o-down:before {\n    content: \"\\F0A7\"; }\n  .fa-arrow-circle-left:before {\n    content: \"\\F0A8\"; }\n  .fa-arrow-circle-right:before {\n    content: \"\\F0A9\"; }\n  .fa-arrow-circle-up:before {\n    content: \"\\F0AA\"; }\n  .fa-arrow-circle-down:before {\n    content: \"\\F0AB\"; }\n  .fa-globe:before {\n    content: \"\\F0AC\"; }\n  .fa-wrench:before {\n    content: \"\\F0AD\"; }\n  .fa-tasks:before {\n    content: \"\\F0AE\"; }\n  .fa-filter:before {\n    content: \"\\F0B0\"; }\n  .fa-briefcase:before {\n    content: \"\\F0B1\"; }\n  .fa-arrows-alt:before {\n    content: \"\\F0B2\"; }\n  .fa-group:before,\n  .fa-users:before {\n    content: \"\\F0C0\"; }\n  .fa-chain:before,\n  .fa-link:before {\n    content: \"\\F0C1\"; }\n  .fa-cloud:before {\n    content: \"\\F0C2\"; }\n  .fa-flask:before {\n    content: \"\\F0C3\"; }\n  .fa-cut:before,\n  .fa-scissors:before {\n    content: \"\\F0C4\"; }\n  .fa-copy:before,\n  .fa-files-o:before {\n    content: \"\\F0C5\"; }\n  .fa-paperclip:before {\n    content: \"\\F0C6\"; }\n  .fa-save:before,\n  .fa-floppy-o:before {\n    content: \"\\F0C7\"; }\n  .fa-square:before {\n    content: \"\\F0C8\"; }\n  .fa-navicon:before,\n  .fa-reorder:before,\n  .fa-bars:before {\n    content: \"\\F0C9\"; }\n  .fa-list-ul:before {\n    content: \"\\F0CA\"; }\n  .fa-list-ol:before {\n    content: \"\\F0CB\"; }\n  .fa-strikethrough:before {\n    content: \"\\F0CC\"; }\n  .fa-underline:before {\n    content: \"\\F0CD\"; }\n  .fa-table:before {\n    content: \"\\F0CE\"; }\n  .fa-magic:before {\n    content: \"\\F0D0\"; }\n  .fa-truck:before {\n    content: \"\\F0D1\"; }\n  .fa-pinterest:before {\n    content: \"\\F0D2\"; }\n  .fa-pinterest-square:before {\n    content: \"\\F0D3\"; }\n  .fa-google-plus-square:before {\n    content: \"\\F0D4\"; }\n  .fa-google-plus:before {\n    content: \"\\F0D5\"; }\n  .fa-money:before {\n    content: \"\\F0D6\"; }\n  .fa-caret-down:before {\n    content: \"\\F0D7\"; }\n  .fa-caret-up:before {\n    content: \"\\F0D8\"; }\n  .fa-caret-left:before {\n    content: \"\\F0D9\"; }\n  .fa-caret-right:before {\n    content: \"\\F0DA\"; }\n  .fa-columns:before {\n    content: \"\\F0DB\"; }\n  .fa-unsorted:before,\n  .fa-sort:before {\n    content: \"\\F0DC\"; }\n  .fa-sort-down:before,\n  .fa-sort-desc:before {\n    content: \"\\F0DD\"; }\n  .fa-sort-up:before,\n  .fa-sort-asc:before {\n    content: \"\\F0DE\"; }\n  .fa-envelope:before {\n    content: \"\\F0E0\"; }\n  .fa-linkedin:before {\n    content: \"\\F0E1\"; }\n  .fa-rotate-left:before,\n  .fa-undo:before {\n    content: \"\\F0E2\"; }\n  .fa-legal:before,\n  .fa-gavel:before {\n    content: \"\\F0E3\"; }\n  .fa-dashboard:before,\n  .fa-tachometer:before {\n    content: \"\\F0E4\"; }\n  .fa-comment-o:before {\n    content: \"\\F0E5\"; }\n  .fa-comments-o:before {\n    content: \"\\F0E6\"; }\n  .fa-flash:before,\n  .fa-bolt:before {\n    content: \"\\F0E7\"; }\n  .fa-sitemap:before {\n    content: \"\\F0E8\"; }\n  .fa-umbrella:before {\n    content: \"\\F0E9\"; }\n  .fa-paste:before,\n  .fa-clipboard:before {\n    content: \"\\F0EA\"; }\n  .fa-lightbulb-o:before {\n    content: \"\\F0EB\"; }\n  .fa-exchange:before {\n    content: \"\\F0EC\"; }\n  .fa-cloud-download:before {\n    content: \"\\F0ED\"; }\n  .fa-cloud-upload:before {\n    content: \"\\F0EE\"; }\n  .fa-user-md:before {\n    content: \"\\F0F0\"; }\n  .fa-stethoscope:before {\n    content: \"\\F0F1\"; }\n  .fa-suitcase:before {\n    content: \"\\F0F2\"; }\n  .fa-bell-o:before {\n    content: \"\\F0A2\"; }\n  .fa-coffee:before {\n    content: \"\\F0F4\"; }\n  .fa-cutlery:before {\n    content: \"\\F0F5\"; }\n  .fa-file-text-o:before {\n    content: \"\\F0F6\"; }\n  .fa-building-o:before {\n    content: \"\\F0F7\"; }\n  .fa-hospital-o:before {\n    content: \"\\F0F8\"; }\n  .fa-ambulance:before {\n    content: \"\\F0F9\"; }\n  .fa-medkit:before {\n    content: \"\\F0FA\"; }\n  .fa-fighter-jet:before {\n    content: \"\\F0FB\"; }\n  .fa-beer:before {\n    content: \"\\F0FC\"; }\n  .fa-h-square:before {\n    content: \"\\F0FD\"; }\n  .fa-plus-square:before {\n    content: \"\\F0FE\"; }\n  .fa-angle-double-left:before {\n    content: \"\\F100\"; }\n  .fa-angle-double-right:before {\n    content: \"\\F101\"; }\n  .fa-angle-double-up:before {\n    content: \"\\F102\"; }\n  .fa-angle-double-down:before {\n    content: \"\\F103\"; }\n  .fa-angle-left:before {\n    content: \"\\F104\"; }\n  .fa-angle-right:before {\n    content: \"\\F105\"; }\n  .fa-angle-up:before {\n    content: \"\\F106\"; }\n  .fa-angle-down:before {\n    content: \"\\F107\"; }\n  .fa-desktop:before {\n    content: \"\\F108\"; }\n  .fa-laptop:before {\n    content: \"\\F109\"; }\n  .fa-tablet:before {\n    content: \"\\F10A\"; }\n  .fa-mobile-phone:before,\n  .fa-mobile:before {\n    content: \"\\F10B\"; }\n  .fa-circle-o:before {\n    content: \"\\F10C\"; }\n  .fa-quote-left:before {\n    content: \"\\F10D\"; }\n  .fa-quote-right:before {\n    content: \"\\F10E\"; }\n  .fa-spinner:before {\n    content: \"\\F110\"; }\n  .fa-circle:before {\n    content: \"\\F111\"; }\n  .fa-mail-reply:before,\n  .fa-reply:before {\n    content: \"\\F112\"; }\n  .fa-github-alt:before {\n    content: \"\\F113\"; }\n  .fa-folder-o:before {\n    content: \"\\F114\"; }\n  .fa-folder-open-o:before {\n    content: \"\\F115\"; }\n  .fa-smile-o:before {\n    content: \"\\F118\"; }\n  .fa-frown-o:before {\n    content: \"\\F119\"; }\n  .fa-meh-o:before {\n    content: \"\\F11A\"; }\n  .fa-gamepad:before {\n    content: \"\\F11B\"; }\n  .fa-keyboard-o:before {\n    content: \"\\F11C\"; }\n  .fa-flag-o:before {\n    content: \"\\F11D\"; }\n  .fa-flag-checkered:before {\n    content: \"\\F11E\"; }\n  .fa-terminal:before {\n    content: \"\\F120\"; }\n  .fa-code:before {\n    content: \"\\F121\"; }\n  .fa-mail-reply-all:before,\n  .fa-reply-all:before {\n    content: \"\\F122\"; }\n  .fa-star-half-empty:before,\n  .fa-star-half-full:before,\n  .fa-star-half-o:before {\n    content: \"\\F123\"; }\n  .fa-location-arrow:before {\n    content: \"\\F124\"; }\n  .fa-crop:before {\n    content: \"\\F125\"; }\n  .fa-code-fork:before {\n    content: \"\\F126\"; }\n  .fa-unlink:before,\n  .fa-chain-broken:before {\n    content: \"\\F127\"; }\n  .fa-question:before {\n    content: \"\\F128\"; }\n  .fa-info:before {\n    content: \"\\F129\"; }\n  .fa-exclamation:before {\n    content: \"\\F12A\"; }\n  .fa-superscript:before {\n    content: \"\\F12B\"; }\n  .fa-subscript:before {\n    content: \"\\F12C\"; }\n  .fa-eraser:before {\n    content: \"\\F12D\"; }\n  .fa-puzzle-piece:before {\n    content: \"\\F12E\"; }\n  .fa-microphone:before {\n    content: \"\\F130\"; }\n  .fa-microphone-slash:before {\n    content: \"\\F131\"; }\n  .fa-shield:before {\n    content: \"\\F132\"; }\n  .fa-calendar-o:before {\n    content: \"\\F133\"; }\n  .fa-fire-extinguisher:before {\n    content: \"\\F134\"; }\n  .fa-rocket:before {\n    content: \"\\F135\"; }\n  .fa-maxcdn:before {\n    content: \"\\F136\"; }\n  .fa-chevron-circle-left:before {\n    content: \"\\F137\"; }\n  .fa-chevron-circle-right:before {\n    content: \"\\F138\"; }\n  .fa-chevron-circle-up:before {\n    content: \"\\F139\"; }\n  .fa-chevron-circle-down:before {\n    content: \"\\F13A\"; }\n  .fa-html5:before {\n    content: \"\\F13B\"; }\n  .fa-css3:before {\n    content: \"\\F13C\"; }\n  .fa-anchor:before {\n    content: \"\\F13D\"; }\n  .fa-unlock-alt:before {\n    content: \"\\F13E\"; }\n  .fa-bullseye:before {\n    content: \"\\F140\"; }\n  .fa-ellipsis-h:before {\n    content: \"\\F141\"; }\n  .fa-ellipsis-v:before {\n    content: \"\\F142\"; }\n  .fa-rss-square:before {\n    content: \"\\F143\"; }\n  .fa-play-circle:before {\n    content: \"\\F144\"; }\n  .fa-ticket:before {\n    content: \"\\F145\"; }\n  .fa-minus-square:before {\n    content: \"\\F146\"; }\n  .fa-minus-square-o:before {\n    content: \"\\F147\"; }\n  .fa-level-up:before {\n    content: \"\\F148\"; }\n  .fa-level-down:before {\n    content: \"\\F149\"; }\n  .fa-check-square:before {\n    content: \"\\F14A\"; }\n  .fa-pencil-square:before {\n    content: \"\\F14B\"; }\n  .fa-external-link-square:before {\n    content: \"\\F14C\"; }\n  .fa-share-square:before {\n    content: \"\\F14D\"; }\n  .fa-compass:before {\n    content: \"\\F14E\"; }\n  .fa-toggle-down:before,\n  .fa-caret-square-o-down:before {\n    content: \"\\F150\"; }\n  .fa-toggle-up:before,\n  .fa-caret-square-o-up:before {\n    content: \"\\F151\"; }\n  .fa-toggle-right:before,\n  .fa-caret-square-o-right:before {\n    content: \"\\F152\"; }\n  .fa-euro:before,\n  .fa-eur:before {\n    content: \"\\F153\"; }\n  .fa-gbp:before {\n    content: \"\\F154\"; }\n  .fa-dollar:before,\n  .fa-usd:before {\n    content: \"\\F155\"; }\n  .fa-rupee:before,\n  .fa-inr:before {\n    content: \"\\F156\"; }\n  .fa-cny:before,\n  .fa-rmb:before,\n  .fa-yen:before,\n  .fa-jpy:before {\n    content: \"\\F157\"; }\n  .fa-ruble:before,\n  .fa-rouble:before,\n  .fa-rub:before {\n    content: \"\\F158\"; }\n  .fa-won:before,\n  .fa-krw:before {\n    content: \"\\F159\"; }\n  .fa-bitcoin:before,\n  .fa-btc:before {\n    content: \"\\F15A\"; }\n  .fa-file:before {\n    content: \"\\F15B\"; }\n  .fa-file-text:before {\n    content: \"\\F15C\"; }\n  .fa-sort-alpha-asc:before {\n    content: \"\\F15D\"; }\n  .fa-sort-alpha-desc:before {\n    content: \"\\F15E\"; }\n  .fa-sort-amount-asc:before {\n    content: \"\\F160\"; }\n  .fa-sort-amount-desc:before {\n    content: \"\\F161\"; }\n  .fa-sort-numeric-asc:before {\n    content: \"\\F162\"; }\n  .fa-sort-numeric-desc:before {\n    content: \"\\F163\"; }\n  .fa-thumbs-up:before {\n    content: \"\\F164\"; }\n  .fa-thumbs-down:before {\n    content: \"\\F165\"; }\n  .fa-youtube-square:before {\n    content: \"\\F166\"; }\n  .fa-youtube:before {\n    content: \"\\F167\"; }\n  .fa-xing:before {\n    content: \"\\F168\"; }\n  .fa-xing-square:before {\n    content: \"\\F169\"; }\n  .fa-youtube-play:before {\n    content: \"\\F16A\"; }\n  .fa-dropbox:before {\n    content: \"\\F16B\"; }\n  .fa-stack-overflow:before {\n    content: \"\\F16C\"; }\n  .fa-instagram:before {\n    content: \"\\F16D\"; }\n  .fa-flickr:before {\n    content: \"\\F16E\"; }\n  .fa-adn:before {\n    content: \"\\F170\"; }\n  .fa-bitbucket:before {\n    content: \"\\F171\"; }\n  .fa-bitbucket-square:before {\n    content: \"\\F172\"; }\n  .fa-tumblr:before {\n    content: \"\\F173\"; }\n  .fa-tumblr-square:before {\n    content: \"\\F174\"; }\n  .fa-long-arrow-down:before {\n    content: \"\\F175\"; }\n  .fa-long-arrow-up:before {\n    content: \"\\F176\"; }\n  .fa-long-arrow-left:before {\n    content: \"\\F177\"; }\n  .fa-long-arrow-right:before {\n    content: \"\\F178\"; }\n  .fa-apple:before {\n    content: \"\\F179\"; }\n  .fa-windows:before {\n    content: \"\\F17A\"; }\n  .fa-android:before {\n    content: \"\\F17B\"; }\n  .fa-linux:before {\n    content: \"\\F17C\"; }\n  .fa-dribbble:before {\n    content: \"\\F17D\"; }\n  .fa-skype:before {\n    content: \"\\F17E\"; }\n  .fa-foursquare:before {\n    content: \"\\F180\"; }\n  .fa-trello:before {\n    content: \"\\F181\"; }\n  .fa-female:before {\n    content: \"\\F182\"; }\n  .fa-male:before {\n    content: \"\\F183\"; }\n  .fa-gittip:before,\n  .fa-gratipay:before {\n    content: \"\\F184\"; }\n  .fa-sun-o:before {\n    content: \"\\F185\"; }\n  .fa-moon-o:before {\n    content: \"\\F186\"; }\n  .fa-archive:before {\n    content: \"\\F187\"; }\n  .fa-bug:before {\n    content: \"\\F188\"; }\n  .fa-vk:before {\n    content: \"\\F189\"; }\n  .fa-weibo:before {\n    content: \"\\F18A\"; }\n  .fa-renren:before {\n    content: \"\\F18B\"; }\n  .fa-pagelines:before {\n    content: \"\\F18C\"; }\n  .fa-stack-exchange:before {\n    content: \"\\F18D\"; }\n  .fa-arrow-circle-o-right:before {\n    content: \"\\F18E\"; }\n  .fa-arrow-circle-o-left:before {\n    content: \"\\F190\"; }\n  .fa-toggle-left:before,\n  .fa-caret-square-o-left:before {\n    content: \"\\F191\"; }\n  .fa-dot-circle-o:before {\n    content: \"\\F192\"; }\n  .fa-wheelchair:before {\n    content: \"\\F193\"; }\n  .fa-vimeo-square:before {\n    content: \"\\F194\"; }\n  .fa-turkish-lira:before,\n  .fa-try:before {\n    content: \"\\F195\"; }\n  .fa-plus-square-o:before {\n    content: \"\\F196\"; }\n  .fa-space-shuttle:before {\n    content: \"\\F197\"; }\n  .fa-slack:before {\n    content: \"\\F198\"; }\n  .fa-envelope-square:before {\n    content: \"\\F199\"; }\n  .fa-wordpress:before {\n    content: \"\\F19A\"; }\n  .fa-openid:before {\n    content: \"\\F19B\"; }\n  .fa-institution:before,\n  .fa-bank:before,\n  .fa-university:before {\n    content: \"\\F19C\"; }\n  .fa-mortar-board:before,\n  .fa-graduation-cap:before {\n    content: \"\\F19D\"; }\n  .fa-yahoo:before {\n    content: \"\\F19E\"; }\n  .fa-google:before {\n    content: \"\\F1A0\"; }\n  .fa-reddit:before {\n    content: \"\\F1A1\"; }\n  .fa-reddit-square:before {\n    content: \"\\F1A2\"; }\n  .fa-stumbleupon-circle:before {\n    content: \"\\F1A3\"; }\n  .fa-stumbleupon:before {\n    content: \"\\F1A4\"; }\n  .fa-delicious:before {\n    content: \"\\F1A5\"; }\n  .fa-digg:before {\n    content: \"\\F1A6\"; }\n  .fa-pied-piper-pp:before {\n    content: \"\\F1A7\"; }\n  .fa-pied-piper-alt:before {\n    content: \"\\F1A8\"; }\n  .fa-drupal:before {\n    content: \"\\F1A9\"; }\n  .fa-joomla:before {\n    content: \"\\F1AA\"; }\n  .fa-language:before {\n    content: \"\\F1AB\"; }\n  .fa-fax:before {\n    content: \"\\F1AC\"; }\n  .fa-building:before {\n    content: \"\\F1AD\"; }\n  .fa-child:before {\n    content: \"\\F1AE\"; }\n  .fa-paw:before {\n    content: \"\\F1B0\"; }\n  .fa-spoon:before {\n    content: \"\\F1B1\"; }\n  .fa-cube:before {\n    content: \"\\F1B2\"; }\n  .fa-cubes:before {\n    content: \"\\F1B3\"; }\n  .fa-behance:before {\n    content: \"\\F1B4\"; }\n  .fa-behance-square:before {\n    content: \"\\F1B5\"; }\n  .fa-steam:before {\n    content: \"\\F1B6\"; }\n  .fa-steam-square:before {\n    content: \"\\F1B7\"; }\n  .fa-recycle:before {\n    content: \"\\F1B8\"; }\n  .fa-automobile:before,\n  .fa-car:before {\n    content: \"\\F1B9\"; }\n  .fa-cab:before,\n  .fa-taxi:before {\n    content: \"\\F1BA\"; }\n  .fa-tree:before {\n    content: \"\\F1BB\"; }\n  .fa-spotify:before {\n    content: \"\\F1BC\"; }\n  .fa-deviantart:before {\n    content: \"\\F1BD\"; }\n  .fa-soundcloud:before {\n    content: \"\\F1BE\"; }\n  .fa-database:before {\n    content: \"\\F1C0\"; }\n  .fa-file-pdf-o:before {\n    content: \"\\F1C1\"; }\n  .fa-file-word-o:before {\n    content: \"\\F1C2\"; }\n  .fa-file-excel-o:before {\n    content: \"\\F1C3\"; }\n  .fa-file-powerpoint-o:before {\n    content: \"\\F1C4\"; }\n  .fa-file-photo-o:before,\n  .fa-file-picture-o:before,\n  .fa-file-image-o:before {\n    content: \"\\F1C5\"; }\n  .fa-file-zip-o:before,\n  .fa-file-archive-o:before {\n    content: \"\\F1C6\"; }\n  .fa-file-sound-o:before,\n  .fa-file-audio-o:before {\n    content: \"\\F1C7\"; }\n  .fa-file-movie-o:before,\n  .fa-file-video-o:before {\n    content: \"\\F1C8\"; }\n  .fa-file-code-o:before {\n    content: \"\\F1C9\"; }\n  .fa-vine:before {\n    content: \"\\F1CA\"; }\n  .fa-codepen:before {\n    content: \"\\F1CB\"; }\n  .fa-jsfiddle:before {\n    content: \"\\F1CC\"; }\n  .fa-life-bouy:before,\n  .fa-life-buoy:before,\n  .fa-life-saver:before,\n  .fa-support:before,\n  .fa-life-ring:before {\n    content: \"\\F1CD\"; }\n  .fa-circle-o-notch:before {\n    content: \"\\F1CE\"; }\n  .fa-ra:before,\n  .fa-resistance:before,\n  .fa-rebel:before {\n    content: \"\\F1D0\"; }\n  .fa-ge:before,\n  .fa-empire:before {\n    content: \"\\F1D1\"; }\n  .fa-git-square:before {\n    content: \"\\F1D2\"; }\n  .fa-git:before {\n    content: \"\\F1D3\"; }\n  .fa-y-combinator-square:before,\n  .fa-yc-square:before,\n  .fa-hacker-news:before {\n    content: \"\\F1D4\"; }\n  .fa-tencent-weibo:before {\n    content: \"\\F1D5\"; }\n  .fa-qq:before {\n    content: \"\\F1D6\"; }\n  .fa-wechat:before,\n  .fa-weixin:before {\n    content: \"\\F1D7\"; }\n  .fa-send:before,\n  .fa-paper-plane:before {\n    content: \"\\F1D8\"; }\n  .fa-send-o:before,\n  .fa-paper-plane-o:before {\n    content: \"\\F1D9\"; }\n  .fa-history:before {\n    content: \"\\F1DA\"; }\n  .fa-circle-thin:before {\n    content: \"\\F1DB\"; }\n  .fa-header:before {\n    content: \"\\F1DC\"; }\n  .fa-paragraph:before {\n    content: \"\\F1DD\"; }\n  .fa-sliders:before {\n    content: \"\\F1DE\"; }\n  .fa-share-alt:before {\n    content: \"\\F1E0\"; }\n  .fa-share-alt-square:before {\n    content: \"\\F1E1\"; }\n  .fa-bomb:before {\n    content: \"\\F1E2\"; }\n  .fa-soccer-ball-o:before,\n  .fa-futbol-o:before {\n    content: \"\\F1E3\"; }\n  .fa-tty:before {\n    content: \"\\F1E4\"; }\n  .fa-binoculars:before {\n    content: \"\\F1E5\"; }\n  .fa-plug:before {\n    content: \"\\F1E6\"; }\n  .fa-slideshare:before {\n    content: \"\\F1E7\"; }\n  .fa-twitch:before {\n    content: \"\\F1E8\"; }\n  .fa-yelp:before {\n    content: \"\\F1E9\"; }\n  .fa-newspaper-o:before {\n    content: \"\\F1EA\"; }\n  .fa-wifi:before {\n    content: \"\\F1EB\"; }\n  .fa-calculator:before {\n    content: \"\\F1EC\"; }\n  .fa-paypal:before {\n    content: \"\\F1ED\"; }\n  .fa-google-wallet:before {\n    content: \"\\F1EE\"; }\n  .fa-cc-visa:before {\n    content: \"\\F1F0\"; }\n  .fa-cc-mastercard:before {\n    content: \"\\F1F1\"; }\n  .fa-cc-discover:before {\n    content: \"\\F1F2\"; }\n  .fa-cc-amex:before {\n    content: \"\\F1F3\"; }\n  .fa-cc-paypal:before {\n    content: \"\\F1F4\"; }\n  .fa-cc-stripe:before {\n    content: \"\\F1F5\"; }\n  .fa-bell-slash:before {\n    content: \"\\F1F6\"; }\n  .fa-bell-slash-o:before {\n    content: \"\\F1F7\"; }\n  .fa-trash:before {\n    content: \"\\F1F8\"; }\n  .fa-copyright:before {\n    content: \"\\F1F9\"; }\n  .fa-at:before {\n    content: \"\\F1FA\"; }\n  .fa-eyedropper:before {\n    content: \"\\F1FB\"; }\n  .fa-paint-brush:before {\n    content: \"\\F1FC\"; }\n  .fa-birthday-cake:before {\n    content: \"\\F1FD\"; }\n  .fa-area-chart:before {\n    content: \"\\F1FE\"; }\n  .fa-pie-chart:before {\n    content: \"\\F200\"; }\n  .fa-line-chart:before {\n    content: \"\\F201\"; }\n  .fa-lastfm:before {\n    content: \"\\F202\"; }\n  .fa-lastfm-square:before {\n    content: \"\\F203\"; }\n  .fa-toggle-off:before {\n    content: \"\\F204\"; }\n  .fa-toggle-on:before {\n    content: \"\\F205\"; }\n  .fa-bicycle:before {\n    content: \"\\F206\"; }\n  .fa-bus:before {\n    content: \"\\F207\"; }\n  .fa-ioxhost:before {\n    content: \"\\F208\"; }\n  .fa-angellist:before {\n    content: \"\\F209\"; }\n  .fa-cc:before {\n    content: \"\\F20A\"; }\n  .fa-shekel:before,\n  .fa-sheqel:before,\n  .fa-ils:before {\n    content: \"\\F20B\"; }\n  .fa-meanpath:before {\n    content: \"\\F20C\"; }\n  .fa-buysellads:before {\n    content: \"\\F20D\"; }\n  .fa-connectdevelop:before {\n    content: \"\\F20E\"; }\n  .fa-dashcube:before {\n    content: \"\\F210\"; }\n  .fa-forumbee:before {\n    content: \"\\F211\"; }\n  .fa-leanpub:before {\n    content: \"\\F212\"; }\n  .fa-sellsy:before {\n    content: \"\\F213\"; }\n  .fa-shirtsinbulk:before {\n    content: \"\\F214\"; }\n  .fa-simplybuilt:before {\n    content: \"\\F215\"; }\n  .fa-skyatlas:before {\n    content: \"\\F216\"; }\n  .fa-cart-plus:before {\n    content: \"\\F217\"; }\n  .fa-cart-arrow-down:before {\n    content: \"\\F218\"; }\n  .fa-diamond:before {\n    content: \"\\F219\"; }\n  .fa-ship:before {\n    content: \"\\F21A\"; }\n  .fa-user-secret:before {\n    content: \"\\F21B\"; }\n  .fa-motorcycle:before {\n    content: \"\\F21C\"; }\n  .fa-street-view:before {\n    content: \"\\F21D\"; }\n  .fa-heartbeat:before {\n    content: \"\\F21E\"; }\n  .fa-venus:before {\n    content: \"\\F221\"; }\n  .fa-mars:before {\n    content: \"\\F222\"; }\n  .fa-mercury:before {\n    content: \"\\F223\"; }\n  .fa-intersex:before,\n  .fa-transgender:before {\n    content: \"\\F224\"; }\n  .fa-transgender-alt:before {\n    content: \"\\F225\"; }\n  .fa-venus-double:before {\n    content: \"\\F226\"; }\n  .fa-mars-double:before {\n    content: \"\\F227\"; }\n  .fa-venus-mars:before {\n    content: \"\\F228\"; }\n  .fa-mars-stroke:before {\n    content: \"\\F229\"; }\n  .fa-mars-stroke-v:before {\n    content: \"\\F22A\"; }\n  .fa-mars-stroke-h:before {\n    content: \"\\F22B\"; }\n  .fa-neuter:before {\n    content: \"\\F22C\"; }\n  .fa-genderless:before {\n    content: \"\\F22D\"; }\n  .fa-facebook-official:before {\n    content: \"\\F230\"; }\n  .fa-pinterest-p:before {\n    content: \"\\F231\"; }\n  .fa-whatsapp:before {\n    content: \"\\F232\"; }\n  .fa-server:before {\n    content: \"\\F233\"; }\n  .fa-user-plus:before {\n    content: \"\\F234\"; }\n  .fa-user-times:before {\n    content: \"\\F235\"; }\n  .fa-hotel:before,\n  .fa-bed:before {\n    content: \"\\F236\"; }\n  .fa-viacoin:before {\n    content: \"\\F237\"; }\n  .fa-train:before {\n    content: \"\\F238\"; }\n  .fa-subway:before {\n    content: \"\\F239\"; }\n  .fa-medium:before {\n    content: \"\\F23A\"; }\n  .fa-yc:before,\n  .fa-y-combinator:before {\n    content: \"\\F23B\"; }\n  .fa-optin-monster:before {\n    content: \"\\F23C\"; }\n  .fa-opencart:before {\n    content: \"\\F23D\"; }\n  .fa-expeditedssl:before {\n    content: \"\\F23E\"; }\n  .fa-battery-4:before,\n  .fa-battery:before,\n  .fa-battery-full:before {\n    content: \"\\F240\"; }\n  .fa-battery-3:before,\n  .fa-battery-three-quarters:before {\n    content: \"\\F241\"; }\n  .fa-battery-2:before,\n  .fa-battery-half:before {\n    content: \"\\F242\"; }\n  .fa-battery-1:before,\n  .fa-battery-quarter:before {\n    content: \"\\F243\"; }\n  .fa-battery-0:before,\n  .fa-battery-empty:before {\n    content: \"\\F244\"; }\n  .fa-mouse-pointer:before {\n    content: \"\\F245\"; }\n  .fa-i-cursor:before {\n    content: \"\\F246\"; }\n  .fa-object-group:before {\n    content: \"\\F247\"; }\n  .fa-object-ungroup:before {\n    content: \"\\F248\"; }\n  .fa-sticky-note:before {\n    content: \"\\F249\"; }\n  .fa-sticky-note-o:before {\n    content: \"\\F24A\"; }\n  .fa-cc-jcb:before {\n    content: \"\\F24B\"; }\n  .fa-cc-diners-club:before {\n    content: \"\\F24C\"; }\n  .fa-clone:before {\n    content: \"\\F24D\"; }\n  .fa-balance-scale:before {\n    content: \"\\F24E\"; }\n  .fa-hourglass-o:before {\n    content: \"\\F250\"; }\n  .fa-hourglass-1:before,\n  .fa-hourglass-start:before {\n    content: \"\\F251\"; }\n  .fa-hourglass-2:before,\n  .fa-hourglass-half:before {\n    content: \"\\F252\"; }\n  .fa-hourglass-3:before,\n  .fa-hourglass-end:before {\n    content: \"\\F253\"; }\n  .fa-hourglass:before {\n    content: \"\\F254\"; }\n  .fa-hand-grab-o:before,\n  .fa-hand-rock-o:before {\n    content: \"\\F255\"; }\n  .fa-hand-stop-o:before,\n  .fa-hand-paper-o:before {\n    content: \"\\F256\"; }\n  .fa-hand-scissors-o:before {\n    content: \"\\F257\"; }\n  .fa-hand-lizard-o:before {\n    content: \"\\F258\"; }\n  .fa-hand-spock-o:before {\n    content: \"\\F259\"; }\n  .fa-hand-pointer-o:before {\n    content: \"\\F25A\"; }\n  .fa-hand-peace-o:before {\n    content: \"\\F25B\"; }\n  .fa-trademark:before {\n    content: \"\\F25C\"; }\n  .fa-registered:before {\n    content: \"\\F25D\"; }\n  .fa-creative-commons:before {\n    content: \"\\F25E\"; }\n  .fa-gg:before {\n    content: \"\\F260\"; }\n  .fa-gg-circle:before {\n    content: \"\\F261\"; }\n  .fa-tripadvisor:before {\n    content: \"\\F262\"; }\n  .fa-odnoklassniki:before {\n    content: \"\\F263\"; }\n  .fa-odnoklassniki-square:before {\n    content: \"\\F264\"; }\n  .fa-get-pocket:before {\n    content: \"\\F265\"; }\n  .fa-wikipedia-w:before {\n    content: \"\\F266\"; }\n  .fa-safari:before {\n    content: \"\\F267\"; }\n  .fa-chrome:before {\n    content: \"\\F268\"; }\n  .fa-firefox:before {\n    content: \"\\F269\"; }\n  .fa-opera:before {\n    content: \"\\F26A\"; }\n  .fa-internet-explorer:before {\n    content: \"\\F26B\"; }\n  .fa-tv:before,\n  .fa-television:before {\n    content: \"\\F26C\"; }\n  .fa-contao:before {\n    content: \"\\F26D\"; }\n  .fa-500px:before {\n    content: \"\\F26E\"; }\n  .fa-amazon:before {\n    content: \"\\F270\"; }\n  .fa-calendar-plus-o:before {\n    content: \"\\F271\"; }\n  .fa-calendar-minus-o:before {\n    content: \"\\F272\"; }\n  .fa-calendar-times-o:before {\n    content: \"\\F273\"; }\n  .fa-calendar-check-o:before {\n    content: \"\\F274\"; }\n  .fa-industry:before {\n    content: \"\\F275\"; }\n  .fa-map-pin:before {\n    content: \"\\F276\"; }\n  .fa-map-signs:before {\n    content: \"\\F277\"; }\n  .fa-map-o:before {\n    content: \"\\F278\"; }\n  .fa-map:before {\n    content: \"\\F279\"; }\n  .fa-commenting:before {\n    content: \"\\F27A\"; }\n  .fa-commenting-o:before {\n    content: \"\\F27B\"; }\n  .fa-houzz:before {\n    content: \"\\F27C\"; }\n  .fa-vimeo:before {\n    content: \"\\F27D\"; }\n  .fa-black-tie:before {\n    content: \"\\F27E\"; }\n  .fa-fonticons:before {\n    content: \"\\F280\"; }\n  .fa-reddit-alien:before {\n    content: \"\\F281\"; }\n  .fa-edge:before {\n    content: \"\\F282\"; }\n  .fa-credit-card-alt:before {\n    content: \"\\F283\"; }\n  .fa-codiepie:before {\n    content: \"\\F284\"; }\n  .fa-modx:before {\n    content: \"\\F285\"; }\n  .fa-fort-awesome:before {\n    content: \"\\F286\"; }\n  .fa-usb:before {\n    content: \"\\F287\"; }\n  .fa-product-hunt:before {\n    content: \"\\F288\"; }\n  .fa-mixcloud:before {\n    content: \"\\F289\"; }\n  .fa-scribd:before {\n    content: \"\\F28A\"; }\n  .fa-pause-circle:before {\n    content: \"\\F28B\"; }\n  .fa-pause-circle-o:before {\n    content: \"\\F28C\"; }\n  .fa-stop-circle:before {\n    content: \"\\F28D\"; }\n  .fa-stop-circle-o:before {\n    content: \"\\F28E\"; }\n  .fa-shopping-bag:before {\n    content: \"\\F290\"; }\n  .fa-shopping-basket:before {\n    content: \"\\F291\"; }\n  .fa-hashtag:before {\n    content: \"\\F292\"; }\n  .fa-bluetooth:before {\n    content: \"\\F293\"; }\n  .fa-bluetooth-b:before {\n    content: \"\\F294\"; }\n  .fa-percent:before {\n    content: \"\\F295\"; }\n  .fa-gitlab:before {\n    content: \"\\F296\"; }\n  .fa-wpbeginner:before {\n    content: \"\\F297\"; }\n  .fa-wpforms:before {\n    content: \"\\F298\"; }\n  .fa-envira:before {\n    content: \"\\F299\"; }\n  .fa-universal-access:before {\n    content: \"\\F29A\"; }\n  .fa-wheelchair-alt:before {\n    content: \"\\F29B\"; }\n  .fa-question-circle-o:before {\n    content: \"\\F29C\"; }\n  .fa-blind:before {\n    content: \"\\F29D\"; }\n  .fa-audio-description:before {\n    content: \"\\F29E\"; }\n  .fa-volume-control-phone:before {\n    content: \"\\F2A0\"; }\n  .fa-braille:before {\n    content: \"\\F2A1\"; }\n  .fa-assistive-listening-systems:before {\n    content: \"\\F2A2\"; }\n  .fa-asl-interpreting:before,\n  .fa-american-sign-language-interpreting:before {\n    content: \"\\F2A3\"; }\n  .fa-deafness:before,\n  .fa-hard-of-hearing:before,\n  .fa-deaf:before {\n    content: \"\\F2A4\"; }\n  .fa-glide:before {\n    content: \"\\F2A5\"; }\n  .fa-glide-g:before {\n    content: \"\\F2A6\"; }\n  .fa-signing:before,\n  .fa-sign-language:before {\n    content: \"\\F2A7\"; }\n  .fa-low-vision:before {\n    content: \"\\F2A8\"; }\n  .fa-viadeo:before {\n    content: \"\\F2A9\"; }\n  .fa-viadeo-square:before {\n    content: \"\\F2AA\"; }\n  .fa-snapchat:before {\n    content: \"\\F2AB\"; }\n  .fa-snapchat-ghost:before {\n    content: \"\\F2AC\"; }\n  .fa-snapchat-square:before {\n    content: \"\\F2AD\"; }\n  .fa-pied-piper:before {\n    content: \"\\F2AE\"; }\n  .fa-first-order:before {\n    content: \"\\F2B0\"; }\n  .fa-yoast:before {\n    content: \"\\F2B1\"; }\n  .fa-themeisle:before {\n    content: \"\\F2B2\"; }\n  .fa-google-plus-circle:before,\n  .fa-google-plus-official:before {\n    content: \"\\F2B3\"; }\n  .fa-fa:before,\n  .fa-font-awesome:before {\n    content: \"\\F2B4\"; }\n  .fa-handshake-o:before {\n    content: \"\\F2B5\"; }\n  .fa-envelope-open:before {\n    content: \"\\F2B6\"; }\n  .fa-envelope-open-o:before {\n    content: \"\\F2B7\"; }\n  .fa-linode:before {\n    content: \"\\F2B8\"; }\n  .fa-address-book:before {\n    content: \"\\F2B9\"; }\n  .fa-address-book-o:before {\n    content: \"\\F2BA\"; }\n  .fa-vcard:before,\n  .fa-address-card:before {\n    content: \"\\F2BB\"; }\n  .fa-vcard-o:before,\n  .fa-address-card-o:before {\n    content: \"\\F2BC\"; }\n  .fa-user-circle:before {\n    content: \"\\F2BD\"; }\n  .fa-user-circle-o:before {\n    content: \"\\F2BE\"; }\n  .fa-user-o:before {\n    content: \"\\F2C0\"; }\n  .fa-id-badge:before {\n    content: \"\\F2C1\"; }\n  .fa-drivers-license:before,\n  .fa-id-card:before {\n    content: \"\\F2C2\"; }\n  .fa-drivers-license-o:before,\n  .fa-id-card-o:before {\n    content: \"\\F2C3\"; }\n  .fa-quora:before {\n    content: \"\\F2C4\"; }\n  .fa-free-code-camp:before {\n    content: \"\\F2C5\"; }\n  .fa-telegram:before {\n    content: \"\\F2C6\"; }\n  .fa-thermometer-4:before,\n  .fa-thermometer:before,\n  .fa-thermometer-full:before {\n    content: \"\\F2C7\"; }\n  .fa-thermometer-3:before,\n  .fa-thermometer-three-quarters:before {\n    content: \"\\F2C8\"; }\n  .fa-thermometer-2:before,\n  .fa-thermometer-half:before {\n    content: \"\\F2C9\"; }\n  .fa-thermometer-1:before,\n  .fa-thermometer-quarter:before {\n    content: \"\\F2CA\"; }\n  .fa-thermometer-0:before,\n  .fa-thermometer-empty:before {\n    content: \"\\F2CB\"; }\n  .fa-shower:before {\n    content: \"\\F2CC\"; }\n  .fa-bathtub:before,\n  .fa-s15:before,\n  .fa-bath:before {\n    content: \"\\F2CD\"; }\n  .fa-podcast:before {\n    content: \"\\F2CE\"; }\n  .fa-window-maximize:before {\n    content: \"\\F2D0\"; }\n  .fa-window-minimize:before {\n    content: \"\\F2D1\"; }\n  .fa-window-restore:before {\n    content: \"\\F2D2\"; }\n  .fa-times-rectangle:before,\n  .fa-window-close:before {\n    content: \"\\F2D3\"; }\n  .fa-times-rectangle-o:before,\n  .fa-window-close-o:before {\n    content: \"\\F2D4\"; }\n  .fa-bandcamp:before {\n    content: \"\\F2D5\"; }\n  .fa-grav:before {\n    content: \"\\F2D6\"; }\n  .fa-etsy:before {\n    content: \"\\F2D7\"; }\n  .fa-imdb:before {\n    content: \"\\F2D8\"; }\n  .fa-ravelry:before {\n    content: \"\\F2D9\"; }\n  .fa-eercast:before {\n    content: \"\\F2DA\"; }\n  .fa-microchip:before {\n    content: \"\\F2DB\"; }\n  .fa-snowflake-o:before {\n    content: \"\\F2DC\"; }\n  .fa-superpowers:before {\n    content: \"\\F2DD\"; }\n  .fa-wpexplorer:before {\n    content: \"\\F2DE\"; }\n  .fa-meetup:before {\n    content: \"\\F2E0\"; }\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0; }\n  .sr-only-focusable:active, .sr-only-focusable:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto; }\n", ""]);
	
	// exports
	exports.locals = {
		"fa-spin": "src-views-theme-font-awesome-scss-font-awesome---fa-spin---w5Ogd"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/eot/fontawesome-webfont-jVM_i1ai.eot";

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/eot/fontawesome-webfont-jVM_i1ai.eot";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/woff2/fontawesome-webfont--xPowCeq.woff2";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/woff/fontawesome-webfont-2JcyC9hB.woff";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/ttf/fontawesome-webfont-2VqpeKww.ttf";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/svg/fontawesome-webfont-3u2QumAP.svg";

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function toCamelCase(str) {
	  return str.replace(/(\-\w)/g, function (part) {
	    return part[1].toUpperCase();
	  });
	}
	
	var identity = function identity(arg) {
	  return arg;
	};
	
	function addMods() {
	  var _this = this;
	
	  var classes = [this.toString()];
	
	  for (var _len = arguments.length, mods = Array(_len), _key = 0; _key < _len; _key++) {
	    mods[_key] = arguments[_key];
	  }
	
	  mods.forEach(function (_mod) {
	    var mod = _mod.trim();
	    if (mod === '') return;
	    classes.push(_this.mods[mod]);
	  });
	  return classes.join(' ') + ' ';
	}
	
	exports.default = function () {
	  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var obj = {};
	  Object.keys(styles).forEach(function (className) {
	    var mods = className.split('--');
	    var elements = mods.shift().split('__');
	    var path = obj;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var el = _step.value;
	
	        if (!path.hasOwnProperty(el)) {
	          path[el] = { mods: {} };
	          path[toCamelCase(el)] = path[el];
	          path[el].with = addMods.bind(path[el]);
	        }
	        path = path[el];
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    if (mods.length !== 0) {
	      var modStr = mods.join(' ');
	      path.mods[modStr] = styles[className];
	    } else {
	      path.toString = identity.bind(null, styles[className] + ' ');
	    }
	  });
	  return obj;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Abel';\n  src: url(" + __webpack_require__(21) + ") format(\"woff2\"), url(" + __webpack_require__(22) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  font-size: 10px;\n  font-family: 'Abel', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: #282828; }\n", ""]);
	
	// exports
	
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/woff2/abel-regular_1-webfont-7Ct0skmh.woff2";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/woff/abel-regular_1-webfont-ZejM71pl.woff";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-home-page-styles---video---V5M_K {\n  position: relative;\n  height: 400px;\n  background-image: url(" + __webpack_require__(24) + ");\n  background-size: cover;\n  background-position: 50% 50%; }\n  .src-views-home-page-styles---video---V5M_K video {\n    width: 100%;\n    height: 400px; }\n", ""]);
	
	// exports
	exports.locals = {
		"video": "src-views-home-page-styles---video---V5M_K"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/video-26oIpqCT.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cmmn = __webpack_require__(3);
	
	var _styles = __webpack_require__(26);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _components = __webpack_require__(27);
	
	var _submenu = __webpack_require__(29);
	
	var _submenu2 = _interopRequireDefault(_submenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MenuItem = function MenuItem(_ref) {
	  var title = _ref.title,
	      href = _ref.href,
	      last = _ref.last,
	      active = _ref.active,
	      children = _ref.children;
	  return (0, _cmmn.createElement)(
	    'div',
	    { className: _styles2.default.menuItem.with(active ? 'active' : '', last ? 'last' : '') },
	    (0, _cmmn.createElement)(
	      'a',
	      { href: href, className: _styles2.default.menuItem.text },
	      title
	    ),
	    children
	  );
	};
	
	var menu = [{
	  title: 'Services', href: 'services', active: 'services',
	  items: [{ title: 'Air Conditioning', href: 'services/air-conditioning' }, { title: 'Scheduled Servicing', href: 'services/scheduled-servicing' }, { title: 'Repairs', href: 'services/repairs' }]
	}, {
	  title: 'Reconditioning', href: 'reconditioning', active: 'reconditioning',
	  items: [{ title: 'Motor Rebuilds', href: 'reconditioning/motor-rebuilds' },
	  //{ title: 'Replacement Motors', href: 'reconditioning/replacement-motors' },
	  { title: 'Cylinder Head Repair', href: 'reconditioning/cylinder-head-repair' }, { title: 'Head Gasket Repair', href: 'reconditioning/head-gasket-repair' }]
	}, {
	  title: 'Performance Tuning', href: 'performance-tuning', active: 'performance-tuning',
	  items: [{ title: 'ECU Tuning', href: 'performance-tuning/ecu-tuning' }, { title: 'DPF Solution', href: 'performance-tuning/dpf-solution' }, { title: 'EGR Solution', href: 'performance-tuning/egr-solution' }, { title: 'Truck Tuning', href: 'performance-tuning/truck-tuning' }]
	}, {
	  title: 'Parts', href: 'parts', active: 'parts'
	}, {
	  title: 'Trade', href: 'trade', active: 'trade'
	}];
	
	function slideDown(element, duration, finalheight, callback) {
	  var s = element.style;
	  s.height = '0px';
	
	  var y = 0;
	  var framerate = 10;
	  var one_second = 1000;
	  var interval = one_second * duration / framerate;
	  var totalframes = one_second * duration / interval;
	  var heightincrement = finalheight / totalframes;
	  var tween = function tween() {
	    y += heightincrement;
	    s.height = y + 'px';
	    if (y < finalheight) {
	      setTimeout(tween, interval);
	    } else {
	      s.height = '';
	    }
	  };
	  tween();
	}
	
	function slideUp(element, duration, finalheight, callback) {
	  var s = element.style;
	  s.height = finalheight + 'px';
	
	  var y = finalheight;
	  var framerate = 10;
	  var one_second = 1000;
	  var interval = one_second * duration / framerate;
	  var totalframes = one_second * duration / interval;
	  var heightincrement = finalheight / totalframes;
	  var tween = function tween() {
	    y -= heightincrement;
	    s.height = y + 'px';
	    if (y > 0) {
	      setTimeout(tween, interval);
	    } else {
	      s.height = '';
	      s.display = 'none';
	    }
	  };
	  tween();
	}
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	  }
	
	  _createClass(_class, [{
	    key: 'render',
	    value: function render(_ref2) {
	      var page = _ref2.page;
	
	      return (0, _cmmn.createElement)(
	        'header',
	        { className: _styles2.default.header },
	        (0, _cmmn.createElement)(
	          _components.Container,
	          null,
	          (0, _cmmn.createElement)(
	            'a',
	            { href: '*/' },
	            (0, _cmmn.createElement)('img', { className: _styles2.default.logo, src: __webpack_require__(30) })
	          ),
	          menu.map(function (_ref3, i) {
	            var title = _ref3.title,
	                href = _ref3.href,
	                active = _ref3.active,
	                items = _ref3.items;
	            return (0, _cmmn.createElement)(
	              MenuItem,
	              { title: title, href: '*/' + href, active: page == active, last: i == menu.length - 1 },
	              items != null ? (0, _cmmn.createElement)(
	                _submenu2.default,
	                null,
	                items.map(function (item) {
	                  return (0, _cmmn.createElement)(
	                    'link',
	                    { href: '*/' + item.href },
	                    item.title
	                  );
	                })
	              ) : null
	            );
	          }),
	          (0, _cmmn.createElement)(
	            'a',
	            { className: _styles2.default.mobileNav },
	            (0, _cmmn.createElement)('i', { className: 'fa fa-bars' })
	          ),
	          (0, _cmmn.createElement)(
	            'div',
	            { className: _styles2.default.contact },
	            (0, _cmmn.createElement)(
	              'p',
	              null,
	              '22 Muchison Terrace'
	            ),
	            (0, _cmmn.createElement)(
	              'p',
	              null,
	              'Perth WA 6000'
	            ),
	            (0, _cmmn.createElement)(
	              'p',
	              { className: _styles2.default.dbl },
	              (0, _cmmn.createElement)('i', { className: 'fa fa-phone' }),
	              '\xA0(08) 9227 5374'
	            )
	          )
	        ),
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles2.default.mobileMenu, style: 'display: none;' },
	          (0, _cmmn.createElement)(
	            _components.Container,
	            null,
	            (0, _cmmn.createElement)(
	              'ul',
	              null,
	              menu.map(function (_ref4) {
	                var title = _ref4.title,
	                    href = _ref4.href,
	                    active = _ref4.active,
	                    items = _ref4.items;
	                return [(0, _cmmn.createElement)(
	                  'li',
	                  null,
	                  (0, _cmmn.createElement)(
	                    'a',
	                    { href: '*/' + href },
	                    title
	                  )
	                ), items != null ? items.map(function (item) {
	                  return (0, _cmmn.createElement)(
	                    'li',
	                    { className: _styles2.default.mobileMenu.subitem },
	                    (0, _cmmn.createElement)(
	                      'a',
	                      { href: '*/' + item.href },
	                      item.title
	                    )
	                  );
	                }) : null];
	              })
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'mount',
	    value: function mount(node) {
	      var navOpen = false;
	      node.querySelector('.' + _styles2.default.mobileNav).addEventListener('click', function () {
	        var menu = node.querySelector('.' + _styles2.default.mobileMenu);
	        navOpen = !navOpen;
	        if (navOpen) {
	          menu.style.display = '';
	          var h = menu.clientHeight;
	          slideDown(menu, 0.25, h);
	        } else {
	          var h = menu.clientHeight;
	          slideUp(menu, 0.25, h);
	        }
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-header-styles---header---10oqo {\n  position: relative;\n  border-bottom: 1px solid black;\n  z-index: 1000;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5); }\n\n.src-views-header-styles---logo---21UGf {\n  display: inline-block;\n  width: 180px;\n  margin: 20px 40px 18px 0;\n  vertical-align: middle; }\n\n.src-views-header-styles---menu-item---1P2uG {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  border-left: 1px solid #a0a0a0;\n  -webkit-transform: matrix(1, 0, -0.35, 1, 8, 0);\n  -ms-transform: matrix(1, 0, -0.35, 1, 8, 0);\n  transform: matrix(1, 0, -0.35, 1, 8, 0); }\n  .src-views-header-styles---menu-item--active---2Enug {\n    background-color: #006e9c;\n    border-left: 1px solid #0092cf;\n    color: white; }\n  .src-views-header-styles---menu-item--active---2Enug + .src-views-header-styles---menu-item---1P2uG {\n    border-left: 1px solid #0092cf; }\n  .src-views-header-styles---menu-item--last---3VdyI {\n    border-right: 1px solid #a0a0a0; }\n  .src-views-header-styles---menu-item--last---3VdyI.src-views-header-styles---menu-item--active---2Enug {\n    border-right: 1px solid #0092cf; }\n  .src-views-header-styles---menu-item__text---4J8E6 {\n    display: block;\n    padding: 90px 20px 15px 25px;\n    line-height: 15px;\n    text-align: center;\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    color: #e0e0e0;\n    text-decoration: none;\n    cursor: pointer; }\n    .src-views-header-styles---menu-item__text---4J8E6:hover {\n      color: #03b5ff;\n      transition: color 0.4s; }\n    @media (min-width: 1200px) {\n      .src-views-header-styles---menu-item__text---4J8E6 {\n        font-size: 1.3rem;\n        letter-spacing: 0.15em; } }\n  .src-views-header-styles---menu-item--active---2Enug .src-views-header-styles---menu-item__text---4J8E6, .src-views-header-styles---menu-item--active---2Enug .src-views-header-styles---menu-item__text---4J8E6:hover {\n    color: white; }\n  @media (max-width: 1200px) {\n    .src-views-header-styles---menu-item---1P2uG {\n      margin-top: 3rem; }\n      .src-views-header-styles---menu-item__text---4J8E6 {\n        padding-top: 60px; } }\n  @media (max-width: 1000px) {\n    .src-views-header-styles---menu-item---1P2uG {\n      display: none; } }\n\n.src-views-header-styles---dd-menu---3m0IT {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  background-color: #282828;\n  display: none; }\n  .src-views-header-styles---dd-menu---3m0IT li {\n    border-top: 1px solid #a0a0a0; }\n  .src-views-header-styles---menu-item--active---2Enug .src-views-header-styles---dd-menu---3m0IT {\n    background-color: #006e9c; }\n    .src-views-header-styles---menu-item--active---2Enug .src-views-header-styles---dd-menu---3m0IT li {\n      border-top: 1px solid #0092cf; }\n  .src-views-header-styles---dd-menu---3m0IT a {\n    display: block;\n    color: white;\n    text-decoration: none;\n    font-size: 1.4rem;\n    line-height: 1.4;\n    padding: 0.5em 0.75em; }\n    .src-views-header-styles---dd-menu---3m0IT a:hover {\n      background-color: rgba(255, 255, 255, 0.1); }\n\n.src-views-header-styles---mobile-nav---3skS1 {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -0.5rem;\n  text-align: center;\n  border: 1px solid #202020;\n  border-radius: 3px;\n  cursor: pointer; }\n  .src-views-header-styles---mobile-nav---3skS1 i {\n    line-height: 4rem;\n    color: white;\n    text-decoration: none;\n    font-size: 2rem;\n    padding: 0 1.5rem; }\n    .src-views-header-styles---mobile-nav---3skS1 i:before {\n      vertical-align: middle; }\n    .src-views-header-styles---mobile-nav---3skS1 i:after {\n      content: \"Navigation\";\n      font-family: 'Abel', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      font-size: 1.4rem;\n      margin-left: 0.5em;\n      text-transform: uppercase;\n      vertical-align: middle;\n      letter-spacing: 0.05em; }\n      @media (max-width: 450px) {\n        .src-views-header-styles---mobile-nav---3skS1 i:after {\n          content: \"\";\n          display: none; } }\n  .src-views-header-styles---mobile-nav---3skS1:hover {\n    background-color: #202020; }\n  @media (max-width: 1000px) {\n    .src-views-header-styles---mobile-nav---3skS1 {\n      display: block; } }\n  @media (max-width: 600px) {\n    .src-views-header-styles---mobile-nav---3skS1 {\n      margin-top: -3.25rem; } }\n\n.src-views-header-styles---contact---1NLDy {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -4rem;\n  line-height: 2rem;\n  font-size: 1.4rem;\n  color: #e0e0e0;\n  text-align: right; }\n  .src-views-header-styles---contact---1NLDy i {\n    color: #006e9c; }\n  .src-views-header-styles---contact---1NLDy p {\n    margin: 0; }\n    .src-views-header-styles---contact---1NLDy p.src-views-header-styles---dbl---1nYJb {\n      margin-top: 1.4em; }\n  @media (max-width: 1200px) {\n    .src-views-header-styles---contact---1NLDy {\n      top: 0.5rem;\n      margin: 0; }\n      .src-views-header-styles---contact---1NLDy p {\n        display: inline-block;\n        margin-left: 15px; }\n        .src-views-header-styles---contact---1NLDy p, .src-views-header-styles---contact---1NLDy p.src-views-header-styles---dbl---1nYJb {\n          margin-top: 0; } }\n  @media (max-width: 1000px) {\n    .src-views-header-styles---contact---1NLDy {\n      top: 1rem; } }\n  @media (max-width: 600px) {\n    .src-views-header-styles---contact---1NLDy {\n      position: relative;\n      text-align: center;\n      top: 0;\n      margin-top: 0.5rem;\n      margin-bottom: 1rem; }\n      .src-views-header-styles---contact---1NLDy p {\n        margin: 0 7px; } }\n\n.src-views-header-styles---mobile-menu---210GA {\n  background-color: black;\n  font-size: 1.6rem;\n  padding: 1px 0;\n  overflow: hidden; }\n  .src-views-header-styles---mobile-menu---210GA ul {\n    margin: 20px 0;\n    padding: 0;\n    list-style: none; }\n  .src-views-header-styles---mobile-menu---210GA li {\n    text-align: left;\n    margin-top: 0.7em; }\n  .src-views-header-styles---mobile-menu---210GA a {\n    color: #e0e0e0;\n    text-decoration: none;\n    line-height: 1.4; }\n    .src-views-header-styles---mobile-menu---210GA a:hover {\n      color: white; }\n  .src-views-header-styles---mobile-menu---210GA li.src-views-header-styles---mobile-menu__subitem---2ppyM {\n    margin-top: 0; }\n    .src-views-header-styles---mobile-menu---210GA li.src-views-header-styles---mobile-menu__subitem---2ppyM > a {\n      padding-left: 1.4em; }\n", ""]);
	
	// exports
	exports.locals = {
		"header": "src-views-header-styles---header---10oqo",
		"logo": "src-views-header-styles---logo---21UGf",
		"menu-item": "src-views-header-styles---menu-item---1P2uG",
		"menu-item--active": "src-views-header-styles---menu-item--active---2Enug",
		"menu-item--last": "src-views-header-styles---menu-item--last---3VdyI",
		"menu-item__text": "src-views-header-styles---menu-item__text---4J8E6",
		"dd-menu": "src-views-header-styles---dd-menu---3m0IT",
		"mobile-nav": "src-views-header-styles---mobile-nav---3skS1",
		"contact": "src-views-header-styles---contact---1NLDy",
		"dbl": "src-views-header-styles---dbl---1nYJb",
		"mobile-menu": "src-views-header-styles---mobile-menu---210GA",
		"mobile-menu__subitem": "src-views-header-styles---mobile-menu__subitem---2ppyM"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _components = __webpack_require__(28);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Container = exports.Container = function Container(_ref) {
	  var children = _ref.children;
	  return (0, _cmmn.createElement)(
	    'div',
	    { className: _components2.default.container },
	    children
	  );
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-theme-components---container---gAeH- {\n  position: relative;\n  width: auto;\n  margin: 0 30px; }\n  @media (min-width: 1200px) {\n    .src-views-theme-components---container---gAeH- {\n      width: 90%;\n      min-width: 1140px;\n      max-width: 1300px;\n      margin: 0 auto; } }\n", ""]);
	
	// exports
	exports.locals = {
		"container": "src-views-theme-components---container---gAeH-"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cmmn = __webpack_require__(3);
	
	var _styles = __webpack_require__(26);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SubMenu = function () {
	  function SubMenu() {
	    _classCallCheck(this, SubMenu);
	  }
	
	  _createClass(SubMenu, [{
	    key: 'render',
	    value: function render(_ref) {
	      var children = _ref.children;
	
	      return (0, _cmmn.createElement)(
	        'ul',
	        { id: 'xyz', className: _styles2.default.ddMenu },
	        children.map(function (el) {
	          return (0, _cmmn.createElement)(
	            'li',
	            null,
	            (0, _cmmn.createElement)(
	              'a',
	              { href: el.attribs.href },
	              el.children
	            )
	          );
	        })
	      );
	    }
	  }, {
	    key: 'mount',
	    value: function mount(node) {
	      var parent = node.parentNode;
	      parent.addEventListener('mouseover', function () {
	        node.style.display = 'block';
	      });
	      parent.addEventListener('mouseout', function () {
	        node.style.display = 'none';
	      });
	    }
	  }]);
	
	  return SubMenu;
	}();
	
	exports.default = SubMenu;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/svg/dpl-motors-logo-1KrUtWGe.svg";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cmmn = __webpack_require__(3);
	
	__webpack_require__(10);
	
	var _styles = __webpack_require__(32);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _components = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FooterLink = function FooterLink(_ref) {
	  var icon = _ref.icon,
	      href = _ref.href,
	      children = _ref.children;
	  return (0, _cmmn.createElement)(
	    'a',
	    { className: _styles2.default.footerLinks.item, href: href },
	    children,
	    (0, _cmmn.createElement)('span', { className: _styles2.default.footerLinks.item.icon.with('icon-' + icon) })
	  );
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    'footer',
	    { className: _styles2.default.footer },
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles2.default.makes },
	      (0, _cmmn.createElement)(
	        _components.Container,
	        null,
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles2.default.makes.specialise },
	          'European Mechanical Specialists'
	        ),
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles2.default.makes.logos },
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(34) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(35) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(36) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(37) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(38) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(39) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(40) }),
	          (0, _cmmn.createElement)('img', { src: __webpack_require__(41) })
	        )
	      )
	    ),
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles2.default.footerLinks },
	      (0, _cmmn.createElement)(
	        _components.Container,
	        null,
	        (0, _cmmn.createElement)(
	          FooterLink,
	          { icon: 0, href: '*/book/' },
	          'Book a Service'
	        ),
	        (0, _cmmn.createElement)(
	          FooterLink,
	          { icon: 1, href: '*/contact-us/' },
	          'Contact Us'
	        ),
	        (0, _cmmn.createElement)(
	          FooterLink,
	          { icon: 2, href: '*/parts/' },
	          'Find a Part'
	        ),
	        (0, _cmmn.createElement)(
	          FooterLink,
	          { icon: 3, href: '*/trade/' },
	          'Trade'
	        )
	      )
	    ),
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles2.default.contact },
	      (0, _cmmn.createElement)(
	        _components.Container,
	        null,
	        (0, _cmmn.createElement)(
	          'a',
	          { href: '*/' },
	          (0, _cmmn.createElement)('img', { className: _styles2.default.contact.logo, src: __webpack_require__(30) })
	        ),
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles2.default.contact.info },
	          '22 Muchison Terrace',
	          (0, _cmmn.createElement)('br', null),
	          'Perth WA 6000',
	          (0, _cmmn.createElement)('br', null),
	          (0, _cmmn.createElement)('br', null),
	          (0, _cmmn.createElement)('i', { className: 'fa fa-phone' }),
	          '\xA0(08) 9227 5374'
	        )
	      )
	    )
	  );
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-footer-styles---footer---1RfXZ {\n  color: white; }\n\n.src-views-footer-styles---makes---xwB6j {\n  text-align: center;\n  padding: 15px 0; }\n  .src-views-footer-styles---makes__specialise---1Zj77 {\n    display: inline-block;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    letter-spacing: 0.25em;\n    vertical-align: middle;\n    color: #e0e0e0;\n    margin: 15px 10px; }\n  .src-views-footer-styles---makes__logos---UooKY {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px 10px; }\n    .src-views-footer-styles---makes__logos---UooKY img {\n      display: inline-block;\n      height: 50px;\n      margin: 5px 10px; }\n      @media (max-width: 800px) {\n        .src-views-footer-styles---makes__logos---UooKY img {\n          height: 40px; } }\n  @media (max-width: 800px) {\n    .src-views-footer-styles---makes---xwB6j {\n      padding-bottom: 20px; } }\n\n.src-views-footer-styles---footer-links---GsbML {\n  background-color: #004a69;\n  text-align: center; }\n  .src-views-footer-styles---footer-links__item---3-jhm {\n    position: relative;\n    display: inline-block;\n    height: 200px;\n    width: 20%;\n    text-align: center;\n    border-left: 1px solid #003850;\n    -webkit-transform: matrix(1, 0, -0.35, 1, 0, 0);\n    -ms-transform: matrix(1, 0, -0.35, 1, 0, 0);\n    transform: matrix(1, 0, -0.35, 1, 0, 0);\n    box-sizing: border-box;\n    padding: 20px 10px;\n    font-size: 1.6rem;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    cursor: pointer;\n    line-height: 2rem;\n    color: white;\n    text-decoration: none; }\n    .src-views-footer-styles---footer-links__item---3-jhm:hover {\n      background-color: #006e9c;\n      border-left: 1px solid #0092cf; }\n    .src-views-footer-styles---footer-links__item---3-jhm:hover + .src-views-footer-styles---footer-links__item---3-jhm {\n      border-left: 1px solid #0092cf; }\n    .src-views-footer-styles---footer-links__item---3-jhm:last-child {\n      border-right: 1px solid #003850; }\n    .src-views-footer-styles---footer-links__item---3-jhm:hover:last-child {\n      border-right: 1px solid #0092cf; }\n    .src-views-footer-styles---footer-links__item__icon---GAb6i {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 70px;\n      height: 70px;\n      margin: -35px 0 0 -35px;\n      -webkit-transform: matrix(1, 0, 0.35, 1, 0, 0);\n      -ms-transform: matrix(1, 0, 0.35, 1, 0, 0);\n      transform: matrix(1, 0, 0.35, 1, 0, 0);\n      background-image: url(" + __webpack_require__(33) + ");\n      background-size: auto 70px;\n      background-position: 0 50%;\n      background-repeat: no-repeat;\n      vertical-align: top; }\n      .src-views-footer-styles---footer-links__item__icon--icon-0---1skvb {\n        background-position-x: 9px; }\n      .src-views-footer-styles---footer-links__item__icon--icon-1---3_Ijs {\n        background-position-x: -88px; }\n      .src-views-footer-styles---footer-links__item__icon--icon-2---3Hz6m {\n        background-position-x: -185px; }\n      .src-views-footer-styles---footer-links__item__icon--icon-3---jJE6W {\n        background-position-x: -282px; }\n      .src-views-footer-styles---footer-links__item__icon---GAb6i:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border: 1px solid white;\n        -webkit-transform: matrix(1, 0, -0.35, 1, 0, 0);\n        -ms-transform: matrix(1, 0, -0.35, 1, 0, 0);\n        transform: matrix(1, 0, -0.35, 1, 0, 0); }\n    @media (max-width: 1000px) {\n      .src-views-footer-styles---footer-links__item---3-jhm {\n        font-size: 1.4rem;\n        height: 170px; }\n        .src-views-footer-styles---footer-links__item__icon---GAb6i {\n          width: 50px;\n          height: 50px;\n          margin: -25px 0 0 -25px;\n          background-size: auto 50px;\n          background-position: 6px 50%; }\n          .src-views-footer-styles---footer-links__item__icon--icon-0---1skvb {\n            background-position-x: 7px; }\n          .src-views-footer-styles---footer-links__item__icon--icon-1---3_Ijs {\n            background-position-x: -65px; }\n          .src-views-footer-styles---footer-links__item__icon--icon-2---3Hz6m {\n            background-position-x: -132px; }\n          .src-views-footer-styles---footer-links__item__icon--icon-3---jJE6W {\n            background-position-x: -200px; } }\n    @media (max-width: 800px) {\n      .src-views-footer-styles---footer-links__item---3-jhm {\n        -webkit-transform: none;\n        -ms-transform: none;\n        transform: none;\n        width: 40%;\n        border: 1px solid #003850;\n        margin: 10px;\n        border-radius: 3px; }\n        .src-views-footer-styles---footer-links__item---3-jhm:hover {\n          background-color: #006e9c;\n          border: 1px solid #0092cf; }\n        .src-views-footer-styles---footer-links__item---3-jhm:hover + .src-views-footer-styles---footer-links__item---3-jhm {\n          border: 1px solid #003850; } }\n    @media (max-width: 450px) {\n      .src-views-footer-styles---footer-links__item---3-jhm {\n        width: 90%;\n        height: 13.5rem;\n        margin: 5px; }\n        .src-views-footer-styles---footer-links__item__icon---GAb6i {\n          top: auto;\n          margin-top: 0;\n          bottom: 25px; } }\n  @media (max-width: 800px) {\n    .src-views-footer-styles---footer-links---GsbML {\n      padding: 10px 0; } }\n\n.src-views-footer-styles---contact---72kR5 {\n  text-align: right;\n  padding: 30px 0; }\n  .src-views-footer-styles---contact__logo----TpaK {\n    display: inline-block;\n    height: 50px;\n    margin-right: 50px;\n    vertical-align: middle; }\n  .src-views-footer-styles---contact__info---9fVb4 {\n    display: inline-block;\n    line-height: 2rem;\n    font-size: 1.4rem;\n    color: #e0e0e0;\n    text-align: right;\n    vertical-align: middle; }\n    .src-views-footer-styles---contact__info---9fVb4 i {\n      color: #006e9c; }\n  @media (max-width: 450px) {\n    .src-views-footer-styles---contact---72kR5 {\n      text-align: center; }\n      .src-views-footer-styles---contact__logo----TpaK {\n        margin: 0 0 25px 0; }\n      .src-views-footer-styles---contact__info---9fVb4 {\n        display: block;\n        text-align: center; } }\n", ""]);
	
	// exports
	exports.locals = {
		"footer": "src-views-footer-styles---footer---1RfXZ",
		"makes": "src-views-footer-styles---makes---xwB6j",
		"makes__specialise": "src-views-footer-styles---makes__specialise---1Zj77",
		"makes__logos": "src-views-footer-styles---makes__logos---UooKY",
		"footer-links": "src-views-footer-styles---footer-links---GsbML",
		"footer-links__item": "src-views-footer-styles---footer-links__item---3-jhm",
		"footer-links__item__icon": "src-views-footer-styles---footer-links__item__icon---GAb6i",
		"footer-links__item__icon--icon-0": "src-views-footer-styles---footer-links__item__icon--icon-0---1skvb",
		"footer-links__item__icon--icon-1": "src-views-footer-styles---footer-links__item__icon--icon-1---3_Ijs",
		"footer-links__item__icon--icon-2": "src-views-footer-styles---footer-links__item__icon--icon-2---3Hz6m",
		"footer-links__item__icon--icon-3": "src-views-footer-styles---footer-links__item__icon--icon-3---jJE6W",
		"contact": "src-views-footer-styles---contact---72kR5",
		"contact__logo": "src-views-footer-styles---contact__logo----TpaK",
		"contact__info": "src-views-footer-styles---contact__info---9fVb4"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/icons-3gUTBSaf.png";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/mercedes-benz-3KhEKosv.png";

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/bmw-2K_cZx8C.png";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/audi-3sjvTOk_.png";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/aston-martin-2dd25U3z.png";

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/maserati-sXtXj2IM.png";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/porche-2RSKGy2i.png";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/jaguar-3wiN46ZC.png";

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/land-rover-EorU9x4G.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cmmn = __webpack_require__(3);
	
	var _styles = __webpack_require__(43);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MenuItem = function MenuItem(_ref) {
	  var icon = _ref.icon,
	      href = _ref.href,
	      children = _ref.children;
	  return (0, _cmmn.createElement)(
	    'a',
	    { className: _styles2.default.sidebar.item, href: href },
	    children,
	    (0, _cmmn.createElement)('span', { className: _styles2.default.sidebar.item.icon, style: "background-position-y: " + (-53.5 * icon - 4) + "px" })
	  );
	};
	
	var Sidemenu = function () {
	  function Sidemenu() {
	    _classCallCheck(this, Sidemenu);
	  }
	
	  _createClass(Sidemenu, [{
	    key: 'render',
	    value: function render(_ref2) {
	      var top = _ref2.top;
	
	      this.top = top;
	      return (0, _cmmn.createElement)(
	        'div',
	        { className: _styles2.default.sidebar.with(this.top ? 'top' : '') },
	        (0, _cmmn.createElement)(
	          MenuItem,
	          { href: '*/book/', icon: 0 },
	          'Book a Service'
	        ),
	        (0, _cmmn.createElement)(
	          MenuItem,
	          { href: '*/contact-us/', icon: 1 },
	          'Contact Us'
	        ),
	        (0, _cmmn.createElement)(
	          MenuItem,
	          { href: 'javascript:void(0);', icon: 2 },
	          'Join the Mailing List'
	        ),
	        (0, _cmmn.createElement)(
	          MenuItem,
	          { href: '*/parts/', icon: 3 },
	          'Find a Part'
	        ),
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles2.default.sidebar.item.with('no-hover'), href: '#' },
	          (0, _cmmn.createElement)(
	            'a',
	            { className: _styles2.default.sidebar.item.socialLink.with('fb'), href: '/', target: '_blank' },
	            (0, _cmmn.createElement)('i', { className: 'fa fa-facebook' })
	          ),
	          (0, _cmmn.createElement)(
	            'a',
	            { className: _styles2.default.sidebar.item.socialLink.with('twitter'), href: '/', target: '_blank' },
	            (0, _cmmn.createElement)('i', { className: 'fa fa-twitter' })
	          ),
	          (0, _cmmn.createElement)('span', { className: _styles2.default.sidebar.item.icon, style: "background-position-y: " + (-53.5 * 4 - 4) + "px" })
	        )
	      );
	    }
	  }, {
	    key: 'mount',
	    value: function mount(node) {
	      var _this = this;
	
	      node.addEventListener('mouseover', function () {
	        node.className = _styles2.default.sidebar.with(_this.top ? 'top' : '', 'visible');
	      });
	      node.addEventListener('mouseout', function () {
	        node.className = _styles2.default.sidebar.with(_this.top ? 'top' : '');
	      });
	    }
	  }]);
	
	  return Sidemenu;
	}();
	
	exports.default = Sidemenu;
	;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-sidemenu-styles---sidebar---2fVwP {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -128px;\n  height: 256px;\n  background-color: white;\n  background-color: rgba(200, 200, 200, 0.7);\n  overflow: hidden; }\n  .src-views-sidemenu-styles---sidebar--top---g_xw8 {\n    top: 0;\n    margin-top: 100px; }\n    @media (max-width: 1000px) {\n      .src-views-sidemenu-styles---sidebar--top---g_xw8 {\n        margin-top: 40px; } }\n  .src-views-sidemenu-styles---sidebar__item---3tF0f {\n    position: relative;\n    display: block;\n    width: 240px;\n    background-color: #282828;\n    margin: 1px 0 1px 1px;\n    padding: 10px 20px;\n    line-height: 30px;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    letter-spacing: 0.25em;\n    color: #e0e0e0;\n    cursor: pointer;\n    text-decoration: none;\n    margin-right: -225px;\n    transition: margin-right 0.5s; }\n    .src-views-sidemenu-styles---sidebar__item---3tF0f:hover {\n      background-color: #006e9c; }\n    .src-views-sidemenu-styles---sidebar__item--no-hover---364jd:hover {\n      background-color: #282828;\n      cursor: default; }\n    .src-views-sidemenu-styles---sidebar__item__icon---VvZ3o {\n      display: block;\n      position: absolute;\n      background-color: #282828;\n      top: 0;\n      right: 225px;\n      bottom: 0;\n      width: 55px;\n      background-image: url(" + __webpack_require__(44) + ");\n      background-size: 40px;\n      background-position: 9px -4px;\n      background-repeat: no-repeat;\n      transition: right 0.5s; }\n    .src-views-sidemenu-styles---sidebar__item---3tF0f:hover .src-views-sidemenu-styles---sidebar__item__icon---VvZ3o {\n      background-color: #006e9c; }\n    .src-views-sidemenu-styles---sidebar__item--no-hover---364jd:hover .src-views-sidemenu-styles---sidebar__item__icon---VvZ3o {\n      background-color: #282828; }\n    .src-views-sidemenu-styles---sidebar__item__social-link---3LKpQ {\n      display: inline-block;\n      margin: -9px 0 -9px -19px;\n      width: 48px;\n      height: 48px;\n      cursor: pointer;\n      color: white;\n      text-decoration: none;\n      text-align: center;\n      font-size: 24px; }\n      .src-views-sidemenu-styles---sidebar__item__social-link---3LKpQ + .src-views-sidemenu-styles---sidebar__item__social-link---3LKpQ {\n        margin-left: 1px; }\n      .src-views-sidemenu-styles---sidebar__item__social-link--fb---287lu {\n        background-color: #004a72; }\n      .src-views-sidemenu-styles---sidebar__item__social-link--twitter---2CSIZ {\n        background-color: #00b8f1; }\n      .src-views-sidemenu-styles---sidebar__item__social-link---3LKpQ i {\n        line-height: 48px; }\n  .src-views-sidemenu-styles---sidebar--visible---3-E6V .src-views-sidemenu-styles---sidebar__item---3tF0f {\n    margin-right: 0; }\n  .src-views-sidemenu-styles---sidebar--visible---3-E6V .src-views-sidemenu-styles---sidebar__item__icon---VvZ3o {\n    right: 0; }\n", ""]);
	
	// exports
	exports.locals = {
		"sidebar": "src-views-sidemenu-styles---sidebar---2fVwP",
		"sidebar--top": "src-views-sidemenu-styles---sidebar--top---g_xw8",
		"sidebar__item": "src-views-sidemenu-styles---sidebar__item---3tF0f",
		"sidebar__item--no-hover": "src-views-sidemenu-styles---sidebar__item--no-hover---364jd",
		"sidebar__item__icon": "src-views-sidemenu-styles---sidebar__item__icon---VvZ3o",
		"sidebar__item__social-link": "src-views-sidemenu-styles---sidebar__item__social-link---3LKpQ",
		"sidebar__item__social-link--fb": "src-views-sidemenu-styles---sidebar__item__social-link--fb---287lu",
		"sidebar__item__social-link--twitter": "src-views-sidemenu-styles---sidebar__item__social-link--twitter---2CSIZ",
		"sidebar--visible": "src-views-sidemenu-styles---sidebar--visible---3-E6V"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/icons-3V4y03W0.png";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Services'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'services' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Services'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'DPL Motors are an independent mechanical workshop placed in East Perth.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'After gaining many years of experience in the motor trade we decided to set up on our own in 2011. We mainly specialise in German vehicles, such as Mercedes, BMW, Audi, VW, SEAT or Skoda, however don\u2019t hesitate if you own different brand of car as we have the capability to work on any brand. The latest diagnostic software and equipment allows us to work on any vehicle, from a Holden to a Range Rover. This diagnostic equipment is up to main dealer standard so we can carry out all diagnostic work at a fraction of the price compared to a franchised dealer.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We have the technical knowledge and experience to look after you and your vehicle in our clean and modern workshop. We offer courtesy cars and commercial vehicles to keep you on the road while we take care of your vehicle. We can also arrange to collect and deliver your vehicle if you are local.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'Volkswagen TDi with loss of power?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We have many cases of lack of power from VW and Audi TDi engines and know      how to fix this. We have had new customers come to us after spending      thousands of dollars at other garage\'s without the problem being fixed,\n      and we have been able to sort this out within a few hours. If you are\n      experiencing a loss of power please give us a call and we will see\n      what we can do.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'Porsche Cayenne or VW Touareg with tail-shaft vibration?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'There is a known problem with the bearings on these prop shafts and the main dealer will quote you for a new replacement part. Although this is one option, another is to have the bearing fixed at a fraction of the price. DPL Motors can help you with either option, and it will be signification cheaper than the main dealer prices.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'BMW\'s with suspension issues? Mercedes with gearbox problems?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We encounter these and many more issues weekly and with our experience and knowledge we will have your vehicle back to you in no time.'
	    )
	  );
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cmmn = __webpack_require__(3);
	
	__webpack_require__(10);
	
	var _styles = __webpack_require__(47);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _header = __webpack_require__(25);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(31);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _components = __webpack_require__(27);
	
	var _sidemenu = __webpack_require__(42);
	
	var _sidemenu2 = _interopRequireDefault(_sidemenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var children = _ref.children,
	      page = _ref.page,
	      grey = _ref.grey;
	  return (0, _cmmn.createElement)(
	    'div',
	    null,
	    (0, _cmmn.createElement)(_header2.default, { page: page }),
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles2.default.content.with(grey ? 'grey' : '') },
	      (0, _cmmn.createElement)(
	        _components.Container,
	        null,
	        (0, _cmmn.createElement)('div', { className: _styles2.default.content.rightImg, style: 'background-image: url(' + __webpack_require__(48) + ');' }),
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles2.default.content.copy },
	          children,
	          (0, _cmmn.createElement)(
	            'a',
	            { href: '*/book/', className: _styles2.default.bookBtn },
	            'Book Service'
	          )
	        )
	      ),
	      (0, _cmmn.createElement)(_sidemenu2.default, { top: true })
	    ),
	    (0, _cmmn.createElement)(_footer2.default, null)
	  );
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-pages-styles---content---15gAm {\n  position: relative;\n  background-color: white;\n  min-height: 300px;\n  padding: 60px 0;\n  overflow: hidden; }\n  .src-views-pages-styles---content--grey---1CK5C {\n    background-color: #f4f4f4; }\n  .src-views-pages-styles---content---15gAm h1 {\n    font-size: 3.2rem;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    font-weight: 300;\n    line-height: 1.4;\n    margin: 0 0 0.7em 0; }\n  .src-views-pages-styles---content---15gAm h3 {\n    font-size: 1.6rem;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    line-height: 1.4;\n    margin: 1.4em 0 0.7em 0;\n    color: #006e9c; }\n  .src-views-pages-styles---content---15gAm p, .src-views-pages-styles---content---15gAm ul {\n    font-size: 1.6rem;\n    line-height: 1.3;\n    margin: 1.3em 0; }\n  .src-views-pages-styles---content__copy---11d-X {\n    width: 550px;\n    min-height: 500px; }\n  .src-views-pages-styles---content__right-img---ha2cC {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    max-height: 500px;\n    left: 600px;\n    right: -200px;\n    background-size: cover;\n    background-position: 0 50%; }\n    .src-views-pages-styles---content__right-img--map---2IIgO {\n      left: 500px;\n      right: -100px; }\n  @media (max-width: 1000px) {\n    .src-views-pages-styles---content__copy---11d-X {\n      position: relative;\n      width: auto;\n      margin-top: -8rem;\n      min-height: 0; }\n      .src-views-pages-styles---content__copy---11d-X h1 {\n        color: white;\n        z-index: 100;\n        line-height: 3rem;\n        padding: 1rem 0;\n        margin-bottom: 3rem;\n        text-shadow: 0 1px 3px black;\n        height: 6rem; }\n      .src-views-pages-styles---content__copy---11d-X:before {\n        content: \"\";\n        display: block;\n        width: 45px;\n        height: 160px;\n        float: right; }\n    .src-views-pages-styles---content__right-img---ha2cC {\n      position: relative;\n      left: 0;\n      right: 0;\n      margin: -70px -200px 0 -200px;\n      height: 250px;\n      background-position: 50% 50%; } }\n  @media (max-width: 450px) {\n    .src-views-pages-styles---content__copy---11d-X h1 {\n      font-size: 2.6rem; } }\n\n.src-views-pages-styles---book-btn---JVOXc {\n  display: inline-block;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  padding: 0.75em 1em;\n  width: 100%;\n  max-width: 250px;\n  margin: 1em 0;\n  background-color: #006e9c;\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.1em; }\n  .src-views-pages-styles---book-btn---JVOXc:hover {\n    background-color: #0092cf; }\n", ""]);
	
	// exports
	exports.locals = {
		"content": "src-views-pages-styles---content---15gAm",
		"content--grey": "src-views-pages-styles---content--grey---1CK5C",
		"content__copy": "src-views-pages-styles---content__copy---11d-X",
		"content__right-img": "src-views-pages-styles---content__right-img---ha2cC",
		"content__right-img--map": "src-views-pages-styles---content__right-img--map---2IIgO",
		"book-btn": "src-views-pages-styles---book-btn---JVOXc"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/jpg/bk-img-2JMeFrCm.jpg";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Servicing'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'services' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Scheduled Servicing'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'At DPL motors we customise our service to suit your budget and car type. We specialise not only in European vehicles but any make or model,  whether it\'s a small car, family car, sports car, SUV, 4WD, ute or van.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our logbook services are carried out according to manufacturer\u2019s specifications and we replace all scheduled parts. We also carry out a full safety check and every service comes with a 6month/10,000km warranty. Our European trained mechanics only use the best quality parts on your vehicle, we use parts that are manufactured to match or exceed the Original Equipment Manufacturer (OEM).'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our Minor Service is the minimum you should do to your vehicle. This service helps maintain your vehicle and prevents unforeseen faults. In this service we will replace your Engine Oil and Oil Filter and we check and report on the following; Brakes Front and Rear, Tyre Condition and Thread Depth, all lights, Suspension and Shocks, Instruments, Engine and Gearbox leaks, Exhaust system, CV Joints, Wipers, Check all levels and refill, Check any warning lights and reset the service computer using the very latest diagnostic equipment. Prices for this service start from as little as $179.'
	    )
	  );
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Services'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'services' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Air Conditioning'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'A/C System Ragas And Repairs at DPL MOTORS'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The Air Con system in your car is a serviceable item, just as you have to change your oil and air filters from time to time. It is very important to maintain your Air Conditioning system for the following reasons:'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Due to natural leakage through naturally slightly porous pipes, most A/C systems will lose around 15-20% refrigerant every 12 months resulting in a less powerful and less efficient system. Bacteria and Fungi and can grow in car A/C systems and can cause allergic reactions such as hay-fever, skin irritations, runny noses and itchy eyes.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Your A/C system will put a strain on the compressor which can result in the compressor wearing out quickly If not serviced regularly. This can be costly, as it increases fuel consumption and draws more engine power to run the system. It is recommend that a vehicle\'s air con system is serviced every year to ensure it operates at maximum efficiency. However, there are some indicators that will help you determine if you have a problem with your Air Conditioning system:'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The interior takes longer to cool down? There\u2019s a noticeable increase in fuel consumption? The windscreen doesn\u2019t clear quickly?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The Air-Con System Service Includes:'
	    ),
	    (0, _cmmn.createElement)(
	      'ul',
	      null,
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Testing for leaks'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Emptying and recharging the gas in the system.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Cleaning and Deodorising the entire Air Conditioning'
	      )
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'If you notice an odd, particularly musty smell in your car, it is more than likely that the entire air con system needs proper cleaning with a de-fungicide.'
	    )
	  );
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Performance Tuning'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'performance-tuning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Performance Tuning'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Here at DPL Motors we specialise in performance tuning, remapping via OBD port and general turbo tuning and we pride ourselves in doing so without spoiling any of the principle reasons for buying a turbo powered vehicle in the first place. We believe that their reliability and of course the all important fuel economy should never be compromised.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our aim when creating performance chips, diesel remapping via OBD port or general turbo tuning is to gain the perfect increased power curve and fuel economy improvements. QuattroTune retains all the safety parameters originally programmed into the engine management by the manufacturer so as to protect your engine and drive train from damage.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'A DPL Motors TUNE REMAP Will Give You The Following Gains:'
	    ),
	    (0, _cmmn.createElement)(
	      'ul',
	      null,
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'More Horsepower.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'More Torque.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Improved Throttle Response.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Smoother Power Delivery.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Safer Overtaking.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Guaranteed Better Fuel Economy.'
	      )
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our power gains and improved fuel economy are achieved by very careful matching of parameters such as boost pressure, fuel delivery rates & pump timing along with adjustments to maps that electronically limit torque, throttle response and top speed. All this information in your ECU calibration file is carefully optimised to our exact standards and then programmed back into your ECU and the vehicle comprehensively tested before we allow you to take the vehicle away.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'When You take Your vehicle Away, You Will leave With:'
	    ),
	    (0, _cmmn.createElement)(
	      'ul',
	      null,
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'A 30 Day Money Back Guarantee.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'A Lifetime Warranty On All Remaps.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Guaranteed Better Fuel Economy On All Diesel Remaps.'
	      )
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'When a manufacturer releases a car it is usually a worldwide release meaning the car needs to be able to survive in areas that have extreme climates and poor quality fuels and other additives. With this in mind most manufacturers dial back a car\u2019s engine to a very conservative level. Yes, that\u2019s right! They lower the performance so the engine can survive in very raff conditions and at QUATTRO TUNE we can replace this lost power with our remapping services.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'We also supply a loan car when necessary!'
	      )
	    )
	  );
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'ECU Tuning'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'performance-tuning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'ECU Tuning'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'What is ECU Remapping/Programming?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'When a manufacturer develops a new car they have to take into consideration all of the conditions it may be subjected to in all of the regions in which they intend to sell this model. This means instead of just optimising the ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'ECU\'s program or \'map\''
	      ),
	      ' to deliver the best performance or the most fuel efficiency they have to make compromises to the map to take into account these potential differing operating conditions. These could include sub-standard fuels, extremes in temperature and altitude, differing emission laws and even the possibility that vehicle may not be serviced on a regular basis and in accordance with the manufacturers recommended instructions.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'ECU remapping'
	      ),
	      ' is taking a read from the ECU\u2019s processing chip of the vehicles standard compromised map and adjusting various parameters within the map such as fuel pressure, boost pressure (on turbocharged applications) ignition advance and throttle pedal control amongst others to release the true performance from the engine. It is a completely safe process as it is just giving the engine the performance it should have had in the first place before all the compromises were applied to the original programming. Every engine will have its own unique map and by adjusting this we can fine tune the characteristics of the engine; unleashing more power and in many cases reduce fuel consumption too.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'Benefits of ECU Remapping/Programming'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'ECU programming'
	      ),
	      ' will not only improve the engines power and torque figures it will also sharpen the throttle response and widen the power-band. This will make the power delivery a lot more linear, which in turn will make the vehicle feel a lot livelier to drive and the engine more flexible. Frequently, the vehicles power output is restricted by the manufacturer for no other reason than to ensure that the vehicle fits into a class to suit fleet buyers. As a driving enthusiast, you do not need or want such restrictions placed upon your vehicles ECU and its performance therefore you can benefit from the hidden power and torque locked away within your engine management system.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The other main benefit of ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'remapping'
	      ),
	      ' will be a reduction in fuel consumption. With the extra torque especially at the bottom of the rev range you will see a fuel saving as it will require less throttle input to maintain motorway speeds, you can drive in a higher gear at a slower speed as well as helping significantly when fully laden, towing or on gradients and even in start stop traffic.'
	    )
	  );
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'DPF Solution'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'performance-tuning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'DPF Solution'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'What is a DPF?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'A ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'DPF (Diesel Particulate Filter)'
	      ),
	      ' also known as ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'FAP'
	      ),
	      ' on some French vehicles, is a device fitted to the exhaust system of modern diesel vehicles to reduce emissions and meet European emission standards. It does this by trapping ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Soot (Particulate Matter - PM)'
	      ),
	      ' from the exhaust gasses while letting the gasses flow through the system.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'As with any type of filter a ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Particulate Filter'
	      ),
	      ' needs to be cleaned regularly to function properly. With DPF\u2019s this is done by a process known as ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Regeneration'
	      ),
	      ' which involves a combination of a ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Catalyst'
	      ),
	      ' function in the system and burning the soot to gas at a very high temperature leaving behind an ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Ash residue'
	      ),
	      ' within the DPF. Regeneration should be an automatic process taking place in the normal use of your vehicle, you may have noticed this in the form of a blast of white smoke form the exhaust on occasions.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'Problems Encountered with DPF'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'If regeneration doesn\u2019t function properly it leads to a build-up of soot affecting performance and fuel economy, left unattended this will result in a ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Blocked DPF'
	      ),
	      ' which can ultimately cause very expensive damage to other engine components. A blocked DPF is also potentially dangerous as it can cause overheating in the exhaust system and cause a fire risk. To prevent this damage most new vehicles will go into \u201CLimp Home\u201D safety mode at this stage, meaning the vehicle will have minimum power barely sufficient to crawl home.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'For regeneration to take place it requires the vehicle to be driven regularly at some speed on open roads e.g. motorway driving, typically driving at around 2500 RPM for approx. 15-30mins at least once a month, this will keep things working.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Many diesel vehicles are used primarily in urban areas or on short stop start journeys e.g. local deliveries, taxi\u2019s, school runs etc and many have auto gearbox, so the vehicle does not get the chance to heat up sufficiently and is unable to carry out a full regeneration process.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Even if the regeneration functions as it should, over time the ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Ash Residue'
	      ),
	      ' will build up in the DPF and have the same affect ultimately resulting in a blocked DPF. For this reason a DPF is classified as a Serviceable Item by the vehicle manufacturers like brake pads or air filters etc and not covered under warranty. ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'DPF systems therefore need to be maintained properly.'
	      )
	    )
	  );
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'EGR Solution'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'performance-tuning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'WHAT IS EGR?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'A widely adopted route to reduce NOx emissions is ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Exhaust Gas Recirculation (EGR)'
	      ),
	      '. This involves recirculating a controllable proportion of the ',
	      'engine\'s',
	      ' exhaust back into the intake air. A valve is usually used to control the flow of gas, and the valve may be closed completely if required.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The substitution of burnt gas (which takes no further part in combustion) for oxygen rich air reduces the proportion of the cylinder contents available for combustion. This causes a correspondingly lower heat release and peak cylinder temperature, and reduces the formation of NOx. The presence of an inert gas in the cylinder further limits the peak temperature (more than throttling alone in a spark ignition engine).'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The gas to be recirculated may also be passed through an ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'EGR cooler'
	      ),
	      ', which is usually of the air/water type. This reduces the temperature of the gas, which reduces the cylinder charge temperature when EGR is employed. This has two benefits- the reduction of charge temperature results in lower peak temperature, and the greater density of cooled EGR gas allows a higher proportion of EGR to be used. On a diesel engine the recirculated fraction may be as high as 50% under some operating conditions.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'EGR Solution'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Here at ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'DPL Motors'
	      ),
	      ', we have a very ',
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'advanced solution for EGR'
	      ),
	      '. The valves can become clogged with carbon deposits, causing them to fail or stick, thereby causing error codes and the vehicle not to run correctly. Our software solution to disable the EGR valve is a simple and effective method of improving the efficiency of your engine.'
	    )
	  );
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Truck Tuning'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'performance-tuning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Truck Tuning'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Here at DPL we have created the perfect product in HGV, Truck and commercial turbo diesel engine performance upgrades. We pride ourselves in doing so without spoiling any of the principle reasons for running a turbo diesel powered vehicle in the first place and believe that key points such as their fabulous low down tractability, their reliability and of course the all important fuel economy should never, ever be compromised.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our aim when creating our HGV, Truck and commercial turbo diesel engine performance upgrades is to gain the perfect increased power curve and fuel economy improvements yet retain all the safety parameters originally programmed into the engine management by the manufacturer so as to protect your engine and drive train from damage.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'All our HGV, Trucks and commercial vehicle remaps are programmed to give a strong, linear power delivery right across the rev range.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Rest assured that we don\u2019t just look for a torque and power peak to make the numbers look good. We aim for maximum safe improvements everywhere so the vehicle feels like it has a bigger engine.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'How is this acheived?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our power gains and improved fuel economy are achieved by very careful matching of parameters such as boost pressure, fuel delivery rates & pump timing along with adjustments to maps that electronically limit torque, throttle response and top speed. All this information in your ECU calibration file is carefully optimised to our exacting standards and then programmed back into your ECU and the vehicle comprehensively tested before we allow you to take the vehicle away.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We also offer other services as part of the remap.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'For example a vehicle used for motorsport may require removal of the EGR, a DPF delete, and also benefit from having the vehicle speed limiter removed.'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'Buy with Confidence'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'All our turbo diesel OBD tuning comes as standard with a lifetime warranty against defects and corruption of the product and of course our standard 30 day no quibble trial period.'
	    )
	  );
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Reconditioning'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'reconditioning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Reconditioning'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Engine Rebuild, Repair, Replacement and Rebore services from DPL MOTORS.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'So your engine\'s Head gasket has blown, The car is producing a horrible knocking noise from the bottom end?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The engine has seized? The chain has stretched or belt has snapped? So what to do?'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Why not take a look at our engine rebuild service (petrol and diesel) for the private motorist or the transport industry.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Here at DPL MOTORS we specialise is European vehicles!'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Importing and stocking a large quantity of our parts for cost effective services!'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'The Reconditioning Process'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We receive your vehicle and accept your instruction at our state of the art workshop. Your engine and all associated parts are removed and inspected. The cylinder head is removed from the engine block. Both cylinder head and block are dismantled into their component parts. All worn or broken parts are replaced as part of our quality control system.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The parts for reassembly pass through our specialist cleaning process. At this point all items that require machining are engineered to our exacting specifications. Machined parts are cleaned and measured prior to reassembly.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Your original engine is then rebuilt using new bearings, seals, piston rings and gaskets. Once fully assembled the engine is replaced into your vehicle with new fluids and filters. The engine is then started and tuned for optimum reliability utilising the latest diagnostic systems'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'The Guarantee'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our workmanship and materials are both guaranteed for either the first 12 months from the date of purchase, or 12,000 kms if sooner. In the event of a failure we will replace either the engine or parts free of charge and at our discretion.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      (0, _cmmn.createElement)(
	        'strong',
	        null,
	        'Contact us today for a friendly quote.'
	      )
	    )
	  );
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Motor Rebuilds'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'reconditioning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Motor Rebuilds'
	    ),
	    (0, _cmmn.createElement)(
	      'h3',
	      null,
	      'The Reconditioning process'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We receive your vehicle and accept your instruction at our workshop. Your engine and all associated parts are removed and inspected. The cylinder head is removed from the engine block. Both cylinder head and block are dismantled into their component parts. All worn or broken parts are replaced as part of our quality control system. The parts for reassembly pass through our specialist cleaning process. At this point all items that require machining are engineered to our exacting specifications. Machined parts are cleaned and measured prior to reassembly.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Your original engine is then rebuilt using new bearings, seals, piston rings and gaskets. Once fully assembled the engine is replaced into your vehicle with new fluids and filters. The engine is then started and tuned for optimum reliability utilising the latest diagnostic systems'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Our workmanship and materials are both guaranteed for 12 months from the date of purchase, or 15,000km whichever comes 1st. In the event of a failure we will replace either the engine or parts free of charge and at our discretion.'
	    )
	  );
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Cylinder Head Repair'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'reconditioning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Cylinder Head Repair'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Valve steam oil seals provide a controlled leak of oil to allow the valve stem to be lubricated as it slides in the valve guide. The amount of oil that passes by the valve stem seal must be precisely controlled, as too little oil causes stem and guide wear. Too much oil causes carbon build-up leading to valve seat damage, increased emissions and excessive oil consumption.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'One of the most noticeable signs of worn or cracked valve stem seals will be just after a cold engine start. When the engine first starts up, residual oil gets sucked down through the bad seal and into the combustion chamber. A large cloud of blue-white smoke will be seen exiting the exhaust just after start-up. On many vehicle we have a cost effective way of replacing the seals without removing the cylinder head.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'We also provide cylinder head rebuilds, bent valve replacement, valve seating and much more.'
	    )
	  );
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Head Gasket Repair'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'reconditioning' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Head Gasket Repair'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'The head gasket acts as a seal between the 2 main parts of your engine (the cylinder block and the cylinder head), so it\u2019s vital to keeping your engine running correctly and safely. If your head gasket has blown, you need a repair or replacement carried out professionally. As soon as you notice any of the major signs of a blown head gasket contact us straight away and we\u2019ll arrange to test it for you.'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Common signs of a blown head gasket are:'
	    ),
	    (0, _cmmn.createElement)(
	      'ul',
	      null,
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Engine overheating.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'White smoke coming from the exhaust.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Your engine oil is a milky colour.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Losing coolant at a high rate.'
	      ),
	      (0, _cmmn.createElement)(
	        'li',
	        null,
	        'Bubbles in the coolant overflow tank.'
	      )
	    )
	  );
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cmmn = __webpack_require__(3);
	
	var _superagent = __webpack_require__(61);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _superagentJsonp = __webpack_require__(62);
	
	var _superagentJsonp2 = _interopRequireDefault(_superagentJsonp);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _styles = __webpack_require__(63);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Parts'
	  };
	};
	
	var years = [];
	for (var i = 2017; i >= 1950; i--) {
	  years.push(i);
	}
	var Form = function () {
	  function Form() {
	    _classCallCheck(this, Form);
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      return (0, _cmmn.createElement)(
	        'form',
	        { className: _styles2.default.form },
	        (0, _cmmn.createElement)(
	          'select',
	          { name: 'year', className: _styles2.default.half },
	          (0, _cmmn.createElement)(
	            'option',
	            null,
	            'Year'
	          ),
	          years.map(function (year) {
	            return (0, _cmmn.createElement)(
	              'option',
	              null,
	              year + ''
	            );
	          })
	        ),
	        (0, _cmmn.createElement)('br', null),
	        (0, _cmmn.createElement)(
	          'select',
	          { name: 'make', className: _styles2.default.half },
	          (0, _cmmn.createElement)(
	            'option',
	            null,
	            'Make'
	          ),
	          (0, _cmmn.createElement)(
	            'option',
	            null,
	            'Please select a year'
	          )
	        ),
	        (0, _cmmn.createElement)(
	          'select',
	          { name: 'model', className: _styles2.default.half },
	          (0, _cmmn.createElement)(
	            'option',
	            null,
	            'Model'
	          ),
	          (0, _cmmn.createElement)(
	            'option',
	            null,
	            'Please select a year'
	          )
	        ),
	        (0, _cmmn.createElement)(
	          'select',
	          { name: 'category' },
	          (0, _cmmn.createElement)(
	            'option',
	            { value: '-1' },
	            'Category'
	          ),
	          (0, _cmmn.createElement)(
	            'option',
	            { value: 'other' },
	            'Other...'
	          )
	        ),
	        (0, _cmmn.createElement)('input', { style: 'display: none;', type: 'text', name: 'category-other', placeholder: 'Category' }),
	        (0, _cmmn.createElement)('textarea', { name: 'message' }),
	        (0, _cmmn.createElement)('input', { type: 'submit', name: 'submit', value: 'Submit' })
	      );
	    }
	  }, {
	    key: 'mount',
	    value: function mount(form) {
	      var yearSel = form.querySelector('[name="year"]');
	      var makeSel = form.querySelector('[name="make"]');
	      var modelSel = form.querySelector('[name="model"]');
	      var categorySel = form.querySelector('[name="category"]');
	      var categoryInput = form.querySelector('[name="category-other"]');
	      var year = -1,
	          make = -1,
	          model = -1;
	
	      yearSel.addEventListener('change', function (event) {
	        if (year == yearSel.value) return;
	        year = yearSel.value;
	        if (year == 'Year') {
	          year = -1;
	          makeSel.innerHTML = '<option value="-1">Make</option><option value="-1">Please select a year</option>';
	          modelSel.innerHTML = '<option value="-1">Model</option><option value="-1">Please select a year</option>';
	          return;
	        }
	        makeSel.innerHTML = '<option value="-1">Loading...</option>';
	        modelSel.innerHTML = '<option value="-1">Model</option><option value="-1">Please select a make</option>';
	        make = -1;
	        model = -1;
	        _superagent2.default.get('http://www.carqueryapi.com/api/0.3/').query({ cmd: 'getMakes', year: year }).use(_superagentJsonp2.default).end(function (err, res) {
	          if (err) {
	            console.error(err);
	            return;
	          }
	          makeSel.innerHTML = '<option value="-1">Make</option>' + res.body.Makes.map(function (make) {
	            return '<option value="' + make.make_id + '">' + make.make_display + '</option>';
	          }).join('');
	        });
	      });
	
	      makeSel.addEventListener('change', function (event) {
	        if (year == -1) return;
	        if (make == makeSel.value) return;
	        make = makeSel.value;
	        if (make == '-1') {
	          year = -1;
	          modelSel.innerHTML = '<option value="-1">Model</option><option value="-1">Please select a make</option>';
	          return;
	        }
	        modelSel.innerHTML = '<option value="-1">Loading...</option>';
	        model = -1;
	        _superagent2.default.get('http://www.carqueryapi.com/api/0.3/').query({ cmd: 'getModels', year: year, make: make }).use(_superagentJsonp2.default).end(function (err, res) {
	          if (err) {
	            console.error(err);
	            return;
	          }
	          modelSel.innerHTML = '<option>Model</option>' + res.body.Models.map(function (model) {
	            return '<option>' + model.model_name + '</option>';
	          }).join('');
	        });
	      });
	
	      categorySel.addEventListener('change', function (event) {
	        categoryInput.style = categorySel.value == 'other' ? '' : 'display: none;';
	      });
	    }
	  }]);
	
	  return Form;
	}();
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'parts', grey: true },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Find a Part'
	    ),
	    (0, _cmmn.createElement)(Form, null)
	  );
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("superagent-jsonp");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-parts-styles---form---2ktVT {\n  margin-right: -8px; }\n  .src-views-parts-styles---form---2ktVT select, .src-views-parts-styles---form---2ktVT input, .src-views-parts-styles---form---2ktVT textarea {\n    display: inline-block;\n    background: white;\n    border: 1px solid #d0d0d0;\n    border-radius: 0;\n    font-size: 1.4rem;\n    padding: 0.5em 0.75em;\n    width: calc(98% - 8px);\n    margin-right: 8px;\n    margin-bottom: 8px;\n    -webkit-appearance: none;\n    box-sizing: border-box; }\n    .src-views-parts-styles---form---2ktVT select.src-views-parts-styles---half---25g4o, .src-views-parts-styles---form---2ktVT input.src-views-parts-styles---half---25g4o, .src-views-parts-styles---form---2ktVT textarea.src-views-parts-styles---half---25g4o {\n      width: calc(49% - 8px); }\n      @media (max-width: 450px) {\n        .src-views-parts-styles---form---2ktVT select.src-views-parts-styles---half---25g4o, .src-views-parts-styles---form---2ktVT input.src-views-parts-styles---half---25g4o, .src-views-parts-styles---form---2ktVT textarea.src-views-parts-styles---half---25g4o {\n          width: calc(98% - 8px); } }\n  .src-views-parts-styles---form---2ktVT select {\n    background-image: url(" + __webpack_require__(64) + ");\n    background-size: 30px;\n    background-position: 100% 50%;\n    background-repeat: no-repeat;\n    cursor: pointer; }\n  .src-views-parts-styles---form---2ktVT textarea {\n    min-height: 140px;\n    max-width: calc(98% - 8px); }\n  .src-views-parts-styles---form---2ktVT input[type=\"submit\"] {\n    background-color: #006e9c;\n    border: none;\n    color: white;\n    padding: 0.75em;\n    font-size: 1.6rem;\n    color: white;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    cursor: pointer; }\n    .src-views-parts-styles---form---2ktVT input[type=\"submit\"]:hover {\n      background-color: #0092cf; }\n  @media (max-width: 1000px) {\n    .src-views-parts-styles---form---2ktVT {\n      margin-top: 50px; } }\n", ""]);
	
	// exports
	exports.locals = {
		"form": "src-views-parts-styles---form---2ktVT",
		"half": "src-views-parts-styles---half---25g4o"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/chevron-3vB6y-nq.png";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	__webpack_require__(10);
	
	var _styles = __webpack_require__(47);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _header = __webpack_require__(25);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(31);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _components = __webpack_require__(27);
	
	var _sidemenu = __webpack_require__(42);
	
	var _sidemenu2 = _interopRequireDefault(_sidemenu);
	
	var _booking = __webpack_require__(66);
	
	var _booking2 = _interopRequireDefault(_booking);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Make a Booking'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    'div',
	    null,
	    (0, _cmmn.createElement)(_header2.default, { page: '' }),
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles2.default.content },
	      (0, _cmmn.createElement)(
	        _components.Container,
	        null,
	        (0, _cmmn.createElement)(
	          'h1',
	          null,
	          'Make a Booking'
	        ),
	        (0, _cmmn.createElement)('iframe', {
	          className: _booking2.default.iframe,
	          src: 'https://mechanicdesk.com.au/booking_requests/new?token=9dc0aa4f7552830f90a3818e4a4e94a1a1528d5a',
	          frameBorder: '0' })
	      ),
	      (0, _cmmn.createElement)(_sidemenu2.default, { top: true })
	    ),
	    (0, _cmmn.createElement)(_footer2.default, null)
	  );
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-pages-booking---iframe---3i5ol {\n  width: 100%;\n  height: 750px; }\n", ""]);
	
	// exports
	exports.locals = {
		"iframe": "src-views-pages-booking---iframe---3i5ol"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _template = __webpack_require__(46);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Trade'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    _template2.default,
	    { page: 'trade' },
	    (0, _cmmn.createElement)(
	      'h1',
	      null,
	      'Trade'
	    ),
	    (0, _cmmn.createElement)(
	      'p',
	      null,
	      'Do you have a fleet of vehicles? Why not let us look after all your service and repair needs. For fleet and business customers we offer substantial discounts, fixed price servicing, final invoices always matching the quote, monthly invoicing, a pick up and drop off service and we can provide a loan car. With our loan cars we will try our best to give you like for like. We normally have small cars, vans and table top utes in stock.'
	    )
	  );
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMeta = undefined;
	
	var _cmmn = __webpack_require__(3);
	
	var _header = __webpack_require__(25);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(31);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _components = __webpack_require__(27);
	
	var _sidemenu = __webpack_require__(42);
	
	var _sidemenu2 = _interopRequireDefault(_sidemenu);
	
	__webpack_require__(10);
	
	var _styles = __webpack_require__(69);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _styles3 = __webpack_require__(47);
	
	var _styles4 = _interopRequireDefault(_styles3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GOOGLE_API_KEY = 'AIzaSyCIZ_yfAfZlAhRFSrbdh-gs2n3QPBH1yhw';
	
	var getMeta = exports.getMeta = function getMeta() {
	  return {
	    title: 'Contact'
	  };
	};
	
	exports.default = function () {
	  return (0, _cmmn.createElement)(
	    'div',
	    null,
	    (0, _cmmn.createElement)(_header2.default, { page: '' }),
	    (0, _cmmn.createElement)(
	      'div',
	      { className: _styles4.default.content },
	      (0, _cmmn.createElement)(
	        _components.Container,
	        null,
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles4.default.content.rightImg.with('map') },
	          (0, _cmmn.createElement)('iframe', {
	            style: 'border: 0; height: 100%; width: 100%;',
	            frameborder: '0',
	            src: 'https://www.google.com/maps/embed/v1/place?key=' + GOOGLE_API_KEY + '&q=22+Murchison+Terrace,+Perth+WA+6000',
	            allowfullscreen: true })
	        ),
	        (0, _cmmn.createElement)(
	          'div',
	          { className: _styles4.default.content.copy },
	          (0, _cmmn.createElement)(
	            'h1',
	            null,
	            'Contact Us'
	          ),
	          (0, _cmmn.createElement)(
	            'p',
	            null,
	            (0, _cmmn.createElement)(
	              'strong',
	              null,
	              'DPL Motors'
	            )
	          ),
	          (0, _cmmn.createElement)(
	            'p',
	            null,
	            '22 Muchison Terrace, Perth, WA 6000'
	          ),
	          (0, _cmmn.createElement)(
	            'p',
	            null,
	            (0, _cmmn.createElement)('i', { className: _styles2.default.pIcon + ' fa fa-phone' }),
	            '(08) 9227 5374'
	          ),
	          (0, _cmmn.createElement)(
	            'p',
	            null,
	            (0, _cmmn.createElement)('i', { className: _styles2.default.pIcon + ' fa fa-envelope' }),
	            'info@dplmotors.com.au'
	          ),
	          (0, _cmmn.createElement)(
	            'a',
	            { href: '*/book/', className: _styles4.default.bookBtn },
	            'Book Service'
	          )
	        )
	      ),
	      (0, _cmmn.createElement)(_sidemenu2.default, { top: true })
	    ),
	    (0, _cmmn.createElement)(_footer2.default, null)
	  );
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".src-views-contact-styles---p-icon---3Mzre {\n  color: #006e9c;\n  margin-right: 0.5em; }\n", ""]);
	
	// exports
	exports.locals = {
		"p-icon": "src-views-contact-styles---p-icon---3Mzre"
	};
	
	// Only locals
	module.exports = module.exports.locals;
	
	// Bemify
	module.exports = (__webpack_require__(19).default)(module.exports || {});

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "/dpl-motors/png/favicon-32x32-2iPQseXc.png";

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {};
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("mkdirp");

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var routes = ['/', '/services/', '/services/air-conditioning/', '/services/scheduled-servicing/', '/services/repairs/', '/performance-tuning/', '/performance-tuning/ecu-tuning/', '/performance-tuning/dpf-solution/', '/performance-tuning/egr-solution/', '/performance-tuning/truck-tuning/', '/reconditioning/', '/reconditioning/motor-rebuilds/',
	//'/reconditioning/replacement-motors/',
	'/reconditioning/cylinder-head-repair/', '/reconditioning/head-gasket-repair/', '/parts/', '/trade/', '/book/', '/contact-us/'];
	
	exports.default = routes;

/***/ }
/******/ ]);
//# sourceMappingURL=entry.js.map