import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';

import { ConfirmDialog } from '../../src/dialogs/ConfirmDialog';
import { ExampleLorem } from '../utils/ExampleLorem';
import { ExampleForm } from '../utils/ExampleForm';

storiesOf('dialogs / ConfirmDialog', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <ConfirmDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ))
  .add('danger', () => (
    <ConfirmDialog
      danger
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ))
  .add('with form', () => (
    <ConfirmDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
    >
      <ExampleForm />
    </ConfirmDialog>
  ))
  .add('with sub buttons', () => (
    <ConfirmDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
      subButtons={['Foo', 'Bar', 'Baz']}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ))
  .add('with width', () => (
    <ConfirmDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
      width={number('width (%)', 50, {
        min: 25,
        max: 75,
        step: 5,
        range: true,
      })}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ));
