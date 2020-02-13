(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/education/course/course_announcements"],{

/***/ "./src/components/education/course/course_announcements.jsx":
/*!******************************************************************!*\
  !*** ./src/components/education/course/course_announcements.jsx ***!
  \******************************************************************/
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

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

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
    announcementsList: state.course.announcementsList
  };
};

var Announcements = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(Announcements, _Taro$PureComponent);

  function Announcements() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Announcements);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Announcements.__proto__ || Object.getPrototypeOf(Announcements)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray3", "course_announcements", "current", "dispatch", "courseId", "announcementsList"], _this.config = {
      enablePullDownRefresh: true
    }, _this.state = {
      current: 0
    }, _this.customComponents = ["AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Announcements, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Announcements.prototype.__proto__ || Object.getPrototypeOf(Announcements.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.dispatch({
        type: 'course/getAnnouncementsList',
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
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var course_announcements = this.__props.announcementsList.data.course_announcements;

      var loopArray3 = course_announcements ? course_announcements.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        console.log(item.$original);
        var $loopState__temp2 = course_announcements ? formatTimeFromNow(item.$original.update_time) : null;

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "izzzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__22 = _genCompid2[0],
            $compid__22 = _genCompid2[1];

        _taroWeapp.propsManager.set({
          "title": item.$original.title,
          "note": $loopState__temp2,
          "arrow": "right"
        }, $compid__22, $prevCompid__22);
        return {
          $loopState__temp2: $loopState__temp2,
          $compid__22: $compid__22,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray3: loopArray3,
        course_announcements: course_announcements
      });
      return this.__state;
    }
  }]);

  return Announcements;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.defaultProps = {
  course_announcements: {},
  announcementsList: {}
}, _class2.$$componentPath = "components/education/course/course_announcements", _temp2)) || _class);
exports.default = Announcements;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Announcements));

/***/ })

},[["./src/components/education/course/course_announcements.jsx","runtime","vendors"]]]);