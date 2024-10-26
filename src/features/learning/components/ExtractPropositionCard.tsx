import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  //   useTheme,
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
    <Card
      sx={{
        margin: 1,
        width: "fit-content",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap", // 横幅がはみ出た場合に折り返す
        }}
      >
        {/* 前件を選択 */}
        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2, marginBottom: { xs: 2, sm: 0 } }}>
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

        <Typography sx={{ marginX: 2, marginBottom: { xs: 2, sm: 0 } }}>ならば</Typography>

        {/* 後件を選択 */}
        <FormControl variant="outlined" sx={{ minWidth: 120, marginLeft: 2 }}>
          <InputLabel>選択</InputLabel>
          <Select
            value={secondValue}
            onChange={handleSecondChange}
            label="命題2"
          >
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
      </CardContent>
    </Card>
  );
}

export default ExtractPropositionCard;
