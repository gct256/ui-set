export type DatasetKey = {
  key: string;
  attrName: string;
};

export const getDatasetKey = (key: string): DatasetKey => ({
  key,
  attrName: `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
});
