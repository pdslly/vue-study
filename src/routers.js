const Navigator = resolve => {
	require.ensure(['views/navigator.vue'], () => {
		resolve(require('views/navigator.vue'))
	})
}
const Login = resolve => {
	require.ensure(['views/login.vue'], () => {
		resolve(require('views/login.vue'))
	})
}
const Home = resolve => {
	require.ensure(['views/home.vue'], () => {
		resolve(require('views/home.vue'))
	})
}
const About = resolve => {
	require.ensure(['views/about.vue'], () => {
		resolve(require('views/about.vue'))
	})
}

module.exports = [
	{
		path: '/login',
		name: 'LOGIN',
		component: Login
	},
	{
		path: '/home',
		name: 'HOME',
		components:{
			nav: Navigator,
			default: Home
		} 
	},
	{
		path: '/about',
		name: 'ABOUT',
		components: {
			nav: Navigator,
			default: About
		}
	},
	{
		path: '*',
		name: 'DEFAULT',
		component: Login
	},
]