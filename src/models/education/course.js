import Taro from '@tarojs/redux'
import  * as course from '../../service/education/course'
import * as lesson from "../../service/education/lesson";

export  default {
  namespace: 'course',
  state:{
    courselist:{}
  },

  effects: {

    * getDashboard({payload}, {call, put, select}) {
      const req = yield call(course.getDashboard, payload);
      yield put({
        type: 'save',
        payload: {
          dashboard: req,
        }
      });
      yield put({
        type: 'getCourseList',
        payload: {
          ids: req.data.courses.map((item) => item.id),
        }
      })
    },

    * getCourseList({payload}, {call, put, select}) {
      const req = yield  call(course.getCoursetList, payload);
      yield put({
        type: 'save',
        payload: {
          courselist: req.data.courses
        }
      })
    },
    * getAllList({payload}, {call, put, select}) {
      const req = yield  call(course.getAllList, payload);
      yield put({
        type: 'save',
        payload: {
          courselist: req.data.courses
        }
      })
    },

    * getCourseMessage({payload}, {call, put, select}) {
      const req = yield  call(course.getCourseMessage, payload);
      yield put({
        type: 'save',
        payload: {
          course: req.data
        }
      });
      return req.data;
    },

    * getCourseExtra({payload}, {call, put, select}) {
      const req = yield  call(course.getCourseExtra, payload);
      yield put({
        type: 'save',
        payload: {
          extra: req.data
        }
      });
      return req.data;
    },

//获取课程公告
    * getAnnouncementsList({payload}, {call, put, select}) {
      const req = yield  call(course.getAnnouncementsList, payload);
      console.log("payload",payload);
      // yield put({
      //   type: 'save',
      //   payload: {
      //     announcementsList: req
      //   }
      // });
      yield  put ({
        type:'mgetAnnouncementsList',
        payload:{
          ids:req.data.course_announcements.map((item) => item.id),
          courseId:payload.courseId,
        },
      });
    },
    //批量课程公告
    * mgetAnnouncementsList({payload}, {call, put, select}) {
      const req = yield  call(course.mgetAnnouncementsList, payload);
      yield put({
        type: 'save',
        payload: {
          mannouncementsList: req.data
        }
      });
    },

    //获取课程课堂列表
    * getLessonList({payload}, {call, put, select}) {
      const req = yield  call(course.getLessonList, payload);
      yield put({
        type: 'save',
        payload: {
          lessonList: req
        }
      });
      return req;
    },

    //获取课程讨论
    * getDiscusses({payload}, {call, put, select}) {
      const req = yield  call(course.getDiscusses, payload);
      yield put({
        type: 'save',
        payload: {
          discusses: req.data
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

