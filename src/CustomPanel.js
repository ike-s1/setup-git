import React from "react";
import Box from '@mui/material/Box';

export const  CustomTabPanel = (props) =>  {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        hidden={value !== index}
        id={`simple-tabpanel`}
        aria-labelledby={`simple-tab`}
        {...other}
      >
        {value === index && (
          <Box >
            {children}
          </Box>
        )}
      </div>
    );
  }