import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Menubar } from '../../src';
import { ExampleForm } from '../utils/ExampleForm';
import { createMenuData } from '../utils/createMenuData';
import { Stage } from '../utils/Stage';

const data1 = createMenuData('left_');
const data2 = createMenuData('right_');

export default {
  title: 'Components / Menubar',
  decorators: [withKnobs],
};

export const onTop = () => (
  <Stage>
    <Menubar
      className="fixed inset-x-0 top-0 h-8 border-b bg-white"
      left={data1}
      right={data2}
      onSelect={action('Menu#onSelect')}
    />
    <div className="mt-8 p-2">
      <ExampleForm />
    </div>
  </Stage>
);

export const onBottom = () => (
  <Stage>
    <Menubar
      className="fixed inset-x-0 bottom-0 h-8 border-t bg-white"
      left={data1}
      right={data2}
      onSelect={action('Menu#onSelect')}
    />
    <div className="mt-8 p-2">
      <ExampleForm />
    </div>
  </Stage>
);
