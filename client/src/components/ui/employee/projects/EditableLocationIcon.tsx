import React from 'react';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import TextControl from '../TextControl';

interface EditableLocationIconProps {
  location: string;
  setLocation: (string: string) => void;
  register: UseFormRegister<FieldValues>;
  errors: any;
}

function EditableLocationIcon({
  location, setLocation, register, errors,
}: EditableLocationIconProps) {
  return (
    <div className={`location-icon ${errors.location && 'error'}`}>
      <FontAwesomeIcon className="icon" icon={faLocationPin} />
      <span className="text">
        <TextControl
          afterInput={(input) => setLocation(input)}
          setValueOnce
          id="location-field"
          value={location}
          register={register}
          registerName="location"
          registerOptions={{ required: 'Required' }}
        />
      </span>
    </div>
  );
}

export default EditableLocationIcon;
