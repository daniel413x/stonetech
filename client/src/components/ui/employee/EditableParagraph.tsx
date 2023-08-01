import React from 'react';
import TextControl from './TextControl';
import { BodyInEditor } from '../../../types/types';
import DeleteButton from './DeleteButton';

interface EditableParagraphProps {
  content: string;
  index: number;
  body: BodyInEditor;
  setBody: (arr: BodyInEditor) => void;
  handleRemoveParagraph: (i: number) => void;
}

function EditableParagraph({
  content,
  body,
  index,
  setBody,
  handleRemoveParagraph,
}: EditableParagraphProps) {
  const handleSetBody = (string: string) => {
    const newBody = [...body];
    newBody[index] = string;
    setBody(newBody);
  };
  return (
    <div className="editable-paragraph">
      <DeleteButton onClick={() => handleRemoveParagraph(index!)} />
      <TextControl
        value={content}
        afterInput={handleSetBody}
        id={`paragraph-${index}`}
        controlStyle="paragraph"
        setValueOnce
      />
    </div>
  );
}

export default EditableParagraph;
