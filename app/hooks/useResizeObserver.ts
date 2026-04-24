import { useEffect, useRef, useState } from 'react';

const useResizeObserver = () => {
  const [current, setCurrent] = useState();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const observer: any = useRef(null);
  let resizing = false;

  useEffect(() => {
    // if we are already observing old element
    if (shouldUnobserve()) {
      observer.current.unobserve(current);
    }

    if (!observer.current) {
      observer.current = new ResizeObserver(handleResize);
    }

    if (current) {
      observer.current.observe(current);
    }

    return () => {
      if (shouldUnobserve()) {
        observer.current.unobserve(current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function handleResize(entries: any) {
    window.requestAnimationFrame(() => {
      if (resizing) {
        return;
      }

      resizing = true;

      const target = entries[0].target;
      const newWidth = target.clientWidth;
      const newHeight = target.clientHeight;
      const newX = target.getBoundingClientRect().x;
      const newY = target.getBoundingClientRect().y;

      if (newWidth !== dimensions.width || newHeight !== dimensions.height) {
        setDimensions({ width: newWidth, height: newHeight, x: newX, y: newY });
      }

      resizing = false;
    });
  }

  function shouldUnobserve() {
    return observer && observer.current && current;
  }

  const observeResize = (element: any) => {
    if (element) {
      setCurrent(element);
    }
  };

  return [observeResize, dimensions];
};

export default useResizeObserver;
