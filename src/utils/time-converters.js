const MS_IN_SEC = 1000;
const MS_IN_MIN = 60000;
const MS_IN_HR = 3600000;

const convertTimeToMs = (time) => time.hrs * MS_IN_HR + time.mins * MS_IN_MIN + time.secs * MS_IN_SEC + time.mss;
const getTimeString = (time) => `${time.hrs ?? ''}:${time.mins ?? ''}:${time.secs ?? ''}:${time.mss ?? ''}`;

const convertTimeToObj = (timeInMs) => {
  const hrs = Math.floor(timeInMs / MS_IN_HR);
  const mins = Math.floor((timeInMs % MS_IN_HR) / MS_IN_MIN);
  const secs = Math.floor(((timeInMs % MS_IN_HR) % MS_IN_MIN) / MS_IN_SEC) 
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

console.log(convertTimeToMs(checkTime), 'time to ms');
console.log(convertTimeToObj(convertTimeToMs(checkTime)), 'time to obj');
console.log(calcPaceTime(21.1, checkTime), 'pace');
console.log(calcFinishTime(21.1, somePace), 'finish time');
console.log(getTimeString(calcFinishTime(21.1, somePace)), 'time string');
console.log(parseTimeString(getTimeString(calcFinishTime(21.1, somePace))), 'time from string');
