import {
  faUser,
  faAppleAlt,
  faStar,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

import { MenuData, MENU_SEPARATOR } from '../../src';

export const createMenuData = (prefix: string): MenuData => [
  {
    id: `${prefix}foo`,
    label: 'Foo',
  },
  {
    id: `${prefix}bar`,
    label: 'Bar',
    icon: faUser,
  },
  {
    id: `${prefix}icon_only`,
    icon: faAppleAlt,
    items: [
      { id: `${prefix}icon_only_foo`, checked: true },
      { id: `${prefix}icon_only_bar`, disabled: true },
      { id: `${prefix}icon_only_baz` },
    ],
  },
  MENU_SEPARATOR,
  {
    id: `${prefix}baz`,
    icon: faStar,
    label: 'Baz',
    checked: true,
    items: [
      {
        id: `${prefix}baz_foo`,
        icon: faSmile,
        label: 'Baz Foo',
        checked: true,
      },
      {
        id: `${prefix}baz_bar`,
        icon: faSmile,
        label: 'Baz Bar',
        disabled: true,
      },
      { id: `${prefix}baz_baz` },
    ],
  },
  {
    id: `${prefix}qux`,
    label: 'Qux',
    items: [
      { id: `${prefix}qux_foo`, disabled: true, icon: faUser },
      {
        id: `${prefix}qux_bar`,
        items: [
          { id: `${prefix}qux_bar_foo`, checked: true },
          { id: `${prefix}qux_bar_bar`, disabled: true },
          { id: `${prefix}qux_bar_baz` },
        ],
      },
      { id: `${prefix}qux_baz` },
    ],
  },
  {
    id: `${prefix}empty`,
    label: 'Empty',
    items: [],
  },
];
