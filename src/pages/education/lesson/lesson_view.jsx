import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAvatar, AtIcon, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import VideoPlayer from '../../../components/education/lesson/lesson_video'
import './lesson_view.scss'
import Note from '../../../components/education/lesson/lesson_note'
import HomeWork from "../../../components/education/lesson/lesson_homework";

const mapStateToProps = (state,props) => {
  return {
    videos:state.lesson.videos,
    noteList:state.lesson.note,
    asgnList:state.lesson.asgn,
    isLoading:state.loading.models['lesson'],

  };
};

@connect(mapStateToProps)
class LessonView extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
  };

  state = {
    mode:'video',
  };

  constructor () {
    super(...arguments);
  }
  static propTypes = {
  };

  static defaultProps = {
  };


  componentWillMount() {
      const courseId = this.$router.params.cid;
      const lessonId= this.$router.params.lid;
      this.props.dispatch({
          type:'lesson/getLesson',
          payload:{
              courseId:courseId,
              lessonId:lessonId,
          }
      });
    this.props.dispatch({
        type:'lesson/getVideos',
        payload:{
            courseId:courseId,
            lessonId:lessonId,
        }
    });
    this.props.dispatch({
        type: 'lesson/getNoteList',
        payload: {
            courseId:courseId,
            lessonId:lessonId,
        }
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }


  render() {
    const tabList = [ { title: '作业' },{ title: '笔记'} ];
    return (
      <View className="lesson-view">
        {this.props.videos && <View className="lesson-video">
          <VideoPlayer
            lessonVideo={this.props.videos}
            lessonId={this.$router.params.lid}
          />
        </View> }
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0}>
                <HomeWork
                  asgnList={this.props.asgnList}
                />
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
                <Note
                NoteList={this.props.noteList.notes}
                courseId = {this.$router.params.cid}
                lessonId= {this.$router.params.lid}/>
            </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}


export default LessonView;
