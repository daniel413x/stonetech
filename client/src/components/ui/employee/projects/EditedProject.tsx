import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ProjectInGallery } from '../../../../types/types';
import TextControl from '../TextControl';

type EditedProjectProps = Pick<ProjectInGallery, 'thumbnail' | 'galleryTitle' | 'client'> & {
  setGalleryTitle: (string: string) => void;
  setClient: (string: string) => void;
  register: UseFormRegister<FieldValues>;
  errors: any;
};

function EditedProject({
  thumbnail, galleryTitle, client, setClient, setGalleryTitle, register, errors,
}: EditedProjectProps) {
  return (
    <div className="gallery-project edited show sm">
      <div className="overlay">
        <TextControl
          className="client"
          afterInput={(input) => setClient(input)}
          setValueOnce
          id="client-field"
          value={client}
          register={register}
          registerName="client"
          registerOptions={{ required: 'Required' }}
          errors={errors}
        />
        <TextControl
          className="name"
          afterInput={(input) => setGalleryTitle(input)}
          setValueOnce
          id="gallery-title-field"
          value={galleryTitle}
          register={register}
          registerName="galleryTitle"
          registerOptions={{ required: 'Required' }}
          errors={errors}
        />
        <span
          className="read-more"
        >
          Read more
        </span>
      </div>
      <img
        src={thumbnail}
        alt={galleryTitle}
      />
    </div>
  );
}

export default EditedProject;
