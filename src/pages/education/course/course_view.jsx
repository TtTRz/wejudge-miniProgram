import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAvatar, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import { get } from 'lodash-es';
import moment from 'moment';
import './course_view.scss'
import Announcements from "../../../components/education/course/course_announcements";
import Lesson from "../../../components/education/course/course_lesson"
import ImageURL from "../../../asset/image/course_icon.jpg";
import {filterHTML,convertHtmlToText} from '../../../utils/filter'

const i18nNamespace =  'zh_CN';
const FORMAT_PATTERN = {
  zh_CN: {
    key: 'zh-cn',
    SHORT_TIME: 'HH:mm',
    LONG_TIME: 'HH:mm:ss',
    LONG_TIME_WITH_MS: 'HH:mm:ss.SSS',
    SHORT_DATE: 'MM-DD',
    LONG_DATE: 'YYYY-MM-DD',
    SHORT_DATETIME: 'MM-DD HH:mm',
    LONG_DATETIME: 'YYYY-MM-DD HH:mm:ss',
  },
};
 const createMoment = (timestamp) => {
  return moment(timestamp * 1000).utcOffset(8);
};

 const formatTime = (timestamp, key) => {
  const dt = createMoment(timestamp);

  return dt.format(get(FORMAT_PATTERN, `${i18nNamespace}.${key}`, ''));
};

const mapStateToProps = (state,props) => {
  return {
    course: state.course.course,
    extra:state.course.extra,
    school:state.school.school,
    teacher:state.account.message,
    announcements:state.course.announcements,
    isLoading:state.loading.models['courseView'],
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

  static  defaultProps={
    course:{},
    extra:{},
    school:{},
    teacher:{},
    announcementsList:{},
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
    this.props.dispatch({
      type:'course/getCourseExtra',
      payload:{
        courseId: this.$router.params.cid,
      }
    })

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
    const tabList = [{ title: '简介' }, { title: '课堂' }, { title: '公告' }];
    return(
        <View className='course-view'>
          <View className='course-header'>
            <View className='course-header-img'>
              <AtAvatar
                  size="small"
                  style="margin-top:10px"
                  image={ImageURL}
              />
            </View>
            <View className='course-header-content'>
              <View className='at-article__h1'>{this.props.course.name}</View>
              <View className='at-article__p'>{get(this.props.teacher,"data.realname")} · {get(this.props.school,"name")} </View>
            </View>
          </View>
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <View>
                <View className='course-content'>
                  <View className='at-article__h2'>开课时间：</View>
                  <View className='at-article__p'>{formatTime(this.props.course.create_time, 'LONG_DATETIME')} -- {formatTime(this.props.course.end_time, 'LONG_DATETIME')}</View>
                  <View className='at-article__h2'>课程介绍：</View>
                  <View className='at-article__p'> {convertHtmlToText(get(this.props.course,"description") )}</View>
                  <View className='at-article__h2'>教学计划：</View>
                  <View className='at-article__p'> {convertHtmlToText(get(this.props.extra,"teach_plan"))}</View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <Lesson
                  courseId={this.$router.params.cid}
              />
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View >
                <Announcements
                    courseId={this.$router.params.cid}
                />
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
    )
  }
}


export default CourseView;
