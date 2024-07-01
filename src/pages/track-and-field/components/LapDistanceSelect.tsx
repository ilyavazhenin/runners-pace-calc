import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { LapsContext } from '../../../context/TrackAndFieldContext';
import { useContext } from 'react';
import { ChangeTimeType } from '../../../shared_types/types';

const LapDistanceSelect = () => {
  const { state, dispatch } = useContext(LapsContext);
  const handleChange = (e: ChangeTimeType) => {
    dispatch({ type: 'SET_LAP_DISTANCE', payload: Number(e.target.value) });
    dispatch({ type: 'GET_LAPS', payload: [] });
  };

  return (
    <>
      <h4>Выбери длину круга</h4>
      <FormControl size="medium" sx={{ m: 2, maxWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Длина круга</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(state.lapDistance)}
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
