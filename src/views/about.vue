<template>
	<div id="about">
		<h1>{{name}}</h1>
	</div>
</template>
<script>
	export default {
		name: "About",
		data(){
			return {name: this.name}
		}
	}
</script>
<style lang="sass" scoped>
		html,body{height:100%;width:100%;}
</style>