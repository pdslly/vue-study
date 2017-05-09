<script>
	export default {
		name: "Table",
		props: {
			data: {
				type: Object,
				default: {}
			}
		},
		data(){
			let me = this
			let props = this.$props
			return {
				cname: `${props.theme}`,
			}
		},
		render(h){
			let data = this.$props.data;
			return h("table", {class: "table"}, [
				h( "colgroup", data.title.map( () => h( 'col', { attrs: { width: '100' } }, '' ) ) ),
				h( "tr", { class: 'title' }, data.title.map( (name) => h( 'th', name ) ) ),
				data.data.map( (item) => h( 'tr', { style:{ background: `${item.color || 'inherit'}` } }, data.title.map( (name) => h( 'th', item[name] ) ) ) )
			])
		}
	}
</script>
<style lang="sass">
	.table{
		width: 100%;
		border-collapse: collapse;
		font-size: 12px;
		color: #657180;
		.title{
			background: #f5f7f9;
			font-size: 14px;
		}
		tr{
			border: 1px solid #D2D2D2;
			height: 48px;
			td,th{
				white-sapcing: nowrap;
			}
		}
	}
</style>