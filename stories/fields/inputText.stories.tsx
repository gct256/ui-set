import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { InputText } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Fields / InputText',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', '');

  return (
    <Stage>
      <div className="w-64">
        <div className="mb-2">
          <InputText value={value} onChange={setValue} placeholder="Default" />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={setValue}
            readOnly
            disabled
            placeholder="Readonly, Disabled"
          />
        </div>
      </div>
    </Stage>
  );
};

export const noBorder = () => {
  const [value, setValue] = useState('value', '');

  return (
    <Stage>
      <div className="w-64">
        <div className="mb-2">
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            placeholder="Default"
          />
        </div>
        <div className="mb-2">
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            disabled
            placeholder="Readonly, Disabled"
          />
        </div>
      </div>
    </Stage>
  );
};

export const sizes = () => (
  <Stage>
    <div className="flex">
      <InputText uiSize="xs" placeholder="xs: X-small" className="mr-2" />
      <InputText uiSize="sm" placeholder="sm: Small" className="mr-2" />
      <InputText placeholder="(not set0" className="mr-2" />
      <InputText uiSize="lg" placeholder="lg: Large" className="mr-2" />
      <InputText uiSize="xl" placeholder="xl: X-large" className="mr-2" />
    </div>
  </Stage>
);

export const event = () => {
  const [changeCount, setChangeCount] = useState('changeCount', 0);
  const [enterCount, setEnterCount] = useState('enterCount', 0);
  const [value, setValue] = useState('value', 'lorem');
  const handleOnChange = React.useCallback(
    (newValue: string) => {
      setChangeCount(changeCount + 1);
      setValue(newValue);
    },
    [changeCount],
  );
  const handleOnEnterKey = React.useCallback(() => {
    setEnterCount(enterCount + 1);
  }, [enterCount]);

  return (
    <Stage>
      <div className="w-64">
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            disabled
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            readOnly
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            readOnly
            disabled
          />
        </div>
      </div>
      <p>Change: {changeCount}</p>
      <p>Enter Key: {enterCount}</p>
    </Stage>
  );
};
