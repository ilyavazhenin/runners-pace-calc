import { ITime } from '../shared_types/types' 

export interface ITrackAndFieldState {
  laps: string[];
  trackDistance: number;
  lapDistance: number;
  pacePerLap: ITime;
  trackFinishTime: ITime;
  trackAvgPace: ITime;
}

declare enum ETrackAndFieldActions {
  GetLaps = 'GET_LAPS',
  SetFinishTime = 'SET_FINISH_TIME',
  SetDist = 'SET_DISTANCE',
  SetAvgPace = 'SET_AVGPACE',
  SetLapDist = 'SET_LAP_DISTANCE',
  SetPacePerLap = 'SET_PACE_PER_LAP',
}

export interface IDistanceRunningState {
  splits: string[];
  roadDistance: number;
  roadFinishTime: ITime;
  roadAvgPace: ITime;
}

interface IGetLaps {
  type: ETrackAndFieldActions.GetLaps;
  payload: string[];
}

interface ISetLapDist {
  type: ETrackAndFieldActions.SetLapDist;
  payload: number;
}

interface ISetPacePerLap {
  type: ETrackAndFieldActions.SetPacePerLap;
  payload: ITime;
}

interface ISetFinishTime {
  type: ETrackAndFieldActions.SetFinishTime;
  payload: ITime;
}

interface ISetDist {
  type: ETrackAndFieldActions.SetDist;
  payload: number;
}

interface ISetAvgPace {
  type: ETrackAndFieldActions.SetAvgPace;
  payload: ITime;
}

type TrackAndFieldActions =
  | ISetAvgPace
  | ISetDist
  | ISetFinishTime
  | IGetLaps
  | ISetLapDist
  | ISetPacePerLap;