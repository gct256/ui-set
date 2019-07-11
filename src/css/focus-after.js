module.exports = () => ({ addVariant, e }) => {
  addVariant('focus-after', ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) => `*:focus + .focus-after${e(separator)}${e(className)}`,
    );
  });
};
