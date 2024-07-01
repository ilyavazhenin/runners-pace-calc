import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { LapsContext } from '../../../context/TrackAndFieldContext';
import { useContext } from 'react';
import { TRACK_DISTANCES } from '../../../utils/constants';
import { ChangeTimeType } from '../../../shared_types/types';

const DistanceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const handleChange = (e: ChangeTimeType) => {
    dispatch({ type: 'SET_DISTANCE', payload: Number(e.target.value) });
    dispatch({ type: 'GET_LAPS', payload: [] });
  };

  return (
    <>
      <h4>Выбери дистанцию</h4>
      <FormControl size="medium" sx={{ m: 2, maxWidth: 120 }}>
        <InputLabel id="distance-select">Дистанция</InputLabel>
        <Select
          labelId="distance-select-label"
          id="distance-select"
          value={String(state.trackDistance)}
          label="Distance"
          onChange={handleChange}
        >
          {TRACK_DISTANCES.map((dist) => (
            <MenuItem key={dist} value={dist}>
              {dist} м
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DistanceSelect;
