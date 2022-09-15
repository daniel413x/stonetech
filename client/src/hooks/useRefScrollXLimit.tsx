import { RefObject, useState, useEffect } from 'react';

const useRefScrollXLimit: (ref: RefObject<any>, pageLimitReached?: boolean) => boolean = (ref, pageLimitReached) => {
  const [reachedLimit, setReachedLimit] = useState<boolean>(false);
  useEffect(() => {
    const update = () => {
      if (pageLimitReached) {
        return;
      }
      let scrollWidth = 1;
      let offsetWidth = 0;
      let scrollLeft = 0;
      if (ref.current) {
        scrollWidth = ref.current.scrollWidth;
        offsetWidth = ref.current.offsetWidth;
        scrollLeft = ref.current.scrollLeft;
      }
      const limit = (scrollWidth - offsetWidth);
      if (scrollLeft >= limit) {
        setReachedLimit(true);
      } else {
        setReachedLimit(false);
      }
    };
    ref.current?.addEventListener('scroll', update);
    return () => ref.current?.removeEventListener('scroll', update);
  }, [ref.current]);
  return reachedLimit;
};

export default useRefScrollXLimit;
