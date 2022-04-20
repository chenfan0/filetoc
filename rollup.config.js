import typescript from '@rollup/plugin-typescript'

export default {
  input: './lib/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [typescript()]
}
