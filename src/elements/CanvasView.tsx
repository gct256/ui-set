import * as React from 'react';

import { BasicProps } from '../utils/commonProps';

type RenderMode = 'default' | 'clearly' | 'fine';

function getPixelRatio(): number {
  const ratio = window.devicePixelRatio;

  if (typeof ratio !== 'number' || !Number.isFinite(ratio) || ratio < 1) {
    return 1;
  }

  return Math.ceil(ratio);
}

function getScales(renderMode?: RenderMode): [number, number] {
  const ratio = getPixelRatio();

  switch (renderMode) {
    case 'fine':
      return [ratio, ratio];
    case 'clearly':
      return [ratio, 1];

    default:
      return [1, 1];
  }
}

interface CanvasViewProps extends BasicProps {
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
}

/** Controlable HTML Canvas element. */
export class CanvasView extends React.Component<CanvasViewProps> {
  private ref1: React.RefObject<HTMLCanvasElement> = React.createRef();

  private ref2: React.RefObject<HTMLCanvasElement> = React.createRef();

  public componentDidMount() {
    this.renderToCanvas(this.props);
  }

  public shouldComponentUpdate(nextProps: CanvasViewProps): boolean {
    const { className, width, height, renderMode, serial } = this.props;

    if (
      className !== nextProps.className ||
      width !== nextProps.width ||
      height !== nextProps.height ||
      renderMode !== nextProps.renderMode
    ) {
      return true;
    }

    if (serial !== nextProps.serial) {
      this.renderToCanvas(nextProps);
    }

    return false;
  }

  public componentDidUpdate() {
    this.renderToCanvas(this.props);
  }

  private renderToCanvas(props: CanvasViewProps) {
    if (this.ref1.current === null || this.ref2.current === null) return;

    const front = this.ref1.current.getContext('2d');
    const back = this.ref2.current.getContext('2d');

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
  }

  public render() {
    const { className, width, height, renderMode } = this.props;
    const [scale1, scale2] = getScales(renderMode);
    const style = {
      width: `${width}px`,
      height: `${height}px`,
    };

    return (
      <>
        <canvas
          className={className}
          ref={this.ref1}
          width={width * scale1}
          height={height * scale1}
          style={style}
        />
        <canvas
          className="hidden"
          ref={this.ref2}
          width={width * scale2}
          height={height * scale2}
        />
      </>
    );
  }
}
