import * as React from 'react';

import { TableCellProps } from './TableCell';

export const TableHeaderCell: React.FC<TableCellProps> = ({
  colSpan = 1,
  rowSpan = 1,
  children,
}: React.PropsWithChildren<TableCellProps>) => (
  <th className="p-2 border bg-white" colSpan={colSpan} rowSpan={rowSpan}>
    {children}
  </th>
);

TableHeaderCell.displayName = 'TableHeaderCell';
