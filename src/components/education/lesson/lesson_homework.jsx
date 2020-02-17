import Taro from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtList, AtListItem, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
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

const nowTime = () => {
    return moment();
};
const formatTimeToNow = (timestamp) => {
    const dt = createMoment(timestamp);
    return dt.toNow();
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
            desc: `${formatTimeFromNow(startTime).replace(' ', '').replace('内', '后')}开始`,
        };
    } else if (dst >= 0 && det < 0) {
        const endOfDayDst = endOfDay * 24 * 60 * 60;
        if (endOfDay === 0 || (endOfDay > 0 &&  -endOfDayDst < det)) {
            return {
                status: 0,
                diff: 0 - det,
                desc: `${formatTimeFromNow(endTime).replace(' ', '').replace('内', '后')}结束`,
            };
        }
        return {
            status: 0,
            diff: 0 - det,
            desc: '行中',
        };
    } else if (det >= 0) {
        return {
            status: 1,
            diff: det,
            desc: `已结束${formatTimeToNow(endTime).replace(' ', '').replace('内', '')}`,
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


    componentWillMount() {


    };

    AsgnStatusTag = (status) => {
        console.log("status",status);
        if (status.role === 'manage') {
            const color = status.checked >= status.reports ? '#52c41a' : '#1890ff';
            return <View color={color}>{status.checked} / {status.reports} 批改</View>;
        }
        if (!status.permission) {
            return <View color="grey">无访问权限</View>;
        }
        console.log("perssion",status.permission);
        const timeStatus = getStautsByStartEndTime(status.start_time, status.end_time);
        const color = {
            '-1': '#1890ff',
            0: '#52c41a',
            1: '#f5222d',
        };
        console.log("des",timeStatus);
        return <View color={ timeStatus.status.grey }>{timeStatus.desc}</View>;
    };


    render() {
        const asgns =this.props.asgnList.asgns;
        return(
            <View className='homework-view'>
                <AtList>
                    {asgns && asgns.map((item,index) => {
                        // return (
                            {/*<View>*/}

                             {
                                 const status = item.status;
                                 console.log("status",status);
                                 const timeStatus = getStautsByStartEndTime(status.start_time, status.end_time);
                                 const color = {
                                 '-1': '#1890ff',
                                 0: '#52c41a',
                                 1: '#f5222d',
                             };
                                 console.log("des",timeStatus);
                                 return <View>{timeStatus.desc}</View>;
                             }
                            // </View>
                        // )
                    })
                    }
                </AtList>
            </View>
        )
    }
}


export default LessonHWork;
{/*<AtListItem*/}
{/*    title={item.title}*/}
{/*    note={formatTimeFromNow(item.create_time)}*/}
{/*    arrow='right'>*/}

{/*</AtListItem>*/}