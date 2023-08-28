import { useState } from "react";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";

const FinishTimeSelectGroup = () => {
  const HOURS_TO_PICK_FROM = [...Array(24).keys()]; // TODO: move to utils later
  const MINS_AND_SECS_TO_PICK_FROM = [...Array(60).keys()]; // TODO: move to utils later

  const [hours, setHours] = useState("");
  const handleHours = (e) => {
    setHours(e.target.value);
  };

  const [mins, setMins] = useState("");
  const handleMins = (e) => {
    setMins(e.target.value);
  };

  const [secs, setSecs] = useState("");
  const handleSecs = (e) => {
    setSecs(e.target.value);
  };

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
          value={hours}
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
          value={mins}
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
          value={secs}
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
    </>
  );
};

export default FinishTimeSelectGroup;
