import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { SplitsContext } from '../../../context/DistRunningContext';
import { useContext } from 'react';
import { ROAD_DISTANCES } from '../../../utils/constants';

import { ChangeTimeType } from '../../../shared_types/types';

const DistanceSelect = () => {
  const { state, dispatch } = useContext(SplitsContext);
  const handleChange = (e: ChangeTimeType) => {
    dispatch({ type: 'SET_DISTANCE', payload: e.target.value});
    dispatch({ type: 'GET_SPLITS', payload: [] });
  };

  return (
    <>
      <h4>Выбери дистанцию</h4>
      <FormControl size="medium" sx={{ m: 2, maxWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Дистанция</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.roadDistance}
          label="Distance"
          onChange={handleChange as any} // MUI Select bug typization! Had to switch TS off here 
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
