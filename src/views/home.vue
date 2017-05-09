<template>
	<Row>
		<Col span="2" class="home_left">
			<Card>
				<Icon type="calendar" slot="title">本站公告</Icon>
				<span @click="notice_modal = true"><Icon type="compose" slot="extra">编辑</Icon></span>
				<span slot="content">{{notice}}</span>
			</Card>
			<Card class="mt_10">
				<Icon type="compose" slot="title">最新文章</Icon>
				<span @click="article_refresh"><Icon type="refresh" slot="extra">刷新</Icon></span>
				<ul class="article_box" slot="content" ref="notice">
					<li v-for="(item, index) in getArticles" class="article_item" :title="item.title">{{item.title}}</li>
				</ul>
			</Card>
		</Col>
		<Col span="10" class="home_right">
			<Card class="article_list" v-for="(item, index) in articles">
				<Icon type="calendar" slot="title">{{item.title}}</Icon>
				<span @click="notice_modal = true"><Icon type="compose" slot="extra">查看</Icon></span>
				<span slot="content">{{item.content}}</span>
			</Card>
		</Col>
		<Modal v-model="notice_modal" title="编辑本站公告" :ok="ok" >
			<textarea ref="notice_edit" class="notice_edit" :value="notice"></textarea>
		</Modal>
	</Row>
</template>
<script>
	import Row from '../components/Row.vue'
	import Col from '../components/Col.vue'
	import Table from '../components/Table.vue'
	import Card from '../components/Card.vue'
	import Icon from '../components/Icon.vue'
	import Modal from '../components/Modal.vue'
	require('../css/home.scss')
	export default {
		name: "Home",
		created(){
			console.log(document.cookie)
		},
		data(){
			let me = this
			return {
				notice: me.$store.getters.getNotice,
				notice_modal: false,
				articles: me.$store.getters.getArticles,
				base: 0,
			}
		},
		methods:{
			ok(){
				this.notice = this.$refs.notice_edit.value
				this.$store.commit("setNotice", this.$refs.notice_edit.value)
			},
			article_refresh(){
				this.base+=5;
			}
		},
		computed:{
			getArticles(){
				let tmp = [], index = 0, len = this.articles.length;
				for( ; index < 5; index++){
					tmp[index] = this.articles[(this.base+index)%len]
				}
				return tmp;
			}
		},
		components: {
			Row,
			Col,
			Card,
			Icon,
			Modal
		}
	}
</script>