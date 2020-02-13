(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/education/course/course_lesson"],{

/***/ "./src/components/education/course/course_lesson.jsx":
/*!***********************************************************!*\
  !*** ./src/components/education/course/course_lesson.jsx ***!
  \***********************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    lesson: state.course.lessonList
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CourseView.__proto__ || Object.getPrototypeOf(CourseView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray12", "data", "current", "open", "dispatch", "courseId", "lesson"], _this.config = {
      enablePullDownRefresh: true,
      navigationBarTitleText: ''

    }, _this.state = {
      current: 0,
      open: true
    }, _this.customComponents = ["AtAccordion", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
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
        type: 'course/getLessonList',
        payload: {
          courseId: this.props.courseId
        }
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
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var data = this.__props.lesson.data;

      var loopArray12 = data.map(function (items, _anonIdx3) {
        items = {
          $original: (0, _taroWeapp.internal_get_original)(items)
        };
        var $anonymousCallee__8 = items.$original.children.map(function (item, _anonIdx) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          console.log("item", item.$original);

          var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "cizzzzzzzz" + _anonIdx3 + "-" + _anonIdx, true),
              _genCompid2 = _slicedToArray(_genCompid, 2),
              $prevCompid__155 = _genCompid2[0],
              $compid__155 = _genCompid2[1];

          _taroWeapp.propsManager.set({
            "title": item.$original.title
          }, $compid__155, $prevCompid__155);
          return {
            $compid__155: $compid__155,
            $original: item.$original
          };
        });

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "cjzzzzzzzz" + _anonIdx3, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__156 = _genCompid4[0],
            $compid__156 = _genCompid4[1];

        _taroWeapp.propsManager.set({
          "open": _this2.__state.open,
          "title": items.$original.title
        }, $compid__156, $prevCompid__156);

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "dazzzzzzzz" + _anonIdx3, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__157 = _genCompid6[0],
            $compid__157 = _genCompid6[1];

        _taroWeapp.propsManager.set({
          "hasBorder": false
        }, $compid__157, $prevCompid__157);
        return {
          $anonymousCallee__8: $anonymousCallee__8,
          $compid__156: $compid__156,
          $compid__157: $compid__157,
          $original: items.$original
        };
      });
      Object.assign(this.__state, {
        loopArray12: loopArray12,
        data: data
      });
      return this.__state;
    }
  }]);

  return CourseView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.$$componentPath = "components/education/course/course_lesson", _temp2)) || _class);
exports.default = CourseView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CourseView));

/***/ })

},[["./src/components/education/course/course_lesson.jsx","runtime","vendors"]]]);