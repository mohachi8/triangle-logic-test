import { Box, Typography, useTheme } from "@mui/material";

// 問題文を表示するBox
function ProblemBox({ step, sentence }: { step: number; sentence: string }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid  ${theme.palette.divider}`,
        padding: "8px",
        // margin: "16px",
      }}
    >
      <Box
        sx={{
          //   backgroundColor: theme.palette.primary.main,
          //   color: theme.palette.primary.contrastText,
          display: "flex",
          alignItems: "center",
          border: `4px solid  ${theme.palette.divider}`,
          borderRadius: "10%",
          padding: "8px",
          margin: "8px",
        }}
      >
        {/* 問題のステップ */}
        <Typography variant="h6">Step{step}</Typography>
      </Box>
      {/* 問題文 */}
      <Typography variant="body1">{sentence}</Typography>
    </Box>
  );
}

export default ProblemBox;
