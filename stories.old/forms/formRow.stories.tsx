import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { FormRow } from '../../src/forms/FormRow';

storiesOf('forms', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('FormRow', () => (
    <>
      <FormRow visible={boolean('visible', true)}>Row 1</FormRow>
      <FormRow visible={boolean('visible', true)}>Row 2</FormRow>
      <FormRow visible={boolean('visible', true)}>Row 3</FormRow>
    </>
  ));
