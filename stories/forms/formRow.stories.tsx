import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { FormRow } from '../../src/forms/FormRow';

storiesOf('forms', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('FormRow', () => (
    <>
      <FormRow>Row 1</FormRow>
      <FormRow>Row 2</FormRow>
      <FormRow>Row 3</FormRow>
    </>
  ));
