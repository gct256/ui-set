import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Menu } from '../../src';
import { createMenuData } from '../utils/createMenuData';
import { Stage } from '../utils/Stage';

const data1 = createMenuData('top_left_');
const data2 = createMenuData('top_right_');
const data3 = createMenuData('bottom_left_');
const data4 = createMenuData('bottom_right_');

export default {
  title: 'Components / Menu',
  decorators: [withKnobs],
};

export const staticPosition = () => (
  <Stage>
    <Menu visible data={data1} />
  </Stage>
);

export const fixedPosition = () => (
  <Stage>
    <Menu
      className="m-2 fixed left-0 top-0"
      visible
      data={data1}
      onSelect={action('Menu#onSelect')}
    />
    <Menu
      className="m-2 fixed right-0 top-0"
      visible
      data={data2}
      onSelect={action('Menu#onSelect')}
    />
    <Menu
      className="m-2 fixed left-0 bottom-0"
      visible
      data={data3}
      onSelect={action('Menu#onSelect')}
    />
    <Menu
      className="m-2 fixed right-0 bottom-0"
      visible
      data={data4}
      onSelect={action('Menu#onSelect')}
    />
  </Stage>
);
