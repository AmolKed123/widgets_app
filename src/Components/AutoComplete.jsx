import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Typography } from "@mui/material";

const LocationsList = [
  {
    label: "Mumbai",
    cityName: "mumbai",
    value: "Mumbapuri",
  },
  {
    label: "Pune",
    cityName: "pune",
  },
  {
    label: "Thane",
    cityName: "thane",
  },
  {
    label: "Delhi",
    cityName: "delhi",
  },
  {
    label: "Bangalore",
    cityName: "bangalore",
  },
  {
    label: "Hyderabad",
    cityName: "hyderabad",
  },
  {
    label: "Chennai",
    cityName: "chennai",
  },
  {
    label: "Kolkata",
    cityName: "kolkata",
  },
  {
    label: "Chandigarh",
    cityName: "chandigarh",
  },
  {
    label: "Lucknow",
    cityName: "lucknow",
  },
  {
    label: "Mysore",
    cityName: "mysore",
  },
  {
    label: "Jaipur",
    cityName: "jaipur",
  },
  {
    label: "Kanpur",
    cityName: "kanpur",
  },
  {
    label: "Bhopal",
    cityName: "bhopal",
  },
  {
    label: "Vijaywada",
    cityName: "vijaywada",
  },
  {
    label: "Indore",
    cityName: "indore",
  },
  {
    label: "Jodhapur",
    cityName: "jodhpur",
  },
  {
    label: "Nagpur",
    cityName: "nagpur",
  },
  {
    label: "Jammu",
    cityName: "jammu",
  },
  {
    label: "Ratnagiri",
    cityName: "ratnagiri",
  },
  {
    label: "Solapur",
    cityName: "solapur",
  },
];

export default function AutoCompleteField() {
  const [inputValue, setInputValue] = useState("");

  console.log("Input Value", inputValue);
  return (
    <Autocomplete
      disablePortal
      ListboxProps={{
        sx: { fontSize: 14, p: 0, maxHeight: "164px" },
      }}
      id="combo-box-demo"
      value={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={LocationsList}
      sx={{
        width: 160,
        borderRadius:'6px',
        fontSize: "14px  !important",
        "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
         py:0.4
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          id="outlined-size-small"
          size="small"
          InputLabelProps={{ style: { fontSize: 14 } }}
          sx={{
            "& .MuiInputBase-root": {
              fontSize: "14px",borderRadius:'6px'
            }
          }}
        />
      )}
    />
  );
}
