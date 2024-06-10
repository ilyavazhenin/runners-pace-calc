import { ITime } from "../shared_types/types";

declare enum EDistRunningActions {
  GetSplits = 'GET_SPLITS',
  SetFinishTime = 'SET_FINISH_TIME',
  SetDist = 'SET_DISTANCE',
  SetAvgPace = 'SET_AVGPACE',
}

export interface IDistanceRunningState {
  splits: string[];
  roadDistance: number;
  roadFinishTime: ITime;
  roadAvgPace: ITime;
}

interface IGetSplits {
  type: EDistRunningActions.GetSplits;
  payload: string[];
}

interface ISetFinishTime {
  type: EDistRunningActions.SetFinishTime;
  payload: ITime;
}

interface ISetDist {
  type: EDistRunningActions.SetDist;
  payload: number;
}

interface ISetAvgPace {
  type: EDistRunningActions.SetAvgPace;
  payload: ITime;
}

export type DistRunningActions = ISetAvgPace | ISetDist | ISetFinishTime | IGetSplits;
