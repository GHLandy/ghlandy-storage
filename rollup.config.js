import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/storage.ts',
    external: [],
    plugins: [typescript({ useTsconfigDeclarationDir: true })],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
