import { useState, useEffect } from 'react';

const useTrackDimensions: () => {
  height: number | undefined;
  width: number | undefined;
} = () => {
  const [height, setHeight] = useState<number | undefined>(477);
  const [width, setWidth] = useState<number | undefined>(0);
  useEffect(() => {
    const update = () => {
      const clientHeight = window.innerHeight || 0;
      const clientWidth = window.innerWidth || 0;
      setHeight(clientHeight);
      setWidth(clientWidth);
    };
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  }, [window.innerHeight, window.innerWidth]);
  return { height, width };
};

export default useTrackDimensions;
