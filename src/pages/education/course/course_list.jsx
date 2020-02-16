import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAvatar, AtIcon, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import ImageURL from "../../../asset/image/course_icon.jpg";
import  './course_list.scss'
import moment from "moment";

const MILLISECOND = 1000;

const defaultTimezoneOffset = 8;

 const nowTime = () => {
  return moment();
};

 const createMoment = (timestamp) => {
  return moment(timestamp * MILLISECOND).utcOffset(defaultTimezoneOffset);
};
 const diffTimeSeconds = (time1, time2 = undefined) => {
  if (!time2) {
    const now = nowTime();
    const dt = createMoment(time1);
    return now.diff(dt, 'seconds');
  }
  const now = createMoment(time1);
  const dt = createMoment(time2);
  return now.diff(dt, 'seconds');
};

const mapStateToProps = (state,props) => {
    return {
      courselist: state.course.courselist,
      isLoading:state.loading.models['course'],
      account:state.account.data,
    };
};

@connect(mapStateToProps)
class CourseView extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
  };

  state = {
    current:0,
    selector:['全部','正在进行','已结束'],
    selectorChecked:'全部',
  };

  static propTypes = {
  };

  static defaultProps = {
    courselist:{},
  };


  componentWillMount() {
    console.log("this.props",this.props);
    if(this.props.account.role !== 99) {
      this.props.dispatch({
        type: 'course/getDashboard',
        payload: {}
      })
    }
    else {
        this.props.dispatch({
          type:'course/getAllList',
          payload:{}
        })
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  //切换选择器
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  };
  navigateGoTo = id => {
    Taro.navigateTo({
      url:'/pages/education/course/course_view'+'?cid='+id,
    });
  };

  CourseList () {
    const {courselist} = this.props;
    const {selectorChecked} = this.state;
    return(
    <View className='courseList-view'>
      <View className='courseList-row'>
        {courselist.map((item, index) => {
          const dst = diffTimeSeconds(item.start_time);
          const det = diffTimeSeconds(item.end_time);
          if(selectorChecked === '全部'){
            return(
              <View className='courseList-item' onClick={() =>this.navigateGoTo(item.id)}>
                <AtAvatar
                  size="large"
                  style="margin-top:10px"
                  image={ImageURL}
                />
                <View className='courseList-content'>
                  <View className='courseList-title'>{item.name}</View>
                  <View className='courseList-description'>{item.description}</View>
                </View>
              </View>
            )
          }else if(selectorChecked === '已结束' && det >= 0){
            return(
              <View className='courseList-item' onClick={() =>this.navigateGoTo(item.id)}>
                <AtAvatar
                  size="large"
                  style="margin-top:10px"
                  image={ImageURL}
                />
                <View className='courseList-content'>
                  <View className='courseList-title'>{item.name}</View>
                  <View className='courseList-description'>{item.description}</View>
                </View>
              </View>
            )
          }
          else if(selectorChecked === '正在进行' && dst >= 0 && det < 0){
            return(
              <View className='courseList-item' onClick={() =>this.navigateGoTo(item.id)}>
                <AtAvatar
                  size="large"
                  style="margin-top:10px"
                  image={ImageURL}
                />
                <View className='courseList-content'>
                  <View className='courseList-title'>{item.name}</View>
                  <View className='courseList-description'>{item.description}</View>
                </View>
              </View>
            )
          }
        })}
      </View>
    </View>
    )};

  render() {

    const tabList = [{ title: '课堂' }, { title: '计划' } ];

    return (
      <View className="course-view">
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='background-color: #e8e9ea;' >

              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker' style='float:right ;font-size: 10px; color:#98999c;margin:3px'>
                  {this.state.selectorChecked}
                  <AtIcon value='chevron-down'></AtIcon>
                </View>
              </Picker>

              {this.CourseList()}
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View >标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}


export default CourseView;
