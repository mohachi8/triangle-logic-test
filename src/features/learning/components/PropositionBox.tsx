import { Paper, Typography } from "@mui/material";

function PropositionBox({ proposition }: { proposition: string }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 1,
      }}
    >
      <Typography>{proposition}</Typography>
    </Paper>
  );
}

export default PropositionBox;
