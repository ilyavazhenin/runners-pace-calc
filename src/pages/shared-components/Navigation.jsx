import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RouteIcon from '@mui/icons-material/Route';
import SegmentIcon from '@mui/icons-material/Segment';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [value, setValue] = useState('/distancerun');
  const navigate = useNavigate();

  return (
    <Box
      
    >
      <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 0,
        paddingBottom: '15px',
        paddingTop: '5px',
        left: 0,
        right: 0,
        borderTop: '1px solid #1976d2',
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(`${newValue}`);
        }}
      >
        <BottomNavigationAction
          label="Длинные дистанции"
          icon={<RouteIcon />}
          value={'/distancerun'}
        />
        <BottomNavigationAction
          label="Манеж и стадион"
          icon={<SegmentIcon />}
          value={'/track'}
        />
      </BottomNavigation>
    </Box>
  );
};
