import { useState, useMemo, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import Header from "./components/Header";
import Step2 from "./layouts/learning-screens/step2";
import Step1 from "./layouts/learning-screens/step1";
import { purple, red } from "@mui/material/colors";

function App() {
  // システムのデフォルトテーマを確認
  const systemPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // ユーザーによるテーマの切り替えを管理
  const [userTheme, setUserTheme] = useState<"light" | "dark" | null>(null);

  // ページ読み込み時に localStorage からテーマを読み込み
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setUserTheme(savedTheme);
    }
  }, []);

  // テーマを切り替える関数
  const toggleTheme = () => {
    const newTheme = userTheme === "dark" ? "light" : "dark";
    setUserTheme(newTheme);
    localStorage.setItem("theme", newTheme); // テーマ状態を保存
  };

  // 使用するテーマを決定（ユーザー設定があればそれを優先、なければシステム設定）
  const prefersDarkMode =
    userTheme !== null ? userTheme === "dark" : systemPrefersDarkMode;

  // テーマの生成
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: red,
          secondary: purple,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ヘッダー */}
      <Header onToggleTheme={toggleTheme} isDarkMode={prefersDarkMode} />
      {/* コンテンツ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <Step1 />
      </div>
    </ThemeProvider>
  );
}

export default App;
