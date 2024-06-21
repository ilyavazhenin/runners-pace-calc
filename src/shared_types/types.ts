import { IDistanceRunningState } from "../context/DistRunningContext.types";
import { ITrackAndFieldState } from "../context/TrackAndFieldContext.types";

export type generalState = IDistanceRunningState | ITrackAndFieldState;

export interface ITime {
  hrs: number;
  mins: number;
  secs: number;
  mss: number;
}
