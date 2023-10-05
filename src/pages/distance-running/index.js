import { useReducer } from 'react';
import { SplitsContext, reducer, initialState } from '../../DistRunningContext';
import AvgPaceSelect from './components/AvgPaceSelect';
import DistanceSelect from './components/DistanceSelect';
import FinishTimeSelectGroup from './components/FinishTimeSelect';
import SplitsList from './components/SplitsList';
import Stack from '@mui/material/Stack';

const DistanceRunningPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, 'STATE AFTER USE REDUCER');

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
