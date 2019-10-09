import * as React from 'react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  faInfoCircle,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

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

export const titleIcon = () => {
  return (
    <Stage>
      <Dialog
        visible={boolean('visible', true)}
        title="Dialog"
        titleIcon={faInfoCircle}
      />
    </Stage>
  );
};

export const buttons = () => {
  return (
    <Stage>
      <Dialog
        visible={boolean('visible', true)}
        width={3 / 5}
        title="Dialog"
        buttons={['foo', 'bar', 'baz']}
        buttonIcons={[faCheck, undefined, faTimes]}
      />
    </Stage>
  );
};

export const primaryButton = () => {
  return (
    <Stage>
      <Dialog
        visible={boolean('visible', true)}
        width={3 / 5}
        title="Dialog"
        buttons={['foo', 'bar', 'baz']}
        primaryButton={1}
      />
    </Stage>
  );
};

export const subButtons = () => {
  return (
    <Stage>
      <Dialog
        visible={boolean('visible', true)}
        width={3 / 5}
        title="Dialog"
        buttonIcons={[faCheck]}
        subButtons={['foo', 'bar', 'baz']}
        subButtonIcons={[faInfoCircle, undefined, faTimes]}
      />
    </Stage>
  );
};

export const setWidth = () => {
  return (
    <Stage>
      <Dialog
        width={number('width', 0.5, {
          min: 0.1,
          max: 0.8,
          step: 0.05,
          range: true,
        })}
        visible={boolean('visible', true)}
        title="Dialog"
      />
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
