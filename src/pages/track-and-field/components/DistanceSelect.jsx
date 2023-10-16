import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { LapsContext } from '../../../TrackAndFieldContext';
import { useContext } from 'react';

const DistanceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const handleChange = (e) => {
    dispatch({type: 'SET_DISTANCE', payload: e.target.value});
    dispatch({type: 'GET_LAPS', payload: []}); // kind of an extra reducer
  };

  return (
    <FormControl
      size="large"
      sx={{ m: 2, maxWidth: 120 }}
    >
      <InputLabel id="demo-simple-select-label">Дистанция</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state.distance}
        label="Distance"
        onChange={handleChange}
      >
        <MenuItem value={400}>400 м</MenuItem>
        <MenuItem value={800}>800 м</MenuItem>
        <MenuItem value={1000}>1000 м</MenuItem>
        <MenuItem value={1600}>1600 м</MenuItem>
        <MenuItem value={2000}>2000 м</MenuItem>
        <MenuItem value={3000}>3000 м</MenuItem>
        <MenuItem value={5000}>5000 м</MenuItem>
        <MenuItem value={10000}>10000 м</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DistanceSelect;
