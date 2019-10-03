import * as React from 'react';
import classnames from 'classnames';

import { MenuData } from './MenuData';
import { MenuItem } from './MenuItem';

export type MenuBodyProps = {
  data: MenuData;
  depth: number;
  openPath: string[];
  onSelect(id: string): void;
  onSetOpenPath(openPath: string[]): void;
};

export const MenuBody: React.FC<MenuBodyProps> = ({
  data,
  depth,
  openPath,
  onSelect,
  onSetOpenPath,
}: React.PropsWithChildren<MenuBodyProps>) => (
  <div
    className={classnames('inline-flex flex-col min-w-24 border flex flex-row')}
  >
    {data.map((item) => (
      <MenuItem
        key={item.id}
        depth={depth}
        openPath={openPath}
        item={item}
        onSelect={onSelect}
        onSetOpenPath={onSetOpenPath}
      />
    ))}
  </div>
);

MenuBody.displayName = 'MenuBody';
