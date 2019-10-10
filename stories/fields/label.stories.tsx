import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Stage } from '../utils/Stage';
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
  <Stage>
    <Label>Label</Label>
    <Label disabled>Disable Label</Label>
  </Stage>
);

export const sizes = () => (
  <Stage>
    <div className="flex">
      <Label uiSize="xs">X-small</Label>
      <Label uiSize="sm">Small</Label>
      <Label>(not set)</Label>
      <Label uiSize="lg">Large</Label>
      <Label uiSize="xl">X-large</Label>
    </div>
  </Stage>
);

const items: SelectItem[] = ['foo', 'bar', { text: 'Baz', value: 'baz' }];

export const withOthers = () => (
  <Stage>
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
  </Stage>
);
