import React, { ButtonHTMLAttributes } from 'react';

type Styles = 'blank' | 'icon-button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: Styles;
}

function Button({
  type,
  className,
  onClick,
  children,
  buttonStyle,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`button ${className} ${buttonStyle}`}
    // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  buttonStyle: undefined,
};

export default Button;
