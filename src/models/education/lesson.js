import Taro from '@tarojs/redux'
import  * as lesson from '../../service/education/lesson'

export  default {
  namespace: 'lesson',
  state: {
    lesson: {},
  },
  effects: {

    * getLesson({payload}, {call, put, select}) {
        const req = yield call(lesson.getLesson, payload);
        yield put({
          type: 'save',
          payload: {
            lesson: req.data,
          }
        });
        yield  put({
          type:'getAsgnList',
          payload:{
            courseId:req.data.course.id,
            ids:req.data.asgn,
          }
        });
        return req.data;
    },
    * getVideos({payload}, {call, put, select}) {
      try{

        const req = yield call(lesson.getVideos, payload);
        yield put({
          type: 'save',
          payload: {
            videos: req.data,
          }
        });
        return req.data;
      }catch (e) {
        yield put({
          type: 'save',
          payload: {
            videos: '',
          }
        });
      }
    },
    * getNoteList({payload}, {call, put, select}) {
      const req = yield call(lesson.getNoteList, payload);
      yield put({
        type: 'save',
        payload: {
          noteList: req.data,
        }
      });

      yield put({
        type:'getNote',
        payload:{
          ids:req.data.notes.map((item) => item.id),
        }
      });
      return req.data;
    },
    * getNote({payload}, {call, put, select}) {
      const req = yield call(lesson.getNote, payload);
      yield put({
        type: 'save',
        payload: {
          note: req.data,
        }
      });
    },
    * editNote({payload}, {call, put, select}) {
      const req = yield call(lesson.editNote, payload);
      yield put({
        type: 'save',
      });
      return req.data;
    },
    * getNoteMessage({payload}, {call, put, select}) {
      const req = yield call(lesson.getNoteMessage, payload);
      yield put({
        type: 'save',
        payload:{
          message:req.data
        }
      });
      return req.data;
    },

    * getAsgnList({payload}, {call, put, select}) {
      const req = yield call(lesson.getAsgnList, payload);
      yield put({
        type: 'save',
        payload: {
          asgn: req.data,
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