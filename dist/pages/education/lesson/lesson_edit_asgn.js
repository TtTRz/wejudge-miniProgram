(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/education/lesson/lesson_edit_asgn"],{

/***/ "./src/pages/education/lesson/lesson_edit_asgn.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/education/lesson/lesson_edit_asgn.jsx ***!
  \*********************************************************/
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

__webpack_require__(/*! ./lesson_edit_asgn.scss */ "./src/pages/education/lesson/lesson_edit_asgn.scss");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

var EditNote = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(EditNote, _Taro$PureComponent);

  function EditNote() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditNote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditNote.__proto__ || Object.getPrototypeOf(EditNote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__45", "$compid__46", "$compid__47", "$compid__48", "title", "content", "dispatch"], _this.config = {}, _this.state = {
      title: '',
      content: ''
    }, _this.handleChange1 = function (event) {
      _this.setState({
        content: event.target.value
      });
    }, _this.handleChange2 = function (value) {
      _this.setState({
        title: value
      });
    }, _this.customComponents = ["AtForm", "AtInput", "AtTextarea", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditNote, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(EditNote.prototype.__proto__ || Object.getPrototypeOf(EditNote.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      console.log("event", this.$router);
      this.props.dispatch({
        type: 'lesson/editNote',
        payload: {
          title: this.state.title,
          content: this.state.content,
          course_id: this.$router.params.cid,
          lesson_id: this.$router.params.lid
        }
      }).then(function (id) {
        if (id) {
          _taroWeapp2.default.navigateBack({
            delta: 1 // 返回上一级页面。
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__45"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__45 = _genCompid2[0],
          $compid__45 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__46"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__46 = _genCompid4[0],
          $compid__46 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__47"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__47 = _genCompid6[0],
          $compid__47 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__48"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__48 = _genCompid8[0],
          $compid__48 = _genCompid8[1];

      _taroWeapp.propsManager.set({
        "onSubmit": this.onSubmit.bind(this)
      }, $compid__45, $prevCompid__45);
      _taroWeapp.propsManager.set({
        "name": "title",
        "title": "\u6807\u9898",
        "type": "text",
        "value": this.__state.title,
        "onChange": this.handleChange2.bind(this)
      }, $compid__46, $prevCompid__46);
      _taroWeapp.propsManager.set({
        "value": this.__state.content,
        "onChange": this.handleChange1.bind(this),
        "maxLength": 600,
        "placeholder": "\u8BB0\u7B14\u8BB0...",
        "height": 400
      }, $compid__47, $prevCompid__47);
      _taroWeapp.propsManager.set({
        "formType": "submit",
        "type": "primary"
      }, $compid__48, $prevCompid__48);
      Object.assign(this.__state, {
        $compid__45: $compid__45,
        $compid__46: $compid__46,
        $compid__47: $compid__47,
        $compid__48: $compid__48
      });
      return this.__state;
    }
  }]);

  return EditNote;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.defaultProps = {}, _class2.$$componentPath = "pages/education/lesson/lesson_edit_asgn", _temp2)) || _class);
exports.default = EditNote;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(EditNote, true));

/***/ }),

/***/ "./src/pages/education/lesson/lesson_edit_asgn.scss":
/*!**********************************************************!*\
  !*** ./src/pages/education/lesson/lesson_edit_asgn.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/education/lesson/lesson_edit_asgn.jsx","runtime","vendors"]]]);