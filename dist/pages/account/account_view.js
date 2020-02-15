(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/account/account_view"],{

/***/ "./src/asset/image/a90eb197337beb1e34ffbe5637f578d9.jpeg":
/*!***************************************************************!*\
  !*** ./src/asset/image/a90eb197337beb1e34ffbe5637f578d9.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/a90eb197337beb1e34ffbe5637f578d9.jpeg";

/***/ }),

/***/ "./src/pages/account/account_view.jsx":
/*!********************************************!*\
  !*** ./src/pages/account/account_view.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./account_view.scss */ "./src/pages/account/account_view.scss");

var _a90eb197337beb1e34ffbe5637f578d = __webpack_require__(/*! ../../asset/image/a90eb197337beb1e34ffbe5637f578d9.jpeg */ "./src/asset/image/a90eb197337beb1e34ffbe5637f578d9.jpeg");

var _a90eb197337beb1e34ffbe5637f578d2 = _interopRequireDefault(_a90eb197337beb1e34ffbe5637f578d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Role(n) {

  if (n === 99) {
    return "系统管理员";
  } else if (n === 0) {
    return "普通用户";
  } else if (n === 1) {
    return "助教";
  } else if (n === 2) {
    return "教师";
  } else if (n === 3) {
    return "学校负责人";
  }
}

// @connect(mapStateToProps,null)
var AccountView = (_temp2 = _class = function (_Taro$PureComponent) {
  _inherits(AccountView, _Taro$PureComponent);

  function AccountView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AccountView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccountView.__proto__ || Object.getPrototypeOf(AccountView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__14", "$compid__15", "$compid__16", "current", "accountMessage"], _this.config = {
      enablePullDownRefresh: true
    }, _this.state = {
      current: 1
    }, _this.customComponents = ["AtAvatar", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AccountView, [{
    key: '_constructor',
    value: function _constructor() {
      _get(AccountView.prototype.__proto__ || Object.getPrototypeOf(AccountView.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        current: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__14 = _genCompid2[0],
          $compid__14 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__15"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__15 = _genCompid4[0],
          $compid__15 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__16"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__16 = _genCompid6[0],
          $compid__16 = _genCompid6[1];

      var tabList = [{ title: '课程' }, { title: '笔记' }];
      var anonymousState__temp = Role(this.__props.accountMessage.role);
      _taroWeapp.propsManager.set({
        "circle": true,
        "size": "normal",
        "className": "account-avator",
        "image": _a90eb197337beb1e34ffbe5637f578d2.default
      }, $compid__14, $prevCompid__14);
      _taroWeapp.propsManager.set({
        "title": '\u505A\u9898\u8BB0\u5F55',
        "arrow": "right"
      }, $compid__15, $prevCompid__15);
      _taroWeapp.propsManager.set({
        "title": '\u5173\u4E8E\u6211\u4EEC',
        "arrow": "right"
      }, $compid__16, $prevCompid__16);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__14: $compid__14,
        $compid__15: $compid__15,
        $compid__16: $compid__16
      });
      return this.__state;
    }
  }]);

  return AccountView;
}(_taroWeapp2.default.PureComponent), _class.$$events = [], _class.defaultProps = {
  accountMessage: {}
}, _class.$$componentPath = "pages/account/account_view", _temp2);
exports.default = AccountView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AccountView));

/***/ }),

/***/ "./src/pages/account/account_view.scss":
/*!*********************************************!*\
  !*** ./src/pages/account/account_view.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/account/account_view.jsx","runtime","vendors"]]]);