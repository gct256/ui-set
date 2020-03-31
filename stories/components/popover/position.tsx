import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';

import { ExampleStage } from '../../utils/ExampleStage';
import { Popover } from '../../../src';

type PositionTestProps = {
  position: React.ComponentProps<typeof Popover>['position'];
};

const PositionTest: React.FC<PositionTestProps> = ({
  position,
}: PositionTestProps) => {
  const divClass = 'absolute w-32 h-16 border-4 border-blue-500';
  const popClass = 'border-2 border-black p-1';

  const ref1 = React.useRef<HTMLDivElement | null>(null);
  const ref2 = React.useRef<HTMLDivElement | null>(null);
  const ref3 = React.useRef<HTMLDivElement | null>(null);
  const ref4 = React.useRef<HTMLDivElement | null>(null);
  const ref5 = React.useRef<HTMLDivElement | null>(null);
  const ref6 = React.useRef<HTMLDivElement | null>(null);
  const ref7 = React.useRef<HTMLDivElement | null>(null);
  const ref8 = React.useRef<HTMLDivElement | null>(null);
  const ref9 = React.useRef<HTMLDivElement | null>(null);

  const [target1, setTarget1] = React.useState<HTMLDivElement | null>(null);
  const [target2, setTarget2] = React.useState<HTMLDivElement | null>(null);
  const [target3, setTarget3] = React.useState<HTMLDivElement | null>(null);
  const [target4, setTarget4] = React.useState<HTMLDivElement | null>(null);
  const [target5, setTarget5] = React.useState<HTMLDivElement | null>(null);
  const [target6, setTarget6] = React.useState<HTMLDivElement | null>(null);
  const [target7, setTarget7] = React.useState<HTMLDivElement | null>(null);
  const [target8, setTarget8] = React.useState<HTMLDivElement | null>(null);
  const [target9, setTarget9] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setTarget1(ref1.current);
    setTarget2(ref2.current);
    setTarget3(ref3.current);
    setTarget4(ref4.current);
    setTarget5(ref5.current);
    setTarget6(ref6.current);
    setTarget7(ref7.current);
    setTarget8(ref8.current);
    setTarget9(ref9.current);
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={ref1} className={`top-0 left-0 ${divClass}`} />
      <div ref={ref2} className={`top-0 right-0 ${divClass}`} />
      <div ref={ref3} className={`top-0 inset-x-0 mx-auto ${divClass}`} />
      <div ref={ref4} className={`bottom-0 left-0 ${divClass}`} />
      <div ref={ref5} className={`bottom-0 right-0 ${divClass}`} />
      <div ref={ref6} className={`bottom-0 inset-x-0 mx-auto ${divClass}`} />
      <div ref={ref7} className={`inset-y-0 left-0 my-auto ${divClass}`} />
      <div ref={ref8} className={`inset-y-0 right-0 my-auto ${divClass}`} />
      <div ref={ref9} className={`inset-0 m-auto ${divClass}`} />

      <Popover
        target={target1}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target2}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target3}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target4}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target5}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target6}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target7}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target8}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
      <Popover
        target={target9}
        position={position}
        visible
        className={popClass}
      >
        popover
      </Popover>
    </div>
  );
};

export const position = () => (
  <ExampleStage>
    <PositionTest
      position={optionsKnob(
        'position',
        {
          top: 'top',
          bottom: 'bottom',
          left: 'left',
          right: 'right',
          'top-bottom': 'top-bottom',
          'bottom-top': 'bottom-top',
          'left-right': 'left-right',
          'right-left': 'right-left',
        },
        'top-bottom',
        {
          display: 'inline-radio',
        },
      )}
    />
  </ExampleStage>
);
