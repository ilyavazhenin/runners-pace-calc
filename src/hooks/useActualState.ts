export const useActualState = <GeneralState>(inboundState: GeneralState): GeneralState => {
  const stateFromSessionStorage = sessionStorage.getItem('state') ?? '{}';
  const actualState: GeneralState = {
    ...inboundState,
    ...JSON.parse(stateFromSessionStorage),
  };
  return actualState;
};
