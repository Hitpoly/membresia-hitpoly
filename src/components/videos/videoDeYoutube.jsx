import React from 'react';
import { Box } from '@mui/material';

const VideoPersonalizado = ({
  url,
  borderRadius = 0,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // Relación de aspecto 16:9 (9 / 16 = 0.5625)
        borderRadius,
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box
        component="iframe"
        src={url}
        title="Embedded Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius,
        }}
      />
    </Box>
  );
};

export default VideoPersonalizado;
