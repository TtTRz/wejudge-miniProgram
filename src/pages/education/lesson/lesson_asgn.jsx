import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import PropTypes from 'prop-types';
import { get } from 'lodash-es';
import {AtList, AtIcon,AtCard} from "taro-ui";
import moment from "moment";
import {convertHtmlToText} from '../../../utils/filter'

const createMoment = (timestamp) => {
    return moment(timestamp * 1000).utcOffset(8);
};
const formatTimeFromNow = (timestamp) => {
    const dt = createMoment(timestamp);
    return dt.fromNow();
};



const mapStateToProps = (state,props) => {
    return {
        asgn:state.lesson.message,
    };
};

@connect(mapStateToProps)
class LessonAsgn extends Taro.PureComponent {
    config = {
        enablePullDownRefresh: true,
    };

    static propTypes = {
    };

    static defaultProps ={
        course_announcements:{},
        announcementsList:{}
    };

    state = {
        current: 0,
    };


    componentWillMount() {
        console.log("nid",this.props);
        this.props.dispatch({
            type: 'lesson/getNoteMessage',
            payload: {
                noteId: this.$router.params.nid,
            }
        })
    };

    componentWillUnmount() {

    }

    componentDidShow() {

    }

    componentDidHide() {
    }



    render() {
        return (
            <View className='note-view'>
                <View className='note-card' style='margin-top:30px;'>
                    <AtCard
                        extra={formatTimeFromNow(get(this.props.asgn,'update_time'))}
                        title={get(this.prop.asgn,'title')}
                    >
                        {convertHtmlToText(get(this.props.asgn,'content'))}
                    </AtCard>
                </View>

                }
            </View>
        )
    }
}



export default LessonAsgn;
