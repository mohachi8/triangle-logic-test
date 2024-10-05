import { Box, Typography } from "@mui/material";

// 問題文を表示するBox
function ProblemBox({ step, sentence }: { step: number; sentence: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0", // 背景色（薄いグレーなど）
        border: "2px solid black", // 枠線（太さと色）
        borderRadius: "8px", // 角を丸くする
        padding: "16px", // 内側の余白
        margin: "16px", // 外側の余白
        display: "flex", // レイアウトを横並びに
        alignItems: "center", // コンテンツを中央に揃える
      }}
    >
      <Typography variant="h6" component="div" sx={{ marginRight: "8px" }}>
        Step{step}
      </Typography>
      <Typography variant="body1" component="div">
        {sentence}
      </Typography>
    </Box>
  );
}

export default ProblemBox;
