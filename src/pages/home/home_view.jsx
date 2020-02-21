import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Course from '../education/course/course_list'
import TarBar from '../../components/widgets/tarbar'
import Account from "../account/account_view";
import {connect} from "@tarojs/redux";
import './home_view.scss'


const mapStateToProps = (state,props) => {
  const isLoading = state.loading.models['account'];
  return {
    account: state.account,
    isLoading
  };
};

@connect(mapStateToProps)
class HomeView extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
  };

  state = {
    currentTab:0
  };


  constructor () {
    super(...arguments);
    this.state = {
      current: 0,
      currentTab:0
    }
  }
  static defaultProps = {
  };
  static propTypes = {
  };

  componentWillMount() {

  }

  componentDidHide () { }

  handleTabChange = (value) => {
    this.setState({
      currentTab: value,
    })
  };
  render() {
    console.log("state",this.state.currentTab);
    return (
      <View className='home-view' >
        <View className='home-content'>
          {this.state.currentTab === 0 && <View className="course-view" >
            <Course/>
          </View>
          }
          {this.state.currentTab === 1 && <View className="account-view">
            <Account
              accountMessage={this.props.account.data}/>
          </View>
          }
        </View>

        <TarBar
          current={this.state.currentTab}
          onClick={this.handleTabChange}
          onTabChange={this.handleTabChange}
          isLoading={this.props.isLoading}
        />
      </View>
    )
  }
}


export default HomeView;
