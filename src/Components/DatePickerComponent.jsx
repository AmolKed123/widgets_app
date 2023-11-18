import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {Stack} from "@mui/material";
export default function DatePickerComponent({ heading }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{width:"160px"}}>
      <DatePicker label={heading} slotProps={{ textField: { size: 'small',fullWidth:true} }}/>
      </Stack>
    </LocalizationProvider>
  );
}
