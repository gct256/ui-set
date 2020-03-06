import * as React from 'react';

import { FieldProps, SizedUiProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';
import { handleInputKeyDown } from '../utils/handleInputKeyDown';
import { handleInputKeyPress } from '../utils/handleInputKeyPress';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

type InputTextProps = SizedUiProps &
  FieldProps<string> & {
    /** If true, field has 1px border. */
    bordered?: boolean;
    /** If true, use type=password. */
    password?: boolean;
    /** ClassName for element. */
    elementClassName?: string;

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
    /** Event handler on Key down. */
    onKeyDown?(
      key: string,
      value: string,
      ev: React.KeyboardEvent<HTMLInputElement>,
    ): void;
  };

/** Input file for text. */
export const InputText: React.FC<InputTextProps> = ({
  value,
  className,
  disabled,
  uiSize,

  bordered,
  password,
  elementClassName,

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
  onKeyDown,
}: InputTextProps) => {
  const handleOnFocus = React.useCallback(
    (ev) => {
      startAnimation(
        ev.currentTarget,
        bordered ? animations.focusAnimation : animations.focusAnimationBorder,
      );
    },
    [bordered],
  );

  const handleOnBlur = React.useCallback(
    (ev) => removeAllAnimations(ev.currentTarget),
    [],
  );

  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.value),
    [onChange],
  );

  const handleOnKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) =>
      handleInputKeyDown<string, HTMLInputElement>(
        ev,
        (element: HTMLInputElement) => element.value,
        onKeyDown,
      ),
    [onKeyDown],
  );

  const handleOnKeyPress = React.useCallback(
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
          uiSize,
          fixedHeight: true,
          noYPadding: false,
          forInput: true,
          userClassName: elementClassName,
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
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        onKeyPress={handleOnKeyPress}
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
