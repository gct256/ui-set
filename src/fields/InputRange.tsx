import * as React from 'react';
import classnames from 'classnames';

import { FieldProps, UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

type InputRangeProps = UiProps &
  FieldProps<number> & {
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
  };

/** Input field for number with range slider. */
export const InputRange: React.FC<InputRangeProps> = ({
  value,
  className,
  disabled,

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
}: InputRangeProps) => {
  const handleOnFocus = React.useCallback((ev) => {
    startAnimation(ev.currentTarget, animations.focusAnimation);
  }, []);

  const handleOnBlur = React.useCallback(
    (ev) => removeAllAnimations(ev.currentTarget),
    [],
  );

  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.valueAsNumber),
    [onChange],
  );

  return (
    <input
      value={value}
      type="range"
      className={classnames(
        'ui-set inline-block w-full align-top bg-transparent with-animation',
        'h-8 px-1 py-1',
        `border-2 border-transparent focus:${colors.standard.focus.border}`,
        `focus:outline-none`,
        className,
      )}
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
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
    />
  );
};

InputRange.displayName = 'InputRange';

InputRange.defaultProps = {
  value: 0,
  min: -Infinity,
  max: Infinity,
  className: '',
  disabled: false,
};
