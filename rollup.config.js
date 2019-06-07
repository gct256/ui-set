import autoExternal from 'rollup-plugin-auto-external';
import typescript2 from 'rollup-plugin-typescript2';

const isProduction = process.env.NODE_ENV === 'production';

// 共通設定
const base = {
  input: './src/index.ts',
  plugins: [
    autoExternal(),
    typescript2({
      tsconfigOverride: {
        compilerOptions: {
          declaration: isProduction,
          declarationDir: './types',
        },
        include: [
          './src/index.ts',
          './src/missing.d.ts',
          './src/components/utils/commonProps.ts',
        ],
        exclude: ['./node_modules/**/*.*'],
      },
      useTsconfigDeclarationDir: true,
    }),
  ],
};

// CommonJS向けビルド
const targets = [
  {
    ...base,
    output: {
      file: './lib/ui-set.js',
      format: 'cjs',
    },
  },
];

if (isProduction) {
  // ES Modules向けビルド（リリース時のみ）
  targets.push({
    ...base,
    output: {
      file: './lib/ui-set.mjs',
      format: 'es',
    },
  });
}

// eslint-disable-next-line import/no-default-export
export default targets;
