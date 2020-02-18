import Taro from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import {AtAccordion, AtList, AtListItem, AtIcon} from "taro-ui";
import {connect} from '@tarojs/redux'
import { get } from 'lodash-es';
import './course_lesson.scss'


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

  handleClick (value) {
    this.setState({
      open: value
    })
  }

  componentDidHide () { }

  handleLessonClick(item) {
    console.log("item",item);
      Taro.navigateTo({
          url:'/pages/education/lesson/lesson_view'+'?cid='+this.props.courseId+'&lid='+item.id,
      });
  }
  renderList = (data) => {
    return data.map((item, index) => {
      const {open} = this.state;
      return (
        <View className="list-item">
          <AtAccordion
            open={open}
            onClick={this.handleClick.bind(this)}
            title={item.title}
            icon={{ value: 'folder', size: '15' }}
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
      const {open} = this.state;
      return (
        <View className="second-content">
          {item.is_group && get(item, 'children', []).length !== 0 ? <View>
            <AtAccordion
              open={open}
              onClick={this.handleClick.bind(this)}
              title={item.title}
              icon={{ value: 'folder', size: '15' }}
            >
              <AtList hasBorder={false}>{this.renderThirdList(item.children, index, ix)}</AtList>
            </AtAccordion>
          </View>
          : <View>{item.video ?
            <AtListItem
              title={item.title}
              iconInfo={{size: 15, value: 'video',}}
              onClick={() => this.handleLessonClick(item)}/>:
          <AtListItem
              title={item.title}
              iconInfo={{size: 15, value: 'file-generic',}}
              onClick={() => this.handleLessonClick(item)}/>}
            </View>}
        </View>
      );
    });
  };
  renderThirdList = (list, index, ix) => {
    return list.map((item, i) => {
      return (
        <View className="third-content" >
          {item.video ?
            <AtListItem
              title={item.title}
              iconInfo={{size: 15, value: 'video',}}
              onClick={() => this.handleLessonClick(item)}/>:
            <AtListItem
              title={item.title}
              iconInfo={{size: 15, value: 'file-generic',}}
              onClick={() => this.handleLessonClick(item)}/>
          }
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
