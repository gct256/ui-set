import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';

import { AlertDialog } from '../../src/dialogs/AlertDialog';
import { ExampleLorem } from '../utils/ExampleLorem';

storiesOf('dialogs / AlertDialog', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <AlertDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
    >
      <ExampleLorem />
    </AlertDialog>
  ))
  .add('with width', () => (
    <AlertDialog
      visible={boolean('visible', true)}
      width={number('width (%)', 50, {
        min: 25,
        max: 75,
        step: 5,
        range: true,
      })}
    >
      <ExampleLorem />
    </AlertDialog>
  ));
