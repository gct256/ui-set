import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

interface FormCellProps extends BasicProps {
  visible?: boolean;
}

/** Form's cell element. */
export const FormCell: React.FC<FormCellProps> = ({
  className,
  visible,
  children,
}: React.PropsWithChildren<FormCellProps>) =>
  visible ? (
    <div className={classnames(className, 'px-1')}>{children}</div>
  ) : null;

FormCell.displayName = 'FormCell';

FormCell.defaultProps = {
  visible: true,
};
