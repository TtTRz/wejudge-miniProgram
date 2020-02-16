import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import PropTypes from 'prop-types';
import {AtList, AtListItem} from "taro-ui";
import moment from "moment";

 const createMoment = (timestamp) => {
  return moment(timestamp * 1000).utcOffset(8);
};
 const formatTimeFromNow = (timestamp) => {
  const dt = createMoment(timestamp);
  return dt.fromNow();
};



const mapStateToProps = (state,props) => {
  return {
    announcementsList:state.course.announcementsList,
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
    const {course_announcements} =this.props.announcementsList.data;
    return (
      <View className='announcements-view'>
        <AtList>
          {course_announcements && course_announcements.map((item,index) => {
          return (
            <AtListItem
              title={item.title}
              note={formatTimeFromNow(item.update_time)}
              arrow='right'/>
          )
        })
        }
        </AtList>
      </View>
    )
  }
}



export default Announcements;
