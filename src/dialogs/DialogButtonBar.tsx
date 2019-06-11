import * as React from 'react';
import classnames from 'classnames';

import { Button } from '../elements/Button';
import { FormCell } from '../forms/FormCell';
import { FormRow } from '../forms/FormRow';

interface DialogButtonBarProps {
  /** Flag of main button or sub button. */
  main?: boolean;
  /** Arary of button labels. */
  buttons?: string[];
  /** Disabled state of buttons. */
  buttonsDisabled?: boolean[];
  /** Index of primary button. */
  primaryButton?: number;

  /**
   * Event handler on button clicked.
   *
   * @param index button index.
   */
  onClick?(index: number): void;
}

/** Button list for dialog component. */
export const DialogButtonBar: React.FC<DialogButtonBarProps> = ({
  main,
  buttons,
  buttonsDisabled,
  primaryButton,
  onClick,
}: DialogButtonBarProps) => {
  if (buttons === undefined) return null;

  const disabled = Array.isArray(buttonsDisabled) ? buttonsDisabled : [];

  return (
    <FormRow
      className={classnames('dialog-button-bar p-2 flex-row', {
        'justify-end flex-grow': main,
        'justify-start': !main,
      })}
    >
      {buttons
        ? buttons.map((x, i) => (
            <FormCell key={x}>
              <Button
                className="min-w-24"
                disabled={!!disabled[i]}
                primary={primaryButton === i}
                onClick={() => onClick && onClick(i)}
              >
                {x}
              </Button>
            </FormCell>
          ))
        : null}
    </FormRow>
  );
};

DialogButtonBar.displayName = 'DialogButtonBar';

DialogButtonBar.defaultProps = {
  buttons: [],
  buttonsDisabled: [],
  primaryButton: -1,
  onClick() {},
};
