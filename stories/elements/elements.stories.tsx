import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { BorderedView, Separator, FlatButton, Icon } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Elements',
  decorators: [withKnobs],
};

export const borderedView = () => (
  <Stage>
    <BorderedView className="w-20 h-20" disabled={boolean('disabled', false)} />
  </Stage>
);

export const separator = () => {
  const disabled = boolean('disabled', false);

  return (
    <Stage>
      <div className="w-64 h-64">
        <Separator disabled={disabled} />
        <Separator disabled={disabled} vertical />
      </div>
    </Stage>
  );
};

export const flatButton = () => (
  <Stage>
    <FlatButton>Flat Button</FlatButton>
    <FlatButton>
      <Icon icon={faUser} />
    </FlatButton>
  </Stage>
);
