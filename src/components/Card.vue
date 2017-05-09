<template>
	<div class="card">
		<div class="card_head">
			<span class="card_head_left"><slot name="title"><slot></span>
			<span class="card_head_right"><slot name="extra"><slot></span>
		</div>
		<div class="card_content">
			<slot name="content"><slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Card",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>
<style lang="sass">
	.card{
		width: 100%;
		border: 1px solid #C6C6C6;
		border-radius: 10px;
		overflow: hidden;
		.card_head{
			width: 100%;
			height: 2rem;
			line-height: 2rem;
			background: #BCBCBC;
			padding: 0 .5rem;
			.card_head_left{
				float:left;
			}
			.card_head_right{
				float:right;
			}
		}
		.card_content{
			text-indent: 10px;
			text-align: left;
			width: 100%;
			min-height: 5rem;
			padding: .25rem;
		}
	}
</style>