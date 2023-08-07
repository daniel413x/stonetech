import React from 'react';
import { v4 as uuid } from 'uuid';
import TextControl from '../TextControl';
import { ReactComponent as CloseIcon } from '../../../../assets/icons/close.svg';
import Button from '../../Button';

interface EditableProjectInfoProps {
  index: number;
  value: string;
  infoKey: string;
  handleChangeProjectInfo: (textContent: string, index: number, keyOrValue: 0 | 1) => void;
  handleRemoveProjectInfo: (i: number) => void;
}

function EditableProjectInfo({
  index,
  value,
  infoKey,
  handleChangeProjectInfo,
  handleRemoveProjectInfo,
}: EditableProjectInfoProps) {
  const handleChangeKey = (textContent: string) => handleChangeProjectInfo(textContent, index, 0);
  const handleChangeValue = (textContent: string) => handleChangeProjectInfo(textContent, index, 1);
  return (
    <>
      <div className="key">
        <TextControl value={infoKey} afterInput={handleChangeKey} id={uuid()} setValueOnce />
      </div>
      <div className="divider">
        {' '}
      </div>
      <div className="value">
        <TextControl value={value} afterInput={handleChangeValue} id={uuid()} setValueOnce />
      </div>
      <Button
        onClick={() => handleRemoveProjectInfo(index)}
        className="remove-info-button"
      >
        <CloseIcon />
      </Button>

    </>
  );
}

export default EditableProjectInfo;
