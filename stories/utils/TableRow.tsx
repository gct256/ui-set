import * as React from 'react';

export const TableRow: React.FC<{}> = ({
  children,
}: React.PropsWithChildren<{}>) => <tr>{children}</tr>;

TableRow.displayName = 'TableRow';
