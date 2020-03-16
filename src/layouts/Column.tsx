import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

type ColumnProps = BasicProps<HTMLDivElement> & {
  /** If true, shirink width tot content size. */
  packed?: boolean;

  /** If set, adjust column width. (example: width={3 / 12}) */
  width?: number;
};

/** Column of column layout. */
export const Column: React.FC<ColumnProps> = React.forwardRef(
  (
    {
      className,
      packed,
      width,
      children,
    }: React.PropsWithChildren<ColumnProps>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const style: React.CSSProperties = {};

    if (packed) {
      style.flexBasis = 'auto';
      style.flexGrow = 0;
    } else if (typeof width === 'number') {
      style.width = `${width * 100}%`;
      style.flexBasis = `${width * 100}%`;
      style.flexGrow = 0;
    } else {
      style.flexBasis = 0;
      style.flexGrow = 1;
    }

    return (
      <div style={style} className={classnames('px-1', className)} ref={ref}>
        {children}
      </div>
    );
  },
);

Column.displayName = 'Column';
