import * as React from 'react';

import { FieldProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';

type InputTextAreaProps = FieldProps<string> & {
  /** If true, field has 1px border. */
  bordered?: boolean;

  /** Row count for element height. */
  row?: number;

  autocomplete?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
};

/** Input field for long text. */
export const InputTextArea: React.FC<InputTextAreaProps> = ({
  value,
  className,
  disabled,
  uiSize,

  bordered,
  row,

  autocomplete,
  maxLength,
  minLength,
  name,
  placeholder,
  readOnly,
  required,

  onChange,
}: InputTextAreaProps) => {
  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.value),
    [onChange],
  );

  const style: React.CSSProperties = {};

  if (typeof row === 'number' && Number.isFinite(row) && row > 0) {
    style.height = `${row * 1.5}em`; // leading-normal === line-height: 1.5
  }

  return (
    <span
      className={getFieldWrapClassName({
        userClassName: className,
        uiSize,
        bordered,
        disabled,
        fixedHeight: false,
      })}
    >
      <textarea
        value={value}
        disabled={disabled}
        style={style}
        className={getFieldClassName({
          bordered,
          uiSize,
          fixedHeight: false,
          noYPadding: false,
          forInput: true,
          otherClassName: 'h-full resize-none leading-normal',
        })}
        autoComplete={autocomplete}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        onChange={handleOnChange}
      />
    </span>
  );
};

InputTextArea.displayName = 'InputTextArea';

InputTextArea.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  bordered: true,
};
