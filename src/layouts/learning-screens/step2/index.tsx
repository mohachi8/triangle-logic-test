import { Typography } from "@mui/material";
import LabeledTriangle from "../../../components/LabeledTriangle";

function Step2() {
  return (
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
      <LabeledTriangle sizeVW={40} color="#808080" />
    </div>
  );
}

export default Step2;