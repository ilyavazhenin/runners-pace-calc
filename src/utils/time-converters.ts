import { ITime } from "../shared_types/types";
import { PartialTime } from "./time-converters.types";

const MS_IN_SEC = 1000;
const MS_IN_MIN = 60000;
const MS_IN_HR = 3600000;

const convertTimeToMs = (time: ITime) =>
  time.hrs * MS_IN_HR +
  time.mins * MS_IN_MIN +
  time.secs * MS_IN_SEC +
  time.mss;

const getTimeString = ({ hrs, mins, secs }: PartialTime) => {
  const hrsStr = hrs! / 10 >= 1 ? `${hrs}` : `0${hrs}`;
  const minsStr = mins! / 10 >= 1 ? `${mins}` : `0${mins}`;
  const secsStr = secs! / 10 >= 1 ? `${secs}` : `0${secs}`;
  return `${hrsStr ?? ''}:${minsStr ?? ''}:${secsStr ?? ''}`;
};
const getPaceString = ({ mins, secs }: PartialTime) => {
  const minsStr = mins! / 10 >= 1 ? `${mins}` : `0${mins}`;
  const secsStr = secs! / 10 >= 1 ? `${secs}` : `0${secs}`;
  return `${minsStr}:${secsStr}`;
};

const convertTimeToObj = (timeInMs: number) => {
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

const calcPaceTime = (distInKm: number, timeObj: ITime) => {
  const timeInMs = convertTimeToMs(timeObj);
  const paceInMsPerKm = timeInMs / distInKm; // time, ms per km.
  return convertTimeToObj(paceInMsPerKm);
};

const calcFinishTime = (distanceInKM: number, pace: ITime) => {
  const finishTimeInMs = distanceInKM * convertTimeToMs(pace);
  const finishTime = convertTimeToObj(finishTimeInMs);
  return finishTime;
};

const calcFinishTimeTF = (distanceInMeters: number, pace: ITime) => {
  const finishTimeInMs = (distanceInMeters / 1000) * convertTimeToMs(pace);
  const finishTime = convertTimeToObj(finishTimeInMs);
  return finishTime;
};

// for tests, gonna remove later:

// const checkTime = {
//   hrs: 1,
//   mins: 27,
//   secs: 40,
//   mss: 323,
// };

// const somePace = { hrs: 0, mins: 4, secs: 16, mss: 0 };

const parseTimeString = (timeString: string) => {
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

const getEvenStringedSplitsArray = (pace: ITime, distance: number) => {
  const paceString = getPaceString(pace);
  const stringedArray = [];
  const arrayLengthByDistance = parseInt(String(distance));
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

// deprecated func:

// const getSummaryTimesBySplit = (splitsArr) => {
//   let sum = 0;
//   const sumTimeBySplit = splitsArr.map((split) => {
//     // convert to MS and back to string
//     sum += convertTimeToMs(parseTimeString(split));
//     return getTimeString(convertTimeToObj(sum));
//   });

//   return sumTimeBySplit;
// };

const calcPacePerLap = (pace: ITime, lapLengthInMeters: number) => {
  const lapsPer1000m = lapLengthInMeters === 200 ? 5 : 2.5;
  const pacePerLap = convertTimeToMs(pace) / lapsPer1000m;
  return convertTimeToObj(pacePerLap);
};

const getPacePerLapArray = (pace: ITime, lapLengthInMeters: number, distanceInMeters: number) => {
  const pacePerLap = calcPacePerLap(pace, lapLengthInMeters);
  const pacePerLapString = getPaceString(pacePerLap);

  const lapsAmount = Math.floor(distanceInMeters / lapLengthInMeters);
  const pacesArray = [];

  for (let i = 1; i <= lapsAmount; i += 1) {
    pacesArray.push(pacePerLapString);
  }

  const isThereLastHalfLap =
    distanceInMeters % lapLengthInMeters > 0 ? true : false;
  
  if (isThereLastHalfLap) {
    const pacePerLapInMs = convertTimeToMs(pacePerLap);
    const halfLapPaceInMs = Math.floor(pacePerLapInMs / 2);
    const halfLapPace = convertTimeToObj(halfLapPaceInMs);
    const halfLapPaceString = getPaceString(halfLapPace);
    pacesArray.push(halfLapPaceString);
  }

  return pacesArray;
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
// console.log(calcPacePerLap(somePace, 200));
// console.log(getPaceString(calcPacePerLap(somePace, 200)));
// console.log('arrays:');
// console.log(getPacePerLapArray(somePace, 200, 2000));
// console.log(getPacePerLapArray(somePace, 400, 3000));

export {
  calcPaceTime,
  getEvenStringedSplitsArray,
  calcFinishTime,
  convertTimeToMs,
  parseTimeString,
  getTimeString,
  convertTimeToObj,
  getPacePerLapArray,
  calcPacePerLap,
  calcFinishTimeTF,
};
