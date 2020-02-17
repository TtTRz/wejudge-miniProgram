
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
        ALLLIST:'/education/courses',
        EXTRA:'/education/courses/:cid/extra',
        ANNOUNCEMENTSLIST:'/education/courses/:cid/announcements',
        MGETANNOUNCEMENTSLIST:'/education/courses/:cid/announcements/_mget',
        LESSONLIST:'/education/courses/:cid/lessons/list',
        DISUSSES:'/education/courses/:cid/discusses/list',
        LESSON:{
            LESSON:'/education/courses/:cid/lessons/:lid',
            VIDEOS:'/education/courses/:cid/lessons/:lid/videos',
            ASGNLIST:'/education/courses/:cid/asgns/_mget',
            NOTEList:'/education/notes/list',
            NOTE:'/education/notes/_mget',
        }
    },
    SCHOOL:{
      SCHOOL:'/education/schools/:sid'
    },
};


