import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Triangle from "./components/Triangle";

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
          display: "flex",
          justifyContent: "center", // 中央揃えにする
          width: "100%", // 全幅を使用
          padding: "20px", // 任意のパディング
        }}
      >
        <Triangle sizeVW={70} color="#808080" /> {/* 三角形を表示 */}
      </div>
    </ThemeProvider>
  );
}

export default App;
