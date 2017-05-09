<template>
	
</template>
<script>
	import Vue from 'vue'
	export default {
		name: "Modal",
		props: {
			value: {
				type: Boolean,
				require: true
			},
			title: {
				type: String,
				default: null
			},
			ok: {
				type: Function
			},
			cancel: {
				type: Function
			}
		},
		watch: {
			value(nVal, oVal){
				if( nVal ){
					this.$modal.$data.show = true;
					this.$modal.$data.title = this.title;
					this.$modal.$slots = this.$slots;
					this.$modal.$data.ok = this.ok;
					this.$modal.$data.cancel = this.cancel;
					this.$modal.$data.vue = this.$parent;
					document.body.style.cssText = 'overflow:hidden';
				}
				this.$emit('input', false)
			}
		}
	}
</script>
<style lang="sass">
	body{
		.modal_mask{
			position: fixed;
			z-index: 999999;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0,0,0,.4);
			text-align: center;
		}
		.modal_box{
			border-radius: 10px;
			overflow: hidden;
			display: inline-block;
			min-width: 20rem;
			min-height: 5rem;
			background: #fff;
			margin: 10rem auto;
			position: relative;
		}
		.modal_title{
			width: 100%;
			height: 2rem;
			border-bottom: 1px solid #D3D2D2;
			padding: 0 .5rem;
			line-height: 2rem;
			text-align: left;
		}
		.modal_close{
			position: absolute;
			top: .5rem;
			left: calc(100% - 1.1rem);
			display: block;
			width: 1rem;
			height: 1rem;
			cursor: pointer	;
			&:before{
				vertical-align: super;
			}
		},
		.modal_content{
			padding: .5rem;
		},
		.modal_ctrl{
			border-top: 1px solid #D3D2D2;
			width: 100%;
			padding: .5rem;
			text-align: right;
		}
		.modal_ctrl_ok{
			display: inline-block;
			width: 4rem;
			height: 2rem;
			line-height: 2rem;
			background: #2C85FE;
			border-radius: 6px;
			color: #fff;
			font-size: 16px;
			text-align: center;
			cursor: pointer;
		}
		.modal_ctrl_cancel{
			@extend .modal_ctrl_ok;
			color: #000;
			background: #D3D2D2;
			margin-right: 1rem;
		}
	}
</style>