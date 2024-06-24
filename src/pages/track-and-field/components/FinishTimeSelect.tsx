import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
  Stack,
} from '@mui/material';
import {
  getPacePerLapArray,
  calcPacePerLap,
} from '../../../utils/time-converters';
import { LapsContext } from '../../../context/TrackAndFieldContext';
import { useContext } from 'react';
import {
  MINS_AND_SECS_TO_PICK_FROM,
  HOURS_TO_PICK_FROM,
} from '../../../utils/constants';
import { ChangeTimeType } from '../../../shared_types/types';

const FinishTimeSelectGroup = () => {
  const { state, dispatch } = useContext(LapsContext);
  const { trackFinishTime, trackAvgPace, lapDistance, trackDistance } = state;

  const handleHours = (e: ChangeTimeType) => {
    const calculatedFinishTime = { ...trackFinishTime, hrs: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime }); //TODO: make one dispatch, not many
  };
  const handleMins = (e: ChangeTimeType) => {
    const calculatedFinishTime = { ...trackFinishTime, mins: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const handleSecs = (e: ChangeTimeType) => {
    const calculatedFinishTime = { ...trackFinishTime, secs: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const countLaps = () => {
    const pacePerLap = calcPacePerLap(trackAvgPace, lapDistance);
    dispatch({ type: 'SET_PACE_PER_LAP', payload: pacePerLap });
    const laps = getPacePerLapArray(pacePerLap, lapDistance, trackDistance);
    return dispatch({ type: 'GET_LAPS', payload: laps });
  };

  return (
    <Stack direction={'row'}>
      <FormControl size="medium" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="hours-label">Часов</InputLabel>
        <Select
          labelId="hours-label"
          id="hours"
          value={trackFinishTime.hrs}
          label="hours"
          onChange={handleHours as any}  // MUI Select bug typization! Had to switch TS off here 
        >
          {HOURS_TO_PICK_FROM.map((el) => (
            <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="medium" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="mins-label">Минут</InputLabel>
        <Select
          labelId="mins-label"
          id="mins"
          value={trackFinishTime.mins}
          label="mins"
          onChange={handleMins as any}  // MUI Select bug typization! Had to switch TS off here 
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
          value={trackFinishTime.secs}
          label="secs"
          onChange={handleSecs as any}  // MUI Select bug typization! Had to switch TS off here 
        >
          {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
            <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={countLaps}>Посчитать темп на круг</Button>
    </Stack>
  ); //TODO: later - remove the click button from here to index
};

export default FinishTimeSelectGroup;
