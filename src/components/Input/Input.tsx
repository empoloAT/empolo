import classNames from "classnames";
import { FunctionComponent } from "react";
import { useController } from "react-hook-form";

import styles from "./input.module.scss";

type TProps = {
  name: string;
  placeholder: string;
  control?: any;
  containerClassName?: string;
  inputType?: "opened" | "closed";
  error?: string;
  className?: string;
};

export const Input: FunctionComponent<TProps> = ({
  name,
  placeholder,
  control,
  className: propsClassName,
  containerClassName,
  inputType,
  error,
  ...props
}) => {
  const { field, fieldState, formState: {isDirty} } = useController({ name, control });

  const inputStyles = fieldState.error ? styles.inputError : styles.container;

  const inputClassName = classNames(styles.component, {
    [styles.opened]: inputType === "opened",
    [styles.closed]: inputType === "closed"
  }, propsClassName);

  return (
    <div className={classNames(inputStyles, containerClassName)}>
			{inputType === "opened" &&
        isDirty &&
          <span className={styles.placeholderActive}>
            {placeholder}
          </span>
			}
			<input
				className={inputClassName}
				placeholder={placeholder}
				{...field}
				{...props}
			/>
		</div>
  );
};
