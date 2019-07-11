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

export function getFieldWrapClassName({
  userClassName,
  uiSize,
  bordered,
  disabled,
  fixedHeight,
  otherClassName,
}: {
  userClassName: ClassValue;
  uiSize?: UiSize;
  bordered?: boolean;
  disabled?: boolean;
  fixedHeight?: boolean;
  otherClassName?: ClassValue;
}) {
  return classnames(
    userClassName,
    'w-full inline-block align-top',
    `focus-within:${colors.inputArea.focus.bg}`,
    {
      'p-0': !bordered,
      'border p-px': bordered,
      [`focus-within:border-2 focus-within:${colors.standard.focus.border} focus-within:p-0`]: bordered,
    },
    {
      [colors.standard.normal.border]: bordered && !disabled,
      [`hover:${colors.inputArea.hover.border}`]: bordered && !disabled,
      [colors.standard.disabled.border]: bordered && disabled,
    },
    {
      [colors.standard.normal.bg]: !disabled,
      [colors.standard.disabled.bg]: disabled,
    },
    {
      [colors.inputArea.normal.text]: !disabled,
      [`hover:${colors.inputArea.hover.text}`]: !disabled,
      [colors.inputArea.disabled.text]: disabled,
    },
    {
      [getHeightClassName('h-8', uiSize)]: fixedHeight,
    },
    otherClassName,
  );
}

export function getFieldClassName({
  userClassName,
  bordered,
  uiSize,
  fixedHeight,
  noYPadding,
  forInput,
  otherClassName,
}: {
  userClassName?: ClassValue;
  bordered?: boolean;
  uiSize?: UiSize;
  fixedHeight?: boolean;
  noYPadding?: boolean;
  forInput?: boolean;
  otherClassName?: ClassValue;
}) {
  return classnames(
    userClassName,
    'ui block',
    'px-2 w-full bg-transparent',
    getTextSizeClassName('text-base', uiSize),
    `focus:${colors.inputArea.focus.bg} focus:outline-none`,
    {
      [`focus:${colors.inputArea.focus.text}`]: forInput,
      'py-1': noYPadding,
      'focus:focus-animation': bordered,
      'focus:focus-animation-border': !bordered,
      'block leading-normal': !fixedHeight,
      'h-full': fixedHeight,
    },
    otherClassName,
  );
}

export function getCheckboxClassName({
  userClassName,
  disabled,
  otherClassName,
}: {
  userClassName?: ClassValue;
  disabled?: boolean;
  otherClassName?: ClassValue;
}) {
  return classnames(
    userClassName,
    'ui-set select-none',
    'inline-flex justify-start items-center',
    'h-8 py-1 pr-1 pl-1',
    'focus:outline-none',
    'focus-within:focus-animation',
    `border-transparent focus-within:${colors.standard.focus.border} border-2`,
    {
      'active:opacity-75': !disabled,
      [`hover:${colors.standard.hover.text}`]: !disabled,
      [`focus-within:${colors.standard.focus.text}`]: !disabled,
      [colors.standard.normal.text]: !disabled,
      [colors.standard.disabled.text]: disabled,
    },
    otherClassName,
  );
}
