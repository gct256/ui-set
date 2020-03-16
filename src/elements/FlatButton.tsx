import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';
import { canClickEmulation } from '../utils/keys';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

type FlatButtonProps = UiProps<HTMLButtonElement> & {
  /**
   * Event handler on button clicked.
   */
  onClick?: () => void;
};

/** Button element without ornament. */
export const FlatButton: React.FC<FlatButtonProps> = React.forwardRef(
  (
    {
      disabled,
      className,
      onClick,
      children,
    }: React.PropsWithChildren<FlatButtonProps>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const handleOnFocus = React.useCallback((ev) => {
      startAnimation(ev.currentTarget, animations.focusAnimationBorder);
    }, []);
    const handleOnBlur = React.useCallback(
      (ev) => removeAllAnimations(ev.currentTarget),
      [],
    );
    const handleOnMouseDown = React.useCallback((ev) => {
      startAnimation(ev.currentTarget, animations.activeAnimation);
    }, []);
    const handleOnKeyDown = React.useCallback(
      (ev) => {
        if (canClickEmulation(ev)) {
          startAnimation(ev.currentTarget, animations.activeAnimation);

          if (onClick) onClick();
        }
      },
      [onClick],
    );

    return (
      <button
        type="button"
        disabled={disabled}
        className={classnames(
          className,
          'ui-set select-none with-animation',
          'bg-transparent',
          'focus:outline-none',
          {
            [colors.standard.normal.text]: !disabled,
            [`hover:${colors.standard.hover.text}`]: !disabled,
            [colors.standard.disabled.text]: disabled,
          },
          {
            'cursor-default': disabled,
          },
        )}
        ref={ref}
        onClick={onClick}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseDown={handleOnMouseDown}
        onKeyDown={handleOnKeyDown}
      >
        {children}
      </button>
    );
  },
);

FlatButton.displayName = 'FlatButton';
