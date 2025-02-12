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
import { LapsContext } from '../../../store/TrackAndFieldContext';
import { useContext } from 'react';
import { MINS_AND_SECS_TO_PICK_FROM } from '../../../utils/constants';
import { ChangeTimeType } from '../../../shared-types/types';

const AvgPaceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const { trackAvgPace, lapDistance, trackDistance } = state;

  const handleMins = (e: ChangeTimeType) => {
    const calculatableAvgPace = { ...trackAvgPace, mins: Number(e.target.value) };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const handleSecs = (e: ChangeTimeType) => {
    const calculatableAvgPace = { ...trackAvgPace, secs: Number(e.target.value) };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const getFinishTime = () => {
    const finishTime = calcFinishTimeTF(trackDistance, trackAvgPace);
    const laps = getPacePerLapArray(trackAvgPace, lapDistance, trackDistance);

    dispatch({ type: 'GET_LAPS', payload: laps });
    return dispatch({ type: 'SET_FINISH_TIME', payload: finishTime });
  };

  return (
    <>
      <h4>Выбери целевой темп на км</h4>
      <Stack direction={'row'}>
        <FormControl size="medium" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="mins-label">Минут</InputLabel>
          <Select
            labelId="mins-label"
            id="mins"
            value={String(trackAvgPace.mins)}
            label="mins"
            onChange={handleMins}
          >
            {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
              <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="medium" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="secs-label">Секунд</InputLabel>
          <Select
            labelId="secs-label"
            id="secs"
            value={String(trackAvgPace.secs)}
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
        Рассчитать время на круг и раскладку
      </Button>
    </>
  );
};

export default AvgPaceSelect;
