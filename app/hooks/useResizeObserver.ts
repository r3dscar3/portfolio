import { useCallback, useEffect, useRef, useState } from 'react';

type Dimensions = { width: number; height: number; x: number; y: number };
type ObserveResize = (element: HTMLElement | null) => void;

const useResizeObserver = (): [Dimensions, ObserveResize] => {
  const [current, setCurrent] = useState<HTMLElement | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0, x: 0, y: 0 });
  const observer = useRef<ResizeObserver | null>(null);
  const isResizing = useRef(false);
  const prevDimensions = useRef<Dimensions>({ width: 0, height: 0, x: 0, y: 0 });

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    window.requestAnimationFrame(() => {
      if (isResizing.current) return;
      isResizing.current = true;

      const target = entries[0].target;
      const { x, y } = target.getBoundingClientRect();
      const newDimensions: Dimensions = {
        width: target.clientWidth,
        height: target.clientHeight,
        x,
        y,
      };

      const prev = prevDimensions.current;
      if (newDimensions.width !== prev.width || newDimensions.height !== prev.height) {
        prevDimensions.current = newDimensions;
        setDimensions(newDimensions);
      }

      isResizing.current = false;
    });
  }, []);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new ResizeObserver(handleResize);
    }
    if (current) {
      observer.current.observe(current);
    }
    return () => {
      if (observer.current && current) {
        observer.current.unobserve(current);
      }
    };
  }, [current, handleResize]);

  const observeResize = useCallback((element: HTMLElement | null) => {
    setCurrent(element);
  }, []);

  return [dimensions, observeResize];
};

export default useResizeObserver;
