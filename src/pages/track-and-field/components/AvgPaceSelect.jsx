import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
  Stack,
} from '@mui/material';
import {
  calcFinishTimeTF,
  getPacePerLapArray,
  // calcPacePerLap,
} from '../../../utils/time-converters';
import { LapsContext } from '../../../context/TrackAndFieldContext';
import { useContext } from 'react';
import { MINS_AND_SECS_TO_PICK_FROM } from '../../../utils/constants';

const AvgPaceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);

  const handleMins = (e) => {
    const calculatableAvgPace = { ...state.avgPace, mins: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const handleSecs = (e) => {
    const calculatableAvgPace = { ...state.avgPace, secs: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const getFinishTime = () => {
    const finishTime = calcFinishTimeTF(state.distance, state.avgPace);
    const laps = getPacePerLapArray(
      state.avgPace,
      state.lapDistance,
      state.distance
    );

    dispatch({ type: 'GET_LAPS', payload: laps });
    return dispatch({ type: 'SET_FINISH_TIME', payload: finishTime });
  };

  return (
    <>
      <h4>Выбери целевой темп на км</h4>
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
        Рассчитать раскладку по кругам
      </Button>
    </>
  );
};

export default AvgPaceSelect;
