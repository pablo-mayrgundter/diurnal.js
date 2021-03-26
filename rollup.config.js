// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'diurnal.module.js',
  output: {
    file: 'diurnal.js',
    format: 'es'
  },
  plugins: [ resolve() ]
};
