import { useState, useEffect } from 'react';
import useTrackDimensionsById from './useTrackDimensionsById';

const useWindowScrollLimit: (pageLimitReached?: boolean) => boolean = (pageLimitReached) => {
  const footerHeight = useTrackDimensionsById('footer');
  const [reachedLimit, setReachedLimit] = useState<boolean>(false);
  useEffect(() => {
    const update = () => {
      if (pageLimitReached) {
        return;
      }
      const { pageYOffset, innerHeight } = window;
      const { scrollHeight } = document.documentElement;
      const clientYBottom = pageYOffset + innerHeight;
      const limit = scrollHeight - (footerHeight || 477);
      if (clientYBottom > limit) {
        setReachedLimit(true);
      } else {
        setReachedLimit(false);
      }
    };
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, [document.documentElement.scrollHeight, window.innerHeight, window.pageYOffset, footerHeight]);
  return reachedLimit;
};

export default useWindowScrollLimit;
