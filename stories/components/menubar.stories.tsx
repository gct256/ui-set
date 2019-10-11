import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Menubar } from '../../src';
import { ExampleForm } from '../utils/ExampleForm';
import { createMenuData } from '../utils/createMenuData';
import { ExampleStage } from '../utils/ExampleStage';

const data1 = createMenuData('left_');
const data2 = createMenuData('right_');

export default {
  title: 'Components / Menubar',
  decorators: [withKnobs],
};

export const onTop = () => (
  <ExampleStage>
    <Menubar
      className="fixed inset-x-0 top-0 h-8 border-b bg-white"
      left={data1}
      right={data2}
      onSelect={action('Menu#onSelect')}
    />
    <div className="mt-8 p-2">
      <ExampleForm />
    </div>
  </ExampleStage>
);

export const onBottom = () => (
  <ExampleStage>
    <Menubar
      className="fixed inset-x-0 bottom-0 h-8 border-t bg-white"
      left={data1}
      right={data2}
      onSelect={action('Menu#onSelect')}
    />
    <div className="mt-8 p-2">
      <ExampleForm />
    </div>
  </ExampleStage>
);
