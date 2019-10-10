/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from 'react';
import classnames from 'classnames';

import { MenuItemData, SEPARATOR_ID } from '../Menu/MenuData';
import { MenuLabel } from '../Menu/MenuLabel';
import { Icon } from '../../elements/Icon';
import { colors } from '../../utils/colors';
import { updateOpenPath } from '../Menu/updateOpenPath';
import { SubMenu } from '../Menu/SubMenu';

type MenubarItemProps = {
  item: MenuItemData;
  opened: boolean;
  openPath: string[];
  onSelect(id: string): void;
  onSetOpened(opened: boolean): void;
  onSetOpenPath(openPath: string[]): void;
};

export const MenubarItem: React.FC<MenubarItemProps> = ({
  item,
  opened,
  openPath,
  onSelect,
  onSetOpened,
  onSetOpenPath,
}: MenubarItemProps) => {
  const { id, icon, label, disabled, items = [] } = item;
  const handleOnClick = React.useCallback(
    (ev: React.MouseEvent) => {
      if (openPath[0] === id) {
        onSetOpenPath([]);
        onSetOpened(false);
      } else {
        onSetOpenPath(updateOpenPath(openPath, 0, id));
        onSetOpened(true);
      }

      ev.stopPropagation();
    },
    [item, opened, openPath],
  );
  const handleOnHover = React.useCallback(() => {
    if (opened) {
      onSetOpenPath(updateOpenPath(openPath, 0, id));
    }
  }, [item, opened, openPath]);

  if (id === SEPARATOR_ID || items.length === 0) return null;

  const visible = openPath[0] === id;

  return (
    <div className="relative">
      <div
        className={classnames('h-full flex justify-start items-center px-2', {
          [colors.menu.normal.bg]: !disabled && !visible,
          [colors.menu.normal.text]: !disabled && !visible,
          [colors.menu.active.bg]: !disabled && visible,
          [colors.menu.active.text]: !disabled && visible,
          [`hover:${colors.menu.hover.bg}`]: !disabled && !visible,
          [`hover:${colors.menu.hover.text}`]: !disabled && !visible,
        })}
        onClick={handleOnClick}
        onMouseEnter={handleOnHover}
      >
        <Icon icon={icon} />
        <MenuLabel label={label} />
      </div>
      {visible && items.length > 0 ? (
        <SubMenu
          menubar
          data={items}
          depth={1}
          openPath={openPath}
          onSelect={onSelect}
          onSetOpenPath={onSetOpenPath}
        />
      ) : null}
    </div>
  );
};

MenubarItem.displayName = 'MenubarItem';
