const update = (components, e, key, color, level, alphas) => {
  const lv = level === '' ? '' : `-${level}`;

  alphas.forEach((alpha) => {
    Object.assign(components, {
      [`.${e(`bg-${key}${lv}-a${alpha}`)}`]: {
        backgroundColor: `color(${color} a(${alpha}%))`,
      },
      [`.${e(`text-${key}${lv}-a${alpha}`)}`]: {
        color: `color(${color} a(${alpha}%))`,
      },
      [`.${e(`border-${key}${lv}-a${alpha}`)}`]: {
        borderColor: `color(${color} a(${alpha}%))`,
      },
    });
  });
};

module.exports = () => ({ config, addUtilities, e }) => {
  const colors = config('theme.colors');
  const components = {};
  const alphas = [0, 25, 50, 75];

  Object.keys(colors).forEach((key) => {
    const color = colors[key];

    if (color === 'transparent') return;

    if (typeof color === 'string') {
      update(components, e, key, color, '', alphas);
    } else if (typeof color === 'object') {
      Object.keys(color).forEach((v) => {
        update(components, e, key, v, color[v], alphas);
      });
    }
  });

  addUtilities(components);
};
