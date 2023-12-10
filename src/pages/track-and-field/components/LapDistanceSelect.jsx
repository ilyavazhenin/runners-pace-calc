import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { LapsContext } from '../../../context/TrackAndFieldContext';
import { useContext } from 'react';

const LapDistanceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const handleChange = (e) => {
    dispatch({ type: 'SET_LAP_DISTANCE', payload: e.target.value });
    dispatch({ type: 'GET_LAPS', payload: [] }); // kind of an extra reducer
  };

  return (
    <>
      <h4>Выбери длину круга</h4>
      <FormControl size="large" sx={{ m: 2, maxWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Длина круга</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.lapDistance}
          label="Lap Distance"
          onChange={handleChange}
        >
          <MenuItem value={200}>200 м</MenuItem>
          <MenuItem value={400}>400 м</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default LapDistanceSelect;
