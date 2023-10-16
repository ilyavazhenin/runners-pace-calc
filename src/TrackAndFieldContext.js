import { createContext } from 'react';

export const LapsContext = createContext(null);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_LAPS':
      return { ...state, laps: payload };

    case 'SET_AVGPACE':
      return { ...state, avgPace: payload };

    case 'SET_FINISH_TIME':
      return { ...state, finishTime: payload };

    case 'SET_DISTANCE':
      return { ...state, distance: payload };

    case 'SET_LAP_DISTANCE':
      return { ...state, lapDistance: payload };

    case 'SET_PACE_PER_LAP':
        return { ...state, pacePerLap: payload };

    default:
      throw new Error('smth went wrong in reducer');
  }
};

export const initialState = {
  laps: [],
  distance: 1000,
  lapDistance: 200,
  pacePerLap: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  finishTime: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  avgPace: { hrs: 0, mins: 0, secs: 0, mss: 0 },
};

