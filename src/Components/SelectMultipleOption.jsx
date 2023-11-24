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

const SelectMultipleOption = ({ labelName, Options, customWidth }) => {
  const [inputValue, setInputValue] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputValue(typeof value === "string" ? value.split(",") : value);
  };
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
        width: customWidth,
        ".MuiInputBase-input": {
          fontSize: "14px",
          backgroundColor: "#F8FAFC",
          color: "#121926",
          lineHeight: "20.125px",
          padding: "16px 32px 16px 14px",
          height: "20.125px",
          minHeight: "auto",
          minWidth: "auto",
          fontWeight: "500",
        },
      }}
      select
      label={labelName}
      InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
      SelectProps={{
        multiple: true,
        value: inputValue,
        onChange: handleChange,
        MenuProps: {
          MenuListProps: {
            //disablePadding: true,
          },
          PaperProps: {
            sx: {
              maxHeight: 181,
              width: customWidth,
              fontSize: 14,
              borderRadius: 2,
              color: "#364152",
              overflowY: "scroll",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
          },
        },
      }}
      value={inputValue}
      onChange={handleChange}
    >
      {Options.map((option) => (
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

export default SelectMultipleOption;
