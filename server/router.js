const express = require('express')
const router = express.Router()
const config = require('./config.js')

router.use((req, res, next) => {
	console.log(Date.now())
	next()
})

router.post('/user', (req, res) => {
	let {account, password} = req.body
	let {cAccount, cPassword} = req.cookies
	console.log(`帐号： ${account} 密码：${password}`)
	if(cAccount == config.account && cPassword == config.password){
		res.redirect('/home')
	}
	if(account == config.account && password == config.password){
		res.status(200).json({status: '-OK', msg: '登陆成功！'})
	}else{
		res.status(200).json({status: '-ERR', msg: '帐号密码不匹配！'})
	}
})

router.get('/', (req, res) => {
	res.header('Content-Type', 'text/html')
	res.status(200).render('index', {title: 'title'})
})

module.exports = router