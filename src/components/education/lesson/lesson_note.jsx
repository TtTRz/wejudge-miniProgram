import Taro from '@tarojs/taro'
import { View,Video } from '@tarojs/components'
import {AtAvatar, AtList, AtListItem, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import { get } from 'lodash-es';
import moment from 'moment';
const createMoment = (timestamp) => {
    return moment(timestamp * 1000).utcOffset(8);
};
const formatTimeFromNow = (timestamp) => {
    const dt = createMoment(timestamp);
    return dt.fromNow();
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

  render() {
      const notes =this.props.NoteList;
    return(
      <View className='note-view'>
          <AtList>
              {notes && notes.map((item,index) => {
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


export default LessonNote;
