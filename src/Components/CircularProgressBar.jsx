import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularProgressBar({colorValue}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color={colorValue}/>
    </Box>
  );
}