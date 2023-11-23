import React,{useState} from 'react';
import {Switch} from '@mui/material';

export default function SwitchToggle({colorValue}) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  console.log("check value",checked);
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color={colorValue}
    />
  );
}