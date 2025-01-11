import { useReducer } from 'react';
import {
  LapsContext,
  reducer,
  initialState,
} from '../../store/TrackAndFieldContext';
import AvgPaceSelect from './components/AvgPaceSelect';
import LapsList from './components/LapsList';
import LapDistanceSelect from './components/LapDistanceSelect';
import Stack from '@mui/material/Stack';
import DistanceSelect from './components/DistanceSelect';
import { useActualState } from '../../hooks/useActualState';

const TrackAndFieldPage = () => {
  const actualState = useActualState(initialState);
  const [state, dispatch] = useReducer(reducer, actualState);

  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ m: 2, minWidth: 120, maxWidth: 300 }}
    >
      <LapsContext.Provider value={{ state, dispatch }}>
        <DistanceSelect />
        <LapDistanceSelect />
        <AvgPaceSelect />
        <LapsList />
      </LapsContext.Provider>
    </Stack>
  );
};

export default TrackAndFieldPage;
