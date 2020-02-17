(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/icon/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/icon/index.js ***!
  \******************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtIcon = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtIcon, _AtComponent);

  function AtIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtIcon.__proto__ || Object.getPrototypeOf(AtIcon)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "customStyle", "className", "prefixClass", "value", "size", "color"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtIcon, [{
    key: '_constructor',
    value: function _constructor() {
      _get(AtIcon.prototype.__proto__ || Object.getPrototypeOf(AtIcon.prototype), '_constructor', this).apply(this, arguments);
      if (false) {}
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props;

      (_props = this.props).onClick.apply(_props, arguments);
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props2 = this.__props,
          customStyle = _props2.customStyle,
          className = _props2.className,
          prefixClass = _props2.prefixClass,
          value = _props2.value,
          size = _props2.size,
          color = _props2.color;


      var rootStyle = {
        fontSize: "" + _taroWeapp2.default.pxTransform(parseInt(size) * 2),
        color: color
      };

      var iconName = value ? prefixClass + "-" + value : '';
      var anonymousState__temp = (0, _classnames2.default)(prefixClass, iconName, className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(rootStyle, customStyle));
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return AtIcon;
}(_component2.default), _class.$$events = ["handleClick"], _class.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24,
  onClick: function onClick() {}
}, _class.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  prefixClass: _propTypes2.default.string,
  value: _propTypes2.default.string,
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onClick: _propTypes2.default.func
}, _class.$$componentPath = 'Users/jingjing/book/\u9879\u76EE/wejudge-miniProgram/node_modules/taro-ui/dist/weapp/components/icon/index', _temp2);
exports.default = AtIcon;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtIcon));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/icon/index.js","runtime","vendors"]]]);