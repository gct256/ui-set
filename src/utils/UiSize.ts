export type UiSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'none';
export enum UiSizeValues {
  /** Extra small size. */
  xs = 'xs',
  /** Small size. */
  sm = 'sm',
  /** Default size. */
  base = 'base',
  /** Large size. */
  lg = 'lg',
  /** Extra large size. */
  xl = 'xl',
  /** No size. (use default size) */
  none = 'none',
}

export const getTextSizeClassName = (
  defaultClassName: string,
  uiSize?: UiSize,
): string => {
  switch (uiSize) {
    case UiSizeValues.xs:
      return 'text-xs';

    case UiSizeValues.sm:
      return 'text-sm';

    case UiSizeValues.base:
      return 'text-base';

    case UiSizeValues.lg:
      return 'text-lg';

    case UiSizeValues.xl:
      return 'text-xl';

    default:
      return defaultClassName;
  }
};

export const getSmallTextSizeClassName = (
  defaultClassName: string,
  uiSize?: UiSize,
): string => {
  switch (uiSize) {
    case UiSizeValues.xs:
      return 'text-xxs';

    case UiSizeValues.sm:
      return 'text-xs';

    case UiSizeValues.base:
      return 'text-sm';

    case UiSizeValues.lg:
      return 'text-base';

    case UiSizeValues.xl:
      return 'text-lg';

    default:
      return defaultClassName;
  }
};

export const getHeightClassName = (
  defaultClassName: string,
  uiSize?: UiSize,
): string => {
  switch (uiSize) {
    case UiSizeValues.xs:
      return 'h-4';

    case UiSizeValues.sm:
      return 'h-6';

    case UiSizeValues.base:
      return 'h-8';

    case UiSizeValues.lg:
      return 'h-10';

    case UiSizeValues.xl:
      return 'h-12';

    default:
      return defaultClassName;
  }
};
