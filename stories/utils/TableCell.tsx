import * as React from 'react';

export type TableCellProps = {
  colSpan?: number;
  rowSpan?: number;
};

export const TableCell: React.FC<TableCellProps> = ({
  colSpan = 1,
  rowSpan = 1,
  children,
}: React.PropsWithChildren<TableCellProps>) => (
  <td className="p-2 border" colSpan={colSpan} rowSpan={rowSpan}>
    <div className="flex justify-center items-center">{children}</div>
  </td>
);

TableCell.displayName = 'TableCell';
