import React from 'react';
import './CustomBtn.scss';

const CustomButton = ({ onClick, dark=false, children, disabled,className, animated=false }) => {

    const buttonClassName = `custom-button ${className || ''} ${animated ? 'animate' : ''} ${dark ? 'dark': ''}`;
    
    return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
