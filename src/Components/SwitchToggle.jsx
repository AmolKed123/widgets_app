import React,{useState} from 'react';
import {Switch} from '@mui/material';

export default function SwitchToggle({colorValue}) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color={colorValue}
    />
  );
}