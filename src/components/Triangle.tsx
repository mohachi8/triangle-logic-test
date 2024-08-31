// src/components/Triangle.tsx

import React from 'react';
import { Box } from '@mui/material';

const Triangle: React.FC = () => {
  return (
    <Box
      sx={{
        width: 0,
        height: 0,
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '100px solid #808080',  // 三角形の色を指定
      }}
    />
  );
};

export default Triangle;