import { Box, Typography } from "@mui/material";

// 問題文を表示するBox
function ProblemBox({ step, sentence }: { step: number; sentence: string }) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        padding: "16px",
        margin: "16px",
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
