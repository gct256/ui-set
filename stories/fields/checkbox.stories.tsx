import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / Checkbox',
  decorators: [withKnobs],
};

export const standard = () => {
  const [checked, setChecked] = useState('checked', false);

  return (
    <ExampleStage>
      <p>
        <Checkbox checked={checked} onChange={setChecked}>
          Checkbox
        </Checkbox>
      </p>
      <p>
        <Checkbox checked={checked} onChange={setChecked} disabled>
          Disabled Checkbox
        </Checkbox>
      </p>
    </ExampleStage>
  );
};

export const withoutLabel = () => {
  const [checked, setChecked] = useState('checked', false);

  return (
    <ExampleStage>
      <p>
        <Checkbox checked={checked} onChange={setChecked} />
      </p>
      <p>
        <Checkbox checked={checked} onChange={setChecked} disabled />
      </p>
    </ExampleStage>
  );
};

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [checked, setChecked] = useState('checked', false);
  const [focus, setFocus] = useState('focus', 0);
  const [blur, setBlur] = useState('blur', 0);

  const handleOnChange = React.useCallback(
    (newChecked: boolean) => {
      setCount(count + 1);
      setChecked(newChecked);
    },
    [count],
  );
  const handleOnFocus = React.useCallback(() => {
    setFocus(focus + 1);
  }, [setFocus]);
  const handleOnBlur = React.useCallback(() => {
    setBlur(blur + 1);
  }, [setFocus]);

  return (
    <ExampleStage>
      <p>
        <Checkbox
          checked={checked}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </p>
      <p>
        <Checkbox
          checked={checked}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          disabled
        />
      </p>
      <p>Value: {checked ? 'ON' : 'OFF'}</p>
      <p>Change: {count}</p>
      <p>
        Focus: {focus} / {blur}
      </p>
    </ExampleStage>
  );
};

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current && ref.current.parentNode instanceof HTMLElement) {
      ref.current.parentNode.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <Checkbox ref={ref}>Checkbox</Checkbox>;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
