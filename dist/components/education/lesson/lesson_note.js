(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/education/lesson/lesson_note"],{

/***/ "./src/components/education/lesson/lesson_note.jsx":
/*!*********************************************************!*\
  !*** ./src/components/education/lesson/lesson_note.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildResourcePath = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _filter = __webpack_require__(/*! ../../../utils/filter */ "./src/utils/filter.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");

__webpack_require__(/*! ./lesson_note.scss */ "./src/components/education/lesson/lesson_note.scss");

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

var buildResourcePath = exports.buildResourcePath = function buildResourcePath(vpath) {
  if (!vpath) {
    return null;
  }var bpath = _jsBase.Base64.encode(vpath);
  var h = bpath.replace('/', '*');
  var p = h.replace('+', '-');
  return "/resource/" + p;
};
var LessonNote = (_temp2 = _class = function (_Taro$PureComponent) {
  _inherits(LessonNote, _Taro$PureComponent);

  function LessonNote() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonNote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonNote.__proto__ || Object.getPrototypeOf(LessonNote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray8", "notes", "dispatch", "NoteList"], _this.config = {}, _this.state = {}, _this.BuildAvatarPath = function (id) {
      _this.props.dispatch({
        type: 'account/getAccount',
        payload: {
          aid: id
        }
      }).then(function (res) {
        return buildResourcePath(res.data.avator);
      });
    }, _this.customComponents = ["AtAvatar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LessonNote, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(LessonNote.prototype.__proto__ || Object.getPrototypeOf(LessonNote.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var notes = this.__props.NoteList;
      var loopArray8 = notes ? notes.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = notes ? function () {
          return _this2.BuildAvatarPath(item.$original.student_info.id);
        } : null;
        var $loopState__temp4 = notes ? formatTimeFromNow(item.$original.update_time) : null;
        var $loopState__temp6 = notes ? (0, _filter.convertHtmlToText)(item.$original.content) : null;

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + 'cazzzzzzzz' + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__37 = _genCompid2[0],
            $compid__37 = _genCompid2[1];

        _taroWeapp.propsManager.set({
          "circle": true,
          "size": "small",
          "image": $loopState__temp2
        }, $compid__37, $prevCompid__37);
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $compid__37: $compid__37,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray8: loopArray8,
        notes: notes
      });
      return this.__state;
    }
  }]);

  return LessonNote;
}(_taroWeapp2.default.PureComponent), _class.$$events = [], _class.propTypes = {}, _class.defaultProps = {}, _class.$$componentPath = "components/education/lesson/lesson_note", _temp2);
exports.default = LessonNote;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(LessonNote));

/***/ }),

/***/ "./src/components/education/lesson/lesson_note.scss":
/*!**********************************************************!*\
  !*** ./src/components/education/lesson/lesson_note.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/education/lesson/lesson_note.jsx","runtime","vendors"]]]);