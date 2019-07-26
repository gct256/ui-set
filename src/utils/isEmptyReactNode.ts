import { ReactNode } from 'react';

export const isEmptyReactNode = (node: ReactNode): boolean => {
  if (node === null || node === undefined || node === false) return true;
  if (typeof node === 'string' && node.trim().length === 0) return true;
  if (Array.isArray(node)) return !node.some((x) => !isEmptyReactNode(x));
  if (typeof node === 'object') return true;

  return false;
};
