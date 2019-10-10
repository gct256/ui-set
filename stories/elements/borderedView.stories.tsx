import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Stage } from '../utils/Stage';
import { BorderedView } from '../../src';

export default {
  title: 'Elements / BorderedView',
  decorators: [withKnobs],
};

export const standatd = () => (
  <Stage>
    <div className="flex">
      <BorderedView className="p-2 mr-2">Bordered view</BorderedView>
      <BorderedView className="p-2 mr-2" disabled>
        Bordered view
        <br />
        (disabled style)
      </BorderedView>
    </div>
  </Stage>
);
