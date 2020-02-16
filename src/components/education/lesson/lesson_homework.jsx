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

    componentWillUnmount () {

    }
    componentDidShow () {

    }


    render() {
        const asgns =this.props.asgnList.asgns;
        return(
            <View className='homework-view'>
                <AtList>
                    {asgns && asgns.map((item,index) => {
                        return (
                            <AtListItem
                                title={item.title}
                                note={formatTimeFromNow(item.create_time)}
                                arrow='right'/>
                        )
                    })
                    }
                </AtList>
            </View>
        )
    }
}


export default LessonHWork;
