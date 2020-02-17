(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/card/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/card/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/card/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2, _initialiseProps;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtCard = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtCard, _AtComponent);

  function AtCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCard.__proto__ || Object.getPrototypeOf(AtCard)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCard, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtCard.prototype.__proto__ || Object.getPrototypeOf(AtCard.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          title = _props.title,
          note = _props.note,
          extra = _props.extra,
          extraStyle = _props.extraStyle,
          thumb = _props.thumb,
          isFull = _props.isFull,
          icon = _props.icon;


      var rootClass = (0, _classnames2.default)('at-card', {
        'at-card--full': isFull
      }, this.__props.className);
      var iconClass = (0, _classnames2.default)((_classNames = {
        'at-icon': true
      }, _defineProperty(_classNames, "at-icon-" + (icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-card__header-icon', true), _classNames));

      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && icon.size + "px" || ''
      };

      var anonymousState__temp = !thumb && icon && icon.value ? (0, _taroWeapp.internal_inline_style)(iconStyle) : null;
      var anonymousState__temp2 = extra ? (0, _taroWeapp.internal_inline_style)(_extends({}, extraStyle)) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        rootClass: rootClass,
        thumb: thumb,
        icon: icon,
        iconClass: iconClass,
        extra: extra,
        note: note,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtCard;
}(_component2.default), _class.$$events = ["handleClick"], _class.multipleSlots = true, _class.$$componentPath = 'Users/jingjing/book/\u9879\u76EE/wejudge-miniProgram/node_modules/taro-ui/dist/weapp/components/card/index', _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "rootClass", "thumb", "icon", "iconClass", "extra", "note", "title", "extraStyle", "isFull", "className", "renderIcon", "children"];

  this.handleClick = function () {
    if ((0, _isFunction3.default)(_this2.props.onClick)) {
      var _props2;

      (_props2 = _this2.props).onClick.apply(_props2, arguments);
    }
  };

  this.customComponents = [];
}, _temp2);


AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  icon: {},
  onClick: function onClick() {},

  renderIcon: '',
  extraStyle: {}
};

AtCard.propTypes = {
  note: _propTypes2.default.string,
  isFull: _propTypes2.default.bool,
  thumb: _propTypes2.default.string,
  title: _propTypes2.default.string,
  extra: _propTypes2.default.string,
  icon: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  renderIcon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  extraStyle: _propTypes2.default.object // 自定义extra样式


  // AtCard.defaultProps = {
  //   note: '',
  //   isFull: false,
  //   thumb: '',
  //   title: '',
  //   extra: '',
  //   onClick: () => {},
  // }

};
exports.default = AtCard;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtCard));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/card/index.js","runtime","vendors"]]]);