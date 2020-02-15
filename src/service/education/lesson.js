import Request from '../../utils/request'
import  {API} from '../../constants/apis'
import {compile} from 'path-to-regexp';

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