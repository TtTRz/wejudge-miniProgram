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

//获取全部课程列表
export  const getAllList = (payload) =>{
    return Request({
        url:API.COURSE.ALLLIST,
        method: 'get',
        data:{}
    })
};


//批量获取当前登陆用户课程
export  const getCoursetList = (payload) =>{
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

//获取课程额外信息
export  const getCourseExtra = (payload) =>{
    const pattern = compile(API.COURSE.EXTRA);
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
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'get',
        data:{
        }
    })
};

//批量获取课程公告
export  const mgetAnnouncementsList = (payload) =>{
    const pattern = compile(API.COURSE.MGETANNOUNCEMENTSLIST);
    console.log("payload",payload);
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'post',
        data:{
           ids:payload.ids,
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
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'get',
        data:{}
    })
};


