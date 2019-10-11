import * as React from 'react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  faInfoCircle,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { Dialog } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';
import { ExampleForm } from '../utils/ExampleForm';

export default {
  title: 'Dialogs / Dialog',
  decorators: [withKnobs],
};

export const standard = () => {
  return (
    <ExampleStage>
      <Dialog visible={boolean('visible', true)} title="Dialog" />
    </ExampleStage>
  );
};

export const titleIcon = () => {
  return (
    <ExampleStage>
      <Dialog
        visible={boolean('visible', true)}
        title="Dialog"
        titleIcon={faInfoCircle}
      />
    </ExampleStage>
  );
};

export const buttons = () => {
  return (
    <ExampleStage>
      <Dialog
        visible={boolean('visible', true)}
        width={3 / 5}
        title="Dialog"
        buttons={['foo', 'bar', 'baz']}
        buttonIcons={[faCheck, undefined, faTimes]}
      />
    </ExampleStage>
  );
};

export const primaryButton = () => {
  return (
    <ExampleStage>
      <Dialog
        visible={boolean('visible', true)}
        width={3 / 5}
        title="Dialog"
        buttons={['foo', 'bar', 'baz']}
        primaryButton={1}
      />
    </ExampleStage>
  );
};

export const subButtons = () => {
  return (
    <ExampleStage>
      <Dialog
        visible={boolean('visible', true)}
        width={3 / 5}
        title="Dialog"
        buttonIcons={[faCheck]}
        subButtons={['foo', 'bar', 'baz']}
        subButtonIcons={[faInfoCircle, undefined, faTimes]}
      />
    </ExampleStage>
  );
};

export const setWidth = () => {
  return (
    <ExampleStage>
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
    </ExampleStage>
  );
};

export const event = () => {
  return (
    <ExampleStage>
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
    </ExampleStage>
  );
};

export const content = () => {
  return (
    <ExampleStage>
      <Dialog width={3 / 5} visible={boolean('visible', true)} title="Dialog">
        <ExampleForm />
      </Dialog>
    </ExampleStage>
  );
};
