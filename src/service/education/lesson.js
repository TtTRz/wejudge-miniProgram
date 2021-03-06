import Request from '../../utils/request'
import  {API} from '../../constants/apis'
import {compile} from 'path-to-regexp';

//获取课堂详细信息
export const getLesson = (payload) =>{
    const pattern = compile(API.COURSE.LESSON.LESSON);
    return Request({
        url:pattern({cid:payload.courseId,lid:payload.lessonId}),
        method: 'get',
    })
};

//获取课堂关联视频
export const getVideos = (payload) =>{
    const pattern = compile(API.COURSE.LESSON.VIDEOS);
    return Request({
        url:pattern({cid:payload.courseId,lid:payload.lessonId}),
        method: 'get',
        data:{
            download:1,
        }
    })
};

//获取笔记列表
export const getNoteList = (payload) =>{
    return Request({
        url:API.COURSE.LESSON.NOTEList,
        method: 'get',
        data:{
            course_id:payload.courseId,
            lesson_id:payload.lessonId,
        }
    })
};

//获取笔记详细信息
export const getNote = (payload) =>{
    return Request({
        url:API.COURSE.LESSON.NOTE,
        method: 'post',
        data:{
            ids:payload.ids
        }
    })
};
//编辑笔记详细信息
export const editNote = (payload) =>{
    return Request({
        url:API.COURSE.LESSON.EDITNOTE,
        method: 'post',
        data:{
            title:payload.title,
            content:payload.content,
        },
        params:{
            course_id:payload.course_id,
            lesson_id:payload.lesson_id,
        }
    })
};
//获取笔记详细信息
export const getNoteMessage = (payload) =>{
    const pattern = compile(API.COURSE.LESSON.NOTEMESSAGE);
    return Request({
        url:pattern({nid:payload.noteId}),
        method: 'get',
        data:{
            title:payload.title,
            content:payload.content,
        },
    })
};



//获取课堂作业
export const getAsgnList = (payload) =>{
    const pattern = compile(API.COURSE.LESSON.ASGNLIST);
    return Request({
        url:pattern({cid:payload.courseId}),
        method: 'post',
        data:{
            ids:payload.ids
        }
    })
};