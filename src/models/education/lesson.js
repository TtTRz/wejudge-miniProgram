import Taro from '@tarojs/redux'
import  * as lesson from '../../service/education/lesson'

export  default {
  namespace: 'lesson',
  state: {
    lesson: {},
      videos:{},
  },
  effects: {

    * getVideos({payload}, {call, put, select}) {
        const req = yield call(lesson.getVideos, payload);
        yield put({
          type: 'save',
          payload: {
            videos: req.data,
          }
        });
        return req.data;

    },
  },



    reducers: {
      save(state,{payload}){
        return {...state, ...payload};
      }
    }
}