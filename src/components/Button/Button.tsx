import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./button.module.scss";

type Props = {
  children?: ReactNode;
  size?: "s" | "m" | "l";
  className?: string;
};

export const Button = ({
  children,
  size,
  className: propsClassName,
  ...props
}) => {
  const buttonSize = classNames({
    [styles.sizeS]: size === "s",
    [styles.sizeM]: size === "m",
    [styles.sizeL]: size === "l",
  });

  const buttonClassName = classNames(
    styles.component,
    buttonSize,
    propsClassName
  );

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
