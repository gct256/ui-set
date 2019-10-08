import * as React from 'react';

export const Table: React.FC<{}> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <table className="border border-collapse">
      <tbody>{children}</tbody>
    </table>
  );
};

Table.displayName = 'Table';
