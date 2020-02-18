(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/education/lesson/lesson_asgn"],{

/***/ "./src/pages/education/lesson/lesson_asgn.jsx":
/*!****************************************************!*\
  !*** ./src/pages/education/lesson/lesson_asgn.jsx ***!
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

var _lodashEs = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _filter = __webpack_require__(/*! ../../../utils/filter */ "./src/utils/filter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createMoment = function createMoment(timestamp) {
  return (0, _moment2.default)(timestamp * 1000).utcOffset(8);
};
var formatTimeFromNow = function formatTimeFromNow(timestamp) {
  var dt = createMoment(timestamp);
  return dt.fromNow();
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    asgn: state.lesson.message
  };
};

var LessonAsgn = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(LessonAsgn, _Taro$PureComponent);

  function LessonAsgn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonAsgn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonAsgn.__proto__ || Object.getPrototypeOf(LessonAsgn)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__57", "current", "dispatch", "asgn"], _this.config = {
      enablePullDownRefresh: true
    }, _this.state = {
      current: 0
    }, _this.customComponents = ["AtCard"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LessonAsgn, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(LessonAsgn.prototype.__proto__ || Object.getPrototypeOf(LessonAsgn.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log("nid", this.props);
      this.props.dispatch({
        type: 'lesson/getNoteMessage',
        payload: {
          noteId: this.$router.params.nid
        }
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
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__57"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__57 = _genCompid2[0],
          $compid__57 = _genCompid2[1];

      var anonymousState__temp = formatTimeFromNow((0, _lodashEs.get)(this.__props.asgn, 'update_time'));
      var anonymousState__temp2 = (0, _lodashEs.get)(this.prop.asgn, 'title');
      var anonymousState__temp3 = (0, _filter.convertHtmlToText)((0, _lodashEs.get)(this.__props.asgn, 'content'));
      _taroWeapp.propsManager.set({
        "extra": anonymousState__temp,
        "title": anonymousState__temp2
      }, $compid__57, $prevCompid__57);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__57: $compid__57
      });
      return this.__state;
    }
  }]);

  return LessonAsgn;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.defaultProps = {
  course_announcements: {},
  announcementsList: {}
}, _class2.$$componentPath = "pages/education/lesson/lesson_asgn", _temp2)) || _class);
exports.default = LessonAsgn;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(LessonAsgn, true));

/***/ })

},[["./src/pages/education/lesson/lesson_asgn.jsx","runtime","vendors"]]]);