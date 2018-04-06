<template>
	<div @click="changetitle">
		<h3>这里是Home的{{t = tt}}！</h3>
	</div>
</template>
<script>
export default {
	props: ["tt"],
	data () {
		return {
			t: ""
		}
	},
	methods: {
		changetitle () {
			this.$emit('changetitl','title改变了(还是别点了)')
		}
	}
}
</script>