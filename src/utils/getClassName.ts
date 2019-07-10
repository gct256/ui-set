import classnames from 'classnames';

import { colors } from './colors';
import { UiSize, getHeightClassName, getTextSizeClassName } from './UiSize';

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
  uiSize?: UiSize,
  bordered?: boolean,
  disabled?: boolean,
  fixedHeight?: boolean,
  baseClassName?: string,
) {
  return classnames(
    baseClassName,
    'w-full inline-block align-top',
    `focus-within:${colors.inputArea.focus.bg}`,
    {
      'p-0': !bordered,
      'border p-px': bordered,
      [`focus-within:border-2 focus-within:${colors.standard.focus.border} focus-within:p-0`]: bordered,
    },
    {
      [colors.standard.normal.border]: bordered && !disabled,
      [colors.standard.disabled.border]: bordered && disabled,
    },
    {
      [colors.standard.normal.bg]: !disabled,
      [colors.standard.disabled.bg]: disabled,
    },
    {
      [colors.inputArea.normal.text]: !disabled,
      [colors.inputArea.disabled.text]: disabled,
    },
    {
      [getHeightClassName('h-8', uiSize)]: fixedHeight,
    },
    userClassName,
  );
}

export function getFieldClassName(
  bordered?: boolean,
  uiSize?: UiSize,
  fixedHeight?: boolean,
  noYPadding?: boolean,
  ...classNames: ClassValue[]
) {
  return classnames(
    'ui block',
    'px-2 w-full bg-transparent',
    getTextSizeClassName('text-base', uiSize),
    `focus:${colors.inputArea.focus.bg} focus:${colors.inputArea.focus.text} focus:outline-none`,
    {
      'py-1': noYPadding,
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
    `border-transparent focus-within:${colors.standard.focus.border} border-2`,
    {
      'hover:opacity-75 active:opacity-100': !disabled,
      [colors.standard.disabled.text]: disabled,
    },
    ...classNames,
  );
}
