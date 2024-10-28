import { Box, Typography } from "@mui/material";

// 問題の論証を表示するBox
function ArgBox({ argumentation }: { argumentation: string }) {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
        {argumentation}
      </Typography>
    </Box>
  );
}

export default ArgBox;
