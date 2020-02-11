import Taro from '@tarojs/taro';
import * as account from '../service/account'

export default {
  namespace: 'account',
  state: {
    token: '',
    dashboard: {},
  },

  effects: {
    //put 用于触发action
    //call 用于调用异步逻辑
    //select 用于从state里获取数据

    //登录
    * login({payload}, {call, put, select}) {
      //调用微信login接口
      try{
        const req = yield call(account.login, payload);
        //将登录id刷入store
        yield put({
          type: 'save',
          payload: {
            token: req.data.token
          }
        });
        Taro.setStorageSync('token',req.data.token);
        yield put({
          type: 'accountMe',
          payload: {token: req.data.token}
        })
      }catch (e) {
        Taro.showToast({
          title: "用户名或密码错误",
          icon: 'none',
        });
      }

    },

    * accountMe({payload}, {call, put, select}) {
      const req = yield call(account.accountMe, payload);
      const {data} = req;
      yield put({
        type: 'save',
        payload: {
          data:data,
        }
      })
    },

    * getAccount({payload},{call ,put ,select}){
      const req = yield call(account.getAccount,payload);
      const  {data} =req;
      console.log(req);
      yield put({
        type:'save',
        payload:{
          message:req
        }
      });
      return data;
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    accountMe(state, { payload }) {
      return { ...state, me: payload, auth: { logined: true, fetched: true } };
    },
  },
};
