// import React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import {Stack} from "@mui/material";
// export default function DatePickerComponent({ heading }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker sx={{width:"auto"}} label={heading} slotProps={{ textField: { size: 'small'} }}/>
//     </LocalizationProvider>
//   );
// }

import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerComponent() {
  const [value, setValue] = React.useState(dayjs(""));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{border:"1px solid yellow"}}>
      <DemoContainer components={["DatePicker"]}>
       <DatePicker
          label="Basic Date Picker"
          size="small"
          slotProps={{ textField: { error: false,size:"small" } }}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}



