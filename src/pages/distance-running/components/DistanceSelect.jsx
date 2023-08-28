import { useState } from "react";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";

const DistanceSelect = () => {

  const [distance, setDistance] = useState('');
  const handleChange = (e) => {
    setDistance(e.target.value);
  };

  return (
    <FormControl size="large" sx={{ m: 2, minWidth: 220 }}>
      <InputLabel id="demo-simple-select-label">Дистанция</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={distance}
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
