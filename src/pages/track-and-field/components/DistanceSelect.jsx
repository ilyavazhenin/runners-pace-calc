import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { LapsContext } from '../../../TrackAndFieldContext';
import { useContext } from 'react';
import { TRACK_DISTANCES } from '../../../utils/constants';

const DistanceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const handleChange = (e) => {
    dispatch({ type: 'SET_DISTANCE', payload: e.target.value });
    dispatch({ type: 'GET_LAPS', payload: [] }); // kind of an extra reducer
  };

  return (
    <>
      <h4>Выбери дистанцию</h4>
      <FormControl size="large" sx={{ m: 2, maxWidth: 120 }}>
        <InputLabel id="distance-select">Дистанция</InputLabel>
        <Select
          labelId="distance-select-label"
          id="distance-select"
          value={state.distance}
          label="Distance"
          onChange={handleChange}
        >
          {TRACK_DISTANCES.map((dist) => (
            <MenuItem value={dist}>{dist} м</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DistanceSelect;
