
export const API = {
    ACCOUNT: {
        REGISTER:'/wejudge/accounts/register',
        LOGIN:'/wejudge/accounts/login',
        ME:'/wejudge/accounts/me',
        Dashboard:'/wejudge/accounts/dashboard',
        CURD:'/wejudge/accounts/:aid', //获取某账户信息
    },
    COURSE: {
        LIST:'/education/courses/_mget',
        COURSE:'/education/courses/:cid',
        EXTRA:'/education/courses/:cid/extra',
        ANNOUNCEMENTSLIST:'/education/courses/:cid/announcements',
        LESSONLIST:'/education/courses/:cid/lessons/list',
        DISUSSES:'/education/courses/:cid/discusses/list',
        LESSON:{
            VIDEOS:'/education/courses/:cid/lessons/:lid/videos',
            ASGNLIST:'/education/courses/:cid/asgns/_mget'
        }
    },
    SCHOOL:{
      SCHOOL:'/education/schools/:sid'
    },
};


