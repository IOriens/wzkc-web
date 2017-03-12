const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ip = require('ip')

const postcssOptions = {
  plugins: function () {
    return [
      autoprefixer
    ]
  }
}

// Enviroment Checking
var isProduction = function () {
  return process.env.NODE_ENV === 'production'
}

var plugins = [
  new webpack.DefinePlugin({
    VERSION: pkg.version,
    DEBUG: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': isProduction() ? '"production"' : '"development"'
  }),

  new webpack.ProvidePlugin({
        // $: 'jquery',
        // jQuery: 'jquery',
        // 'window.jQuery': 'jquery'
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js'
  }),

  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html')
  }),

  new OpenBrowserPlugin({ url: `http://${ip.address()}:8080` })
]

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['env', 'react'],
      plugins: ['transform-object-rest-spread']
    }
  }, {
    test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        // loaders: ["url?limit=1024&name=img2/[name].[ext]"],
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '/[path][name].[ext]'
        }
      }
    ],
    exclude: /node_modules/
  }
]

if (isProduction()) {
  plugins.push(
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin('css/style.css')
    )

  loaders.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style',
      use: [
        'css-loader',
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: postcssOptions
        }
      ]
    })
  })
} else {
  loaders.push({
    test: /\.scss$/,
    exclude: /node_modules/,
            // loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
    use: [
      'style-loader', // creates style nodes from JS strings
      'css-loader', // translates CSS into CommonJS
      'sass-loader' // compiles Sass to CSS
      // 'postcss-loader' // add prefix
    ]
  })
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'index': './index.js',
    'vendor': ['react', 'react-router', 'react-dom', 'fastclick']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: loaders
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
        // root: path.join(__dirname, '/app/js-es6/'),
    modules: ['node_modules']
  },
  plugins: plugins,
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  externals: {
    'Config': JSON.stringify(isProduction() ? {
      serverURL: 'http://wzkc-server.herokuapp.com/api'
    } : {
      serverURL: 'http://localhost:5001/api'
    })
  }
}
