import Taro from '@tarojs/redux'
import  * as course from '../../service/education/school'

export  default {
  namespace: 'school',
  state:{
    school:{}
  },

  effects: {

    *getSchool({payload},{call, put, select}){
      const req = yield  call(school.getSchool,payload);
      console.log("req",req);
      yield put({
        type:'save',
        payload:{
          // school: req.data.course
        }
      })
    }
  },

  reducers: {
    save(state,{payload}){
      return {...state, ...payload};
    }
  }

}

