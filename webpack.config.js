import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
        {
            test: /\.s?[ac]ss/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader', 
                'sass-loader'
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }), 
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map'
};