import { Ref } from 'react';

import { UiSize } from './UiSize';

/** Props for HTML element. */
export type BasicProps<T> = {
  /** ClassName. */
  className?: string;
  /** React's ref. */
  ref?: Ref<T>;
};

/** Props for UI element. */
export type UiProps<T> = BasicProps<T> & {
  /** If true, use disabled style and disable use input. */
  disabled?: boolean;
};

/** Props for UI element with UI size. */
export type SizedUiProps<T> = UiProps<T> & {
  /** UI Element size. */
  uiSize?: UiSize;
};

/** Props for UI element with values. */
export type FieldProps<T> = {
  /** Value. */
  value?: T;

  /**
   * Event handler on value changed.
   *
   * @param value value.
   */
  onChange?(value: T): void;

  /**
   * Event handler on focused.
   */
  onFocus?(): void;

  /**
   * Event handler on focus lost.
   */
  onBlur?(): void;
};
