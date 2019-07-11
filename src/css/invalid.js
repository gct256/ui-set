module.exports = () => ({ addVariant, e }) => {
  addVariant('invalid', ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) => `.invalid${e(separator)}${e(className)}:invalid`,
    );
  });
};
