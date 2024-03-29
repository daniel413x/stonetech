import { useState, useEffect } from 'react';
import useTrackIdDimensions from './useTrackIdDimensions';

const useWindowScrollLimit: (pageLimitReached?: boolean) => boolean = (pageLimitReached) => {
  const { height: footerHeight } = useTrackIdDimensions('footer');
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
  }, [document.documentElement.scrollHeight, window.innerHeight, window.pageYOffset, footerHeight, pageLimitReached]);
  return reachedLimit;
};

export default useWindowScrollLimit;
