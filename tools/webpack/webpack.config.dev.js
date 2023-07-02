/**
 * Copyright {TODO}.
 *
 * This source code is licensed under the WTFPL license found in the
 * LICENSE file in the root of this projects source tree.
 */

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: require('./webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: require('./webpack.aliases'),
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true, // Required for react-router
    // Add proxy to backend server
    // proxy: {
    //   '/api': 'http://localhost:8000',
    // },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
