import React from 'react';
import { NavLink } from 'react-router-dom';

interface AnchorButtonProps {
  label: string;
  to: string;
  className?: string;
}

function AnchorButton({
  label,
  to,
  className,
}: AnchorButtonProps) {
  return (
    <NavLink className={`button ${className}`} to={to}>
      {label}
    </NavLink>
  );
}

AnchorButton.defaultProps = {
  className: '',
};

export default AnchorButton;
