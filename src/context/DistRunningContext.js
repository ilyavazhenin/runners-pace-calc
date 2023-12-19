import { createContext } from 'react';

export const SplitsContext = createContext(null);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_SPLITS':
      sessionStorage.setItem('state', JSON.stringify({ ...state, splits: payload }));
      return { ...state, splits: payload };

    case 'SET_FINISH_TIME':
      sessionStorage.setItem('state', JSON.stringify({ ...state, finishTime: payload }))
      return { ...state, finishTime: payload };

    case 'SET_DISTANCE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, distance: payload }))
      return { ...state, distance: payload };

    case 'SET_AVGPACE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, avgPace: payload }))
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

