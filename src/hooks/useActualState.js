export const useActualState = (inboundState) => {
  const stateFromSessionStorage = sessionStorage.getItem('state') ?? '{}';
  const actualState = {
    ...inboundState,
    ...JSON.parse(stateFromSessionStorage),
  };
  return actualState;
};
