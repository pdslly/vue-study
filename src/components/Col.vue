<template>
	<div class="col" :class="cname"><slot></slot></div>
</template>
<script>
	export default {
		name: "Col",
		props: {
			span: {
				type: Number,
				default: 1,
				validator: function(val){
					return val > 0 && val < 13;
				}
			},
			offset: {
				type: Number,
				default: 0,
				validator: function(val){
					return val > 0 && val < 13;
				}
			},
		},
		data(){
			let props = this.$props
			return {
				cname: `span${props.span} offset${props.offset}`
			}
		}
	}
</script>
<style lang="sass">
	.col{
		display: inline-block;
		overflow: hidden;
		&.offset0{
			margin-left:  0;
		}
		&.offset1{
			margin-left:  8.33333%;
		}
		&.offset2{
			margin-left:  16.66666%;
		}
		&.offset3{
			margin-left:  25%;
		}
		&.offset4{
			margin-left:  33.33333%;
		}
		&.offset5{
			margin-left:  41.66666%;
		}
		&.offset6{
			margin-left:  50%;
		}
		&.offset7{
			margin-left:  58.33333%;
		}
		&.offset8{
			margin-left:  66.66666%;
		}
		&.offset9{
			margin-left:  75%;
		}
		&.offset10{
			margin-left:  83.33333%;
		}
		&.offset11{
			margin-left:  91.66666%;
		}
		&.span1{
			width: 8.33333%;
		}
		&.span2{
			width: 16.66666%;
		}
		&.span3{
			width: 25%;
		}
		&.span4{
			width: 33.33333%;
		}
		&.span5{
			width: 41.66666%;
		}
		&.span6{
			width: 50%;
		}
		&.span7{
			width: 58.33333%;
		}
		&.span8{
			width: 66.66666%;
		}
		&.span9{
			width: 75%;
		}
		&.span10{
			width: 83.33333%;
		}
		&.span11{
			width: 91.66666%;
		}
		&.span12{
			width: 100%;
		}
	}
</style>