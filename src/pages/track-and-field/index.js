import { useReducer } from 'react';
import {
  LapsContext,
  reducer,
  initialState,
} from '../../context/TrackAndFieldContext';
import AvgPaceSelect from './components/AvgPaceSelect';
// import FinishTimeSelectGroup from './components/FinishTimeSelect';
import LapsList from './components/LapsList';
import LapDistanceSelect from './components/LapDistanceSelect';
import Stack from '@mui/material/Stack';
import DistanceSelect from './components/DistanceSelect';

const TrackAndFieldPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ m: 2, minWidth: 120, maxWidth: 300 }}
    >
      <LapsContext.Provider value={{ state, dispatch }}>
        <DistanceSelect />
        <LapDistanceSelect />
        {/* <FinishTimeSelectGroup /> */}
        <AvgPaceSelect />
        <LapsList />
      </LapsContext.Provider>
    </Stack>
  );
};

export default TrackAndFieldPage;
