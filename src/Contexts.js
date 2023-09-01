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

    default:
      throw new Error('smth went wrong in reducer');
  }
};

export const initialState = {
  splits: [],
  distance: '',
  finishTime: '',
};

