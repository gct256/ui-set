import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { Icon } from '../../src/elements/Icon';

storiesOf('elements / Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('default', () => <Icon icon={faUser} fixedWidth />)
  .add('custom color', () => (
    <Icon icon={faUser} fixedWidth className="text-blue-500" />
  ))
  .add('enabled color', () => (
    <Icon icon={faUser} fixedWidth disabled={false} />
  ))
  .add('disabled color', () => <Icon icon={faUser} fixedWidth disabled />)
  .add('empty icon', () => <Icon fixedWidth empty />)
  .add('no icon', () => <Icon icon={undefined} />);
