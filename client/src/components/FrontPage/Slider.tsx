import React, { useState, useRef, useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import useKeyPress from '../../hooks/useKeyPress';

function FrontPageSlider() {
  const [page, setPage] = useState<number>(0);
  const rightPress = useKeyPress('ArrowRight');
  const leftPress = useKeyPress('ArrowLeft');
  const [blockActions, setBlockActions] = useState<boolean>(false);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    accessibility: false,
  };
  const headerImages = [
    'slider-image-1',
    'slider-image-2',
    'slider-image-3',
  ];
  const firstPageReached = page === 0;
  const lastPageReached = page === headerImages.length - 1;
  const tempBlock = () => {
    setBlockActions(true);
    setTimeout(() => setBlockActions(false), 1100);
  };
  const next = () => {
    if (blockActions || lastPageReached) {
      return;
    }
    setPage(page + 1);
    sliderRef.current!.slickNext();
  };
  const prev = () => {
    if (blockActions || firstPageReached) {
      return;
    }
    setPage(page - 1);
    sliderRef.current!.slickPrev();
  };
  useEffect(() => {
    tempBlock();
  }, [page]);
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
  return (
    <div className="slider">
      <div className="bg">
        <div className="fg-header">
          <h1>
            Stonehaus
          </h1>
          <h2>
            High-level design
          </h2>
          <p>
            We specialize in interior design with stone motifs. Our artisanry combined with the highest quality materials will add an air of gravitas to your home or business, inspiring you and your visitors.
          </p>
        </div>
        <Slider
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...settings}
          ref={sliderRef}
        >
          {headerImages.map((image) => (
            <div className="image-wrapper" key={image}>
              <img
                src=""
                className={`${image}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
        <div className="control-panel">
          <div className="page-numbers">
            <div className="current-page">
              0
              {page + 1}
            </div>
            <div className="divider" />
            <div className="total-pages">
              0
              {headerImages.length}
            </div>
          </div>
          <div className="scroll-bar">
            <div
              className={`scroll-bar-progress ${page === 1 && 'middle'} ${page === 2 && 'end'}`}
              id="scroll-bar-progress"
            />
            <div className="scroll-bar-empty" />
          </div>
          <div className="buttons">
            <button
              type="button"
              onClick={prev}
              className={`${(firstPageReached) && 'blocked'} arrow-left`}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              type="button"
              onClick={next}
              className={`${(lastPageReached) && 'blocked'} arrow-right`}
              id="arrow-right"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPageSlider;
