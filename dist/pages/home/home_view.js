(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/home_view"],{

/***/ "./src/pages/home/home_view.jsx":
/*!**************************************!*\
  !*** ./src/pages/home/home_view.jsx ***!
  \**************************************/
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

__webpack_require__(/*! ./home_view.scss */ "./src/pages/home/home_view.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var HomeView = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(HomeView, _Taro$PureComponent);

  function HomeView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__5", "$compid__6", "currentTab", "current", "account", "isLoading"], _this.config = {
      enablePullDownRefresh: true
    }, _this.state = {
      currentTab: 0
    }, _this.handleTabChange = function (value) {
      _this.setState({
        currentTab: value
      });
    }, _this.customComponents = ["Course", "Account", "TarBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomeView, [{
    key: "_constructor",
    value: function _constructor() {
      _get(HomeView.prototype.__proto__ || Object.getPrototypeOf(HomeView.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        currentTab: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__5"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__5 = _genCompid2[0],
          $compid__5 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__6"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__6 = _genCompid4[0],
          $compid__6 = _genCompid4[1];

      console.log("state", this.__state.currentTab);
      this.__state.currentTab === 1 && _taroWeapp.propsManager.set({
        "accountMessage": this.__props.account.data
      }, $compid__5, $prevCompid__5);
      _taroWeapp.propsManager.set({
        "current": this.__state.currentTab,
        "onClick": this.handleTabChange,
        "onTabChange": this.handleTabChange,
        "isLoading": this.__props.isLoading
      }, $compid__6, $prevCompid__6);
      Object.assign(this.__state, {
        $compid__5: $compid__5,
        $compid__6: $compid__6
      });
      return this.__state;
    }
  }]);

  return HomeView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.defaultProps = {}, _class2.propTypes = {}, _class2.$$componentPath = "pages/home/home_view", _temp2)) || _class);
exports.default = HomeView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(HomeView, true));

/***/ }),

/***/ "./src/pages/home/home_view.scss":
/*!***************************************!*\
  !*** ./src/pages/home/home_view.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/home_view.jsx","runtime","vendors"]]]);