import { Box, Typography } from "@mui/material";

// 問題の論証を表示するBox
function ArgBox({ argumentation }: { argumentation: string }) {
  return (
    <Box
      sx={{
        // border: "1px solid black",
        padding: "16px",
        // margin: "16px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
      >
        {argumentation}
      </Typography>
    </Box>
  );
}

export default ArgBox;
