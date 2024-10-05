import { Box, Typography } from "@mui/material";

// 問題の論証を表示するBox
function ArgBox({ argumentation }: { argumentation: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "lightblue", // 背景色
        border: "2px solid black", // 枠線（太さと色）
        borderRadius: "8px", // 角を丸くする（オプション）
        padding: "16px", // 内側の余白
        margin: "16px", // 外側の余白
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {argumentation}
      </Typography>
    </Box>
  );
}

export default ArgBox;
