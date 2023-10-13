import React from 'react';
import './CustomBtn.scss';

const CustomButton = ({ onClick, dark=false, children, disabled,className, animated=false }) => {

    const buttonClassName = `custom-button ${className || ''} ${animated ? 'animate' : ''}`;
    
    return (
    <button
      style={{background: dark ? '#333333' :'#1844DF'}}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
