/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import classnames from 'classnames';
import { faCaretRight, faCheck } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../elements/Icon';
import { colors } from '../../utils/colors';

import { MenuData, MenuItemData, SEPARATOR_ID } from './MenuData';
import { SubMenu } from './SubMenu';
import { updateOpenPath } from './updateOpenPath';
import { MenuLabel } from './MenuLabel';

type MenuItemProps = {
  item: MenuItemData;
  depth: number;
  openPath: string[];
  onSelect(id: string): void;
  onSetOpenPath(openPath: string[]): void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  depth,
  openPath,
  onSelect,
  onSetOpenPath,
}: MenuItemProps) => {
  const c: MenuData = Array.isArray(item.items) ? item.items : [];
  const hasChildren = c.length > 0;

  const handleHover = React.useCallback(() => {
    onSetOpenPath(updateOpenPath(openPath, depth, item.id));
  }, [item, openPath, onSetOpenPath]);
  const handleBlur = React.useCallback(() => {
    onSetOpenPath(updateOpenPath(openPath, depth));
  }, [item, openPath, onSetOpenPath]);
  const handleSelect = React.useCallback(() => {
    if (!item.disabled && !hasChildren) {
      if (onSelect) onSelect(item.id);
      onSetOpenPath([]);
    }
  }, [item, hasChildren, openPath, onSelect, onSetOpenPath]);

  if (item.id === SEPARATOR_ID) return <hr />;

  let label = typeof item.label === 'string' ? item.label.trim() : '';

  if (label === '' && !item.icon) label = item.id;

  const { disabled } = item;
  const higlighted = openPath[depth] === item.id;

  return (
    <div
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
    >
      <span
        className={classnames(
          'p-1 h-8 flex justify-start items-center cursor-default select-none whitespace-no-wrap',
          {
            [colors.menu.normal.text]: !disabled && !higlighted,
            [colors.menu.normal.bg]: !higlighted,
            [colors.menu.active.text]: !disabled && higlighted,
            [colors.menu.active.bg]: !disabled && higlighted,
            [`hover:${colors.menu.normal.bg}`]: disabled,
            [`hover:${colors.menu.active.text}`]: !disabled,
            [`hover:${colors.menu.active.bg}`]: !disabled,
            [colors.menu.disabled.text]: disabled,
          },
        )}
        onClick={handleSelect}
      >
        <Icon
          icon={item.checked ? faCheck : undefined}
          empty={!item.checked}
          fixedWidth
          className="mr-1"
          size="xs"
        />
        <Icon icon={item.icon} fixedWidth size="xs" />
        <MenuLabel label={label} />
        <Icon
          icon={hasChildren ? faCaretRight : undefined}
          empty={!hasChildren}
          fixedWidth
          size="xs"
        />
      </span>
      {hasChildren && openPath[depth] === item.id ? (
        <SubMenu
          data={c}
          depth={depth + 1}
          openPath={openPath}
          onSelect={onSelect}
          onSetOpenPath={onSetOpenPath}
        />
      ) : null}
    </div>
  );
};

MenuItem.displayName = 'MenuItem';
