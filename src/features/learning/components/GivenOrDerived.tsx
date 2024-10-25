import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

function GivenOrDerived({ proposition }: { proposition: string }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
          margin: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h6" component="div">
          {proposition}
        </Typography>

        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
          <InputLabel>選択</InputLabel>
          <Select value={value} onChange={handleChange} label="命題1">
            <MenuItem value="">
              <em>--</em>
            </MenuItem>
            <MenuItem value={10}>所与命題</MenuItem>
            <MenuItem value={20}>導出命題</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default GivenOrDerived;
