import { useEffect, useState } from "react";

interface IWindowSize {
  width: number;
  height: number;
};

interface UseWindowSize extends IWindowSize {
  isLaptop: boolean;
  isLaptopM: boolean;
  isLaptopS: boolean;
}

export function useWindowSize(): UseWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
          width,
          height,
        });
      };
    
      window.addEventListener("resize", handleSize);
     
      handleSize();
    
      return () => window.removeEventListener("resize", handleSize);
    }
  }, []);

  return {
    ...windowSize, 
    isLaptop: windowSize.width <= 1024,
    isLaptopM: windowSize.width <= 800,
    isLaptopS: windowSize.width <= 600,
  };
};