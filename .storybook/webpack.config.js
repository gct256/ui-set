module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
    exclude: [/stories\.\/old/],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
