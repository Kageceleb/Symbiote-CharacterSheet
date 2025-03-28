const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for a production build
  entry: './src/index.tsx', // Your main entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  devtool: 'inline-source-map', // For debugging
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
