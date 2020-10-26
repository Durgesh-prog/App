const webpack = require('webpack');
const path = require('path');
const Constants = require('./server/constants')
/* const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 */

module.exports = {
	mode:'development',
	entry:{
		app:'./src/index.js',
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'[name].bundle.js',
		publicPath:'/'
	},
	optimization: {
		 splitChunks: {
		   chunks: 'all',
		 },
    },
	module:{
		rules:[
		  {
			test:/\.js$/,
			exclude:/node_modules/,
			use:{
				loader:'babel-loader'
			}
		},
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		}
	]
  },
  devServer: {
	port:8000,
	contentBase:path.join(__dirname,'build'),
	proxy: {
		'/user/': {
		target:`http://localhost:${Constants.PORT}`
		}
	  },
	   historyApiFallback: true,
  },
  devtool:'source-map',
}