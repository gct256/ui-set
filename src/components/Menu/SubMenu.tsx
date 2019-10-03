import * as React from 'react';
import classnames from 'classnames';

import { MenuBody, MenuBodyProps } from './MenuBody';
import { Z_INDEX_FOR_MENU } from './MenuData';

type SubMenuClassSet = {
  left: string;
  right: string;
  top: string;
  bottom: string;
};

const BASE_CLASS = 'absolute shadow';

const DEFAULT_CLASS_SET: SubMenuClassSet = {
  left: 'left-full -ml-1',
  right: 'right-full -mr-1',
  top: 'top-0',
  bottom: 'bottom-0',
};

const MENUBAR_CLASS_SET: SubMenuClassSet = {
  left: 'left-0',
  right: 'right-0',
  top: 'top-full',
  bottom: 'bottom-full',
};

type SubMenuProps = MenuBodyProps & {
  menubar?: boolean;
};

const getViewport = (target: HTMLElement): ClientRect | DOMRect => {
  const { parentElement } = target;

  if (parentElement === null) {
    return {
      x: 0,
      y: 0,
      width: target.clientWidth,
      height: target.clientHeight,
      left: 0,
      top: 0,
      right: target.clientWidth,
      bottom: target.clientHeight,
    };
  }

  const style = window.getComputedStyle(parentElement);

  if (style.overflow === 'visible') return getViewport(parentElement);

  return target.getBoundingClientRect();
};

export const SubMenu: React.FC<SubMenuProps> = (props: SubMenuProps) => {
  const { depth, menubar } = props;
  const style: React.CSSProperties = {
    zIndex: Z_INDEX_FOR_MENU + depth + 1,
  };
  const ref = React.useRef<HTMLDivElement>(null);
  const classSet = !menubar ? DEFAULT_CLASS_SET : MENUBAR_CLASS_SET;

  React.useEffect(() => {
    const { current } = ref;

    if (current === null) return;

    current.className = classnames(BASE_CLASS, classSet.left, classSet.top);

    const viewport = getViewport(current);
    const { left, top } = current.getBoundingClientRect();
    const right = left + current.scrollWidth > viewport.width;
    const bottom = top + current.scrollHeight > viewport.height;

    current.className = classnames(
      BASE_CLASS,
      right ? classSet.right : classSet.left,
      bottom ? classSet.bottom : classSet.top,
    );
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={classnames(
        'invisible',
        BASE_CLASS,
        classSet.left,
        classSet.top,
      )}
    >
      <MenuBody {...props} />
    </div>
  );
};
SubMenu.displayName = 'SubMenu';
