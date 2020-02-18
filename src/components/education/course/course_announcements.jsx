import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import PropTypes from 'prop-types';
import {AtList, AtIcon,AtCard} from "taro-ui";
import moment from "moment";
import {convertHtmlToText} from '../../../utils/filter'
import "./course_announcements.scss"
import '../../../style/empty.scss'

 const createMoment = (timestamp) => {
  return moment(timestamp * 1000).utcOffset(8);
};
 const formatTimeFromNow = (timestamp) => {
  const dt = createMoment(timestamp);
  return dt.fromNow();
};



const mapStateToProps = (state,props) => {
  return {
    announcements:state.course.mannouncementsList,
  };
};

@connect(mapStateToProps)
class Announcements extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
  };

  static propTypes = {
  };

  static defaultProps ={
    course_announcements:{},
    announcementsList:{}
  };

  state = {
    current: 0,
  };


  componentWillMount() {
    this.props.dispatch({
      type: 'course/getAnnouncementsList',
      payload: {
        courseId: this.props.courseId,
      }
    })
  };

  componentWillUnmount() {

  }

  componentDidShow() {

  }

  componentDidHide() {
  }



  render() {
    const {course_announcements} =this.props.announcements;
    return (
      <View className='announce-view'>
        {course_announcements.length!== 0 ? course_announcements.map((item,index) => {
          return (
              <View className='announce-card'>
              <AtCard
                  // note=  {item.content}
                  extra={formatTimeFromNow(item.update_time)}
                  title={item.title}
              >
                {convertHtmlToText(item.content)}
              </AtCard>
              </View>
          )
        }):
        <View className='empty-content'>
          <AtIcon value='message' size='40'/>
          <View className='empty-text'>暂无公告</View>
        </View>
        }
      </View>
    )
  }
}



export default Announcements;
