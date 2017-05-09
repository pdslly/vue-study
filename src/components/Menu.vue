<template>
	<ul class="menu" :class="cname"><slot></slot></ul>
</template>
<script>
	export default {
		name: "Menu",
		props: {
			theme: {
				type: String,
				default: "theme1"
			}
		},
		data(){
			let props = this.$props
			return {
				cname: `${props.theme}`
			}
		}
	}
</script>