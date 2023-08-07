import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import useKeyPress from '../../../hooks/useKeyPress';
import { ReactComponent as TriangleRight } from '../../../assets/icons/triangle-right.svg';
import useTrackRefDimensions from '../../../hooks/useTrackRefDimensions';
import useActiveElement from '../../../hooks/useActiveElement';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';
import { ReactComponent as SelectThumbnailIcon } from '../../../assets/icons/select-thumbnail-icon.svg';
import { ReactComponent as CheckmarkIcon } from '../../../assets/icons/checkmark.svg';
import useInterval from '../../../hooks/useInterval';
import ImageControl from '../employee/ImageControl';
import newSliderImageJpg from '../../../assets/images/new-slider-image.jpg';
import Button from '../Button';
import { FormFile } from '../../../types/types';

interface ProjectSliderProps {
  images?: string[];
  editorImages?: FormFile[];
  handleAddImage?: () => void;
  handleRemoveImage?: (i: number) => void;
  handleSelectThumbnail?: (i: number) => void;
  editedProjectId?: string;
  selectedThumbnail?: number;
  handleChangeImage?: (file: FormFile, index: number) => void;
  register?: UseFormRegister<FieldValues>;
}

function ProjectSlider({
  images, handleAddImage, handleRemoveImage, handleSelectThumbnail, selectedThumbnail, handleChangeImage, register, editorImages,
}: ProjectSliderProps) {
  const imagesLen = (images || editorImages)!.length;
  const editorMode = handleAddImage;
  const [selected, setSelected] = useState<number>(0);
  const rightPress = useKeyPress('ArrowRight');
  const leftPress = useKeyPress('ArrowLeft');
  const [blockActions, setBlockActions] = useState<boolean>(false);
  const [showScrollButtons, setShowScrollButtons] = useState<boolean>(false);
  const [isScrollingLeft, setIsScrollingLeft] = useState<boolean>(false);
  const [isScrollingRight, setIsScrollingRight] = useState<boolean>(false);
  const sliderRef = useRef<Slider>(null);
  const thumbnailsRef = useRef<HTMLUListElement>(null);
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);
  const scrollLeft = () => {
    thumbnailsRef.current!.scrollLeft -= 1;
  };
  const scrollRight = () => {
    thumbnailsRef.current!.scrollLeft += 1;
  };
  const enterPress = useKeyPress('Enter');
  const activeElement = useActiveElement();
  useEffect(() => {
    if (enterPress && activeElement === leftArrowRef.current) {
      setIsScrollingLeft(true);
    } else {
      setIsScrollingLeft(false);
    }
    if (enterPress && activeElement === rightArrowRef.current) {
      setIsScrollingRight(true);
    } else {
      setIsScrollingRight(false);
    }
  }, [enterPress]);
  useInterval(() => scrollLeft(), isScrollingLeft, 5);
  useInterval(() => scrollRight(), isScrollingRight, 5);
  const { width: thumbnailsWidth } = useTrackRefDimensions(thumbnailsRef);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    accessibility: false,
  };
  const thumbnails: any = document.getElementsByClassName('thumbnail');
  const firstSlideReached = selected === 0;
  const lastSlideReached = selected === imagesLen - 1;
  const selectSlide = (index: number) => {
    if (blockActions) {
      return;
    }
    setSelected(index);
    sliderRef.current!.slickGoTo(index);
  };
  const tempBlock = () => {
    setBlockActions(true);
    const unblock = setTimeout(() => setBlockActions(false), 1100);
    return () => clearTimeout(unblock);
  };
  const next = () => {
    if (blockActions || lastSlideReached) {
      return;
    }
    let sumThumbnailsWidth: number = 0;
    for (let i = 0; i <= selected + 1; i += 1) {
      sumThumbnailsWidth += thumbnails[i].offsetWidth;
    }
    if (sumThumbnailsWidth > thumbnailsWidth!) {
      thumbnailsRef.current!.scrollLeft = sumThumbnailsWidth - 284;
    }
    setSelected(selected + 1);
    sliderRef.current!.slickNext();
  };
  const prev = () => {
    if (blockActions || firstSlideReached) {
      return;
    }
    let sumThumbnailsWidth: number = 0;
    for (let i = 0; i < selected - 1; i += 1) {
      sumThumbnailsWidth += thumbnails[i].offsetWidth;
    }
    if (sumThumbnailsWidth < thumbnailsRef.current!.scrollWidth - thumbnailsRef.current!.scrollLeft) {
      thumbnailsRef.current!.scrollLeft = sumThumbnailsWidth;
    }
    setSelected(selected - 1);
    sliderRef.current!.slickPrev();
  };
  useEffect(() => {
    let sumThumbnailsWidth: number = 0;
    for (let i = 0; i < thumbnails.length; i += 1) {
      sumThumbnailsWidth += thumbnails[i].offsetWidth;
    }
    if (sumThumbnailsWidth >= thumbnailsWidth!) {
      setShowScrollButtons(true);
    } else {
      setShowScrollButtons(false);
    }
  }, [thumbnailsWidth, imagesLen]);
  useEffect(() => {
    tempBlock();
  }, [selected]);
  useEffect(() => {
    if (leftPress) {
      prev();
    }
  }, [leftPress]);
  useEffect(() => {
    if (rightPress) {
      next();
    }
  }, [rightPress]);
  useEffect(() => tempBlock(), [selected]);
  const handleAddImageAndSelectLast = () => {
    handleAddImage!();
    selectSlide(imagesLen);
  };
  return (
    <div className={`slider ${imagesLen < 2 && 'correct-width'}`}>
      <div className="buttons">
        {handleSelectThumbnail && (
        <Button
          className="make-thumbnail-button"
          title="Make thumbnail"
          buttonStyle="icon-button"
          disabled={imagesLen < 2}
          onClick={() => {
            handleSelectThumbnail(selected);
          }}
        >
          <SelectThumbnailIcon />
          {selectedThumbnail === selected && (
          <CheckmarkIcon
            className="checkmark-icon"
          />
          )}
        </Button>
        )}
        {handleRemoveImage && (
        <Button
          className="delete-button"
          title="Delete"
          buttonStyle="icon-button"
          disabled={imagesLen < 2}
          onClick={() => handleRemoveImage(selected)}
        >
          <Trash
            className="icon"
          />
        </Button>
        )}
      </div>
      <Slider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
        ref={sliderRef}
      >
        {editorImages?.map((img, i) => (
          <li key={i}>
            <ImageControl
              register={register!}
              registerName={img.filename}
              // eslint-disable-next-line no-nested-ternary
              initial={img.url}
              className="cover-image"
              index={i}
              returnFormFile={(bloburl) => {
                handleChangeImage!(bloburl, i);
              }}
              tabIndex={i === selected ? 0 : -1}
            />
          </li>
        ))}
        {images?.map((str, i) => (
          <li key={i}>
            <img
            // eslint-disable-next-line react/no-array-index-key
              key={`${str}${i}`}
              src={`${process.env.REACT_APP_API_URL}${str}`}
              className="cover-image"
              alt=""
            />
          </li>
        ))}
      </Slider>
      <div className="thumbnails-wrapper">
        <ul className="thumbnails" ref={thumbnailsRef}>
          {images?.map((str, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${str}${i}`}>
              <button onClick={() => selectSlide(i!)} type="button">
                <img
              // eslint-disable-next-line no-nested-ternary
                  src={editorMode ? str : `${process.env.REACT_APP_API_URL}${str}`}
                  alt=""
                  className={`thumbnail ${i === selected ? 'selected' : undefined}`}
                />
              </button>
            </li>
          ))}
          {editorImages?.map(({ filename, url }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${filename}${i}`}>
              <button onClick={() => selectSlide(i!)} type="button">
                <img
              // eslint-disable-next-line no-nested-ternary
                  src={url}
                  alt=""
                  className={`thumbnail ${i === selected ? 'selected' : undefined}`}
                />
              </button>
            </li>
          ))}
          {editorMode && (
          <li key="add-image-button">
            <button className="add-image-button" onClick={handleAddImageAndSelectLast} key="add-image-button" type="button">
              <img
                src={newSliderImageJpg}
                alt=""
                className="thumbnail"
              />
            </button>
          </li>
          )}
        </ul>
        <button
          className={`scroll-button left ${showScrollButtons && 'shown'}`}
          onMouseDown={() => setIsScrollingLeft(true)}
          onMouseUp={() => setIsScrollingLeft(false)}
          type="button"
          ref={leftArrowRef}
        >
          <TriangleRight
            className="icon"
          />
        </button>
        {imagesLen > 1
        && (
        <button
          className={`scroll-button right ${showScrollButtons && 'shown'}`}
          onMouseDown={() => setIsScrollingRight(true)}
          onMouseUp={() => setIsScrollingRight(false)}
          type="button"
          ref={rightArrowRef}
        >
          <TriangleRight
            className="icon"
          />
        </button>
        )}
      </div>
    </div>
  );
}

ProjectSlider.defaultProps = {
  handleAddImage: undefined,
  handleRemoveImage: undefined,
  editedProjectId: undefined,
  handleSelectThumbnail: undefined,
  selectedThumbnail: undefined,
  handleChangeImage: undefined,
  register: undefined,
  editorImages: undefined,
  images: undefined,
};

export default ProjectSlider;
