import React from 'react';
import { Box } from '@mui/material';
import Triangle from './Triangle';
import LabeledCard from './LabeledCard';

interface LabeledTriangleProps {
  sizeVW: number; // 三角形の大きさ
  color: string; // 三角形のカラー
  maxWidthVW?: number; // 三角形の最大横幅
}

const LabeledTriangle: React.FC<LabeledTriangleProps> = ({ sizeVW, color, maxWidthVW }) => {
  // 実際の三角形のサイズを計算する
  const triangleSizeVW = maxWidthVW ? Math.min(sizeVW, maxWidthVW) : sizeVW;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: `calc(${triangleSizeVW}vw + 100px)`, // 三角形の高さより少し大きく設定
        overflow: 'hidden',
      }}
    >
      {/* 内側のコンテナ */}
      <Box
        sx={{
          position: 'relative',
          width: `${triangleSizeVW}vw`,
          height: `${triangleSizeVW}vw`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 三角形の描画 */}
        <Triangle sizeVW={triangleSizeVW} color={color} />

        {/* 上頂点のカード */}
        <LabeledCard
          text="結論"
          positionStyles={{
            top: `-${triangleSizeVW / 20}vw`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          backgroundColor="#f44336"
        />

        {/* 左下頂点のカード */}
        <LabeledCard
          text="根拠"
          positionStyles={{
            bottom: `-${triangleSizeVW / 20}vw`,
            left: `calc(50% - ${triangleSizeVW / 2}vw)`,
            transform: 'translate(-50%, 50%)',
          }}
          backgroundColor="#4caf50"
        />

        {/* 右下頂点のカード */}
        <LabeledCard
          text="論拠"
          positionStyles={{
            bottom: `-${triangleSizeVW / 20}vw`,
            right: `calc(50% - ${triangleSizeVW / 2}vw)`,
            transform: 'translate(50%, 50%)',
          }}
          backgroundColor="#2196f3"
        />
      </Box>
    </Box>
  );
};

export default LabeledTriangle;