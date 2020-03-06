import { keyName } from 'w3c-keyname';

export const handleInputKeyDown = <T, E extends HTMLElement>(
  ev: React.KeyboardEvent<E>,
  valueGetter: (element: E) => T,
  onKeyDown?: (key: string, value: T, ev: React.KeyboardEvent<E>) => void,
): void => {
  if (onKeyDown) {
    onKeyDown(
      keyName(ev instanceof KeyboardEvent ? ev : ev.nativeEvent),
      valueGetter(ev.currentTarget),
      ev,
    );
  }
};
