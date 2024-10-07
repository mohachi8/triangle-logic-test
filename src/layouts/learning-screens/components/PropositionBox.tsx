import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function PropositionBox({ items }: { items: { value: number; label: string }[] }) {
  const [firstValue, setFirstValue] = React.useState("");
  const [secondValue, setSecondValue] = React.useState("");

  const handleFirstChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstValue(event.target.value);
  };

  const handleSecondChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSecondValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "16px",
      }}
    >
      <Typography sx={{ marginX: 2 }}>命題</Typography>
      <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
        <InputLabel>選択</InputLabel>
        <Select value={firstValue} onChange={handleFirstChange} label="命題1">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <Typography sx={{ marginX: 2 }}>ならば</Typography>

      <FormControl variant="outlined" sx={{ minWidth: 120, marginLeft: 2 }}>
        <InputLabel>選択</InputLabel>
        <Select value={secondValue} onChange={handleSecondChange} label="命題2">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default PropositionBox;
