import React, {
  FormEvent, useEffect, useState,
} from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import DynamicSpan from './DynamicSpan';
import Button from '../Button';
import { selectEnd } from '../../../utils/functions';

interface TextControlProps {
  id?: string;
  afterInput?: (string: string) => void;
  value: string;
  className?: string;
  controlStyle?: 'paragraph';
  setValueOnce?: boolean;
  register?: UseFormRegister<FieldValues>;
  registerName?: string;
  registerOptions?: RegisterOptions<FieldValues, any>;
  errors?: any;
}

function TextControl({
  id,
  afterInput,
  value,
  register,
  className,
  controlStyle,
  setValueOnce,
  registerOptions,
  registerName,
  errors,
}: TextControlProps) {
  // const [focused, setFocused] = useState<boolean>(false);
  const [stopSettingValue, setStopSettingValue] = useState<boolean>(false);
  const [input, setInput] = useState<string>(value || '');
  const generateSpan = (newValue: string) => (
    <DynamicSpan
      value={newValue}
      onInput={(e: FormEvent) => {
        // don't call afterInput here — stale closure
        setInput(e.currentTarget.textContent!);
      }}
      id={id}
      // onFocus={() => setFocused(true)}
      // onBlur={() => setFocused(false)}
    />
  );
  const [span, setSpan] = useState(generateSpan(value));
  useEffect(() => {
    if (setValueOnce && !stopSettingValue) {
      setStopSettingValue(true);
    }
    if (!stopSettingValue) {
      setInput(value);
      setSpan(generateSpan(value || ''));
    }
  }, [value]);
  useEffect(() => {
    if (afterInput) {
      afterInput(input);
    }
  }, [input]);
  const errored = errors && errors[registerName!];
  return (
    <div className={`text-control ${className} ${controlStyle} ${errored && 'error'}`}>
      {id && (
      <Button
        className="edit-button"
        buttonStyle="icon-button"
        onClick={() => {
          const focusedField = document.getElementById(id);
          focusedField?.focus();
          selectEnd(focusedField);
        }}
      >
        <EditIcon className="icon" />
      </Button>
      )}
      {span}
      {(register) ? (
        <input
          type="hidden"
          value={input}
          {...register(registerName!, { ...registerOptions })}
        />
      ) : (
        <input
          type="hidden"
          value={input}
        />
      )}
    </div>
  );
}

TextControl.defaultProps = {
  id: undefined,
  className: '',
  controlStyle: '',
  afterInput: undefined,
  registerOptions: undefined,
  register: undefined,
  registerName: undefined,
  setValueOnce: false,
  errors: undefined,
};

export default TextControl;
