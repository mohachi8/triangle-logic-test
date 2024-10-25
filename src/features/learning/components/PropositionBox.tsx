import { Box, Typography } from "@mui/material";

function PropositionBox({ proposition }: { proposition: string }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
          margin: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ marginX: 2 }}>
            {proposition}
        </Typography>
      </Box>
    </div>
  );
}

export default PropositionBox;
