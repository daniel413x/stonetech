import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  input: string;
  setInput: (e: string) => void;
  textarea?: boolean;
  register?: UseFormRegister<FieldValues>,
  registerOptions?: RegisterOptions<FieldValues, any>;
  errors?: any;
}

function Input({
  input,
  setInput,
  placeholder,
  textarea,
  register,
  registerOptions,
  name,
  type,
  errors,
}: InputProps) {
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  const errored = errors && errors[name!];
  return textarea ? (
    <textarea
      className={`textarea ${errored ? 'warn' : ''}`}
      placeholder={placeholder}
      value={input}
      {...(register ? register(name!, registerOptions) : {})}
      onChange={(e) => changeTextarea(e)}
    />
  ) : (
    <input
      className={`input ${errored ? 'warn' : ''}`}
      placeholder={placeholder}
      value={input}
      {...(register ? register(name!, registerOptions) : {})}
      onChange={(e) => changeInput(e)}
      type={type}
    />
  );
}

Input.defaultProps = {
  textarea: undefined,
  register: undefined,
  registerOptions: undefined,
  errors: undefined,
};

export default observer(Input);
