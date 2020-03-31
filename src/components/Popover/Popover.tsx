import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../../utils/commonProps';

type PopoverPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-bottom'
  | 'bottom-top'
  | 'left-right'
  | 'right-left';
type PopoverXAlign = 'left' | 'center' | 'right';
type PopoverYAlign = 'top' | 'center' | 'bottom';

type PopoverProps = BasicProps<HTMLDivElement> & {
  visible?: boolean;
  position?: PopoverPosition;
  xAlign?: PopoverXAlign;
  yAlign?: PopoverYAlign;
  fitToTarget?: boolean;
  margin?: number;
  target: HTMLElement | Window | null | undefined;
};

type Rect = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
};

const initialStyle: React.CSSProperties = {
  marginLeft: '',
  marginRight: '',
  marginTop: '',
  marginBottom: '',
  left: '',
  right: '',
  top: '',
  bottom: '',
  width: '',
  height: '',
  visibility: 'hidden',
};

const getRect = (target: HTMLElement | Window): Rect =>
  target instanceof Window
    ? {
        left: 0,
        right: target.innerWidth,
        top: 0,
        bottom: target.innerHeight,
        width: target.innerWidth,
        height: target.innerHeight,
      }
    : target.getBoundingClientRect();

const getStyle = (
  position: PopoverPosition,
  xAlign: PopoverXAlign,
  yAlign: PopoverYAlign,
  fitToTarget: boolean,
  margin: number,
  target: PopoverProps['target'],
  node: HTMLDivElement | null,
): React.CSSProperties => {
  if (target === null || target === undefined || node === null) {
    return {
      visibility: 'hidden',
    };
  }

  const style: React.CSSProperties = {
    ...initialStyle,
    visibility: 'visible',
  };
  const targetRect = getRect(target);
  const viewportRect = getRect(window);
  const nodeRect = getRect(node);

  let realPosition: 'left' | 'right' | 'top' | 'bottom' = 'top';
  let left: number | undefined;
  let right: number | undefined;
  let top: number | undefined;
  let bottom: number | undefined;
  let width: number | undefined;
  let height: number | undefined;

  switch (position) {
    case 'top-bottom':
      realPosition =
        targetRect.top - viewportRect.top - nodeRect.height < 0
          ? 'bottom'
          : 'top';
      break;

    case 'bottom-top':
      realPosition =
        targetRect.top + targetRect.height + nodeRect.height >
        viewportRect.height
          ? 'top'
          : 'bottom';
      break;

    case 'left-right':
      realPosition =
        targetRect.left - viewportRect.left - nodeRect.width < 0
          ? 'right'
          : 'left';
      break;

    case 'right-left':
      realPosition =
        targetRect.left + targetRect.width + nodeRect.width > viewportRect.width
          ? 'left'
          : 'right';
      break;

    default:
      // left, right, top, bottom
      realPosition = position;
      break;
  }

  switch (realPosition) {
    case 'right':
      left = targetRect.left + targetRect.width + margin;
      break;

    case 'top':
      top = targetRect.top - nodeRect.height - margin;
      break;

    case 'bottom':
      top = targetRect.top + targetRect.height + margin;
      break;

    default:
      // left
      left = targetRect.left - nodeRect.width - margin;
      break;
  }

  if (realPosition === 'left' || realPosition === 'right') {
    if (fitToTarget) {
      top = targetRect.top - viewportRect.top;
      height = targetRect.height;
    } else {
      switch (yAlign) {
        case 'center':
          top =
            targetRect.top -
            viewportRect.top +
            (targetRect.height - nodeRect.height) / 2;
          break;

        case 'bottom':
          bottom = targetRect.top - viewportRect.top;
          break;

        default:
          top = targetRect.top;
          break;
      }
    }
  } else if (fitToTarget) {
    left = targetRect.left - viewportRect.left;
    width = targetRect.width;
  } else {
    switch (xAlign) {
      case 'center':
        left =
          targetRect.left -
          viewportRect.left +
          (targetRect.width - nodeRect.width) / 2;

        break;

      case 'right':
        right = targetRect.left - viewportRect.left;
        break;

      default:
        left = targetRect.left - viewportRect.left;
        break;
    }
  }

  if (left !== undefined) style.left = `${left}px`;

  if (right !== undefined) style.right = `${right}px`;

  if (top !== undefined) style.top = `${top}px`;

  if (bottom !== undefined) style.bottom = `${bottom}px`;

  if (width !== undefined) style.width = `${width}px`;

  if (height !== undefined) style.height = `${height}px`;

  return style;
};

/** Popover component. */
export const Popover: React.FC<PopoverProps> = React.forwardRef(
  (
    {
      visible = false,
      position = 'top-bottom',
      xAlign = 'left',
      yAlign = 'top',
      fitToTarget = false,
      margin = 0,
      target,

      className,

      children,
    }: React.PropsWithChildren<PopoverProps>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const divRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const { current } = ref && 'current' in ref ? ref : divRef;

      if (current === null) return;

      Object.assign(
        current.style,
        getStyle(
          position,
          xAlign,
          yAlign,
          fitToTarget,
          margin,
          target,
          current,
        ),
      );
    });

    if (!target || !visible) return null;

    return (
      <div
        style={{ ...initialStyle }}
        className={classnames('absolute', className)}
        ref={ref || divRef}
      >
        {children}
      </div>
    );
  },
);

Popover.displayName = 'Popover';
