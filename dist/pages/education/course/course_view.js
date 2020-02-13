(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/education/course/course_view"],{

/***/ "./src/pages/education/course/course_view.jsx":
/*!****************************************************!*\
  !*** ./src/pages/education/course/course_view.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./course_view.scss */ "./src/pages/education/course/course_view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    course: state.course.course,
    school: state.school.school,
    teacher: state.account.message,
    announcements: state.course.announcements
  };
};

var CourseView = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(CourseView, _Taro$PureComponent);

  function CourseView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CourseView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CourseView.__proto__ || Object.getPrototypeOf(CourseView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__201", "$compid__202", "$compid__203", "$compid__204", "$compid__205", "$compid__206", "$compid__207", "$compid__208", "current", "cid", "dispatch", "course"], _this.config = {
      enablePullDownRefresh: true,
      navigationBarTitleText: ''

    }, _this.state = {
      current: 0,
      cid: 57
    }, _this.customComponents = ["AtNavBar", "AtTabs", "AtTabsPane", "Announcements", "Lesson", "Discusses"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CourseView, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(CourseView.prototype.__proto__ || Object.getPrototypeOf(CourseView.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.dispatch({
        type: 'course/getCourseMessage',
        payload: {
          courseId: this.$router.params.cid
        }
      }).then(function (res) {
        _this2.props.dispatch({
          type: 'account/getAccount',
          payload: {
            aid: res.author.id
          }
        });
        _this2.props.dispatch({
          type: 'school/getSchool',
          payload: {
            sid: res.school.id
          }
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'handleClick',
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__201"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__201 = _genCompid2[0],
          $compid__201 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__202"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__202 = _genCompid4[0],
          $compid__202 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__203"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__203 = _genCompid6[0],
          $compid__203 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__204"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__204 = _genCompid8[0],
          $compid__204 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__205"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__205 = _genCompid10[0],
          $compid__205 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__206"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__206 = _genCompid12[0],
          $compid__206 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__207"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__207 = _genCompid14[0],
          $compid__207 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__208"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__208 = _genCompid16[0],
          $compid__208 = _genCompid16[1];

      var tabList = [{ title: '公告' }, { title: '课堂' }, { title: '笔记' }];
      _taroWeapp.propsManager.set({
        "color": "#000",
        "title": this.__props.course.name
      }, $compid__201, $prevCompid__201);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "tabList": tabList,
        "onClick": this.handleClick.bind(this)
      }, $compid__202, $prevCompid__202);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 0
      }, $compid__203, $prevCompid__203);
      _taroWeapp.propsManager.set({
        "courseId": this.$router.params.cid
      }, $compid__204, $prevCompid__204);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 1
      }, $compid__205, $prevCompid__205);
      _taroWeapp.propsManager.set({
        "courseId": this.$router.params.cid
      }, $compid__206, $prevCompid__206);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 2
      }, $compid__207, $prevCompid__207);
      _taroWeapp.propsManager.set({
        "courseId": this.$router.params.cid
      }, $compid__208, $prevCompid__208);
      Object.assign(this.__state, {
        $compid__201: $compid__201,
        $compid__202: $compid__202,
        $compid__203: $compid__203,
        $compid__204: $compid__204,
        $compid__205: $compid__205,
        $compid__206: $compid__206,
        $compid__207: $compid__207,
        $compid__208: $compid__208
      });
      return this.__state;
    }
  }]);

  return CourseView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.$$componentPath = "pages/education/course/course_view", _temp2)) || _class);
exports.default = CourseView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CourseView, true));

/***/ }),

/***/ "./src/pages/education/course/course_view.scss":
/*!*****************************************************!*\
  !*** ./src/pages/education/course/course_view.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/education/course/course_view.jsx","runtime","vendors"]]]);