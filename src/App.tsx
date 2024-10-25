import { red, purple } from "@mui/material/colors";
import { useEffect, useMemo, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // 起動時はOSの設定に合わせる
  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // テーマの切り替え
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: red,
          secondary: purple,
        },
      }),
    [isDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
