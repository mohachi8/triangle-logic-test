import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import { Typography } from "@mui/material";
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
      {/* ヘッダー */}
      <Header />
      {/* コンテンツ */}
      <div
        style={{
          display: "flex", // Flexboxを使用
          flexDirection: "column", // 子要素を縦に並べる
          alignItems: "center", // 子要素を中央揃えにするÏ
          width: "100%", // 全幅を使用
          padding: "20px", // 任意のパディング
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          以下の命題から三角ロジックを組み立てなさい。
        </Typography>
        {/* <Triangle sizeVW={60} color="#808080" /> 三角形を表示 */}
        <LabeledTriangle sizeVW={60} color="#808080" maxWidthVW={110} />
      </div>
    </ThemeProvider>
  );
}

export default App;
