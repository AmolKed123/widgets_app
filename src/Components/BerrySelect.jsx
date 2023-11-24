import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

const countryNames = [
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
  },
  {
    value: "Srilanka",
    label: "Srilanka",
  },
  {
    value: "China",
    label: "China",
  },
  {
    value: "Japan",
    label: "Japan",
  },
  {
    value: "South Africa",
    label: "South Africa",
  },
  {
    value: "Poland",
    label: "Poland",
  },
  {
    value: "Austin",
    label: "Austin",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "France",
    label: "France",
  },
  {
    value: "Italy",
    label: "Italy",
  },
  {
    value: "Kenya",
    label: "Kenya",
  },
  {
    value: "Ireland",
    label: "Ireland",
  },
  {
    value: "Zambia",
    label: "Zambia",
  },
  {
    value: "Qatar",
    label: "Qatar",
  },
];

const BerrySelect = () => {
  const [value, setValue] = useState("");
  console.log("value is ",value);
  return (
    <TextField
      id="standard-select-currency"
      size="small"
      InputProps={{
        style: {
          borderRadius: "8px",
        },
      }}
      sx={{
        width: 140,
        ".MuiInputBase-input": {
          fontSize: "14px",
          backgroundColor: "#F8FAFC",
          color: "#364152",
          lineHeight: "20.125px",
          width: "436.5px",
          padding: "16px 32px 16px 14px",
          height: "20.125px",
          minHeight: "auto",
          minWidth: "auto",
          fontWeight: "500",
          //outline: "1px dashed rgb(255,0,0)",
        },
      }}
      select
      label="Country"
      InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
      SelectProps={{
        MenuProps: {
          disableScrollLock: true,
          MenuListProps: {
            //disablePadding: true,
          },
          PaperProps: {
            style: {
              maxHeight: 168,
              width: 140,
              fontSize: 14,
              borderRadius: 8,
              color: "#364152",
            },
          },
        },
      }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <MenuItem
          value=""
          sx={{ py: 0.5, px: 1.5, fontSize: "14px !important" }}
        >
          None
        </MenuItem>
      {countryNames.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{ py: 0.5, px: 1.5, fontSize: "14px !important" }}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BerrySelect;
