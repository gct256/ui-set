import classnames from 'classnames';

import { colors } from './colors';
import { UiSize, getClassNameForSize } from './UiSize';

type ClassDictionary = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [id: string]: any;
};

type BaseClassValue =
  | string
  | number
  | ClassDictionary
  | undefined
  | null
  | boolean;

type ClassValue = BaseClassValue | BaseClassValue[];

export const getFieldWrapClassName = ({
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
}): string =>
  classnames(
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
      [getClassNameForSize(uiSize).button.height]: fixedHeight,
    },
    otherClassName,
  );

export const getFieldClassName = ({
  userClassName,
  uiSize,
  fixedHeight,
  noYPadding,
  forInput,
  otherClassName,
}: {
  userClassName?: ClassValue;
  uiSize?: UiSize;
  fixedHeight?: boolean;
  noYPadding?: boolean;
  forInput?: boolean;
  otherClassName?: ClassValue;
}): string => {
  const classNameForSize = getClassNameForSize(uiSize);

  return classnames(
    userClassName,
    'ui block with-animation',
    'w-full bg-transparent',
    classNameForSize.text,
    classNameForSize.field.padding,
    `focus:${colors.inputArea.focus.bg} focus:outline-none`,
    {
      [`focus:${colors.inputArea.focus.text}`]: forInput,
      'py-0': noYPadding,
      'block leading-normal': !fixedHeight,
      'h-full': fixedHeight,
    },
    otherClassName,
  );
};

export const getCheckboxClassName = ({
  userClassName,
  disabled,
  otherClassName,
}: {
  userClassName?: ClassValue;
  disabled?: boolean;
  otherClassName?: ClassValue;
}): string =>
  classnames(
    userClassName,
    'ui-set select-none with-animation',
    'inline-flex justify-start items-center',
    'h-8 py-1 pr-1 pl-1',
    'focus:outline-none',
    `border-transparent border-2`,
    {
      'active:opacity-75': !disabled,
      [`hover:${colors.standard.hover.text}`]: !disabled,
      [`focus-within:${colors.standard.focus.text}`]: !disabled,
      [colors.standard.normal.text]: !disabled,
      [colors.standard.disabled.text]: disabled,
    },
    otherClassName,
  );
