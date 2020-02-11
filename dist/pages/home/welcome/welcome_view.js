(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/welcome/welcome_view"],{

/***/ "./src/pages/home/welcome/welcome_view.js":
/*!************************************************!*\
  !*** ./src/pages/home/welcome/welcome_view.js ***!
  \************************************************/
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
// import  'src/pages/home/welcome/welcome_view.scss'

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./welcome_view.scss */ "./src/pages/home/welcome/welcome_view.scss");

var _course_icon = __webpack_require__(/*! ../../../../src/asset/image/course_icon.jpg */ "./src/asset/image/course_icon.jpg");

var _course_icon2 = _interopRequireDefault(_course_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  var isLoading = state.loading.models['account'];
  return {
    account: state.account,
    isLoading: isLoading
  };
};

var WelcomeView = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(WelcomeView, _Taro$PureComponent);

  function WelcomeView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WelcomeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WelcomeView.__proto__ || Object.getPrototypeOf(WelcomeView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__0", "$compid__1", "$compid__2", "$compid__3", "username", "password", "dispatch", "account"], _this.config = {}, _this.state = {
      // loading: false,
      username: '',
      password: ''
    }, _this.handleLoginClick = function () {
      _this.props.dispatch({
        type: 'account/login',
        payload: {
          username: _this.state.username,
          password: _this.state.password
        }
      }).then(function () {
        if (_this.props.account.token) {
          _taroWeapp2.default.vibrateLong({
            success: function success() {
              _taroWeapp2.default.redirectTo({
                url: '/pages/home/home_view'
              });
            }
          });
        } else {
          _taroWeapp2.default.vibrateLong({
            success: function success() {
              console.log('登录失败');
              _taroWeapp2.default.atMessage({
                'message': '网络错误，请稍后重试！',
                'type': 'error',
                duration: 5000
              });
            }
          });
        }
      });
    }, _this.handleInputChange = function (keyName, value) {
      // console.log(value);
      _this.setState(_defineProperty({}, keyName, value));
    }, _this.customComponents = ["AtAvatar", "AtForm", "AtInput", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WelcomeView, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(WelcomeView.prototype.__proto__ || Object.getPrototypeOf(WelcomeView.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1 = _genCompid4[0],
          $compid__1 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__2"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__2 = _genCompid6[0],
          $compid__2 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__3"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__3 = _genCompid8[0],
          $compid__3 = _genCompid8[1];

      _taroWeapp.propsManager.set({
        "className": "welcome-atavater",
        "circle": true,
        "image": _course_icon2.default,
        "size": "normal"
      }, $compid__0, $prevCompid__0);
      _taroWeapp.propsManager.set({
        "name": "username",
        "title": '\u7528\u6237\u540D:',
        "type": "text",
        "placeholder": "Email",
        "value": this.__state.username,
        "onChange": this.handleInputChange.bind(this, 'username')
      }, $compid__1, $prevCompid__1);
      _taroWeapp.propsManager.set({
        "name": "password",
        "title": '\u5BC6\u7801:',
        "type": "password",
        "placeholder": '\u767B\u9646\u5BC6\u7801',
        "value": this.__state.password,
        "onChange": this.handleInputChange.bind(this, 'password')
      }, $compid__2, $prevCompid__2);
      _taroWeapp.propsManager.set({
        "className": "welcome-button",
        "type": "primary",
        "circle": true,
        "size": "normal",
        "onClick": this.handleLoginClick
      }, $compid__3, $prevCompid__3);
      Object.assign(this.__state, {
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3
      });
      return this.__state;
    }
  }]);

  return WelcomeView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.$$componentPath = "pages/home/welcome/welcome_view", _temp2)) || _class);
exports.default = WelcomeView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(WelcomeView, true));

/***/ }),

/***/ "./src/pages/home/welcome/welcome_view.scss":
/*!**************************************************!*\
  !*** ./src/pages/home/welcome/welcome_view.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/welcome/welcome_view.js","runtime","vendors"]]]);