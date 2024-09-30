import React from 'react';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ButtonDerecha({ onClick, disabled }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        minHeight: '40px',
        minWidth: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6F4CE0',
        color: 'white',
        '&:hover': {
          backgroundColor: '#A018BF',
        },
        padding: 0,
      }}
    >
      <ArrowForwardIcon sx={{ fontSize: '20px' }} />
    </Button>
  );
}

export default ButtonDerecha;
