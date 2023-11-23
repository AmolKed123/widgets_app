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

// const countryNames = [
//   "Australia",
//   "India",
//   "USA",
//   "United Kingdom",
//   "Srilanka",
//   "China",
//   "Japan",
//   "Bangladesh",
//   "South Africa",
//   "Poland",
//   "Austin",
//   "Germany",
//   "France",
//   "Italy",
//   "Kenya",
//   "Morocco",
//   "Jordan",
//   "Zambia",
//   "Ireland",
//   "Yemen",
//   "Qatar",
// ];

export default function SelectMultipleOption({labelName,Options}) {
  const [countryName, setCountryName] = useState([]);

  const handleChange = (event) => {
    console.log("event ", event);
    const {
      target: { value },
    } = event;
    setCountryName(typeof value === "string" ? value.split(",") : value);
  };
  console.log("country name is",countryName);
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
            multiple
            value={countryName}
            onChange={handleChange}
            label="Country"
            sx={{ fontSize: "14px !important",borderRadius:'6px' }}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {Options.map((name) => (
              <MenuItem
                key={name}
                value={name}
                size="small"
                sx={{ p: 0, fontSize: "14px !important" }}
              >
                <Checkbox
                  sx={{ p: 0.5 }}
                  size="small"
                  checked={countryName.indexOf(name) > -1}
                />
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
