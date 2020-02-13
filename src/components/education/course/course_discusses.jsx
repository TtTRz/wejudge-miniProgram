import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import PropTypes from 'prop-types';
import {AtList, AtListItem} from "taro-ui";
import moment from "moment";

const createMoment = (timestamp) => {
    return moment(timestamp * 1000).utcOffset(8);
};
const formatTimeFromNow = (timestamp) => {
    const dt = createMoment(timestamp);
    return dt.fromNow();
};


const mapStateToProps = (state,props) => {
    return {
        discusses:state.course.discusses,
    };
};

@connect(mapStateToProps)
class Announcements extends Taro.PureComponent {
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
        this.props.dispatch({
            type: 'course/getDiscusses',
            payload: {
                courseId: this.props.courseId,
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
<View>79fa</View>
        )
    }
}



export default Announcements;
