import * as React from 'react';

import { BasicProps } from '../utils/commonProps';

interface CanvasViewProps extends BasicProps {
  /** Width of canvas element. */
  width: number;
  /** Height of canvas element. */
  height: number;
  /** Serial value to control redraw. */
  serial: number | string;

  /**
   * Event handler on redraw.
   */
  onRedraw: (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    serial: number | string,
  ) => void;
}

/** Controlable HTML Canvas element. */
export class CanvasView extends React.Component<CanvasViewProps> {
  private ref: React.RefObject<HTMLCanvasElement> = React.createRef();

  public componentDidMount() {
    this.renderToCanvas(this.props);
  }

  public shouldComponentUpdate(nextProps: CanvasViewProps): boolean {
    const { className, width, height, serial } = this.props;

    if (
      className !== nextProps.className ||
      width !== nextProps.width ||
      height !== nextProps.height
    ) {
      return true;
    }

    if (serial !== nextProps.serial) {
      this.renderToCanvas(nextProps);
    }

    return false;
  }

  private renderToCanvas(props: CanvasViewProps) {
    if (this.ref.current === null) return;

    const context = this.ref.current.getContext('2d');

    if (context === null) return;

    const { width, height, serial, onRedraw } = props;

    onRedraw(context, width, height, serial);
  }

  public render() {
    const { className, width, height } = this.props;

    return (
      <canvas
        className={className}
        ref={this.ref}
        width={width}
        height={height}
      />
    );
  }
}
