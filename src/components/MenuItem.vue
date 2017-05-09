<template>
	<li class="item middle-text" :style="style"><slot></slot></li>
</template>
<script>
	export default {
		name: "Menu-item",
		props: {
			height: {
				type: String,
				default: "100%"
			}
		},
		data(){
			return {
				style: ""
			}
		},
		mounted(){
			this.$nextTick(() => {
				this.$data.style = `height:${this.$props.height};`
			})
		}
	}
</script>