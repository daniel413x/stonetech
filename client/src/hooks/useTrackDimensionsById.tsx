import { useState, useEffect } from 'react';

const useTrackDimensionsById: (id: string) => number | undefined = (id) => {
  const [height, setHeight] = useState<number | undefined>(477);
  useEffect(() => {
    const update = () => {
      const element = document.getElementById(id);
      const clientHeight = element?.clientHeight;
      setHeight(clientHeight);
    };
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, [window.innerHeight]);
  return height;
};

export default useTrackDimensionsById;
