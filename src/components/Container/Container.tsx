import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

import styles from "./container.module.scss";

type TProps = {
  className?: string;
  children: ReactNode;
}

export const Container: FunctionComponent<TProps> = ({ children, className: propsClassName }) => {
	return (
		<div className={classNames(styles.component, propsClassName)}>
			{children}
		</div>
	);
};
