import { createContext } from 'react';

export const LapsContext = createContext(null);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_LAPS':
      sessionStorage.setItem('state', JSON.stringify({ ...state, laps: payload }));
      return { ...state, laps: payload };

    case 'SET_AVGPACE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, avgPace: payload }));
      return { ...state, avgPace: payload };

    case 'SET_FINISH_TIME':
      sessionStorage.setItem('state', JSON.stringify({ ...state, finishTime: payload }));
      return { ...state, finishTime: payload };

    case 'SET_DISTANCE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, distance: payload }));
      return { ...state, distance: payload };

    case 'SET_LAP_DISTANCE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, lapDistance: payload }));
      return { ...state, lapDistance: payload };

    case 'SET_PACE_PER_LAP':
      sessionStorage.setItem('state', JSON.stringify({ ...state, pacePerLap: payload }));
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

