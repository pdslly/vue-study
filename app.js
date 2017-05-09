const 	app = require("express")(),
	colors = require("colors"),
	webpack = require("webpack"),
	http = require("http"),
	webpackConfig = process.env.NODE_ENV === "production"?require("./config/prod.config"):require("./config/dev.config"),
	compiler = webpack(webpackConfig),
	server = http.createServer(app),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	router = require('./router.js'),
	cookieParser = require('cookie-parser');

console.log("the current development environment is "+`${process.env.NODE_ENV}`.red)

const hotMiddleware = require("webpack-hot-middleware")(compiler)

compiler.plugin('compilation', function (compilation) {
  	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    	hotMiddleware.publish({ action: 'reload' })
    	cb()
  	})
})
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.use(require("connect-history-api-fallback")())
app.use(require("webpack-dev-middleware")(compiler, {
	publicPath: webpackConfig.output.publicPath,
	noInfo: true,
	stats: {
	        colors: true
    	}
}))

app.use(hotMiddleware)

module.exports = app.listen(process.env.PORT || 8080, (err) => {
	if(err){
		console.log(`${err}`.red)
		return;
	}
	console.log(`success started at port ${process.env.PORT || 8080}!!!`.green)
})