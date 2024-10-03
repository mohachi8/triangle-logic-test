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

const GradientBox = styled(Box)({
  // background: 'linear-gradient(to right, #d9e7d2, #b8ced4)', // グラデーションの指定
  padding: "10px",
  display: "flex",
  alignItems: "center",
  // justifyContent: 'center',
});

function Step1() {
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
    <div
      style={{
        display: "flex", // Flexboxを使用
        flexDirection: "column", // 子要素を縦に並べる
        // alignItems: "center", // 子要素を中央揃えにする
        width: "100%", // 全幅を使用
        padding: "20px", // 任意のパディング
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        「植物は光合成を行う．光合成を行うならば野菜であるので，植物は野菜である．」
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        この論証に使われている命題を選んでください．
      </Typography>

      <GradientBox>
        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
          <InputLabel>命題1</InputLabel>
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
          <InputLabel>命題2</InputLabel>
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
      <GradientBox>
        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
          <InputLabel>命題1</InputLabel>
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
          <InputLabel>命題2</InputLabel>
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
      <GradientBox>
        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
          <InputLabel>命題1</InputLabel>
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
          <InputLabel>命題2</InputLabel>
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
