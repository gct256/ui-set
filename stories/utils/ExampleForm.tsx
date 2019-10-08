import * as React from 'react';

import {
  Row,
  Column,
  Label,
  InputText,
  Select,
  Checkbox,
  RadioGroup,
  InputTextArea,
} from '../../src';

const items = ['foo', 'bar', 'baz'];

export const ExampleForm: React.FC = () => (
  <>
    <Row className="mb-2">
      <Column width={2 / 12}>
        <Label>field 1</Label>
      </Column>
      <Column>
        <InputText className="w-full" />
      </Column>
    </Row>
    <Row className="mb-2">
      <Column width={2 / 12}>
        <Label>field 2</Label>
      </Column>
      <Column>
        <Select items={items} className="w-full" />
      </Column>
    </Row>
    <Row className="mb-2">
      <Column width={2 / 12}>
        <Label>field 3</Label>
      </Column>
      <Column>
        <Checkbox>check</Checkbox>
      </Column>
    </Row>
    <Row className="mb-2">
      <Column width={2 / 12}>
        <Label>field 4</Label>
      </Column>
      <Column>
        <RadioGroup name="example-radio" items={items} />
      </Column>
    </Row>
    <Row className="mb-2 h-32">
      <Column width={2 / 12}>
        <Label>field 5</Label>
      </Column>
      <Column>
        <InputTextArea className="w-full h-full" />
      </Column>
    </Row>
  </>
);

ExampleForm.displayName = 'ExampleForm';
