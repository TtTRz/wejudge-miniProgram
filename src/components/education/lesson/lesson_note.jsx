import Taro from '@tarojs/taro'
import { View,Video } from '@tarojs/components'
import {AtAvatar, AtList, AtListItem, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
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

  render() {
      const notes =this.props.NoteList;
    return(
      <View className='note-view'>
          {notes && notes.map((item,index) => {
            return (
              <View className="note-item">
                <View className="note-header">
                    <View className='note-avatar'>
                  <AtAvatar
                    circle
                    size="small"
                    image={()=>this.BuildAvatarPath(item.student_info.id)}
                  />
                  <View className="note-title">
                    {item.title}
                  </View>
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
          })
          }
      </View>
    )
  }
}


export default LessonNote;
