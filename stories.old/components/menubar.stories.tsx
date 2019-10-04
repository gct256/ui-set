import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Menubar } from '../../src';
import { ExampleForm } from '../utils/ExampleForm';

import { createMenuData } from './createMenuData';

const data1 = createMenuData('left_');
const data2 = createMenuData('right_');

storiesOf('components / Menubar', module)
  .add('top', () => {
    return (
      <>
        <Menubar
          className="fixed inset-x-0 top-0 h-8 border-b bg-white"
          left={data1}
          right={data2}
          onSelect={action('Menu#onSelect')}
        />
        <div className="mt-8 p-2">
          <ExampleForm />
        </div>
      </>
    );
  })
  .add('bottom', () => {
    return (
      <>
        <Menubar
          className="fixed inset-x-0 bottom-0 h-8 border-t bg-white"
          left={data1}
          right={data2}
          onSelect={action('Menu#onSelect')}
        />
        <div className="mt-8 p-2">
          <ExampleForm />
        </div>
      </>
    );
  });
