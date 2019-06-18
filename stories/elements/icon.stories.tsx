import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { Icon } from '../../src/elements/Icon';

const colors = {
  'text-red-500': 'text-red-500',
  'text-green-500': 'text-green-500',
  'text-blue-500': 'text-blue-500',
};

storiesOf('elements / Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('default', () => (
    <Icon
      icon={faUser}
      fixedWidth={boolean('fixed width', true)}
      empty={boolean('empty', false)}
    />
  ))
  .add('custom color by className', () => (
    <Icon
      icon={faUser}
      fixedWidth
      className={select('color', colors, 'text-blue-500')}
    />
  ))
  .add('with state color', () => (
    <Icon icon={faUser} fixedWidth disabled={boolean('disabled', false)} />
  ))
  .add('undefined icon', () => <Icon icon={undefined} />)
  .add('no icon', () => <Icon />);
