import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './account_view.scss'
import  {AtAvatar,AtList,AtListItem,AtGrid} from "taro-ui";
import AvatarUrl from '../../asset/image/a90eb197337beb1e34ffbe5637f578d9.jpeg'

function Role (n) {

  if(n === 99){
    return "系统管理员";
  }
  else if (n === 0){
    return "普通用户";
  }
  else if(n === 1){
    return "助教";
  }
  else if(n === 2){
    return "教师";
  }
  else if (n === 3)
  return "学校负责人";
}

// @connect(mapStateToProps,null)
class AccountView extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
  };
  state = {
    current:1,
  };
  static defaultProps = {
    accountMessage:{},
  };

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillUnmount () {

  }
  componentDidShow () {

  }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render() {

    const tabList = [{ title: '课程'},{title:'笔记' }];
    return (
      <View className='account'>
        <View className="account-header">
          {/*<View className="personal-name">小宝</View>*/}
          <View className='header-back'>
            <View className='header-top'>
            <AtAvatar
              circle
              size="normal"
              className='account-avator'
              image={AvatarUrl}
            />
            <View className='account-content'>
              <View className='account-nickname'>{this.props.accountMessage.nickname}</View>
              <View className='account-credit'>{Role(this.props.accountMessage.role)}</View>
              <View className='account-school'> 北京示范大学珠海分校</View>
            </View>
            </View>
            <View className="account-grid">
              <View className="account-item">
                <View className="account-num">{this.props.accountMessage.counter.courses_learned}</View>
                <View className="account-tittle">已学课程</View>
              </View>
              <View className="account-item">
                <View className="account-num">{this.props.accountMessage.counter.code_accepted} / {this.props.accountMessage.counter.code_visited}</View>
                <View className="account-tittle">代码通过数</View>
              </View>
              <View className="account-item">
                <View className="account-num">{this.props.accountMessage.counter.judge_status_accepted} / {this.props.accountMessage.counter.judge_status_submission}</View>
                <View className="account-tittle">提交评测</View>
              </View>
            </View>
          </View>
        </View>

        <View className="account-list">
          <AtList>
            <AtListItem title='做题记录' arrow='right' />
            <AtListItem title='关于我们' arrow='right' />
          </AtList>
        </View>
      </View>
    )
  }
}


export default AccountView;
