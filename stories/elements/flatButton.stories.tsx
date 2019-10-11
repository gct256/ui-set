import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { ExampleStage } from '../utils/ExampleStage';
import { FlatButton } from '../../src';

export default {
  title: 'Elements / FlatButton',
  decorators: [withKnobs],
};

export const standard = () => (
  <ExampleStage>
    <FlatButton>Flat Button</FlatButton>
    <FlatButton disabled>Disabled Flat Button</FlatButton>
  </ExampleStage>
);

export const customize = () => (
  <ExampleStage>
    <FlatButton className="p-2 border border-red-500 bg-yellow-200 rounded">
      Flat Button
    </FlatButton>
  </ExampleStage>
);

export const events = () => {
  const [count, setCount] = useState('count', 0);
  const handleOnClick = React.useCallback(() => setCount(count + 1), [count]);

  return (
    <ExampleStage>
      <FlatButton className="mr-2" onClick={handleOnClick}>
        Flat Button
      </FlatButton>
      <FlatButton className="mr-2" onClick={handleOnClick} disabled>
        Flat Button
      </FlatButton>
      <p>
        click count: <span>{count}</span>
      </p>
    </ExampleStage>
  );
};
