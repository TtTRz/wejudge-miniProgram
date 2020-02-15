import Taro from '@tarojs/taro'
import { View,Video } from '@tarojs/components'
import {AtAvatar, AtNavBar, AtTabs, AtTabsPane} from "taro-ui";
import {connect} from '@tarojs/redux'
import { get } from 'lodash-es';
import moment from 'moment';

class VideoPlay extends Taro.PureComponent {
  config = {
  };

  static propTypes = {
  };

  static  defaultProps={
    pickcode:'',
    fileHash:''
  };

  state ={
  };


  componentWillMount() {
    console.log("video",this.props);

  };

  componentWillUnmount () {

  }
  componentDidShow () {
  }


  render() {
      // const pickcode = get(this.props.videos, 'token.pick_code', '');
      // const fileHash = get(this.props.videos, 'token.file_hash', '');
      //
      const videoUrl = 'https://resource.dev.wejudge.net/download/2d81f64b45659a500246b608dbf1406966c1daea'+'?pickcode=:'+'dba3e2514f3411eabdf10242ad25e808';
    console.log("99",this.props);
      return(
      <View className='video-view'>
        <Video
            src={videoUrl}
          />
      </View>
    )
  }
}


export default VideoPlay;
