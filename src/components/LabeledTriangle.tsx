// src/components/LabeledTriangle.tsx

import React from 'react';
import { Box } from '@mui/material';

const LabeledTriangle: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* 三角形 */}
      <Box
        sx={{
          width: 0,
          height: 0,
          borderLeft: '100px solid transparent',
          borderRight: '100px solid transparent', 
          borderBottom: '200px solid #1976d2', // 三角形の色
          position: 'absolute',
          bottom: 0,
        }}
      />

      {/* 頂点1のテキストボックス（上） */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -100%)',
          backgroundColor: '#fff',
          border: '1px solid #1976d2',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
      >
        <Box component="span" sx={{ color: '#1976d2' }}>結論</Box>
      </Box>

      {/* 頂点2のテキストボックス（左下） */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '0%',
          transform: 'translate(-50%, 50%)',
          backgroundColor: '#fff',
          border: '1px solid #1976d2',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
      >
        <Box component="span" sx={{ color: '#1976d2' }}>根拠</Box>
      </Box>

      {/* 頂点3のテキストボックス（右下） */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '0%',
          transform: 'translate(50%, 50%)',
          backgroundColor: '#fff',
          border: '1px solid #1976d2',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
      >
        <Box component="span" sx={{ color: '#1976d2' }}>論拠</Box>
      </Box>
    </Box>
  );
};

export default LabeledTriangle;