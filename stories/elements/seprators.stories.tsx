import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Separator } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Elements / Separator',
  decorators: [withKnobs],
};

export const standard = () => {
  return (
    <Stage>
      <div className="w-64">
        <Separator />
        <Separator disabled />
      </div>
      <div className="h-64 flex">
        <Separator vertical />
        <Separator vertical disabled />
      </div>
    </Stage>
  );
};
