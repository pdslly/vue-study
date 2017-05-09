<template>
	<i :class="cname"><slot></slot></i>
</template>
<script>
	export default {
		name: "Icon",
		props: {
			type: {
				type: String,
				required: true,
				default: ""
			}
		},
		data(){
			let props = this.$props
			return {
				cname: `icon ion-${props.type}`
			}
		}
	}
</script>