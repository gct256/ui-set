import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import {
  BorderedView,
  FormRow,
  FormCell,
  Button,
  FlatButton,
  Icon,
  Separator,
  Checkbox,
  InputNumber,
  InputRange,
  InputText,
  InputTextArea,
  RadioGroup,
  Select,
  Label,
  ListView,
} from '../../src';

const items = ['foo', 'bar', 'baz'];

const listItems = [
  <div className="p-2">foo</div>,
  <div className="p-2">bar</div>,
  <div className="p-2">baz</div>,
];

storiesOf('common', module).add('color', () => (
  <div className="p-4">
    <FormRow>
      <FormCell>
        <BorderedView className="w-16 h-16" />
      </FormCell>
      <FormCell>
        <BorderedView className="w-16 h-16" disabled />
      </FormCell>
      <FormCell>
        <Button icon={faUser}>Button</Button>
      </FormCell>
      <FormCell>
        <Button icon={faUser} disabled>
          Button
        </Button>
      </FormCell>
      <FormCell>
        <Button icon={faUser} primary>
          Button
        </Button>
      </FormCell>
      <FormCell>
        <Button icon={faUser} primary disabled>
          Button
        </Button>
      </FormCell>
      <FormCell>
        <FlatButton>FlatButton</FlatButton>
      </FormCell>
      <FormCell>
        <FlatButton disabled>FlatButton</FlatButton>
      </FormCell>
      <FormCell>
        <Icon icon={faUser} />
      </FormCell>
      <FormCell>
        <Icon icon={faUser} disabled={false} />
      </FormCell>
      <FormCell>
        <Icon icon={faUser} disabled />
      </FormCell>
      <FormCell className="w-16">
        <Separator />
      </FormCell>
      <FormCell className="w-16">
        <Separator disabled />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell>
        <Checkbox>Checkbox</Checkbox>
      </FormCell>
      <FormCell>
        <Checkbox checked>Checkbox</Checkbox>
      </FormCell>
      <FormCell>
        <Checkbox disabled>Checkbox</Checkbox>
      </FormCell>
      <FormCell>
        <Checkbox checked disabled>
          Checkbox
        </Checkbox>
      </FormCell>
      <FormCell>
        <InputNumber min={0} max={10} />
      </FormCell>
      <FormCell>
        <InputNumber min={0} max={10} disabled />
      </FormCell>
      <FormCell>
        <InputNumber min={0} max={10} bordered={false} />
      </FormCell>
      <FormCell>
        <InputNumber min={0} max={10} bordered={false} disabled />
      </FormCell>
      <FormCell>
        <InputRange min={0} max={10} />
      </FormCell>
      <FormCell>
        <InputRange min={0} max={10} disabled />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell>
        <InputText size={10} />
      </FormCell>
      <FormCell>
        <InputText size={10} disabled />
      </FormCell>
      <FormCell>
        <InputText size={10} bordered={false} />
      </FormCell>
      <FormCell>
        <InputText size={10} bordered={false} disabled />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell>
        <InputTextArea />
      </FormCell>
      <FormCell>
        <InputTextArea disabled />
      </FormCell>
      <FormCell>
        <InputTextArea bordered={false} />
      </FormCell>
      <FormCell>
        <InputTextArea bordered={false} disabled />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell>
        <RadioGroup name="radio1" items={items} value="bar" />
      </FormCell>
      <FormCell>
        <RadioGroup name="radio1" items={items} value="bar" disabled />
      </FormCell>
      <FormCell>
        <Select items={items} />
      </FormCell>
      <FormCell>
        <Select items={items} disabled />
      </FormCell>
      <FormCell>
        <Select items={items} bordered={false} />
      </FormCell>
      <FormCell>
        <Select items={items} bordered={false} disabled />
      </FormCell>
      <FormCell>
        <Label>Label</Label>
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell>
        <ListView items={listItems} />
      </FormCell>
      <FormCell>
        <ListView items={listItems} disabled />
      </FormCell>
      <FormCell>
        <ListView bordered items={listItems} />
      </FormCell>
      <FormCell>
        <ListView bordered items={listItems} disabled />
      </FormCell>
    </FormRow>
  </div>
));
