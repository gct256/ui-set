import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

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

storiesOf('forms', module)
  .addDecorator(withKnobs)
  .add('Form example', () => {
    const [text1, setText1] = useState('text1', '');
    const [text2, setText2] = useState('text2', '');
    const [num1, setNum1] = useState('num1', 0);
    const [num2, setNum2] = useState('num2', 0);
    const [sel1, setSel1] = useState('sel1', '');
    const [check1, setCheck1] = useState('check1', false);
    const [radio1, setRadio1] = useState('radio1', '');
    const [radio2, setRadio2] = useState('radio2', '');

    return (
      <div className="m-4">
        <FormRow>
          <FormCell className="w-24">
            <Label>text</Label>
          </FormCell>
          <FormCell className="w-32">
            <InputText value={text1} onChange={setText1} />
          </FormCell>
          <FormCell className="w-32">
            <InputText value={text2} onChange={setText2} />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell className="w-24">
            <Label>number</Label>
          </FormCell>
          <FormCell className="w-24">
            <InputNumber min={0} max={255} value={num1} onChange={setNum1} />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell className="w-24">
            <Label>select</Label>
          </FormCell>
          <FormCell className="w-48">
            <Select
              withEmptyItem
              items={selectItems}
              value={sel1}
              onChange={setSel1}
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell className="w-24">
            <Label>range</Label>
          </FormCell>
          <FormCell className="w-48">
            <InputRange value={num2} onChange={setNum2} />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell className="w-24">
            <Label>check</Label>
          </FormCell>
          <FormCell className="w-24">
            <Checkbox checked={check1} onChange={setCheck1}>
              checkbox
            </Checkbox>
          </FormCell>
        </FormRow>
        <Separator />
        <FormRow>
          <FormCell className="w-24">
            <Label>radio</Label>
          </FormCell>
          <FormCell>
            <RadioGroup
              name="radio1"
              items={radioItems1}
              value={radio1}
              onChange={setRadio1}
            />
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell className="w-24">
            <Label>radio</Label>
          </FormCell>
          <FormCell>
            <RadioGroup
              name="radio2"
              vertical
              items={radioItems2}
              value={radio2}
              onChange={setRadio2}
            />
          </FormCell>
        </FormRow>
      </div>
    );
  });
