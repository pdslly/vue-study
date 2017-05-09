<template>
	<div class="nav" :class="cname"><slot></slot></div>
</template>
<script>
	export default {
		name: "Nav",
		props: {
			align: {
				type: String,
				validator(val){
					return ['center', 'left', 'right'] > -1;
				},
				default: "left"
			}
		},
		data(){
			let props = this.$props
			return {
				cname: `${props.align}`
			}
		}
	}
</script>