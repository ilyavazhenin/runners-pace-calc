import { useReducer } from 'react';
import { LapsContext, reducer, initialState } from '../../TrackAndFieldContext';
import AvgPaceSelect from './components/AvgPaceSelect';
// import FinishTimeSelectGroup from './components/FinishTimeSelect';
import LapsList from './components/LapsList';
import Stack from '@mui/material/Stack';

const TrackAndFieldPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ m: 2, minWidth: 120, maxWidth: 300 }}
    >
      <LapsContext.Provider value={{ state, dispatch }}>
        <AvgPaceSelect />
        <LapsList />
      </LapsContext.Provider>
    </Stack>
  );
};

export default TrackAndFieldPage;
