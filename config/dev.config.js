const 	merge = require("webpack-merge"),
	webpack = require("webpack"),
	baseWebpackConfig = require("./base.config.js");

module.exports = merge(baseWebpackConfig, {
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: "'development'"
			}
		})
	]
})