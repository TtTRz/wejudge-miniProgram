import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAvatar, AtIcon, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import './course_view.scss'


const mapStateToProps = (state,props) => {
  console.log("state",state);
  return {
    course: state.school.course,
  };
};

@connect(mapStateToProps)
class CourseView extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: ''
  };

  static propTypes = {
  };

  state ={
    teacher:'',
  };


  componentWillMount() {
    this.props.dispatch({
      type:'course/getCourseMessage',
      payload:{
        courseId:this.$router.params.cid,
      }
    }).then((res) => {
      console.log("resCourse", res);
      this.props.dispatch({
        type: 'account/getAccount',
        payload: {
          aid: res.author.id,
        }
      }).then((res) => {
        console.log("resTeacher", res);
      })
    })
  };

  componentWillUnmount () {

  }
  componentDidShow () {

  }

  componentDidHide () { }


  render() {
    return (
        <View className='course-view'>
          <View className='course-content'>
            <View className='at-article__h1'>名称</View>
            <View className='at-article__p'>222</View>
            <View className='at-article__info'>teacher  school</View>
          </View>
        </View>
    )
  }
}


export default CourseView;
