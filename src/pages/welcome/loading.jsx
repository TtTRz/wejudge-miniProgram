import Taro from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
// import  'src/pages/home/welcome/welcome_view.scss'
import { AtButton  ,AtAvatar, AtForm ,AtInput} from 'taro-ui'
import {connect} from '@tarojs/redux'

class LoadingView extends Taro.PureComponent {
  config = {
  };
  state = {
    // loading: false,
    username:'',
    password:'',
  };
  static defaultProps = {
  };
  componentWillReceiveProps () {
  }

  componentWillUnmount () { }
  componentWillMount() {

  }

  componentDidShow () { }

  componentDidHide () { }

  render(){
    return (
      <Text> wejudge排队中</Text>
    )
  }
}

export default LoadingView;
