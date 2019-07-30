import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import useState from 'storybook-addon-state';

import { AlertDialog } from '../../src/dialogs/AlertDialog';
import { ExampleLorem } from '../utils/ExampleLorem';
import { Button } from '../../src';

storiesOf('dialogs / AlertDialog', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <AlertDialog
      visible={boolean('visible', true)}
      disabled={boolean('disabled', false)}
      onClick={action('AlertDialog#onClick')}
      onEscapeKey={action('AlertDialog#onEscapeKey')}
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
      onClick={action('AlertDialog#onClick')}
      onEscapeKey={action('AlertDialog#onEscapeKey')}
    >
      <ExampleLorem />
    </AlertDialog>
  ))
  .add('example', () => {
    const [visible, setVisible] = useState('visible', false);

    return (
      <>
        <Button onClick={() => setVisible(true)}>Show alert</Button>
        <AlertDialog
          visible={visible}
          onClick={() => setVisible(false)}
          onEscapeKey={() => setVisible(false)}
        >
          <ExampleLorem />
        </AlertDialog>
      </>
    );
  });
