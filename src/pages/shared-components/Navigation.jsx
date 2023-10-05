import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RouteIcon from '@mui/icons-material/Route';
import SegmentIcon from '@mui/icons-material/Segment';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [value, setValue] = useState('/distancerun');
  console.log(value);
  const navigate = useNavigate();
  
  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: 500}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(`${newValue}`);
        }}
      >
        <BottomNavigationAction label="Длинные дистанции" icon={<RouteIcon />} value={'/distancerun'} />
        <BottomNavigationAction label="Манеж и стадион" icon={<SegmentIcon />} value={'/track'}/>
      </BottomNavigation>
    </Box>
  );
}
