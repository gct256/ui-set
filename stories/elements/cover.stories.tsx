import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ExampleStage } from '../utils/ExampleStage';
import { Cover, Icon } from '../../src';
import { ExampleLorem } from '../utils/ExampleLorem';

export default {
  title: 'Elements / Cover',
  decorators: [withKnobs],
};

export const standard = () => (
  <ExampleStage>
    <ExampleLorem />
    <ExampleLorem />
    <ExampleLorem />
    <Cover visible={boolean('visible', true)}>
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="mt-2" />
    </Cover>
  </ExampleStage>
);
