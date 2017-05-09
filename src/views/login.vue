<template>
  	<div class="login-box-wrapper">
  		<div class="login-stamp"></div>
  		<div class="login-title">LOGIN</div>
  		<div class="login-input">
  			<input ref="account" type="text" placeholder="enter your acount" autocomplate/>
  		</div>
  		<div class="login-input">
  			<input ref="password" type="password" placeholder="enter your password" autocomplate/>
  		</div>
  		<button class="login-submit" @click="submit">SIGN IN</button>
  	</div>
</template>
<script>
	var cookie = require('../js/cookie.js')
	export default{
		created(){

		},
		methods:{
			submit(){
				const {account, password} = this.$refs;
				let 	me = this,
					act = $.trim(account.value),
					pwd = $.trim(password.value);

				if("" == act){
					$(account).addClass("error")
					return;
				}
				if("" == pwd){
					$(password).addClass("error")
					return;
				}
				$(account).removeClass("error")
				$(password).removeClass("error")

				$.ajax({
					url: "/userlogin",
					data: {account:act, password:pwd, remember:true},
					type: "post",
					dataType: "json",
					success: (data) => {
						if(data.status === '-OK'){
							me.$store.commit('setUserInfo', {token: data.token})
							me.$router.push({path: '/home'})
						}
					},
					error: (xhr, type) => {
						console.log('Ajax error! '+type)
					}
				})
			}
		}
	}
</script>
<style lang="sass">
	html,body{width:100%;height:100%;overflow:auto;}
	body{min-height:20rem;background:url(../assets/bg.jpg) center;background-size:cover cover;}
	.login-box-wrapper{
		position:absolute;
		width:80%;
		max-width:26rem;
		height:18rem;
		top:0;
		bottom:0;
		left:0;
		right:0;
		margin:auto;
		border-radius:30px;
		box-shadow:0 0 4px #ddd inset;
		background:rgba(0,0,0,.6);
	}
	.login-stamp{
		width:10%;
		height:2%;
		border-radius:.5rem;
		background:rgba(0,0,0,.3);
		box-shadow:0 0 4px rgba(255,255,255,.6);
		margin:1rem auto;
	}
	.login-title{
		font-size:1.5rem;
		width:100%;
		height:2rem;
		text-shadow:1px 1px 1px rgba(0,0,0,.6);
	}
	.login-submit,.login-title{
		font-family:"Times New Roman";
		text-align:center;
		line-height:2rem;
		font-weight:bold;
		letter-spacing:5px;
		color:#fff;
	}
	.login-input,.login-submit{
		width:80%;
		border-radius:20px;
		height:2rem;
		margin:1.5rem auto;
	}
	.login-input>input{
		width:100%;
		height:100%;
		text-indent:10px;
		border-radius:10px;
		border:1px solid transparent;
		font-size:.5rem;
	}
	.login-input>input.error{
		border:1px solid red;
	}
	.login-input>input:focus,.login-submit:focus{
		outline:none;
	}
	.login-submit{
		display:block;
		border:1px solid #658943;
		background:#92C46D;
		font-size:1rem;
		cursor:pointer;
		box-shadow:0 1px 2px rgba(255,255,255,.9) inset;
	}
</style>