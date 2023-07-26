import { observer } from 'mobx-react-lite';
import React, { ChangeEvent } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
  input: string;
  setInput: (e: string) => void;
  placeholder?: string;
  textarea?: boolean;
  register?: UseFormRegister<FieldValues>,
  name?: string,
  registerOptions?: RegisterOptions<FieldValues, any>;
  errors?: any;
}

function Input({
  input,
  setInput,
  placeholder,
  textarea,
  register,
  name,
  registerOptions,
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
    />
  );
}

Input.defaultProps = {
  placeholder: '',
  textarea: undefined,
  register: undefined,
  name: '',
  registerOptions: undefined,
  errors: undefined,
};

export default observer(Input);
