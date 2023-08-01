import React from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import TextControl from './TextControl';

interface EditablePageHeaderProps {
  title: string;
  snippet?: string;
  afterTitleInput?: (string: string) => void;
  afterSnippetInput?: (string: string) => void;
  register: UseFormRegister<FieldValues>,
  titleRegisterName?: string;
  titleRegisterOptions: RegisterOptions<FieldValues, any>;
  snippetRegisterName?: string;
  snippetRegisterOptions?: RegisterOptions<FieldValues, any>;
  errors: any;
}

function EditablePageHeader({
  title, snippet, afterTitleInput, afterSnippetInput, register, snippetRegisterName, titleRegisterName, titleRegisterOptions, snippetRegisterOptions, errors,
}: EditablePageHeaderProps) {
  const showSnippet = snippetRegisterName;
  return (
    <div className="page-header editor">
      <h1>
        <TextControl
          value={title}
          id="title-field"
          afterInput={afterTitleInput}
          setValueOnce
          register={register}
          registerName={titleRegisterName || 'title'}
          registerOptions={titleRegisterOptions}
          errors={errors}
        />
      </h1>
      {showSnippet && (
      <TextControl
        value={snippet!}
        id="snippet-field"
        controlStyle="paragraph"
        afterInput={afterSnippetInput}
        setValueOnce
        register={register}
        registerName={snippetRegisterName || 'snippet'}
        registerOptions={snippetRegisterOptions}
        errors={errors}
      />
      )}
    </div>
  );
}

EditablePageHeader.defaultProps = {
  snippet: '',
  titleRegisterName: '',
  snippetRegisterName: '',
  afterTitleInput: undefined,
  afterSnippetInput: undefined,
  snippetRegisterOptions: undefined,
};

export default EditablePageHeader;
