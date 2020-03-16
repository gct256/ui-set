import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ExampleStage } from '../utils/ExampleStage';
import { BorderedView } from '../../src';

export default {
  title: 'Elements / BorderedView',
  decorators: [withKnobs],
};

export const standatd = () => (
  <ExampleStage>
    <div className="flex">
      <BorderedView className="p-2 mr-2">Bordered view</BorderedView>
      <BorderedView className="p-2 mr-2" disabled>
        Bordered view
        <br />
        (disabled style)
      </BorderedView>
    </div>
  </ExampleStage>
);

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <BorderedView ref={ref}>BorderedView</BorderedView>;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
