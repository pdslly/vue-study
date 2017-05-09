const path = require("path"),
	  webpack = require("webpack"),
	  htmlWebpackPlugin = require("html-webpack-plugin"),
	  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:{
		"vendor": ['vue', 'vue-router', 'vuex', 'zepto'],
		"main": path.resolve(__dirname, "../src/main.js"),
	},
	output:{
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].js",
		publicPath: "/"
	},
	resolve:{
        // require时省略的扩展名，如：require('module') 不需要module.js
        	extensions: ['.js', '.vue'],
        	alias: {
            		js: "../src/js",
            		assets: "../src/assets",
            		views: "../src/views",
            		components: '../src/components',
            		css: "../src/css",
       	}
    	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: "vue-loader"
			},{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!postcss-loader!sass-loader"})
			},{
        				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        				loader: 'url-loader',
        				query: {
		          			limit: 10000,
		          			name: '[name].[hash:7].[ext]'
		    		}
		      	},{
		        		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        		loader: 'url-loader',
		        		query: {
		          			limit: 10000,
		          			name: '[name].[hash:7].[ext]'
		        		}
		   	 }
		]
	},
	plugins:[
		new ExtractTextPlugin("style.css"),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "../template.html")
		}),
		new webpack.ProvidePlugin({
		    "$": "zepto",
		    "Zepto": "zepto",
		    "window.Zepto": "zepto"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity,
		})
	]
}