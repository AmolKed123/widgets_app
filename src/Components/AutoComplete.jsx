import React, { useState } from "react";
import { TextField, Autocomplete, Paper } from "@mui/material";

export default function AutoCompleteField({ labelName, options, customWidth }) {
  const [inputValue, setInputValue] = useState("");

  console.log("Input Value autocomplete", inputValue, customWidth);
  return (
    <Autocomplete
      disablePortal
      ListboxProps={{
        sx: {
          fontSize: 14,
          maxHeight: 176,
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
      id="combo-box-demo"
      value={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options}
      sx={{
        width: customWidth,
        fontSize: "14px  !important",
        "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
          lineHeight: "18.676px",
          height: "30.6719px",
          color: "#364152",
          padding: "6px 16px 6px 16px",
        },
        "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
          {
            backgroundColor: "#1976D20",
          },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={labelName}
          id="outlined-size-small"
          size="small"
          InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
          sx={{
            "& .MuiInputBase-root": {
              fontSize: "14px",
              borderRadius: "8px",
              backgroundColor: "#F8FAFC",
              color: "#121926",
              padding: "12px 32px 16px 14px !important",
              minHeight: "auto",
              minWidth: "auto",
              fontWeight: "500",
              height: "52.125px",
            },
          }}
        />
      )}
      PaperComponent={(props) => (
        <Paper
          sx={{
            fontSize: 14,
            borderRadius: 2,
            color: "#364152",
          }}
           {...props}
        />
      )}
    />
  );
}
