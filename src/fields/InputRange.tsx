import * as React from 'react';
import classnames from 'classnames';

import { FieldProps, UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

type InputRangeProps = UiProps<HTMLInputElement> &
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
export const InputRange: React.FC<InputRangeProps> = React.forwardRef(
  (
    {
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
      onFocus,
      onBlur,
    }: InputRangeProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const handleOnFocus = React.useCallback(
      (ev: React.FocusEvent<HTMLInputElement>) => {
        startAnimation(ev.currentTarget, animations.focusAnimation);

        if (onFocus) onFocus();
      },
      [onFocus],
    );

    const handleOnBlur = React.useCallback(
      (ev: React.FocusEvent<HTMLInputElement>) => {
        removeAllAnimations(ev.currentTarget);

        if (onBlur) onBlur();
      },
      [onBlur],
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
        ref={ref}
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
  },
);

InputRange.displayName = 'InputRange';

InputRange.defaultProps = {
  value: 0,
  min: -Infinity,
  max: Infinity,
  className: '',
  disabled: false,
};
