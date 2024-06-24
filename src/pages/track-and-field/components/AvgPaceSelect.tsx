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
import { ChangeTimeType } from '../../../shared_types/types';

const AvgPaceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const { trackAvgPace, lapDistance, trackDistance } = state;

  const handleMins = (e: ChangeTimeType) => {
    const calculatableAvgPace = { ...trackAvgPace, mins: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const handleSecs = (e: ChangeTimeType) => {
    const calculatableAvgPace = { ...trackAvgPace, secs: e.target.value };
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
            value={trackAvgPace.mins}
            label="mins"
            onChange={handleMins as any} // MUI Select bug typization! Had to switch TS off here 
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
            value={trackAvgPace.secs}
            label="secs"
            onChange={handleSecs as any}  // MUI Select bug typization! Had to switch TS off here 
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
