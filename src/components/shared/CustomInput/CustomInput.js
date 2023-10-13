import React from 'react';
import './CustomInput.scss';

export const CustomInput = ({ type, placeholder, value, onChange, disabled, ...otherProps }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;

    if (onChange) {
      onChange(newValue);
    }
  };

  const inputProps = {
    type,
    placeholder,
    value,
    onChange: handleChange,
    disabled,
    ...otherProps, 
  };

  return <input className='custom-input' {...inputProps} />;
};