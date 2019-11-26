import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { ExampleStage } from '../utils/ExampleStage';
import {
  Row,
  Column,
  Label,
  InputText,
  InputNumber,
  InputRange,
  Checkbox,
  InputTextArea,
  RadioGroup,
  Select,
} from '../../src';

export default {
  title: 'Fields',
  decorators: [withKnobs],
};

const items = ['foo', 'bar', 'baz'];

export const all = () => {
  const [checked, setChecked] = useState('checked', false);
  const [number, setNumber] = useState('number', 0);
  const [range, setRange] = useState('range', 0);
  const [text, setText] = useState('text', '');
  const [textarea, setTextarea] = useState('textarea', '');
  const [radio, setRadio] = useState('radio', '');
  const [select, setSelect] = useState('select', '');

  return (
    <ExampleStage>
      <div className="w-1/2 p-2">
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Checkbox</Label>
          </Column>
          <Column>
            <Checkbox checked={checked} onChange={setChecked}>
              Checkbox
            </Checkbox>
          </Column>
        </Row>
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Input number</Label>
          </Column>
          <Column>
            <InputNumber value={number} onChange={setNumber} />
          </Column>
        </Row>
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Input range</Label>
          </Column>
          <Column>
            <InputRange value={range} onChange={setRange} />
          </Column>
        </Row>
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Input text</Label>
          </Column>
          <Column>
            <InputText value={text} onChange={setText} />
          </Column>
        </Row>
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Input text</Label>
          </Column>
          <Column>
            <InputTextArea value={textarea} onChange={setTextarea} />
          </Column>
        </Row>
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Radio group</Label>
          </Column>
          <Column>
            <RadioGroup
              name="all"
              items={items}
              value={radio}
              onChange={setRadio}
            />
          </Column>
        </Row>
        <Row className="mb-2">
          <Column width={1 / 3}>
            <Label>Select</Label>
          </Column>
          <Column>
            <Select items={items} value={select} onChange={setSelect} />
          </Column>
        </Row>
      </div>
    </ExampleStage>
  );
};
