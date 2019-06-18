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
          [colors.text.normal]: !disabled,
          [`hover:${colors.text.hover}`]: !disabled,
          [colors.text.disabled]: disabled,
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
