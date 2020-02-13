import Request from '../../utils/request'
import  {API} from '../../constants/apis'
import {compile} from 'path-to-regexp';

//当前登陆用户的课堂列表
export  const getDashboard = (payload) =>{
  return Request({
    url:API.ACCOUNT.Dashboard,
    method:'get',
  })
};

//批量获取当前登陆用户课程
export  const getCoursetList = (payload) =>{
  console.log("getCourseList",payload.ids);
  const pattern = compile(API.COURSE.LIST);
  return Request({
    url:API.COURSE.LIST,
    method: 'post',
    data:{
      ids:payload.ids
    }
  })
};

//获取课程详细信息
export  const getCourseMessage = (payload) =>{
  const pattern = compile(API.COURSE.COURSE);
  return Request({
    url:pattern({cid:payload.courseId}),
    method: 'get',
    data:{
    }
  })
};

//获取课程公告
export  const getAnnouncementsList = (payload) =>{
    const pattern = compile(API.COURSE.ANNOUNCEMENTSLIST);
    console.log("service",payload);
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'get',
        data:{
            page:1,
            total:0,
            limit:99
        }
    })
};

//获取课程课堂列表
export  const getLessonList = (payload) =>{
    const pattern = compile(API.COURSE.LESSONLIST);
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'get',
        data:{}
    })
};

//获取课程讨论
export  const getDiscusses = (payload) =>{
    const pattern = compile(API.COURSE.DISUSSES);
    console.log("service",payload);
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'get',
        data:{}
    })
};




