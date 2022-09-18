import { useEffect, useLayoutEffect, useRef } from 'react';

const useInterval: (callback: () => void, active: boolean, speed?: number, speedRange?: number) => void = (callback, active, speed = 1, speedRange = 10) => {
  const savedCallback = useRef(callback);
  const intervalIdRef = useRef<any>(null);
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    clearInterval(intervalIdRef.current);
    if (!active) {
      return;
    }
    intervalIdRef.current = setInterval(
      () => savedCallback.current(),
      speedRange / speed,
    );
    // eslint-disable-next-line consistent-return
    return () => clearInterval(intervalIdRef.current);
  }, [active, speed, speedRange]);
};

export default useInterval;
