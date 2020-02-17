require("./runtime");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");

var _dva = __webpack_require__(/*! ./utils/dva */ "./src/utils/dva.js");

var _dva2 = _interopRequireDefault(_dva);

var _index = __webpack_require__(/*! ./models/index */ "./src/models/index.js");

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./utils/zhcn_moment */ "./src/utils/zhcn_moment.js");

__webpack_require__(/*! ./style/custom-variables.scss */ "./src/style/custom-variables.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var dvaApp = _dva2.default.createApp({
  initalState: {},
  models: _index2.default
});
var store = dvaApp.getStore();
(0, _redux.setStore)(store);
if (_redux.ReduxContext.Provider) {
  _redux.ReduxContext.Provider({
    store: store
  });
  _redux.ReduxContext.Provider({
    store: store
  });
}

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/welcome/welcome_view', 'pages/welcome/loading', 'pages/home/home_view', 'pages/education/course/course_view', 'pages/education/lesson/lesson_view'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'wejudge小程序',
        navigationBarTextStyle: 'black'
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//请求地址前缀
var baseUrl = exports.baseUrl = 'https://api.dev.wejudge.net/dev';
//输出日志信息
var noConsole = exports.noConsole = true;
var deBug = exports.deBug = true;

/***/ }),

/***/ "./src/constants/apis.js":
/*!*******************************!*\
  !*** ./src/constants/apis.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API = exports.API = {
  ACCOUNT: {
    REGISTER: '/wejudge/accounts/register',
    LOGIN: '/wejudge/accounts/login',
    ME: '/wejudge/accounts/me',
    Dashboard: '/wejudge/accounts/dashboard',
    CURD: '/wejudge/accounts/:aid' //获取某账户信息
  },
  COURSE: {
    LIST: '/education/courses/_mget',
    COURSE: '/education/courses/:cid',
    ALLLIST: '/education/courses',
    EXTRA: '/education/courses/:cid/extra',
    ANNOUNCEMENTSLIST: '/education/courses/:cid/announcements',
    MGETANNOUNCEMENTSLIST: '/education/courses/:cid/announcements/_mget',
    LESSONLIST: '/education/courses/:cid/lessons/list',
    DISUSSES: '/education/courses/:cid/discusses/list',
    LESSON: {
      LESSON: '/education/courses/:cid/lessons/:lid',
      VIDEOS: '/education/courses/:cid/lessons/:lid/videos',
      ASGNLIST: '/education/courses/:cid/asgns/_mget',
      NOTEList: '/education/notes/list',
      NOTE: '/education/notes/_mget'
    }
  },
  SCHOOL: {
    SCHOOL: '/education/schools/:sid'
  }
};

/***/ }),

/***/ "./src/models/account.js":
/*!*******************************!*\
  !*** ./src/models/account.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _account = __webpack_require__(/*! ../service/account */ "./src/service/account.js");

var account = _interopRequireWildcard(_account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'account',
  state: {
    token: '',
    dashboard: {}
  },

  effects: {
    //put 用于触发action
    //call 用于调用异步逻辑
    //select 用于从state里获取数据

    //登录
    login: /*#__PURE__*/_regenerator2.default.mark(function login(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;
      var req;
      return _regenerator2.default.wrap(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return call(account.login, payload);

            case 3:
              req = _context.sent;
              _context.next = 6;
              return put({
                type: 'save',
                payload: {
                  token: req.data.token
                }
              });

            case 6:
              _taroWeapp2.default.setStorageSync('token', req.data.token);
              _context.next = 9;
              return put({
                type: 'accountMe',
                payload: { token: req.data.token }
              });

            case 9:
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              _taroWeapp2.default.showToast({
                title: "用户名或密码错误",
                icon: 'none'
              });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, login, this, [[0, 11]]);
    }),
    accountMe: /*#__PURE__*/_regenerator2.default.mark(function accountMe(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;
      var req, data;
      return _regenerator2.default.wrap(function accountMe$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(account.accountMe, payload);

            case 2:
              req = _context2.sent;
              data = req.data;
              _context2.next = 6;
              return put({
                type: 'save',
                payload: {
                  data: data
                }
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, accountMe, this);
    }),
    getAccount: /*#__PURE__*/_regenerator2.default.mark(function getAccount(_ref5, _ref6) {
      var payload = _ref5.payload;
      var call = _ref6.call,
          put = _ref6.put,
          select = _ref6.select;
      var req, data;
      return _regenerator2.default.wrap(function getAccount$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(account.getAccount, payload);

            case 2:
              req = _context3.sent;
              data = req.data;
              _context3.next = 6;
              return put({
                type: 'save',
                payload: {
                  message: req
                }
              });

            case 6:
              return _context3.abrupt('return', data);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, getAccount, this);
    })
  },

  reducers: {
    save: function save(state, _ref7) {
      var payload = _ref7.payload;

      return _extends({}, state, payload);
    },
    accountMe: function accountMe(state, _ref8) {
      var payload = _ref8.payload;

      return _extends({}, state, { me: payload, auth: { logined: true, fetched: true } });
    }
  }
};

/***/ }),

/***/ "./src/models/education/course.js":
/*!****************************************!*\
  !*** ./src/models/education/course.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _course = __webpack_require__(/*! ../../service/education/course */ "./src/service/education/course.js");

var course = _interopRequireWildcard(_course);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'course',
  state: {
    courselist: {}
  },

  effects: {
    getDashboard: /*#__PURE__*/_regenerator2.default.mark(function getDashboard(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;
      var req;
      return _regenerator2.default.wrap(function getDashboard$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(course.getDashboard, payload);

            case 2:
              req = _context.sent;
              _context.next = 5;
              return put({
                type: 'save',
                payload: {
                  dashboard: req
                }
              });

            case 5:
              _context.next = 7;
              return put({
                type: 'getCourseList',
                payload: {
                  ids: req.data.courses.map(function (item) {
                    return item.id;
                  })
                }
              });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, getDashboard, this);
    }),
    getCourseList: /*#__PURE__*/_regenerator2.default.mark(function getCourseList(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;
      var req;
      return _regenerator2.default.wrap(function getCourseList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(course.getCoursetList, payload);

            case 2:
              req = _context2.sent;
              _context2.next = 5;
              return put({
                type: 'save',
                payload: {
                  courselist: req.data.courses
                }
              });

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, getCourseList, this);
    }),
    getAllList: /*#__PURE__*/_regenerator2.default.mark(function getAllList(_ref5, _ref6) {
      var payload = _ref5.payload;
      var call = _ref6.call,
          put = _ref6.put,
          select = _ref6.select;
      var req;
      return _regenerator2.default.wrap(function getAllList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(course.getAllList, payload);

            case 2:
              req = _context3.sent;
              _context3.next = 5;
              return put({
                type: 'save',
                payload: {
                  courselist: req.data.courses
                }
              });

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, getAllList, this);
    }),
    getCourseMessage: /*#__PURE__*/_regenerator2.default.mark(function getCourseMessage(_ref7, _ref8) {
      var payload = _ref7.payload;
      var call = _ref8.call,
          put = _ref8.put,
          select = _ref8.select;
      var req;
      return _regenerator2.default.wrap(function getCourseMessage$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(course.getCourseMessage, payload);

            case 2:
              req = _context4.sent;
              _context4.next = 5;
              return put({
                type: 'save',
                payload: {
                  course: req.data
                }
              });

            case 5:
              return _context4.abrupt('return', req.data);

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, getCourseMessage, this);
    }),
    getCourseExtra: /*#__PURE__*/_regenerator2.default.mark(function getCourseExtra(_ref9, _ref10) {
      var payload = _ref9.payload;
      var call = _ref10.call,
          put = _ref10.put,
          select = _ref10.select;
      var req;
      return _regenerator2.default.wrap(function getCourseExtra$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(course.getCourseExtra, payload);

            case 2:
              req = _context5.sent;
              _context5.next = 5;
              return put({
                type: 'save',
                payload: {
                  extra: req.data
                }
              });

            case 5:
              return _context5.abrupt('return', req.data);

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, getCourseExtra, this);
    }),


    //获取课程公告
    getAnnouncementsList: /*#__PURE__*/_regenerator2.default.mark(function getAnnouncementsList(_ref11, _ref12) {
      var payload = _ref11.payload;
      var call = _ref12.call,
          put = _ref12.put,
          select = _ref12.select;
      var req;
      return _regenerator2.default.wrap(function getAnnouncementsList$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return call(course.getAnnouncementsList, payload);

            case 2:
              req = _context6.sent;

              console.log("payload", payload);
              // yield put({
              //   type: 'save',
              //   payload: {
              //     announcementsList: req
              //   }
              // });
              _context6.next = 6;
              return put({
                type: 'mgetAnnouncementsList',
                payload: {
                  ids: req.data.course_announcements.map(function (item) {
                    return item.id;
                  }),
                  courseId: payload.courseId
                }
              });

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, getAnnouncementsList, this);
    }),

    //批量课程公告
    mgetAnnouncementsList: /*#__PURE__*/_regenerator2.default.mark(function mgetAnnouncementsList(_ref13, _ref14) {
      var payload = _ref13.payload;
      var call = _ref14.call,
          put = _ref14.put,
          select = _ref14.select;
      var req;
      return _regenerator2.default.wrap(function mgetAnnouncementsList$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return call(course.mgetAnnouncementsList, payload);

            case 2:
              req = _context7.sent;
              _context7.next = 5;
              return put({
                type: 'save',
                payload: {
                  mannouncementsList: req.data
                }
              });

            case 5:
            case 'end':
              return _context7.stop();
          }
        }
      }, mgetAnnouncementsList, this);
    }),


    //获取课程课堂列表
    getLessonList: /*#__PURE__*/_regenerator2.default.mark(function getLessonList(_ref15, _ref16) {
      var payload = _ref15.payload;
      var call = _ref16.call,
          put = _ref16.put,
          select = _ref16.select;
      var req;
      return _regenerator2.default.wrap(function getLessonList$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return call(course.getLessonList, payload);

            case 2:
              req = _context8.sent;
              _context8.next = 5;
              return put({
                type: 'save',
                payload: {
                  lessonList: req
                }
              });

            case 5:
              return _context8.abrupt('return', req);

            case 6:
            case 'end':
              return _context8.stop();
          }
        }
      }, getLessonList, this);
    }),


    //获取课程讨论
    getDiscusses: /*#__PURE__*/_regenerator2.default.mark(function getDiscusses(_ref17, _ref18) {
      var payload = _ref17.payload;
      var call = _ref18.call,
          put = _ref18.put,
          select = _ref18.select;
      var req;
      return _regenerator2.default.wrap(function getDiscusses$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return call(course.getDiscusses, payload);

            case 2:
              req = _context9.sent;
              _context9.next = 5;
              return put({
                type: 'save',
                payload: {
                  discusses: req.data
                }
              });

            case 5:
              return _context9.abrupt('return', req.data);

            case 6:
            case 'end':
              return _context9.stop();
          }
        }
      }, getDiscusses, this);
    })
  },

  reducers: {
    save: function save(state, _ref19) {
      var payload = _ref19.payload;

      return _extends({}, state, payload);
    }
  }

};

/***/ }),

/***/ "./src/models/education/lesson.js":
/*!****************************************!*\
  !*** ./src/models/education/lesson.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lesson = __webpack_require__(/*! ../../service/education/lesson */ "./src/service/education/lesson.js");

var lesson = _interopRequireWildcard(_lesson);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'lesson',
  state: {
    lesson: {}
  },
  effects: {
    getLesson: /*#__PURE__*/_regenerator2.default.mark(function getLesson(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;
      var req;
      return _regenerator2.default.wrap(function getLesson$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(lesson.getLesson, payload);

            case 2:
              req = _context.sent;
              _context.next = 5;
              return put({
                type: 'save',
                payload: {
                  lesson: req.data
                }
              });

            case 5:
              _context.next = 7;
              return put({
                type: 'getAsgnList',
                payload: {
                  courseId: req.data.course.id,
                  ids: req.data.asgn
                }
              });

            case 7:
              return _context.abrupt('return', req.data);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, getLesson, this);
    }),
    getVideos: /*#__PURE__*/_regenerator2.default.mark(function getVideos(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;
      var req;
      return _regenerator2.default.wrap(function getVideos$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return call(lesson.getVideos, payload);

            case 3:
              req = _context2.sent;
              _context2.next = 6;
              return put({
                type: 'save',
                payload: {
                  videos: req.data
                }
              });

            case 6:
              return _context2.abrupt('return', req.data);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              _context2.next = 13;
              return put({
                type: 'save',
                payload: {
                  videos: ''
                }
              });

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, getVideos, this, [[0, 9]]);
    }),
    getNoteList: /*#__PURE__*/_regenerator2.default.mark(function getNoteList(_ref5, _ref6) {
      var payload = _ref5.payload;
      var call = _ref6.call,
          put = _ref6.put,
          select = _ref6.select;
      var req;
      return _regenerator2.default.wrap(function getNoteList$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(lesson.getNoteList, payload);

            case 2:
              req = _context3.sent;
              _context3.next = 5;
              return put({
                type: 'save',
                payload: {
                  noteList: req.data
                }
              });

            case 5:
              _context3.next = 7;
              return put({
                type: 'getNote',
                payload: {
                  ids: req.data.notes.map(function (item) {
                    return item.id;
                  })
                }
              });

            case 7:
              return _context3.abrupt('return', req.data);

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, getNoteList, this);
    }),
    getNote: /*#__PURE__*/_regenerator2.default.mark(function getNote(_ref7, _ref8) {
      var payload = _ref7.payload;
      var call = _ref8.call,
          put = _ref8.put,
          select = _ref8.select;
      var req;
      return _regenerator2.default.wrap(function getNote$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return call(lesson.getNote, payload);

            case 2:
              req = _context4.sent;
              _context4.next = 5;
              return put({
                type: 'save',
                payload: {
                  note: req.data
                }
              });

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, getNote, this);
    }),
    getAsgnList: /*#__PURE__*/_regenerator2.default.mark(function getAsgnList(_ref9, _ref10) {
      var payload = _ref9.payload;
      var call = _ref10.call,
          put = _ref10.put,
          select = _ref10.select;
      var req;
      return _regenerator2.default.wrap(function getAsgnList$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return call(lesson.getAsgnList, payload);

            case 2:
              req = _context5.sent;
              _context5.next = 5;
              return put({
                type: 'save',
                payload: {
                  asgn: req.data
                }
              });

            case 5:
              return _context5.abrupt('return', req.data);

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, getAsgnList, this);
    })
  },

  reducers: {
    save: function save(state, _ref11) {
      var payload = _ref11.payload;

      return _extends({}, state, payload);
    }
  }
};

/***/ }),

/***/ "./src/models/education/school.js":
/*!****************************************!*\
  !*** ./src/models/education/school.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _school = __webpack_require__(/*! ../../service/education/school */ "./src/service/education/school.js");

var school = _interopRequireWildcard(_school);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'school',
  state: {
    school: {}
  },

  effects: {
    getSchool: /*#__PURE__*/_regenerator2.default.mark(function getSchool(_ref, _ref2) {
      var payload = _ref.payload;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;
      var req;
      return _regenerator2.default.wrap(function getSchool$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(school.getSchool, payload);

            case 2:
              req = _context.sent;
              _context.next = 5;
              return put({
                type: 'save',
                payload: {
                  school: req.data
                }
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, getSchool, this);
    })
  },

  reducers: {
    save: function save(state, _ref3) {
      var payload = _ref3.payload;

      return _extends({}, state, payload);
    }
  }

};

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _account = __webpack_require__(/*! ./account */ "./src/models/account.js");

var _account2 = _interopRequireDefault(_account);

var _course = __webpack_require__(/*! ./education/course */ "./src/models/education/course.js");

var _course2 = _interopRequireDefault(_course);

var _school = __webpack_require__(/*! ./education/school */ "./src/models/education/school.js");

var _school2 = _interopRequireDefault(_school);

var _lesson = __webpack_require__(/*! ./education/lesson */ "./src/models/education/lesson.js");

var _lesson2 = _interopRequireDefault(_lesson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_account2.default, _course2.default, _school2.default, _lesson2.default];

/***/ }),

/***/ "./src/service/account.js":
/*!********************************!*\
  !*** ./src/service/account.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccount = exports.accountMe = exports.login = undefined;

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist/index.js");

var _request = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _apis = __webpack_require__(/*! ../constants/apis */ "./src/constants/apis.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(payload) {
  // console.log("service",payload)
  return (0, _request2.default)({
    url: _apis.API.ACCOUNT.LOGIN,
    method: 'post',
    data: {
      username: "xj@a.com",
      password: "12345678"
      // username: payload.username,
      // password: payload.password,
    }
  });
};

//me
var accountMe = exports.accountMe = function accountMe(payload) {
  return (0, _request2.default)({
    url: _apis.API.ACCOUNT.ME,
    method: 'get'
  });
};

var getAccount = exports.getAccount = function getAccount(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.ACCOUNT.CURD);
  return (0, _request2.default)({
    url: pattern({ aid: payload.aid }),
    method: 'get'
  });
};

/***/ }),

/***/ "./src/service/education/course.js":
/*!*****************************************!*\
  !*** ./src/service/education/course.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDiscusses = exports.getLessonList = exports.mgetAnnouncementsList = exports.getAnnouncementsList = exports.getCourseExtra = exports.getCourseMessage = exports.getCoursetList = exports.getAllList = exports.getDashboard = undefined;

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _apis = __webpack_require__(/*! ../../constants/apis */ "./src/constants/apis.js");

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//当前登陆用户的课堂列表
var getDashboard = exports.getDashboard = function getDashboard(payload) {
  return (0, _request2.default)({
    url: _apis.API.ACCOUNT.Dashboard,
    method: 'get'
  });
};

//获取全部课程列表
var getAllList = exports.getAllList = function getAllList(payload) {
  return (0, _request2.default)({
    url: _apis.API.COURSE.ALLLIST,
    method: 'get',
    data: {}
  });
};

//批量获取当前登陆用户课程
var getCoursetList = exports.getCoursetList = function getCoursetList(payload) {
  return (0, _request2.default)({
    url: _apis.API.COURSE.LIST,
    method: 'post',
    data: {
      ids: payload.ids
    }
  });
};

//获取课程详细信息
var getCourseMessage = exports.getCourseMessage = function getCourseMessage(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.COURSE);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'get',
    data: {}
  });
};

//获取课程额外信息
var getCourseExtra = exports.getCourseExtra = function getCourseExtra(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.EXTRA);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'get',
    data: {}
  });
};

//获取课程公告
var getAnnouncementsList = exports.getAnnouncementsList = function getAnnouncementsList(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.ANNOUNCEMENTSLIST);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'get',
    data: {}
  });
};

//批量获取课程公告
var mgetAnnouncementsList = exports.mgetAnnouncementsList = function mgetAnnouncementsList(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.MGETANNOUNCEMENTSLIST);
  console.log("payload", payload);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'post',
    data: {
      ids: payload.ids
    }
  });
};

//获取课程课堂列表
var getLessonList = exports.getLessonList = function getLessonList(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.LESSONLIST);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'get',
    data: {}
  });
};

//获取课程讨论
var getDiscusses = exports.getDiscusses = function getDiscusses(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.DISUSSES);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'get',
    data: {}
  });
};

/***/ }),

/***/ "./src/service/education/lesson.js":
/*!*****************************************!*\
  !*** ./src/service/education/lesson.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAsgnList = exports.getNote = exports.getNoteList = exports.getVideos = exports.getLesson = undefined;

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _apis = __webpack_require__(/*! ../../constants/apis */ "./src/constants/apis.js");

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取课堂详细信息
var getLesson = exports.getLesson = function getLesson(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.LESSON.LESSON);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId, lid: payload.lessonId }),
    method: 'get'
  });
};

//获取课堂关联视频
var getVideos = exports.getVideos = function getVideos(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.LESSON.VIDEOS);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId, lid: payload.lessonId }),
    method: 'get',
    data: {
      download: 1
    }
  });
};

//获取笔记列表
var getNoteList = exports.getNoteList = function getNoteList(payload) {
  return (0, _request2.default)({
    url: _apis.API.COURSE.LESSON.NOTEList,
    method: 'get',
    data: {
      course_id: payload.courseId,
      lesson_id: payload.lessonId
    }
  });
};

//获取笔记详细信息
var getNote = exports.getNote = function getNote(payload) {
  return (0, _request2.default)({
    url: _apis.API.COURSE.LESSON.NOTE,
    method: 'post',
    data: {
      ids: payload.ids
    }
  });
};

//获取课堂作业
var getAsgnList = exports.getAsgnList = function getAsgnList(payload) {
  var pattern = (0, _pathToRegexp.compile)(_apis.API.COURSE.LESSON.ASGNLIST);
  return (0, _request2.default)({
    url: pattern({ cid: payload.courseId }),
    method: 'post',
    data: {
      ids: payload.ids
    }
  });
};

/***/ }),

/***/ "./src/service/education/school.js":
/*!*****************************************!*\
  !*** ./src/service/education/school.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchool = undefined;

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _apis = __webpack_require__(/*! ../../constants/apis */ "./src/constants/apis.js");

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取课程详细信息
var getSchool = exports.getSchool = function getSchool(payload) {

  var pattern = (0, _pathToRegexp.compile)(_apis.API.SCHOOL.SCHOOL);
  return (0, _request2.default)({
    url: pattern({ sid: payload.sid }),
    method: 'get'
  });
};

/***/ }),

/***/ "./src/style/custom-variables.scss":
/*!*****************************************!*\
  !*** ./src/style/custom-variables.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/dva.js":
/*!**************************!*\
  !*** ./src/utils/dva.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvaCore = __webpack_require__(/*! dva-core */ "./node_modules/dva-core/dist/index.js");

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _dvaLoading = __webpack_require__(/*! dva-loading */ "./node_modules/dva-loading/dist/index.js");

var _dvaLoading2 = _interopRequireDefault(_dvaLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = void 0;
var store = void 0;
var dispatch = void 0;
var registered = void 0;

function createApp(opt) {
  // redux日志
  opt.onAction = [(0, _reduxLogger.createLogger)()];
  app = (0, _dvaCore.create)(opt);
  app.use((0, _dvaLoading2.default)({}));

  if (!registered) opt.models.forEach(function (model) {
    return app.model(model);
  });
  registered = true;
  app.start();

  store = app._store;
  app.getStore = function () {
    return store;
  };
  app.use({
    onError: function onError(err) {
      console.log(err);
    }
  });

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

exports.default = {
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
};

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../config/index */ "./src/config/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { method: 'GET', data: {}, header: null, params: {}, thirdAPI: false };

  if (!_index.noConsole) {
    console.log(new Date().toLocaleString() + "\u3010 M=" + options.url + " \u3011P=" + JSON.stringify(options.data));
  }
  var urlParams = '';
  var firstParam = true;
  for (var i in options.params) {
    if (firstParam) {
      firstParam = false;
      if (options.params[i] !== undefined && options.params[i] !== "" && options.params[i] !== null) {
        urlParams = urlParams + '?' + i + '=' + options.params[i];
      }
    } else {
      if (options.params[i] !== undefined && options.params[i] !== "" && options.params[i] !== null) {
        urlParams = urlParams + '&' + i + '=' + options.params[i];
      }
    }
  }
  var debugParams = '&debug=0';
  if (urlParams === '') {
    debugParams = '?debug=0';
  }
  return _taroWeapp2.default.request({
    url: options.thirdAPI ? options.url + urlParams : _index.baseUrl + options.url + urlParams + (_index.deBug ? debugParams : ''),
    data: _extends({}, options.data),
    header: options.thirdAPI ? {} : {
      'content-type': 'application/json',
      'X-WeJudge-Auth-Mode': 'client',
      'X-WeJudge-Auth-token': options.header !== undefined ? options.header : _taroWeapp2.default.getStorageSync('token').toString()
    },
    method: options.method.toUpperCase()

  }).then(function (res) {
    var statusCode = res.statusCode,
        data = res.data;

    if (statusCode >= 200 && statusCode < 300) {
      if (!_index.noConsole) {
        console.log(new Date().toLocaleString() + "\u3010 M=" + options.url + " \u3011\u3010\u63A5\u53E3\u54CD\u5E94\uFF1A\u3011", res.data);
      }
      return data;
      // if (data.status !== 'ok') {
      //   Taro.showToast({
      //     title: `${res.data.error.message}~` || res.data.error.code,
      //     icon: 'none',
      //     mask: true,
      //   });
      // }
      // return data;
    } else {
      console.log(res);
      console.log('报错详细信息', options.url, options.data);
      _taroWeapp2.default.showToast({
        title: data.error,
        icon: 'none',
        mask: true
      });
      throw new Error("\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF\uFF0C\u72B6\u6001\u7801" + statusCode);
    }
  });
};

/***/ }),

/***/ "./src/utils/zhcn_moment.js":
/*!**********************************!*\
  !*** ./src/utils/zhcn_moment.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 里面的字符可以根据自己的需要进行调整
_moment2.default.locale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY年MM月DD日',
    LLL: 'YYYY年MM月DD日Ah点mm分',
    LLLL: 'YYYY年MM月DD日ddddAh点mm分',
    l: 'YYYY-M-D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm'
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
      return hour;
    } else if (meridiem === '下午' || meridiem === '晚上') {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function meridiem(hour, minute, isLower) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1130) {
      return '上午';
    } else if (hm < 1230) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    } else {
      return '晚上';
    }
  },
  calendar: {
    sameDay: '[今天]LT',
    nextDay: '[明天]LT',
    nextWeek: '[下]ddddLT',
    lastDay: '[昨天]LT',
    lastWeek: '[上]ddddLT',
    sameElse: 'L'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function ordinal(number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + '日';
      case 'M':
        return number + '月';
      case 'w':
      case 'W':
        return number + '周';
      default:
        return number;
    }
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    ss: '%d秒',
    m: '1分钟',
    mm: '%d分钟',
    h: '1小时',
    hh: '%d小时',
    d: '1天',
    dd: '%d天',
    M: '1个月',
    MM: '%d个月',
    y: '1年',
    yy: '%d年'
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
}); /**
     * moment汉化 ，只需要在main.js中引用该文件即可
     */

/***/ })

},[["./src/app.tsx","runtime","vendors"]]]);;