import { ITime } from "../shared_types/types";

export interface IDistanceRunningState {
  splits: string[];
  roadDistance: number;
  roadFinishTime: ITime;
  roadAvgPace: ITime;
}

export interface ISplitsContext {
  state: IDistanceRunningState;
  dispatch: React.Dispatch<DistRunningActions>;
}

interface IGetSplits {
  type: 'GET_SPLITS';
  payload: string[];
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

export type DistRunningActions = ISetAvgPace | ISetDist | ISetFinishTime | IGetSplits;
