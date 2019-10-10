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

type ClassNameForSize = {
  text: string;
  smallText: string;
  field: {
    padding: string;
  };
  button: {
    padding: string;
    width: string;
    height: string;
    iconMargin: string;
  };
};

const classes: { [key: string]: ClassNameForSize } = {
  xs: {
    text: 'text-xs',
    smallText: 'text-xxs',
    field: {
      padding: 'px-px',
    },
    button: {
      padding: 'px-px',
      width: 'w-4',
      height: 'h-4',
      iconMargin: 'mr-1',
    },
  },
  sm: {
    text: 'text-sm',
    smallText: 'text-xs',
    field: {
      padding: 'px-1',
    },
    button: {
      padding: 'px-1',
      width: 'w-6',
      height: 'h-6',
      iconMargin: 'mr-1',
    },
  },
  base: {
    text: 'text-base',
    smallText: 'text-sm',
    field: {
      padding: 'px-2',
    },
    button: {
      padding: 'px-2',
      width: 'w-8',
      height: 'h-8',
      iconMargin: 'mr-2',
    },
  },
  lg: {
    text: 'text-2xl',
    smallText: 'text-lg',
    field: {
      padding: 'px-3',
    },
    button: {
      padding: 'px-3',
      width: 'w-10',
      height: 'h-10',
      iconMargin: 'mr-3',
    },
  },
  xl: {
    text: 'text-3xl',
    smallText: 'text-2xl',
    field: {
      padding: 'px-4',
    },
    button: {
      padding: 'px-4',
      width: 'w-12',
      height: 'h-12',
      iconMargin: 'mr-4',
    },
  },
};

export const getClassNameForSize = (uiSize?: UiSize): ClassNameForSize => {
  if (uiSize === undefined) return classes.base;

  const tmp = classes[uiSize];

  return tmp === undefined ? classes.base : tmp;
};
