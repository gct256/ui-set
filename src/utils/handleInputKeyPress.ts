import { isEnterKey } from './isEnterKey';

export function handleInputKeyPress<T>(
  ev: React.KeyboardEvent<HTMLInputElement>,
  valueGetter: (element: HTMLInputElement) => T,
  onEnterKey?: (value: T) => void,
) {
  if (!isEnterKey(ev)) return;

  if (onEnterKey) onEnterKey(valueGetter(ev.currentTarget));

  ev.preventDefault();
  ev.stopPropagation();
}
