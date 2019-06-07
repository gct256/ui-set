import * as React from 'react';
import { RenderFunction } from '@storybook/react';

import { Example } from './Example';
import { ExampleItem } from './ExampleItem';

export const wrapExample = (storyFn: RenderFunction) => (
  <div className="example-wrapper">
    <Example className="example-white">
      <ExampleItem>{storyFn()}</ExampleItem>
    </Example>
    <Example className="example-black">
      <ExampleItem>{storyFn()}</ExampleItem>
    </Example>
    <Example className="example-checkerboard">
      <ExampleItem>{storyFn()}</ExampleItem>
    </Example>
    <Example colored>
      <ExampleItem>{storyFn()}</ExampleItem>
    </Example>
  </div>
);
