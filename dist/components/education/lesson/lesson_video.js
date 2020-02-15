(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/education/lesson/lesson_video"],{

/***/ "./src/components/education/lesson/lesson_video.jsx":
/*!**********************************************************!*\
  !*** ./src/components/education/lesson/lesson_video.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPlay = (_temp2 = _class = function (_Taro$PureComponent) {
  _inherits(VideoPlay, _Taro$PureComponent);

  function VideoPlay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoPlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoPlay.__proto__ || Object.getPrototypeOf(VideoPlay)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["videoUrl"], _this.config = {}, _this.state = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoPlay, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(VideoPlay.prototype.__proto__ || Object.getPrototypeOf(VideoPlay.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("video", this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      // const pickcode = get(this.props.videos, 'token.pick_code', '');
      // const fileHash = get(this.props.videos, 'token.file_hash', '');
      //
      var videoUrl = "https://resource.dev.wejudge.net/download/2d81f64b45659a500246b608dbf1406966c1daea?pickcode=:dba3e2514f3411eabdf10242ad25e808";
      console.log("99", this.__props);
      Object.assign(this.__state, {
        videoUrl: videoUrl
      });
      return this.__state;
    }
  }]);

  return VideoPlay;
}(_taroWeapp2.default.PureComponent), _class.$$events = [], _class.propTypes = {}, _class.defaultProps = {
  pickcode: '',
  fileHash: ''
}, _class.$$componentPath = "components/education/lesson/lesson_video", _temp2);
exports.default = VideoPlay;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(VideoPlay, true));

/***/ })

},[["./src/components/education/lesson/lesson_video.jsx","runtime","vendors"]]]);