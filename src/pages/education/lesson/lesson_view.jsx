import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAvatar, AtIcon, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import VideoPlayer from '../../../components/education/lesson/lesson_video'
import { get } from 'lodash-es';
import LessonHome from "../../../components/education/lesson/lesson_homework";



const mapStateToProps = (state,props) => {
  return {
    videos:state.lesson.videos,
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

  static propTypes = {
  };

  static defaultProps = {
  };


  componentWillMount() {
    this.props.dispatch({
        type:'lesson/getVideos',
        payload:{
            courseId:this.$router.params.cid,
            lessonId:this.$router.params.lid,
        }
    }).then((res) =>{
        this.setState({
            video:res,
        })
    })
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

    const tabList = [{ title: '简介' }, { title: '作业' },{ title: '笔记'} ];
    return (
      <View className="course-view">
        {this.props.videos ?  <View className="lesson_video">
          <VideoPlayer
            lessonVideo={get(this.props, 'videos', null)}
            lessonId={this.$router.params.lid}
            pick_code={get(this.props,'videos.token.pick_code',null)}
            file_hash={get(this.props,'videos.token.file_hash',null)}
          />
        </View> : <View>本课堂暂无视频</View>}
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >简介</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
                <LessonHome/>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>笔记</View>
            </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}


export default LessonView;
