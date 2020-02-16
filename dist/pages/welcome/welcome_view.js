(wx.webpackJsonp=wx.webpackJsonp||[]).push([[26],{"693":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var g=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r,i,a,b=o(1),c=_interopRequireDefault(b),s=o(37);o(694);var C=_interopRequireDefault(o(165));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=(0,s.connect)(function mapStateToProps(e){var t=e.loading.models.account;return{"account":e.account,"isLoading":t}})((function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WelcomeView,c.default.PureComponent),n(WelcomeView,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0})(WelcomeView.prototype.__proto__||Object.getPrototypeOf(WelcomeView.prototype),"_constructor",this).call(this,e),this.$$refs=new c.default.RefsArray}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"_createData","value":function _createData(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,r=(0,b.genCompid)(n+"$compid__0"),i=g(r,2),a=i[0],c=i[1],s=(0,b.genCompid)(n+"$compid__1"),u=g(s,2),l=u[0],p=u[1],f=(0,b.genCompid)(n+"$compid__2"),d=g(f,2),m=d[0],_=d[1],h=(0,b.genCompid)(n+"$compid__3"),y=g(h,2),v=y[0],w=y[1];return b.propsManager.set({"className":"welcome-atavater","circle":!0,"image":C.default,"size":"normal"},c,a),b.propsManager.set({"name":"username","title":"用户名:","type":"text","placeholder":"Email","value":this.__state.username,"onChange":this.handleInputChange.bind(this,"username")},p,l),b.propsManager.set({"name":"password","title":"密码:","type":"password","placeholder":"登陆密码","value":this.__state.password,"onChange":this.handleInputChange.bind(this,"password")},_,m),b.propsManager.set({"className":"welcome-button","type":"primary","circle":!0,"size":"normal","onClick":this.handleLoginClick},w,v),Object.assign(this.__state,{"$compid__0":c,"$compid__1":p,"$compid__2":_,"$compid__3":w}),this.__state}}]),a=i=WelcomeView,i.$$events=[],i.$$componentPath="pages/welcome/welcome_view",r=a))||r;function WelcomeView(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WelcomeView);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=WelcomeView.__proto__||Object.getPrototypeOf(WelcomeView)).call.apply(e,[this].concat(r)))).$usedState=["$compid__0","$compid__1","$compid__2","$compid__3","username","password","dispatch","account"],o.config={},o.state={"username":"","password":""},o.handleLoginClick=function(){o.props.dispatch({"type":"account/login","payload":{"username":o.state.username,"password":o.state.password}}).then(function(){o.props.account.token?c.default.vibrateLong({"success":function success(){c.default.redirectTo({"url":"/pages/home/home_view"})}}):c.default.vibrateLong({"success":function success(){console.log("登录失败"),c.default.atMessage({"message":"网络错误，请稍后重试！","type":"error","duration":5e3})}})})},o.handleInputChange=function(e,t){o.setState(function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=o,e}({},e,t))},o.customComponents=["AtAvatar","AtForm","AtInput","AtButton"],_possibleConstructorReturn(o,t)}t.default=u,Component(o(1).default.createComponent(u,!0))},"694":function(e,t,o){}},[[693,0,1]]]);