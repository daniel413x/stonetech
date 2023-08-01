import React, {
  useState, useEffect, ChangeEvent, useRef, useContext,
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormFile } from '../../../types/types';
import { getFilename, isValidImageType } from '../../../utils/functions';
import Context from '../../../context/context';

export interface UploadedImageProps {
  buttonClass?: string;
  imageClass?: string;
  initialImage?: string;
  pressedSubmit?: boolean;
  setPressedSubmit?: (param: boolean) => void;
  id?: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
  errors?: any;
  returnFormFile?: (file: FormFile) => void;
  tabIndex?: number;
}

function UploadedImage({
  imageClass,
  buttonClass,
  initialImage,
  id,
  tabIndex,
  register,
  registerName,
  errors,
  returnFormFile,
}: UploadedImageProps) {
  const {
    modal,
  } = useContext(Context);
  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource>();
  const [preview, setPreview] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const file = e.target?.files[0];
    if (!isValidImageType(file)) {
      modal.setErrorModalMessage('Image must be a jpeg or png');
      return;
    }
    setSelectedFile(file);
  };
  useEffect(() => setPreview(initialImage || ''), [initialImage]);
  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const url = URL.createObjectURL(selectedFile);
    setPreview(url);
    if (returnFormFile) {
      const filename = getFilename(registerName, selectedFile as File);
      const formFile: FormFile = {
        url,
        filename,
        file: selectedFile as File,
      };
      returnFormFile(formFile);
    }
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [selectedFile]);
  const errored = errors && errors[registerName];
  return (
    <button
      className={`button-overlay preview ${buttonClass} ${errored && 'error'}`}
      type="button"
      onClick={() => inputRef.current?.click()}
      tabIndex={tabIndex}
    >
      <img
        src={preview}
        alt="Uploaded file"
        className={`preview ${imageClass}`}
      />
      <input
        id={id}
        type="file"
        className="replace-image-input hidden"
        // multiple={multiple}
        {...register(registerName)}
        onChange={selectFile}
        ref={inputRef}
      />
    </button>
  );
}

UploadedImage.defaultProps = {
  id: '',
  imageClass: '',
  buttonClass: '',
  initialImage: '',
  pressedSubmit: false,
  setPressedSubmit: false,
  errors: undefined,
  returnFormFile: undefined,
  tabIndex: undefined,
};

export default UploadedImage;
