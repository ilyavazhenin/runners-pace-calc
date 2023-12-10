import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
  Stack,
} from '@mui/material';
import {
  calcFinishTime,
  getEvenStringedSplitsArray,
} from '../../../utils/time-converters';
import { SplitsContext } from '../../../context/DistRunningContext';
import { useContext } from 'react';
import { MINS_AND_SECS_TO_PICK_FROM } from '../../../utils/constants';

const AvgPaceSelect = () => {
  const { state, dispatch } = useContext(SplitsContext);

  const handleMins = (e) => {
    const calculatableAvgPace = { ...state.avgPace, mins: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const handleSecs = (e) => {
    const calculatableAvgPace = { ...state.avgPace, secs: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const getFinishTime = () => {
    const finishTime = calcFinishTime(state.distance, state.avgPace);
    const splits = getEvenStringedSplitsArray(state.avgPace, state.distance);
    dispatch({ type: 'GET_SPLITS', payload: splits });
    return dispatch({ type: 'SET_FINISH_TIME', payload: finishTime });
  };

  return (
    <>
      <h4>Или выбери целевой темп на км</h4>
      <Stack direction={'row'}>
        <FormControl size="large" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="mins-label">Минут</InputLabel>
          <Select
            labelId="mins-label"
            id="mins"
            value={state.avgPace.mins}
            label="mins"
            onChange={handleMins}
          >
            {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
              <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="large" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="secs-label">Секунд</InputLabel>
          <Select
            labelId="secs-label"
            id="secs"
            value={state.avgPace.secs}
            label="secs"
            onChange={handleSecs}
          >
            {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
              <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Button variant="contained" onClick={getFinishTime}>
        Рассчитать финишное время и раскладку
      </Button>
    </>
  );
};

export default AvgPaceSelect;
