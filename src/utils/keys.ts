import { keyName } from 'w3c-keyname';
// eslint-disable-next-line import/no-unresolved
import { Key } from 'ts-key-enum';

export const isSpaceKey = (
  ev: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
): boolean =>
  keyName(ev instanceof KeyboardEvent ? ev : ev.nativeEvent) === ' ';

export const isEnterKey = (
  ev: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
): boolean =>
  keyName(ev instanceof KeyboardEvent ? ev : ev.nativeEvent) === Key.Enter;

export const isEscapeKey = (
  ev: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
): boolean =>
  keyName(ev instanceof KeyboardEvent ? ev : ev.nativeEvent) === Key.Escape;

export const canClickEmulation = (
  ev: React.KeyboardEvent<HTMLElement>,
): boolean => {
  if (!isSpaceKey(ev) && !isEnterKey(ev)) return false;

  ev.preventDefault();
  ev.stopPropagation();

  return true;
};
