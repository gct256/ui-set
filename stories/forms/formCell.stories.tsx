import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { FormCell } from '../../src/forms/FormCell';
import { FormRow } from '../../src/forms/FormRow';

storiesOf('forms', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('FormCell', () => (
    <FormRow>
      <FormCell>Cell 1</FormCell>
      <FormCell>Cell 2</FormCell>
      <FormCell>Cell 3</FormCell>
    </FormRow>
  ));
