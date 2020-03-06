import * as React from 'react';

import { FieldProps, SizedUiProps } from '../utils/commonProps';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';
import { handleInputKeyDown } from '../utils/handleInputKeyDown';

type InputTextAreaProps = SizedUiProps &
  FieldProps<string> & {
    /** If true, field has 1px border. */
    bordered?: boolean;
    /** Row count for element height. */
    row?: number;
    /** ClassName for element. */
    elementClassName?: string;

    autocomplete?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;

    /** Event handler on Key down. */
    onKeyDown?(
      key: string,
      value: string,
      ev: React.KeyboardEvent<HTMLTextAreaElement>,
    ): void;
  };

/** Input field for long text. */
export const InputTextArea: React.FC<InputTextAreaProps> = ({
  value,
  className,
  disabled,
  uiSize,

  bordered,
  row,
  elementClassName,

  autocomplete,
  maxLength,
  minLength,
  name,
  placeholder,
  readOnly,
  required,

  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}: InputTextAreaProps) => {
  const handleOnFocus = React.useCallback(
    (ev: React.FocusEvent<HTMLTextAreaElement>) => {
      startAnimation(
        ev.currentTarget,
        bordered ? animations.focusAnimation : animations.focusAnimationBorder,
      );

      if (onFocus) onFocus();
    },
    [bordered, onFocus],
  );

  const handleOnBlur = React.useCallback(
    (ev: React.FocusEvent<HTMLTextAreaElement>) => {
      removeAllAnimations(ev.currentTarget);

      if (onBlur) onBlur();
    },
    [onBlur],
  );

  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.value),
    [onChange],
  );

  const handleOnKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLTextAreaElement>) =>
      handleInputKeyDown<string, HTMLTextAreaElement>(
        ev,
        (element: HTMLTextAreaElement) => element.value,
        onKeyDown,
      ),
    [onKeyDown],
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
          uiSize,
          fixedHeight: false,
          noYPadding: false,
          forInput: true,
          otherClassName: 'h-full resize-none leading-normal',
          userClassName: elementClassName,
        })}
        autoComplete={autocomplete}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
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
