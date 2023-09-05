import { useState } from "react";
import { InputLabel, MenuItem, Select, FormControl, Button } from "@mui/material";
import { calcFinishTime } from "../../../utils/time-converters";
import { SplitsContext } from "../../../Contexts";
import { useContext } from "react";

const AvgPaceSelect = () => {
  const { state, dispatch } = useContext(SplitsContext);
  const MINS_AND_SECS_TO_PICK_FROM = [...Array(60).keys()]; // TODO: move to utils later

  // const [avgPace, setAvgPace] = useState({ hrs: 0, mins: 0, secs: 0, mss: 0 });
  
  const handleMins = (e) => {
    const calculatableAvgPace = { ...state.avgPace, mins: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const handleSecs = (e) => {
    const calculatableAvgPace = { ...state.avgPace, secs: e.target.value };
    dispatch({ type: 'SET_AVGPACE', payload: calculatableAvgPace });
  };

  const getFinishTime = () => {
    const finishTime = calcFinishTime(state.distance, state.avgPace); //TODO: later - get the pace from global state!
    console.log(finishTime, '!!!!finishTime if avgpace!!!');
    return dispatch({ type: 'SET_FINISH_TIME', payload: finishTime });
  };


  return (
    <>

      <FormControl
        size="large"
        sx={{ m: 2, minWidth: 100 }}
      >
        <InputLabel id="mins-label">Минут</InputLabel>
        <Select
          labelId="mins-label"
          id="mins"
          value={state.avgPace.mins}
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
          value={state.avgPace.secs}
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
      <Button onClick={getFinishTime}>Count Finish Time!</Button>
    </>
  );
};

export default AvgPaceSelect;
