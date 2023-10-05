import { createContext } from 'react';

export const SplitsContext = createContext(null);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_SPLITS':
      return { ...state, splits: payload };

    case 'SET_FINISH_TIME':
      return { ...state, finishTime: payload };

    case 'SET_DISTANCE':
      return { ...state, distance: payload };

    case 'SET_AVGPACE':
      return { ...state, avgPace: payload };

    default:
      throw new Error('smth went wrong in reducer');
  }
};

export const initialState = {
  splits: [],
  distance: 21.1,
  finishTime: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  avgPace: { hrs: 0, mins: 0, secs: 0, mss: 0 },
};

