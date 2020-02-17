(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/education/lesson/lesson_homework"],{

/***/ "./src/components/education/lesson/lesson_homework.jsx":
/*!*************************************************************!*\
  !*** ./src/components/education/lesson/lesson_homework.jsx ***!
  \*************************************************************/
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

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

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

var nowTime = function nowTime() {
  return (0, _moment2.default)();
};
var formatTimeToNow = function formatTimeToNow(timestamp) {
  var dt = createMoment(timestamp);
  return dt.toNow();
};

var getStautsByStartEndTime = function getStautsByStartEndTime(startTime, endTime) {
  var endOfDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var st = createMoment(startTime);
  var et = createMoment(endTime);
  var now = nowTime();
  var dst = now.diff(st, 'seconds');
  var det = now.diff(et, 'seconds');

  if (dst < 0) {
    // now < start_time  => 未开始
    return {
      status: -1,
      diff: dst,
      desc: formatTimeFromNow(startTime).replace(' ', '').replace('内', '后') + '\u5F00\u59CB'
    };
  } else if (dst >= 0 && det < 0) {
    var endOfDayDst = endOfDay * 24 * 60 * 60;
    if (endOfDay === 0 || endOfDay > 0 && -endOfDayDst < det) {
      return {
        status: 0,
        diff: 0 - det,
        desc: formatTimeFromNow(endTime).replace(' ', '').replace('内', '后') + '\u7ED3\u675F'
      };
    }
    return {
      status: 0,
      diff: 0 - det,
      desc: '行中'
    };
  } else if (det >= 0) {
    return {
      status: 1,
      diff: det,
      desc: '\u5DF2\u7ED3\u675F' + formatTimeToNow(endTime).replace(' ', '').replace('内', '')
    };
  }
  return {
    status: -1,
    desc: '未知'
  };
};
var LessonHWork = (_temp2 = _class = function (_Taro$PureComponent) {
  _inherits(LessonHWork, _Taro$PureComponent);

  function LessonHWork() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonHWork);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonHWork.__proto__ || Object.getPrototypeOf(LessonHWork)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray7", "asgns", "asgnList"], _this.config = {}, _this.state = {}, _this.customComponents = ["AtList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LessonHWork, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(LessonHWork.prototype.__proto__ || Object.getPrototypeOf(LessonHWork.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: '_createAsgnStatusTagData',
    value: function _createAsgnStatusTagData(_$uid) {
      return function (status) {
        var _$color;

        console.log("status", status);
        if (status.role === 'manage') {
          _$color = status.checked >= status.reports ? '#52c41a' : '#1890ff';
        }
        if (!status.permission) {}
        console.log("perssion", status.permission);
        var timeStatus = getStautsByStartEndTime(status.start_time, status.end_time);
        var color = {
          '-1': '#1890ff',
          0: '#52c41a',
          1: '#f5222d'
        };
        console.log("des", timeStatus);
        return {
          status: status,
          _$color: _$color,
          timeStatus: timeStatus
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

      var asgns = this.__props.asgnList.asgns;
      var loopArray7 = asgns ? asgns.map(function (item, index) {
        // return (
        {/*<View>*/}

        {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var status = item.$original.status;
          console.log("status", status);
          var timeStatus = getStautsByStartEndTime(status.start_time, status.end_time);
          var color = {
            '-1': '#1890ff',
            0: '#52c41a',
            1: '#f5222d'
          };
          console.log("des", timeStatus);
          return {
            status: status,
            timeStatus: timeStatus,
            color: color,
            $original: item.$original
          };
        }
        // </View>
        // )
      }) : [];
      Object.assign(this.__state, {
        loopArray7: loopArray7,
        asgns: asgns
      });
      return this.__state;
    }
  }]);

  return LessonHWork;
}(_taroWeapp2.default.PureComponent), _class.$$events = [], _class.propTypes = {}, _class.defaultProps = {}, _class.$$componentPath = "components/education/lesson/lesson_homework", _temp2);


{/*<AtListItem*/}
{/*    title={item.title}*/}
{/*    note={formatTimeFromNow(item.create_time)}*/}
{/*    arrow='right'>*/}

{/*</AtListItem>*/}
exports.default = LessonHWork;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(LessonHWork));

/***/ })

},[["./src/components/education/lesson/lesson_homework.jsx","runtime","vendors"]]]);