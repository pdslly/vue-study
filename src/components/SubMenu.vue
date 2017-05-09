<template>
	<li class="item middle-text" ref="el" :style="style">
		{{title}}
		<ul class="submenu">
			<slot :height="height"></slot>
		</ul>
	</li>
</template>
<script>
	export default {
		name: "Sub-Menu",
		props:{
			title: String
		},
		data(){
			let me = this
			return {
				title: `${me.$props.title}`,
				style: "",
				height: "",
			}
		},
		mounted(){
			let height = this.$refs.el.offsetHeight;
			this.$data.height = `${height}px`
		}
	}
</script>