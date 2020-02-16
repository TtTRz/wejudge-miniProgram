import Taro,{useState} from '@tarojs/taro'
import { View,Video } from '@tarojs/components'
import {connect} from "@tarojs/redux";
import { get } from 'lodash-es';

const mapStateToProps = (state,props) => {
  return {
    videos:state.lesson.videos,
  };
};
@connect(mapStateToProps)
class VideoPlay extends Taro.PureComponent {
  config = {
    enablePullDownRefresh: true,
  };

  static propTypes = {
  };

  static  defaultProps={
    pickcode:'',
    fileHash:'',
    lessonVideo:{},
  };

  state ={
  };

  constructor () {
    super(...arguments);
  }

  render() {
    const [videoUrl, setVideoUrl] = useState('');
    if(this.props.videos){
      const pickcode = get(this.props.videos,'token.pick_code',null);
      const fileHash = get(this.props.videos,'token.file_hash',null);
      setVideoUrl(`https://resource.dev.wejudge.net/download/${fileHash}?pickcode=${pickcode}`);
    }
      return(
      <View className='video-view'>
        <Video
            src={videoUrl}
            width="100%"
            height="100%"
          />
      </View>
    )
  }
}


export default VideoPlay;
