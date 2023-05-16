import {
  useRef,
  FunctionComponent,
  ReactNode,
  MouseEvent,
  TouchEvent
} from "react";

import styles from "./scrollbar.module.scss";

type TProps = {
  children: ReactNode;
};

export const Scrollbar: FunctionComponent<TProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (divRef.current && startX.current !== null) {
      divRef.current.scrollLeft += startX.current - e.clientX;
      startX.current = e.clientX;
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    startX.current = null;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (divRef.current && startX.current !== null) {
      const touch = e.touches[0];
      divRef.current.scrollLeft += startX.current - touch.clientX;
      startX.current = touch.clientX;
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    startX.current = null;
  };

  return (
    <div
      className={styles.component}
      ref={divRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};
