import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';

import { Cover } from '../../src';

storiesOf('elements', module)
  .addDecorator(withKnobs)
  .add('Cover', () => {
    const visible = boolean('visible', false);
    const message = text('message', 'Message');

    return <Cover visible={visible}>{message}</Cover>;
  });
