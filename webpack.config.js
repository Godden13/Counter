const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './docs',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
