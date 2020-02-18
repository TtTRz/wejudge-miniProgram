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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonNote.__proto__ || Object.getPrototypeOf(LessonNote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray8", "$compid__42", "$compid__43", "$compid__44", "notes", "dispatch", "courseId", "lessonId", "NoteList"], _this.config = {}, _this.state = {}, _this.BuildAvatarPath = function (id) {
      _this.props.dispatch({
        type: 'account/getAccount',
        payload: {
          aid: id
        }
      }).then(function (res) {
        return buildResourcePath(res.data.avator);
      });
    }, _this.navigateGoTo = function () {
      _taroWeapp2.default.navigateTo({
        url: '/pages/education/lesson/lesson_edit_asgn?cid=' + _this.props.courseId + '&lid=' + _this.props.lessonId
      });
    }, _this.openNote = function (id) {
      _taroWeapp2.default.navigateTo({
        url: '/pages/education/lesson/lesson_asgn?nid=' + id
      });
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["AtButton", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__42"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__42 = _genCompid2[0],
          $compid__42 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__43"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__43 = _genCompid4[0],
          $compid__43 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__44"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__44 = _genCompid6[0],
          $compid__44 = _genCompid6[1];

      var notes = this.__props.NoteList;
      var loopArray8 = notes.length !== 0 ? notes.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "cfzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.openNote(item.$original.id);
        };

        var $loopState__temp2 = notes.length !== 0 ? formatTimeFromNow(item.$original.update_time) : null;
        var $loopState__temp4 = notes.length !== 0 ? (0, _filter.convertHtmlToText)(item.$original.content) : null;
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "type": "primary",
        "size": "normal",
        "onClick": this.navigateGoTo
      }, $compid__42, $prevCompid__42);
      _taroWeapp.propsManager.set({
        "value": "edit"
      }, $compid__43, $prevCompid__43);
      _taroWeapp.propsManager.set({
        "value": "edit"
      }, $compid__44, $prevCompid__44);
      Object.assign(this.__state, {
        loopArray8: loopArray8,
        $compid__42: $compid__42,
        $compid__43: $compid__43,
        $compid__44: $compid__44,
        notes: notes
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return LessonNote;
}(_taroWeapp2.default.PureComponent), _class.$$events = ["anonymousFunc0"], _class.propTypes = {}, _class.defaultProps = {}, _class.$$componentPath = "components/education/lesson/lesson_note", _temp2);
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