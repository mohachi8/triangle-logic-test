import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ArgBox from "../components/ArgBox";
import ProblemBox from "../components/ProblemBox";

const GradientBox = styled(Box)({
  padding: "10px",
  display: "flex",
  alignItems: "center",
});

function Step1() {
  const [firstValue, setFirstValue] = React.useState("");
  const [secondValue, setSecondValue] = React.useState("");

  // 論証
  const argumentation: string =
    "「植物は光合成を行う．光合成を行うならば野菜であるので，植物は野菜である．」";

  const step: number = 1;
  const sentence: string = "この論証に使われている命題を選んでください．";

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
    <div
      style={{
        display: "flex", // Flexboxを使用
        flexDirection: "column", // 子要素を縦に並べる
        // alignItems: "center", // 子要素を中央揃えにする
        width: "100%", // 全幅を使用
        padding: "20px", // 任意のパディング
      }}
    >
      {/* 論証 */}
      <ArgBox argumentation={argumentation} />

      {/* 問題文 */}
      <ProblemBox step={step} sentence={sentence} />

      <GradientBox>
        <Typography sx={{ marginX: 2 }}>命題1</Typography>
        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
          <InputLabel>選択</InputLabel>
          <Select value={firstValue} onChange={handleFirstChange} label="命題1">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </FormControl>

        <Typography sx={{ marginX: 2 }}>ならば</Typography>

        <FormControl variant="outlined" sx={{ minWidth: 120, marginLeft: 2 }}>
          <InputLabel>選択</InputLabel>
          <Select
            value={secondValue}
            onChange={handleSecondChange}
            label="命題2"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Option A</MenuItem>
            <MenuItem value={20}>Option B</MenuItem>
            <MenuItem value={30}>Option C</MenuItem>
          </Select>
        </FormControl>
      </GradientBox>
    </div>
  );
}

export default Step1;
