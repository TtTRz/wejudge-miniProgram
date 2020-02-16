import {compile} from 'path-to-regexp';
import Request from '../utils/request'
import { API } from '../constants/apis'

export const login = (payload) => {
  // console.log("service",payload)
  return Request({
    url: API.ACCOUNT.LOGIN,
    method: 'post',
    data: {
      // username: "xj@a.com",
      // password: "12345678",
      username: payload.username,
      password: payload.password,
    },
  })
};

//me
export const accountMe = (payload) => (
  Request({
    url: API.ACCOUNT.ME,
    method: 'get',
  })
);

export const getAccount = (payload) => {
  const pattern = compile(API.ACCOUNT.CURD);
  return Request({
    url:pattern({aid:payload.aid}),
    method:'get',
  })
};
