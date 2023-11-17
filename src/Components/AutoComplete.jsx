import React,{useState,useEffect} from "react";
import { TextField, Autocomplete,Typography } from "@mui/material";
import BasicTextField from "../CommonComponents/BasicTextField";

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
const [inputValue, setInputValue] = useState('');

console.log("Input Value",inputValue);
  return (
    <Autocomplete
      disablePortal
      ListboxProps={{
        sx: { fontSize:15,padding:"0" },
      }}
      id="combo-box-demo"
      value={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={LocationsList}
      sx={{ width:150}}
      renderInput={(params) =>  <TextField
        label="Location"
        id="outlined-size-small"
        {...params}
        size="small"
        sx={{fontSize:"15px !important"}}
      />}
    />
  );
}
