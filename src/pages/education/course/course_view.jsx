import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAvatar, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import './course_view.scss'
import Announcements from "../../../components/education/course/course_announcements";
import Lesson from "../../../components/education/course/course_lesson"
import Discusses from "../../../components/education/course/course_discusses"

const mapStateToProps = (state,props) => {
  return {
    course: state.course.course,
    school:state.school.school,
    teacher:state.account.message,
    announcements:state.course.announcements,
  };
};

@connect(mapStateToProps)
class CourseView extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '',

  };

  static propTypes = {
  };

  state ={
    current: 0,
    cid:57,
  };


  componentWillMount() {
    this.props.dispatch({
      type:'course/getCourseMessage',
      payload:{
        courseId:this.$router.params.cid,
      }
    }).then((res) => {
      this.props.dispatch({
        type: 'account/getAccount',
        payload: {
          aid: res.author.id,
        }
      });
      this.props.dispatch({
        type: 'school/getSchool',
        payload: {
          sid: res.school.id
        }
      });

    });

  };

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
    const tabList = [{ title: '公告' }, { title: '课堂' }, { title: '讨论' }];
    return(
        <View className='course-view'>
          <AtNavBar
              color='#000'
              title={this.props.course.name}
          />
          {/*<View className='course-content'>*/}
          {/*  <View className='at-article__h1'>{this.props.course.name}</View>*/}
          {/*  <View className='at-article__p'>{this.props.course.description}</View>*/}
          {/*  <View className='at-article__h3'>{this.props.teacher.data.realname}  {this.props.school.name}</View>*/}
          {/*</View>*/}
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <View>
                <Announcements
                  courseId={this.$router.params.cid}
                />
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <Lesson
                  courseId={this.$router.params.cid}
              />
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View>
                <Discusses
                  courseId={this.$router.params.cid}/>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
    )
  }
}


export default CourseView;
