/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from 'react';

import { STYLE_FOR_MENUBAR_COVER } from '../Menu/MenuData';

type MenubarCoverProps = {
  visible: boolean;
  onClick(): void;
};

export const MenubarCover: React.FC<MenubarCoverProps> = ({
  visible,
  onClick,
}: MenubarCoverProps) =>
  visible ? (
    <div
      style={STYLE_FOR_MENUBAR_COVER}
      className="fixed inset-0"
      onClick={onClick}
    />
  ) : null;

MenubarCover.displayName = 'MenubarCover';
