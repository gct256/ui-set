import * as React from 'react';

import {
  FormRow,
  FormCell,
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
    <FormRow>
      <FormCell className="w-24">
        <Label>field 1</Label>
      </FormCell>
      <FormCell className="w-64">
        <InputText className="w-full" />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell className="w-24">
        <Label>field 2</Label>
      </FormCell>
      <FormCell className="w-64">
        <Select items={items} className="w-full" />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell className="w-24">
        <Label>field 3</Label>
      </FormCell>
      <FormCell className="w-64">
        <Checkbox>check</Checkbox>
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell className="w-24">
        <Label>field 4</Label>
      </FormCell>
      <FormCell className="w-64">
        <RadioGroup name="example-radio" items={items} />
      </FormCell>
    </FormRow>
    <FormRow>
      <FormCell className="w-24 h-16">
        <Label>field 5</Label>
      </FormCell>
      <FormCell className="w-64 h-16">
        <InputTextArea className="w-full h-full" />
      </FormCell>
    </FormRow>
  </>
);

ExampleForm.displayName = 'ExampleForm';
