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
import { LapsContext } from '../../../store/TrackAndFieldContext';
import { useContext } from 'react';
import {
  MINS_AND_SECS_TO_PICK_FROM,
  HOURS_TO_PICK_FROM,
} from '../../../utils/constants';
import { ChangeTimeType } from '../../../shared-types/types';

const FinishTimeSelectGroup = () => {
  const { state, dispatch } = useContext(LapsContext);
  const { trackFinishTime, trackAvgPace, lapDistance, trackDistance } = state;

  const handleHours = (e: ChangeTimeType) => {
    const calculatedFinishTime = { ...trackFinishTime, hrs: Number(e.target.value) };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };
  const handleMins = (e: ChangeTimeType) => {
    const calculatedFinishTime = { ...trackFinishTime, mins: Number(e.target.value) };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const handleSecs = (e: ChangeTimeType) => {
    const calculatedFinishTime = { ...trackFinishTime, secs: Number(e.target.value) };
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
          value={String(trackFinishTime.hrs)}
          label="hours"
          onChange={handleHours}
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
          value={String(trackFinishTime.mins)}
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
          value={String(trackFinishTime.secs)}
          label="secs"
          onChange={handleSecs}
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
