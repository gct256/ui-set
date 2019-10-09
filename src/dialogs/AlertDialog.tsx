import * as React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Dialog } from './Dialog';

type AlertDialogProps = {
  /** Dialog title. */
  title?: string;
  /** Dialog title's icon. */
  titleIcon?: IconProp;
  /** Dialog width. (%) */
  width?: number;
  /** If true, dialog appeared. */
  visible?: boolean;
  /** If true, OK button disabled. */
  disabled?: boolean;

  /** Event callback on OK button clicked. */
  onClick?(): void;

  /** Event handler on escape key down. */
  onEscapeKey?(): void;
};

/** Alert dialog component. */
export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  titleIcon,
  width,
  visible,
  disabled,
  onClick,
  onEscapeKey,
  children,
}: React.PropsWithChildren<AlertDialogProps>) => (
  <Dialog
    title={title}
    titleIcon={titleIcon}
    width={width}
    visible={!!visible}
    buttonsDisabled={[!!disabled]}
    onClick={onClick}
    onEscapeKey={onEscapeKey}
  >
    {children}
  </Dialog>
);

AlertDialog.displayName = 'AlertDialog';

AlertDialog.defaultProps = {
  title: 'Alert',
  visible: false,
  onClick() {
    //
  },
  onEscapeKey() {
    //
  },
};
