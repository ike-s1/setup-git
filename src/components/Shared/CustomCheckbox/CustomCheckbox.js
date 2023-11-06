import React, { useState } from 'react';
import './CustomCheckbox.scss';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

export const CustomCheckbox = ({ initialValue, onChange, disabled, options }) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleChange = () => {
    setIsChecked(!isChecked);

    if (onChange) {
      onChange(!isChecked); // Pass the new value to the parent component
    }
  };

  return (
    <Switch
      className='custom-checkbox'
      checked={isChecked}
      onChange={handleChange}
      slotProps={{
        track: {
          children: (
            <>
              <Typography component="span"  className='on' level="inherit" sx={{ ml: '10px' }}>
                On
              </Typography>
              <Typography component="span" className='off' level="inherit" sx={{ mr: '8px' }}>
                Off
              </Typography>
            </>
          ),
        },
      }}
      sx={{
        '--Switch-thumbSize': '26px',
        '--Switch-trackWidth': '74px',
        '--Switch-trackHeight': '32px',
      }}
    />
  );
};
