import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { SplitsContext } from '../../../Contexts';
import { useContext } from 'react';

const DistanceSelect = () => {
  const { state, dispatch } = useContext(SplitsContext);
  const handleChange = (e) => {
    return dispatch({type: 'SET_DISTANCE', payload: e.target.value});
  };

  return (
    <FormControl
      size="large"
      sx={{ m: 2, minWidth: 220 }}
    >
      <InputLabel id="demo-simple-select-label">Дистанция</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state.distance}
        label="Distance"
        onChange={handleChange}
      >
        <MenuItem value={5}>5 км</MenuItem>
        <MenuItem value={10}>10 км</MenuItem>
        <MenuItem value={21.1}>21,1 км</MenuItem>
        <MenuItem value={42.2}>42,2 км</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DistanceSelect;
