import { createContext } from 'react';

export const SplitsContext: any = createContext(null);

export const reducer = (state: object, { type, payload }: { type: string, payload: unknown}) => {
  switch (type) {
    case 'GET_SPLITS':
      sessionStorage.setItem('state', JSON.stringify({ ...state, splits: payload }));
      return { ...state, splits: payload };

    case 'SET_FINISH_TIME':
      sessionStorage.setItem('state', JSON.stringify({ ...state, roadFinishTime: payload }))
      return { ...state, roadFinishTime: payload };

    case 'SET_DISTANCE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, roadDistance: payload }))
      return { ...state, roadDistance: payload };

    case 'SET_AVGPACE':
      sessionStorage.setItem('state', JSON.stringify({ ...state, roadAvgPace: payload }))
      return { ...state, roadAvgPace: payload };

    default:
      throw new Error('smth went wrong in reducer');
  }
};

interface ITime {
  hrs: number;
  mins: number;
  secs: number;
  mss: number;
}

interface IDistanceRunningState {
  splits: string[];
  roadDistance: number;
  roadFinishTime: ITime;
  roadAvgPace: ITime;
}

export const initialState: IDistanceRunningState = {
  splits: [],
  roadDistance: 21.1,
  roadFinishTime: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  roadAvgPace: { hrs: 0, mins: 0, secs: 0, mss: 0 },
};
