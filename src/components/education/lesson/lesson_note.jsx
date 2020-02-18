import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import {AtAvatar, AtIcon, AtFab, AtButton, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
import {convertHtmlToText} from '../../../utils/filter'
import PATH from '../../../asset/image/course_icon.jpg'
import moment from 'moment';
import {Base64} from "js-base64";
import './lesson_note.scss'

const createMoment = (timestamp) => {
    return moment(timestamp * 1000).utcOffset(8);
};
const formatTimeFromNow = (timestamp) => {
    const dt = createMoment(timestamp);
    return dt.fromNow();
};

export const buildResourcePath = (vpath) => {
    if (!vpath) return null;
    const bpath = Base64.encode(vpath);
    const h = bpath.replace('/', '*');
    const p = h.replace('+', '-');
    return `/resource/${p}`;
};
class LessonNote extends Taro.PureComponent {
  config = {
  };

  static propTypes = {
  };

  static  defaultProps={
  };

  state ={
  };

  componentWillMount() {
  };

  BuildAvatarPath = (id) => {
    this.props.dispatch({
      type:'account/getAccount',
      payload:{
        aid:id,
      }
    }).then((res) =>{
      return buildResourcePath(res.data.avator);
    })
  };

  navigateGoTo = () => {
    Taro.navigateTo({
      url: '/pages/education/lesson/lesson_edit_asgn?cid='+this.props.courseId+'&lid='+this.props.lessonId,
    })
  };
    openNote = (id) =>{
        Taro.navigateTo({
            url: '/pages/education/lesson/lesson_asgn?nid='+id,
        })
    };

  render() {
    const notes =this.props.NoteList;
    return(
      <View className='note-view'>
        <View className='note-button'>
          <AtButton type='primary' size='normal' onClick={this.navigateGoTo}>
            <AtIcon value='edit'/>记笔记
          </AtButton>
        </View>
        {notes.length !== 0 ? notes.map((item,index) => {
        return (
          <View className="note-item" onClick={()=>this.openNote(item.id)}>
            <View className="note-header">
              <View className="note-title">
                {item.title}
              </View>
                <View className="note-updatetime">
                    {formatTimeFromNow(item.update_time)}
                </View>
            </View>
            <View className="note-content">
              {convertHtmlToText(item.content)}
            </View>
          </View>
        )
      }):
      <View className='empty-content'>
          <AtIcon value='edit'/>
          <View className='empty-text'>暂无笔记</View>
      </View>
      }

      </View>
    )
  }
}


export default LessonNote;
