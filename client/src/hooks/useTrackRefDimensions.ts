import { useState, useEffect, RefObject } from 'react';

const useTrackRefDimensions: (ref?: RefObject<any>) => {
  height: number;
  width: number;
} = (ref) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    setWidth(ref?.current?.clientWidth);
    setHeight(ref?.current?.clientHeight);
  }, [ref?.current?.clientWidth]);
  useEffect(() => {
    const update = () => {
      setWidth(ref?.current?.clientWidth);
      setHeight(ref?.current?.clientHeight);
    };
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  }, [window.innerHeight, window.innerWidth]);
  return { height, width };
};

export default useTrackRefDimensions;
