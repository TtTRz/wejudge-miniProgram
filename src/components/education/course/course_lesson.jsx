import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAccordion, AtList, AtListItem, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import { get } from 'lodash-es';


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
  static defaultProps ={
    lesson:{},
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

  handleLessonClick(id) {
      Taro.navigateTo({
          url:'/pages/education/lesson/lesson_view'+'?cid='+this.props.courseId+'&lid='+id,
      });
  }

  renderList = (data) => {
    return data.map((item, index) => {
      return (
          <View className="list-item">
            <AtAccordion
              open='true'
              title={item.title}
            >
              <AtList hasBorder={false}>
              {get(item, 'children', []).length !== 0 &&
                  this.renderSecondList(item.children, index)}
              </AtList>
            </AtAccordion>
          </View>
      );
    });
  };

  renderSecondList = (list, index) => {
    return list.map((item, ix) => {
      return (
          <View className="second-content">
            {item.is_group && get(item, 'children', []).length !== 0 ? <View>
              <AtAccordion
                open='true'
                title={item.title}
              >
                <AtList hasBorder={false}>{this.renderThirdList(item.children, index, ix)}</AtList>
              </AtAccordion>
            </View>: <AtListItem note={item.title} onClick={() => this.handleLessonClick(item.id)}/>}
          </View>
      );
    });
  };
  renderThirdList = (list, index, ix) => {
    return list.map((item, i) => {
      return (
            <View className="third-content" >
                <AtListItem note={item.title} onClick={() => this.handleLessonClick(item.id)}/>
          </View>
      );
    });
  };
  render() {
    const {data} = this.props.lesson ;
    return(
      <View className='lesson-view'>
        {this.renderList(data)}
      </View>
    )
  }
}


export default CourseView;
