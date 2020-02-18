import Taro from '@tarojs/taro'
import { View, } from '@tarojs/components'
import {AtIcon, AtList, AtListItem, AtNavBar, AtTabs, AtTag} from "taro-ui";
import {connect} from '@tarojs/redux'
import { get } from 'lodash-es';
import moment from 'moment';
import './lesson_homework.scss'

const createMoment = (timestamp) => {
  return moment(timestamp * 1000).utcOffset(8);
};
const formatTimeFromNow = (timestamp) => {
  const dt = createMoment(timestamp);
  return dt.fromNow();
};

const nowTime = () => {
  return moment();
};

const getStautsByStartEndTime = (startTime, endTime, endOfDay = 0) => {
  const st = createMoment(startTime);
  const et = createMoment(endTime);
  const now = nowTime();
  const dst = now.diff(st, 'seconds');
  const det = now.diff(et, 'seconds');

  if (dst < 0) {      // now < start_time  => 未开始
    return {
      status: -1,
      diff: dst,
      desc: `未开始`,
    };
  } else if (dst >= 0 && det < 0) {
    const endOfDayDst = endOfDay * 24 * 60 * 60;
    if (endOfDay === 0 || (endOfDay > 0 &&  -endOfDayDst < det)) {
      return {
        status: 0,
        diff: 0 - det,
        desc: `即将结束`,
      };
    }
    return {
      status: 0,
        diff: 0 - det,
        desc: '正在进行中',
      };
    } else if (det >= 0) {
      return {
        status: 1,
        diff: det,
        desc: `已结束`,
      };
    }
    return {
      status: -1,
      desc: '未知',
    };
};
class LessonHWork extends Taro.PureComponent {
  config = {
  };

  static propTypes = {
  };

  static  defaultProps={

  };

  state ={
  };

  render() {
    const asgns =this.props.asgnList.asgns;
    return(
      <View className='homework-view'>
          {asgns.length!==0 ?
              <AtList>
                  {asgns.map((item,index) => {
            const status = item.status;
            const timeStatus = getStautsByStartEndTime(status.start_time, status.end_time);
            // const color = {
            //     '-1': '#1890ff',
            //     0: '#52c41a',
            //     1: '#f5222d',
            // };
            return (
              <View>
                <AtListItem
                  title={item.title}
                  note={formatTimeFromNow(item.create_time)}
                  extraText={timeStatus.desc}>

                </AtListItem>
               </View>
            )
          })}
              </AtList>:
            <View className='empty-content'>
                 <AtIcon value='edit' size='40'/>
                 <View className='empty-text'>没有作业哦！！</View>
            </View>
          }
      </View>
    )
  }
}


export default LessonHWork;
