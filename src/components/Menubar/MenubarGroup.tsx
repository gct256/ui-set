import * as React from 'react';

import { MenuData } from '../Menu/MenuData';

import { MenubarItem } from './MenubarItem';

type MenubarGroupProps = {
  data: MenuData;
  opened: boolean;
  openPath: string[];
  onSelect(id: string): void;
  onSetOpened(opened: boolean): void;
  onSetOpenPath(openPath: string[]): void;
};

export const MenubarGroup: React.FC<MenubarGroupProps> = ({
  data,
  opened,
  openPath,
  onSelect,
  onSetOpened,
  onSetOpenPath,
}: MenubarGroupProps) => (
  <div className="flex">
    {data.map((item) => (
      <MenubarItem
        key={item.id}
        item={item}
        opened={opened}
        openPath={openPath}
        onSelect={onSelect}
        onSetOpened={onSetOpened}
        onSetOpenPath={onSetOpenPath}
      />
    ))}
  </div>
);

MenubarGroup.displayName = 'MenubarGroup';
