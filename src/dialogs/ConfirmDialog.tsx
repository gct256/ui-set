import * as React from 'react';

import { isWindows } from '../utils/isWindows';

import { Dialog } from './Dialog';

const buttonPair1 = ['OK', 'Cancel'];
const buttonPair2 = [...buttonPair1].reverse();

const button0 = isWindows() ? 1 : 0;
const button1 = isWindows() ? 0 : 1;

interface ConfirmDialogProps {
  /** Dialog title. */
  title?: string;
  /** Dialog width. (%) */
  width?: number;
  /** If true, dialog appeared. */
  visible?: boolean;
  /** If true, OK button disabled. */
  disabled?: boolean;
  /** If true, set primary style to cancel button. */
  danger?: boolean;
  /** Array of sub button labels. */
  subButtons?: string[];
  /** Disabled state for sub buttons. */
  subButtonsDisabled?: boolean[];

  /**
   * Event handler on button clicked.
   *
   * @param ok Set true if OK button clicked.
   */
  onClick?(ok: boolean): void;

  /**
   * Event handler on sub buttons clicked.
   *
   * @param index sub button index.
   */
  onSubClick?(index: number): void;
}

/** Confirm dialog component. */
export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  width,
  visible,
  disabled,
  danger,
  subButtons,
  subButtonsDisabled,
  onClick,
  onSubClick,
  children,
}: React.PropsWithChildren<ConfirmDialogProps>) => (
  <Dialog
    title={title}
    width={width}
    visible={!!visible}
    buttons={isWindows() ? buttonPair1 : buttonPair2}
    buttonsDisabled={[false, !!disabled]}
    subButtons={subButtons}
    subButtonsDisabled={subButtonsDisabled}
    primaryButton={danger ? button0 : button1}
    onClick={(i) => onClick && onClick(i === button1)}
    onSubClick={onSubClick}
  >
    {children}
  </Dialog>
);

ConfirmDialog.displayName = 'ConfirmDialog';

ConfirmDialog.defaultProps = {
  title: 'Confirm',
  visible: false,
  danger: false,
  onClick() {},
};
