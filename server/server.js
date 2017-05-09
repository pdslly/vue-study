const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const router = require('./router.js')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

app.set('views', path.resolve(__dirname, './views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});

app.use(cookieParser())
app.use(router)

app.listen(5000, (err) => {
	if(err) throw new Error(err);
	console.log('server start at port: 5000')
})
