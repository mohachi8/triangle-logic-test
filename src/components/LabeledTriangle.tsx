import React from "react";
import { Box, Button } from "@mui/material";
import Triangle from "./Triangle";

interface LabeledTriangleProps {
  sizeVW: number; // 三角形の大きさ
  color: string; // 三角形のカラー
}

const LabeledTriangle: React.FC<LabeledTriangleProps> = ({ sizeVW, color }) => {
  return (
    <Box
      sx={{
        position: "relative", // 親ボックスを相対配置にする
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // 全幅を使用
        height: `calc(${sizeVW}vw + 100px)`, // 三角形の高さより少し大きく設定
        overflow: "hidden", // ボタンがはみ出さないようにする
      }}
    >
      {/* 内側のコンテナ */}
      <Box
        sx={{
          position: "relative",
          width: `${sizeVW}vw`,
          height: `${sizeVW}vw`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 三角形の描画 */}
        <Triangle sizeVW={sizeVW} color={color} />

        {/* 上頂点のボタン */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: `-${sizeVW / 20}vw`, // 値を調整してボタンを三角形の頂点に寄せる
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          結論
        </Button>

        {/* 左下頂点のボタン */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: `-${sizeVW / 20}vw`, // 値を調整してボタンを三角形の頂点に寄せる
            left: `calc(50% - ${sizeVW / 2}vw)`, // 三角形の幅の50% - ボタンサイズの調整
            transform: "translate(-50%, 50%)",
          }}
        >
          根拠
        </Button>

        {/* 右下頂点のボタン */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: `-${sizeVW / 20}vw`, // 値を調整してボタンを三角形の頂点に寄せる
            right: `calc(50% - ${sizeVW / 2}vw)`, // 三角形の幅の50% - ボタンサイズの調整
            transform: "translate(50%, 50%)",
          }}
        >
          論拠
        </Button>
      </Box>
    </Box>
  );
};

export default LabeledTriangle;