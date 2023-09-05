import { useState } from "react";
import { InputLabel, MenuItem, Select, FormControl, Button } from "@mui/material";
import { calcPaceTime, getEvenStringedSplitsArray } from "../../../utils/time-converters";
import { SplitsContext } from "../../../Contexts";
import { useContext } from "react";

const FinishTimeSelectGroup = () => {
  const { state, dispatch } = useContext(SplitsContext);
  const HOURS_TO_PICK_FROM = [...Array(24).keys()]; // TODO: move to utils later
  const MINS_AND_SECS_TO_PICK_FROM = [...Array(60).keys()]; // TODO: move to utils later

  const [finishTime, setFinishTime] = useState({ hrs: 0, mins: 0, secs: 0, mss: 0 });
  
  const handleHours = (e) => {
    setFinishTime({...finishTime, hrs: e.target.value});
  };
  const handleMins = (e) => {
    setFinishTime({...finishTime, mins: e.target.value});
  };

  const handleSecs = (e) => {
    setFinishTime({...finishTime, secs: e.target.value});
  };

  const countSplits = () => {
    console.log(finishTime, 'finishTime in calculating');
    const avgPace = calcPaceTime(state.distance, finishTime); //TODO: GET THE DISTANCE FROM STATE!
    console.log(avgPace, 'avgPace');
    const splits = getEvenStringedSplitsArray(avgPace, state.distance);
    console.log(splits, 'COUNTED SPLITS');
    return dispatch({ type: 'GET_SPLITS', payload: splits });
  };

  console.log(finishTime, 'finishTime');
  return (
    <>
      <FormControl
        size="large"
        sx={{ m: 2, minWidth: 100 }}
      >
        <InputLabel id="hours-label">Часов</InputLabel>
        <Select
          labelId="hours-label"
          id="hours"
          value={finishTime.hrs}
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

      <FormControl
        size="large"
        sx={{ m: 2, minWidth: 100 }}
      >
        <InputLabel id="mins-label">Минут</InputLabel>
        <Select
          labelId="mins-label"
          id="mins"
          value={finishTime.mins}
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

      <FormControl
        size="large"
        sx={{ m: 2, minWidth: 100 }}
      >
        <InputLabel id="secs-label">Секунд</InputLabel>
        <Select
          labelId="secs-label"
          id="secs"
          value={finishTime.secs}
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
      <Button onClick={countSplits}>Count the pace!</Button>
    </>
  ); //TODO: later - remove the click button from here to index
};

export default FinishTimeSelectGroup;
