import { IDistanceRunningState } from "../context/DistRunningContext.types";
import { ITrackAndFieldState } from "../context/TrackAndFieldContext.types";

type generalState = IDistanceRunningState | ITrackAndFieldState;

export const useActualState = (inboundState: generalState): generalState => {
  const stateFromSessionStorage = sessionStorage.getItem('state') ?? '{}';
  const actualState: generalState = {
    ...inboundState,
    ...JSON.parse(stateFromSessionStorage),
  };
  return actualState;
};
