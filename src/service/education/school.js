import Request from '../../utils/request'
import  {API} from '../../constants/apis'
import {compile} from 'path-to-regexp';

//获取课程详细信息
export  const getSchool = (payload) =>{

  const pattern = compile(API.SCHOOL.SCHOOL);
  return Request({
    url:pattern({sid:payload.schoolId}),
    method: 'get',
    data:{
    }
  })
};



