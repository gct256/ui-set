import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { Label } from '../../src/forms/Label';

storiesOf('forms / Label', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('normal', () => (
    <>
      <div className="w-64">
        <Label className="w-64">Normal label</Label>
      </div>
      <div className="w-64">
        <Label align="center">Centered label</Label>
      </div>
      <div className="w-64">
        <Label align="right">Right label</Label>
      </div>
    </>
  ));
