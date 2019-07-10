import * as React from 'react';

import { FieldProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';

interface InputTextProps extends FieldProps<string> {
  /** If true, field has 1px border. */
  bordered?: boolean;
  /** If true, use type=password. */
  password?: boolean;

  autocomplete?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
}

/** Input file for text. */
export const InputText: React.FC<InputTextProps> = ({
  value,
  className,
  disabled,
  uiSize,

  bordered,
  password,
  autocomplete,
  maxLength,
  minLength,
  name,
  pattern,
  placeholder,
  readOnly,
  required,
  size,

  onChange,
}: InputTextProps) => {
  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.value),
    [onChange],
  );

  return (
    <span
      className={getFieldWrapClassName(
        className,
        uiSize,
        bordered,
        disabled,
        true,
      )}
    >
      <input
        type={password ? 'password' : 'text'}
        value={value}
        className={getFieldClassName(bordered, uiSize, true, false)}
        disabled={disabled}
        autoComplete={autocomplete}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        size={size}
        onChange={handleOnChange}
      />
    </span>
  );
};

InputText.displayName = 'InputText';

InputText.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  bordered: true,
  password: false,
};
