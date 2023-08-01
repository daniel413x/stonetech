import React from 'react';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';
import Button from '../Button';

interface DeleteButtonProps {
  onClick: (...args: any[]) => void;
  tabIndex?: number;
}

function DeleteButton({
  onClick,
  tabIndex,
}: DeleteButtonProps) {
  return (
    <Button
      className="delete-button"
      title="Delete"
      buttonStyle="icon-button"
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <Trash
        className="icon"
      />
    </Button>
  );
}

DeleteButton.defaultProps = {
  tabIndex: undefined,
};

export default DeleteButton;
