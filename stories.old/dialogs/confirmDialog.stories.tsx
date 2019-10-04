import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import useState from 'storybook-addon-state';

import { ConfirmDialog } from '../../src/dialogs/ConfirmDialog';
import { ExampleLorem } from '../utils/ExampleLorem';
import { ExampleForm } from '../utils/ExampleForm';
import { Button } from '../../src';

storiesOf('dialogs / ConfirmDialog', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <ConfirmDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
      onClick={action('ConfirmDialog#onClick')}
      onEscapeKey={action('AlertDialog#onEscapeKey')}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ))
  .add('danger', () => (
    <ConfirmDialog
      danger
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
      onClick={action('ConfirmDialog#onClick')}
      onEscapeKey={action('AlertDialog#onEscapeKey')}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ))
  .add('with sub buttons', () => (
    <ConfirmDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
      subButtons={['Foo', 'Bar', 'Baz']}
      onClick={action('ConfirmDialog#onClick')}
      onSubClick={action('ConfirmDialog#onSubClick')}
      onEscapeKey={action('AlertDialog#onEscapeKey')}
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
      onClick={action('ConfirmDialog#onClick')}
      onEscapeKey={action('AlertDialog#onEscapeKey')}
    >
      <ExampleLorem />
    </ConfirmDialog>
  ))
  .add('example', () => {
    const [visible, setVisible] = useState('visible', false);

    return (
      <>
        <Button onClick={() => setVisible(true)}>Show dialog</Button>
        <ConfirmDialog
          visible={visible}
          onClick={() => setVisible(false)}
          onEscapeKey={() => setVisible(false)}
        >
          <ExampleForm />
        </ConfirmDialog>
      </>
    );
  });
