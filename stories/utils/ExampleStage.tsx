import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';

const style: React.CSSProperties = {
  minWidth: '100vw',
  minHeight: '100vh',
};

export const ExampleStage: React.FC<{}> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const bg = optionsKnob(
    'bg',
    {
      white: 'bg-white',
      black: 'bg-black',
      gray: 'bg-gray-500',
      checkerboard: 'bg-checkerboard',
    },
    'white',
    {
      display: 'inline-radio',
    },
  );

  return (
    <div className={`p-2 ${bg}`} style={style}>
      {children}
    </div>
  );
};

ExampleStage.displayName = 'ExampleStage';
