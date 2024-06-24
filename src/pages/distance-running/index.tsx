import { useReducer } from 'react';
import {
  SplitsContext,
  reducer,
  initialState,
} from '../../context/DistRunningContext';
import AvgPaceSelect from './components/AvgPaceSelect';
import DistanceSelect from './components/DistanceSelect';
import FinishTimeSelectGroup from './components/FinishTimeSelect';
import SplitsList from './components/SplitsList';
import Stack from '@mui/material/Stack';
import { useActualState } from '../../hooks/useActualState';
import { DistRunningActions, IDistanceRunningState } from '../../context/DistRunningContext.types';

const DistanceRunningPage = () => {
  const actualState = useActualState(initialState);
  const [state, dispatch] = useReducer(reducer as React.Reducer<IDistanceRunningState, DistRunningActions>, actualState);

  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ m: 2, minWidth: 120, maxWidth: 300 }}
    >
      <SplitsContext.Provider value={{ state, dispatch }}>
        <DistanceSelect />
        <FinishTimeSelectGroup />
        <AvgPaceSelect />
        <SplitsList />
      </SplitsContext.Provider>
    </Stack>
  );
};

export default DistanceRunningPage;
