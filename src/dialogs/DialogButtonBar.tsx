import * as React from 'react';
import classnames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Button } from '../elements/Button';
import { Row } from '../layouts/Row';
import { Column } from '../layouts/Column';

type DialogButtonBarProps = {
  /** Flag of main button or sub button. */
  main?: boolean;
  /** Arary of button labels. */
  buttons?: string[];
  /** Disabled state of buttons. */
  buttonsDisabled?: boolean[];
  /** Array of button icons. */
  buttonIcons?: (IconProp | undefined)[];
  /** Index of primary button. */
  primaryButton?: number;

  /**
   * Event handler on button clicked.
   *
   * @param index button index.
   */
  onClick?(index: number): void;
};

/** Button list for dialog component. */
export const DialogButtonBar: React.FC<DialogButtonBarProps> = ({
  main,
  buttons,
  buttonsDisabled,
  buttonIcons = [],
  primaryButton,
  onClick,
}: DialogButtonBarProps) => {
  if (buttons === undefined) return null;

  const disabled = Array.isArray(buttonsDisabled) ? buttonsDisabled : [];

  return (
    <Row
      className={classnames('dialog-button-bar p-2 flex-row', {
        'justify-end flex-grow': main,
        'justify-start': !main,
      })}
    >
      {buttons
        ? buttons.map((x, i) => {
            const handleOnClick = React.useCallback(
              () => onClick && onClick(i),
              [onClick],
            );

            return (
              <Column packed key={x}>
                <Button
                  icon={buttonIcons[i]}
                  className="min-w-24"
                  disabled={!!disabled[i]}
                  primary={primaryButton === i}
                  onClick={handleOnClick}
                >
                  {x}
                </Button>
              </Column>
            );
          })
        : null}
    </Row>
  );
};

DialogButtonBar.displayName = 'DialogButtonBar';

DialogButtonBar.defaultProps = {
  buttons: [],
  buttonsDisabled: [],
  primaryButton: -1,
  onClick() {
    //
  },
};
