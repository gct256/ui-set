import { isEnterKey } from './isEnterKey';

export const handleInputKeyPress = <T>(
  ev: React.KeyboardEvent<HTMLInputElement>,
  valueGetter: (element: HTMLInputElement) => T,
  onEnterKey?: (value: T) => void,
): void => {
  if (!isEnterKey(ev)) return;

  if (onEnterKey) onEnterKey(valueGetter(ev.currentTarget));

  ev.preventDefault();
  ev.stopPropagation();
};
