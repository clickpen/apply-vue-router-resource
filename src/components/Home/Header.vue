<template>
	<div class="hd">
		<my-changetitle @changetitl="changetit($event)" :tt="title1"></my-changetitle>
	</div>
</template>
<script>
import changetit from './Header/changetitle.vue'
export default{
	data () {
		return {
			title1: "Header-(我是可以点击的)"
		}
	},
	components: {
		'my-changetitle': changetit
	},
	methods: {
		changetit (e) {
			this.title1 = e
		}
	}
}
</script>
<style scoped>
.hd {
	width: 100%;
	padding: 10px;
	background-color: green;
	text-align: center;
}
.hd h3 {
	text-align: center;
	color: #424242;
}
</style>
