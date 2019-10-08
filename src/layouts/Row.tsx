import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

type RowProps = BasicProps;

/** Row of column layout. */
export const Row: React.FC<RowProps> = ({
  className,
  children,
}: React.PropsWithChildren<RowProps>) => (
  <div
    className={classnames(
      '-mx-1 flex justify-stretch items-stretch content-center',
      className,
    )}
  >
    {children}
  </div>
);

Row.displayName = 'Row';
