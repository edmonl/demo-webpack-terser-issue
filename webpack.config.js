import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import { fileURLToPath } from 'url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default {
  mode: 'production',
  devtool: false,
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(rootDir, 'dist'),
  },
  resolve: {
    modules: [path.join(rootDir, 'modules')],
  },
  // uncomment the below to disable name mangling, which is enabled by default
  /* optimization: {
    minimizer: [
      new TerserPlugin({
        // uncomment below to exclude files for minification,
        // thought this cannot stop mangling in JSON.
        // exclude: /./,
        terserOptions: { mangle: false },
      }),
    ],
  } */
}
