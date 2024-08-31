import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import LabeledTriangle from "./components/LabeledTriangle";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* トップバー */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            三角ロジック
          </Typography>
        </Toolbar>
      </AppBar>
      {/* コンテンツ */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <LabeledTriangle />
      </div>
    </ThemeProvider>
  );
}

export default App;
