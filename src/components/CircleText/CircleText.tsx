import React from 'react';
import Box from '@mui/material/Box';

interface ICircleText {
    backgroundColor:string;
    children: React.ReactNode;
}
const CircleText: React.FC<ICircleText> = ({ children, backgroundColor, ...props }) => {
  return (
    <Box
      sx={{
        color: 'white',
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        fontSize: '1.2rem',
        lineHeight: '1',
        textAlign: 'center',
        zIndex: 2,
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        ...props
      }}
    >
      {children}
    </Box>
  );
};

export default CircleText;
