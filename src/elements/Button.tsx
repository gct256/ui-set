import * as React from 'react';
import classnames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';
import { handleButtonKeyDown } from '../utils/handleButtonKeyDown';

import { Icon } from './Icon';

interface ButtonProps extends UiProps {
  /** Icon on button. */
  icon?: IconProp;
  /** If true, set primary style to button. */
  primary?: boolean;

  /** Event handler on button clicked. */
  onClick?(): void;
}

/** Simply button element. */
export const Button: React.FC<ButtonProps> = ({
  icon,
  primary,
  disabled,
  className,
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  const iconOnly = children === undefined;
  const handleKeyDown = React.useCallback(
    (ev) => handleButtonKeyDown(ev, onClick),
    [onClick],
  );

  return (
    <button
      type="button"
      className={classnames(
        className,
        'ui-set select-none inline-block align-top',
        'h-8 leading-none',
        `border p-px focus:border-2 focus:p-0 focus:border-blue-500`,
        'focus:outline-none',
        {
          'active:opacity-75': !disabled,
          [colors.border.normal]: !primary && !disabled,
          [colors.border.invert]: primary && !disabled,
          [`hover:${colors.border.hover}`]: !primary && !disabled,
          [`hover:${colors.border.invertHover}`]: primary && !disabled,
          [colors.border.disabled]: disabled,
        },
        {
          [colors.bg.normal]: !primary && !disabled,
          [colors.bg.hover]: !primary && !disabled,
          [colors.bg.invert]: primary && !disabled,
          [`hover:${colors.bg.invertHover}`]: primary && !disabled,
          [colors.bg.disabled]: !primary && disabled,
          [colors.bg.invertDisabled]: primary && disabled,
        },
        {
          [colors.text.normal]: !primary && !disabled,
          [`hover:${colors.text.hover}`]: !primary && !disabled,
          [colors.text.invert]: primary && !disabled,
          [`hover:${colors.text.invertHover}`]: primary && !disabled,
          [colors.text.disabled]: !primary && disabled,
          [colors.text.invertDisabled]: primary && disabled,
        },
        {
          'focus:focus-animation': !primary && !disabled,
          'focus:focus-animation-white': primary && !disabled,
        },
        {
          'cursor-default': disabled,
          'w-8': iconOnly,
        },
      )}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <span
        className={classnames(
          'text-sm flex justify-center items-center w-full h-full border border-transparent',
          {
            'px-2': !iconOnly,
          },
        )}
      >
        <Icon icon={icon} className={iconOnly ? '' : 'mr-2'} />
        {children}
      </span>
    </button>
  );
};

Button.displayName = 'Button';
