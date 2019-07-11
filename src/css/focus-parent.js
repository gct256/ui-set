module.exports = () => ({ addVariant, e }) => {
  addVariant('focus-parent', ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) => `*:focus .focus-parent${e(separator)}${e(className)}`,
    );
  });
};
