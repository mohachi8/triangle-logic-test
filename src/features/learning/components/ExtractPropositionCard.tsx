import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

// 与えられた論証から命題を作成するCard
function ExtractPropositionCard({
  items,
}: {
  items: { value: number; label: string }[];
}) {
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
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "fit-content",
        p: 1,
      }}
    >
      {/* 前件を選択 */}
      <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
        <InputLabel>選択</InputLabel>
        <Select value={firstValue} onChange={handleFirstChange} label="命題1">
          <MenuItem value="">
            <em>--</em>
          </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography sx={{ margin: 1 }}>ならば</Typography>

      {/* 後件を選択 */}
      <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
        <InputLabel>選択</InputLabel>
        <Select value={secondValue} onChange={handleSecondChange} label="命題2">
          <MenuItem value="">
            <em>--</em>
          </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default ExtractPropositionCard;
