const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { PATHS, API } = require('./constants');

module.exports = merge([
  commonConfig,
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                data: `@import "${PATHS.src}/scss/variables";`,
                includePaths: [ PATHS.src ]
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(API.dev),
      }),
    ],
    devServer: {
      contentBase: PATHS.devPublic,
      hot: true,
      historyApiFallback: true,
      inline: true,
      stats: { colors: true },
      port: 3000,
      host: '0.0.0.0'
    },
  },
]);
