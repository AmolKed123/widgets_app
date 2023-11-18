import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}> */}
        <DatePicker
          label="Small picker"
          slotProps={{ textField: { size: 'small'} }}
          sx={{width:"170px"}}
        />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}