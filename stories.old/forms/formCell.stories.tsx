import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { FormCell } from '../../src/forms/FormCell';
import { FormRow } from '../../src/forms/FormRow';

storiesOf('forms', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('FormCell', () => (
    <FormRow>
      <FormCell visible={boolean('visible', true)}>Cell 1</FormCell>
      <FormCell visible={boolean('visible', true)}>Cell 2</FormCell>
      <FormCell visible={boolean('visible', true)}>Cell 3</FormCell>
    </FormRow>
  ));
