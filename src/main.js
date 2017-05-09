import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './main.vue'
import routes from './routers.js'
import store from './vuex/store.js'
import View from './depend/view.js'
const cookie = require('js/cookie.js')

Vue.use(View)
Vue.use(VueRouter)

var router = new VueRouter({
	mode: 'history',
	routes
})

/*router.beforeEach((to, from, next) => {
	if(to.fullPath === "/login"){
		next()
		return;
	}
	if(store.getters.getToken){
		next()
	}else{
		next({path: '/login'})
	}
})*/

new Vue({
	router,
	store,
	render:h => h(App)
}).$mount("#main")
