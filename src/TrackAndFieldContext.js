import { createContext } from 'react';

export const LapsContext = createContext(null);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_LAPS':
      return { ...state, splits: payload };

    case 'SET_AVGPACE':
      return { ...state, avgPace: payload };

    default:
      throw new Error('smth went wrong in reducer');
  }
};

export const initialState = {
  laps: [],
  distance: 1000,
  avgPace: { hrs: 0, mins: 0, secs: 0, mss: 0 },
};

