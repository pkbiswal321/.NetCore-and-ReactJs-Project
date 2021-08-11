const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
  },
  plugins: [
    // new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Pradeep'),
    }),
  ],
}