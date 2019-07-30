import * as React from 'react';

import { FieldProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';
import { handleInputKeyPress } from '../utils/handleInputKeyPress';

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

  /** Event handler on Enter key pressed. */
  onEnterKey?(value: string): void;
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
  onEnterKey,
}: InputTextProps) => {
  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.value),
    [onChange],
  );

  const handleOnKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) =>
      handleInputKeyPress<string>(
        ev,
        (element: HTMLInputElement) => element.value,
        onEnterKey,
      ),
    [onEnterKey],
  );

  return (
    <span
      className={getFieldWrapClassName({
        userClassName: className,
        uiSize,
        bordered,
        disabled,
        fixedHeight: true,
      })}
    >
      <input
        type={password ? 'password' : 'text'}
        value={value}
        className={getFieldClassName({
          bordered,
          uiSize,
          fixedHeight: true,
          noYPadding: false,
          forInput: true,
        })}
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
        onKeyPress={handleOnKeyDown}
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
