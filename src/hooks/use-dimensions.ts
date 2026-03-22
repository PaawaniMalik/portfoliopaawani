import { RefObject, useEffect, useState } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const useDimensions = <T extends HTMLElement>(
  ref: RefObject<T>
): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateDimensions = () => {
      setDimensions({
        width: element.clientWidth,
        height: element.clientHeight,
      });
    };

    updateDimensions();

    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return dimensions;
};
