import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick: (...args: any[]) => void;
}

function Button({
  label,
  type,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`button ${className}`}
    // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
