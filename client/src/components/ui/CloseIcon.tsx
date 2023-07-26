import React from 'react';
// import { ReactComponent as JpgIcon } from '../../assets/icons/jpg-icon.svg';
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg';
import Button from './Button';

interface CloseIconProps {
  onClick: (...args: any[]) => void;
  tabIndex?: number;
}

function CloseIcon({
  onClick,
  tabIndex,
}: CloseIconProps) {
  return (
    <Button
      className="delete-button"
      title="Delete"
      buttonStyle="icon-button"
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <CloseSvg
        className="icon"
      />
    </Button>
  );
}

CloseIcon.defaultProps = {
  tabIndex: undefined,
};

export default CloseIcon;
