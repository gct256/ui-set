import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Separator } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Elements / Separator',
  decorators: [withKnobs],
};

export const standard = () => {
  return (
    <ExampleStage>
      <div className="w-64">
        <Separator />
        <Separator disabled />
      </div>
      <div className="h-64 flex">
        <Separator vertical />
        <Separator vertical disabled />
      </div>
    </ExampleStage>
  );
};

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <Separator ref={ref}>Separator</Separator>;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
