import React, {
  FormEvent,
} from 'react';
import { v4 as uuid } from 'uuid';

interface DynamicSpanProps {
  // onBlur: () => void;
  // onFocus: () => void;
  id?: string;
  onInput: (e: FormEvent) => void;
  value: string;
}

function DynamicSpan({
  // onBlur,
  // onFocus,
  id,
  onInput,
  value,
}: DynamicSpanProps) {
  return (
    <span
      suppressContentEditableWarning
      contentEditable
      onInput={onInput}
      // onFocus={onFocus}
      // onBlur={onBlur}
      id={id || uuid()}
      className="dynamic-span"
    >
      {value}
    </span>
  );
}

DynamicSpan.defaultProps = {
  id: '',
};

export default DynamicSpan;
