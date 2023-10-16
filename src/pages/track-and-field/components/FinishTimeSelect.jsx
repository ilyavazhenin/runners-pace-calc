import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
  Stack,
} from '@mui/material';
import {
  calcPaceTime,
  getPacePerLapArray,
  calcPacePerLap,
} from '../../../utils/time-converters';
import { LapsContext } from '../../../TrackAndFieldContext';
import { useContext } from 'react';

const FinishTimeSelectGroup = () => {
  const { state, dispatch } = useContext(LapsContext);
  const HOURS_TO_PICK_FROM = [...Array(24).keys()]; // TODO: move to utils later
  const MINS_AND_SECS_TO_PICK_FROM = [...Array(60).keys()]; // TODO: move to utils later

  // const [finishTime, setFinishTime] = useState({ hrs: 0, mins: 0, secs: 0, mss: 0 });

  const handleHours = (e) => {
    const calculatedFinishTime = { ...state.finishTime, hrs: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime }); //TODO: make one dispatch, not many
  };
  const handleMins = (e) => {
    const calculatedFinishTime = { ...state.finishTime, mins: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const handleSecs = (e) => {
    const calculatedFinishTime = { ...state.finishTime, secs: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const countLaps = () => {
    console.log(state.finishTime, 'finishTime in calculating');
    const pacePerLap = calcPacePerLap(state.avgPace, state.lapDistance); //TODO: GET THE DISTANCE FROM STATE!
    console.log(pacePerLap, 'pacePerLap');
    dispatch({ type: 'SET_PACE_PER_LAP', payload: pacePerLap });
    const laps = getPacePerLapArray(pacePerLap, state.lapDistance, state.distance);
    console.log(laps, 'COUNTED LAPS');
    return dispatch({ type: 'GET_LAPS', payload: laps });
  };

  console.log(state.finishTime, 'finishTime');
  return (
    <Stack direction={'row'}>
      <FormControl
        size="large"
        sx={{ m: 1, minWidth: 80 }}
      >
        <InputLabel id="hours-label">Часов</InputLabel>
        <Select
          labelId="hours-label"
          id="hours"
          value={state.finishTime.hrs}
          label="hours"
          onChange={handleHours}
        >
          {HOURS_TO_PICK_FROM.map((el) => (
            <MenuItem
              value={el}
              key={el}
            >{`${el}`}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="large" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="mins-label">Минут</InputLabel>
        <Select
          labelId="mins-label"
          id="mins"
          value={state.finishTime.mins}
          label="mins"
          onChange={handleMins}
        >
          {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
            <MenuItem
              value={el}
              key={el}
            >{`${el}`}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="large" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="secs-label">Секунд</InputLabel>
        <Select
          labelId="secs-label"
          id="secs"
          value={state.finishTime.secs}
          label="secs"
          onChange={handleSecs}
        >
          {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
            <MenuItem
              value={el}
              key={el}
            >{`${el}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={countLaps}>Посчитать темп на круг</Button>
    </Stack>
  ); //TODO: later - remove the click button from here to index
};

export default FinishTimeSelectGroup;