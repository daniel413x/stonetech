import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { BodyInEditor, FormFile } from '../../../types/types';
import EditableParagraph from './EditableParagraph';
import ImageControl from './ImageControl';

interface EditableBodyProps {
  body: BodyInEditor;
  handleChangeBodyImage: (file: FormFile, index: number) => void;
  register: UseFormRegister<FieldValues>;
  setBody: (body: BodyInEditor) => void;
  handleRemove: (i: number) => void;
}

function EditableBody({
  body,
  handleChangeBodyImage,
  register,
  setBody,
  handleRemove,
}: EditableBodyProps) {
  return (
    <ul>
      {body.map((content, i) => {
        if (typeof content === 'string') {
          return (
            <li key={i}>
              <EditableParagraph
                index={i}
                body={body}
                setBody={setBody}
                content={content}
                handleRemoveParagraph={handleRemove}
              />
            </li>
          );
        }
        return (
          <li key={i}>
            <ImageControl
              register={register}
              registerName={content.filename}
              index={i}
              initial={content.url}
              returnFormFile={(blobUrl) => handleChangeBodyImage(blobUrl, i)}
              handleRemoveImage={handleRemove}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default EditableBody;
