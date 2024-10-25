import { Typography, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        borderTop: `1px solid  ${theme.palette.divider}`,
        padding: "1px",
        background: theme.palette.background.paper,
      }}
    >
      <Typography variant="body2">© 2024 LEL - Learning Engineering Lab.</Typography>
    </footer>
  );
}
export default Footer;
