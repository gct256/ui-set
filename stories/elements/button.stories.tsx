import * as React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { Button } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Elements / Button',
  decorators: [withKnobs],
};

export const textOnly = () => (
  <Stage>
    <Button className="mr-2">Button</Button>
    <Button className="mr-2" primary>
      Primary Button
    </Button>
    <Button className="mr-2" disabled>
      Disabled Button
    </Button>
    <Button className="mr-2" primary disabled>
      Disabled Primary Button
    </Button>
  </Stage>
);

export const iconOnly = () => (
  <Stage>
    <Button className="mr-2" icon={faUser} />
    <Button className="mr-2" primary icon={faUser} />
    <Button className="mr-2" disabled icon={faUser} />
    <Button className="mr-2" primary disabled icon={faUser} />
  </Stage>
);

export const iconAndText = () => (
  <Stage>
    <Button className="mr-2" icon={faUser}>
      Button
    </Button>
    <Button className="mr-2" primary icon={faUser}>
      Primary Button
    </Button>
    <Button className="mr-2" disabled icon={faUser}>
      Disabled Button
    </Button>
    <Button className="mr-2" primary disabled icon={faUser}>
      Disabled Primary Button
    </Button>
  </Stage>
);

export const sizes = () => (
  <Stage>
    <Button className="mr-2" uiSize="xs">
      xs: X-small
    </Button>
    <Button className="mr-2" uiSize="sm">
      sm: Small
    </Button>
    <Button className="mr-2">(not set)</Button>
    <Button className="mr-2" uiSize="lg">
      lg: Large
    </Button>
    <Button className="mr-2" uiSize="xl">
      xl: X-large
    </Button>
  </Stage>
);

export const events = () => {
  const [count, setCount] = useState('count', 0);
  const handleOnClick = React.useCallback(() => setCount(count + 1), [count]);

  return (
    <Stage>
      <Button className="mr-2" onClick={handleOnClick}>
        Button
      </Button>
      <Button className="mr-2" onClick={handleOnClick} disabled>
        Button
      </Button>
      <p>
        click count: <span>{count}</span>
      </p>
    </Stage>
  );
};
