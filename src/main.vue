<template>
	<div class="container">
		<router-view name="nav" class="nav-box"></router-view>
		<router-view class="con"></router-view>
	</div>
</template>
<script>
	require('css/def.scss')
	require('css/components.scss')
	export default {
		name: 'MAIN'
	}
</script>
<style lang="sass">
</style>