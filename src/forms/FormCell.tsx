import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

interface FormCellProps extends BasicProps {}

/** Form's cell element. */
export const FormCell: React.FC<FormCellProps> = ({
  className,
  children,
}: React.PropsWithChildren<FormCellProps>) => (
  <div className={classnames(className, 'mx-1')}>{children}</div>
);

FormCell.displayName = 'FormCell';
