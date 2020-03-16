import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

type RowProps = BasicProps<HTMLDivElement>;

/** Row of column layout. */
export const Row: React.FC<RowProps> = React.forwardRef(
  (
    { className, children }: React.PropsWithChildren<RowProps>,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <div
      className={classnames(
        '-mx-1 flex justify-stretch items-stretch content-center',
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  ),
);

Row.displayName = 'Row';
