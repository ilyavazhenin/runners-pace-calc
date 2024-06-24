import { createContext } from 'react';
import {
  DistRunningActions,
  IDistanceRunningState,
  ISplitsContext,
} from './DistRunningContext.types';

export const SplitsContext = createContext<ISplitsContext>({} as ISplitsContext);

export const initialState: IDistanceRunningState = {
  splits: [],
  roadDistance: 21.1,
  roadFinishTime: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  roadAvgPace: { hrs: 0, mins: 0, secs: 0, mss: 0 },
};

export const reducer = (
  state: IDistanceRunningState,
  { type, payload }: DistRunningActions
): IDistanceRunningState => {
  switch (type) {
    case 'GET_SPLITS':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, splits: payload })
      );
      return { ...state, splits: payload };

    case 'SET_FINISH_TIME':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, roadFinishTime: payload })
      );
      return { ...state, roadFinishTime: payload };

    case 'SET_DISTANCE':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, roadDistance: payload })
      );
      return { ...state, roadDistance: payload };

    case 'SET_AVGPACE':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, roadAvgPace: payload })
      );
      return { ...state, roadAvgPace: payload };

    default:
      throw new Error('smth went wrong in reducer');
  }
};
