import classNames from "classnames"
import { FunctionComponent } from "react";

import styles from "./p.module.scss";

type TProps = {
  children: string;
  isText?: boolean;
  className?: string;
}

export const P: FunctionComponent<TProps> = ({
  children,
  isText,
  className: propsClassName,
  ...props
}) => {
  const componentClassName = classNames(styles.component, propsClassName);

  return isText
  ? <span className={componentClassName} {...props}>
    {children}
  </span>
  :
  <p
    className={componentClassName}
    {...props}
    dangerouslySetInnerHTML={{__html: children || ""}}
  />
};
