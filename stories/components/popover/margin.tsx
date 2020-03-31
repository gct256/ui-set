import * as React from 'react';
import { number } from '@storybook/addon-knobs';

import { ExampleStage } from '../../utils/ExampleStage';
import { Popover } from '../../../src';

type MarginTestProps = {
  margin: number;
};

const MarginTest: React.FC<MarginTestProps> = ({ margin }: MarginTestProps) => {
  const [target, setTarget] = React.useState<HTMLDivElement | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setTarget(ref.current);
  });

  return (
    <>
      <div
        ref={ref}
        className="absolute w-1/2 h-64 p-2 border-8 border-blue-500 inset-0 m-auto"
      />
      <Popover
        target={target}
        visible
        position="left"
        margin={margin}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="right"
        margin={margin}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="top"
        margin={margin}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="bottom"
        margin={margin}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
    </>
  );
};

export const margin = () => (
  <ExampleStage>
    <MarginTest
      margin={number('margin', 0, {
        min: 0,
        max: 10,
        range: true,
      })}
    />
  </ExampleStage>
);
