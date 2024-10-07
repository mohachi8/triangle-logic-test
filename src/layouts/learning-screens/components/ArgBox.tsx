import { Box, Typography } from "@mui/material";

// 問題の論証を表示するBox
function ArgBox({ argumentation }: { argumentation: string }) {
  return (
    <Box
      sx={{
        border: "1px solid black", // 枠線（太さと色）
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
