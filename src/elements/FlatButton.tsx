import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';
import { handleButtonKeyDown } from '../utils/handleButtonKeyDown';

interface FlatButtonProps extends UiProps {
  /**
   * Event handler on button clicked.
   */
  onClick?: () => void;
}

/** Button element without ornament. */
export const FlatButton: React.FC<FlatButtonProps> = ({
  disabled,
  className,
  onClick,
  children,
}: React.PropsWithChildren<FlatButtonProps>) => {
  const handleKeyDown = React.useCallback(
    (ev) => handleButtonKeyDown(ev, onClick),
    [onClick],
  );

  return (
    <button
      type="button"
      disabled={disabled}
      className={classnames(
        className,
        'ui-set select-none',
        'bg-transparent',
        'focus:outline-none',
        'focus:focus-animation-border',
        'active:opacity-75',
        {
          [colors.standard.normal.text]: !disabled,
          [`hover:${colors.standard.hover.text}`]: !disabled,
          [colors.standard.disabled.text]: disabled,
        },
        {
          'cursor-default': disabled,
        },
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
};

FlatButton.displayName = 'FlatButton';
