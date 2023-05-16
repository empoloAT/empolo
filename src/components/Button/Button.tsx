import classNames from "classnames";
import { golos } from "styles/fonts/golos";
import { 
  ReactNode,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
 } from "react";

import styles from "./button.module.scss";

type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type Props = {
  children?: ReactNode;
  size?: "s" | "m" | "l" | "r" | "none";
  className?: string;
} & HTMLButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>(({
  children,
  size,
  className: propsClassName,
  ...props
}, ref) => {
  const buttonSize = classNames({
    [styles.sizeS]: size === "s",
    [styles.sizeM]: size === "m",
    [styles.sizeL]: size === "l",
    [styles.sizeReg]: size === "r",
    [styles.sizeNone]: size === "none",
  });

  const buttonClassName = classNames(
    styles.component,
    buttonSize,
    golos.className,
    propsClassName
  );

  return (
    <button
      className={buttonClassName}
      {...props}
      {...ref}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
