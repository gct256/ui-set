import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { FormCell } from '../../src/forms/FormCell';
import { FormRow } from '../../src/forms/FormRow';
import { Label } from '../../src/forms/Label';
import { InputText } from '../../src/fields/InputText';
import { InputNumber } from '../../src/fields/InputNumber';
import { Select } from '../../src/fields/Select';
import { InputRange } from '../../src/fields/InputRange';
import { Checkbox } from '../../src/fields/Checkbox';
import { RadioGroup } from '../../src/fields/RadioGroup';
import { Separator } from '../../src/elements/Separator';

const selectItems = ['Alpha', 'Beta', 'Gamma'];
const radioItems1 = ['Delta', 'Epsilon', 'Zeta'];
const radioItems2 = ['Eta', 'Theta', 'Iota'];

storiesOf('forms / Form example', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <div className="m-4">
      <FormRow>
        <FormCell className="w-24">
          <Label>text</Label>
        </FormCell>
        <FormCell className="w-32">
          <InputText />
        </FormCell>
        <FormCell className="w-32">
          <InputText />
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell className="w-24">
          <Label>number</Label>
        </FormCell>
        <FormCell className="w-24">
          <InputNumber min={0} max={255} />
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell className="w-24">
          <Label>select</Label>
        </FormCell>
        <FormCell className="w-24">
          <Select withEmptyItem items={selectItems} />
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell className="w-24">
          <Label>range</Label>
        </FormCell>
        <FormCell className="w-24">
          <InputRange />
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell className="w-24">
          <Label>check</Label>
        </FormCell>
        <FormCell className="w-24">
          <Checkbox>checkbox</Checkbox>
        </FormCell>
      </FormRow>
      <Separator />
      <FormRow>
        <FormCell className="w-24">
          <Label>radio</Label>
        </FormCell>
        <FormCell>
          <RadioGroup name="radio1" items={radioItems1} />
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell className="w-24">
          <Label>radio</Label>
        </FormCell>
        <FormCell>
          <RadioGroup name="radio2" vertical items={radioItems2} />
        </FormCell>
      </FormRow>
    </div>
  ));
