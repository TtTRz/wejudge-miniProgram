import Taro from '@tarojs/redux'
import  * as school from '../../service/education/school'

export  default {
  namespace: 'school',
  state:{
    school:{}
  },

  effects: {

    *getSchool({payload},{call, put, select}){
      const req = yield  call(school.getSchool,payload);
      yield put({
        type:'save',
        payload:{
          school: req.data
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

