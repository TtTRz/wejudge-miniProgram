import moment from 'moment'

const MILLISECOND = 1000;
const DAY_OF_SECONDS = 24 * 60 * 60;

const i18nNamespace = window.WEJUDGE_I18N_NAME || 'zh_CN';
const defaultTimezoneOffset = 8;

const FORMAT_PATTERN = {
  zh_CN: {
    key: 'zh-cn',
    SHORT_TIME: 'HH:mm',
    LONG_TIME: 'HH:mm:ss',
    LONG_TIME_WITH_MS: 'HH:mm:ss.SSS',
    SHORT_DATE: 'MM-DD',
    LONG_DATE: 'YYYY-MM-DD',
    SHORT_DATETIME: 'MM-DD HH:mm',
    LONG_DATETIME: 'YYYY-MM-DD HH:mm:ss',
  },
};

moment.locale(get(FORMAT_PATTERN, `${i18nNamespace}.key`, 'en'));

export const nowTime = () => {
  return moment();
};

export const createMoment = (timestamp) => {
  return moment(timestamp * MILLISECOND).utcOffset(defaultTimezoneOffset);
};
export const formatTime = (timestamp, key) => {
  const dt = createMoment(timestamp);

  return dt.format(get(FORMAT_PATTERN, `${i18nNamespace}.${key}`, ''));
};

export const formatTimeFromNow = (timestamp) => {
  const dt = createMoment(timestamp);
  return dt.fromNow();
};
export const formatTimeToNow = (timestamp) => {
  const dt = createMoment(timestamp);
  return dt.toNow();
};

export const diffTimeSeconds = (time1, time2 = undefined) => {
  if (!time2) {
    const now = nowTime();
    const dt = createMoment(time1);
    return now.diff(dt, 'seconds');
  }
  const now = createMoment(time1);
  const dt = createMoment(time2);
  return now.diff(dt, 'seconds');
};

export const timeFromNow = (targetTime) => {
  let time = Math.floor(targetTime - moment().format('X'));
  let dayA = time % (24 * 3600);
  let hourA = dayA % 3600;
  let minuteA = hourA % 60;
  let day = Math.floor(time / ( 24 * 3600 ));
  let hour = Math.floor(dayA / 3600);
  let minute = Math.floor(hourA / 60);
  let second = Math.floor(minuteA);
  return {
    day,
    hour,
    minute,
    second,
  }
};
// 通过开始时间和结束时间戳，获取当前状态
export const getStautsByStartEndTime = (startTime, endTime, endOfDay = 0) => {
  const st = createMoment(startTime);
  const et = createMoment(endTime);
  const now = nowTime();
  const dst = now.diff(st, 'seconds');
  const det = now.diff(et, 'seconds');

  if (dst < 0) {      // now < start_time  => 未开始
    return {
      status: -1,
      diff: dst,
      desc: `${formatTimeFromNow(startTime).replace(' ', '').replace('内', '后')}开始`,
    };
  } else if (dst >= 0 && det < 0) {
    const endOfDayDst = endOfDay * DAY_OF_SECONDS;
    if (endOfDay === 0 || (endOfDay > 0 &&  -endOfDayDst < det)) {
      return {
        status: 0,
        diff: 0 - det,
        desc: `${formatTimeFromNow(endTime).replace(' ', '').replace('内', '后')}结束`,
      };
    }
    return {
      status: 0,
      diff: 0 - det,
      desc: '行中',
    };
  } else if (det >= 0) {
    return {
      status: 1,
      diff: det,
      desc: `已结束${formatTimeToNow(endTime).replace(' ', '').replace('内', '')}`,
    };
  }
  return {
    status: -1,
    desc: '未知',
  };
};