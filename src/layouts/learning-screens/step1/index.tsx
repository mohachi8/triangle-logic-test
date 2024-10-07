import { Button } from "@mui/material";
import ArgBox from "../components/ArgBox";
import ProblemBox from "../components/ProblemBox";
import PropositionBox from "../components/PropositionBox";

function Step1() {
  // 論証
  const argumentation: string =
    "「ダイヤモンドは高価である．宝石は高価なのでダイヤモンドは宝石である．」";

  const step: number = 1;
  const sentence: string = "この論証に使われている命題を選んでください．";
  const options = [
    { value: 10, label: "ダイヤモンドである" },
    { value: 20, label: "ダイヤモンドではない" },
    { value: 30, label: "宝石である" },
    { value: 40, label: "宝石でない" },
    { value: 50, label: "高価である" },
    { value: 60, label: "高価でない" },
  ];

  const handleClick = () => {
    console.log("次へボタンがクリックされました");
    // ここに次のステップへの処理を追加
  };

  return (
    <div
      style={{
        display: "flex", // Flexboxを使用
        flexDirection: "column", // 子要素を縦に並べる
        padding: "20px", // 任意のパディング
        // backgroundColor: "lightgray"
      }}
    >
      {/* 論証 */}
      <ArgBox argumentation={argumentation} />

      {/* 問題文 */}
      <ProblemBox step={step} sentence={sentence} />

      {/* 命題1 */}
      <PropositionBox items={options} />

      {/* 命題2 */}
      <PropositionBox items={options} />

      {/* 命題3 */}
      <PropositionBox items={options} />

      <Button
        variant="contained" // ボタンのスタイル（塗りつぶし）
        color="primary" // ボタンの色
        onClick={handleClick} // クリックイベント
      >
        次へ
      </Button>
    </div>
  );
}

export default Step1;
