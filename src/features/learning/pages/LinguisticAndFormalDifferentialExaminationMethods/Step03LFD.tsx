import { Box, Button } from "@mui/material";
import LabeledTriangle from "../../../../components/LabeledTriangle";
import ArgBox from "../../components/ArgBox";
import ProblemBox from "../../components/ProblemBox";
import PropositionBox from "../../components/PropositionBox";

function Step03LFD() {
  // 論証
  const argumentation: string =
    "「ダイヤモンドは高価である．したがってダイヤモンドは宝石である．なぜならば宝石は高価だからである．」";
  // 問題
  const step: number = 3;
  const sentence: string =
    "作成した所与命題と導出命題を使って言語的三角ロジックを組み立ててください．";

  const proposition1: string = "ダイヤモンドであるならば高価である";
  const proposition2: string = "宝石であるならば高価である";
  const proposition3: string = "ダイヤモンドであるならば宝石である";

  return (
    <div>
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

            {/* 所与命題と導出命題の分類 */}
            {/* 命題1 */}
            <PropositionBox proposition={proposition1} />

            {/* 命題2 */}
            <PropositionBox proposition={proposition2} />

            {/* 命題3 */}
            <PropositionBox proposition={proposition3} />

            <LabeledTriangle sizeVW={40} color="#808080" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
              }}
            >
              {/* 戻るボタン */}
              <Button variant="contained" color="primary" href="/lfd02">
                ← もどる
              </Button>

              {/* 次へボタン */}
              <Button variant="contained" color="primary" href="/lfd03">
                次へ →
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step03LFD;
