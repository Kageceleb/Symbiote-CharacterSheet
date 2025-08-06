import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // If you're using HTML
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development', // or 'production' for a production build
  devtool: 'inline-source-map', // Good for debugging
  entry: './src/index.tsx', // Your main entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  devtool: 'inline-source-map', // For debugging
  devServer: {
    static: './dist', // Where to serve static files from
    hot: true, // Enable HMR (optional but recommended)
    open: true, // Open the browser automatically
    port: 8080, // Choose a port
    historyApiFallback: true, // For single-page apps with client-side routing
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template
    }),
  ],
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
