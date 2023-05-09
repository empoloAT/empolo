import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
  isLaptop: boolean;
  isLaptopM: boolean;
  isLaptopS: boolean;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isLaptop: false,
    isLaptopM: false,
    isLaptopS: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
          width,
          height,
          isLaptop: width <= 1024,
          isLaptopM: width <= 800,
          isLaptopS: width <= 600,
        });
      };
    
      window.addEventListener("resize", handleSize);
     
      handleSize();
    
      return () => window.removeEventListener("resize", handleSize);
    }
  }, [windowSize.isLaptop, windowSize.isLaptopS, windowSize.isLaptopM]);

  return windowSize;
};
