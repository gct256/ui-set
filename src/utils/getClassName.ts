import classnames from 'classnames';

import { colors } from './colors';

type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassArray
  | undefined
  | null
  | boolean;

interface ClassDictionary {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [id: string]: any;
}

interface ClassArray extends Array<ClassValue> {}

export function getFieldWrapClassName(
  userClassName: ClassValue,
  bordered?: boolean,
  disabled?: boolean,
  fixedHeight?: boolean,
  baseClassName?: string,
) {
  return classnames(
    baseClassName,
    'w-full inline-block align-top',
    `focus-within:${colors.bg.focus}`,
    {
      'p-0': !bordered,
      'border p-px': bordered,
      [`focus-within:border-2 focus-within:${
        colors.border.focus
      } focus-within:p-0`]: bordered,
      [colors.border.normal]: bordered && !disabled,
      [colors.border.disabled]: bordered && disabled,
      [colors.bg.normal]: !disabled,
      [colors.bg.disabled]: disabled,
      [colors.text.normal]: !disabled,
      [colors.text.disabled]: disabled,
      'h-8': fixedHeight,
    },
    userClassName,
  );
}

export function getFieldClassName(
  bordered?: boolean,
  fixedHeight?: boolean,
  ...classNames: ClassValue[]
) {
  return classnames(
    'ui',
    'px-2 py-1 w-full bg-transparent',
    `focus:${colors.bg.focus} focus:${colors.text.focus} focus:outline-none`,
    {
      'focus:focus-animation': bordered,
      'focus:focus-animation-border': !bordered,
      'block leading-normal': !fixedHeight,
      'h-full': fixedHeight,
    },
    ...classNames,
  );
}

export function getCheckboxClassName(
  userClassName?: ClassValue,
  disabled?: boolean,
  ...classNames: ClassValue[]
) {
  return classnames(
    userClassName,
    'ui-set select-none',
    'inline-flex justify-start items-center',
    'h-8 py-1 pr-1 pl-1',
    'focus:outline-none',
    'focus-within:focus-animation',
    `border-transparent focus-within:${colors.border.focus} border-2`,
    {
      'hover:opacity-75 active:opacity-100': !disabled,
      [colors.text.disabled]: disabled,
    },
    ...classNames,
  );
}
