import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { ExampleStage } from '../utils/ExampleStage';
import { Cover, Icon, Button } from '../../src';
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
    <Cover visible>
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="mt-2" />
    </Cover>
  </ExampleStage>
);

export const setClassName = () => (
  <ExampleStage>
    <ExampleLorem />
    <ExampleLorem />
    <ExampleLorem />
    <Cover visible className="opacity-75 bg-green-500">
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="mt-2" />
    </Cover>
  </ExampleStage>
);

export const setContentClassName = () => (
  <ExampleStage>
    <ExampleLorem />
    <ExampleLorem />
    <ExampleLorem />
    <Cover
      visible
      contentClassName="p-2 m-2 right-0 bottom-0 rounded flex justify-center items-center opacity-75 bg-white text-black"
    >
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="ml-2" />
    </Cover>
  </ExampleStage>
);

export const notModal = () => {
  const [visible, setVisible] = useState('visible', false);
  const handleClick = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <ExampleStage>
      <Button onClick={handleClick}>Toggle Cover</Button>
      <Cover visible={visible}>
        <p>Cover message</p>
        <Icon icon={faSpinner} spin className="mt-2" />
      </Cover>
    </ExampleStage>
  );
};

export const modal = () => {
  const [visible, setVisible] = useState('visible', false);
  const handleClick = React.useCallback(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 1000);
  }, [visible]);

  return (
    <ExampleStage>
      <Button onClick={handleClick}>Show Cover</Button>
      <Cover visible={visible} modal>
        <p>Wait 1sec.</p>
        <Icon icon={faSpinner} spin className="mt-2" />
      </Cover>
    </ExampleStage>
  );
};

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = 'inset 0 0 10px #f00';
    }
  });

  return (
    <Cover visible ref={ref}>
      Cover
    </Cover>
  );
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
