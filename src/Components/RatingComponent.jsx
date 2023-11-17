import React, { useState } from "react";
import { Box, Rating } from "@mui/material";

export default function RatingComponent({ ratingColor }) {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        sx={{ color: `${ratingColor}` }}
        size="large"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
