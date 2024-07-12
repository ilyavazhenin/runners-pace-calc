import { ITime } from '../../shared-types/types';

export interface ITrackAndFieldState {
  laps: string[];
  lapDistance: number;
  pacePerLap: ITime;
  trackDistance: number;
  trackFinishTime: ITime;
  trackAvgPace: ITime;
}

export interface ILapsContext {
  state: ITrackAndFieldState;
  dispatch: React.Dispatch<TrackAndFieldActions>;
}

interface IGetLaps {
  type: 'GET_LAPS';
  payload: string[];
}

interface ISetLapDist {
  type: 'SET_LAP_DISTANCE';
  payload: number;
}

interface ISetPacePerLap {
  type: 'SET_PACE_PER_LAP';
  payload: ITime;
}

interface ISetFinishTime {
  type: 'SET_FINISH_TIME';
  payload: ITime;
}

interface ISetDist {
  type: 'SET_DISTANCE';
  payload: number;
}

interface ISetAvgPace {
  type: 'SET_AVGPACE';
  payload: ITime;
}

export type TrackAndFieldActions =
  | ISetAvgPace
  | ISetDist
  | ISetFinishTime
  | IGetLaps
  | ISetLapDist
  | ISetPacePerLap;
  