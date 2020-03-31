import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { ExampleStage } from '../../utils/ExampleStage';
import { Popover } from '../../../src';

const RefTest: React.FC = () => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const [target, setTarget] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setTarget(divRef.current);
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return (
    <>
      <div
        ref={divRef}
        className="absolute w-1/2 h-64 p-2 border-8 border-blue-500 inset-0 m-auto"
      />
      <Popover target={target} visible ref={ref}>
        Popover
      </Popover>
    </>
  );
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
