import * as React from 'react';

import { FieldProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';

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
}

/** Input field for number. */
export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  className,
  disabled,

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
}: InputNumberProps) => (
  <span className={getFieldWrapClassName(className, bordered, disabled, true)}>
    <input
      value={value}
      type="number"
      className={getFieldClassName(bordered, true, 'text-right')}
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
      onChange={({ currentTarget }) =>
        onChange && onChange(currentTarget.valueAsNumber)
      }
    />
  </span>
);

InputNumber.displayName = 'InputNumber';

InputNumber.defaultProps = {
  value: 0,
  min: -Infinity,
  max: Infinity,
  className: '',
  disabled: false,
  bordered: true,
};
