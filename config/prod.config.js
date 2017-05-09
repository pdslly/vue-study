const 	merge = require("webpack-merge"),
	webpack = require("webpack"),
	baseWebpackConfig = require("./base.config.js");

Object.keys(baseWebpackConfig.entry).forEach((key) => {
	baseWebpackConfig.entry[key] = ["./config/prod.client"].concat(baseWebpackConfig.entry[key])
})

module.exports = merge(baseWebpackConfig, {
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: "'production'"
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
})