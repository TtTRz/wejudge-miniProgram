import Taro from '@tarojs/redux'
import  * as course from '../../service/education/course'

export  default {
  namespace: 'course',
  state:{
    courselist:{}
  },

  effects: {

    * getDashboard({payload},{call, put, select}) {
      const req = yield call(course.getDashboard, payload);
      console.log("req",req);
      yield put({
        type: 'save',
        payload: {
          dashboard: req,
        }
      }),
        yield put({
          type: 'getCourseList',
          payload: {
            ids: req.data.courses.map((item) => item.id),
          }
        })
    },

    *getCourseList({payload},{call, put, select}){
      const req = yield  call(course.getCoursetList,payload);
      console.log("req",req);
      yield put({
        type:'save',
        payload:{
          courselist: req.data.courses
        }
      })
    },

    *getCourseMessage({payload},{call, put, select}){
      const req = yield  call(course.getCourseMessage,payload);
      console.log("req",req);
      yield put({
        type:'save',
        payload:{
          course: req.data
        }
      });
      return  req.data;
    }
  },

  reducers: {
    save(state,{payload}){
      return {...state, ...payload};
    }
  }

}

