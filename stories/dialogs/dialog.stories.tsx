import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Dialog } from '../../src';
import { Stage } from '../utils/Stage';
import { ExampleForm } from '../utils/ExampleForm';

export default {
  title: 'Dialogs / Dialog',
  decorators: [withKnobs],
};

export const standard = () => {
  return (
    <Stage>
      <Dialog visible={boolean('visible', true)} title="Dialog" />
    </Stage>
  );
};

export const setWidth = () => {
  return (
    <Stage>
      <Dialog width={3 / 5} visible={boolean('visible', true)} title="Dialog" />
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <Dialog
        width={3 / 5}
        visible={boolean('visible', true)}
        title="Dialog"
        buttons={['foo', 'bar', 'baz']}
        onClick={action('onClick')}
        subButtons={['qux', 'quux']}
        onSubClick={action('onSubClick')}
        onEscapeKey={action('onEscapeKey')}
      />
    </Stage>
  );
};

export const content = () => {
  return (
    <Stage>
      <Dialog width={3 / 5} visible={boolean('visible', true)} title="Dialog">
        <ExampleForm />
      </Dialog>
    </Stage>
  );
};
