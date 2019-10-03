type ColorSet = {
  bg: string;
  border: string;
  text: string;
};

export type ColorTheme = {
  standard: {
    normal: ColorSet;
    hover: ColorSet;
    focus: ColorSet;
    disabled: ColorSet;
  };
  inverted: {
    normal: ColorSet;
    hover: ColorSet;
    focus: ColorSet;
    disabled: ColorSet;
  };
  menu: {
    normal: ColorSet;
    hover: ColorSet;
    active: ColorSet;
    disabled: ColorSet;
  };
  mark: {
    normal: ColorSet;
    hover: ColorSet;
    focus: ColorSet;
    disabled: ColorSet;
  };
  focusRing: {
    focus: ColorSet;
  };
  inputArea: {
    normal: ColorSet;
    hover: ColorSet;
    focus: ColorSet;
    disabled: ColorSet;
  };
};

// prettier-ignore
export const colors: ColorTheme = {
  standard:  {  normal:   { bg: 'bg-white',       border: 'border-gray-700',   text: 'text-gray-700' },
                hover:    { bg: '',               border: 'border-gray-900',   text: 'text-gray-900' },
                focus:    { bg: '',               border: 'border-blue-500',   text: 'text-gray-900' },
                disabled: { bg: 'bg-gray-200',    border: 'border-gray-400',   text: 'text-gray-400' }, },
  inverted: {   normal:   { bg: 'bg-gray-900',    border: 'border-gray-900',   text: 'text-white' },
                hover:    { bg: 'bg-gray-800',    border: 'border-gray-800',   text: '' },
                focus:    { bg: 'bg-gray-800',    border: 'border-gray-800',   text: '' },
                disabled: { bg: 'bg-gray-400',    border: 'border-gray-400',   text: 'text-gray-200' }, },
  menu:      {  normal:   { bg: 'bg-white',       border: '',                  text: 'text-gray-700' },
                hover:    { bg: 'bg-gray-200',    border: '',                  text: 'text-gray-900' },
                active:   { bg: 'bg-gray-800',    border: '',                  text: 'text-white' },
                disabled: { bg: '',               border: '',                  text: 'text-gray-400' }, },
  mark:      {  normal:   { bg: 'bg-gray-700',    border: '',                  text: ''},
                hover:    { bg: 'bg-black',       border: '',                  text: ''},
                focus:    { bg: 'bg-gray-400',    border: '',                  text: ''},
                disabled: { bg: 'bg-gray-400',    border: '',                  text: ''}, },
  focusRing: {  focus:    { bg: '',               border: 'border-blue-500',   text: '' }, },
  inputArea: {  normal:   { bg: 'white',          border: '',                  text: 'text-gray-700' },
                focus:    { bg: 'bg-yellow-200',  border: '',                  text: 'text-black ' },
                hover:    { bg: '',               border: 'border-black',      text: 'text-black  ' },
                disabled: { bg: 'bg-gray-200',    border: '',                  text: 'text-gray-400' }, },
};
