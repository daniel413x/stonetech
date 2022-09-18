/* eslint-disable */

import React, { useState, useRef, useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import useKeyPress from '../../hooks/useKeyPress';
import { ReactComponent as TriangleRight } from '../../assets/triangle-right.svg';
import useTrackDimensions from '../../hooks/useTrackDimensions';
import List from '../List';
import useInterval from '../../hooks/useInterval';

interface ProjectSliderProps {
  images: string[];
}

function ProjectSlider({ images }: ProjectSliderProps) {
  const [selected, setSelected] = useState<number>(0);
  const rightPress = useKeyPress('ArrowRight');
  const leftPress = useKeyPress('ArrowLeft');
  const [blockActions, setBlockActions] = useState<boolean>(false);
  const [showScrollButtons, setShowScrollButtons] = useState<boolean>(false);
  const [isScrollingLeft, setIsScrollingLeft] = useState<boolean>(false);
  const [isScrollingRight, setIsScrollingRight] = useState<boolean>(false);
  const sliderRef = useRef<Slider>(null);
  const thumbnailsRef = useRef<HTMLUListElement>(null);
  const scrollLeft = () => {
    thumbnailsRef.current!.scrollLeft -= 1;
  };
  const scrollRight = () => {
    thumbnailsRef.current!.scrollLeft += 1;
  };
  useInterval(() => scrollLeft(), isScrollingLeft, 5);
  useInterval(() => scrollRight(), isScrollingRight, 5);
  const { width: thumbnailsWidth } = useTrackDimensions(thumbnailsRef);
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
  const lastSlideReached = selected === images.length - 1;
  const selectSlide = (index: number) => {
    if (blockActions) {
      return;
    }
    setSelected(index)
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
  }, [thumbnailsWidth]);
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
  return (
    <div className="slider">
      <Slider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
        ref={sliderRef}
      >
        {images.map((image, i) => (
          <img
            key={`${image}${i}`}
            src={`${process.env.REACT_APP_API_URL}${image}`}
            className="cover-image"
            alt=""
          />
        ))}
      </Slider>
      <div className="thumbnails-wrapper">
        <ul className="thumbnails" ref={thumbnailsRef}>
          {images.map((image, i) => (
            <li key={`${image}${i}`}>
          <button onClick={() => selectSlide(i!)} key={`${image}${i! + 1}`}>
            <img
              src={`${process.env.REACT_APP_API_URL}${image}`}
              alt=""
              className={`thumbnail ${i === selected ? 'selected' : undefined}`}
            />
          </button>
          </li>
          ))}
        </ul>
        <button className={`scroll-button left ${showScrollButtons && 'shown'}`} onMouseDown={() => setIsScrollingLeft(true)}
        onMouseUp={() => setIsScrollingLeft(false)}>
          <TriangleRight
            className="icon"
          />
        </button>
        <button className={`scroll-button right ${showScrollButtons && 'shown'}`} onMouseDown={() => setIsScrollingRight(true)}
        onMouseUp={() => setIsScrollingRight(false)}
        >
          <TriangleRight
            className="icon"
          />
        </button>
        </div>
    </div>
  );
}

export default ProjectSlider;
