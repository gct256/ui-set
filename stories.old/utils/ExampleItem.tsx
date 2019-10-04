import * as React from 'react';
import classnames from 'classnames';

type ExampleItemProps = {
  className?: string;
};

export const ExampleItem: React.FC<ExampleItemProps> = ({
  className,
  children,
}: React.PropsWithChildren<ExampleItemProps>) => (
  <div className={classnames('example-item', className)}>{children}</div>
);

ExampleItem.displayName = 'ExampleItem';
