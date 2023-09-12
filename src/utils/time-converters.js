const MS_IN_SEC = 1000;
const MS_IN_MIN = 60000;
const MS_IN_HR = 3600000;

const convertTimeToMs = (time) =>
  time.hrs * MS_IN_HR +
  time.mins * MS_IN_MIN +
  time.secs * MS_IN_SEC +
  time.mss;
const getTimeString = ({ hrs, mins, secs }) => {
  const hrsStr = hrs / 10 >= 1 ? `${hrs}` : `0${hrs}`;
  const minsStr = mins / 10 >= 1 ? `${mins}` : `0${mins}`;
  const secsStr = secs / 10 >= 1 ? `${secs}` : `0${secs}`;
  return `${hrsStr ?? ''}:${minsStr ?? ''}:${secsStr ?? ''}`;
};
const getPaceString = ({ mins, secs }) => {
  const minsStr = mins / 10 >= 1 ? `${mins}` : `0${mins}`;
  const secsStr = secs / 10 >= 1 ? `${secs}` : `0${secs}`;
  return `${minsStr}:${secsStr}`;
};

const convertTimeToObj = (timeInMs) => {
  const hrs = Math.floor(timeInMs / MS_IN_HR);
  const mins = Math.floor((timeInMs % MS_IN_HR) / MS_IN_MIN);
  const secs = Math.floor(((timeInMs % MS_IN_HR) % MS_IN_MIN) / MS_IN_SEC);
  const mss = Math.floor(timeInMs % 1000);

  return {
    hrs,
    mins,
    secs,
    mss,
  };
};

const calcPaceTime = (distInKm, timeObj) => {
  const timeInMs = convertTimeToMs(timeObj);
  const paceInMsPerKm = timeInMs / distInKm; // time, ms per km.
  return convertTimeToObj(paceInMsPerKm);
};

const calcFinishTime = (distance, pace) => {
  const finishTimeInMs = distance * convertTimeToMs(pace);
  const finishTime = convertTimeToObj(finishTimeInMs);
  return finishTime;
};

// for tests, gonna remove later
const checkTime = {
  hrs: 1,
  mins: 27,
  secs: 40,
  mss: 323,
};

const somePace = { hrs: 0, mins: 4, secs: 16, mss: 0 };

const parseTimeString = (timeString) => {
  const timeArray = timeString.split(':');
  if (timeArray.length === 2) {
    timeArray.unshift('0');
  }

  const time = {
    hrs: Number(timeArray[0]),
    mins: Number(timeArray[1]),
    secs: Number(timeArray[2]),
    mss: timeArray[3] ? Number(timeArray[3]) : 0,
  };

  return time;
};

const getEvenStringedSplitsArray = (pace, distance) => {
  const paceString = getPaceString(pace);
  const stringedArray = [];
  const arrayLengthByDistance = parseInt(distance);
  for (let i = 1; i <= arrayLengthByDistance; i += 1) {
    stringedArray.push(paceString);
  }
  if (distance % arrayLengthByDistance > 0) {
    const tail = distance - arrayLengthByDistance;
    const tailPaceInMs = convertTimeToMs(pace) * tail;
    const tailPace = convertTimeToObj(tailPaceInMs);
    stringedArray.push(getPaceString(tailPace));
  }
  return stringedArray;
};

const getSummaryTimesBySplit = (splitsArr) => {
  let sum = 0;
  const sumTimeBySplit = splitsArr.map((split) => {
    // convert to MS and back to string
    sum += convertTimeToMs(parseTimeString(split));
    return getTimeString(convertTimeToObj(sum));
  });

  return sumTimeBySplit;
};

// console.log(convertTimeToMs(checkTime), 'time to ms');
// console.log(convertTimeToObj(convertTimeToMs(checkTime)), 'time to obj');
// console.log(calcPaceTime(21.1, checkTime), 'pace');
// console.log(calcFinishTime(21.1, somePace), 'finish time');
// console.log(getTimeString(calcFinishTime(21.1, somePace)), 'time string');
// console.log(parseTimeString(getTimeString(calcFinishTime(21.1, somePace))), 'time from string');
// console.log(getEvenStringedSplitsArray(somePace, 21.1), 'stringed array of pace');

// const exampleArr = ['30:15', '30:15', '30:15', '30:15'];
// console.log(getSummaryTimesBySplit(exampleArr), 'ARR');

export {
  calcPaceTime,
  getEvenStringedSplitsArray,
  calcFinishTime,
  convertTimeToMs,
  parseTimeString,
  getTimeString,
  convertTimeToObj,
};
