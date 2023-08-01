import React, { useEffect, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import UploadedImage from './UploadedImage';
import placeholderImage from '../../../assets/images/add-blog-post.jpg';
// import { ReactComponent as JpgIcon } from '../../assets/icons/jpg-icon.svg';
import { FormFile } from '../../../types/types';
import DeleteButton from './DeleteButton';

interface ImageControlProps {
  handleRemoveImage?: (i: number) => void;
  // thumbnail
  index?: number;
  initial?: string;
  className?: string;
  returnFormFile?: (file: FormFile) => void;
  register: UseFormRegister<FieldValues>;
  registerName: string;
  errors?: any;
  tabIndex?: number;
}

function ImageControl({
  index,
  className,
  initial,
  handleRemoveImage,
  returnFormFile,
  register,
  registerName,
  errors,
  tabIndex,
}: ImageControlProps) {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setShow(true);
  });

  return (
    <div className={`image-control ${show && 'show'}`}>
      <div className="buttons">
        {handleRemoveImage && (
        <DeleteButton onClick={() => handleRemoveImage(index!)} tabIndex={tabIndex} />
        )}
      </div>
      <UploadedImage
        initialImage={initial || placeholderImage}
        register={register}
        registerName={registerName}
        imageClass={className}
        returnFormFile={returnFormFile}
        errors={errors}
        tabIndex={tabIndex}
      />
    </div>
  );
}

ImageControl.defaultProps = {
  handleRemoveImage: undefined,
  returnFormFile: undefined,
  index: undefined,
  initial: undefined,
  className: '',
  errors: undefined,
  tabIndex: undefined,
};

export default ImageControl;
