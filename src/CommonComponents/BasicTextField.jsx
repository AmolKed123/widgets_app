import React from "react";
import { TextField } from "@mui/material";

export default function BasicTextField({ labelValue, sizeValue, widthValue }) {
    console.log("width value",widthValue);
  return (
    <>
      <TextField
        id="outlined-basic"
        label={labelValue}
        variant="outlined"
        size={sizeValue}
        sx={{width:widthValue}}
        inputProps={{style: {fontSize:15}}} // font size of input text
        InputLabelProps={{style: {fontSize:15}}} 
      />
    </>
  );
}
