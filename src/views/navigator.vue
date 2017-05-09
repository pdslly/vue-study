<template>
	<Nav align="left">
		<Menu theme="theme2" bgcolor="#40C6FE" align="center">
			<router-link to="/home"><Menu-item>首页</Menu-item></router-link>
			<router-link to="/login"><Menu-item>登录</Menu-item></router-link>
			<router-link to="/about"><Menu-item>关于</Menu-item></router-link>
			<Sub-menu title="查看更多">
				<template scope="props">
					<router-link to="/about"><Menu-item :height="props.height">LINK</Menu-item></router-link>
					<router-link to="/about"><Menu-item :height="props.height">LINK</Menu-item></router-link>
					<router-link to="/about"><Menu-item :height="props.height">LINK</Menu-item></router-link>
					<router-link to="/about"><Menu-item :height="props.height">LINK</Menu-item></router-link>
				</template>
			</Sub-menu>
		</Menu>
	</Nav>
</template>
<script>
	import Nav from '../components/Nav.vue'
	import Menu from '../components/Menu.vue'
	import MenuItem from '../components/MenuItem.vue'
	import SubMenu from '../components/SubMenu.vue'
	export default {
		name: "Navigator",
		data(){
			return {name: this.name}
		},
		components:{
			Nav,
			Menu,
			MenuItem,
			SubMenu
		}
	}
</script>
<style lang="sass">
</style>