import { Card, CardContent, Typography } from "@mui/material";

function PropositionBox({ proposition }: { proposition: string }) {
  return (
    <Card
      sx={{
        margin: 1,
      }}
    >
      <CardContent>
        <Typography>{proposition}</Typography>
      </CardContent>
    </Card>
  );
}

export default PropositionBox;
