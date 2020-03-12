import * as React from 'react';

import { BasicProps } from '../utils/commonProps';

type RenderMode = 'default' | 'clearly' | 'fine';

const getPixelRatio = (): number => {
  const ratio = window.devicePixelRatio;

  if (typeof ratio !== 'number' || !Number.isFinite(ratio) || ratio < 1) {
    return 1;
  }

  return Math.ceil(ratio);
};

const getScales = (renderMode?: RenderMode): [number, number] => {
  const ratio = getPixelRatio();

  switch (renderMode) {
    case 'fine':
      return [ratio, ratio];

    case 'clearly':
      return [ratio, 1];

    default:
      return [1, 1];
  }
};

type CanvasViewProps = BasicProps & {
  /** Width of canvas element. */
  width: number;
  /** Height of canvas element. */
  height: number;
  /** Serial value to control redraw. */
  serial: number | string;
  /** Rendering mode. */
  renderMode?: RenderMode;

  /**
   * Event handler on redraw.
   */
  onRedraw: (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    scale: number,
    serial: number | string,
  ) => void;
};

const renderToCanvas = (
  props: CanvasViewProps,
  ref1: React.RefObject<HTMLCanvasElement>,
  ref2: React.RefObject<HTMLCanvasElement>,
): void => {
  if (ref1.current === null || ref2.current === null) return;

  const front = ref1.current.getContext('2d');
  const back = ref2.current.getContext('2d');

  if (front === null || back === null) return;

  const { width, height, serial, renderMode, onRedraw } = props;

  if (width === 0 || height === 0) return;

  const [scale1, scale2] = getScales(renderMode);

  back.setTransform(1, 0, 0, 1, 0, 0);
  back.scale(scale2, scale2);
  onRedraw(back, width, height, scale2, serial);

  front.imageSmoothingEnabled = renderMode !== 'clearly';
  front.clearRect(0, 0, width * scale1, height * scale1);
  front.drawImage(
    back.canvas,
    0,
    0,
    width * scale2,
    height * scale2,
    0,
    0,
    width * scale1,
    height * scale1,
  );
};

/** Controlable HTML Canvas element. */
export const CanvasView: React.FC<CanvasViewProps> = React.memo(
  (props: CanvasViewProps) => {
    const ref1 = React.useRef<HTMLCanvasElement>(null);
    const ref2 = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
      renderToCanvas(props, ref1, ref2);
    }, [props]);

    const { className, width, height, renderMode } = props;
    const [scale1, scale2] = getScales(renderMode);
    const style = {
      width: `${width}px`,
      height: `${height}px`,
    };

    return (
      <>
        <canvas
          className={className}
          ref={ref1}
          width={width * scale1}
          height={height * scale1}
          style={style}
        />
        <canvas
          className="hidden"
          ref={ref2}
          width={width * scale2}
          height={height * scale2}
        />
      </>
    );
  },
  (prevProps: CanvasViewProps, nextProps: CanvasViewProps) =>
    prevProps.className === nextProps.className &&
    prevProps.width === nextProps.width &&
    prevProps.height === nextProps.height &&
    prevProps.renderMode === nextProps.renderMode &&
    prevProps.serial === nextProps.serial,
);
