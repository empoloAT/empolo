import classNames from "classnames";
import { golos } from "styles/fonts/golos";
import { useController } from "react-hook-form";
import { FunctionComponent } from "react";

import styles from "./textarea.module.scss";


type TProps = {
  name: string;
  placeholder?: string;
  control?: any;
  containerClassName?: string;
  className?: string;
  value?: string;
};

export const Textarea: FunctionComponent<TProps> = ({
  name,
  placeholder,
  className: propsClassName,
  containerClassName,
  value: propsValue,
  control,
  ...props
}) => {
  const { field, fieldState, formState: {isDirty} } = useController({ name, control });
  
  const inputStyles = fieldState.error ? styles.inputError : styles.container;

  const textareaValue = propsValue ? propsValue : field.value;
  const textareaClassName = classNames(styles.component, golos.className);

  return (
    <div className={classNames(inputStyles, containerClassName)}>
      {isDirty &&
        <span className={styles.placeholderActive}>
          {placeholder}
        </span>
      }
      <textarea
        name={field.name}
        className={textareaClassName}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={textareaValue}
        {...props}
      />
    </div>
  );
};
