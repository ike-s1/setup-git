import React from 'react';
import './CustomSelect.scss';

export const CustomSelect = ({ value, onChange, disabled, options, ...otherProps }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;

    if (onChange) {
      onChange(newValue);
    }
  };

    return (
      <select className='custom-select' value={value} onChange={handleChange} disabled={disabled} {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
