import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { ExampleStage } from '../../utils/ExampleStage';
import { Popover } from '../../../src';

type FitTestProps = { fitToTarget: boolean };

const FitTest: React.FC<FitTestProps> = ({ fitToTarget }: FitTestProps) => {
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
        fitToTarget={fitToTarget}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="right"
        fitToTarget={fitToTarget}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="top"
        fitToTarget={fitToTarget}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="bottom"
        fitToTarget={fitToTarget}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
    </>
  );
};

export const fitToTarget = () => (
  <ExampleStage>
    <FitTest fitToTarget={boolean('fit to target', false)} />
  </ExampleStage>
);
