import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Stage } from '../utils/Stage';
import { Cover, Icon } from '../../src';
import { Lorem } from '../utils/Lorem';

export default {
  title: 'Elements / Cover',
  decorators: [withKnobs],
};

export const standard = () => (
  <Stage>
    <Lorem />
    <Lorem />
    <Lorem />
    <Cover visible={boolean('visible', true)}>
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="mt-2" />
    </Cover>
  </Stage>
);
