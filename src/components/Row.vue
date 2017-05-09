<template>
	<div class="row"><slot></slot></div>
</template>
<script>
	export default {
		name: "Row",
	}
</script>
<style lang="sass">
	.row{
		width: 100%;
		letter-spacing: -1em;
		&>*{
			letter-spacing: 0;
		}
	}
</style>