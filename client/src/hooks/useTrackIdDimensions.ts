import { useState, useEffect } from 'react';

const useTrackIdDimensions: (id: string) => {
  height: number | undefined;
  width: number | undefined;
} = (id) => {
  const [width, setWidth] = useState<number | undefined>(0);
  const [height, setHeight] = useState<number | undefined>(0);
  useEffect(() => {
    const update = () => {
      const element = document.getElementById(id);
      const clientWidth = element?.clientWidth;
      const clientHeight = element?.clientHeight;
      setWidth(clientWidth);
      setHeight(clientHeight);
    };
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  }, [window.innerHeight, window.innerWidth]);
  return { height, width };
};

export default useTrackIdDimensions;
