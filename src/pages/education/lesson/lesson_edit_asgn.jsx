import Taro from '@tarojs/taro'
import { View,Video } from '@tarojs/components'
import {AtInput, AtButton, AtTextarea, AtForm, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
import './lesson_edit_asgn.scss'
import moment from 'moment';
import {Base64} from "js-base64";
import {connect} from "@tarojs/redux";

const mapStateToProps = (state,props) => {
  return {
  };
};

@connect(mapStateToProps)
class EditNote extends Taro.PureComponent {
  config = {
  };

  static propTypes = {
  };

  static  defaultProps={
  };

  state ={
    title:'',
    content:'',
  };

  componentWillMount() {
  };
  handleChange1 = (event) =>{
    this.setState({
      content: event.target.value
    })
  };
  handleChange2 =(value)=> {
    this.setState({
      title:value
    })
  };
  onSubmit (event) {
      console.log("event",this.$router);
      this.props.dispatch({
        type:'lesson/editNote',
        payload:{
          title:this.state.title,
          content:this.state.content,
          course_id:this.$router.params.cid,
          lesson_id:this.$router.params.lid,
        },
      }).then((id)=>{
        if(id){
          Taro.navigateBack({
            delta: 1 // 返回上一级页面。
          });
        }

    })
  }

  render() {
    return(
      <View className='note-edit-view'>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <View className='note-edit-title'>
            <AtInput
            name='title'
            title='标题'
            type='text'
            value={this.state.title}
            onChange={this.handleChange2.bind(this)}
            />
            </View>
          <View className='note-edit-textrea'>
            <AtTextarea
              value={this.state.content}
              onChange={this.handleChange1.bind(this)}
              maxLength={600}
              placeholder='记笔记...'
              height={400}
            />
          </View>
          <View className='note-edit-button'>
            <AtButton formType='submit' type='primary' >发表</AtButton>
          </View>
        </AtForm>
      </View>
    )
  }
}


export default EditNote;
