export enum UiSize {
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
    case UiSize.xs:
      return 'text-xs';
    case UiSize.sm:
      return 'text-sm';
    case UiSize.base:
      return 'text-base';
    case UiSize.lg:
      return 'text-lg';
    case UiSize.xl:
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
    case UiSize.xs:
      return 'text-xxs';
    case UiSize.sm:
      return 'text-xs';
    case UiSize.base:
      return 'text-sm';
    case UiSize.lg:
      return 'text-base';
    case UiSize.xl:
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
    case UiSize.xs:
      return 'h-4';
    case UiSize.sm:
      return 'h-6';
    case UiSize.base:
      return 'h-8';
    case UiSize.lg:
      return 'h-10';
    case UiSize.xl:
      return 'h-12';

    default:
      return defaultClassName;
  }
};
