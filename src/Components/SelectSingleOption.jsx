import React, { useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Stack,
} from "@mui/material";

const MenuProps = {
  MenuListProps: {
    disablePadding: true,
  },
  PaperProps: {
    style: {
      maxHeight: 168,
      width: 160,
    },
  },
};

const countryNames = [
  "Australia",
  "India",
  "USA",
  "United Kingdom",
  "Srilanka",
  "China",
  "Japan",
  "Bangladesh",
  "South Africa",
  "Poland",
  "Austin",
  "Germany",
  "France",
  "Italy",
  "Kenya",
  "Morocco",
  "Jordan",
  "Zambia",
  "Ireland",
  "Yemen",
  "Qatar",
];

export default function SelectSingleOption({ labelName,Options }) {
  const [countryName, setCountryName] = useState([]);

  const handleChange = (event) => {
    console.log("event ", event);
    const {
      target: { value },
    } = event;
    setCountryName(value);
  };

  return (
    <>
      <Stack>
        <FormControl sx={{ m: 0, width: 160 }} size="small">
          <InputLabel
            id="demo-multiple-checkbox-label"
            sx={{ fontSize: "14px !important" }}
          >
          {labelName}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={countryName}
            onChange={handleChange}
            label="Country"
            sx={{ fontSize: "14px !important", borderRadius: "6px" }}
            MenuProps={MenuProps}
          >
            <MenuItem
              value=""
              size="small"
              sx={{ py: 0.5, px: 1.5, fontSize: "14px !important" }}
            >
              <span>None</span>
            </MenuItem>
            {Options.map((name) => (
              <MenuItem
                key={name}
                value={name}
                size="small"
                sx={{ py: 0.5, px: 1.5, fontSize: "14px !important" }}
              >
                <span>{name}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
