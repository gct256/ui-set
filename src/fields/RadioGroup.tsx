import * as React from 'react';
import classnames from 'classnames';

import { FieldProps } from '../utils/commonProps';
import { SelectItem, Item, mapSelectItems } from '../utils/SelectItem';
import { getCheckboxClassName } from '../utils/getClassName';
import { colors } from '../utils/colors';

interface RadioGroupProps extends FieldProps<string> {
  /** Prefix of HTML's id attrbiute. */
  htmlIdPrefix?: string;
  /** Name of radio group. */
  name: string;
  /** Array of choices. */
  items?: SelectItem[];
  /** If true, layout verticaly. */
  vertical?: boolean;
}

interface RadioProps extends RadioGroupProps {
  htmlId?: string;
  index: number;
  item: Item;
}

/** Radio group field. */
const Radio: React.FC<RadioProps> = ({
  htmlId,
  index,
  item,
  value,
  name,
  vertical,
  disabled,
  onChange,
}: RadioProps) => {
  const handleOnChange = React.useCallback(
    () => onChange && onChange(item.value),
    [onChange],
  );

  return (
    <label
      htmlFor={htmlId}
      className={getCheckboxClassName('', disabled, {
        'ml-2': !vertical && index > 0,
        'mt-2': vertical && index > 0,
      })}
    >
      <span
        className={`border-2 mr-1 w-4 h-4 flex rounded-lg justify-center items-center ${
          disabled ? colors.bg.disabled : colors.bg.normal
        } ${disabled ? colors.border.disabled : colors.border.normal}`}
      >
        {value === item.value ? (
          <span
            className={`w-2 h-2 rounded-lg block ${
              disabled ? colors.bg.markDisabled : colors.bg.mark
            }`}
          />
        ) : null}
      </span>
      <input
        id={htmlId}
        className="appearance-none"
        type="radio"
        name={name}
        checked={value === item.value}
        disabled={disabled}
        onChange={handleOnChange}
      />
      {item.text}
    </label>
  );
};

export const RadioGroup: React.FC<RadioGroupProps> = (
  props: RadioGroupProps,
) => {
  const { htmlIdPrefix, items, vertical, className } = props;

  return (
    <div
      className={classnames(className, 'ui form-group', {
        'vertical flex flex-col items-start': vertical,
        'horizontal flex flex-row items-start': !vertical,
      })}
    >
      {mapSelectItems(items).map((item, i) => (
        <Radio
          htmlId={`${htmlIdPrefix}:${item.value}`}
          {...props}
          key={item.value}
          item={item}
          index={i}
        />
      ))}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
