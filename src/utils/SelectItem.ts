/**
 * 選択リストなどの厳密な項目
 */
export interface Item {
  value: string;
  text?: string;
}

/**
 * 選択リストなどの項目
 */
export type SelectItem = string | Item;

/**
 * 選択リストなどの項目リストを厳密な項目リストに変換する
 *
 * @param items 選択リストなどの項目リスト
 */
export function mapSelectItems(items?: SelectItem[]): Item[] {
  if (items === undefined) return [];

  return items.map((item) =>
    typeof item === 'string'
      ? { value: item, text: item }
      : {
          value: item.value,
          text: item.text === undefined ? item.value : item.text,
        },
  );
}
