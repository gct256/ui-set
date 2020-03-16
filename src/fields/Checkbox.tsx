import * as React from 'react';
import classnames from 'classnames';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../elements/Icon';
import { UiProps } from '../utils/commonProps';
import { getCheckboxClassName } from '../utils/getClassName';
import { colors } from '../utils/colors';
import { isEmptyReactNode } from '../utils/isEmptyReactNode';
import { canClickEmulation } from '../utils/keys';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

type CheckboxProps = UiProps<HTMLInputElement> & {
  /** HTML's id attribute. */
  htmlId?: string;
  /** If true, checked. */
  checked?: boolean;

  /**
   * Event handler on checked state changed.
   *
   * @param checked checked state.
   */
  onChange?(checked: boolean): void;

  /**
   * Event handler on focused.
   */
  onFocus?(): void;

  /**
   * Event handler on focus lost.
   */
  onBlur?(): void;
};

/** Checkbox field. */
export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  (
    {
      disabled,
      htmlId,
      checked,
      onChange,
      children,
    }: React.PropsWithChildren<CheckboxProps>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const [hover, setHover] = React.useState(false);
    const handleOnEnter = React.useCallback(() => setHover(true), []);
    const handleOnLeave = React.useCallback(() => setHover(false), []);

    const handleOnFocus = React.useCallback((ev) => {
      startAnimation(
        ev.currentTarget.parentNode,
        animations.focusAnimationBorder,
      );
    }, []);

    const handleOnBlur = React.useCallback((ev) => {
      removeAllAnimations(ev.currentTarget.parentNode);
    }, []);

    const handleOnChange = React.useCallback(
      ({ currentTarget }) => onChange && onChange(currentTarget.checked),
      [onChange],
    );
    const handleOnKeyDown = React.useCallback(
      (ev) => {
        if (canClickEmulation(ev)) {
          if (onChange) onChange(!checked);
        }
      },
      [onChange],
    );

    return (
      <label
        htmlFor={htmlId}
        className={getCheckboxClassName({ disabled })}
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
      >
        <span
          className={classnames(
            'border-2 w-4 h-4 flex justify-center items-center',
            {
              'mr-1': !isEmptyReactNode(children),
              [colors.standard.normal.bg]: !disabled,
              [colors.standard.disabled.bg]: disabled,
              [colors.standard.hover.border]: !disabled && hover,
              [colors.standard.normal.border]: !disabled,
              [colors.standard.disabled.border]: disabled,
            },
          )}
        >
          <Icon
            icon={checked ? faCheck : undefined}
            transform="shrink-5"
            className={classnames({
              [colors.standard.normal.text]: !disabled && !hover,
              [colors.standard.hover.text]: !disabled && hover,
              [colors.standard.disabled.text]: disabled,
            })}
          />
        </span>
        <input
          id={htmlId}
          className="appearance-none"
          ref={ref}
          type="checkbox"
          disabled={disabled}
          checked={!!checked}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
        {children}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
