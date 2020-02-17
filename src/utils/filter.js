
//正则过滤html标签
export const filterHTML = (content, strict = false) => {
    let msg = (content || '').replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
    if (strict) {
        msg = msg.replace(/[|]*\n/, '');       //去除行尾空格
        msg = msg.replace(/&npsp;/ig, '');      //去掉npsp
    }
    return msg;
};
export const convertHtmlToText = (inputText) =>{
    var returnText = "" + inputText;
    returnText = returnText.replace('#!/system/markdown', '');
    returnText = returnText.replace(/<\/div>/ig, '\r\n');
    returnText = returnText.replace(/<\/li>/ig, '\r\n');
    returnText = returnText.replace(/<li>/ig, '  *  ');
    returnText = returnText.replace(/<\/ul>/ig, '\r\n');
    //-- remove BR tags and replace them with line break
    returnText = returnText.replace(/<br\s*[\/]?>/gi, "\r\n");

    //-- remove P and A tags but preserve what's inside of them
    returnText=returnText.replace(/<p.*?>/gi, "\r\n");
    returnText=returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

    //-- remove all inside SCRIPT and STYLE tags
    returnText=returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
    returnText=returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
    //-- remove all else
    returnText=returnText.replace(/<(?:.|\s)*?>/g, "");

    //-- get rid of more than 2 multiple line breaks:
    returnText=returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\r\n\r\n");

    //-- get rid of more than 2 spaces:
    returnText = returnText.replace(/ +(?= )/g,'');

    //-- get rid of html-encoded characters:
    returnText=returnText.replace(/ /gi," ");
    returnText=returnText.replace(/&/gi,"&");
    returnText=returnText.replace(/"/gi,'"');
    returnText=returnText.replace(/</gi,'<');
    returnText=returnText.replace(/>/gi,'>');

    return returnText;
};