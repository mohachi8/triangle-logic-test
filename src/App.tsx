import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Step1 from "./layouts/learning-screens/step1";

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

      {/* ヘッダー */}
      <Header />

      {/* コンテンツ */}
      <div
        style={{
          display: "flex", // Flexboxを使用
          flexDirection: "column", // 子要素を縦に並べる
          alignItems: "center", // 子要素を中央揃えにする
          width: "100%", // 全幅を使用
          paddingTop: "20px", // 任意のパディング
          // backgroundColor: "red"
        }}
      >
        <Step1 />
      </div>
    </ThemeProvider>
  );
}

export default App;
