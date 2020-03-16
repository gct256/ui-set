import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ExampleStage } from '../utils/ExampleStage';
import { ExampleBlock } from '../utils/ExampleBlock';
import { Row, Column } from '../../src';

export default {
  title: 'Layouts',
  decorators: [withKnobs],
};

export const standard = () => (
  <ExampleStage>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>01/02</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>02/02</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>01/03</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>02/03</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>03/03</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>01/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>02/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>03/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>04/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>05/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>06/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>07/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>08/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>09/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>10/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>11/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>12/12</ExampleBlock>
      </Column>
    </Row>
  </ExampleStage>
);

export const width = () => (
  <ExampleStage>
    <Row className="w-full mb-2">
      <Column width={5 / 12}>
        <ExampleBlock>5/12</ExampleBlock>
      </Column>
      <Column width={7 / 12}>
        <ExampleBlock>7/12</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column width={5 / 12}>
        <ExampleBlock>5/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
      <Column width={7 / 12}>
        <ExampleBlock>7/12</ExampleBlock>
      </Column>
    </Row>

    <Row className="w-full mb-2">
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
    </Row>
  </ExampleStage>
);

export const packedColumn = () => (
  <ExampleStage>
    <Row className="mb-2">
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>not packed</ExampleBlock>
      </Column>
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
    </Row>
    <Row className="mb-2">
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
    </Row>
  </ExampleStage>
);

export const nested = () => (
  <ExampleStage>
    <Row>
      <Column>
        <Row className="mb-2">
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
        </Row>
        <Row>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
        </Row>
      </Column>
      <Column>
        <Row className="h-full">
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
        </Row>
      </Column>
      <Column>
        <ExampleBlock />
      </Column>
    </Row>
  </ExampleStage>
);

const RefTest: React.FC = () => {
  const rowRef = React.useRef<HTMLDivElement>(null);
  const columnRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    action(`rowRef: ${rowRef.current}`)();
    action(`columnRef: ${columnRef.current}`)();

    if (columnRef.current) {
      columnRef.current.style.boxShadow = 'inset 0 0 10px #f00';
    }

    if (rowRef.current) {
      rowRef.current.style.boxShadow = '0 0 10px #0f0';
    }
  });

  return (
    <Row ref={rowRef}>
      <Column ref={columnRef}>Column 1</Column>
      <Column>Column 2</Column>
    </Row>
  );
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
