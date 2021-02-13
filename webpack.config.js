const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  const isAnalyze = env && env.analyze

  const basePlugins = [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: __dirname + '/public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : 'static/css/[name].[contenthash:6].css'
    }),
    new webpack.ProgressPlugin()
  ]

  let prodPlugins = [
    ...basePlugins,
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      test: /\.(css|js|html|svg)$/
    })
  ]

  if (isAnalyze) {
    prodPlugins = [...prodPlugins, new BundleAnalyzerPlugin()]
  }

  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader', 'eslint-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev
                  ? '[path][name].[ext]'
                  : 'static/media/[name].[contenthash:6].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(pdf|doc?x|xls?x|ppt?x)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev
                  ? '[path][name].[ext]'
                  : 'static/document/[name].[contenthash:6].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve('src'),
        '@@': path.resolve()
      }
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'static/js/main.[contenthash:6].js',
      sourceMapFilename: '[name].[hash:8].map',
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: isDev ? 'source-map' : false,
    plugins: isDev ? basePlugins : prodPlugins,
    devServer: {
      contentBase: 'public',
      compress: true,
      port: 9000,
      hot: true,
      watchContentBase: true,
      historyApiFallback: true
    },
    performance: {
      maxEntrypointSize: 800000
    }
  }
}
