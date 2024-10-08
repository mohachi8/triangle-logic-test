import { Button } from "@mui/material";
import ArgBox from "../components/ArgBox";
import ProblemBox from "../components/ProblemBox";
import PropositionBox from "../components/PropositionBox";

function Step1() {
  // 論証
  const argumentation: string =
    "「ダイヤモンドは高価である．宝石は高価なのでダイヤモンドは宝石である．」";

  // 問題
  const step: number = 1;
  const sentence: string = "以下の論証に使われている命題を選んでください．";

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
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* 問題文 */}
      <ProblemBox step={step} sentence={sentence} />

      {/* 論証 */}
      <ArgBox argumentation={argumentation} />

      {/* 命題の組み立て */}
      {/* 命題1 */}
      <PropositionBox items={options} />

      {/* 命題2 */}
      <PropositionBox items={options} />

      {/* 命題3 */}
      <PropositionBox items={options} />

      <Button variant="contained" color="primary" onClick={handleClick}>
        次へ
      </Button>
    </div>
  );
}

export default Step1;
