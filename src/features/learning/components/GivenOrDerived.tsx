import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Paper,
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
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p:1
      }}
    >
      <Typography>{proposition}</Typography>

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
    </Paper>
  );
}

export default GivenOrDerived;
