import { UiSize } from './UiSize';

/** Props for HTML element. */
export type BasicProps = {
  /** ClassName. */
  className?: string;
};

/** Props for UI element. */
export type UiProps = BasicProps & {
  /** If true, use disabled style and disable use input. */
  disabled?: boolean;
};

/** Props for UI element with UI size. */
export type SizedUiProps = UiProps & {
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
