import Taro from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
import { AtButton  ,AtAvatar, AtForm ,AtInput} from 'taro-ui'
import {connect} from '@tarojs/redux'
import './welcome_view.scss'
import AvatarUrl from '../../../src/asset/image/course_icon.jpg'
import LoadingView from "./loading";

const mapStateToProps = (state,props) => {
  const isLoading = state.loading.models['account'];
  return {
    account: state.account,
    isLoading
  };
};

@connect(mapStateToProps)
class WelcomeView extends Taro.PureComponent {
  config = {
  };
  state = {
    // loading: false,
    username:'',
    password:'',
  };
  static defaultProps = {
        courselist:{},
    };
  componentWillReceiveProps () {
  }

  componentWillUnmount () { }
  componentWillMount() {

  }

  componentDidShow () { }

  componentDidHide () { }

  handleLoginClick = () => {
     this.props.dispatch({
      type: 'account/login',
      payload: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(() => {
        if(this.props.account.token){
          Taro.vibrateLong({
            success: () => {
              Taro.redirectTo({
                url: '/pages/home/home_view',
              })
            }
          })
        }
        else{
          Taro.vibrateLong({
            success: () => {
              console.log('登录失败');
              Taro.atMessage({
                'message': '网络错误，请稍后重试！',
                'type': 'error',
                duration: 5000,
              })
            }
          })
        }
      })
    };

  handleInputChange = (keyName,value) => {
    // console.log(value);
    this.setState({
      [keyName]: value,
    })
  };

  render(){
    return (
      <View className='welcome-view'>
        <AtAvatar
          className='welcome-atavater'
          circle
          image={AvatarUrl}
          size='normal'
        />
        <View className='welcome-form'>
        <AtForm>
          <AtInput
            name='username'
            title='用户名:'
            type='text'
            placeholder='Email'
            value={this.state.username}
            onChange={this.handleInputChange.bind(this,'username')}
          />
          <AtInput
            name='password'
            title='密码:'
            type='password'
            placeholder='登陆密码'
            value={this.state.password}
            onChange={this.handleInputChange.bind(this,'password')}
          />

         </AtForm>
          <AtButton
            className='welcome-button'
            type='primary'
            circle
            size='normal'
            onClick={this.handleLoginClick}
          >
            登陆
          </AtButton>
        </View>

      </View>
    )
  }
}

export default WelcomeView;
