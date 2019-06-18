import * as React from 'react';
import classnames from 'classnames';
import { color } from '@storybook/addon-knobs';

interface ExampleProps {
  className?: string;
  vertical?: boolean;
  colored?: boolean;
}

export const Example: React.FC<ExampleProps> = ({
  className,
  vertical,
  colored,
  children,
}: React.PropsWithChildren<ExampleProps>) => (
  <div
    className={classnames(
      'example',
      { 'example-vertical': vertical },
      className,
    )}
    style={{
      background: colored ? color('custom bg', '#888') : '',
    }}
  >
    {children}
  </div>
);

Example.displayName = 'Example';
