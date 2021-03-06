import * as React from 'react';
import classnames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { SizedUiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';
import { UiSizeValues, getClassNameForSize } from '../utils/UiSize';
import {
  animations,
  startAnimation,
  removeAllAnimations,
} from '../utils/animations';
import { canClickEmulation } from '../utils/keys';

import { Icon } from './Icon';

type ButtonProps = SizedUiProps<HTMLButtonElement> & {
  /** Icon on button. */
  icon?: IconProp;
  /** If true, set primary style to button. */
  primary?: boolean;

  /** Event handler on button clicked. */
  onClick?(): void;
};

/** Simply button element. */
export const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      icon,
      primary,
      disabled,
      className,
      uiSize,
      onClick,
      children,
    }: React.PropsWithChildren<ButtonProps>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const iconOnly = children === undefined;
    const handleOnFocus = React.useCallback(
      (ev) => {
        startAnimation(
          ev.currentTarget,
          primary ? animations.focusAnimationWhite : animations.focusAnimation,
        );
      },
      [primary],
    );
    const handleOnBlur = React.useCallback(
      (ev) => removeAllAnimations(ev.currentTarget),
      [],
    );
    const handleOnMouseDown = React.useCallback(
      (ev) => {
        startAnimation(
          ev.currentTarget,
          primary
            ? animations.activeAnimationLight
            : animations.activeAnimation,
        );
      },
      [primary],
    );
    const handleOnKeyDown = React.useCallback(
      (ev) => {
        if (canClickEmulation(ev)) {
          startAnimation(
            ev.currentTarget,
            primary
              ? animations.activeAnimationLight
              : animations.activeAnimation,
          );

          if (onClick) onClick();
        }
      },
      [onClick],
    );

    const classNameForSize = getClassNameForSize(uiSize);

    return (
      <button
        type="button"
        className={classnames(
          className,
          'ui-set select-none inline-block align-top with-animation',
          classNameForSize.button.height,
          iconOnly ? classNameForSize.button.width : '',
          'leading-none',
          `border p-px focus:border-2 focus:p-0 focus:border-blue-500`,
          'focus:outline-none',
          {
            [colors.standard.normal.border]: !primary && !disabled,
            [colors.inverted.normal.border]: primary && !disabled,
            [`hover:${colors.standard.hover.border}`]: !primary && !disabled,
            [`hover:${colors.inverted.hover.border}`]: primary && !disabled,
            [colors.standard.disabled.border]: !primary && disabled,
            [colors.inverted.disabled.border]: primary && disabled,
          },
          {
            [colors.standard.normal.bg]: !primary && !disabled,
            [colors.inverted.normal.bg]: primary && !disabled,
            [`hover:${colors.standard.hover.bg}`]: !primary && !disabled,
            [`hover:${colors.inverted.hover.bg}`]: primary && !disabled,
            [colors.standard.disabled.bg]: !primary && disabled,
            [colors.inverted.disabled.bg]: primary && disabled,
          },
          {
            [colors.standard.normal.text]: !primary && !disabled,
            [colors.inverted.normal.text]: primary && !disabled,
            [`hover:${colors.standard.hover.text}`]: !primary && !disabled,
            [`hover:${colors.inverted.hover.text}`]: primary && !disabled,
            [colors.standard.disabled.text]: !primary && disabled,
            [colors.inverted.disabled.text]: primary && disabled,
          },
          {
            'cursor-default': disabled,
          },
        )}
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseDown={handleOnMouseDown}
        onKeyDown={handleOnKeyDown}
      >
        <span
          className={classnames(
            classNameForSize.smallText,
            'flex justify-center items-center w-full h-full border border-transparent',
            !iconOnly ? classNameForSize.button.padding : '',
          )}
        >
          <Icon
            icon={icon}
            uiSize={uiSize}
            className={iconOnly ? '' : classNameForSize.button.iconMargin}
          />
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  uiSize: UiSizeValues.none,
};
