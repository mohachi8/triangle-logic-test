import React from 'react';
import { Box } from '@mui/material';
import Triangle from './Triangle';
import LabeledCard from './LabeledCard';

interface LabeledTriangleProps {
  sizePX: number; // 三角形の大きさ
  color: string; // 三角形のカラー
}

const LabeledTriangle: React.FC<LabeledTriangleProps> = ({ sizePX, color }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: `${sizePX + 100}px`, // 三角形の高さより少し大きく設定
        overflow: "hidden",
      }}
    >
      {/* 内側のコンテナ */}
      <Box
        sx={{
          position: "relative",
          width: `${sizePX}px`,
          height: `${sizePX}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 三角形の描画 */}
        <Triangle sizePX={sizePX} color={color} />

        {/* 上頂点のカード */}
        <LabeledCard
          text="結論"
          positionStyles={{
            top: `-${sizePX / 20}px`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          backgroundColor="#2196f3" // 青色の背景
        />

        {/* 左下頂点のカード */}
        <LabeledCard
          text="根拠"
          positionStyles={{
            bottom: `-${sizePX / 20}px`,
            left: `calc(50% - ${sizePX / 2}px)`,
            transform: 'translate(-50%, 50%)',
          }}
          backgroundColor="#f44336" // 赤色の背景
        />

        {/* 右下頂点のカード */}
        <LabeledCard
          text="論拠"
          positionStyles={{
            bottom: `-${sizePX / 20}px`,
            right: `calc(50% - ${sizePX / 2}px)`,
            transform: 'translate(50%, 50%)',
          }}
          backgroundColor="#4caf50" // 緑色の背景
        />
      </Box>
    </Box>
  );
};

export default LabeledTriangle;