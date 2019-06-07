export interface DatasetKey {
  key: string;
  attrName: string;
}

export function getDatasetKey(key: string): DatasetKey {
  return {
    key,
    attrName: `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
  };
}
