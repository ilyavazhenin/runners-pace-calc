import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { SplitsContext } from '../../../context/DistRunningContext';
import { useContext } from 'react';
import { ROAD_DISTANCES } from '../../../utils/constants';

const DistanceSelect = () => {
  const { state, dispatch } = useContext(SplitsContext);
  const handleChange = (e) => {
    dispatch({ type: 'SET_DISTANCE', payload: e.target.value });
    dispatch({ type: 'GET_SPLITS', payload: [] }); // kind of an extra reducer
  };

  return (
    <>
      <h4>Выбери дистанцию</h4>
      <FormControl size="large" sx={{ m: 2, maxWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Дистанция</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.distance}
          label="Distance"
          onChange={handleChange}
        >
          {ROAD_DISTANCES.map((dist) => (
            <MenuItem key={dist} value={dist}>
              {dist} км
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DistanceSelect;
