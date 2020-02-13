import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAccordion, AtList, AtListItem, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'


const mapStateToProps = (state,props) => {
    return {
        lesson: state.course.lessonList,
    };
};

@connect(mapStateToProps)
class CourseView extends Taro.PureComponent {
    config = {
        enablePullDownRefresh: true,
        navigationBarTitleText: '',

    };

    static propTypes = {
    };

    state ={
        current: 0,
        open:true,
    };


    componentWillMount() {
        this.props.dispatch({
            type:'course/getLessonList',
            payload:{
                courseId:this.props.courseId,
            }
        })
    };

    componentWillUnmount () {

    }
    componentDidShow () {

    }

    componentDidHide () { }

    render() {
        const {data} =this.props.lesson ;
        return(
            <View className='lesson-view'>
                {
                    data.map((items) => {
                        return (
                    <AtAccordion
                    open={this.state.open}
                    title={items.title}
                    >
                        <AtList hasBorder={false}>
                    {items.children.map((item) => {
                        console.log("item",item);
                        return (
                            <AtListItem title={item.title}/>

                        )
                    })
                    }
                        </AtList>
                    </AtAccordion>
                    )

                    })
                }
            </View>
        )
    }
}


export default CourseView;
