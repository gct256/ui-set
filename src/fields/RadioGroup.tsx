import * as React from 'react';
import classnames from 'classnames';

import { FieldProps, UiProps } from '../utils/commonProps';
import { SelectItem, Item, mapSelectItems } from '../utils/SelectItem';
import { getCheckboxClassName } from '../utils/getClassName';
import { colors } from '../utils/colors';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

type RadioGroupProps = UiProps<HTMLDivElement> &
  FieldProps<string> & {
    /** Prefix of HTML's id attrbiute. */
    htmlIdPrefix?: string;
    /** Name of radio group. */
    name: string;
    /** Array of choices. */
    items?: SelectItem[];
    /** If true, layout verticaly. */
    vertical?: boolean;
  };

type RadioProps = RadioGroupProps & {
  htmlId?: string;
  index: number;
  item: Item;
};

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
  onFocus,
  onBlur,
}: RadioProps) => {
  const [hover, setHover] = React.useState(false);
  const handleOnEnter = React.useCallback(() => setHover(true), []);
  const handleOnLeave = React.useCallback(() => setHover(false), []);

  const handleOnFocus = React.useCallback(
    (ev: React.FocusEvent<HTMLInputElement>) => {
      if (ev.currentTarget.parentNode) {
        startAnimation(
          ev.currentTarget.parentNode.parentNode,
          animations.focusAnimationBorder,
        );
      }

      if (onFocus) onFocus();
    },
    [onFocus],
  );

  const handleOnBlur = React.useCallback(
    (ev: React.FocusEvent<HTMLInputElement>) => {
      if (ev.currentTarget.parentNode) {
        removeAllAnimations(ev.currentTarget.parentNode.parentNode);
      }

      if (onBlur) onBlur();
    },
    [onBlur],
  );

  const handleOnChange = React.useCallback(
    () => onChange && onChange(item.value),
    [onChange],
  );

  return (
    <label
      htmlFor={htmlId}
      className={getCheckboxClassName({
        disabled,
        otherClassName: {
          'ml-2': !vertical && index > 0,
          'mt-2': vertical && index > 0,
        },
      })}
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
    >
      <span
        className={classnames(
          'border-2 mr-1 w-4 h-4 flex rounded-lg justify-center items-center',
          {
            [colors.standard.normal.bg]: !disabled,
            [colors.standard.disabled.bg]: disabled,
            [colors.standard.hover.border]: !disabled && hover,
            [colors.standard.normal.border]: !disabled,
            [colors.standard.disabled.border]: disabled,
          },
        )}
      >
        {value === item.value ? (
          <span
            className={classnames('w-2 h-2 rounded-lg block', {
              [colors.mark.normal.bg]: !disabled && !hover,
              [colors.mark.hover.bg]: !disabled && hover,
              [colors.mark.disabled.bg]: disabled,
            })}
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
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
      />
      {item.text}
    </label>
  );
};

export const RadioGroup: React.FC<RadioGroupProps> = React.forwardRef(
  (props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    const { htmlIdPrefix, name, items, vertical, className } = props;
    const prefix = htmlIdPrefix === undefined ? name : htmlIdPrefix;

    return (
      <div
        className={classnames(className, 'ui form-group with-animation', {
          'vertical flex flex-col items-start': vertical,
          'horizontal flex flex-row items-start': !vertical,
        })}
        ref={ref}
      >
        {mapSelectItems(items).map((item, i) => (
          <Radio
            htmlId={`${prefix}:${item.value}`}
            {...props}
            key={item.value}
            item={item}
            index={i}
          />
        ))}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
