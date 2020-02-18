import Taro, { Component, Config } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import dva from './utils/dva'
import models from './models/index';
import { Provider } from '@tarojs/redux';
import './utils/zhcn_moment.js';
import './style/custom-variables.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initalState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/welcome/welcome_view',
      'pages/welcome/loading',
      'pages/home/home_view',
      'pages/education/course/course_view',
      'pages/education/lesson/lesson_view',
      'pages/education/lesson/lesson_edit_asgn',
      'pages/education/lesson/lesson_asgn',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'wejudge小程序',
      navigationBarTextStyle: 'black'
    },
    // 分包路径
    // subPackages: [{
    //   "root":'pages/home',
    //   "pages":[
    //       "home_view"
    //   ]
    // },
    //   {
    //     "root": "pages/education/",
    //     "pages": [
    //       "course/course_view",
    //       "lesson/lesson_view",
    //     ]
    //   },{
    //   "root":"components/education",
    //     "pages":[
    //         "course/course_announcements",
    //         "course/course_lesson",
    //         "lesson/lesson_homework",
    //         "lesson/lesson_video"
    //     ]
    //   }
    // ]
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {/*<Index />*/}
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
