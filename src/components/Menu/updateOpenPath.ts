/**
 * Update menu open path.
 *
 * @param openPath Current open path
 * @param depth Depth of menu item.
 * @param id Id of menu item.
 */
export const updateOpenPath = (
  openPath: string[],
  depth: number,
  id?: string,
): string[] => {
  // depth=0, id=zzz
  // [] --> [zzz]
  // [foo] --> [zzz]
  // [foo, bar] --> [zzz]

  // depth=2, id=zzz
  // [foo] --> Error
  // [foo, bar] --> [foo, bar, zzz]
  // [foo, bar, baz] --> [foo, bar, zzz]
  // [foo, bar, baz, qux] --> [foo, bar, zzz]

  const newOpenPath = [...openPath];

  while (newOpenPath.length > depth) {
    newOpenPath.pop();
  }

  if (newOpenPath.length < depth) {
    throw new Error('illegal open path');
  }

  if (id !== undefined) newOpenPath.push(id);

  return newOpenPath;
};
