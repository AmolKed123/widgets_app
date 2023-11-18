import React from "react";
import { TextField } from "@mui/material";

export default function BasicTextField({ labelValue,params}) {
    
  return (
    <>
      <TextField
        id="outlined-basic"
        label={labelValue}
        {...params}
        variant="outlined"
        size="small"
        sx={{width:150}}
        inputProps={{style: {fontSize:15}}} // font size of input text
        InputLabelProps={{style: {fontSize:15}}} 
      />
    </>
  );
}
