const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
            		loader: 'url-loader'
			    }]
            }
        ]
    },
	plugins: [
	    new CleanWebpackPlugin(['dist']),
	    new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
  	]
};
