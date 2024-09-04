import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface LabeledCardProps {
  text: string; // カードの中に表示する文字列
  positionStyles: React.CSSProperties; // カードの位置を決定するスタイル
  backgroundColor: string; // カードの背景色
}

const LabeledCard: React.FC<LabeledCardProps> = ({ text, positionStyles, backgroundColor }) => {
  return (
    <Card
      sx={{
        position: 'absolute',
        backgroundColor: backgroundColor, // 背景色を引数から設定
        ...positionStyles, // 引数として渡された位置のスタイルを適用
      }}
    >
      <CardContent>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default LabeledCard;