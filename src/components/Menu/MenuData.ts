import { CSSProperties } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type MenuItemData = {
  /** Id of menu item. */
  id: string;
  /** Icon for menu item. */
  icon?: IconProp;
  /** Label for menu item. */
  label?: string;

  /** If true, display a check mark in front of the menu item. */
  checked?: boolean;
  /** If true, use disabled style and disable use input. */
  disabled?: boolean;

  /** Array of child menu tems. */
  items?: MenuData;
};

export type MenuData = MenuItemData[];

export const SEPARATOR_ID = '----';

/** Menu separator. */
export const MENU_SEPARATOR = {
  id: SEPARATOR_ID,
};

export const Z_INDEX_FOR_MENU = 31;

export const STYLE_FOR_MENU: CSSProperties = {
  zIndex: Z_INDEX_FOR_MENU,
};

export const STYLE_FOR_MENUBAR: CSSProperties = {
  zIndex: Z_INDEX_FOR_MENU,
};

export const STYLE_FOR_MENUBAR_COVER: CSSProperties = {
  zIndex: Z_INDEX_FOR_MENU - 1,
};
