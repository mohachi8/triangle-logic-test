import { Button } from "@mui/material";
import ArgBox from "../../components/ArgBox";
import ProblemBox from "../../components/ProblemBox";
import ExtractPropositionCard from "../../components/ExtractPropositionCard";

function Step01LFD() {
  // 論証
  const argumentation: string =
    "「ダイヤモンドは高価である．したがってダイヤモンドは宝石である．なぜならば宝石は高価だからである．」";

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

  return (
    <div>
      {/* 問題文 */}
      <ProblemBox step={step} sentence={sentence} />
      <div
        style={{
          // background: "red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            // background: "blue",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          {/* 論証 */}
          <ArgBox argumentation={argumentation} />

          {/* 命題の組み立て */}
          {/* 命題1 */}
          <ExtractPropositionCard items={options} />

          {/* 命題2 */}
          <ExtractPropositionCard items={options} />

          {/* 命題3 */}
          <ExtractPropositionCard items={options} />

          <Button
            variant="contained"
            color="primary"
            href="/lfd02"
            sx={{
              margin: 2,
              width: "fit-content",
            }}
          >
            次へ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Step01LFD;
