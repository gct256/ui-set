import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ExampleStage } from '../utils/ExampleStage';
import {
  Label,
  InputText,
  Select,
  InputRange,
  Checkbox,
  Row,
  Column,
  RadioGroup,
  SelectItem,
  Button,
} from '../../src';

export default {
  title: 'Fields / Label',
  decorators: [withKnobs],
};

export const standard = () => (
  <ExampleStage>
    <Label>Label</Label>
    <Label disabled>Disable Label</Label>
  </ExampleStage>
);

export const sizes = () => (
  <ExampleStage>
    <div className="flex">
      <Label uiSize="xs">X-small</Label>
      <Label uiSize="sm">Small</Label>
      <Label>(not set)</Label>
      <Label uiSize="lg">Large</Label>
      <Label uiSize="xl">X-large</Label>
    </div>
  </ExampleStage>
);

const items: SelectItem[] = ['foo', 'bar', { text: 'Baz', value: 'baz' }];

export const withOthers = () => (
  <ExampleStage>
    <div className="w-64">
      <Row className="mb-2">
        <Column packed>
          <Label>Label</Label>
        </Column>
        <Column>
          <InputText />
        </Column>
      </Row>
      <Row className="mb-2">
        <Column packed>
          <Label>Label</Label>
        </Column>
        <Column>
          <Select items={items} />
        </Column>
      </Row>
      <Row className="mb-2">
        <Column packed>
          <Label>Label</Label>
        </Column>
        <Column>
          <InputRange />
        </Column>
      </Row>
      <Row className="mb-2">
        <Column packed>
          <Label>Label</Label>
        </Column>
        <Column>
          <Checkbox />
        </Column>
      </Row>
      <Row className="mb-2">
        <Column packed>
          <Label>Label</Label>
        </Column>
        <Column>
          <RadioGroup name="radio" items={items} />
        </Column>
      </Row>
      <Row className="mb-2">
        <Column packed>
          <Label>Label</Label>
        </Column>
        <Column>
          <Button>Button</Button>
        </Column>
      </Row>
    </div>
  </ExampleStage>
);

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <Label ref={ref}>Label</Label>;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
