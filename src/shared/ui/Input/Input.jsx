import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500';
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';
  
  const classes = [baseClasses, disabledClasses, className].join(' ');

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={classes}
      {...props}
    />
  );
};

export default Input; 