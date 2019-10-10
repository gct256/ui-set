/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from 'react';
import classnames from 'classnames';

import { MenuData, STYLE_FOR_MENUBAR } from '../Menu/MenuData';
import { BasicProps } from '../../utils/commonProps';

import { MenubarGroup } from './MenubarGroup';
import { MenubarCover } from './MenubarCover';

type MenubarProps = BasicProps & {
  /** Menu data for left side. */
  left?: MenuData;

  /** Menu data for right side. */
  right?: MenuData;

  /**
   * Event callback on menu select.
   *
   * @param id Id of menu item.
   */
  onSelect?(id: string): void;
};

/** Menubar component. */
export const Menubar: React.FC<MenubarProps> = ({
  className,
  left = [],
  right = [],
  onSelect = () => {},
}: MenubarProps) => {
  const [opened, setOpened] = React.useState(false);
  const [openPath, setOpenPath] = React.useState([] as string[]);

  const handleOnClick = React.useCallback(() => {
    setOpenPath([]);
    setOpened(false);
  }, [opened, openPath]);

  const handleOnSelect = React.useCallback(
    (id: string) => {
      setOpened(false);
      onSelect(id);
    },
    [opened, openPath],
  );

  return (
    <>
      <MenubarCover visible={opened} onClick={handleOnClick} />
      <div
        style={STYLE_FOR_MENUBAR}
        className={classnames(className, 'flex justify-between')}
        onClick={handleOnClick}
      >
        <MenubarGroup
          key="left"
          data={left}
          opened={opened}
          openPath={openPath}
          onSelect={handleOnSelect}
          onSetOpened={setOpened}
          onSetOpenPath={setOpenPath}
        />
        <MenubarGroup
          key="right"
          data={right}
          opened={opened}
          openPath={openPath}
          onSelect={handleOnSelect}
          onSetOpened={setOpened}
          onSetOpenPath={setOpenPath}
        />
      </div>
    </>
  );
};

Menubar.displayName = 'Menubar';
