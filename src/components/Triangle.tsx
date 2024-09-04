import React from "react";
import { Box } from "@mui/material";

interface TriangleProps {
  sizeVW: number; // 三角形の大きさ
  color: string; // 三角形のカラー
}

// 三角形を描画
const Triangle: React.FC<TriangleProps> = ({ sizeVW, color }) => {
  return (
    <Box
      sx={{
        width: 0,
        height: 0,
        borderLeft: `${sizeVW / 2}vw solid transparent`,
        borderRight: `${sizeVW / 2}vw solid transparent`,
        borderBottom: `${sizeVW}vw solid ${color}`,
      }}
    />
  );
};

export default Triangle;
