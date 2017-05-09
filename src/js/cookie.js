module.exports = {
	getCookie(name){
		let 	cookie = document.cookie,
			patt = new RegExp(`${name}=([\\w]+)`);

		if(patt.test(cookie)) return RegExp.$1;
		return null
	}
}