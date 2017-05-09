export default function view(vue){
	let box = document.createElement('div');

	box.style.display = "none";
	document.body.appendChild(box);

	let tpl = vue.extend({
		data(){
			return {
				show: false,
				title: null,
				vue: null,
				ok: null,
				cancel: null
			}
		},
		render: function(h){
			let me = this;
			return h( 'div', { style:{display: me.show?'block':'none'}, attrs:{class: 'modal_mask'} }, 
			           		[h( 'div', { attrs:{class: 'modal_box'} }, 
			           			[h( 'div', { style:{display: me.title?'block':'none'}, attrs:{class: 'modal_title'} }, me.title ), 
						h( 'i', { attrs:{class: 'modal_close ion-android-close'}, on:{click: me.close} }, '' ), 
						h( 'div', { attrs: {class: 'modal_content'} }, me.$slots.default ),
						h( 'div', { attrs: {class: 'modal_ctrl'} }, 
							[h( 'a', { attrs: {class: 'modal_ctrl_cancel'}, on:{click: me.cancelFn} }, 'CANCEL' ),
							h( 'a', { attrs: {class: 'modal_ctrl_ok'}, on:{click: me.okFn} }, 'OK' )] )])] ) 
		},
		methods: {
			closeFn(){
				this.show = false;
				document.body.style.cssText = '';
			},
			okFn(){
				this.show = false;
				document.body.style.cssText = '';
				if(typeof this.ok === 'function'){
					this.ok.call(this.vue)
				}
			},
			cancelFn(){
				this.show = false;
				document.body.style.cssText = '';
				if(typeof this.cancel === 'function'){
					this.cancel.call(this.vue)
				}
			}
		}
	})

	vue.prototype.$modal = new tpl().$mount(box)
}