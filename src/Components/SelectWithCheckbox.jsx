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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
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

export default function SelectWithCheckbox() {
  const [countryName, setCountryName] = useState([]);

  const handleChange = (event) => {
    console.log("event ", event);
    const {
      target: { value },
    } = event;
    setCountryName(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Stack>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Country</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={countryName}
            onChange={handleChange}
            input={<OutlinedInput label="Country" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {countryNames.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={countryName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
