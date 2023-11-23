import React, { useState, useEffect } from "react";
import { Box, Stack, Slider } from "@mui/material";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function VolumeSlider() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("volume range value", value);
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeUp />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
