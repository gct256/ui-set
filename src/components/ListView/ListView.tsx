import * as React from 'react';
import classnames from 'classnames';
import { keyName } from 'w3c-keyname';
import { Key } from 'ts-key-enum';

import { setScrollPosition } from '../../utils/setScrollPosition';
import { colors } from '../../utils/colors';

import { ListViewItem, itemIndexKey, isCursorTargetKey } from './ListViewItem';

const NO_CURSOR = -1;

// find item index by dataset
const getItemIndex = (root: HTMLElement, target: HTMLElement): number => {
  if (root === target) return NO_CURSOR;

  const itemIndex = target.dataset[itemIndexKey.key];

  if (itemIndex !== undefined) {
    return Number.parseInt(itemIndex, 10);
  }

  if (target.parentNode instanceof HTMLElement) {
    return getItemIndex(root, target.parentNode);
  }

  return NO_CURSOR;
};

const adjustCursor = (
  cursor: number | undefined,
  itemCount: number,
  allorwNoCursor: boolean,
): number => {
  if (
    typeof cursor !== 'number' ||
    !Number.isFinite(cursor) ||
    cursor < 0 ||
    itemCount <= cursor
  ) {
    return allorwNoCursor ? NO_CURSOR : 0;
  }

  return cursor;
};

type ListViewProps = {
  /** If true, component disabled. */
  disabled?: boolean;
  /** Array of list items. */
  items: React.ReactElement[];
  /** Initial cursor position. */
  initialCursor?: number;
  /** If true, component has 1px border. */
  bordered?: boolean;
  /** classNames. */
  classNames?: {
    /** className for list view. */
    default?: string;
    /** className for list view with disabled status. */
    disabled?: string;
    /** list view's item classNames. */
    item?: {
      /** className for list view's item. */
      default?: string;
      /** className for list view's item with cursor. */
      withCursor?: string;
      /** className for list view's item without cursor. */
      withoutCursor?: string;
      /** className for list view's item with disabled status and cursor. */
      disabled?: string;
    };
  };

  /**
   * Event callback on key down.
   *
   * @param ev Keyboard event.
   */
  onKeyDown?: (ev: React.KeyboardEvent<HTMLDivElement>) => void;

  /**
   * Event callback on cursor position updated.
   *
   * @param cursor New cursor position.
   */
  onUpdateCursor?: (cursor: number) => void;
};

/** Keyboard navigatable list view component. */
export const ListView: React.FC<ListViewProps> = ({
  items,
  initialCursor,
  bordered,
  classNames,
  onKeyDown,
  onUpdateCursor,
  disabled,
}: ListViewProps) => {
  const [cursor, setCursor] = React.useState(
    adjustCursor(initialCursor, items.length, true),
  );
  const ref = React.useRef<HTMLDivElement>(null);

  const itemDefaultClass =
    classNames && classNames.item ? classNames.item.default : '';
  const itemWithCursorClass =
    classNames && classNames.item ? classNames.item.withCursor : '';
  const itemWithoutCursorClass =
    classNames && classNames.item ? classNames.item.withoutCursor : '';
  const itemDisabledClass =
    classNames && classNames.item ? classNames.item.disabled : '';

  // build list items.
  const children = items.map((item, i) => (
    <ListViewItem
      key={item.key || undefined}
      index={i}
      isCursorTarget={i === cursor}
      className={classnames(
        itemDefaultClass,
        disabled && cursor === i ? itemDisabledClass : '',
        !disabled && cursor === i
          ? itemWithCursorClass
          : itemWithoutCursorClass,
      )}
    >
      {item}
    </ListViewItem>
  ));

  const updateCursor = (newCursor: number, allowNoCursor: boolean): void => {
    const adjusted = adjustCursor(newCursor, items.length, allowNoCursor);

    if (cursor === adjusted) return;

    setCursor(adjusted);

    if (onUpdateCursor) onUpdateCursor(adjusted);
  };

  React.useEffect(() => {
    const { current } = ref;

    if (current === null) return;

    const target = current.querySelector(`[${isCursorTargetKey.attrName}]`);

    if (target instanceof HTMLElement) {
      setScrollPosition(current, target);
    }

    if (cursor >= items.length) updateCursor(NO_CURSOR, true);
  });

  const handleClick = React.useCallback(
    (ev: React.MouseEvent<HTMLDivElement>) => {
      if (ref.current === null) return;

      if (!(ev.target instanceof HTMLElement)) return;

      const index = getItemIndex(ref.current, ev.target);

      console.debug('click', { index });

      updateCursor(index, true);
    },
    [onKeyDown, cursor, items, ref],
  );

  const handleKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLDivElement>) => {
      switch (keyName(ev.nativeEvent)) {
        case Key.ArrowUp: // fall through

        case Key.ArrowLeft:
          if (cursor === NO_CURSOR) {
            updateCursor(items.length - 1, false);
          } else if (cursor > 0) {
            updateCursor(cursor - 1, false);
          }
          break;

        case Key.ArrowDown: // fall through

        case Key.ArrowRight:
          if (cursor === NO_CURSOR) {
            updateCursor(0, false);
          } else if (cursor < items.length - 1) {
            updateCursor(cursor + 1, false);
          }
          break;

        default:
          if (onKeyDown) onKeyDown(ev);

          return;
      }

      ev.preventDefault();
      ev.stopPropagation();
    },
    [onKeyDown, cursor, items, ref],
  );

  const className = classnames(
    classNames ? classNames.default : '',
    'w-full h-full overflow-x-hidden overflow-y-auto p-0',
    'focus:outline-none',
    {
      [colors.standard.normal.bg]: !disabled,
      [colors.standard.disabled.bg]: disabled,
    },
    {
      [colors.standard.normal.text]: !disabled,
      [`hover:${colors.standard.hover.text}`]: !disabled,
      [colors.standard.disabled.text]: disabled,
    },
    {
      border: bordered,
      [colors.standard.normal.border]: bordered && !disabled,
      [`hover:${colors.standard.hover.border}`]: bordered && !disabled,
      [colors.standard.disabled.border]: bordered && disabled,
    },
    classNames && disabled ? classNames.disabled : '',
  );

  if (disabled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full focus:outline-none"
      role="menu"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div ref={ref} className={className}>
        {children}
      </div>
      <div className="absolute inset-0 pointer-events-none focus-parent:focus-animation-border" />
    </div>
  );
};

ListView.displayName = 'ListView';
