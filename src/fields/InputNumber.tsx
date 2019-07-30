import * as React from 'react';

import { FieldProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';
import { handleInputKeyPress } from '../utils/handleInputKeyPress';

interface InputNumberProps extends FieldProps<number> {
  /** If true, field has 1px border. */
  bordered?: boolean;

  autocomplete?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  step?: number;

  /** Event handler on Enter key pressed. */
  onEnterKey?(): void;
}

/** Input field for number. */
export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  className,
  disabled,
  uiSize,

  bordered,
  autocomplete,
  max,
  maxLength,
  min,
  minLength,
  name,
  placeholder,
  readOnly,
  required,
  size,
  step,

  onChange,
  onEnterKey,
}: InputNumberProps) => {
  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.valueAsNumber),
    [onChange],
  );

  const handleOnKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) =>
      handleInputKeyPress<number>(
        ev,
        (element: HTMLInputElement) => element.valueAsNumber,
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
        value={value}
        type="number"
        className={getFieldClassName({
          bordered,
          uiSize,
          fixedHeight: true,
          noYPadding: false,
          forInput: true,
          otherClassName: 'text-right',
        })}
        disabled={disabled}
        autoComplete={autocomplete}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        size={size}
        step={step}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyDown}
      />
    </span>
  );
};

InputNumber.displayName = 'InputNumber';

InputNumber.defaultProps = {
  value: 0,
  min: -Infinity,
  max: Infinity,
  className: '',
  disabled: false,
  bordered: true,
};
