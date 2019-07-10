import { UiSize } from './UiSize';

/** Props for HTML element. */
export interface BasicProps {
  /** ClassName. */
  className?: string;
}

/** Props for UI element. */
export interface UiProps extends BasicProps {
  /** If true, use disabled style and disable use input. */
  disabled?: boolean;
  /** UI Element size. */
  uiSize?: UiSize;
}

/** Props for UI element with values. */
export interface FieldProps<T> extends UiProps {
  /** Value. */
  value?: T;

  /**
   * Event handler on value changed.
   *
   * @param value value.
   */
  onChange?(value: T): void;
}
