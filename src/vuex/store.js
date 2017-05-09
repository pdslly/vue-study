import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'

Vue.use(Vuex)

module.exports = new Vuex.Store({
	state: {
		userInfo: {},
		notice: "HELLO WORLD",
		articles: data.articles
	},
	getters: {
		getToken({userInfo}){
			return userInfo.token
		},
		getNotice({notice}){
			return notice
		},
		getArticles({articles}){
			return articles
		}
	},
	mutations: {
		setUserInfo(state, userInfo){
			state.userInfo = userInfo
		},
		setNotice(state, newNotice){
			state.notice = newNotice
		}
	},
	actions:  {
		setUserInfo({commit}, user){
			commit('setUserInfo', user)
		}
	}
})