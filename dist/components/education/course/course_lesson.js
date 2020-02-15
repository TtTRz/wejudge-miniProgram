(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/education/course/course_lesson"],{

/***/ "./src/components/education/course/course_lesson.jsx":
/*!***********************************************************!*\
  !*** ./src/components/education/course/course_lesson.jsx ***!
  \***********************************************************/
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

var _lodashEs = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    lesson: state.course.lessonList
  };
};

var CourseView = (_dec = (0, _redux.connect)(mapStateToProps), _dec(_class = (_temp2 = _class2 = function (_Taro$PureComponent) {
  _inherits(CourseView, _Taro$PureComponent);

  function CourseView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CourseView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CourseView.__proto__ || Object.getPrototypeOf(CourseView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp5", "current", "open", "dispatch", "courseId", "lesson"], _this.config = {
      enablePullDownRefresh: true,
      navigationBarTitleText: ''

    }, _this.state = {
      current: 0,
      open: true
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = ["AtAccordion", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CourseView, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(CourseView.prototype.__proto__ || Object.getPrototypeOf(CourseView.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch({
        type: 'course/getLessonList',
        payload: {
          courseId: this.props.courseId
        }
      });
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
    key: 'handleLessonClick',
    value: function handleLessonClick(id) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/education/lesson/lesson_view?cid=" + this.props.courseId + '&lid=' + id
      });
    }
  }, {
    key: '_createListData',
    value: function _createListData(_$uid) {
      var _this2 = this;

      return function (data) {
        var loopArray3 = data.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };
          var $loopState__temp2 = (0, _lodashEs.get)(item.$original, 'children', []).length !== 0 ? _this2._createSecondListData(_$uid + "izzzzzzzzz" + ('' + index))(item.$original.children, index) : null;
          var $loopState__temp7 = (0, _lodashEs.get)(item.$original, 'children', []).length !== 0;

          var _genCompid = (0, _taroWeapp.genCompid)(_$uid + 'bdzzzzzzzz' + index, true),
              _genCompid2 = _slicedToArray(_genCompid, 2),
              $prevCompid__24 = _genCompid2[0],
              $compid__24 = _genCompid2[1];

          _taroWeapp.propsManager.set({
            "open": "true",
            "title": item.$original.title
          }, $compid__24, $prevCompid__24);

          var _genCompid3 = (0, _taroWeapp.genCompid)(_$uid + 'bezzzzzzzz' + index, true),
              _genCompid4 = _slicedToArray(_genCompid3, 2),
              $prevCompid__25 = _genCompid4[0],
              $compid__25 = _genCompid4[1];

          _taroWeapp.propsManager.set({
            "hasBorder": true
          }, $compid__25, $prevCompid__25);
          return {
            $loopState__temp2: $loopState__temp2,
            $loopState__temp7: $loopState__temp7,
            $compid__24: $compid__24,
            $compid__25: $compid__25,
            $original: item.$original
          };
        });
        return {
          loopArray3: loopArray3,
          data: data
        };
      };
    }
  }, {
    key: '_createSecondListData',
    value: function _createSecondListData(_$uid) {
      var _this3 = this;

      return function (list, index) {
        var loopArray4 = list.map(function (item, ix) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };
          var $loopState__temp4 = item.$original.is_group && (0, _lodashEs.get)(item.$original, 'children', []).length !== 0 ? _this3._createThirdListData(_$uid + "jzzzzzzzzz" + ('' + ix))(item.$original.children, index, ix) : null;

          var _$indexKey = "bazzz" + ix;

          _this3.anonymousFunc0Map[_$indexKey] = function () {
            return _this3.handleLessonClick(item.$original.id);
          };

          var $loopState__temp9 = item.$original.is_group && (0, _lodashEs.get)(item.$original, 'children', []).length !== 0;

          var _genCompid5 = (0, _taroWeapp.genCompid)(_$uid + 'bfzzzzzzzz' + ix, true),
              _genCompid6 = _slicedToArray(_genCompid5, 2),
              $prevCompid__26 = _genCompid6[0],
              $compid__26 = _genCompid6[1];

          $loopState__temp9 && _taroWeapp.propsManager.set({
            "open": "true",
            "title": item.$original.title
          }, $compid__26, $prevCompid__26);

          var _genCompid7 = (0, _taroWeapp.genCompid)(_$uid + 'bgzzzzzzzz' + ix, true),
              _genCompid8 = _slicedToArray(_genCompid7, 2),
              $prevCompid__27 = _genCompid8[0],
              $compid__27 = _genCompid8[1];

          $loopState__temp9 && _taroWeapp.propsManager.set({
            "hasBorder": true
          }, $compid__27, $prevCompid__27);

          var _genCompid9 = (0, _taroWeapp.genCompid)(_$uid + 'bhzzzzzzzz' + ix, true),
              _genCompid10 = _slicedToArray(_genCompid9, 2),
              $prevCompid__28 = _genCompid10[0],
              $compid__28 = _genCompid10[1];

          !$loopState__temp9 && _taroWeapp.propsManager.set({
            "note": item.$original.title,
            "onClick": _this3.anonymousFunc0.bind(_this3, _$indexKey)
          }, $compid__28, $prevCompid__28);
          return {
            $loopState__temp4: $loopState__temp4,
            _$indexKey: _$indexKey,
            $loopState__temp9: $loopState__temp9,
            $compid__26: $compid__26,
            $compid__27: $compid__27,
            $compid__28: $compid__28,
            $original: item.$original
          };
        });
        return {
          loopArray4: loopArray4,
          list: list
        };
      };
    }
  }, {
    key: '_createThirdListData',
    value: function _createThirdListData(_$uid) {
      var _this4 = this;

      return function (list, index, ix) {
        var loopArray5 = list.map(function (item, i) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _$indexKey2 = "bbzzz" + i;

          _this4.anonymousFunc1Map[_$indexKey2] = function () {
            return _this4.handleLessonClick(item.$original.id);
          };

          var _genCompid11 = (0, _taroWeapp.genCompid)(_$uid + 'bizzzzzzzz' + i, true),
              _genCompid12 = _slicedToArray(_genCompid11, 2),
              $prevCompid__29 = _genCompid12[0],
              $compid__29 = _genCompid12[1];

          _taroWeapp.propsManager.set({
            "note": item.$original.title,
            "onClick": _this4.anonymousFunc1.bind(_this4, _$indexKey2)
          }, $compid__29, $prevCompid__29);
          return {
            _$indexKey2: _$indexKey2,
            $compid__29: $compid__29,
            $original: item.$original
          };
        });
        return {
          loopArray5: loopArray5,
          list: list
        };
      };
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var data = this.__props.lesson.data;


      var anonymousState__temp5 = this._createListData(__prefix + "bczzzzzzzz")(data);

      Object.assign(this.__state, {
        anonymousState__temp5: anonymousState__temp5
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
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }]);

  return CourseView;
}(_taroWeapp2.default.PureComponent), _class2.$$events = [], _class2.propTypes = {}, _class2.$$componentPath = "components/education/course/course_lesson", _temp2)) || _class);
exports.default = CourseView;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CourseView));

/***/ })

},[["./src/components/education/course/course_lesson.jsx","runtime","vendors"]]]);