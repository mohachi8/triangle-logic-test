import { Box, Button } from "@mui/material";
import ArgBox from "../components/ArgBox";
import ProblemBox from "../components/ProblemBox";

function Step2() {
  // 論証
  const argumentation: string =
    "「ダイヤモンドは高価である．宝石は高価なのでダイヤモンドは宝石である．」";
  // 問題
  const step: number = 2;
  const sentence: string =
    "先ほど作成した命題を所与命題（論証で事実としていること）と導出命題（論証で導いていること）に分けてください．";

  const handleClick = () => {
    console.log("次へボタンがクリックされました");
    // ここに次のステップへの処理を追加
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* 論証 */}
      <ArgBox argumentation={argumentation} />

      {/* 問題文 */}
      <ProblemBox step={step} sentence={sentence} />

      {/* 所与命題と導出命題の分類 */}
      {/* 命題1 */}
      

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        {/* 戻るボタン */}
        <Button variant="contained" color="primary" onClick={handleClick}>
          ← もどる
        </Button>

        {/* 次へボタン */}
        <Button variant="contained" color="primary" onClick={handleClick}>
          次へ →
        </Button>
      </Box>
    </div>
  );
}

export default Step2;
