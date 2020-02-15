(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/education/course/course_list"],{

/***/ "./src/pages/education/course/course_list.jsx":
/*!****************************************************!*\
  !*** ./src/pages/education/course/course_list.jsx ***!
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

var _course_icon = __webpack_require__(/*! ../../../asset/image/course_icon.jpg */ "./src/asset/image/course_icon.jpg");

var _course_icon2 = _interopRequireDefault(_course_icon);

__webpack_require__(/*! ./course_list.scss */ "./src/pages/education/course/course_list.scss");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MILLISECOND = 1000;

var defaultTimezoneOffset = 8;

var nowTime = function nowTime() {
  return (0, _moment2.default)();
};

var createMoment = function createMoment(timestamp) {
  return (0, _moment2.default)(timestamp * MILLISECOND).utcOffset(defaultTimezoneOffset);
};
var diffTimeSeconds = function diffTimeSeconds(time1) {
  var time2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (!time2) {
    var _now = nowTime();
    var _dt = createMoment(time1);
    return _now.diff(_dt, 'seconds');
  }
  var now = createMoment(time1);
  var dt = createMoment(time2);
  return now.diff(dt, 'seconds');
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    courselist: state.course.courselist,
    isLoading: state.loading.models['course']
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CourseView.__proto__ || Object.getPrototypeOf(CourseView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__10", "$compid__11", "$compid__12", "$compid__13", "anonymousState__temp", "current", "selector", "selectorChecked", "dispatch", "courselist"], _this.config = {
      enablePullDownRefresh: true
    }, _this.state = {
      current: 0,
      selector: ['全部', '正在进行', '已结束'],
      selectorChecked: '全部'
    }, _this.onChange = function (e) {
      _this.setState({
        selectorChecked: _this.state.selector[e.detail.value]
      });
    }, _this.navigateGoTo = function (id) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/education/course/course_view?cid=" + id
      });
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.customComponents = ["AtAvatar", "AtTabs", "AtTabsPane", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CourseView, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CourseView.prototype.__proto__ || Object.getPrototypeOf(CourseView.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.dispatch({
        type: 'course/getDashboard',
        payload: {}
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
    //切换选择器

  }, {
    key: "_createCourseListData",
    value: function _createCourseListData(_$uid) {
      var _this2 = this;

      return function () {
        var courselist = _this2.props.courselist;
        var selectorChecked = _this2.state.selectorChecked;

        var loopArray0 = courselist.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var dst = diffTimeSeconds(item.$original.start_time);
          var det = diffTimeSeconds(item.$original.end_time);

          var _$indexKey = "azzzz" + index;

          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return _this2.navigateGoTo(item.$original.id);
          };

          var _$indexKey2 = "bzzzz" + index;

          _this2.anonymousFunc1Map[_$indexKey2] = function () {
            return _this2.navigateGoTo(item.$original.id);
          };

          var _$indexKey3 = "czzzz" + index;

          _this2.anonymousFunc2Map[_$indexKey3] = function () {
            return _this2.navigateGoTo(item.$original.id);
          };

          if (selectorChecked === '全部') {} else if (selectorChecked === '已结束' && item.det >= 0) {} else if (selectorChecked === '正在进行' && item.dst >= 0 && item.det < 0) {}

          var _genCompid = (0, _taroWeapp.genCompid)(_$uid + "ezzzzzzzzz" + index, true),
              _genCompid2 = _slicedToArray(_genCompid, 2),
              $prevCompid__7 = _genCompid2[0],
              $compid__7 = _genCompid2[1];

          selectorChecked === '全部' && _taroWeapp.propsManager.set({
            "size": "large",
            "style": "margin-top:10px",
            "image": _course_icon2.default
          }, $compid__7, $prevCompid__7);

          var _genCompid3 = (0, _taroWeapp.genCompid)(_$uid + "fzzzzzzzzz" + index, true),
              _genCompid4 = _slicedToArray(_genCompid3, 2),
              $prevCompid__8 = _genCompid4[0],
              $compid__8 = _genCompid4[1];

          _taroWeapp.propsManager.set({
            "size": "large",
            "style": "margin-top:10px",
            "image": _course_icon2.default
          }, $compid__8, $prevCompid__8);

          var _genCompid5 = (0, _taroWeapp.genCompid)(_$uid + "gzzzzzzzzz" + index, true),
              _genCompid6 = _slicedToArray(_genCompid5, 2),
              $prevCompid__9 = _genCompid6[0],
              $compid__9 = _genCompid6[1];

          _taroWeapp.propsManager.set({
            "size": "large",
            "style": "margin-top:10px",
            "image": _course_icon2.default
          }, $compid__9, $prevCompid__9);
          return {
            dst: dst,
            det: det,
            _$indexKey: _$indexKey,
            _$indexKey2: _$indexKey2,
            _$indexKey3: _$indexKey3,
            $compid__7: $compid__7,
            $compid__8: $compid__8,
            $compid__9: $compid__9,
            $original: item.$original
          };
        });
        return {
          loopArray0: loopArray0,
          courselist: courselist,
          selectorChecked: selectorChecked
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__10 = _genCompid8[0],
          $compid__10 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__11 = _genCompid10[0],
          $compid__11 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__12 = _genCompid12[0],
          $compid__12 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__13 = _genCompid14[0],
          $compid__13 = _genCompid14[1];

      var tabList = [{ title: '课堂' }, { title: '计划' }];

      var anonymousState__temp = this._createCourseListData(__prefix + "dzzzzzzzzz")();

      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "tabList": tabList,
        "onClick": this.handleClick.bind(this)
      }, $compid__10, $prevCompid__10);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 0
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "value": "chevron-down"
      }, $compid__12, $prevCompid__12);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 1
      }, $compid__13, $prevCompid__13);
      Object.assign(this.__state, {
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }]);

  return CourseView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "onChange"], _class2.propTypes = {}, _class2.defaultProps = {
  courselist: {}
}, _class2.$$componentPath = "pages/education/course/course_list", _temp2)) || _class);
exports.default = CourseView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CourseView));

/***/ }),

/***/ "./src/pages/education/course/course_list.scss":
/*!*****************************************************!*\
  !*** ./src/pages/education/course/course_list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/education/course/course_list.jsx","runtime","vendors"]]]);