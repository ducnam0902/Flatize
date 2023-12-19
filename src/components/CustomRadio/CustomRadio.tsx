import React from 'react'
import Box from '@mui/material/Box';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface ICustomRadio extends Omit<FormControlLabelProps, 'control'> {
    color: string,
}

const CustomRadio: React.FC<ICustomRadio> = ({ color, ...props }) => {
  return (
    <FormControlLabel
      sx={{
        marginX: '0.5rem',
        '& .MuiRadio-root': {
          border: '1px solid #dddddd',
          borderRadius: '0',
          marginX: '0.5rem'
        },
        '& .Mui-checked': {
          borderColor: '#333333'
        }
      }}
      control={
        <Radio
          icon={
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                backgroundColor: color
              }}
            />
          }
          checkedIcon={
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                backgroundColor: color
              }}
            />
          }
        />
      }
      {...props}
    />
  )
}

export default CustomRadio
