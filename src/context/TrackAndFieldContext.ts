import { createContext } from 'react';

import { ITrackAndFieldState, TrackAndFieldActions } from './TrackAndFieldContextTypes'

export const LapsContext = createContext(null);

export const reducer = (
  state: ITrackAndFieldState,
  { type, payload }: TrackAndFieldActions
): ITrackAndFieldState => {
  switch (type) {
    case 'GET_LAPS':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, laps: payload })
      );
      return { ...state, laps: payload };

    case 'SET_AVGPACE':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, trackAvgPace: payload })
      );
      return { ...state, trackAvgPace: payload };

    case 'SET_FINISH_TIME':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, trackFinishTime: payload })
      );
      return { ...state, trackFinishTime: payload };

    case 'SET_DISTANCE':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, trackDistance: payload })
      );
      return { ...state, trackDistance: payload };

    case 'SET_LAP_DISTANCE':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, lapDistance: payload })
      );
      return { ...state, lapDistance: payload };

    case 'SET_PACE_PER_LAP':
      sessionStorage.setItem(
        'state',
        JSON.stringify({ ...state, pacePerLap: payload })
      );
      return { ...state, pacePerLap: payload };

    default:
      throw new Error('smth went wrong in reducer');
  }
};

export const initialState: ITrackAndFieldState = {
  laps: [],
  trackDistance: 1000,
  lapDistance: 200,
  pacePerLap: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  trackFinishTime: { hrs: 0, mins: 0, secs: 0, mss: 0 },
  trackAvgPace: { hrs: 0, mins: 0, secs: 0, mss: 0 },
};
