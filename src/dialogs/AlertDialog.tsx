import * as React from 'react';

import { Dialog } from './Dialog';

interface AlertDialogProps {
  /** Dialog title. */
  title?: string;
  /** Dialog width. (%) */
  width?: number;
  /** If true, dialog appeared. */
  visible?: boolean;
  /** If true, OK button disabled. */
  disabled?: boolean;

  /** Event callback on OK button clicked. */
  onClick?(): void;
}

/** Alert dialog component. */
export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  width,
  visible,
  disabled,
  onClick,
  children,
}: React.PropsWithChildren<AlertDialogProps>) => (
  <Dialog
    title={title}
    width={width}
    visible={!!visible}
    buttonsDisabled={[!!disabled]}
    onClick={onClick}
  >
    {children}
  </Dialog>
);

AlertDialog.displayName = 'AlertDialog';

AlertDialog.defaultProps = {
  title: 'Alert',
  visible: false,
  onClick() {},
};
