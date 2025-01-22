import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RouteIcon from '@mui/icons-material/Route';
import SegmentIcon from '@mui/icons-material/Segment';
import { useNavigate } from "react-router";

export const Navigation = () => {
  const [value, setValue] = useState('/distancerun');
  const navigate = useNavigate()

  return (
    <Box>
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
          value="/distancerun"
          icon={<RouteIcon />}
        />
        
        <BottomNavigationAction 
          label="Манеж и стадион"
          value="/track"
          icon={<SegmentIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
