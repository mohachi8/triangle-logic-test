import React from "react";
import { Box } from "@mui/material";

interface TriangleProps {
  sizePX: number; // 三角形の大きさ
  color: string; // 三角形のカラー
}

// 三角形を描画
const Triangle: React.FC<TriangleProps> = ({ sizePX, color }) => {
  return (
    <Box
      sx={{
        width: 0,
        height: 0,
        borderLeft: `${sizePX / 2}px solid transparent`,
        borderRight: `${sizePX / 2}px solid transparent`,
        borderBottom: `${sizePX}px solid ${color}`,
      }}
    />
  );
};

export default Triangle;
