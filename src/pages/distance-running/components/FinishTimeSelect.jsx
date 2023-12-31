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
  getEvenStringedSplitsArray,
} from '../../../utils/time-converters';
import { SplitsContext } from '../../../context/DistRunningContext';
import { useContext } from 'react';
import {
  MINS_AND_SECS_TO_PICK_FROM,
  HOURS_TO_PICK_FROM,
} from '../../../utils/constants';

const FinishTimeSelectGroup = () => {
  const { state, dispatch } = useContext(SplitsContext);
  const { roadFinishTime, roadDistance } = state;

  const handleHours = (e) => {
    const calculatedFinishTime = { ...roadFinishTime, hrs: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };
  const handleMins = (e) => {
    const calculatedFinishTime = { ...roadFinishTime, mins: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const handleSecs = (e) => {
    const calculatedFinishTime = { ...roadFinishTime, secs: e.target.value };
    dispatch({ type: 'SET_FINISH_TIME', payload: calculatedFinishTime });
  };

  const countSplits = () => {
    const avgPace = calcPaceTime(roadDistance, roadFinishTime);
    dispatch({ type: 'SET_AVGPACE', payload: avgPace });
    const splits = getEvenStringedSplitsArray(avgPace, roadDistance);
    return dispatch({ type: 'GET_SPLITS', payload: splits });
  };

  return (
    <>
      <h4>Выбери финишное время</h4>
      <Stack direction={'row'}>
        <FormControl size="large" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="hours-label">Часов</InputLabel>
          <Select
            labelId="hours-label"
            id="hours"
            value={roadFinishTime.hrs}
            label="hours"
            onChange={handleHours}
          >
            {HOURS_TO_PICK_FROM.map((el) => (
              <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="large" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="mins-label">Минут</InputLabel>
          <Select
            labelId="mins-label"
            id="mins"
            value={roadFinishTime.mins}
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
            value={roadFinishTime.secs}
            label="secs"
            onChange={handleSecs}
          >
            {MINS_AND_SECS_TO_PICK_FROM.map((el) => (
              <MenuItem value={el} key={el}>{`${el}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Button variant="contained" onClick={countSplits}>
        Расчитать средний темп и раскладку
      </Button>
    </>
  ); //TODO: later - remove the click button from here to index
};

export default FinishTimeSelectGroup;
