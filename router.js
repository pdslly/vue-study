const express = require('express')
const router = express.Router()
const config = require('./config/config.js')

router.post('/userlogin', (req, res) => {
	let {account, password, remember} = req.body
	console.log(`帐号： ${account} 密码：${password}`)
	if(account == config.account && password == config.password){
		if(remember){
			res.cookie('cAccount', account, {maxAge:90000, expires: new Date(Date.now() + 90000)})
			res.cookie('cPassword', password, {maxAge:90000, expires: new Date(Date.now() + 90000)})
		}
		res.status(200).json({status: '-OK', msg: '登陆成功！', token: req.session.id})
	}else{
		res.status(200).json({status: '-ERR', msg: '帐号密码不匹配！'})
	}
})

module.exports = router