(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/education/lesson/lesson_view"],{

/***/ "./src/pages/education/lesson/lesson_view.jsx":
/*!****************************************************!*\
  !*** ./src/pages/education/lesson/lesson_view.jsx ***!
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

__webpack_require__(/*! ./lesson_view.scss */ "./src/pages/education/lesson/lesson_view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    videos: state.lesson.videos,
    noteList: state.lesson.note,
    asgnList: state.lesson.asgn,
    isLoading: state.loading.models['lesson']

  };
};

var LessonView = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(LessonView, _Taro$PureComponent);

  function LessonView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonView.__proto__ || Object.getPrototypeOf(LessonView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__31", "$compid__32", "$compid__33", "$compid__34", "$compid__35", "$compid__36", "mode", "dispatch", "videos", "asgnList", "noteList", "current"], _this.config = {
      enablePullDownRefresh: true
    }, _this.state = {
      mode: 'video'
    }, _this.customComponents = ["VideoPlayer", "AtTabs", "AtTabsPane", "HomeWork", "Note"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LessonView, [{
    key: '_constructor',
    value: function _constructor() {
      _get(LessonView.prototype.__proto__ || Object.getPrototypeOf(LessonView.prototype), '_constructor', this).apply(this, arguments);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var courseId = this.$router.params.cid;
      var lessonId = this.$router.params.lid;
      this.props.dispatch({
        type: 'lesson/getLesson',
        payload: {
          courseId: courseId,
          lessonId: lessonId
        }
      });
      this.props.dispatch({
        type: 'lesson/getVideos',
        payload: {
          courseId: courseId,
          lessonId: lessonId
        }
      });
      this.props.dispatch({
        type: 'lesson/getNoteList',
        payload: {
          courseId: courseId,
          lessonId: lessonId
        }
      });
    }
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__31"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__31 = _genCompid2[0],
          $compid__31 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__32"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__32 = _genCompid4[0],
          $compid__32 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__33"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__33 = _genCompid6[0],
          $compid__33 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__34"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__34 = _genCompid8[0],
          $compid__34 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__35"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__35 = _genCompid10[0],
          $compid__35 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__36"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__36 = _genCompid12[0],
          $compid__36 = _genCompid12[1];

      var tabList = [{ title: '作业' }, { title: '笔记' }];
      this.__props.videos && _taroWeapp.propsManager.set({
        "lessonVideo": this.__props.videos,
        "lessonId": this.$router.params.lid
      }, $compid__31, $prevCompid__31);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "tabList": tabList,
        "onClick": this.handleClick.bind(this)
      }, $compid__32, $prevCompid__32);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 0
      }, $compid__33, $prevCompid__33);
      _taroWeapp.propsManager.set({
        "asgnList": this.__props.asgnList
      }, $compid__34, $prevCompid__34);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 1
      }, $compid__35, $prevCompid__35);
      _taroWeapp.propsManager.set({
        "NoteList": this.__props.noteList.notes
      }, $compid__36, $prevCompid__36);
      Object.assign(this.__state, {
        $compid__31: $compid__31,
        $compid__32: $compid__32,
        $compid__33: $compid__33,
        $compid__34: $compid__34,
        $compid__35: $compid__35,
        $compid__36: $compid__36
      });
      return this.__state;
    }
  }]);

  return LessonView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.defaultProps = {}, _class2.$$componentPath = "pages/education/lesson/lesson_view", _temp2)) || _class);
exports.default = LessonView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(LessonView, true));

/***/ }),

/***/ "./src/pages/education/lesson/lesson_view.scss":
/*!*****************************************************!*\
  !*** ./src/pages/education/lesson/lesson_view.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/education/lesson/lesson_view.jsx","runtime","vendors"]]]);